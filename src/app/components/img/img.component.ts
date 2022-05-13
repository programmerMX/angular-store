import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() imgURL:string = '';
  defaultImg = '../../../assets/images/default-img-product.png'

  renderDefaultImg(){
    this.imgURL = this.defaultImg
  }
}
