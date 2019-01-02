import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    this.authService.login();
    this.userService.user.name = 'Tiep Phan';
  }

  logout() {
    this.authService.logout();
  }

}
