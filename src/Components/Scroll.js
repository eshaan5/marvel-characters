import React from 'react'

const Scroll = ({ children }) => {
  return (
    <div style={{overflowY: 'scroll', height: '500px' }}>    {/* When height exceeds 500px add scrollbar */}
        {children}
    </div>
  )
}

export default Scroll