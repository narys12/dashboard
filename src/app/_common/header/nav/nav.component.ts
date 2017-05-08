import { Component, OnInit } from '@angular/core';
require('./nav.js');

@Component({
  selector: 'om-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
  }

}
