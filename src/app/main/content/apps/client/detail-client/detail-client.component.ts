import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../../../../../../service/client.service';
import { Client } from '../../../../../entities/Client';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  @Input() idClient;
  detailsClient:Client;

  constructor(private clientService:ClientService) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.clientService.getClientById(this.idClient).subscribe(
      data=>{
        this.detailsClient=data
      }

    );

  }

}
