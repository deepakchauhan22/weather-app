import React, { Component } from 'react';


import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state={
        img : [],
        error:false,
        title:null,
        temp:null,
        humidity:null,
        status:[],
        Background:''
       
    };
}

  componentDidMount(){

 
     const url= `http://api.openweathermap.org/data/2.5/weather?q=ghaziabad&appid=b13980e162ac6f5306a43f16e7841c7d`
       fetch(url)
       .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          img: data,
          title: data.coord.lon,
          temp:data.main.temp,
          status: data.weather,
          humidity: data.main.humidity,
          media_type: data.media_type
        })
      })
       .catch((error)=>{
           this.setState({
               error:true
           })
       });
    }
    randomfuction(){
       
      if(!this.state.error){

        return this.state.status.map((item, index) => (
          <div class="responsive" key={index}>
              <div className="gallery"> 
              <h3>{item.main}</h3>
              </div>
          </div>
          
          ));
        }
         
        
          else{
              return <h1>Error</h1>
          }
        }
      
 
      
render (){
  var cityName =  window.cityName;
  const {temp, humidity, Background} =this.state;
  var tempC = temp - 273.15;
  var b = parseInt(tempC);

 
  
  
  return (
 
    <div className="App" >  

      <div className="Block"  >
        <div className="grid-container"> 

                <section className="item1">
                <h2 id="demo">{cityName}</h2>
                <h3>{b}<span>&#176;</span></h3>
              
                </section>

                <section className="item2">
                                     {this.randomfuction()}
                                     <p>Humidity : {humidity}<span>&#37;</span></p>         
                   </section>
         </div>
        </div>

    </div>

  );
}
}
export default App;
