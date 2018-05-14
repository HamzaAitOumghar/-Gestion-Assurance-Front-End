import { Component, OnInit, Input } from '@angular/core';
import { Vehicule } from '../../../../../../entities/Vehicule';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  @Input() Vehicule;
  constructor() { }

  ngOnInit() {
  }

}
