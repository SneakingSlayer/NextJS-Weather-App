import React from 'react'
import styles from './Daily.module.css'
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
export default function Daily({dailyData}) {

    const icons = [
        {
          name: "01d",
          icon: <WiMoonFull  viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "02d",
          icon: <WiDayCloudy viewBox="-1 -4 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "03d",
          icon: <WiCloud viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "04d",
          icon: <WiCloudy viewBox="0 0 30 30" size={50} preserveAspectRatio="none"  size={50}/>
        },
        {
          name: "09d",
          icon: <WiShowers viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "10d",
          icon: <WiNightShowers  viewBox="0 0 30 30" size={50} preserveAspectRatio="none"/>
        },
        {
          name: "11d",
          icon: <WiNightSnowThunderstorm viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "13d",
          icon: <WiSnowflakeCold viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
          name: "50d",
          icon: <WiWindy  viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
        },
        {
            name: "01n",
            icon: <WiMoonFull  viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "02n",
            icon: <WiDayCloudy viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "03n",
            icon: <WiCloud viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "04n",
            icon: <WiCloudy viewBox="0 0 30 30" size={50} preserveAspectRatio="none"  size={50}/>
          },
          {
            name: "09n",
            icon: <WiShowers  viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "10n",
            icon: <WiNightShowers  viewBox="0 0 30 30" size={50} preserveAspectRatio="none"/>
          },
          {
            name: "11n",
            icon: <WiNightSnowThunderstorm viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "13n",
            icon: <WiSnowflakeCold viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          },
          {
            name: "50n",
            icon: <WiWindy viewBox="0 0 30 30" size={50} preserveAspectRatio="none" size={50}/>
          }
        
      ]

    const {daily} = dailyData

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
        day: dayName
        };
    }

  const kelvinToCelsius = (temp) => {
    const celsius = Math.round(temp - 273)
	  return celsius
  }
    return (
        <div className={styles.daily}>

            {
                daily.map(daily => 
                    <div className={styles.daily_body}>
                        <span>{timeConverter(daily.dt).day}</span>
                        {
                            icons.filter(icon => icon.name=== daily.weather[0].icon).map(filtered => (
                                filtered.icon
                            ))
                        }
                        <span>{kelvinToCelsius(daily.temp.day)+'°C'}</span>
                    </div>
                )
            }
            
        </div>
    )
}
