import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/Movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
  standalone:true
})
export class MovieComponent {
  @Input()
  public movie!: Movie;

  @Output()
  public MovieTitleEvent: EventEmitter<string> = new EventEmitter<string>();

  public addMovieTitle(value: string): void {
    this.MovieTitleEvent.emit(value);
  }

  @Output()
  public MovieIdEvent: EventEmitter<string> = new EventEmitter<string>();

  public addMovieId(value: string): void {
    this.MovieIdEvent.emit(value);
  }
}
