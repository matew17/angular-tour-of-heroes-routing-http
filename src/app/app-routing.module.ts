import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
    {
        path: 'heroes', component: HeroesComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'detail/:id', component: HeroDetailComponent
    },
    {
        path: '', component: DashboardComponent, pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
