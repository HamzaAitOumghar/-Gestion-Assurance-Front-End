import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { ClientService } from '../../../../../service/client.service';
import { Client } from '../../../../entities/Client';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ModifierComponent } from './modifier/modifier.component';
declare var $;
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})



export class ClientComponent implements OnInit {
  
  
  clients :Client[];
  public idCourant :any;
  public cl :Client;


  constructor(private clientService:ClientService,private router: Router) {
    $(function() {
      $('#sample-data-table').DataTable({
        language:{ url:"./assets/french.json"},
        columnDefs: [
          {
            targets           : 5,
            filterable        : false,
            sortable          : false
          },
          {
          targets           : 6,
          responsivePriority: 1,
          filterable        : false,
          sortable          : false
          }
      ],
      
               pageLength  : 10,
                scrollX     : false,
                responsive  : true,
                autoWidth   : false
      });
    });
   }
 

  ngOnInit() {
    this.clientService.getClient().map(resp=>resp.json())
    .subscribe(
      clients=>{
              this.clients=clients;
      },error=>{
              console.log("Erreur !"+error);
          }
      );
     ;
  }

  
  onRefrech($event){
      this.ngOnInit();      
    }
  affecatationIdClient(id){
     this.idCourant=id;
  }
  affecatationClient(c){
    this.cl=c;
 }
 
}
