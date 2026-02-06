import {Component, OnInit} from '@angular/core';
import {BaseModalComponent} from "../../core/base-modal/base-modal.component";
import {Project} from "../../../pages/projects/projects.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [
    BaseModalComponent,
    NgIf,
    NgForOf
  ],
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.scss'
})
export class ProjectDetailModalComponent extends BaseModalComponent implements OnInit {

  project!: Project;

  override ngOnInit(): void {
    super.ngOnInit();
    this.project = this.data as Project;
  }

  getDescriptionParagraphs(): string[] {
    return this.project.fullDescription.split('\n\n').filter(p => p.trim());
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

  openDemo(): void {
    if (this.project.links.demo) {
      window.open(this.project.links.demo, '_blank');
    }
  }

  openVideo(): void {
    if (this.project.links.video) {
      window.open(this.project.links.video, '_blank');
    }
  }

  openCode(): void {
    if (this.project.links.code) {
      window.open(this.project.links.code, '_blank');
    }
  }
}
