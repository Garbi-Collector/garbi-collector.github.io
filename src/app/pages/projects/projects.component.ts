import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from "../../modal/service/Modal.service";
import {ProjectDetailModalComponent} from "../../modal/modals/project-detail-modal/project-detail-modal.component";
import {SoundtribeModalComponent} from "../../modal/modals/soundtribe-modal/soundtribe-modal.component";

export interface Technology {
  name: string;
  color: 'cyan' | 'pink' | 'purple' | 'yellow' | 'green';
}

export interface ProjectLink {
  demo?: string;
  video?: string;
  code?: string;
}

export interface Project {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  technologies: Technology[];
  links: ProjectLink;
  isPrivate?: boolean;
  developmentTime?: string;
  type?: 'main' | 'side';
}

export interface Microservice {
  name: string;
  description: string;
  technologies: Technology[];
  links: ProjectLink;
}

type ViewMode = 'main' | 'side';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  currentView: ViewMode = 'main';

  mainProjects: Project[] = [
    {
      id: 'el-condor',
      name: 'El Cóndor',
      icon: 'building',
      shortDescription: 'Sistema de gestión integral para barrio privado',
      fullDescription: `Aplicación privada desarrollada para la gestión completa de un barrio privado.

El sistema incluye módulos de administración, control de accesos, gestión de residentes, sistema de notificaciones, manejo de documentación y reportes en tiempo real.

Implementa arquitectura de microservicios con alta disponibilidad y escalabilidad, garantizando la seguridad y privacidad de los datos de los residentes.`,
      technologies: [
        { name: 'Java', color: 'cyan' },
        { name: 'Angular', color: 'pink' },
        { name: 'Spring', color: 'cyan' },
        { name: 'Spring Boot', color: 'cyan' },
        { name: 'MySQL', color: 'purple' },
        { name: 'MinIO', color: 'yellow' },
        { name: 'Docker', color: 'cyan' }
      ],
      links: {},
      isPrivate: true,
      type: 'main'
    },
    {
      id: 'soundtribe',
      name: 'SoundTribe',
      icon: 'music',
      shortDescription: 'Red social para escuchar y compartir música',
      fullDescription: `Plataforma completa de red social enfocada en la experiencia musical. Permite a los usuarios descubrir, compartir y disfrutar música en comunidad.

Arquitectura basada en microservicios independientes que gestionan diferentes aspectos de la aplicación: usuarios, música, notificaciones y donaciones.

Sistema de streaming de audio, playlists personalizadas, sistema de seguimiento entre usuarios, y funcionalidades sociales avanzadas.`,
      technologies: [
        { name: 'Spring', color: 'cyan' },
        { name: 'Java', color: 'cyan' },
        { name: 'Angular', color: 'pink' },
        { name: 'MySQL', color: 'purple' },
        { name: 'MinIO', color: 'yellow' },
        { name: 'Spring Security', color: 'green' },
        { name: 'JWT', color: 'pink' }
      ],
      links: {
        demo: 'https://garbi-collector.github.io/SOUNDTRIBE-FrontEnd/inicio',
        video: 'https://youtu.be/m7ZljS60k5U?si=536rledp1ylVgrsp',
        code: 'https://github.com/Garbi-Collector/SOUNDTRIBE-FrontEnd'
      },
      type: 'main'
    },
    {
      id: 'stokea2',
      name: 'Stokea2',
      icon: 'desktop',
      shortDescription: 'Aplicación de escritorio para gestión de negocios',
      fullDescription: `Aplicación de escritorio multiplataforma desarrollada con Electron y Angular, diseñada para la gestión integral de pequeños y medianos negocios.

Incluye control de inventario en tiempo real, sistema de ventas con punto de venta (POS), gestión de clientes y proveedores, generación automática de reportes financieros y gráficos estadísticos.

Funciona completamente offline con sincronización opcional cuando hay conexión a internet, garantizando la continuidad del negocio en cualquier circunstancia.`,
      technologies: [
        { name: 'Electron', color: 'cyan' },
        { name: 'Angular', color: 'pink' },
        { name: 'Node.js', color: 'green' },
        { name: 'MySQL', color: 'purple' },
        { name: 'TypeScript', color: 'cyan' }
      ],
      links: {
        demo: 'https://garbi-collector.github.io/stokea2/inicio',
        code: 'https://github.com/Garbi-Collector/stokea2'
      },
      type: 'main'
    }
  ];

  sideProjects: Project[] = [
    {
      id: 'advent-of-code',
      name: 'Advent of Code',
      icon: 'calendar',
      shortDescription: 'Desafíos de programación del 1-12 de diciembre 2025',
      fullDescription: `Soluciones a los desafíos diarios de Advent of Code, un evento anual que presenta problemas algorítmicos complejos con temática navideña.

Cada día presenta un nuevo desafío que requiere pensamiento lógico, matemático y optimización de algoritmos. Las soluciones están implementadas en Java utilizando diferentes estructuras de datos y patrones de diseño.

Excelente práctica para mejorar habilidades de problem-solving y análisis de complejidad algorítmica.`,
      technologies: [
        { name: 'Java', color: 'cyan' },
        { name: 'Algoritmos', color: 'purple' },
        { name: 'Estructuras de Datos', color: 'pink' }
      ],
      links: {
        code: 'https://github.com/Garbi-Collector/Advent-of-code'
      },
      developmentTime: '1-12 Diciembre 2025',
      type: 'side'
    },
    {
      id: 'chordle',
      name: 'Chordle',
      icon: 'game',
      shortDescription: 'Juego de palabras inspirado en Wordle',
      fullDescription: `Juego web interactivo inspirado en Wordle, desarrollado completamente en un solo día como desafío personal.

Los jugadores deben adivinar una palabra de 5 letras en 6 intentos. El juego proporciona feedback visual con colores para indicar letras correctas en la posición correcta (verde), letras correctas en posición incorrecta (amarillo), y letras que no están en la palabra (gris).

Incluye animaciones suaves, teclado virtual interactivo, y sistema de estadísticas locales.`,
      technologies: [
        { name: 'Angular', color: 'pink' },
        { name: 'TypeScript', color: 'cyan' },
        { name: 'CSS Animations', color: 'purple' }
      ],
      links: {
        demo: 'https://garbi-collector.github.io/Chordle/',
        code: 'https://github.com/Garbi-Collector/Chordle'
      },
      developmentTime: '22 Enero 2026 (1 día)',
      type: 'side'
    },
    {
      id: 'radish-open-radio',
      name: 'Radish Open Radio',
      icon: 'radio',
      shortDescription: 'Web app para escuchar radios de todo el mundo',
      fullDescription: `Aplicación web que permite escuchar estaciones de radio de todo el mundo en tiempo real. Desarrollada en 3 días como proyecto de aprendizaje de APIs de audio.

Integra la API de Radio Browser para acceder a miles de estaciones de radio globales. Los usuarios pueden buscar por país, género, idioma o nombre de la estación.

Incluye reproductor de audio personalizado, lista de favoritos guardada localmente, y visualizador de metadata en tiempo real (nombre de la canción, artista, etc.).`,
      technologies: [
        { name: 'Angular', color: 'pink' },
        { name: 'TypeScript', color: 'cyan' },
        { name: 'Radio Browser API', color: 'green' },
        { name: 'Web Audio API', color: 'purple' }
      ],
      links: {
        demo: 'https://garbi-collector.github.io/RadishOpenRadio/',
        code: 'https://github.com/Garbi-Collector/RadishOpenRadio'
      },
      developmentTime: '27-29 Enero 2026 (3 días)',
      type: 'side'
    },
    {
      id: 'radishbot-discord',
      name: 'RadishBot Discord',
      icon: 'bot',
      shortDescription: 'Bot de Discord para escuchar radios',
      fullDescription: `Bot de Discord que lleva la funcionalidad de Radish Open Radio a los servidores de Discord, permitiendo a los usuarios escuchar radio directamente en canales de voz.

El bot responde a comandos para buscar y reproducir estaciones de radio en canales de voz. Incluye comandos para controlar la reproducción (play, pause, stop, skip), buscar estaciones, y gestionar una cola de reproducción.

Desarrollado en Node.js utilizando Discord.js y la API de Radio Browser.`,
      technologies: [
        { name: 'Node.js', color: 'green' },
        { name: 'Discord.js', color: 'purple' },
        { name: 'JavaScript', color: 'yellow' },
        { name: 'Radio Browser API', color: 'cyan' }
      ],
      links: {
        code: 'https://github.com/Garbi-Collector/Radish-bot'
      },
      developmentTime: '1 Febrero 2026 (1 día)',
      type: 'side'
    },
    {
      id: 'kiwiqr',
      name: 'KiwiQR',
      icon: 'qrcode',
      shortDescription: 'Generador de códigos QR personalizable',
      fullDescription: `Aplicación web simple y eficiente para generar códigos QR personalizables. Desarrollada en un día como herramienta de utilidad.

Permite generar códigos QR a partir de texto, URLs, información de contacto, datos WiFi, y más. Los usuarios pueden personalizar el tamaño, color, y nivel de corrección de errores.

Los códigos generados se pueden descargar en formato PNG con alta calidad, listos para imprimir o compartir digitalmente.`,
      technologies: [
        { name: 'Angular', color: 'pink' },
        { name: 'TypeScript', color: 'cyan' },
        { name: 'QR Code Library', color: 'green' }
      ],
      links: {
        demo: 'https://garbi-collector.github.io/KiwiQR/',
        code: 'https://github.com/Garbi-Collector/KiwiQR'
      },
      developmentTime: '1 día',
      type: 'side'
    }
  ];

  constructor(private modalService: ModalService) {}

  switchView(view: ViewMode): void {
    this.currentView = view;
  }

  openProjectDetail(project: Project): void {
    // Si es SoundTribe, abrir modal especial con microservicios
    if (project.id === 'soundtribe') {
      this.modalService.open(SoundtribeModalComponent, {
        draggable: true,
        closeButton: true,
        closeOnBackdropClick: true,
        animation: true,
        maxWidth: '900px',
        data: project
      });
    } else {
      // Para otros proyectos, modal normal
      this.modalService.open(ProjectDetailModalComponent, {
        draggable: true,
        closeButton: true,
        closeOnBackdropClick: true,
        animation: true,
        maxWidth: '800px',
        data: project
      });
    }
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'building': 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4',
      'music': 'M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
      'desktop': 'M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 21h8M12 17v4',
      'calendar': 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z M8 14h.01 M12 14h.01 M16 14h.01 M8 18h.01 M12 18h.01 M16 18h.01',
      'game': 'M2 6v6a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6Z M6 8h4 M8 6v4 M16 8h.01 M20 12h.01',
      'radio': 'M4.9 19.1C1 15.2 1 8.8 4.9 4.9M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5M15.2 7.8c2.3 2.3 2.3 6.1 0 8.5M19.1 4.9c3.9 3.9 3.9 10.3 0 14.2M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
      'bot': 'M12 8V4H8M16 8V4h4M8 18h.01M16 18h.01M9 12h6M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z',
      'qrcode': 'M3 7h6v6H3V7zm0 12h6v-6H3v6zm12 0h6v-6h-6v6zm0-12h6V1h-6v6z M13 13h2v2h-2v-2z M17 9h2v2h-2V9z M9 17h2v2H9v-2z M5 5h2v2H5V5z M5 17h2v2H5v-2z M17 17h2v2h-2v-2z'
    };
    return icons[iconName] || icons['building'];
  }
}
