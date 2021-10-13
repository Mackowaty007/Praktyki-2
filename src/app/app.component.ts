import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "kliknij przycisk aby uzyskać losowe zdjęcie"
  request(){
    var randomID:number = Math.floor(Math.random() * 5000);

    var pathToPhoto = 'https://jsonplaceholder.typicode.com/photos/' + randomID.toString()

    fetch(pathToPhoto)
    .then(function(response){
      return response.json()
    })
    .then((response) => {
      console.log(response)
      var result = document.getElementById('result')
      if(result != null){
        result.setAttribute( 'src', response.url);
      }
    })
  }
}
