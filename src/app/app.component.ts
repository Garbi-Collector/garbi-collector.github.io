import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from './background/background/background.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { ModalService } from './modal/service/Modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('modalContainer', { read: ViewContainerRef })
  modalContainer!: ViewContainerRef;

  constructor(private modalService: ModalService) {}

  ngAfterViewInit(): void {
    this.modalService.setContainer(this.modalContainer);
  }
}
