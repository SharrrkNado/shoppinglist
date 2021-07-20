import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../vendors/material.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: ListComponent },
];


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    RouterModule.forChild(routes), 
    MaterialModule,
    CommonModule,
    FormsModule
  ]
})


export class ListModule { }


