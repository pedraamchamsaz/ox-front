import { RouterModule, Routes } from '@angular/router';
import { EventpageComponent } from './eventpage/eventpage.component';
import { FormComponent } from './form/form.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';

import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

import { HomepageComponent } from './homepage/homepage.component';


export const routes: Routes = [
  {
    path: 'eventpageUser/:id',
    title: 'Event',
    loadComponent: () =>
      import('./eventpageUser/eventpageUser.component').then(
        (c) => c.EventpageUserComponent
      ),

    // component: EventpageComponent,
  },

  {
    path: 'eventpage/:id',
    title: 'Event',
    loadComponent: () =>
      import('./eventpage/eventpage.component').then(
        (c) => c.EventpageComponent
      ),
  },
  {
    path: 'eventpage/:eventid/booking', title: 'Event', 
    loadComponent: () => import('./booking/booking.component').then((c)=>c.BookingComponent)
  },


  {
    path: 'formUser/:id',
    title: 'Form',
    loadComponent: () =>
      import('./form-user/form-user.component').then(
        (c) => c.FormUserComponent
      ),

    
  },
  {
    path: 'form',
    title: 'Form',
    component: FormComponent,
  },
  {
    path: 'profilepage',
    title: 'Profile Page',
    component: ProfilepageComponent,
  },
  {

    path: 'login',
    title: 'Login Page',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    title: 'Register Page',
    component: RegisterPageComponent,
  },
  {
    path: '',
    title: 'Homepage',
    component: HomepageComponent,

  },
];
