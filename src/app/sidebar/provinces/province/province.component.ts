import { Component, OnInit, Input } from '@angular/core';
import { Province } from '../province.model';

@Component({
  selector: 'app-province',
  templateUrl: './province.component.html',
  styleUrls: ['./province.component.css']
})
export class ProvinceComponent implements OnInit {

  @Input() province: Province;

  constructor() { }

  ngOnInit() {
  }

}
