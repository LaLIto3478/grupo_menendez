import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  menuOpen = false;
  scrolled = false;

  navItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Conócenos', path: '/conocenos' },
    { label: 'Principios', path: '/principios' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
