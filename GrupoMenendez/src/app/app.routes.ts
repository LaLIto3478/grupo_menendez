import { Routes } from '@angular/router';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'conocenos', component: ConocenosComponent },
	{ path: '**', redirectTo: '' }
];
