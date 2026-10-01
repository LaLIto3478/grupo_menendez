import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navigationLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Conócenos', path: '/conocenos' },
    { label: 'Principios', path: '/principios' },
    { label: 'Servicios', path: '/servicios' },
    { label: 'Galería', path: '/galeria' },
    { label: 'Contacto', path: '/contacto' }
  ];

  services = [
    'Urbanización',
    'Obra hidráulica y sanitaria',
    'Obra eléctrica',
    'Obra mecánica',
    'Renta de maquinaria'
  ];
}