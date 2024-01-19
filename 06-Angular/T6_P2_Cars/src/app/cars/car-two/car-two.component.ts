import { Component } from '@angular/core';
import {cars} from '../../mockData';

@Component({
  selector: 'app-car-two',
  templateUrl: './car-two.component.html',
  styleUrl: './car-two.component.css'
})
export class CarTwoComponent {
  public model:string=cars[2]["model"];
  public make:string=cars[2]["make"];
  public type:string=cars[2]["type"];
  public year:number=cars[2]["year"];
}
