import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [
  {path: 'shopping-form', component: ShoppingFormComponent},
  {path: 'template-form', component: TemplateFormComponent},
  {path: "", redirectTo: 'shopping-form', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
