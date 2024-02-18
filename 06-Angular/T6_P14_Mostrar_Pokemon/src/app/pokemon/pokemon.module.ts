import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainPageComponent,
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class PokemonModule { }
