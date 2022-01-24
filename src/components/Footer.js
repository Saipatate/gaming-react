import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterRow>&copy; 2022 - Saï</FooterRow>
  );
};

const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-weight: 600;
  color: #363636;
`

export default Footer;