import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'quick-order',
  templateUrl: './quick-order.component.html',
  styleUrls: ['./quick-order.component.sass']
})
export class QuickOrderComponent implements OnInit {
  @Input() extended: any;

  staticUrlToFile = 'assets/images/';
  item = {
    src: 'flowers.png',
    price: 300
  };

  dataFormControl = new FormControl('', [Validators.required]);

  autoCompleteSettings = {
    inputPlaceholderText: '',
    currentLocIconUrl: this.staticUrlToFile + 'currentLocation.png',
    geoCountryRestriction: ['ua'],
    geoLocation: [49.85, 24.0166666667],
    geoRadius: 3,
    showCurrentLocation: false,
  };
  constructor() { }

  ngOnInit() {
  }

  autoCompleteCallback1(selectedData: any) {
    console.log(selectedData.formatted_address);
  }


}
