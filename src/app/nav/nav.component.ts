import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public page: string;

  constructor(private router: Router) { }

  ngOnInit() {
    // console.log(this.getPage());
  }

  getPage() {
    return this.router.url.slice(1);
  }

}
