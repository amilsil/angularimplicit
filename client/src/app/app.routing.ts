import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "app/common/guards/auth.guard";
import { AuthService } from "app/common/services/auth.service";
import { SecuredComponent } from './secured/secured.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/secured',
        pathMatch: 'full'
    },
    {
        path: 'secured',
        component: SecuredComponent
    }
];
export const authProviders = [
    AuthGuardService,
    AuthService
];
