import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http:Http) { }

  fetchData() {
    //observable
    return this.http.get('assets/friends.json').map(
      (res) => res.json()
    );
  }
}
