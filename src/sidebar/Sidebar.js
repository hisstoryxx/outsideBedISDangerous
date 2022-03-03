import React from 'react'
import "./sidebar.css"
import elon from './elon.jpg.jpeg'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className= "sidebarTitle"> ABOUT ME </span>
            <img style={{width:'100%'}} src={elon} alt=""/>
            <p>
            So, work hard, like, every waking hour.
            And I mean, if you do the simple math, you say like somebody else is working 50 hours a week and you’re working 100, you’ll get twice as done, as much done, in the course of the year as the other company.
            </p>
        </div>
    </div>
  )
}
