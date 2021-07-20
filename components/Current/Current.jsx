import React from 'react'
import styles from './Current.module.css'
//Weather Icons
import { 
    WiMoonFull,
    WiDayCloudy,
    WiCloud,
    WiCloudy,
    WiShowers,
    WiNightShowers,
    WiNightSnowThunderstorm,
    WiSnowflakeCold,
    WiWindy
  } from "react-icons/wi";
  
  
  
  import { 
    BiDroplet,
    BiWind
 } from "react-icons/bi";

 import {FaThermometerHalf} from "react-icons/fa"



  const timeConverter = (UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const dayName = days[a.getDay()];
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = hour >= 12 ?date + ' ' + month + ' ' +', ' + hour + ':' + min + 'pm' :date + ' ' + month + ' ' +', ' + hour + ':' + min + 'am';
    return {
      time: time,
      day: dayName
    };
  }

  const kelvinToCelsius = (temp) => {
    const celsius = Math.round(temp - 273)
	  return celsius
  }

  const capitalizeFirstLetter = (str) => {
    let capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }

export default function Current({currentData}) {
    
    const icons = [
        {
          name: "01d",
          icon: <WiMoonFull size={80}/>
        },
        {
          name: "02d",
          icon: <WiDayCloudy size={80}/>
        },
        {
          name: "03d",
          icon: <WiCloud size={80}/>
        },
        {
          name: "04d",
          icon: <WiCloudy  size={80}/>
        },
        {
          name: "09d",
          icon: <WiShowers size={80}/>
        },
        {
          name: "10d",
          icon: <WiNightShowers  viewBox="0 0 30 30" size={80} preserveAspectRatio="none"/>
        },
        {
          name: "11d",
          icon: <WiNightSnowThunderstorm size={80}/>
        },
        {
          name: "13d",
          icon: <WiSnowflakeCold size={80}/>
        },
        {
          name: "50d",
          icon: <WiWindy size={80}/>
        },
        {
            name: "01n",
            icon: <WiMoonFull size={80}/>
          },
          {
            name: "02n",
            icon: <WiDayCloudy size={80}/>
          },
          {
            name: "03n",
            icon: <WiCloud size={80}/>
          },
          {
            name: "04n",
            icon: <WiCloudy  size={80}/>
          },
          {
            name: "09n",
            icon: <WiShowers size={80}/>
          },
          {
            name: "10n",
            icon: <WiNightShowers  viewBox="0 0 30 30" size={80} preserveAspectRatio="none"/>
          },
          {
            name: "11n",
            icon: <WiNightSnowThunderstorm size={80}/>
          },
          {
            name: "13n",
            icon: <WiSnowflakeCold size={80}/>
          },
          {
            name: "50n",
            icon: <WiWindy size={80}/>
          }
        
      ]
    
      

    return (
        <>
        <div className={styles.current}>
            <div className={styles.left}>
                <div className={styles.loc_dt}>
                    <span className={styles.loc}>{currentData.name}</span>
                    <span className={styles.dt}>{timeConverter(currentData.dt).day +' '+ timeConverter(currentData.dt).time}</span>
                </div>
                
                <div className={styles.weather_ico}>
                    {
                    icons.filter(icon => icon.name=== currentData.weather[0].icon).map(filtered => (
                        filtered.icon
                    ))
                    }
                    <span className={styles.bottom_title}>{capitalizeFirstLetter(currentData.weather[0].description)}</span>
                </div>
                
            </div>
            <span className={styles.temp}><FaThermometerHalf  size={60}/>{kelvinToCelsius(currentData.main.temp) +''+'°C'}</span>
            
           
            <div className={styles.right}>
                
                <div className={styles.stat_wrapper}>
                    <div className={styles.stat}>
                        <span className={styles.stat_desc}><BiDroplet/>{currentData.main.humidity + "%"}</span>
                        <span className={styles.bottom_title}>Humidity</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.stat_desc}><BiWind/>{currentData.wind.speed + "m/s"}</span>
                        <span className={styles.bottom_title}>Speed</span>
                    </div>
                </div>
                
                
            </div>
      </div>

      </>
    )
}
