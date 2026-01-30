import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavButtonComponent} from "../../components/nav-button/nav-button.component";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, NavButtonComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  isScrolled = false;

  navItems = [
    { label: 'Home', route: '/', icon: '⌂' },
    { label: 'About', route: '/about', icon: '◉' },
    { label: 'Experience', route: '/experience', icon: '⚡' },
    { label: 'Skills', route: '/skills', icon: '◈' },
    { label: 'Projects', route: '/projects', icon: '▣' },
    { label: 'Contact', route: '/contact', icon: '◐' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
