import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContentComponent} from "./content/content.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {routeDataResolver} from './route/routeDataresolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { componentData: routeDataResolver },
  },
  {
    path: ':id',
    component: ContentComponent,
    resolve: { componentData: routeDataResolver },
  },

  {path:'**',component:PageNotFoundComponent},
];
