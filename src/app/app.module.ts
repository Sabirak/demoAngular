import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TalktoastrollegerComponent } from './talktoastrolleger/talktoastrolleger.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TalktoastrollegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
