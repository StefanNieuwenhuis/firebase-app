import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from '../shared/services/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private guardService: GuardService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.guardService.login();
    this.router.navigate(['/login']);
  }

}
