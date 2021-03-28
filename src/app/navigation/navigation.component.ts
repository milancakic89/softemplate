import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  public openNavigation = true;

  public toggleNav(){
    this.openNavigation = !this.openNavigation;
  }

  ngOnInit(): void {
  }

}
