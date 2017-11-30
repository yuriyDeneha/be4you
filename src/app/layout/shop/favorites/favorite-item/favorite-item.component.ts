import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.sass']
})
export class FavoriteItemComponent implements OnInit {
  @Input() favorite;
  @Input() openMode;
  constructor() { }

  ngOnInit() {
  }

}
