import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterComponent
  },
//   {
//     path: 'posts',
//   },
//   {
//     path: 'posts/details/:id',
//   },
//   {
//     path: 'auth',
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}