import { RouterModule, Routes } from "@angular/router";
import { MainsComponent } from "./views/mains/mains.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '', component: MainsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
