import { Injectable, ComponentRef, ViewContainerRef, Type, Injector } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface ModalConfig {
  id: string;
  draggable?: boolean;
  closeButton?: boolean;
  closeOnBackdropClick?: boolean;
  animation?: boolean;
  maxWidth?: string;
  maxHeight?: string;
  initialPosition?: { x: number; y: number };
  data?: any;
}

export interface ModalInstance {
  id: string;
  componentRef: ComponentRef<any>;
  config: ModalConfig;
  zIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modals: Map<string, ModalInstance> = new Map();
  private modalContainer: ViewContainerRef | null = null;
  private baseZIndex = 1000;
  private currentZIndex = this.baseZIndex;

  // Subjects para comunicación
  private modalOpenSubject = new Subject<string>();
  private modalCloseSubject = new Subject<string>();

  // Observables públicos
  modalOpen$: Observable<string> = this.modalOpenSubject.asObservable();
  modalClose$: Observable<string> = this.modalCloseSubject.asObservable();

  constructor(private injector: Injector) {}

  /**
   * Registra el contenedor donde se montarán los modales
   */
  setContainer(container: ViewContainerRef): void {
    this.modalContainer = container;
  }

  /**
   * Abre un modal con la configuración especificada
   */
  open<T>(
    component: Type<T>,
    config: Partial<ModalConfig> = {}
  ): string {
    if (!this.modalContainer) {
      console.error('Modal container not set. Call setContainer() first.');
      return '';
    }

    const modalId = config.id || this.generateId();

    const fullConfig: ModalConfig = {
      id: modalId,
      draggable: true,
      closeButton: true,
      closeOnBackdropClick: true,
      animation: true,
      maxWidth: '90vw',
      maxHeight: '90vh',
      initialPosition: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      },
      ...config
    };

    // Z-Index (incrementar antes de crear el componente)
    this.currentZIndex++;

    // Crear un injector personalizado con las dependencias del modal
    const modalInjector = Injector.create({
      providers: [
        { provide: 'MODAL_ID', useValue: modalId },
        { provide: 'MODAL_CONFIG', useValue: fullConfig },
        { provide: 'MODAL_DATA', useValue: fullConfig.data },
        { provide: 'MODAL_Z_INDEX', useValue: this.currentZIndex }
      ],
      parent: this.injector
    });

    // Crear componente con el injector personalizado
    const componentRef = this.modalContainer.createComponent(component, {
      injector: modalInjector
    });

    // Detectar cambios
    componentRef.changeDetectorRef.detectChanges();

    const modalInstance: ModalInstance = {
      id: modalId,
      componentRef,
      config: fullConfig,
      zIndex: this.currentZIndex
    };

    this.modals.set(modalId, modalInstance);
    this.modalOpenSubject.next(modalId);

    return modalId;
  }

  /**
   * Cierra un modal específico
   */
  close(modalId: string): void {
    const modal = this.modals.get(modalId);

    if (modal) {
      // Destruir el componente
      modal.componentRef.destroy();

      // Eliminar del mapa
      this.modals.delete(modalId);

      // Notificar cierre
      this.modalCloseSubject.next(modalId);

      // Limpiar z-index si no hay más modales
      if (this.modals.size === 0) {
        this.currentZIndex = this.baseZIndex;
      }
    }
  }

  /**
   * Cierra todos los modales abiertos
   */
  closeAll(): void {
    const modalIds = Array.from(this.modals.keys());
    modalIds.forEach(id => this.close(id));
  }

  /**
   * Trae un modal al frente
   */
  bringToFront(modalId: string): void {
    const modal = this.modals.get(modalId);

    if (modal) {
      this.currentZIndex++;
      modal.zIndex = this.currentZIndex;
    }
  }

  /**
   * Obtiene la configuración de un modal
   */
  getConfig(modalId: string): ModalConfig | undefined {
    return this.modals.get(modalId)?.config;
  }

  /**
   * Obtiene el z-index de un modal
   */
  getZIndex(modalId: string): number {
    return this.modals.get(modalId)?.zIndex || this.baseZIndex;
  }

  /**
   * Verifica si un modal está abierto
   */
  isOpen(modalId: string): boolean {
    return this.modals.has(modalId);
  }

  /**
   * Obtiene la cantidad de modales abiertos
   */
  getOpenCount(): number {
    return this.modals.size;
  }

  /**
   * Genera un ID único para el modal
   */
  private generateId(): string {
    return `modal-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Limpia el servicio (útil para testing)
   */
  destroy(): void {
    this.closeAll();
    this.modals.clear();
    this.modalContainer = null;
    this.currentZIndex = this.baseZIndex;
  }
}
