import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdDialogModule,
  MdProgressBarModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule, MdSidenavModule, MdTableModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent } from './app.component';
import { CreateLoanComponent } from "./create-loan/create-loan.component";
import { LoanOfferComponent } from './loan-offer/loan-offer.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { CreditReportComponent } from './credit-report/credit-report.component';
import { NotificationDialog } from './loan-details/notification-dialog/notification-dialog.component';

const appRoutes: Routes = [
  { path: 'create-loan', component: CreateLoanComponent },
  { path: 'loan-offer', component: LoanOfferComponent },
  { path: 'loan-details', component: LoanDetailsComponent },
  { path: 'credit-report', component: CreditReportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateLoanComponent,
    LoanOfferComponent,
    LoanDetailsComponent,
    CreditReportComponent,
    NotificationDialog
],
  entryComponents: [
    NotificationDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdDialogModule,
    MdProgressBarModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule, MdSidenavModule, MdTableModule,
    ChartsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
