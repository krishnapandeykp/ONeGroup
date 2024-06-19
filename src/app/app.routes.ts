import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PeopleComponent } from './components/people/people.component';
import { ResearchComponent } from './components/research/research.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { MediaComponent } from './components/media/media.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', component: HomepageComponent},
  // {path: 'people', component: PeopleComponent},
  {path: 'people/mentor',loadChildren:()=>import('./components/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/coregroup',loadChildren:()=>import('./components/people/people.module').then(m=>m.PeopleModule)},
  {path: 'people/alumni',loadChildren:()=>import('./components/people/people.module').then(m=>m.PeopleModule)},
  {path: 'research', component: ResearchComponent},
  {path: 'publications', component: PublicationsComponent},
  {path: 'media', component: MediaComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: '**', component: PageNotFoundComponent}
];

