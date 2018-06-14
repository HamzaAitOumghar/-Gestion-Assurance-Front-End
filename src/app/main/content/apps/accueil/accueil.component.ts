import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chart.piecelabel.js';
import { StatistiqueService } from '../../../../../service/statistique.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  contratStat = [];
  total:number=0;

  constructor(private statistiqueService: StatistiqueService) {
    this.statistiqueService.getStateContrat().subscribe(
      resp => {
        this.contratStat = resp;
      }
    );
  }

  statusClient() {
    var dataStatus = [];
    var labelStatus = [];
    this.statistiqueService.getStateClient().subscribe(
      resp => {
        for (var i = 0; i < resp.length; i++) {
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
            labels: labelStatus
          },
          options: {
            pieceLabel: {
              render: 'percentage',
              precision: 2
            }
          }
        });
      }
    );

  }
  serialiserState(resp,annee) {
    var datas = [];
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < resp.length; j++) {
        if (resp[j][0] == annee && resp[j][1] == (i + 1)) {
          datas[i] = resp[j][2];
        }
      }
      if (!datas[i]) {
        datas[i] = 0;
      }
    }
    return datas;
  }

  evolutionContrat(annee) {
    var Months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    var ctx = document.getElementById("contratEvolution");
    var dataAuto = [];
    var dataHabitation = [];
    var dataSante = [];

    this.statistiqueService.getEvolutionContratAuto().subscribe(
      resp => {

        dataAuto = this.serialiserState(resp,annee);

        this.statistiqueService.getEvolutionContratHabitation().subscribe(
          resp2 => {
            dataHabitation = this.serialiserState(resp2,annee);

            this.statistiqueService.getEvolutionContratSante().subscribe(
              resp3 => {
                dataSante = this.serialiserState(resp3,annee);
                const reducer = (accumulator, currentValue) => accumulator + currentValue;
                this.total=dataAuto.reduce(reducer)+dataHabitation.reduce(reducer)+dataSante.reduce(reducer);
                var myChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                    labels: Months,
                    datasets: [{
                      label: 'Contrat Auto',
                      backgroundColor: '#f53794',
                      borderColor: '#f53794',
                      data: dataAuto,
                      fill: false,
                    }, {
                      label: 'Contrat Sante',
                      fill: false,
                      backgroundColor: '#58595b',
                      borderColor: '#58595b',
                      data: dataSante,
                    }, {
                      label: 'Contrat Habitation',
                      fill: false,
                      backgroundColor: '#4dc9f6',
                      borderColor: '#4dc9f6',
                      data: dataHabitation,
                    }

                    ]
                  },
                  options: {
                    responsive: true,
                    tooltips: {
                      mode: 'index',
                      intersect: false,
                    },
                    hover: {
                      mode: 'nearest',
                      intersect: true
                     }//,
                    // scales: {
                    //   xAxes: [{
                    //     display: true,
                    //     scaleLabel: {
                    //       display: true,
                    //       labelString: 'Mois'
                    //     }
                    //   }],
                    //   yAxes: [{
                    //     display: true,
                    //     scaleLabel: {
                    //       display: true,
                    //       labelString: 'Valeur'
                    //     }
                    //   }]
                    // }
                  }
                });

              }
            );

          }

        );




      }
    );


  }
  ngOnInit() {

    this.statusClient();
    this.evolutionContrat(2018);
  }
  onChange(event){
    this.evolutionContrat(event);

  }

}
