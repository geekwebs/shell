import { Routes } from '@angular/router';
import { networkGuard } from './core/guards/network.guard';

export const routes: Routes = [
    {
        path: 'check-ip',  
        loadComponent: () => import('./features/ip-checker/ip-checker.component').then(c => c.IpCheckerComponent)
    },
    {
        path: 'my-ip',  
        canActivate: [networkGuard],
        data: {
            policy: {
                type: 'network',
                scheme: 'IAM'
            }
        },
        loadComponent: () => import('./features/my-ip/my-ip.component').then(c => c.MyIpComponent)
    },
    {
        path: 'forbidden',
        loadComponent: () => import('./features/forbidden/forbidden.component').then(c => c.ForbiddenComponent)
    }
];
