import React from 'react'
import 'tachyons'

const SearchBox = ({ onSearch, search }) => {
  return (
      <div className='pa2'>
    <input type='search' placeholder='enter name or character...' className='pa2 b--red' onChange={onSearch} style={{width: '40vw', height: '10vh'}} />
    </div>
  )
}

export default SearchBox