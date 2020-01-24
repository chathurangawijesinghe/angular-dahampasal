import { Component, OnInit, Input } from '@angular/core';
import { District } from '../district.model';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  @Input() district: District;

  constructor() { }

  ngOnInit() {
  }

}
