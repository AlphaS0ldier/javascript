import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Pokemon } from '../../../../interfaces/pokemon';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  @Input()
  public pokemon!:Pokemon;

  @Output()
  public PokemonIdEvent: EventEmitter<number> = new EventEmitter<number>();

  public addPokemonId(value: number): void {
    this.PokemonIdEvent.emit(value);
  }

  @Output()
  public PokemonIdGenEvent: EventEmitter<number> = new EventEmitter<number>();

  public addPokemonIdGen(value: number): void {
    this.PokemonIdGenEvent.emit(value);
  }
}
