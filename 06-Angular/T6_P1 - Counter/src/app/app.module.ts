
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppComponentCounter } from './counter/app.component.counter';

@NgModule({
  declarations: [
    AppComponent,
    AppComponentCounter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
