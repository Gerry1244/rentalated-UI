import { Component, OnInit } from '@angular/core';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Apartment } from '../apartment';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {

  apartments: Apartment[];
  error: string;
  selectedApartment: Apartment;

  constructor(private data: ApartmentDataService) { }

  selectApartments(active: boolean) {
                //  return this.apartments
                //   .filter(apartment => apartment.is_active === active);
    const arr = [];
    if (this.apartments) {
      for (let apt of this.apartments) {
        if (apt.is_active === active) {
          console.log(active);
          arr.push(apt);
        }
      }
    }
    return arr;
  }

  selectApartment(apartment: Apartment) {
    this.selectedApartment = apartment;
  }

  changeStatus() {
    this.selectedApartment.is_active = !this.selectedApartment.is_active;
    //   this.updateButtonText();

    this.data.changeStatus(this.selectedApartment)
      .subscribe(apartment => this.selectedApartment.is_active = apartment.is_active);
  }

    status() {
      let status = "Activate"
      if (this.selectedApartment.is_active)
        status = "Deactivate"
      return status;
    }

    hideDetails() {
      this.selectedApartment = null;
    }

    ngOnInit() {
      this.data
        .getMyListings()
        .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'Could not load apartment data'
        );
    }

  }



