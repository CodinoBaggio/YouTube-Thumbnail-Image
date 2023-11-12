import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import './App.css';
import { blue } from '@mui/material/colors';
import { Header } from './components/Header';
import { MainContainer } from './components/MainContainer';

function App() {
  const theme = createTheme({
    palette: { primary: blue },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container fixed>
        <CssBaseline />
        <Header />
        <MainContainer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
