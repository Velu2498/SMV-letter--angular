import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
// import{PopupModule} from 'ng2-opd-popup'

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PromtboxComponent } from './promtbox/promtbox.component';
import { TestComponent } from './test/test.component';
import { DirComponent } from './dir/dir.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    PromtboxComponent,
    TestComponent,
    DirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    // PopupModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
