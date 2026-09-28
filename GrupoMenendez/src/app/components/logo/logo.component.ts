import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html'
})
export class LogoComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() darkText: boolean = false;

  get iconSize(): number {
    return this.size === 'sm' ? 40 : this.size === 'lg' ? 64 : 52;
  }

  get textSize(): string {
    return this.size === 'sm' ? 'text-xs' : this.size === 'lg' ? 'text-xl' : 'text-sm';
  }
}
