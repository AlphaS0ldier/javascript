import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../interfaces/MoviesResponse';
import { Movie } from '../interfaces/Movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url:string='https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=mission';

  private movieId:string="";

  private options = {
    headers: {
      'X-RapidAPI-Key': '00ba803fcamsh5399c242ae2756ap109ea9jsncd1f07edcde4',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
    }
  };

  constructor(private http: HttpClient) { }

  public getMovies(): Observable<MoviesResponse>{
    return this.http.get<MoviesResponse>(this.url,this.options);
  }

  public deleteMovie(movieId:string,movieList:Movie[]):Movie[]{
    movieList=movieList.filter(movie => movie.id!=movieId);
    return movieList;
  }

}
