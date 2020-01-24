import { Component, OnInit } from '@angular/core';
import { Province } from './province.model';

@Component({
  selector: 'app-provinces',
  templateUrl: './provinces.component.html',
  styleUrls: ['./provinces.component.css']
})
export class ProvincesComponent implements OnInit {

  provinces: Province[] = [
    { id: 1, name: 'Central', order: 3 },
    { id: 1, name: 'Eastern', order: 2 },
    { id: 1, name: 'North Central', order: 1 },
    { id: 1, name: 'Northern', order: 1 },
    { id: 1, name: 'North Western', order: 1 },
    { id: 1, name: 'Sabaragamuwa', order: 1 },
    { id: 1, name: 'Southern', order: 1 },
    { id: 1, name: 'Uva', order: 1 },
    { id: 1, name: 'Western', order: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }



}
