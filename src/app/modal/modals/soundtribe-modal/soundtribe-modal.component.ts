import {Component, Inject, OnInit, Optional} from '@angular/core';
import {BaseModalComponent} from "../../core/base-modal/base-modal.component";
import {NgForOf, NgIf} from "@angular/common";

interface MicroserviceData {
  name: string;
  description: string;
  technologies: string[];
  code?: string;
  video?: string;
}

@Component({
  selector: 'app-soundtribe-modal',
  standalone: true,
  imports: [
    BaseModalComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './soundtribe-modal.component.html',
  styleUrl: './soundtribe-modal.component.scss'
})
export class SoundtribeModalComponent implements OnInit {
  // ✅ Propiedades inyectadas (necesarias para el template)
  modalId: string;
  config: any;
  data: any;

  microservices: MicroserviceData[] = [
    { name: 'Music', description: 'Gestión de música, streaming y playlists', technologies: ['Spring', 'Java', 'MySQL', 'MinIO'], code: 'https://github.com/Garbi-Collector/SOUNDTRIBE---Music', video: '' },
    { name: 'Notification', description: 'Sistema de notificaciones en tiempo real', technologies: ['Spring', 'Java', 'MySQL'], code: 'https://github.com/Garbi-Collector/SOUNDTRIBE---notifications', video: '' },
    { name: 'Donation', description: 'Donaciones integradas con Mercado Pago', technologies: ['Spring', 'Java', 'MySQL', 'Mercado Pago API'], code: 'https://github.com/Garbi-Collector/SOUNDTRIBE---Donations', video: '' },
    { name: 'User', description: 'Autenticación, autorización y gestión de usuarios', technologies: ['Spring', 'Java', 'MySQL', 'Spring Security', 'JWT', 'MinIO'], code: 'https://github.com/Garbi-Collector/SOUNDTRIBE---Users', video: '' }
  ];

  frontend = {
    demo: 'https://garbi-collector.github.io/SOUNDTRIBE-FrontEnd/inicio',
    video: 'https://youtu.be/m7ZljS60k5U?si=536rledp1ylVgrsp',
    code: 'https://github.com/Garbi-Collector/SOUNDTRIBE-FrontEnd'
  };

  constructor(
    @Inject('MODAL_ID') modalId: string,
    @Inject('MODAL_CONFIG') config: any,
    @Optional() @Inject('MODAL_DATA') data: any
  ) {
    this.modalId = modalId;
    this.config = config;
    this.data = data;
  }

  ngOnInit(): void {
    // ✅ Ya no necesitas super.ngOnInit()
    // Si necesitas usar this.data, puedes procesarlo aquí
  }

  open(url?: string): void {
    if (url) window.open(url, '_blank');
  }
}
