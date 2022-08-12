import React from 'react'
import { Container, Wrapper, Search, Input, Button } from '../components/styled/Navbar.styled'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchOutlined />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}
