import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  ngOnInit(): void {
    this.createChart();
  }
public chart:any
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Engineering', 'Science','Humanities','Core', ],
	       datasets: [{
    // label: 'My First Dataset',
    data: [300, 240, 100, 432],
    backgroundColor: [
      'orange',
      'purple',
      'green',
			'yellow',
      		
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:1,
        plugins:{
        legend: {
          position: 'bottom', // Adjust the position of the legend
          labels: {
            font: {
              size: 10 // Set the font size of legend labels
            },
            boxWidth: 10,
              boxHeight: 10
          }
        },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = context.formattedValue || '';
              return `${label}: ${value}`;
            }
          }
        }
      }
    }
    });
    // console.log("pie created")
  }
}

