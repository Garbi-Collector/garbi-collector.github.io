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
    const particleCount = 15; // ✅ Reducido de 30 a 15
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
    const cubeCount = 6; // ✅ Reducido de 12 a 6
    const colors = ['cyan', 'pink', 'purple'];
    const gridSize = 12; // ✅ Reducido de 20x20 a 12x12 (144 elementos en lugar de 400)

    for (let i = 0; i < cubeCount; i++) {
      this.gridCubes.push({
        row: Math.floor(Math.random() * gridSize),
        col: Math.floor(Math.random() * gridSize),
        animationDelay: `${Math.random() * 8}s`,
        animationDuration: `${4 + Math.random() * 2}s`, // ✅ Duración más corta
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }
}
