import React from 'react'
import { Container, Wrapper, LogoWrapper, Logo, Item, Hr, Login, Button, Title } from './styled/Menu.styled'
import { iconsSet1, iconsSet2, iconsSet3, iconsSet4 } from '../utils/Icons';
import YoutubeLogo from '../images/logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

export const Menu = ({ title, darkMode, setDarkMode }) => {

  const renderIcons = items => {
    return items.map((item, index) => (
      <Item key={index} onClick={() => { item.name === 'Light Mode' ? setDarkMode(!darkMode) : console.log(item.name) }}>
        {item.icon}{item.name}
      </Item>)
    )
  }

  return (
    <Container>
      <Wrapper>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
          <LogoWrapper>
            <Logo src={YoutubeLogo} />
            {title}
          </LogoWrapper>
        </Link>
        {renderIcons(iconsSet1)}
        <Hr />
        {renderIcons(iconsSet2)}
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe
          <Button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </Button>
        </Login>
        <Hr />
        <Title>MORE FROM YOUTUBE</Title>
        {renderIcons(iconsSet3)}
        <Hr />
        {renderIcons(iconsSet4)}
      </Wrapper>
    </Container>
  )
}
