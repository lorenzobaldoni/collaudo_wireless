import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddTestPageComponent } from './components/add-test-page/add-test-page.component';

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'add-test-page', component: AddTestPageComponent },
  { path: '',   redirectTo: '/main-page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
