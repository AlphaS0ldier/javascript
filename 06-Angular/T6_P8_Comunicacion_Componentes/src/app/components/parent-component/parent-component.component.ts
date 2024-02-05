import { Component} from '@angular/core';
import { TestService } from '../../service/test-service.service';
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {
  public currentItem:string=" Hello World";

  public title:string;

  constructor(public testService:TestService ) {
    this.title=testService.titleParent;
  }

}
