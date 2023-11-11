import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [country, setCountry] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ageValue = parseInt(event.target.value);
    setAge(ageValue);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/user/", {
        username,
        email,
        password,
        age,
        country
      });

      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Username</label>
        <input type="text" name="name" id="name" value={username} onChange={handleNameChange} /> <br/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} /> <br/>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange}/> <br />
        <label htmlFor="age">Age</label>
        <input type="age" name="age" id="age" value={age} onChange={handleAgeChange}/> <br />
        <label htmlFor="country">Country</label>
        <input type="country" name="country" id="country" value={country} onChange={handleCountryChange}/> <br />
        <button type="submit">Submit</button>
        
      </form>
    </>
  );
};

export default Register;