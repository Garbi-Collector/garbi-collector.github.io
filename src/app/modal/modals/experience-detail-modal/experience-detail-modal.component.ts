import { Component, OnInit } from '@angular/core';
import { NgForOf } from "@angular/common";
import { BaseModalComponent } from "../../core/base-modal/base-modal.component";
import { Experience } from "../../../pages/experience/experience.component";

@Component({
  selector: 'app-experience-detail-modal',
  standalone: true,
  imports: [
    NgForOf,
    BaseModalComponent  // ✅ SÍ lo necesitas porque lo usas en el template
  ],
  templateUrl: './experience-detail-modal.component.html',
  styleUrl: './experience-detail-modal.component.scss'
})
export class ExperienceDetailModalComponent extends BaseModalComponent implements OnInit {

  experience!: Experience;

  override ngOnInit(): void {
    super.ngOnInit();
    this.experience = this.data as Experience;
  }

  getDescriptionParagraphs(): string[] {
    return this.experience.detailedDescription.split('\n\n').filter(p => p.trim());
  }
}
