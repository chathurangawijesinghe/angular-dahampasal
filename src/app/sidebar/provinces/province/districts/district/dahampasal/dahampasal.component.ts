import { Component, OnInit, Input } from '@angular/core';
import { Dahampasala } from './dahampasala.model';
import { District } from '../../district.model';

@Component({
  selector: 'app-dahampasal',
  templateUrl: './dahampasal.component.html',
  styleUrls: ['./dahampasal.component.css']
})
export class DahampasalComponent implements OnInit {

  @Input() district: District;

  selectedDahampasal: Dahampasala[];

  dahampasal: Dahampasala[] = [
    { id: 1, name: 'Sri Sobhitha 1', displayName: 'Sri Sobhitha 1', districtId: 8 },
    { id: 2, name: 'Sri Sobhitha 2', displayName: 'Sri Sobhitha 2', districtId: 8 },
    { id: 3, name: 'Sri Sobhitha 3', displayName: 'Sri Sobhitha 3', districtId: 8 },
    { id: 4, name: 'Sri Sobhitha 4', displayName: 'Sri Sobhitha 4', districtId: 9 },
    { id: 5, name: 'Sri Sobhitha 5', displayName: 'Sri Sobhitha 5', districtId: 9 },
    { id: 6, name: 'Sri Sobhitha 6', displayName: 'Sri Sobhitha 6', districtId: 10 },
    { id: 7, name: 'Sri Sobhitha 7', displayName: 'Sri Sobhitha 7', districtId: 10 }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedDahampasal = this.dahampasal.filter((dahampasala) => {
      return dahampasala.districtId === this.district.id;
    });
  }

}
