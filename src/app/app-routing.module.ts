import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultifileComponent } from './multifile/multifile.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path:'fileupload',
    component:MultifileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
