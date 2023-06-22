import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTestComponent } from './componenti/add-test/add-test.component';
import { MainViewComponent } from './componenti/main-view/main-view.component';

const routes: Routes = [
  { path: 'main-view', component: MainViewComponent },
  { path: 'add-test', component: AddTestComponent },
  { path: '', component: MainViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
