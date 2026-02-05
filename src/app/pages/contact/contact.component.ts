import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environmentProd } from '../../../environments/environment.prod';


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;


  // Configuración de EmailJS

  private readonly EMAILJS_PUBLIC_KEY = environmentProd.emailjs.publicKey;
  private readonly EMAILJS_SERVICE_ID = environmentProd.emailjs.serviceId;
  private readonly EMAILJS_TEMPLATE_ID = environmentProd.emailjs.templateId;

  // Datos de contacto
  linkedinUrl = "https://www.linkedin.com/in/victor-gabriel-castillo-scipioni/";
  githubUrl = "https://github.com/Garbi-Collector";
  email = "gabriel.scipioni21@gmail.com";

  subjectOptions = [
    { value: 'job', label: 'Oportunidad laboral' },
    { value: 'project', label: 'Consulta de proyecto' },
    { value: 'collaboration', label: 'Colaboración' },
    { value: 'other', label: 'Otro' }
  ];

  readonly MIN_MESSAGE_LENGTH = 10;
  readonly MAX_MESSAGE_LENGTH = 1000;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]],
      subject: ['', Validators.required],
      message: ['', [
        Validators.required,
        Validators.minLength(this.MIN_MESSAGE_LENGTH),
        Validators.maxLength(this.MAX_MESSAGE_LENGTH)
      ]]
    });

    // Inicializar EmailJS
    emailjs.init(this.EMAILJS_PUBLIC_KEY);
  }

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get subjectControl() {
    return this.contactForm.get('subject');
  }

  get messageControl() {
    return this.contactForm.get('message');
  }

  get messageLength(): number {
    return this.messageControl?.value?.length || 0;
  }

  get messageRemaining(): number {
    return this.MAX_MESSAGE_LENGTH - this.messageLength;
  }

  getEmailError(): string {
    if (this.emailControl?.hasError('required')) {
      return 'El email es obligatorio';
    }
    if (this.emailControl?.hasError('email')) {
      return 'Email inválido';
    }
    if (this.emailControl?.hasError('maxlength')) {
      return 'Email muy largo';
    }
    return '';
  }

  getMessageError(): string {
    if (this.messageControl?.hasError('required')) {
      return 'El mensaje es obligatorio';
    }
    if (this.messageControl?.hasError('minlength')) {
      return `Mínimo ${this.MIN_MESSAGE_LENGTH} caracteres`;
    }
    if (this.messageControl?.hasError('maxlength')) {
      return `Máximo ${this.MAX_MESSAGE_LENGTH} caracteres`;
    }
    return '';
  }

  private sanitizeInput(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim();
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formData: ContactFormData = {
      name: this.sanitizeInput(this.contactForm.value.name),
      email: this.sanitizeInput(this.contactForm.value.email),
      subject: this.contactForm.value.subject,
      message: this.sanitizeInput(this.contactForm.value.message)
    };

    this.sendEmail(formData);
  }

  private sendEmail(data: ContactFormData) {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: this.getSubjectLabel(data.subject),
      message: data.message,
      to_email: this.email
    };

    emailjs.send(
      this.EMAILJS_SERVICE_ID,
      this.EMAILJS_TEMPLATE_ID,
      templateParams
    ).then(
      (response) => {
        console.log('Email enviado exitosamente', response.status, response.text);
        this.isSubmitting = false;
        this.submitSuccess = true;

        setTimeout(() => {
          this.contactForm.reset();
          this.submitSuccess = false;
        }, 3000);
      },
      (error) => {
        console.error('Error al enviar email', error);
        this.isSubmitting = false;
        this.submitError = true;

        setTimeout(() => {
          this.submitError = false;
        }, 5000);
      }
    );
  }

  private getSubjectLabel(value: string): string {
    const option = this.subjectOptions.find(opt => opt.value === value);
    return option ? option.label : 'Contacto';
  }

  openLinkedIn() {
    window.open(this.linkedinUrl, '_blank');
  }

  openGitHub() {
    window.open(this.githubUrl, '_blank');
  }

  openEmail() {
    window.location.href = `mailto:${this.email}`;
  }
}
