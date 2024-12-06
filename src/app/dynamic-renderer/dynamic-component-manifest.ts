import { DynamicModule } from './render-template.types';
import {HeaderComponent} from '../components/dynamic-components/header/header.component';
import { MainHeroComponent } from '../components/dynamic-components/main-hero/main-hero.component';
import { FeaturedItemsComponent } from '../components/dynamic-components/featured-items/featured-items.component';
import {
  DynamicItemConstructor,
} from '../dynamic-renderer/render-template.types';
import { FooterComponent } from '../components/dynamic-components/footer/footer.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';

type ComponentMap = {
  [name: string]: {
    loadComponent: () => DynamicItemConstructor;
  };
};

export const _dynamicComponentMap: ComponentMap = {
  mainHero: {
    loadComponent: () => MainHeroComponent,
  },
  featuredItems: {
    loadComponent: () => FeaturedItemsComponent,
  },
  header: {
    loadComponent: () =>
      HeaderComponent
  },
  footer: {
    loadComponent: () => FooterComponent,
  },
  pageNotFound: {
    loadComponent: () => PageNotFoundComponent,
  },
  // articlesPreview: {
  //   loadModule: () =>
  //     import('../dynamic-components/article-preview/article-preview.module').then(
  //       (m) => m.ArticlePreviewModule as unknown as DynamicModule
  //     ),
  // },
};

// export const dynamicComponentKeysSet = new Set(
//   Object.keys(dynamicComponentMap)
// );
