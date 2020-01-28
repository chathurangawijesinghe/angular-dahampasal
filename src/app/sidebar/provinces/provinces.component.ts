import { Component, OnInit } from '@angular/core';
import { Province } from './province.model';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {

  provinces: Province[] = [
    { id: 1, name: 'Northern', order: 3, hasDistricts: true },
    { id: 2, name: 'North Western', order: 2, hasDistricts: true },
    { id: 3, name: 'Western', order: 1, hasDistricts: true },
    { id: 4, name: 'North Central', order: 1, hasDistricts: false },
    { id: 5, name: 'Central', order: 1, hasDistricts: false },
    { id: 6, name: 'Sabaragamuwa', order: 1, hasDistricts: false },
    { id: 7, name: 'Eastern', order: 1, hasDistricts: false },
    { id: 8, name: 'Uva', order: 1, hasDistricts: false },
    { id: 9, name: 'Southern', order: 1, hasDistricts: false },
  ];

  constructor() { }

  ngOnInit() {
  }



}
