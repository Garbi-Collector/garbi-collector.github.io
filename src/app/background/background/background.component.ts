import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent implements OnInit, OnDestroy {

  // Para partículas LED
  particles: Array<{
    left: string;
    animationDelay: string;
    animationDuration: string;
    class: string;
  }> = [];

  // Para los cubos del grid 3D
  gridCubes: Array<{
    row: number;
    col: number;
    animationDelay: string;
    animationDuration: string;
    color: string;
  }> = [];

  ngOnInit() {
    this.generateParticles();
    this.generateGridCubes();
  }

  ngOnDestroy() {
    // Cleanup si es necesario
  }

  generateParticles() {
    const particleCount = 30;
    const colors = ['cyan', 'pink', 'purple'];

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 15}s`,
        animationDuration: `${15 + Math.random() * 10}s`,
        class: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  generateGridCubes() {
    const cubeCount = 12;
    const colors = ['cyan', 'pink', 'purple'];
    const gridSize = 20;

    for (let i = 0; i < cubeCount; i++) {
      this.gridCubes.push({
        row: Math.floor(Math.random() * gridSize),
        col: Math.floor(Math.random() * gridSize),
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${3 + Math.random() * 3}s`,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
}
