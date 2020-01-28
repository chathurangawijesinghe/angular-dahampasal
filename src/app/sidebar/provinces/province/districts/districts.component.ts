import { Component, OnInit, Input } from '@angular/core';
import { District } from './district.model';
import { Province } from '../../province.model';

@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  @Input() province: Province;

  selectedDistricts: District[];

  districts: District[] = [
    { id: 1, name: 'Jaffna', order: 1, provinceId: 1 },
    { id: 2, name: 'Kilinochchi', order: 1, provinceId: 1 },
    { id: 3, name: 'Mannar', order: 1, provinceId: 1 },
    { id: 4, name: 'Mullaitivu', order: 1, provinceId: 1 },
    { id: 5, name: 'Vavuniya', order: 1, provinceId: 1 },
    { id: 6, name: 'Puttalam', order: 1, provinceId: 2 },
    { id: 7, name: 'Kurunegala', order: 1, provinceId: 2 },
    { id: 8, name: 'Gampaha', order: 1, provinceId: 3 },
    { id: 9, name: 'Colombo', order: 1, provinceId: 3 },
    { id: 10, name: 'Kalutara', order: 1, provinceId: 3 }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedDistricts = this.districts.filter((district) => {
      return district.provinceId === this.province.id;
    });
  }

}
