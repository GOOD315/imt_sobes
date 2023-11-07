import { Component } from '@angular/core';
import { ApiService } from '../registration.service';

class User {
  name: string;
  photo: string;
}


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  constructor(private apiService: ApiService) { }

  user;
  result = this.apiService.getUserData();

  ngOnInit() {

    this.result.subscribe(
      (result: any) => {
        this.user = {
          name: result.results[0].name.first,
          photo: result.results[0].picture.large
        }
      }
    );
  }
}
