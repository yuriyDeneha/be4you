import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductsService} from "../../../../shared/products.service";

@Component({
  selector: 'color-pallete',
  templateUrl: './color-pallete.component.html',
  styleUrls: ['./color-pallete.component.sass']
})
export class ColorPalleteComponent implements OnInit {

  @Input() selectedColors;
  @Output() searchByColor: EventEmitter<any> = new EventEmitter();

  constructor(private productsService: ProductsService) { }

  colors: object[];


  ngOnInit() {
    this.productsService.fetchColors()
      .subscribe(colors => this.colors = this.productsService.addIdsToItems(colors) );
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
