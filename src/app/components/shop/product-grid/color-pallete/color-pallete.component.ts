import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.sass']
})
export class ColorPalleteComponent implements OnInit {

  constructor() { }

  colors: String[] = [
    '#C51531',
    '#ED6946',
    '#FCE616',
    '#0A9753',
    '#1580B6',
    '#952C87',
    '#F39EA8',
    '#814514',
    '#989898',
    '#ffffff',
    '#000000'
  ];


  ngOnInit() {
  }

}
