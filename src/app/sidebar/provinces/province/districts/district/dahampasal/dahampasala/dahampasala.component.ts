import { Component, OnInit, Input } from '@angular/core';
import { Dahampasala } from '../dahampasala.model';

@Component({
  selector: 'app-dahampasala',
  templateUrl: './dahampasala.component.html',
  styleUrls: ['./dahampasala.component.css']
})
export class DahampasalaComponent implements OnInit {

  @Input() dahampasala: Dahampasala;

  constructor() { }

  ngOnInit() {
  }

}
