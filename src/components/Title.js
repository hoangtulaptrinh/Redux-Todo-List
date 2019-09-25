import React from 'react'
import './Title.css'

const Title = (props) => <div className='Title'>
  <div className='Top-Title'></div>
  <h1>{props.children}</h1>
  <div className='Bot-Title'></div>
</div>

export default Title;