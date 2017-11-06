import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[wave-effect]',
  templateUrl: './wave-effect.component.html',
  styleUrls: ['./wave-effect.component.sass']
})
export class WaveEffectComponent implements OnInit {

  @Input() size: number;
  constructor() { }

  ngOnInit() {
  }

}
