import React from 'react'
import logo from '../images/apple.png'

export default function Header() {
     return (
          <nav>
               <img src={logo} />
               <h3 className="company">Apple</h3>
               <ul>
                    <li>Products</li>
                    <li>Pricings</li>
                    <li>Contact</li>
               </ul>
          </nav>
     )
}