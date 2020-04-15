import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  course = [{"c1":"JAVA","c2":"SPRING","c3":"SPRING BOOT","c4":"TESTING"}];
  col="red"

  show()
  {
    alert("hi")
  }
}
