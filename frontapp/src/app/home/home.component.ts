import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private http: Http) {
  }

  addPerson(name) {

    this.http.post('http://localhost:8080/user/save', {name})
      .subscribe(() => {
        console.log('done');
      })
  }

}
