import { Component, OnInit, Input } from '@angular/core';
import { DossierService } from '../../../../../../service/dossier.service';

@Component({
  selector: 'app-affiche-client',
  templateUrl: './affiche-client.component.html',
  styleUrls: ['./affiche-client.component.css']
})
export class AfficheClientComponent implements OnInit {

  detailsClient;
  @Input() idClient;
  constructor(private dossierService:DossierService) { }

  ngOnChanges(){
    this.dossierService.getDetailsClient(this.idClient).subscribe(
      data=>{
        this.detailsClient=data
      }

    );

  }


  ngOnInit() {
  }

}
