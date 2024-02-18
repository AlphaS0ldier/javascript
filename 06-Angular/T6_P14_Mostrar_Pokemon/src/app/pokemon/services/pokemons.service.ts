import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { Pokemon } from '../../../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  private url: string = `https://pokeapi.co/api/v2/pokemon/`;

  public Digimon(id:number): Pokemon{
    let digi:Pokemon={
      id: 0,
      name: 'Agumon',
      abilities: [],
      stats: [],
      types: [],
      sprites: {
        front_default: '../../../../assets/agumon.png',
        back_default: 'a',
      },
    };
    digi.id=id*-1;
    return digi
  }

  public getPokemon(id: number): Observable<any> {
    let url = `${this.url}${id}`;
    return this.http.get(url);
  }

  public deletePokemon(id:number,pokemonList:Pokemon[]):Pokemon[]{
    pokemonList=pokemonList.filter(pokemon=>pokemon.id!=id);
    return pokemonList;
  }

}
