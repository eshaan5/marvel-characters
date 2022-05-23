import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CardComponent from './Card/Card'

const Cards = ({characters}) => {
  return (
    characters.length === 0 ? <Typography variant='h2' className='header'>Loading...</Typography> :
    <Grid container justifyContent="center" spacing={4}>      {/* similar to justify-content: center */}
            {characters.map((character) => {
                return (
                    <Grid item key = {character.id} xs = {12} sm = {6} md = {4} lg = {3}>
                    <CardComponent name={character.name} url={character.url} username={character.username} img={character.img} />     {/* props */}
                    </Grid>
                )
            })}
    </Grid>
  )
}

export default Cards