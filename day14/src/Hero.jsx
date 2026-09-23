import React from 'react'

export default function Hero(props) {
  return (
    <div>
        <h1>THIS IS HEADING</h1>
      Hey this is hero section
      <h2>{props.intro}</h2>
    </div>
  )
}
