import { Component, OnInit } from '@angular/core';
import { MdToolbarModule, MdButtonModule, MdIconModule } from '@angular/material';
import { Router } from '@angular/router';

import { GuardService } from '../../shared/services/guard.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title: string = "Firebase app";

  constructor(private guardService: GuardService, private router:Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logging out...');
    this.guardService.logout();
    this.router.navigate(['/home']);
  }

}
