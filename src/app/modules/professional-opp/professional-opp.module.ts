import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProfessionalOppRoutingModule } from './professional-opp-routing.module';
import { AddWorkShopComponent } from './professional-opp/add-work-shop/add-work-shop.component';
import { AddComponent } from './professional-opp/add/add.component';
import { ProfessionalOppComponent } from './professional-opp/professional-opp.component';
import { WorkShopMainDataComponent } from './professional-opp/add-work-shop/work-shop-main-data/work-shop-main-data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkShopVolDataComponent } from './professional-opp/add-work-shop/work-shop-vol-data/work-shop-vol-data.component';
import { WorkShopBeneficiaryDataComponent } from './professional-opp/add-work-shop/work-shop-beneficiary-data/work-shop-beneficiary-data.component';
import { WorkShopSurvayQuestionsComponent } from './professional-opp/add-work-shop/work-shop-survay-questions/work-shop-survay-questions.component';
import { WorkShopTimeComponent } from './professional-opp/add-work-shop/work-shop-time/work-shop-time.component';
import { WorkShopParticipationComponent } from './professional-opp/add-work-shop/work-shop-participation/work-shop-participation.component';
import { CancelModalComponent } from 'src/app/shared/sharedComponents/cancel-modal/cancel-modal.component';



@NgModule({
  declarations: [
    ProfessionalOppComponent,
    AddWorkShopComponent,
    AddComponent,
    WorkShopMainDataComponent,
    WorkShopVolDataComponent,
    WorkShopBeneficiaryDataComponent,
    WorkShopSurvayQuestionsComponent,
    WorkShopTimeComponent,
    WorkShopParticipationComponent
  ],
  imports: [
    CommonModule,
    ProfessionalOppRoutingModule,
    RouterModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class ProfessionalOppModule { }
