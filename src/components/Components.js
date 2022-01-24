import styled from 'styled-components';

const TitleContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  margin-bottom: 70px;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`

const TitleShop = styled.h1`
position: relative;
color: #ff7c7c;

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

const Title = styled.h1`
  font-size: 35px;
  position: relative;
  margin-bottom: 70px;
  color: ${props => props.color};

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

const NewImg = styled.img`
  top: -80px;
  width: 200px;
  position: absolute;
`

const Img = styled.img`
  width: 200px;
  margin-bottom: 15px;
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

export { Title, NewImg, Img, Button, TitleContent, TitleShop }