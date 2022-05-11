import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCourseComponent } from './Allcomponents/list-course/list-course.component';
import { ContactComponent } from './Allcomponents/contact/contact.component';
import { HomeComponent } from './Allcomponents/home/home.component';
import { LoginComponent } from './Allcomponents/login/login.component';
import { NotFoundComponent } from './Allcomponents/not-found/not-found.component';
import { ServicesComponent } from './Allcomponents/services/services.component';
import { TableexampleComponent } from './Allcomponents/tableexample/tableexample.component';
import { DetailProfileComponent } from './Allcomponents/detail-profile/detail-profile.component';
import { ReactiveComponent } from './Allcomponents/reactive/reactive.component';
import { TemplateformComponent } from './Allcomponents/templateform/templateform.component';
import { LoginandregisterComponent } from './Allcomponents/loginandregister/loginandregister.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list-course', component: ListCourseComponent },
  // { path: 'course', component: ListCourseComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'table', component:TableexampleComponent },
  { path: 'table/:pid',  component: DetailProfileComponent },
  { path: 'reactive',  component: ReactiveComponent },
  { path: 'templateform',  component: TemplateformComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'loginandregister', component: LoginandregisterComponent },
  // { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
