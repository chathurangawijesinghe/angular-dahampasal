import { Component, OnInit } from '@angular/core';
import { SidebarItem } from './sidebaritem.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  provinces: SidebarItem = {
    id: 2,
    name: 'Provinces',
    order: 2,
    clicked: true, link: '#', icon: 'fas fa-map',
    subitems: [
      {
        id: 1, name: 'Northern', order: 3, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
          { id: 1, name: 'Jaffna', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
          { id: 2, name: 'Kilinochchi', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
          { id: 3, name: 'Mannar', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
          { id: 4, name: 'Mullaitivu', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
          { id: 5, name: 'Vavuniya', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null }
        ]
      },
      {
        id: 2, name: 'North Western', order: 2, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
          { id: 6, name: 'Puttalam', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
          { id: 7, name: 'Kurunegala', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null }
        ]
      },
      {
        id: 3, name: 'Western', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
          {
            id: 8, name: 'Gampaha', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
              { id: 1, name: 'Sri Sobhitha 1', order: 1, clicked: false, link: '/dahampasala/1', icon: 'fas fa-map', subitems: null },
              { id: 2, name: 'Sri Sobhitha 2', order: 1, clicked: false, link: '/dahampasala/2', icon: 'fas fa-map', subitems: null },
              { id: 3, name: 'Sri Sobhitha 3', order: 1, clicked: false, link: '/dahampasala/3', icon: 'fas fa-map', subitems: null }
            ]
          },
          {
            id: 9, name: 'Colombo', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
              { id: 4, name: 'Sri Sobhitha 4', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
              { id: 5, name: 'Sri Sobhitha 5', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null }
            ]
          },
          {
            id: 10, name: 'Kalutara', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: [
              { id: 6, name: 'Sri Sobhitha 6', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
              { id: 7, name: 'Sri Sobhitha 7', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null }
            ]
          }
        ]
      },
      { id: 4, name: 'North Central', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
      { id: 5, name: 'Central', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
      { id: 6, name: 'Sabaragamuwa', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
      { id: 7, name: 'Eastern', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
      { id: 8, name: 'Uva', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
      { id: 9, name: 'Southern', order: 1, clicked: false, link: '#', icon: 'fas fa-map', subitems: null },
    ]
  };

  constructor() { }

  ngOnInit() {
    // interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
  }

}
