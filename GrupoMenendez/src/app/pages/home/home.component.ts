import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly metrics = [
    { value: '+25', label: 'Años' },
    { value: '+500', label: 'Proyectos' },
    { value: '+100', label: 'Profesionales' },
    { value: '100%', label: 'Compromiso' }
  ];

  readonly services = [
    {
      title: 'Urbanización',
      description: 'Pavimentación, movimiento de tierras, mantenimiento y mejoramiento de infraestructura urbana.',
      image: 'https://images.unsplash.com/photo-1595734939818-f4e0d44957df?w=600&h=420&fit=crop&auto=format'
    },
    {
      title: 'Obra Hidráulica',
      description: 'Colectores pluviales, redes de agua potable, drenajes sanitarios y plantas de tratamiento.',
      image: 'https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?w=600&h=420&fit=crop&auto=format'
    },
    {
      title: 'Obra Eléctrica',
      description: 'Proyectos e instalaciones eléctricas de alta y media tensión para obras públicas y privadas.',
      image: 'https://images.unsplash.com/photo-1566396357099-13e335c1c38c?w=600&h=420&fit=crop&auto=format'
    },
    {
      title: 'Maquinaria',
      description: 'Renta de maquinaria pesada, equipos de elevación y maquinaria especializada para obra.',
      image: 'https://images.unsplash.com/photo-1621922688758-359fc864071e?w=600&h=420&fit=crop&auto=format'
    }
  ];
}