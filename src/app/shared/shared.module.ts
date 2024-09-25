import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelModalComponent } from './sharedComponents/cancel-modal/cancel-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmAddOppComponent } from './sharedComponents/confirm-add-opp/confirm-add-opp.component';



@NgModule({
  declarations: [
    CancelModalComponent,
    ConfirmAddOppComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

  ],
  exports: [
    CancelModalComponent,
    ConfirmAddOppComponent
  ]
})
export class SharedModule { }
