import React from 'react'
import { Redirect } from 'react-router-dom'



// Redirects to Earn on landing 
export function RedirectPathToEarn() {
    return <Redirect to='/POLP'/>
  }

  // Redirects to stake but only replace the pathname
export function RedirectToStake() {
    return <Redirect to='/POLP/0x48592de8cded16f6bb56c896fe1affc37630889c'/>
  }
  
  