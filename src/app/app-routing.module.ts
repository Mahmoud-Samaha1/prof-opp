import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'professional-opp', pathMatch: 'full' },
  {
    path: '', loadChildren: () => import('./modules/professional-opp/professional-opp.module').then(m => m.ProfessionalOppModule)
  },
  {
    path: 'professional-opp', loadChildren: () => import('./modules/professional-opp/professional-opp.module').then(m => m.ProfessionalOppModule)
  },
  { path: '**', redirectTo: 'professional-opp' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
