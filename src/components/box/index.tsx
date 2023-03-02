import React from 'react'
import { Typography } from '@mui/material'
import SearchBar from '../searchbar'
import Stack from '@mui/material/Stack'
interface SearchBar {
  cityName: string,
  onChangeCity: React.ChangeEventHandler,
  onChangeState: SelectChangeEvent<HTMLSelectElement>,
  searchForWeather: () => void,
  children: typeof React.Children
}

const WeatherBox = ({ cityName, onChangeCity, onChangeState, searchForWeather, children }: SearchBar) => {
  return (
    <Stack>
      {/* <Typography variant='caption'>Pesquisar cidade e estado</Typography> */}
      <SearchBar cityName={cityName}
        onChangeCity={onChangeCity}
        onChangeState={onChangeState}
        searchForWeather={searchForWeather} />
      {children}
    </Stack>
  )
}

export default WeatherBox