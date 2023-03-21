import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { ToggleMessageComponent } from './toggle-message/toggle-message.component';
import { ColorsComponent } from './colors/colors.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    CounterComponent,
    ToggleMessageComponent,
    ColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
