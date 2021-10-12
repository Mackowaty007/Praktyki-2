import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "podaj swoje imie, a ja je zwroce!"
  currentVal = "";
  getVal(val: string){
    this.currentVal = val
  }
}
