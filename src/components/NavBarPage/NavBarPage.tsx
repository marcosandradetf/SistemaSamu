import React, { FC } from 'react';
import { NavBarPageWrapper } from './NavBarPage.styled';

interface NavBarPageProps {}

const NavBarPage: FC<NavBarPageProps> = () => (
 <NavBarPageWrapper data-testid="NavBarPage">
    
    <nav className="navbar navbar-light bg-secondary border-bottom">
          <div className="container d-flex justify-content-center align-items-center">
            <a className="navbar-brand" href="/home">
              <img
                src="#"
                alt="logo"
                width={50}
              />
            </a>
          </div>
        </nav>

 </NavBarPageWrapper>
);

export default NavBarPage;
