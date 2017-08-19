import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule,
  MdProgressBarModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule, MdSidenavModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { CreateLoanComponent } from "./create-loan/create-loan.component";
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

const appRoutes: Routes = [
  { path: 'create-loan', component: CreateLoanComponent },
  { path: 'loan-offer', component: LoanOfferComponent },
  { path: 'loan-details', component: LoanDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateLoanComponent,
    LoanOfferComponent,
    LoanDetailsComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule,
    MdProgressBarModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule, MdSidenavModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
