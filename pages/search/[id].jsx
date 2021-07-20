import React from 'react'
import Layout from '../../components/Layout/Layout'
import Appbar from '../../components/Navbar/Appbar'
import Current from '../../components/Current/Current'
import Daily from '../../components/Daily/Daily'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'

export default function City({currentData, dailyData}) {

    return (
        <Layout>
        <Appbar/>
        <Current currentData={currentData}/>
        <Daily dailyData={dailyData}/>
        </Layout>
    )
}

export const getServerSideProps = async ({params}) => {
    
    const getCurrentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=${process.env.WEATHER_API_KEY}`)
    const currentData = getCurrentData.data

    const getLonLat = await axios(`http://localhost:3000/api/city/${params.id}`)

    const getDailyData = await axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${getLonLat.data.lat}&lon=${getLonLat.data.lon}&exclude=hourly,current,minutely&appid=${process.env.WEATHER_API_KEY}`)
    const dailyData = getDailyData.data

    
    return{
        props:{
            currentData,
            dailyData
        }
    }

}