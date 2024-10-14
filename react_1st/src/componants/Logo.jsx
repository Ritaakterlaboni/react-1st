import React from 'react'

const Logo = ({src, alt, className}) => {
  return (
    <img className={`${className}`} src={src} alt={alt}/>
  )
}

export default Logo