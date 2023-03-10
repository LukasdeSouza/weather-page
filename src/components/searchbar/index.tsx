import React from 'react'
import { brazilStates } from '@/utils/constants'
import { Button, Input, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import SearchBarStyles from '../../styles/SearchBar.module.css'


const SearchBar = ({ cityName, onChangeCity, onChangeState, searchForWeather }) => {
  return (
    <section className={SearchBarStyles.main}>
      <TextField type="text"
        size='small'
        label='Cidade'
        value={cityName}
        onChange={onChangeCity}
      />
      <Select
        size='small'
        label='Estados'
        onChange={onChangeState}
        sx={{ width: '180px' }}
      >
        {brazilStates.map((state) => (
          <MenuItem
            value={state.value}
            key={state.key}
          >
            {state.label}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant='contained'
        onClick={searchForWeather}
        sx={{ mx: 1, backgroundColor: '#94ceff', color: "#555", fontWeight: 600 }}>
        Buscar
      </Button>

    </section>
  )
}

export default SearchBar