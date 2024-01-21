import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  public text: string = '@if';
  public ngif: boolean = false;
  public aif: boolean = false;

  public pre17:boolean=false;
  public post17:boolean=false;

  public namsur:string="";

  public showNgIf(): void {
    if (this.ngif == false) {
      if (this.aif == true) {
        this.aif = false;
      }
      this.ngif = true;
    } else {
      this.ngif = false;
    }
  }

  public showAif(): void {
    if (this.aif == false) {
      if (this.ngif == true) {
        this.ngif = false;
      }
      this.aif = true;
    } else {
      this.aif = false;
    }
  }

  public changeNamSur(value:string):void{
    let name:string|null=(document.querySelector("#name") as HTMLInputElement).value;
    let surname:string|null=(document.querySelector("#surname") as HTMLInputElement).value;
    if(name && surname){
      this.namsur=`${name} ${surname}`;
      if(value=='pre17'){
        this.pre17=true;
        this.post17=false;
      }else{
        this.pre17=false;
        this.post17=true;
      }
    }
    else{
      alert('Please fill up all fields');
    }
  }

}
