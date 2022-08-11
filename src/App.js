import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import { Menu } from './components/Menu';
import { Navbar } from './components/Navbar';
import { Container } from './components/styled/Container.styled';
import { Main } from './components/styled/Main.styled';
import { Wrapper } from './components/styled/Wrapper.styled';
import { darkTheme, lightTheme } from './utils/Theme';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
      <Container>
        <Menu title="Youtube" darkMode={darkMode} setDarkMode={setDarkMode}  />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>heyyyyyy</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
