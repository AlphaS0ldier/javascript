import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../interfaces/Movies';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  standalone: true,
  imports:[MovieComponent]
})
export class MoviesListComponent {
  @Input()
  public moviesList: Movie[] = [];

  @Output()
  public MovieIdToServiceEvent: EventEmitter<string> =
    new EventEmitter<string>();

  public sendMovieIdToService(value: string): void {
    this.MovieIdToServiceEvent.emit(value);
  }
}
