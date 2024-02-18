import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Pokemon } from '../../../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input()
  public pokemonsList:Pokemon[]=[];

  @Output()
  public sendMainPokemonIdEvent: EventEmitter<number> = new EventEmitter<number>();

  public sendMainPokemonId(value: number): void {
    this.sendMainPokemonIdEvent.emit(value);
  }

  @Output()
  public sendMainPokemonIdEventGen: EventEmitter<number> = new EventEmitter<number>();

  public sendMainPokemonIdGen(value: number): void {
    this.sendMainPokemonIdEventGen.emit(value);
  }
}
