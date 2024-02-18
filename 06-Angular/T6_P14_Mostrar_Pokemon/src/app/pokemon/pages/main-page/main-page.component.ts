import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../../../interfaces/pokemon';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  constructor(public PokemonsService: PokemonsService) {}

  public pokemonsList: Pokemon[] = [];

  public capitalizeFirstletter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  public generatePokemon(): void {
    let id: number = Math.floor(Math.random() * 1200);
    this.PokemonsService.getPokemon(id).subscribe(
      (res: any) => {
        let Pokemon: Pokemon = {
          id: res.id,
          name: this.capitalizeFirstletter(res.name),
          abilities: [],
          stats: [],
          types: [],
          sprites: {
            front_default: res.sprites.front_default,
            back_default: res.sprites.back_default,
          },
        };
        Object.values(res.abilities).forEach((e) => {
          let obj: any = e;
          let obje = {
            name: this.capitalizeFirstletter(obj.ability.name),
            is_hidden: obj.is_hidden,
            slot: obj.slot,
          };
          Pokemon.abilities.push(obje);
        });
        Object.values(res.stats).forEach((e) => {
          let obj: any = e;
          let obje = {
            name: obj.stat.name.toUpperCase(),
            base_stat: obj.base_stat,
            effort: obj.effort,
          };
          Pokemon.stats.push(obje);
        });
        Object.values(res.types).forEach((e) => {
          let obj: any = e;
          let obje = {
            name: this.capitalizeFirstletter(obj.type.name),
            slot: obj.slot,
          };

          Pokemon.types.push(obje);
        });
        this.pokemonsList.push(Pokemon);
      },
      (error) => {
        this.pokemonsList.push(this.PokemonsService.Digimon(id));
      }
    );
  }

  public generatePokemons(): void {
    this.pokemonsList = [];
    for (let i = 0; i < 8; i++) {
      this.generatePokemon();
    }
  }

  public sendIdToService(id: number): void {
    this.pokemonsList = this.PokemonsService.deletePokemon(
      id,
      this.pokemonsList
    );
  }

  public regeneratePokemon(id: number): void {
    this.sendIdToService(id);
    this.generatePokemon();
  }
  ngOnInit(): void {
    this.generatePokemons();
  }
}
