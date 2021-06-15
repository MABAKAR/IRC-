
import axios from 'axios'
import React, { Component ,useState} from "react"
import { Link,Redirect,useHistory  } from "react-router-dom";
import '../Login.css';
import 'bootstrap/dist/css/bootstrap.css';

const Register =props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const history = useHistory()   
    

    
      const handleSubmit = async e => {
        
        e.preventDefault();
  
        /*setState();
        const { username,  password} = setState();
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ username,password})
      };*/
      const user={
        username,
        password,
        confirmpassword
      }
     
      ///const response = await fetch('http://localhost:4242/login', requestOptions);
     // const data =this.setState(await response.json());
   
               
    axios.post(`http://127.0.0.1:4242/register`, user)
    .then(res => {
      console.log(res.data.greeting);
  alert(res.data.greeting);
      if(res.data.greeting === 'utilisateur ajouté avec succés'){
        history.push({
          pathname: '/Login',
        })
      }
    })
   

  
    
  
      };
    
 
    
   
      
    
        return (
          <div>
            <br />
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div  className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="username"
                    onChange={event => setUsername(event.target.value)}
                  />
                </div>
                <br />
                <div  className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    onChange={event => setPassword(event.target.value)}
                  />
                </div>
                <br />
                <div  className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmpassword"
                    placeholder="confirmpassword"
                    onChange={event => setConfirmpassword(event.target.value)}
                  />
                </div>
                <br />
                <div>
                  <button className="btn btn-success" type="submit">
                    REGISTER
                  </button>
                </div>
              </form>

            </div>
          </div>
        );
      }
    
export default Register