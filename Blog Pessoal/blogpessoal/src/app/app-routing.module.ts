import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntarComponent } from './entar/entar.component';

const routes: Routes = [

  {path: "", redirectTo: "entar", pathMatch:"full"},

  {path:"entar", component: EntarComponent},
  {path: "cadastrar", component:CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
