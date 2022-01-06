import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import Message from '../Components/Message'


//import { listMyOrders } from '../actions/orderActions
//import {listMyOrders} from '../Actions/orderActions'

function HistoryScreen({ history }) {

 
    const [message, setMessage] = useState('')
    cont [email, setEmail] = useState("")
    const dispatch = useDispatch()

  

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    

   

    

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')}
      
    }, [dispatch,history,userInfo,])

    const submitHandler = ()=>{
        e.preventDefault()
        emailjs.sendForm(`email`,
        apikey.TEMPLATE_ID, e.target,
        apikey.USER_ID).then((result)=>{
            alert("message sent, we will get back to u")
        },(error)=>{
            alert("an error occured,please try again")
        })
    }

    return (
        <Row>
          
            <Col md={9}>
                <h2>Transaction History</h2>
              
                            <Table striped responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>user</th>
                                        <th>Amount</th>
                                        <th>Reference</th>
                                        <th>Account Number</th>
                                        <th>AccountName</th>
                                        <th>Status</th>
                                    
                                    </tr>
                                </thead>

                                <tbody>
                                    
                                        <tr >
                                            <td>{userInfo.username}</td>
                                            <td>$100,000</td>
                                            <td>ygyry</td>
                                            <td>HBUK4017264178610USD</td>
                                            <td>Helium Accounting Service</td>
                                            <td>Pendin</td>
                                        </tr>
                                
                                </tbody>
                            </Table>
                       
            </Col>

            <Col md={5}>
            <h4 > contact us</h4>
             <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email">
                        <Form.Label>Contact us</Form.Label>
                        <Form.Control
                        type="text"
                        placeholder="Enter your username here"
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
    
    
                    
                    <Button type="submit" variant="primary">message</Button>
    
                </Form>

            </Col>
        </Row>
    )
}

export default HistoryScreen


