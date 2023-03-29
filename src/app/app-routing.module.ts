import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObserveHttpComponent } from './observe-http/observe-http.component';



const routes: Routes = [
  {
    path: 'http-observe',
    component: ObserveHttpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
