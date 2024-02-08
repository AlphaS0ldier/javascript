import { Component,Input } from '@angular/core';
import { Movie } from '../../../../interfaces/Movies';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  constructor(public MoviesService:MoviesService){
  }

  @Input()
  public moviesList:Movie[]=this.MoviesService.movies;
}
