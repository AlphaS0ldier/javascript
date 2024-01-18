import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './app.component.counter.html'
})
export class AppComponentCounter {
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
}
