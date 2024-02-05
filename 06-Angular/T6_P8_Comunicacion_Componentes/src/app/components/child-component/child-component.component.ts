import { Component,EventEmitter,Input,Output } from '@angular/core';
import { TestService } from '../../service/test-service.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
  constructor(public testService:TestService ) {
  }

  @Input()
  public item:string='';
  @Output()
  public textEvent:EventEmitter<string>=new EventEmitter<string>();

  public addNewItem(value:string):void{
    this.textEvent.emit(value);
  }

  @Output()
  public textEventPress:EventEmitter<string>=new EventEmitter<string>();

  public addNewItemPress(value:string):void{
    this.textEvent.emit(value);
  }

  public title:string=this.testService.titleChild;

}
