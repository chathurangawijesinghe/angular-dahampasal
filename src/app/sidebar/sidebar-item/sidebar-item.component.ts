import { Component, OnInit, Input } from '@angular/core';
import { SidebarItem } from '../sidebaritem.model';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.css']
})
export class SidebarItemComponent implements OnInit {

  @Input() sidebarItemData: SidebarItem;

  constructor() { }

  ngOnInit() {
  }

  sidebarItemClicked(data: SidebarItem) {
    data.clicked = !data.clicked;
    console.log(data);
  }

}
