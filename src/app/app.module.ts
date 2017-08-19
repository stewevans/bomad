import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdProgressBarModule, MdToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here



import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'home', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdButtonToggleModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdSelectModule, MdProgressBarModule, MdToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
