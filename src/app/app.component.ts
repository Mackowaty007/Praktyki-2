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
    var pathToPhoto = 'https://jsonplaceholder.typicode.com/comments/1'
    if(idPosta != null){
      pathToPhoto = 'https://jsonplaceholder.typicode.com/comments/' + idPosta.toString()
    }
    fetch(pathToPhoto)
    .then(function(response){
      return response.json()
    })
    .then((response) => {
      console.log(response)
      var postId = document.getElementById('postId')
      var id = document.getElementById('id')
      var name = document.getElementById('name')
      var email = document.getElementById('email')
      var body = document.getElementById('body')
      if(postId != null ){
        postId.innerHTML = response.postId
      }
      if(id != null ){
        id.innerHTML = response.id
      }
      if(name != null ){
        name.innerHTML = response.name
      }
      if(email != null ){
        email.innerHTML = response.email
      }
      if(body != null ){
        body.innerHTML = response.body
      }
    })
  }
}
