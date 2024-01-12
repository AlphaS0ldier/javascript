import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <h1 (mouseover)="helloWorld()">Hello World!</h1>
    <hr />
    <p>{{ title }} ,Hello Angular</p>
  `,
  //styleUrl: './app.component.css'
  styles: ['h1 {background-color:red;color:green;}'],
})
export class AppComponent {
  public title: string = 'My first title';
  helloWorld(): void {
    console.log('Event mouse Over');
  }
}
