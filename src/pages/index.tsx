import React from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Box, Typography, SelectChangeEvent } from '@mui/material'
import SearchBar from '@/components/searchbar';
import HomeStyles from '../styles/Home.module.css'
import WeatherBox from '@/components/box'
import { WiStrongWind, WiThermometer, WiHumidity, WiHorizonAlt, WiHorizon } from "react-icons/wi";
import ClimaVentoso from '../../assets/clima-ventoso.png'
import Stack from '@mui/material/Stack'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cityName, setCityName] = useState<string>('')
  const [state, setState] = useState<string>('')

  const [weatherInfo, setWeatherInfo] = useState()
  const [showInfo, setShowInfo] = useState(false)

  const onChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value)
  }

  const onChangeState = (event: SelectChangeEvent) => {
    setState(event.target.value)
  }

  const searchForWeather = () => {
    fetch(`https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=${cityName},${state}`)
      .then((response) => response.json())
      .then((data) => setWeatherInfo(data))
      .finally(() => setShowInfo(true))

    console.log(weatherInfo)
  }


  return (
    <Box className={HomeStyles.main}>
      <Head>
        <title>Aplicação para Busca de Clima</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src={ClimaVentoso} alt="" />
      <Typography variant='h5'
        fontWeight={600}
        color={'#555'}
      >Previsão do Tempo por Cidade
      </Typography>
      <WeatherBox
        cityName={cityName}
        onChangeCity={onChangeCity}
        onChangeState={onChangeState}
        searchForWeather={searchForWeather}
      >
        {showInfo &&
          <Stack
            className={HomeStyles.container}
            sx={{ my: 2 }}>
            <Typography variant='h6'>
              {weatherInfo?.results.city}
            </Typography>
            <Typography variant='caption'>
              {weatherInfo?.results.description}
            </Typography>
            <Typography variant='caption'>
              <WiHumidity size={24} color='blue' /> {`Humidade: ${weatherInfo?.results.humidity}%`}
            </Typography>
            <Typography variant='caption'>
              <WiThermometer size={24} color='red' /> {`Temperatura: ${weatherInfo?.results.temp}º Graus`}
            </Typography>
            <Typography variant='caption'>
              <WiStrongWind size={24} color='grey' /> {`Velocidade do Vento:${weatherInfo?.results.wind_speedy}`}
            </Typography>
            <Typography variant='caption'>
              <WiHorizonAlt size={24} color='yellow' /> {`Nascer do Sol:${weatherInfo?.results.sunrise}`}
            </Typography>
            <Typography variant='caption'>
              <WiHorizon size={24} color='orange' /> {`Pôr do Sol:${weatherInfo?.results.sunset}`}
            </Typography>
          </Stack>
        }
      </WeatherBox>

    </Box>
  )
}
