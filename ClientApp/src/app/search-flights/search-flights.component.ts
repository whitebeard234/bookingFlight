import { Component, OnInit } from '@angular/core';
import { FlightService } from './../api/services/flight.service';
import { FlightRm } from '../api/models';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = []
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {

  }

  search() {
    this.flightService.searchFlight({})
      .subscribe({
        next: (response) => {
          this.searchResult = response;
        },
        error: (error) => {
          console.log("Response Error. Status: ", error.status)
          console.log("Response Error. Status Text: ", error.statusText)
          console.log(error)
        }

      })
  }
}

