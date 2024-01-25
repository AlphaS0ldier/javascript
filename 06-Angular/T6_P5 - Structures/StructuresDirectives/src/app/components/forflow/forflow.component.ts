import { Component } from '@angular/core';
import { cars } from '../../mockData';
@Component({
  selector: 'app-forflow',
  templateUrl: './forflow.component.html',
  styleUrl: './forflow.component.css'
})
export class ForflowComponent {
  public objcars=cars;
}
