import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateformComponent } from './templateform.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const routes = [
  {
 path: '',
 children: [
   { path: '', redirectTo: 'templateform', pathMatch: 'full' },
   {
     path: 'templateform',
     component: TemplateformComponent
   }]
  }]

@NgModule({
  declarations: [
    TemplateformComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule,
    FormsModule
  ]
})
export class TemplateformModule { }
