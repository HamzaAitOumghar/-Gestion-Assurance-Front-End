import { Component, OnInit, Input } from '@angular/core';
import { DossierService } from '../../../../../../service/dossier.service';
import { Client } from '../../../../../entities/Client';
import { ClientService } from '../../../../../../service/client.service';

@Component({
  selector: 'app-affiche-client',
  templateUrl: './affiche-client.component.html',
  styleUrls: ['./affiche-client.component.css']
})
export class AfficheClientComponent implements OnInit {

  detailsClient:Client;
  @Input() idClient;
  constructor(private dossierService:DossierService,private clientService:ClientService) { }

  ngOnChanges(){
    this.clientService.getClientById(this.idClient).subscribe(
      data=>{
        this.detailsClient=data
      }

    );

  }


  ngOnInit() {
  }

}
