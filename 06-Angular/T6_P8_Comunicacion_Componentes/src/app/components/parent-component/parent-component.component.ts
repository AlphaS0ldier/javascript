import { Component} from '@angular/core';
import { TestService } from '../../service/test-service.service';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  constructor(public testService:TestService ) {
  }

  public currentItem:string=" Hello World";

  public title:string=this.testService.titleParent;

}
