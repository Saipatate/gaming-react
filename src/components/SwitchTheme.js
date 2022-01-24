import React from 'react';
import styled from 'styled-components';

const SwitchTheme = ({ colors, setTheme, theme }) => {

  const handleChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Input color={colors.$text} theme={theme}>
      <Inliner>
        <Paragraph color={colors.$text}>
          {theme === 'dark' ? 'Dark' : 'Light'}
        </Paragraph>
        <input
          id="switch"
          type="checkbox"
          onChange={handleChange}
          checked={theme === 'dark' && true}
        />
        <label htmlFor="switch" color={colors.$text}></label>
      </Inliner>
    </Input>
  );
};

const Input = styled.div`
  position: fixed;
  bottom: 20px;
  right: 60px;
  z-index: 99;

  & input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  & label {
    background: ${props => props.color};
    width: 50px;
    height: 26px;
    display: block;
    cursor: pointer;
    border-radius: 100px;
    position: relative;
    transition: background 0.4s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  & label::after {
    background: ${props => props.color};
    content: '';
    position: absolute;
    top: 3px;
    right: 3px;
    width: 20px;
    height: 20px;
    border-radius: 30px;
    filter: invert(1);
    transition: right 0.3s, filter 0.4s;
  }

  & input:checked + label::after {
    right: calc(100% - 24px);
  }
`

const Inliner = styled.div`

`

const Paragraph = styled.p`
  color: ${props => (props.color ? props.color : 'white')};
`

export default SwitchTheme;