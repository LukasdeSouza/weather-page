import React from 'react'
import { Typography } from '@mui/material'
import SearchBar from '../searchbar'
interface SearchBar {
  cityName: string,
  onChangeCity: React.ChangeEventHandler,
  onChangeState: SelectChangeEvent<HTMLSelectElement>,
  searchForWeather: () => void,
  children: typeof React.Children
}

const WeatherBox = ({ cityName, onChangeCity, onChangeState, searchForWeather, children }: SearchBar) => {
  return (
    <div>
      <Typography variant='h6'>Pesquisar cidade e estado</Typography>
      <SearchBar cityName={cityName}
        onChangeCity={onChangeCity}
        onChangeState={onChangeState}
        searchForWeather={searchForWeather} />
      {children}
    </div>
  )
}

export default WeatherBox