import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { FormsModule } from '@angular/forms';
import { TodoCompletedComponent } from './todo-completed/todo-completed.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { DecimalpipeComponent } from './pipe/decimalpipe/decimalpipe.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoCompletedComponent,
    HighlightDirective,
    StockStatusComponent,
    DecimalpipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
