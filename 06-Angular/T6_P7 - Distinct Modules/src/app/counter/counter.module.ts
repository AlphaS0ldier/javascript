import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppCounter } from './pages/main-page.component';
import { CounterComponentCounter } from './components/counter/counter.component';

@NgModule({
  declarations: [AppCounter,CounterComponentCounter],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppCounter],
  exports:[AppCounter]
})
export class CounterModule {}
