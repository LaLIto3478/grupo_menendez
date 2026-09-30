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
}