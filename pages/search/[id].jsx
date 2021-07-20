import React from 'react'
import Layout from '../../components/Layout/Layout'
import Appbar from '../../components/Navbar/Appbar'
import Current from '../../components/Current/Current'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios'

export default function City({currentData}) {
    console.log(currentData)
    
    return (
        <Layout>
        <Appbar/>
        <Current currentData={currentData}/>
    
        </Layout>
    )
}

export const getServerSideProps = async ({params}) => {
    
    const getCurrentData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${params.id}&appid=${process.env.WEATHER_API_KEY}`)
    const currentData = getCurrentData.data

    return{
        props:{
            currentData
        }
    }

}