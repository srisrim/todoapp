import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: TodoDashboardComponent 
  },
  {
    path: 'lazylayout',
    loadChildren: './lazymodule/lazymodule.module#LazymoduleModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
