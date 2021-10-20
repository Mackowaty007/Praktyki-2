import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "tabela"
  request(){
    var idPosta = (<HTMLInputElement>document.getElementById("myText")).value;
    console.log(idPosta)
    var path = 'https://localhost:5001/WeatherForecast/0'
    if(idPosta != null){
      path = 'https://localhost:5001/WeatherForecast' + idPosta.toString()
    }
    fetch(path)
    .then(function(response){
      return response.json()
    })
    .then((response) => {
      console.log(response)
    })
  }
}
