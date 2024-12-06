// import { CtaComponent } from '../cta/cta.component';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  @Input() url: string = '';
  @Input() text: string = '';
  @Input() hasPrimaryCta: boolean = false;
  @Input() contentType: string = ''


  constructor() { }
}
