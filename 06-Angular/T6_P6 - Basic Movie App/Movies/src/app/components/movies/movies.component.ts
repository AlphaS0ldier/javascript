import { Component } from '@angular/core';
import {moviesMock} from '../../../mocks/mockDataMovies';
import {Movie} from '../../../interfaces/Movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  public movies:Movie[]=moviesMock;
}
