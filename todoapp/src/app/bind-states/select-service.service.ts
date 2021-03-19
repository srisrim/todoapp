import { Injectable } from "@angular/core";
import { Country } from "../bind-states/country";
import { State } from "../bind-states/state";

@Injectable({
  providedIn: "root",
})
export class SelectServiceService {
  constructor() {}

  getCountries() {
    return [new Country(1, "India"), new Country(2, "USA")];
  }

  getStates() {
    return [
      new State(1, 1, "TN"),
      new State(2, 1, "KA"),
      new State(3, 1, "KL"),
      new State(4, 1, "AP"),
      new State(5, 2, "Arizona"),
      new State(6, 2, "Alaska"),
      new State(7, 2, "Florida"),
      new State(8, 2, "Hawaii"),
    ];
  }
}
