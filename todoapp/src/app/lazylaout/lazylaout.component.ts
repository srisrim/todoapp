import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lazylaout',
  templateUrl: './lazylaout.component.html',
  styleUrls: ['./lazylaout.component.scss']
})
export class LazylaoutComponent implements OnInit {

  constructor() { 
    const obs = new Observable((observer) => {
      observer.next('hello sri');
      observer.complete();
    });
    obs.subscribe();
  }

  ngOnInit() {
  }
}
