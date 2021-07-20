
import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout/Layout'
import Appbar from '../components/Navbar/Appbar'
import Current from '../components/Current/Current'
import Daily from '../components/Daily/Daily'
export default function Home({currentData, dailyData}) {
  console.log(dailyData)
  

  
  return (
    <Layout>
      <Appbar/>
      <Current currentData={currentData}/>
   <Daily dailyData={dailyData}/>
    </Layout>
    
  )
}
//SSR when search CSR when not updating
export const getStaticProps = async () => {
  //Location
  const location = await axios.get(`https://api.bigdatacloud.net/data/ip-geolocation-with-confidence?key=${process.env.IP_API_KEY}`)
  //Current Weather `https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.location.latitude}&lon=${location.data.location.longitude}&appid=${process.env.WEATHER_API_KEY}`
  const getCurrentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.data.location.latitude}&lon=${location.data.location.longitude}&appid=${process.env.WEATHER_API_KEY}`)
  const currentData = getCurrentData.data

  //Daily Data 7 days
  const getDailyData = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.data.location.latitude}&lon=${location.data.location.longitude}&exclude=hourly,current,minutely&appid=${process.env.WEATHER_API_KEY}`)
  const dailyData = getDailyData.data

  return{
    props:{
      currentData,
      dailyData
    }
  }
}


