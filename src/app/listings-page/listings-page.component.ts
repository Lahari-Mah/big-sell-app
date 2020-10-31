import { Component, OnInit } from '@angular/core';
import { Listings } from '../types';
import { fakeListings } from '../fake-data'


@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {

  listing: Listings[] = []; // Varibale declaration with empty array
  constructor() { }

  ngOnInit(): void {
    this.listing= fakeListings;
  }

}
