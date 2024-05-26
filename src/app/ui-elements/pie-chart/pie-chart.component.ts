// pie-chart.component.ts
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() chartData: {
    ChartLabels: string[];
    ChartData: number[];
    BackgroundColors: string[];
  } = {
    ChartLabels: [],
    ChartData: [],
    BackgroundColors: [],
  };

  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: this.chartData.ChartLabels,
        datasets: [
          {
            // label: 'My First Dataset',
            data: this.chartData.ChartData,
            backgroundColor: this.chartData.BackgroundColors,
          },
        ],
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: {
            display: true,

            labels: {
              color: 'black',
              boxWidth: 20,
              boxHeight:20,
            },
          },
        },
      },
    });
  }

  ngOnInit(): void {
    this.createChart();
  }
}
