import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.sass']
})
export class ColorPalleteComponent implements OnInit {

  @Input() selectedColors;

  searchByColor = new EventEmitter();

  constructor() { }

  colors: object[] = [
    {id: 0, name: '#a80409' },
    {id: 1, name: '#C51531' },
    {id: 2, name: '#ed6750' },
    {id: 3, name: '#F39EA8' },
    {id: 4, name: '#ffd1f2' },
    {id: 5, name: '#a92e9c' },
    {id: 6, name: '#895eee' },
    // {id: 7, name: '#1580B6' },
    // {id: 8, name: '#0aa05a' },
    {id: 9, name: '#ffdf68' },
    {id: 10, name: '#faffd6' },
    {id: 11, name: '#ffffff' }
  ];


  ngOnInit() {
  }

  selectColor(color) {
    if (this.selectedColors.includes(color.id)) {
      let index = this.selectedColors.indexOf(color.id);
      this.selectedColors.splice(index, 1);
    } else {
      this.selectedColors.push(color.id);
    }
    this.searchByColor.emit();
  }
}
