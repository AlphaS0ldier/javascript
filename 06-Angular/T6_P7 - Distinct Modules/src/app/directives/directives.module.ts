import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppDirectives } from './pages/main-page.component';
import { DirectivesComponentsDirectives } from './components/directive/directive.component';

@NgModule({
  declarations: [AppDirectives,DirectivesComponentsDirectives],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [],
  exports:[AppDirectives]
})
export class DirectivesModule {}
