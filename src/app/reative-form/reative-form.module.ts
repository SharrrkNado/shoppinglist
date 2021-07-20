import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { RouterModule } from '@angular/router';


export const routes = [
  {
 path: '',
 children: [
   { path: '', redirectTo: 'reactiveform', pathMatch: 'full' },
   {
     path: 'reactiveform',
     component: ReactiveFormComponent
   }]
  }]

@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ReativeFormModule { }
