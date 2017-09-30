import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {


  @Input()
  apartment: Apartment;

  constructor(private data: ApartmentDataService) { }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");

    // clickActivate() {
    //   this.data
    //     .activateApartment(this.apartment)
    //     .subscribe(
    //     apartment => this.apartment = apartment
    //     );
    // }


    // clickDeactivate() {
    //   this.data
    //     .deactivateApartment(this.apartment)
    //     .subscribe(
    //     apartment => this.apartment = apartment
    //     );
    // }
  }
}
