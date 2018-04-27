import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../../../../../../service/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})



export class SupprimerComponent implements OnInit {
 @Input() idClient:any
 //@Output() onRefrech = new EventEmitter<boolean>();

 constructor(private clientService:ClientService,private router:Router){

}
  ngOnInit() {
  }
 
  supprimerClient(id){
    this.clientService.deleteClient(id).subscribe(
      data=>{
        //this.onRefrech.emit(true);
      },err=>{
        console.log("Erreur !"+err);
      }
    );
    window.location.reload();

}



}
