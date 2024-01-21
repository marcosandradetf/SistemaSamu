import React, { FC } from 'react';
import { FooterBarPageWrapper } from './FooterBarPage.styled';

interface FooterBarPageProps {}

const FooterBarPage: FC<FooterBarPageProps> = () => (
 <FooterBarPageWrapper data-testid="FooterBarPage">
    
    <div className="bg-light text-center text-lg-start border">
        <div className="text-center p-3 text-dark">
            © 2024 Copyright:
            <a className="text-dark" href="https://GitHub.com/marcosandradetf/"> github.com/marcosandradetf</a>
        </div>
    </div>

 </FooterBarPageWrapper>
);

export default FooterBarPage;
