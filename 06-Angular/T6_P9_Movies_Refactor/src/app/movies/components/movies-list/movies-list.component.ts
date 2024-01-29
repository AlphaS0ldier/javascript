import { Component,Input } from '@angular/core';
import { Movie } from '../../../../interfaces/Movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input()
  public moviesList:Movie[]=[];
}
