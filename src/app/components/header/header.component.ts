import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuBtn: boolean = false;

  handleMenuBtn(){
    this.menuBtn = !this.menuBtn
    console.log(this.menuBtn);

  }

}
