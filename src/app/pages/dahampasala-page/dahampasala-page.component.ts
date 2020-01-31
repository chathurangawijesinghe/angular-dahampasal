import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dahampasala } from './dahampasala.model';

@Component({
  selector: 'app-dahampasala-page',
  templateUrl: './dahampasala-page.component.html',
  styleUrls: ['./dahampasala-page.component.css']
})
export class DahampasalaPageComponent implements OnInit {

  dahampasal: Dahampasala[] = [
    { id: 1, name: 'Sri Sobhitha 1', displayName: 'Sri Sobhitha 1', districtId: 8 },
    { id: 2, name: 'Sri Sobhitha 2', displayName: 'Sri Sobhitha 2', districtId: 8 },
    { id: 3, name: 'Sri Sobhitha 3', displayName: 'Sri Sobhitha 3', districtId: 8 },
    { id: 4, name: 'Sri Sobhitha 4', displayName: 'Sri Sobhitha 4', districtId: 9 },
    { id: 5, name: 'Sri Sobhitha 5', displayName: 'Sri Sobhitha 5', districtId: 9 },
    { id: 6, name: 'Sri Sobhitha 6', displayName: 'Sri Sobhitha 6', districtId: 10 },
    { id: 7, name: 'Sri Sobhitha 7', displayName: 'Sri Sobhitha 7', districtId: 10 }
  ];

  dahampasala: Dahampasala;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getDahampasala();
  }

  getDahampasala(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dahampasala = this.dahampasal.find((dahampasala) => {
      return dahampasala.id === id;
    });
  }

}
