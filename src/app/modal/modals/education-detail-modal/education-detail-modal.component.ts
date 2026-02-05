import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { BaseModalComponent } from "../../core/base-modal/base-modal.component";
import { Education } from "../../../pages/experience/experience.component";

@Component({
  selector: 'app-education-detail-modal',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    BaseModalComponent
  ],
  templateUrl: './education-detail-modal.component.html',
  styleUrl: './education-detail-modal.component.scss'
})
export class EducationDetailModalComponent extends BaseModalComponent implements OnInit {

  education!: Education;

  // ✅ No necesitas constructor, Angular inyecta todo automáticamente

  override ngOnInit(): void {
    super.ngOnInit();
    this.education = this.data as Education;
  }

  getDescriptionParagraphs(): string[] {
    return this.education.description.split('\n\n').filter(p => p.trim());
  }

  hasLinks(): boolean {
    return !!(this.education.certificateUrl || this.education.institutionUrl || this.education.repositoryUrl);
  }

  openCertificate(): void {
    if (this.education.certificateUrl) {
      window.open(this.education.certificateUrl, '_blank');
    }
  }

  openInstitution(): void {
    if (this.education.institutionUrl) {
      window.open(this.education.institutionUrl, '_blank');
    }
  }

  openRepository(): void {
    if (this.education.repositoryUrl) {
      window.open(this.education.repositoryUrl, '_blank');
    }
  }
}
