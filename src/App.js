import React, { Component } from 'react';
import Mist from './assets/Mist.jpg'; 
import Smog from './assets/smog.jpg'; 
import fog from './assets/fog.jpg'; 
import clearsky from './assets/clearsky.jpg'; 
import sunny from './assets/sunny.jpg'; 
import haze from './assets/haze.jpg'; 
import cloudy from './assets/cloudy.jpg'; 
import lightning from './assets/lightning.jpg'; 
import nightcity from './assets/nightcity.jpg'; 
import nightmoon from './assets/nightmoon.jpg'; 
import rainroad from './assets/rainroad.jpg'; 
import cloudnoon from './assets/cloudnoon.jpg'; 
import cloudeve from './assets/cloudeve.jpg'; 
import snow from './assets/snow.jpg'; 
import rain from './assets/rain.jpg'; 
import night from './assets/night.jpg'; 
import moon from './assets/moon.jpg'; 
import evening from './assets/evening.jpg'; 
import goa from './assets/goa.jpg'; 
import delhi from './assets/delhiday.jpg'; 
import mumbai from './assets/Mumbai.jpg'; 
import kasol from './assets/kasol.jpg'; 
import shimla from './assets/shimla.jpg'; 
import udaipur from './assets/udaipur.jpg'; 
import jaipur from './assets/jaipur.jpg'; 
import pithoragarh from './assets/pithoragarh.jpg'; 
import citypic from './assets/citypic.jpg'; 
import normweather from './assets/normweather.jpg'; 
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import cloudicon from './assets/cloudy.svg';
import sunicon from './assets/day.svg';
import thunder from './assets/thunder.svg';
import moonicon from './assets/night.svg';
import rainicon from './assets/rainy.svg';
import hazeicon from './assets/haze.svg';
import misticon from './assets/mist.svg';
import Footer from './component/Footer';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
        img : [],
        error:false,
        title:null,
        temp:null,
        feels:null,
        humidity:null,
        name:null,
        status:[],
        description:[],
        Background:'',
        parameter: '',
       
    };
}

    handleChange =(event) =>{
      console.log("Value passed");
      this.setState({
          parameter: event.target.value
      });
    };

    handleSubmit = event =>{
      event.preventDefault();
      this.componentDidMount(this.state.parameter)
      console.log("API call made");
    }

  componentDidMount(searchInput){

    // var city = 'goa'
    console.log(searchInput);
    var url = ''
    if (searchInput == undefined || ''){
      searchInput = 'delhi'
       url= `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=b13980e162ac6f5306a43f16e7841c7d`
    }
    else{
       url= `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=b13980e162ac6f5306a43f16e7841c7d`

    }
   
       fetch(url)
       .then((response) => {
        return response.json();
      })
      .then((data) => {

        const months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'Nocvember',
          'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);

        this.setState({
          img: data,
          title: data.coord.lon,
          temp:data.main.temp,
          feels:data.main.feels_like,
          status: data.weather[0].main,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          media_type: data.media_type,
          name: data.name,
          country: data.sys.country,
          wind: data.wind.speed,
          date,
          sunset,
          sunrise,
        })
      })
       .catch((error)=>{
           this.setState({
               error:true
           })
       });
    }
   
 
      
render (){
  
  const {temp,feels,status,wind,sunrise, sunset,date ,description,country,name,humidity, Background} =this.state;
  var tempC = temp - 273.15;
  var feels_like = feels - 273.15
  var temperature =parseInt(tempC);
  var feelslike = parseInt(feels_like);

 
  var urlImg = null;
  var iconsvg = null;
  var cityImg = null;

  // var d = new Date();
  // var currentDate = d.toDateString();

 

 
//status check
  if(status=='Smoke'){
    // var urlImg= ''
    // urlImg = 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80'
    urlImg = Smog;
    iconsvg = cloudicon;

  }
    else if (status==='Clouds')
    {
      iconsvg = cloudicon;
    urlImg = cloudy;
   }
    else if (status==='Fog')
    {
      iconsvg = cloudicon;
    urlImg = fog;
   }
    else if (status==='Mist') {
      iconsvg = misticon;
      urlImg = Mist;
    }
    else if (status==='Clear') {
      urlImg = clearsky;
      iconsvg = sunicon;

    }
	else if (status==='Thunderstorm') {
      urlImg = lightning;
      iconsvg = thunder;
    }
		else if (status==='Rain') {
      urlImg = rainroad;
      iconsvg = rainicon;
    }
	
	else if (status==='Haze') {
      urlImg = haze;
      iconsvg = hazeicon;
    }
	else{
    urlImg = normweather;
    iconsvg = cloudicon;

	}
  //city check
  
   if(name==='Goa'){
    cityImg = goa;
    }
    else if (name==='Delhi')
    {
      cityImg = delhi;
   }
    else if (name==='Mumbai') {
      cityImg = mumbai;
     }
     else if (name==='Shimla') {
      cityImg = shimla;
     }
     else if (name==='Kasol') {
      cityImg = kasol;
     }
     else if (name==='Udaipur') {
      cityImg = udaipur;
     }
     else if (name==='Jaipur') {
      cityImg = jaipur;
     }
     else if (name==='Pithorāgarh') {
      cityImg = pithoragarh;
     }
	 else{
		 cityImg = citypic;
	 }

  return (
    
   
    <div className="App" style={{ backgroundImage: `url(${urlImg})` }}>  
                                                    {/* style={{ backgroundImage: "url(/delhi.jpg)" }}>  style={this.state.backgroundStyle}*/}
                    <div className="searchBox">
                          <form onSubmit={this.handleSubmit}>
                             <input className="searchInput" onChange={this.handleChange} type ='Search' value={this.state.parameter} placeholder="Search your City..."/> 
                          </form>
                    </div>
  
      <div className="Block"  >
        <div className="grid-container"> 
           
           
                  
             
                 
                <section className="item1"  style={{backgroundImage: `url(${cityImg})` }}>

                                <h2>{name}, {country}</h2>
                                <h3>{temperature}<span>&#176;c</span></h3>
                </section>
                          

                <section className="item2">  
                <h4>{date}</h4>
                            <div className="flex-container main">
                            
                                  <div className="flex-item-left mainleft">
                                            <img src={iconsvg} alt="Cloud" />
                                            <p>{description}</p>
                                            <p>Feels like : {feelslike}<span>&#176;c</span></p>
                                            <p>Wind : {wind}kmph</p>
                                            <p>Humidity : {humidity}<span>&#37;</span></p>     
                                  </div>

                                  <div className="flex-item-right mainright">
                                        <div className="flex-container moredetails">
                                              <div className="flex-item-left">
                                                  <img src={sunicon} alt="Cloud" /> 
                                                  <p>{sunrise}</p>
                                              </div>
                                              <div className="flex-item-mid">
                                                  <img src={moonicon} alt="Cloud" /> 
                                                    <p>{sunset}</p>
                                              </div>
                                              <div className="flex-item-right">
                                                    <img src={rainicon} alt="Cloud" /> 
                                                    <p>{humidity}%</p>
                                              </div>
                                        </div>
                                  </div>
                            </div>

                </section>
         </div>
        </div>

       
        <Footer />


        

    </div>

  );
}
}
export default App;
