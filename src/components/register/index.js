import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css";


const Register = () => {
  let navigate = useNavigate();

  const onclose = () => {
    navigate('/');
  }

  const handleOutsideClick = (e) => {    
    if (e.target.className === 'registerPage') onclose();
  };
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/');
  };  

  return (
    <div className="registerPage" onClick = {handleOutsideClick} >
      <Form className="registerForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="close">
        <img
          className="closeImage"          
          onClick={onclose}
          alt="X"
          src="./static/images/close.png"
        />
      </div>
        <h3 className="title">Registration</h3>
        <Form.Field className="field">
          <label className="text">First Name</label>
          <input
            className="name"
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.firstName && (
          <p className="alert">Please check the First Name</p>
        )}
        <Form.Field className="field">
          <label className="text">Last Name</label>
          <input
            className="name"
            placeholder="Last Name"
            type="text"
            {...register("lastName", { required: true, maxLength: 10 })}
          />
        </Form.Field>
        {errors.lastName && <p className="alert">Please check the Last Name</p>}
        <Form.Field className="field">
          <label className="text">Email</label>
          <input
            className="email"
            placeholder="Email"
            type="email"
            {...register("email", {
              required: true              
            })}
          />
        </Form.Field>
        {errors.email && <p className="alert">Please check the Email</p>}
        <Form.Field className="field">
          <label className="text">Password</label>
          <input
            className="password"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
        </Form.Field>
        {errors.password && <p className="alert">Please check the Password</p>}
        <div className="button">
          <Button className="submit" type="submit">
            Submit
          </Button>
        </div>
        <h4 className="info">On submit the data will be printed in Browser console</h4>
      </Form>
    </div>
  );
};

export default Register;
