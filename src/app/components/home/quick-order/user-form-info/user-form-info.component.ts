import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-user-form-info',
  templateUrl: './user-form-info.component.html',
  styleUrls: ['./user-form-info.component.sass']
})
export class UserFormInfoComponent implements OnInit {

  staticUrlToFile = 'assets/images/';
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
