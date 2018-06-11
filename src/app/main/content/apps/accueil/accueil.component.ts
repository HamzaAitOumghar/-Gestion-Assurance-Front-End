import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { StatistiqueService } from '../../../../../service/statistique.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  contratStat=[];

  constructor(private statistiqueService:StatistiqueService) { 
    this.statistiqueService.getStateContrat().subscribe(
        resp=>{
          this.contratStat=resp;
        }
    );
  }

  statusClient(){
    var dataStatus=[];
  var labelStatus=[];
  this.statistiqueService.getStateClient().subscribe(
    resp=>{
      for(var i=0;i<resp.length;i++){
        dataStatus.push(resp[i][1]);
        labelStatus.push(resp[i][0]);
      }
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
              data: dataStatus,
             
              backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)'
            ]
          }],    
          labels:labelStatus
      },
      options: {
        title: {
            display: true,
            text: 'Status Client'
        }
      }
    });
    }
  );
  
  }

  ngOnInit() {
     
    this.statusClient();
  }

}
