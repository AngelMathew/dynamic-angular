import { Component, HostListener } from '@angular/core';
import { ComponentData, DynamicComponent } from '../../../dynamic-renderer/render-template.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DynamicComponent {
  title?: string;


  componentDataResolver(data: ComponentData) {
    return {
      title: data['title'],
    };
  }
}
