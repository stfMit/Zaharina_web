import logo from '../../assets/cookie_ai.png';
import Box from '@mui/material/Box';
import './App.css';

function LoadingScreen() {
    const SX={

    }
  return (
    <Box className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Box className="Bite"></Box>

      </header>
    </Box>
  );
}

export default LoadingScreen;
