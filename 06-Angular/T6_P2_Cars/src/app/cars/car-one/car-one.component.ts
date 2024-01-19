import { Component } from '@angular/core';
import {cars} from '../../mockData';

@Component({
  selector: 'app-car-one',
  templateUrl: './car-one.component.html',
  styleUrl: './car-one.component.css'
})
export class CarOneComponent {
  public model:string=cars[1]["model"];
  public make:string=cars[1]["make"];
  public type:string=cars[1]["type"];
  public year:number=cars[1]["year"];
}
