import styled from 'styled-components';

const Title = styled.h1`
  font-size: 35px;
  position: relative;
  margin-bottom: 70px;

  &::after {
    content: '';
    background: #8a00ff;
    width: 100%;
    height: 4px;
    left: 0;
    bottom: 0;
    border-radius: 10px;
    position: absolute;
  }
`

const Img = styled.img`
  top: -80px;
  width: 200px;
  position: absolute;
`
const Button = styled.button`
  border: none;
  color: #fff;
  font-weight: 500;
  background: #8a00ff;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`

export { Title, Img, Button }