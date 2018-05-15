import { Component, OnInit, Input } from '@angular/core';
import { Vehicule } from '../../../../../../entities/Vehicule';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {

  @Input() vehicule:Vehicule;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Hello");
    console.log(this.vehicule);
    
  }
}
