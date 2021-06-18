import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaoPageComponent } from './components/cao-page/cao-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';

const routes: Routes = [{
  path: '',
  component: MenuTemplateComponent,
  children: [
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'sobre',
      component: SobrePageComponent
    },
    {
      path: 'cao',
      component: CaoPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
