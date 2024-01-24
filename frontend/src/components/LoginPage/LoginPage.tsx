import React, { FC, useState } from 'react';
import axios from "axios";
import { LoginPageWrapper, BackgroundLogo } from './LoginPage.styled';


interface LoginPageProps { }

const LoginPage: FC<LoginPageProps> = () => (
   <LoginPageWrapper data-testid="LoginPage">
      <div className='border border-danger d-flex rounded-end'>
         <BackgroundLogo />

         <div className='p-5 bg-danger'>
            <h2 className='font-weight-bold text-center text-white'>Entre com sua conta</h2>
            <br></br>
            <div>
               <label className='form-label text-white'>Usuário:</label>
               <input type="text" className='form-control' />
            </div>
            <div>
               <label className='form-label text-white'>Senha:</label>
               <input type="text" className='form-control' />
            </div>
            <br></br>
            <button className='btn btn-dark'>Entrar</button>
            <br></br>
            <br></br>
            <a href="#" className='text-white'>Perdeu a senha ?</a>
            <br></br>
            <a href="#" className='text-white'>Termos de uso. Política de privacidade</a>
         </div>
      </div>

   </LoginPageWrapper>
);

export default LoginPage;
