
import * as React from 'react';
import { Link } from "react-router-dom";
import { Row,Col,Form,Button } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'
import { Address } from '../Actions/userActions';
import FormContainer from '../Components/FormContainer';
import Message from '../Components/Message';
import Loader from '../Components/Loader';




function CreateAddrressScreen({location,history}) {
    const [phone, setPhone] = React.useState('')
    const [address, setAddress] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [postalCode, setPostalCode] = React.useState('')
    const [accountNumber, setAccountNumber] = React.useState('')
    const [message, setMesssage] = React.useState('')


    //const redirect = location.search ? location.search.split('m')[1] : '/'
    
    
   
    const userLogin = useSelector(state=> state.userLogin)
    const {loading,error,userInfo} = userLogin
    const dispatch = useDispatch()
    
    //React.useEffect(()=>{
    ////    if(!userInfo.username){
       //     history.push('/login')
     //   }
    //}, [history,userInfo])
    
    const submitHandler = (e)=>{
        e.preventDefault()
       
        dispatch(Address(phone,address,country,
            city,state,postalCode,accountNumber))
    
        history.push("/profile")
       console.log("addressCreated")
         
    }


    return (
        <FormContainer>

            <h1>Please, fill the form below</h1>
            {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        
        {message && <Message variant="danger">{message}</Message> }
           

            
             <Form onSubmit={submitHandler}>
             <Form.Group controlId="tel">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                    required
                    type="number"
                    placeholder="Enter your phone number"
                    value={phone} 
                    onChange={(e)=>setPhone(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Enter your Address"
                    value={address} 
                    onChange={(e)=>setAddress(e.target.value)}
                    ></Form.Control>

                    <Form.Group controlId="country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder=""
                    value={country} 
                    onChange={(e)=>setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder=""
                    value={state} 
                    onChange={(e)=>setState(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder=""
                    value={city} 
                    onChange={(e)=>setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="postal">
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Enter your postal code"
                    value={postalCode} 
                    onChange={(e)=>setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId="number">
                    <Form.Label>Account Number </Form.Label>
                    <Form.Control
                    required
                    type="text"
                    placeholder="Input your account number"
                    value={accountNumber} 
                    onChange={(e)=>setAccountNumber(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                
                <Button type="submit" variant="primary"  >SUBMIT FORM</Button>
                </Form.Group>

             </Form>
             
        </FormContainer>
            
        
    );
};

export default CreateAddrressScreen;