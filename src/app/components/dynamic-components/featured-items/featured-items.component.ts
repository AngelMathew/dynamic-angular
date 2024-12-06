import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentData, DynamicComponent } from '../../../dynamic-renderer/render-template.types';
import { FeaturedItemComponent } from '../../featured-item/featured-item.component';

@Component({
  selector: 'app-featured-items',
  imports: [CommonModule,FeaturedItemComponent],
  standalone: true,
  templateUrl: './featured-items.component.html',
})
export class FeaturedItemsComponent implements DynamicComponent {
  title?: string;
  items: Array<any> = [];

  constructor() {}

  componentDataResolver(data: ComponentData) {
    return {
      title: data['title'],
      items: data['items'],
    };
  }
}
