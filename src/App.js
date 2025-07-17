import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './PageComponents/Home/home.js';
import NavBar from './PageComponents/NavBar/navbar.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7C8E76',
    },
    secondary: {
      main: '#F7FFE5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home  />} />
        </Route>
    </Routes>
  </ThemeProvider >
  );
}

export default App;
