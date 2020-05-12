import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Chart } from 'chart.js';
/*import { ConsoleReporter } from 'jasmine';*/
@Component({
selector: 'app-api',
templateUrl: './api.component.html',
styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  PieChart =[];
  PieChart1 = [];
  cart=[];
  name =[];
  bookingmodes = [];
  bookingmodepercent = [];
  BarChart = [];
  agegroupname = [];
  agecount = [];
public patientsMale :any;
public patientsFemale :any;
public patientsother :any;
public aptmtList : any = [];

constructor(private patientService:ApiService ){ }

ngOnInit(): void {
  this.patientService.getpatientdetails()
  .subscribe((data) => {
    /**console.log(data.doctorAptmtGenders.aptmtPatientGenderCount);*/
    /**this.patientsMale = data.doctorAptmtGenders[0].aptmtPatientGenderCount;
    this.patientsFemale = data.doctorAptmtGenders[1].aptmtPatientGenderCount;
    this.patientsother = data.doctorAptmtGenders[2].aptmtPatientGenderCount;
    /**console.log(this.patientsother);*/
    this.aptmtList = data;
    console.log(this.aptmtList)
    

    data.doctorAptmtGenders.forEach(x => {  
      this.cart.push(x.aptmtPatientGenderCount);
      this.name.push(x.patientGenderName); 
      console.log(x.patientGender);
  
    });
    
    data.doctorAptmtBookingModes.forEach(x => {  
      this.bookingmodes.push(x.aptmtTypeName);
      this.bookingmodepercent.push(x.aptmtBookingModePercent);
      console.log(x.patientGender);
  
    });
    
    data.doctorAptmtAgeGrps.forEach(x => {  
      this.agegroupname.push(x.patientAgeGroupDesc);
      this.agecount.push(x.aptmtCount);
      console.log(x.patientGender);
  
    });


    /**this.cart.push( this.patientsMale);
    this.cart.push( this.patientsFemale);
    this.cart.push( this.patientsother);
*/
    console.log(this.cart);    console.log(this.name);


  }); 
  
    this.PieChart = new Chart('pieChart', {
      type: 'pie',
    data: {
      labels:this. name,
      datasets: [{
          label: '# of Votes',
          data: this.cart,
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
      }]
    }, 
    options: {
      title:{
          text:"Gender",
          display:true
      },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
    }
  });
  this.PieChart1 = new Chart('pieChart1', {
    type: 'pie',
  data: {
    labels:this.bookingmodes,
    datasets: [{
        label: '# of Votes',
        data: this.bookingmodepercent,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
  },
  options: {
    title:{
        text:"Booking Mode",
        display:true
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
  }
});
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: this.agegroupname,
 datasets: [{
   /*["brown","green","blue","black","orange","red","yellow"]*/
    label: ["brown","green","blue","black","orange","red","yellow"],
     data: this.agecount,
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)',
         'rgba(255, 175, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)',
         'rgba(255, 230, 64, 1)'
     ],
     borderWidth: 2
 }]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
}

}