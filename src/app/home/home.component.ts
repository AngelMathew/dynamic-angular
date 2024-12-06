import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { DynamicRendererComponent } from '../dynamic-renderer/dynamic-renderer/dynamic-renderer.component';
import { CommonModule } from '@angular/common';
import { ContentfulService } from '../service/contentful.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DynamicRendererComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  componentData$=this.activatedRoute.data.pipe(
    map(({ componentData }) => componentData)
    );

  constructor(
    private activatedRoute: ActivatedRoute,private contentful: ContentfulService
  ) {}

}
