import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from './materials/materials.module';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './Allcomponents/header/header.component';
import { FooterComponent } from './Allcomponents/footer/footer.component';
import { MainContainerComponent } from './Allcomponents/main-container/main-container.component';
import { ListCourseComponent } from './Allcomponents/list-course/list-course.component';
import { CourseComponent } from './Allcomponents/course/course.component';
import { ServicesComponent } from './Allcomponents/services/services.component';
import { ContactComponent } from './Allcomponents/contact/contact.component';
import { NotFoundComponent } from './Allcomponents/not-found/not-found.component';
import { LoginComponent } from './Allcomponents/login/login.component';
import { HomeComponent } from './Allcomponents/home/home.component';
import { AddressComponent } from './Allcomponents/address/address.component';
import { TableexampleComponent } from './Allcomponents/tableexample/tableexample.component';
import { DetailProfileComponent } from './Allcomponents/detail-profile/detail-profile.component';
import { ReactiveComponent } from './Allcomponents/reactive/reactive.component';

import { ConfigService } from './Allservices/config.service';
import { TitlePipe } from './Allpipes/title.pipe';
import { BracketPipe } from './Allpipes/bracket.pipe';
import { ThbsbackgroundDirective } from './Alldirectives/thbsbackground.directive';
import { TemplateformComponent } from './Allcomponents/templateform/templateform.component';
import { LoginandregisterComponent } from './Allcomponents/loginandregister/loginandregister.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServicesComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    AddressComponent,
    TableexampleComponent,
    DetailProfileComponent,
    ReactiveComponent,
    TitlePipe,
    BracketPipe,
    ThbsbackgroundDirective,
    TemplateformComponent,
    LoginandregisterComponent



  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatTabsModule,
    MaterialsModule,
    FormsModule

  ],

  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
