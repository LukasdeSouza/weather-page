import React from 'react'
import { brazilStates } from '@/utils/constants'
import { Button, Input, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'


const SearchBar = ({ cityName, onChangeCity, onChangeState, searchForWeather }) => {
  return (
    <section>
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
        color='warning'
        onClick={searchForWeather}>
        Buscar
      </Button>

    </section>
  )
}

export default SearchBar