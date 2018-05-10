import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../../../../../../service/client.service';
import { Router } from '@angular/router';
declare var $;
@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})



export class SupprimerComponent implements OnInit {
 @Input() idClient:any;
 @Output() refrech: EventEmitter<any> = new EventEmitter();

 messageStyle:string="d-none";
 messageErrorText:string;

 constructor(private clientService:ClientService,private router:Router){

}
  ngOnInit() {
  }
 
  supprimerClient(id){
    this.clientService.deleteClient(id).subscribe(
      data=>{      
        console.log("work");
        this.messageStyle="alert alert-success text-center";
        this.messageErrorText="Client a été bien Supprimer !";
        $(function() {
          $(".alert").fadeTo(2000, 500).slideUp(500, function(){
            $(".alert").slideUp(500);
            });  
          
            
        }); 
        
      },err=>{
        console.log("Hamza Echec");
              this.messageStyle="alert alert-danger text-center";
              this.messageErrorText="Erreur Dans suppression du client";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(5000, function(){
                  $(".alert").slideUp(5000);
                  });  
                  $('#exampleModalLive').modal('hide');
                }); 
                this.refrech.emit();
      },()=>{
        console.log("work");
          this.messageStyle="alert alert-success text-center";
              this.messageErrorText="Client a été bien Supprimer !";
              $(function() {
                $(".alert").fadeTo(2000, 500).slideUp(500, function(){
                  $(".alert").slideUp(500);
                  });  
                
                  
              }); 
      }
    );
    return;
}



}
