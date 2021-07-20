import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SandboxComponent
  ],
  imports: [
    CommonModule,
    SandboxRoutingModule,FormsModule
  ]
})
export class SandboxModule { }
