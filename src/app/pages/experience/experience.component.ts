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
      shortDescription: 'Sistema de gestión para barrio privado',
      detailedDescription: `Desarrollé funcionalidades clave para un sistema de gestión destinado a la administración de un barrio privado, enfocado en la organización de residentes, control de accesos y automatización de procesos administrativos.

Trabajé en el desarrollo fullstack utilizando Spring Boot y Angular, implementando módulos para:

➧ Gestión de expensas

➧ Administración de datos del barrio

➧ Sistema de notificaciones internas

También participé en la configuración del entorno de despliegue con Docker, la integración con MySQL para persistencia de datos, y el uso de MinIO para almacenamiento de archivos.

Este proyecto me permitió trabajar con una arquitectura web completa, desde la lógica de negocio en el backend hasta la interfaz de usuario en el frontend.`
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
      shortDescription: 'Red social orientada a la experiencia musical',
      detailedDescription: `Desarrollé una plataforma tipo red social centrada en la experiencia musical, donde los usuarios pueden subir canciones, crear albumes, interactuar con otros perfiles y descubrir nuevo contenido.

El sistema fue construido con una arquitectura backend en Spring Boot y frontend en Angular, incluyendo:

➧ Sistema de autenticación con JWT

➧ Gestión de usuarios, perfiles y fotos

➧ Subida y reproducción de canciones

➧ Creación y administración de playlists

➧ Interacción social entre usuarios

Implementé almacenamiento de archivos utilizando MinIO y base de datos MySQL.
También trabajé en la contenerización del sistema con Docker, preparando la aplicación para entornos escalables y futuros microservicios.

Este proyecto fue clave para profundizar en:

➧ Arquitecturas de microservicios backend con Spring

➧ Seguridad con JWT

➧ Manejo de archivos y almacenamiento distribuido

➧ Diseño de APIs REST completas`
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
      shortDescription: 'Aplicación de escritorio para gestión comercial',
      detailedDescription: `Desarrollé una aplicación de escritorio multiplataforma orientada a la gestión de un negocio, incluyendo control de inventario, ventas y generación de reportes.

La aplicación fue construida utilizando:

➧ Angular para la interfaz

➧ Electron para empaquetado como aplicación de escritorio

➧ Node.js para la lógica backend

➧ MySQL como base de datos

Entre las principales funcionalidades implementadas:

➧ Gestión de productos e inventario

➧ Registro de ventas

➧ Generación de reportes financieros

➧ Interfaz optimizada para uso diario en entornos comerciales

Este proyecto me permitió trabajar en:

➧ Desarrollo de aplicaciones de escritorio con tecnologías web

➧ Integración entre frontend y backend en entornos locales

➧ Optimización de flujos de trabajo para usuarios no técnicos`
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
      description: `Carrera universitaria orientada a la formación de desarrolladores de software, con énfasis en fundamentos de programación, algoritmos y desarrollo de sistemas.

Durante la tecnicatura adquirí conocimientos en:

➧ Programación orientada a objetos

➧ Algoritmos y estructuras de datos

➧ Bases de datos relacionales

➧ Desarrollo web

➧ Metodologías ágiles

➧ Lógica y fundamentos matemáticos

La carrera combinó teoría y proyectos prácticos, lo que me permitió desarrollar aplicaciones reales y fortalecer mis habilidades de resolución de problemas.`,
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
      description: `Participé en un evento organizado por profesionales de Mercado Libre enfocado en el impacto de la inteligencia artificial en el desarrollo de software moderno.

Durante las charlas se abordaron temas como:

➧ Uso de IA en productos reales

➧ Herramientas de asistencia para desarrolladores

➧ Ética y responsabilidad en sistemas inteligentes

➧ Tendencias del mercado tecnológico

Esta experiencia me permitió conocer prácticas y perspectivas de una empresa líder en tecnología en Latinoamérica.`
    },
    {
      id: 'advent-of-code',
      institution: 'Advent of Code',
      logo: 'assets/img/AoC.png',
      title: 'Evento de Advent of Code',
      startDate: 'Diciembre 2025',
      endDate: 'Diciembre 2025',
      status: 'completed',
      description: `Participé en el evento anual Advent of Code, resolviendo desafíos diarios de programación enfocados en lógica, algoritmos y optimización.

Durante el evento trabajé en problemas que requerían:

➧ Análisis de complejidad

➧ Uso eficiente de estructuras de datos

➧ Pensamiento algorítmico

➧ Resolución de problemas paso a paso

Esta experiencia fortaleció mis habilidades técnicas y mi capacidad para enfrentar problemas complejos de programación.`,
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
