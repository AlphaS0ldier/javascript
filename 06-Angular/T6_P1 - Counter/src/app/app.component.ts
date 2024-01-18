import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
