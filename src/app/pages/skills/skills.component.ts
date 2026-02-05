import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  icon?: string; // Nombre del icono o clase
  color: 'cyan' | 'pink' | 'purple' | 'yellow' | 'green';
  proficiency?: number; // Opcional: 1-5
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: 'cyan' | 'pink' | 'purple' | 'yellow' | 'green';
  skills: Skill[];
}

type ViewMode = 'skills' | 'tools';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  currentView: ViewMode = 'skills';

  skillCategories: SkillCategory[] = [
    {
      id: 'backend',
      title: 'Backend',
      icon: 'server',
      color: 'cyan',
      skills: [
        { name: 'Java', icon: 'coffee', color: 'cyan' },
        { name: 'Spring Boot', icon: 'leaf', color: 'cyan' },
        { name: 'Spring Security', icon: 'shield', color: 'cyan' },
        { name: 'REST APIs', icon: 'cloud', color: 'pink' },
        { name: 'JWT', icon: 'key', color: 'pink' },
        { name: 'Microservices', icon: 'boxes', color: 'cyan' },
        { name: 'JPA / Hibernate', icon: 'database-link', color: 'cyan' }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: 'monitor',
      color: 'pink',
      skills: [
        { name: 'Angular', icon: 'angular', color: 'pink' },
        { name: 'TypeScript', icon: 'code-brackets', color: 'cyan' },
        { name: 'JavaScript', icon: 'javascript', color: 'yellow' },
        { name: 'HTML', icon: 'html', color: 'pink' },
        { name: 'CSS / SCSS', icon: 'palette', color: 'cyan' }
      ]
    },
    {
      id: 'database',
      title: 'Base de Datos',
      icon: 'database',
      color: 'cyan',
      skills: [
        { name: 'MySQL', icon: 'database', color: 'cyan' },
        { name: 'SQL', icon: 'table', color: 'cyan' }
      ]
    },
    {
      id: 'architecture',
      title: 'Arquitectura & Patrones',
      icon: 'layers',
      color: 'green',
      skills: [
        { name: 'Clean Architecture', icon: 'building', color: 'green' },
        { name: 'SOLID', icon: 'cube', color: 'cyan' },
        { name: 'MVC', icon: 'triangle', color: 'pink' },
        { name: 'Authentication & Authorization', icon: 'lock', color: 'cyan' },
        { name: 'CRUD Design', icon: 'grid', color: 'yellow' },
        { name: 'API Design', icon: 'network', color: 'cyan' }
      ]
    }
  ];

  toolCategories: SkillCategory[] = [
    {
      id: 'version-control',
      title: 'Control de Versiones',
      icon: 'git-branch',
      color: 'pink',
      skills: [
        { name: 'Git', icon: 'git', color: 'pink' },
        { name: 'GitHub', icon: 'github', color: 'cyan' }
      ]
    },
    {
      id: 'development',
      title: 'Desarrollo',
      icon: 'code',
      color: 'cyan',
      skills: [
        { name: 'IntelliJ IDEA', icon: 'brain', color: 'cyan' },
        { name: 'VS Code', icon: 'terminal', color: 'pink' },
        { name: 'WebStorm', icon: 'storm', color: 'cyan' }
      ]
    },
    {
      id: 'backend-testing',
      title: 'Backend & Testing',
      icon: 'test-tube',
      color: 'cyan',
      skills: [
        { name: 'Postman', icon: 'send', color: 'pink' },
        { name: 'Maven', icon: 'package', color: 'cyan' }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps / Entorno',
      icon: 'server',
      color: 'green',
      skills: [
        { name: 'Docker', icon: 'container', color: 'cyan' },
        { name: 'Linux (Ubuntu)', icon: 'terminal-square', color: 'yellow' },
        { name: 'Windows', icon: 'window', color: 'cyan' },
        { name: 'npm', icon: 'npm', color: 'pink' }
      ]
    }
  ];

  constructor() {}

  switchView(view: ViewMode): void {
    this.currentView = view;
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'server': 'M4 6h16M4 10h16M4 14h16M4 18h16M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z',
      'monitor': 'M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8 21h8M12 17v4',
      'database': 'M12 2c-4.418 0-8 1.79-8 4v12c0 2.21 3.582 4 8 4s8-1.79 8-4V6c0-2.21-3.582-4-8-4zM12 14c-4.418 0-8-1.79-8-4M12 10c-4.418 0-8-1.79-8-4',
      'layers': 'M2 12l10 5 10-5M2 7l10 5 10-5M2 17l10 5 10-5',
      'git-branch': 'M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9',
      'code': 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      'test-tube': 'M7 2h10M14 16h-4M6 18h12M14 2v7a6 6 0 0 1-4 5.659V18a2 2 0 1 0 4 0v-3.341A6 6 0 0 1 10 9V2'
    };
    return icons[iconName] || icons['code'];
  }

  getSkillIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      // Backend icons
      'coffee': 'M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3',
      'leaf': 'M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12',
      'shield': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      'cloud': 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z',
      'key': 'm21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
      'boxes': 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
      'database-link': 'M4 6v6a8 8 0 0 0 16 0V6M4 6a8 8 0 0 1 16 0M4 6v6M20 6v6 M9 13a5 5 0 0 0 6 0',

      // Frontend icons
      'angular': 'M12 2L2 6l1.5 13L12 22l8.5-3L22 6L12 2zM12 4.5l6.5 2.25L17.5 17 12 19.5 6.5 17 5.5 6.75 12 4.5z M12 6L9 14h2l.5-2h3l.5 2h2L12 6z',
      'code-brackets': 'M16 18l6-6-6-6M8 6l-6 6 6 6',
      'javascript': 'M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.611 2.648.68 3.341 1.281.78 3.15.943 3.39 1.671.234.951-.699 1.244-1.585 1.131-.654-.086-1.019-.334-1.415-.777l-1.371.788c.156.328.34.594.589.815 1.205 1.106 4.223 1.052 4.768-.629.021-.055.179-.537.079-1.258zM13.116 9.338c.784 0 1.279.019 1.529.019.245 0 .499.008.777.019-.003.271-.005.542-.008.814-.212.005-.424.008-.637.008h-.018c-.358.003-.717.005-1.075.008l-.018.008V16c-.426 0-.851 0-1.277-.002v-6.67h-.018c-.358-.003-.717-.006-1.075-.008-.213 0-.425-.003-.637-.008l-.008-.814c.278-.011.532-.019.777-.019.25 0 .745-.019 1.529-.019h.177z',
      'html': 'M12 18.178l-4.62-1.256-.328-3.544h2.27l.158 1.844 2.52.667 2.52-.667.26-2.063H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2z',
      'palette': 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.15-.59-1.56-.36-.41-.59-.96-.59-1.56 0-1.38 1.12-2.5 2.5-2.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',

      // Database icons
      'table': 'M3 3h18v18H3V3zm2 2v4h4V5H5zm6 0v4h8V5h-8zm-6 6v4h4v-4H5zm6 0v4h8v-4h-8zm-6 6v2h4v-2H5zm6 0v2h8v-2h-8z',

      // Architecture icons
      'building': 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18ZM6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4',
      'cube': 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
      'triangle': 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
      'lock': 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2ZM7 11V7a5 5 0 0 1 10 0v4',
      'grid': 'M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z',
      'network': 'M16 3a5 5 0 0 0-3.937 8.062m-.524 4.876a5 5 0 1 0-7.077-7.077M9 10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm5 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm0-10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM20 15a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-5 4a5 5 0 0 0 3.937-8.062m.524-4.876a5 5 0 1 0 7.077 7.077',

      // Tools icons
      'git': 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2',
      'github': 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2',
      'brain': 'M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z',
      'terminal': 'M4 17l6-6-6-6M12 19h8',
      'storm': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
      'send': 'M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z',
      'package': 'M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12',
      'container': 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z',
      'terminal-square': 'M7 15l5-5-5-5M13 17h4M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
      'window': 'M3 3h18v18H3V3zm0 6h18M9 3v18',
      'npm': 'M1 8v8h6v2h4v-2h10V8H1zm2 2h2v4H3v-4zm4 0h2v4H7v-4zm4 0h2v6h-2v-6zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z'
    };
    return icons[iconName] || 'M16 18l6-6-6-6M8 6l-6 6 6 6';
  }
}
