import { Component } from '@angular/core';
import {cars} from '../../mockData';

@Component({
  selector: 'app-car-cero',
  templateUrl: './car-cero.component.html',
  styleUrl: './car-cero.component.css'
})
export class CarCeroComponent {
  public model:string=cars[0]["model"];
  public make:string=cars[0]["make"];
  public type:string=cars[0]["type"];
  public year:number=cars[0]["year"];
}
