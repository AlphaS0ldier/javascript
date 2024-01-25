import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { ForflowComponent } from './components/forflow/forflow.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    ForflowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
