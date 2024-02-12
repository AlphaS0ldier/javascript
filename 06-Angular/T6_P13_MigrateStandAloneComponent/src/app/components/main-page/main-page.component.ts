import { Component } from '@angular/core';
import { Movie } from '../../interfaces/Movies';
import { MoviesService } from '../../services/movies.service';
import { MoviesResponse } from '../../interfaces/MoviesResponse';
import { MoviesListComponent } from '../movies-list/movies-list.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  standalone:true,
  imports:[MoviesListComponent]
})
export class MainPageComponent {
  constructor(public MoviesService:MoviesService){
  }

  public moviesList:Movie[]=[];

  ngOnInit(): void {
    this.MoviesService.getMovies().subscribe((res:MoviesResponse)=>{
      this.moviesList=res.data;
    })
  }

  public sendMovieId(id:string):void{
    this.moviesList=this.MoviesService.deleteMovie(id,this.moviesList);
  }

}
