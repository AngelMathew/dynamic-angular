// import { CtaComponent } from '../cta/cta.component';
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ComponentData,
  DynamicComponent,
} from '../../../dynamic-renderer/render-template.types';
import { CtaComponent } from '../../cta/cta.component';
import { FeaturedImageComponent } from '../../featured-image/featured-image.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-hero',
  imports: [CommonModule, CtaComponent,FeaturedImageComponent],
  standalone: true,
  templateUrl: './main-hero.component.html',
})
export class MainHeroComponent implements DynamicComponent {
  private readonly route = inject(Router);

  readonly slug = this.route.url;

  eyebrow?: string;
  heading: string = '';
  summary: string = '';
  body?: string;
  heroImage:any;
  heroImageAlt: string = '';
  cta?: any;

  constructor() {}

  componentDataResolver(data: ComponentData) {

    return {
      heading: data['title'],
      summary: data['summary'],
      cta: data['cta'],
      heroImage: data['image'],
      heroslug: data['slug'],
    };
  }
}
