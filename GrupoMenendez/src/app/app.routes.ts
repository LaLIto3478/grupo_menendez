import { Routes } from '@angular/router';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipiosComponent } from './pages/principios/principios.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'conocenos', component: ConocenosComponent },
	{ path: 'principios', component: PrincipiosComponent },
	{ path: '**', redirectTo: '' }
];
