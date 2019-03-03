

  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ['Patna','Mirzapur','Champaran','Banka','Arwal'],
      datasets: [
        {
          label: "No of pregnant women in different districts",
          backgroundColor: ["#00cc00", "#990033", "#ffcc00", "#003399", "#006600"],
       //   data: [arr2[0], arr2[1], arr2[2]+4,arr2[3]+1]
       data: [5,6,10,12,2]
        }
      ]
    },
    options: {
      
      legend: { 
        
        labels:{
          fontSize:25,
          fontColor:'#000066',
          fontStyle:'bold'
        },
        display: true },
      title: {
        display: false,
       text: 'No of pregnant women in different districts'
      },
      responsive: true,
      scales: {
        xAxes: [ {
          //type: '',
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Districts'
          },
          scaleLabel: {
            display: true,
            labelString: "District",
            fontColor: "black",
            fontStyle:'bold',
            fontSize: 20
          },
          ticks: {
           
              fontStyle: 'bold',
              fontSize: 15    
          }
        } ],
        yAxes: [ {
          display: true,
          scaleLabel: {
            display: true,
           
          },
          scaleLabel: {
            display: true,
            labelString: "No. of pregnant women",
            fontColor: "black",
            fontStyle:'bold',
            fontSize: 20
          },
          ticks: {
           
              fontStyle: 'bold',
              fontSize: 15,
              titleFontSize:20
            
          }
        } ]
      }
    }
  });
  new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ['PHC 2','PHC 4','PHC 11','PHC 1','PHC 7'],
      datasets: [{
        label: "Number of pregnant women in PHC",
        backgroundColor: ["#00cc00", "#996633", "#333399", "#ff9933", "#006600"],
       // data: [arr4[0],arr4[1],arr4[2]]
       data:[30,50,20,54,22]
      }]
    },
    options: {
      legend: { 
        
        labels:{
          fontSize:25,
          fontColor:'#000066',
          fontStyle:'bold'
        },
        display: true },
      title: {
        display: true,
        text: 'No of patients',
        fontSize:25,
        fontColor:'black'
      }
    }
});
new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: ['Patna','Mirzapur','Champaran','Banka','Arwal'],
    datasets: [
      {
        label: "Access to proper sanitation",
        backgroundColor: "#3e95cd",
        data: [12,9,11,7,8]
      }, {
        label: "No access to proper sanitation",
        backgroundColor: "#8e5ea2",
        data: [4,9,11,12,9]
      }
    ]
  },
  options: {
    legend: { 
        
      labels:{
        fontSize:25,
        fontColor:'#000066',
        fontStyle:'bold'
      },
      display: true },
    title: {
      display: true,
      text: 'Sanitation Measures',
      fontSize:20,
        fontColor:'black'
    }
  }
});
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9],
    datasets: [{ 
       // data: [arrmonth[1],arrmonth[2],arrmonth[3],arrmonth[4],arrmonth[5],arrmonth[6],arrmonth[7],arrmonth[8],arrmonth[9]],
       data:[3,8,4,9,7,3,7,2,6],
        label: "Months",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    legend: { 
        
      labels:{
        fontSize:25,
        fontColor:'#000066',
        fontStyle:'bold'
      },
      display: true },
    title: {
      display: true,
      text: 'No of pregnant women in each month',
      fontSize:20,
        fontColor:'black'
    }
  }
});

new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ['Diabetes','High Fever','Blood Pressure','Diorrhea','Vitamin D defficiency'],
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [23,12,4,17,9]
      }
    ]
  },
  options: {
    legend: { 
        
      labels:{
        fontSize:25,
        fontColor:'#000066',
        fontStyle:'bold'
      },
      display: true },
    title: {
      display: true,
      text: 'Diseases Faced By Women',
      fontColor: 'black',
      fontSize:20
    }
  }
});



