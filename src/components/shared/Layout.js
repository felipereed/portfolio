import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'


export default function Layout(props) {
  return (
    <div>
      <Header />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
