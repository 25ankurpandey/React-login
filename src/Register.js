import React, { useState } from 'react'  
import axios from 'axios';  
function Regster(props) {  
  const [data, setdata] = useState({ email: '', password: '' })  
  const apiUrl = "http://localhost:8080/register";  
  const Registration = (e) => {  
    e.preventDefault();  
    debugger;  
    const data1 = { email: data.email, password: data.password };  
    axios.post(apiUrl, data1)  
      .then((result) => {  
        debugger;  
        console.log(result.data);  
        if (result.data.Status === 'Invalid')  
          alert('Invalid User');  
        else  
          props.history.push('/Dashboard')  
      })  
  }  
  const onChange = (e) => {  
    e.persist();  
    debugger;  
    setdata({ ...data, [e.target.name]: e.target.value });  
  }  
  return (  
    <div class="container">  
      <div class="row">  
        <div class="col-sm-12 btn btn-primary" style={{ "margin": "6px" }}>  
          Add New Contact  
       </div>  
      </div>  
      <div class="card o-hidden border-0 shadow-lg my-5" style={{ "marginTop": "5rem!important;" }}>  
        <div class="card-body p-0">  
          <div class="row">  
            <div class="col-lg-12">  
              <div class="p-5">  
                <div class="text-center">  
                  <h1 class="h4 text-gray-900 mb-4">Create a New User</h1>  
                </div>  
                <form onSubmit={Registration} class="user">  
                  <div class="form-group row">  
                    <div class="col-sm-6 mb-3 mb-sm-0">  
                      <input type="text" name="email" onChange={onChange} value={data.email} class="form-control" id="exampleFirstName" placeholder="email" />  
                    </div>  
                    <div class="col-sm-6">  
                      <input type="password" name="password" onChange={onChange} value={data.password} class="form-control" id="exampleLastName" placeholder="password" />  
                    </div>  
                  </div>  
                  
                  <button type="submit" class="btn btn-primary  btn-block">  
                    Create User  
                </button>  
                  <hr />  
                </form>  
                <hr />  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
}  
  
export default Regster