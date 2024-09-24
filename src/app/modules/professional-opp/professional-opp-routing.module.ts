import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ProfessionalOppComponent } from './professional-opp/professional-opp.component';
import { AddComponent } from './professional-opp/add/add.component';
import { AddWorkShopComponent } from './professional-opp/add-work-shop/add-work-shop.component';
import { AddWorkShopGuardGuard } from 'src/app/shared/guards/add-work-shop-guard.guard';
import { CancelModalComponent } from 'src/app/shared/sharedComponents/cancel-modal/cancel-modal.component';

const routes: Routes = [
  {
    path: 'professional-opp',
    children: [
      {
        path: '',
        component: ProfessionalOppComponent,
      },
      {
        path: "add",
        children: [
          {
            path: "",
            component: AddComponent
          },
          {
            path: 'addWorkShop',
            component: AddWorkShopComponent,
            // canActivate: [AddWorkShopGuardGuard],
          },
        ]
      },

    ]
  },
  {
    path: 'cancelModal',
    component: CancelModalComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalOppRoutingModule { }
