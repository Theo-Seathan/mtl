import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateUserProfileComponent } from './create-user-profile/create-user-profile.component';
import { ViewUserProfileComponent } from './view-user-profile/view-user-profile.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: 'user-profile',
                component: UserProfileComponent,
            },
            {
                path: 'create-user-profile',
                component: CreateUserProfileComponent,
            },
            {
                path: 'view-user-profile',
                component: ViewUserProfileComponent,
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {

}

export const PAGES_COMPONENTS = [
    HomePageComponent,
    UserProfileComponent,
    CreateUserProfileComponent,
    ViewUserProfileComponent

];

export const ENTRYS_COMPONENTS = [];