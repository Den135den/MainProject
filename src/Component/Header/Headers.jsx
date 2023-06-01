import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Header2 from './Header2/Header2'
//import style from './Headers.module.css'
import OurTeam from './Nav/OurTeam'
import HOME from './Nav/HOME'
import IFORMATION from './Nav/INFORMATION'
import REGISTRATION from './Nav/REGISTRATION'


export default class Headers extends Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                   <Header2/>
                   
                    <Routes>
                    <Route path='/'exact element={<HOME/>} />
                    <Route path='/home' element={<HOME/>} />
                   <Route path='/our team' element={<OurTeam/>} />
                   <Route path='/information' element={<IFORMATION/>}/>
                   <Route path='/registration' element={<REGISTRATION/>}/>
                  
                    </Routes>
                </div>
            </BrowserRouter>

        )
    }
}