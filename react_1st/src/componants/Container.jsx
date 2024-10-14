import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-maincontainer m-auto`} >{children}</div>
  )
}

export default Container