import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from "../../modal/service/Modal.service";
import {
  ExperienceDetailModalComponent
} from "../../modal/modals/experience-detail-modal/experience-detail-modal.component";
import {
  EducationDetailModalComponent
} from "../../modal/modals/education-detail-modal/education-detail-modal.component";

export interface Technology {
  name: string;
  color: 'cyan' | 'cyan' | 'cyan';
}

export interface Experience {
  id: string;
  company: string;
  logo: string; // URL o path del logo
  position: string;
  startDate: string;
  endDate: string;
  technologies: Technology[];
  shortDescription: string;
  detailedDescription: string;
}

export interface Education {
  id: string;
  institution: string;
  logo: string;
  title: string;
  startDate: string;
  endDate: string;
  status: 'completed' | 'in-progress';
  description: string;
  certificateUrl?: string;
  institutionUrl?: string;
  repositoryUrl?: string;
}

type ViewMode = 'experience' | 'education';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  currentView: ViewMode = 'experience';

  experiences: Experience[] = [
    {
      id: 'el-condor',
      company: 'El Cóndor',
      logo: 'assets/img/villa_del_condor.png',
      position: 'Desarrollador FullStack',
      startDate: 'Julio 2024',
      endDate: 'Diciembre 2024',
      technologies: [
        { name: 'Spring', color: 'cyan' },
        { name: 'Angular', color: 'cyan' },
        { name: 'Docker', color: 'cyan' },
        { name: 'MySQL', color: 'cyan' },
        { name: 'MinIO', color: 'cyan' }
      ],
      shortDescription: 'Sistema de gestión de un barrio privado',
      detailedDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

En este proyecto, desarrollé funcionalidades clave para la gestión integral del barrio privado, incluyendo módulos de administración, control de accesos, y sistemas de notificaciones.`
    },
    {
      id: 'soundtribe',
      company: 'SoundTribe',
      logo: 'assets/img/soundtribe.png',
      position: 'Desarrollador FullStack',
      startDate: 'Diciembre 2024',
      endDate: 'Agosto 2025',
      technologies: [
        { name: 'Spring', color: 'cyan' },
        { name: 'Angular', color: 'cyan' },
        { name: 'Docker', color: 'cyan' },
        { name: 'MySQL', color: 'cyan' },
        { name: 'MinIO', color: 'cyan' }
      ],
      shortDescription: 'Red social para escuchar y compartir música',
      detailedDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo quam vel sapien tincidunt, at varius nunc tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Desarrollé una plataforma completa de red social enfocada en la experiencia musical, con features de streaming, playlists compartidas, y sistema de recomendaciones basado en algoritmos de machine learning.

Implementé arquitectura de microservicios escalable capaz de manejar miles de usuarios concurrentes.`
    },
    {
      id: 'stokea2',
      company: 'Stokea2',
      logo: 'assets/img/Stokea2.png',
      position: 'Desarrollador FullStack',
      startDate: 'Noviembre 2025',
      endDate: 'Enero 2026',
      technologies: [
        { name: 'Node.js', color: 'cyan' },
        { name: 'Angular', color: 'cyan' },
        { name: 'Electron', color: 'cyan' },
        { name: 'MySQL', color: 'cyan' }
      ],
      shortDescription: 'Aplicación de escritorio para gestión de un negocio',
      detailedDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras porttitor purus ac dolor vehicula, in aliquet nisi tempor.

Creé una aplicación de escritorio multiplataforma usando Electron y Angular, optimizada para gestión de inventario, ventas, y reportes en tiempo real.

La aplicación incluye sincronización offline-first y generación automática de reportes financieros.`
    }
  ];

  educations: Education[] = [
    {
      id: 'utn-frc',
      institution: 'UTN-FRC',
      logo: 'assets/img/utn.jpg',
      title: 'Tecnicatura Universitaria en Programación',
      startDate: 'Febrero 2023',
      endDate: 'Agosto 2025',
      status: 'completed',
      description: `La Tecnicatura Universitaria en Programación de la UTN-FRC es una carrera de grado universitario enfocada en formar profesionales capacitados para el desarrollo de software.

Durante la carrera, adquirí conocimientos profundos en algoritmos, estructuras de datos, programación orientada a objetos, bases de datos, desarrollo web, y metodologías ágiles.

El programa incluye materias de matemática, lógica, y fundamentos de la computación, complementadas con proyectos prácticos integradores.`,
      certificateUrl: 'https://drive.google.com/file/d/1AATQ2hry5IZ35M3iCNMZ6g6uV-x0nJ5c/view?usp=sharing',
      institutionUrl: 'https://www.frc.utn.edu.ar/secretarias/academica/tecnicaturas/programacion/'
    },
    {
      id: 'mercadolibre-ai',
      institution: 'Mercado Libre',
      logo: 'assets/img/meli.png',
      title: 'Charlas sobre Inteligencia Artificial',
      startDate: 'Noviembre 2024',
      endDate: 'Noviembre 2024',
      status: 'completed',
      description: `Evento organizado con trabajadores de Mercado Libre donde discutimos sobre la potencia, los pros y contras de la inteligencia artificial en el desarrollo de software moderno.

Se abordaron temas como:
- Impacto de la IA en el desarrollo de productos
- Herramientas de IA para productividad
- Ética y responsabilidad en el uso de IA
- Casos de uso reales en Mercado Libre

Fue una experiencia enriquecedora que me permitió conocer cómo empresas líderes implementan IA en sus procesos.`
    },
    {
      id: 'advent-of-code',
      institution: 'Advent of Code',
      logo: 'assets/img/AoC.png',
      title: 'Evento de Advent of Code',
      startDate: 'Diciembre 2025',
      endDate: 'Diciembre 2025',
      status: 'completed',
      description: `Advent of Code es un evento anual que presenta desafíos de programación diarios durante diciembre, con temática navideña.

Participé resolviendo problemas algorítmicos complejos que requieren:
- Pensamiento lógico y matemático
- Optimización de algoritmos
- Estructuras de datos eficientes
- Análisis de complejidad

Esta experiencia fortaleció mis habilidades de problem-solving y me expuso a diferentes paradigmas de programación.`,
      repositoryUrl: 'https://github.com/Garbi-Collector/Advent-of-code',
      institutionUrl: 'https://adventofcode.com'
    }
  ];

  constructor(private modalService: ModalService) {}

  switchView(view: ViewMode): void {
    this.currentView = view;
  }

  openExperienceDetail(experience: Experience): void {
    this.modalService.open(ExperienceDetailModalComponent, {
      draggable: true,
      closeButton: true,
      closeOnBackdropClick: true,
      animation: true,
      maxWidth: '800px',
      data: experience
    });
  }

  openEducationDetail(education: Education): void {
    this.modalService.open(EducationDetailModalComponent, {
      draggable: true,
      closeButton: true,
      closeOnBackdropClick: true,
      animation: true,
      maxWidth: '800px',
      data: education
    });
  }
}
