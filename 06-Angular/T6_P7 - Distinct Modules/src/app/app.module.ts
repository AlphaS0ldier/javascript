import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{CounterModule}from './counter/counter.module';
import { AppComponent } from './app.component';
import{DirectivesModule} from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CounterModule,DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
