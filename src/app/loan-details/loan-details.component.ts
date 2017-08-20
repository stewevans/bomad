import {Component} from '@angular/core';

@Component({
  selector: 'loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent {

  public lineChartData:Array<any> = [
    {data: [3000, 2800, 2600, 2000, 1400, 1200, 1000], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public lineChartLabels:Array<any> = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];
  public lineChartOptions:any = {
    responsive: true,
    legend: {
      display: false
    },
    scales:
      {
        // xAxes: [{
        //   display: false
        // }]
        yAxes: [{
          ticks: {
            suggestedMin: 0
          }
        }]
      }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


  public barChartData:Array<any> = [
    {data: [70], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public barChartLabels:Array<any> = ['%'];

  public barChartOptions:any = {
    legend: {display: false},
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false,
          min: 0,
          max: 100
        },
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        display: false,
        stacked: true,
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }

  }

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,1.0)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];



  public pieChartData:Array<any> = [
    {data: [60, 40], borderColor: 'transparent'},
  ];

  public pieChartLabels:Array<any> = ['%'];

  public pieChartOptions:any = {
    legend: {display: false},
    cutoutPercentage: 70,
    showScale: false,
    scaleLineColor: 'transparent',
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          display: false,
        }
      }],
      yAxes: [{
        display: false,
        // stacked: true,
        gridLines: {
          drawBorder: false,
          display: false,
        }
      }]
    },
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI

  }

  public pieChartColors:Array<any> = [
    { // grey
      backgroundColor: ['#009578', '#dae8ec'],
      hoverBackgroundColor: ['#009578', '#dae8ec'],
      // borderColor: 'rgba(148,159,177,1)',
      // pointBackgroundColor: 'rgba(148,159,177,1)',
      // pointBorderColor: 'rgba(255,255,255,0)',
      // pointHoverBackgroundColor: 'rgba(255,255,255,0)',
      // pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // grey
    //   backgroundColor: 'rgba(148,159,177,0.2)',
    //   borderColor: 'rgba(148,159,177,1)',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
}
