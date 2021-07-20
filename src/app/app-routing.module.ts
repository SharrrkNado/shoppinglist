import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'templateform',
    loadChildren: () => import('./templateform/templateform.module').then(m => m.TemplateformModule)
  },
  {
    path: 'reactiveform',
    loadChildren: () => import('./reative-form/reative-form.module').then(m => m.ReativeFormModule)
  },
  {
    path: '', redirectTo :'sandbox' , pathMatch: 'full'
  },

  { path: 'sandbox', loadChildren: () => import('./sandbox/sandbox.module').then(m => m.SandboxModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      // ,{preloadingStrategy: PreloadAllModules}
      ),FormsModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
