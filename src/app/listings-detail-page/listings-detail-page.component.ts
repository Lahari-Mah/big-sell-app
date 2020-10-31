import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listings } from '../types';

@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent implements OnInit {

  listing:Listings;
  
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //Get id from Url
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
