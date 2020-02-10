import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PromtboxComponent } from './promtbox/promtbox.component';




const routes: Routes = [
  {
    path:"",
    component: MainpageComponent 
  },
  {
    path:"letter",
    component:PromtboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
