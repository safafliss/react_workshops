import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar bg='light'>
      <Container>
        <Navbar.Brand>My Store</Navbar.Brand>
        <NavLink to="/products" style={({isActive}) =>({textDecoration : isActive ? "none" : "underline",})}>
            Products
        </NavLink>
        <NavLink to="products/add" style={({isActive}) =>({textDecoration : isActive ? "none" : "underline",})}>
            add Product
        </NavLink>
        {/* <NavLink to="/" style={({isActive}) =>({color : isActive ? "red" : "green",})}>Home</NavLink>
        <br/>
        <NavLink to="/Hello" style={({isActive}) =>({color : isActive ? "red" : "green",})}>Hello</NavLink>
        <br/>
        <a href="/Hello">lien</a> */}
        </Container>
    </Navbar>
  )
}

export default NavigationBar