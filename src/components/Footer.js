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
  font-weight: 500;
  color: #000;
`

export default Footer;