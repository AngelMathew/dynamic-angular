import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EMPTY, catchError, map } from 'rxjs';
import { ContentfulService } from '../service/contentful.service';

export const routeDataResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const contentful = inject(ContentfulService);
  let url;
  state.url==='/home'?url='/':url=state.url;
// getPageBySlug
  return contentful.getCompleteTransformedPageContent(url)
  .then(data=>data)
  .catch(()=>
        router.navigateByUrl('/not-found')
     )
}

