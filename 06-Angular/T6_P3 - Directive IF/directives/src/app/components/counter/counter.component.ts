import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public value:number = 0;
  public operation(oper:string):void{
    if(oper==="sum"){
      this.value++;
    }
    else if(oper==="minus"){
      this.value--;
    } else{
      this.value=0;
    }

  }
  public toggle():boolean{
    return this.value==0?true:false;
  }
}
