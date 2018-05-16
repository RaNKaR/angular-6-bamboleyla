import { MatCardModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    RouterModule.forChild([{
      path: '',
      component: AboutComponent
    }]),
    CommonModule,
    MatCardModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
