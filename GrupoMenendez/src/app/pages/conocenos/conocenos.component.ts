import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {
  valores = [
    {
      icon: '⚖️',
      title: 'Integridad, honestidad y respeto',
      desc: 'Actuamos con ética en cada proyecto y relación con nuestros clientes y colaboradores.'
    },
    {
      icon: '🏆',
      title: 'Compromiso con calidad',
      desc: 'Excelencia en cada etapa del proceso constructivo, desde la planeación hasta la entrega.'
    },
    {
      icon: '😊',
      title: 'Satisfacción del cliente',
      desc: 'Nuestro éxito se mide por la satisfacción y confianza que generamos en nuestros clientes.'
    },
    {
      icon: '🤝',
      title: 'Trabajo en equipo',
      desc: 'Colaboramos de forma coordinada para alcanzar resultados superiores en cada obra.'
    },
    {
      icon: '📈',
      title: 'Crecimiento y productividad',
      desc: 'Impulsamos la mejora continua para ser más eficientes y ofrecer más valor.'
    },
    {
      icon: '🌟',
      title: 'Liderazgo en la industria',
      desc: 'Aspiramos a ser referente de excelencia en el sector construcción e infraestructura.'
    },
    {
      icon: '🌿',
      title: 'Compromiso con la ecología',
      desc: 'Ejecutamos proyectos responsables con el medio ambiente y las comunidades.'
    }
  ];
}
