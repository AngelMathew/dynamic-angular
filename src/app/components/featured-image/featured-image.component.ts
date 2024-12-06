import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-image',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './featured-image.component.html',
})
export class FeaturedImageComponent {
  @Input() image: string='';
  @Input() altImage: string = '';

  constructor() {}
}
