import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  public text:string="@if";
  public ngif:boolean=false;
  public aif:boolean=false;

  public showNgIf():void{
    if(this.ngif==false){
      if(this.aif==true){
        this.aif=false;
      }
      this.ngif=true;
    }
    else{
      this.ngif=false;
    }
  }

  public showAif():void{
    if(this.aif==false){
      if(this.ngif==true){
        this.ngif=false;
      }
      this.aif=true;
    }
    else{
      this.aif=false;
    }
  }

}
