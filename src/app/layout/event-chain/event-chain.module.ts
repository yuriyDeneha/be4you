import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventChainComponent } from './event-chain.component';
import {EventChainRoutingModule} from "./event-chain-routing.module";

@NgModule({
  imports: [
    CommonModule,
    EventChainRoutingModule,
  ],
  declarations: [EventChainComponent]
})
export class EventChainModule { }
