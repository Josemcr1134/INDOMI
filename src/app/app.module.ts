import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { pagesModule } from './pages/pages.module';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';
import { ComponentsModule } from './components/components.module';
@NgModule({
  declarations: [
    AppComponent,
    NotPageFoundComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    pagesModule,
    AuthModule,
    ComponentsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
