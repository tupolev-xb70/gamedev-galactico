import React, { useState, useRef }  from 'react'
import { useOnClickOutside } from './hooks';
import FocusLock from 'react-focus-lock';

import './global.css'
import { ThemeProvider } from 'styled-components';
//import { GlobalStyles } from './global';
import { Burger, Menu } from './components';
import { theme } from './theme';

import Routes from './routes'

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
      <div>
        < Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
