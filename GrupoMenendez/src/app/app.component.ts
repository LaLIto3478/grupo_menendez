import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// La ruta ahora es relativa desde src/app/
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'GrupoMenendez';
}
