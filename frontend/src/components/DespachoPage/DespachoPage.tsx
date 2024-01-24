import React, { FC } from 'react';
import { DespachoPageWrapper } from './DespachoPage.styled';

interface DespachoPageProps {}

const DespachoPage: FC<DespachoPageProps> = () => (
 <DespachoPageWrapper data-testid="DespachoPage">
    DespachoPage Component
 </DespachoPageWrapper>
);

export default DespachoPage;
