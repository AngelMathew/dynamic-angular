import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  DynamicComponent } from '../../dynamic-renderer/render-template.types';

@Component({
  selector: 'app-page-not-found',
  imports: [CommonModule],
  standalone: true,
  template: `<div class="text-center m-auto full-height mt-6"><h2 >Page Not Found</h2><a href='/'>Go Back</a></div>`,
  styles:[`.full-height{height:100vh}`]
})
export class PageNotFoundComponent implements DynamicComponent {

  constructor() {}
  componentDataResolver() {

  }
}
