import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.sass']
})
export class FavoriteItemComponent implements OnInit {
  @Input() favorite;
  @Input() openMode;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeFromFavorites() {
    this.remove.emit();
  }
}
