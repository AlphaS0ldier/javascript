import { Injectable } from '@angular/core';
import {moviesMock} from '../../../mocks/mockDataMovies';
import {Movie} from '../../../interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public movies:Movie[]=moviesMock;
  constructor() { }
}
