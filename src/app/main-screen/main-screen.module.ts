import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainScreenComponent } from './main-screen.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import { NavigationComponent } from './../navigation/navigation.component';
import { ToolsComponent } from './../tools/tools.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: MainScreenComponent}
]

@NgModule({
  declarations: [
    MainScreenComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainScreenModule { }
