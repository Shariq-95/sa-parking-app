import React from 'react'

const Footer = () => {
  let footerStyle ={
    width: "100%",
    border: "2px solid red",
    margin: "20px 0px"
  }  
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
        <p className="text-center">
        Copyright &copy; MyParkingApp.com
        </p>
    </footer>
  )
}

export default Footer
