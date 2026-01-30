import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from "../../components/social-button/social-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SocialButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  linkedinUrl = "https://www.linkedin.com/in/victor-gabriel-castillo-scipioni/";
  githubUrl = "https://github.com/Garbi-Collector";
  youtubeUrl = "https://www.youtube.com/channel/UCsXf368oEb5Ul7XukUAxHVg";

  titleinit: string = "Desarrollador ";
  titles: string[] = [
    'FullStack',
    'BackEnd',
    'Frontend',
    'De Videojuegos'
  ];

  typedText = '';
  currentIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private typeTimeout: any;

  isMobile = false;

  ngOnInit() {
    this.checkIfMobile();
    this.typeEffect();

    // ✅ Opcional: Escuchar cambios de tamaño de ventana
    window.addEventListener('resize', this.checkIfMobile.bind(this));
  }

  ngOnDestroy() {
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
    }

    // ✅ Limpiar event listener
    window.removeEventListener('resize', this.checkIfMobile.bind(this));
  }

  checkIfMobile() {
    // Considera móvil si el ancho es <= 968px (mismo breakpoint que tu CSS)
    this.isMobile = window.innerWidth <= 968;
  }

  typeEffect() {
    const current = this.titles[this.currentIndex];

    if (!this.isDeleting) {
      this.typedText = current.substring(0, this.charIndex++);
    } else {
      this.typedText = current.substring(0, this.charIndex--);
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length + 1) {
      speed = 1500;
      this.isDeleting = true;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      speed = 300;
    }

    this.typeTimeout = setTimeout(() => this.typeEffect(), speed);
  }
}
