import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()
  function logout(){
    localStorage.removeItem('login')
    navigate('/')

  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="danger" type='submit' onClick={logout}>Logout</Button>
      </div>
  )
}

export default Dashboard