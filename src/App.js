import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { Container } from './components/styled/Container.styled';
import { Main } from './components/styled/Main.styled';
import { Wrapper } from './components/styled/Wrapper.styled';
import { darkTheme, lightTheme } from './utils/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Video } from './pages/Video';
import { Home } from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
      <Container>
      <BrowserRouter>
        <Menu title="Youtube" darkMode={darkMode} setDarkMode={setDarkMode}  />
        <Main>
          <Navbar />
          <Wrapper>
              <Routes>
                <Route path='/'>
                  <Route index element={<Home />} />
                  <Route path='video'>
                    <Route path=':id' element={<Video />} />
                  </Route>
                </Route>
              </Routes>         
          </Wrapper>
        </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
