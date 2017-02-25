import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private people : User[] = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllPeople();
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
