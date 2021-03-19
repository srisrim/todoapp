import { NgModule } from '@angular/core';
import { LazylaoutComponent } from '../lazylaout/lazylaout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LazylaoutComponent },
]

@NgModule({
  declarations: [
    LazylaoutComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class LazymoduleModule { }
