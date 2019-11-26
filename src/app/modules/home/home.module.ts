import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { WebSeriesComponent } from './pages/web-series/web-series.component';
import { UserAuthenticationComponent } from './pages/user-authentication/user-authentication.component';
import { RegisterComponent } from './pages/user-authentication/register/register.component';
import { HomeComponent } from './home.component';
import { LayoutComponent } from './layout/layout.component';



@NgModule({
  declarations: [DashboardComponent, MoviesComponent, WebSeriesComponent, UserAuthenticationComponent, RegisterComponent, HomeComponent, LayoutComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule {}
