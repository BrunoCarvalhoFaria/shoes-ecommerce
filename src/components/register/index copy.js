import React, {Fragment, useState} from "react";
import './style.css';

const initialState = {
  name: "", 
  email: "",
  birthday: "",
  password: "",
  confirmPassword: ""
}

const Register = (props) => {

  const [fields, setField] = useState(initialState); 
  const [submitAlowed, setSubmitAlowed] = useState(true); 

  const handleFieldsChange = (e) => setField({
    ...fields,
    [e.currentTarget.name]: e.currentTarget.value
  });

  const handleSubmit = (event) => {
    props.userData(fields)
    event.preventDefault();    
    setField(initialState);    
  }
  return(
    <Fragment>
      <form className= "registerForm" onSubmit={handleSubmit}>
        <h3 className="title">Registration</h3> 
        <div className="field">
          <label className = "text" htmlFor = "name">Fullname: </label>
          <input className = "name" id="name" type="text" name = "name" value={fields.name} onChange={handleFieldsChange} />
        </div> 
        <div className="field">
          <label className ="text" htmlFor = "email">Email: </label>
          <input className = "email" id="email" type="email" name = "email" value={fields.email} onChange={handleFieldsChange}/>
        </div>
        <div className="field">
          <label className ="text" htmlFor = "birthday">Birthday: </label>
          <input className ="birthday" id="birthday" type="date" name = "birthday" value={fields.birthday} onChange={handleFieldsChange}/>
        </div>
        <div className="field">
          <label className ="text" htmlFor = "password">Password: </label>
          <input className ="password" id="password" type="password" name = "password" value={fields.password} onChange={handleFieldsChange}/>
          <label className ="text" htmlFor = "confirmPassword">Confirm Password: </label>
          <input className ="password" id="confirmPassword" type="password" name = "confirmPassword" value={fields.confirmPassword} onChange={handleFieldsChange}/>
        </div>
        {(fields.confirmPassword !== fields.password&& fields.confirmPassword!=='') ?
          (<h5 className="alert">*Password is different!</h5>) : null
        }
        
        
        <br/>
        <div className="button">
          <input className="submit" type="submit" value = "Submit" />
        </div>
      </form>
    </Fragment>
  )
}

export default Register;