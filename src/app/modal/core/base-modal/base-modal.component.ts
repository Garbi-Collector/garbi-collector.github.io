import { Component, OnInit, OnDestroy, HostListener, ElementRef, ViewChild, Renderer2, Inject, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService, ModalConfig } from '../../service/Modal.service';

@Component({
  selector: 'app-base-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent implements OnInit, OnDestroy {

  @ViewChild('modalWindow', { static: false }) modalWindow?: ElementRef;

  // Propiedades inyectadas
  modalId: string;
  config: ModalConfig;
  data?: any;
  zIndex: number;

  // Estado del modal
  isAnimating = true;
  isDragging = false;

  // Posición del modal
  position = { x: 0, y: 0 };

  // Offset para arrastre
  private dragOffset = { x: 0, y: 0 };

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private modalService: ModalService,
    @Inject('MODAL_ID') modalId: string,
    @Inject('MODAL_CONFIG') config: ModalConfig,
    @Inject('MODAL_Z_INDEX') zIndex: number,
    @Optional() @Inject('MODAL_DATA') data: any
  ) {
    this.modalId = modalId;
    this.config = config;
    this.data = data;
    this.zIndex = zIndex;
  }

  ngOnInit(): void {
    // Inicializar posición
    if (this.config.initialPosition) {
      this.position = { ...this.config.initialPosition };
      this.centerModal();
    }

    // Animación de entrada
    if (this.config.animation) {
      setTimeout(() => {
        this.isAnimating = false;
      }, 600);
    } else {
      this.isAnimating = false;
    }
  }

  ngOnDestroy(): void {
    // Limpieza si es necesaria
  }

  /**
   * Centra el modal en la pantalla
   */
  private centerModal(): void {
    // El centrado se hará con CSS, pero guardamos la posición inicial
    this.position = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
  }

  /**
   * Cierra el modal
   */
  close(): void {
    if (this.config.animation) {
      // Agregar animación de salida
      this.isAnimating = true;
      setTimeout(() => {
        this.modalService.close(this.modalId);
      }, 300);
    } else {
      this.modalService.close(this.modalId);
    }
  }

  /**
   * Maneja el click en el backdrop
   */
  onBackdropClick(event: MouseEvent): void {
    // Solo cerrar si se hace click en el backdrop, no en el modal
    if (this.config.closeOnBackdropClick && event.target === event.currentTarget) {
      this.close();
    }
  }

  /**
   * Trae el modal al frente
   */
  bringToFront(): void {
    this.modalService.bringToFront(this.modalId);
    this.zIndex = this.modalService.getZIndex(this.modalId);
  }

  /**
   * Inicia el arrastre del modal
   */
  onDragStart(event: MouseEvent): void {
    if (!this.config.draggable) return;

    // Prevenir selección de texto
    event.preventDefault();

    // Traer al frente
    this.bringToFront();

    this.isDragging = true;

    // Calcular offset desde la posición del mouse al centro del modal
    if (this.modalWindow) {
      const rect = this.modalWindow.nativeElement.getBoundingClientRect();
      this.dragOffset = {
        x: event.clientX - rect.left - rect.width / 2,
        y: event.clientY - rect.top - rect.height / 2
      };
    }

    // Agregar clase para cambiar cursor
    this.renderer.addClass(document.body, 'modal-dragging');
  }

  /**
   * Maneja el movimiento durante el arrastre
   */
  @HostListener('document:mousemove', ['$event'])
  onDragMove(event: MouseEvent): void {
    if (!this.isDragging || !this.config.draggable) return;

    event.preventDefault();

    // Calcular nueva posición
    this.position = {
      x: event.clientX - this.dragOffset.x,
      y: event.clientY - this.dragOffset.y
    };

    // Limitar a los bordes de la ventana
    this.constrainPosition();
  }

  /**
   * Finaliza el arrastre
   */
  @HostListener('document:mouseup')
  onDragEnd(): void {
    if (this.isDragging) {
      this.isDragging = false;
      this.renderer.removeClass(document.body, 'modal-dragging');
    }
  }

  /**
   * Limita la posición del modal a los bordes de la ventana
   */
  private constrainPosition(): void {
    if (!this.modalWindow) return;

    const rect = this.modalWindow.nativeElement.getBoundingClientRect();
    const margin = 20; // Margen mínimo visible

    // Limitar X
    const minX = margin;
    const maxX = window.innerWidth - margin;
    this.position.x = Math.max(minX, Math.min(maxX, this.position.x));

    // Limitar Y
    const minY = margin;
    const maxY = window.innerHeight - margin;
    this.position.y = Math.max(minY, Math.min(maxY, this.position.y));
  }

  /**
   * Obtiene los estilos del modal
   */
  getModalStyles(): any {
    return {
      'z-index': this.zIndex,
      'max-width': this.config.maxWidth,
      'max-height': this.config.maxHeight
    };
  }

  /**
   * Obtiene los estilos de posición
   */
  getPositionStyles(): any {
    if (this.isDragging || this.position.x !== 0 || this.position.y !== 0) {
      return {
        left: `${this.position.x}px`,
        top: `${this.position.y}px`,
        transform: 'translate(-50%, -50%)'
      };
    }
    return {};
  }

  /**
   * Previene el arrastre en elementos interactivos
   */
  preventDrag(event: MouseEvent): void {
    event.stopPropagation();
  }
}
