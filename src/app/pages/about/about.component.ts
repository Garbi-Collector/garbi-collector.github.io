import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router} from "@angular/router";

interface Technology {
  name: string;
  icon: string;
  years: number;
  projects: number;
  color: 'cyan' | 'pink' | 'purple';
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  cvUrl = "https://drive.google.com/file/d/1r0UIT5ANW_a9pX7ce-qt4wBbDwz691An/view?usp=sharing"; // Reemplazar con tu URL de Google Drive

  constructor(private router: Router) {}


  technologies: Technology[] = [
    {
      name: 'Java',
      icon: 'java',
      years: 4,
      projects: 4,
      color: 'pink',
      description: 'Microservicios y monolitos'
    },
    {
      name: 'Angular',
      icon: 'angular',
      years: 3,
      projects: 5,
      color: 'cyan',
      description: 'Aplicaciones web modernas'
    }
  ];

  openCV() {
    window.open(this.cvUrl, '_blank');
  }

  ToPageContact() {
    this.router.navigate(['/contact']);
  }

}
