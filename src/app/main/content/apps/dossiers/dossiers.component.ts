import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dossier } from '../../../../entities/Dossier';
import { DossierService } from '../../../../../service/dossier.service';
declare var $;

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})
export class DossiersComponent implements OnInit {

 public dossiers:Dossier[];
 public idClient:number;
 dossierModifier:Dossier;
  constructor(private dossierService:DossierService,private router: Router) {
    function dropDownFixPosition(button, dropdown) {
      var dropDownTop = button.offset().top + button.outerHeight();
      dropdown.css('top', dropDownTop + "px");
      dropdown.css('left', button.offset().left + "px");
    }
    $('#dropdown-button').click(function() {
      dropDownFixPosition($('#dropdown-button'), $('.dropdown-menu'));
    });
   

    this.dossierService.getDossiers().subscribe(
      data=>{
        this.dossiers=data;

        $(function() {
          $('#e-commerce-products-table').DataTable(
            { 
              language:{ url:"./assets/french.json"},
              dom         : 'rtip',
              columnDefs: [
                {
                  targets           : 4,
                  filterable        : false,
                  sortable          : false
                },
                {
                targets           : 3,
                filterable        : false,
                sortable          : false
                }
            ],
           
              initComplete: function ()
              {
                  var api = this.api(),
                      searchBox = $('#products-search-input');
    
                  // Bind an external input as a table wide search box
                  if ( searchBox.length > 0 )
                  {
                      searchBox.on('keyup', function (event)
                      {
                          api.search(event.target.value).draw();
                      });
                  }
              },
              // lengthMenu  : [10, 20, 30, 50, 100],
              // pageLength  : 10,
              // scrollY     : 'auto',,
             // autoWidth   : false
              // scrollX     : false,
              responsive  : true
          }
          );
        });

    },error=>{
        console.log("Erreur !"+error);
    }
    );

    
   }

  ngOnInit() {
    

  }
  
  affectationClient(id){
    this.idClient=id;
  }
  affectationDossier(dossier){
    this.dossierModifier=dossier;
  
  }

  
  onRefrech($event){
    this.dossierService.getDossiers().subscribe(
      data=>{
        this.dossiers=data;

    },error=>{
        console.log("Erreur !"+error);
    }
    );  }
}
