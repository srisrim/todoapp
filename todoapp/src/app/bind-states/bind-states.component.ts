import { Component, Input, OnInit, Output } from '@angular/core';

import { SelectServiceService } from "../bind-states/select-service.service";
import { Country } from "../bind-states/country";
import { State } from "../bind-states/state";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bind-states',
  templateUrl: './bind-states.component.html',
  styleUrls: ['./bind-states.component.scss']
})
export class BindStatesComponent implements OnInit {

  constructor(private _selectService:SelectServiceService) { }

  count: any = 0;
  @Output() updateCount = new EventEmitter();

  selectedCountry: Country = new Country(1, "India");
  country: Country[];
  state: State[];

  ngOnInit() {
    this.country = this._selectService.getCountries();
    // this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryid) {
    this.state = this._selectService.getStates().filter(data => data.countryId == countryid);
    console.log(this.state);
  }

  onUpdateCount() {
    this.count++;
    this.updateCount.emit(this.count);
  }

}
