import React from 'react'
import { Container, Wrapper, LogoWrapper, Logo, Item, Hr, Login, Button, Title } from './styled/Menu.styled'
import YoutubeLogo from '../images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/HistoryOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Menu = ({ title, darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo src={YoutubeLogo} />
          {title}
        </LogoWrapper>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <ExploreIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsIcon />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryIcon />
          Library
        </Item>
        <Item>
          <HistoryIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment and subscribe
          <Button>
            <AccountCircleOutlinedIcon /> 
            SIGN IN
          </Button>
        </Login>
        <Hr/>
        <Title>BEST OF YOUTUBE</Title>
        <Item>
          <LibraryMusicIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsIcon />
          Gaming
        </Item>
        <Item>
          <MovieCreationIcon />
          Movies
        </Item>
        <Item>
          <ArticleIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          Light Mode
        </Item>
      </Wrapper>
    </Container>
  )
}
