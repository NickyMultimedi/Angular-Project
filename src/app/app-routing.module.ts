import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageComponent} from './message/message.component';
import {Message2Component} from './message2/message2.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MessageComponent
  },
  {
    path: 'message2',
    component: Message2Component
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
