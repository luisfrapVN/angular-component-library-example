import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, TextModule, ImageModule } from 'cLibrary';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TextModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
