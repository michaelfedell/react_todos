import React from 'react'
import { Link } from 'react-router-dom'

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
    </header>
  )
}