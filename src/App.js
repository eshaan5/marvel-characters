import React, { useState, useEffect } from 'react'
import Cards from './Components/Cards/Cards'
import SearchBox from './Components/SearchBox'
import './App.css'
import { Typography } from '@material-ui/core'
import Scroll from './Components/Scroll'

const App = () => {

    const [char, setChar] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
      fetch('https://api.jsonbin.io/b/628b8f92402a5b380209c7bd')
      .then(response => response.json()).then(characters => setChar(characters))
    }, [])

    const onSearch = (e) => {
        setSearch(e.target.value)
    }

    const filtered = char.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase()) || character.username.toLowerCase().includes(search.toLowerCase())
  })

  return (
      <div className='tc'>
    <Typography variant='h2' className='header'>Favorite Marvel Characters</Typography>
    <SearchBox onSearch={onSearch} search={search} />
    <Scroll>
      <Cards characters={filtered} />
    </Scroll>
    </div>
  )
}

export default App