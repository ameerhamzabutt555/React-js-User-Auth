import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const submit = async e => {
      e.preventDefault()
      const user = new Object();
      user.email = email
      user.password = password
      const userRes = await axios.post(`http://localhost:3001/users/login`,user)
      if(userRes){
          localStorage.setItem('token',userRes.data.data.user.token)
          navigate('/dashboard')
      }

  }
  // const navigate = useNavigate()
  // function login(){
  //   localStorage.setItem('login',true)
  //   navigate('/dashboard')

  // }


  return (
    <div className='d-flex align-items-center justify-content-center'>   
  <Form onSubmit={submit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div> 
  )
}

export default Login