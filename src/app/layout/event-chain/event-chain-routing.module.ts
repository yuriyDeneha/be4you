import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventChainComponent} from "./event-chain.component";



const routes: Routes = [
  {
    path: '',
    component: EventChainComponent
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventChainRoutingModule {}
