import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error/error-page/error-page.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
    {
        path: '',
        component: InicioComponent,
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
    },
    {
        path: 'general',
        loadChildren: () => import('./general/general.module').then( m => m.GeneralModule)
    },
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        // component: ErrorPageComponent
        redirectTo: '404'
    }


];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
