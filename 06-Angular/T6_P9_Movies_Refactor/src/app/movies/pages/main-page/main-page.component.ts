import { Component } from '@angular/core';
import {moviesMock} from '../../../../mocks/mockDataMovies';
import {Movie} from '../../../../interfaces/Movies';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public movies:Movie[]=moviesMock;
}
