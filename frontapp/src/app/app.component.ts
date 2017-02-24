import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private people : User[] = [];

  constructor(private http: Http) {
  }

  addPerson(name) {

    this.http.post('http://localhost:8080/user/save', {name})
      .subscribe(() => {
        console.log('done');
      })
  }

  getAllPeople() {
    this.http.get('http://localhost:8080/user/all')
      .subscribe(people => {
        console.log(people.json());
        this.people = people.json()
      })
  }

}

class User {
  name: string;
}
