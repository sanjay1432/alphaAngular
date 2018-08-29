import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthGuardService } from './auth.guard.service';
const routes: Routes = [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'main',
            component: MainComponent,
            canActivate: [AuthGuardService],
        }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService],
})

export class AppRoutingModule { }
