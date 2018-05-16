import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { directiveDef } from '@angular/core/src/view/provider';

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(
  [{
    path: '',
    children: [{
      path: '',
      loadChildren: './pages/about/about.module#AboutModule',
    }]
  }]
);
