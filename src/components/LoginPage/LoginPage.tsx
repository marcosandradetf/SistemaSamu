import React, { FC, useState } from 'react';
import axios from "axios";
import { LoginPageWrapper } from './LoginPage.styled';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => (
 <LoginPageWrapper data-testid="LoginPage">
    <div className='border rouded p-5'>
      <h2 className='font-weight-bold text-center'>Login</h2>
      <br></br>
      <div>
         <label className='form-label'>Username:</label>
         <input type="text" className='form-control' />
      </div>
    </div>
    <div>
      <label className='form-label'>Password:</label>
      <input type="text" className='form-control'/>
    </div>
    <br></br>
    <button className='btn btn-primary'>Login</button>
 </LoginPageWrapper>
);

export default LoginPage;
