import React from 'react'

export default function CustomButton(props) {
  return (
  <>
  <button style={props.styles}>{props.title}</button>
  </>
  )
}
