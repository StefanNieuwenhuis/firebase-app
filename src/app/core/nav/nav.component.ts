import { Component, OnInit } from '@angular/core';
import {MdToolbarModule} from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title:string = "Firebase app";
  
  constructor() { }

  ngOnInit() {
  }

}
