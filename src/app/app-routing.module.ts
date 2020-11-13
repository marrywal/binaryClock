import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';


const routes: Routes = [
  {
    path: 'clock', component: ClockComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'clock'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
