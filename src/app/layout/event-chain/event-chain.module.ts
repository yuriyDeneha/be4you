import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventChainComponent } from './event-chain/event-chain.component';

@NgModule({
  imports: [
    CommonModule,
    EventChainRoutingModule,
  ],
  declarations: [EventChainComponent]
})
export class EventChainModule { }
