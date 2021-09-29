import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'especies-biologicos',
    loadChildren: () => import('./especies-biologicos/especies-biologicos.module').then( m => m.EspeciesBiologicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
