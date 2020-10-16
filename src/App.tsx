import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
// import Accordion from '@material-ui/core/Accordion'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import Container from '@material-ui/core/Container'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyled />
      <ButtonGroup>
        <Button
          endIcon={<SaveIcon />}
          variant="contained"
          color="primary"
          size="large"
          style={{
            fontSize: 24
          }}
        >
          Save
      </Button>
        <Button
          endIcon={<DeleteIcon />}
          variant="contained"
          color="secondary"
          size="large"
          style={{
            fontSize: 24
          }}
        >
          Remove
      </Button>

      </ButtonGroup>

      {/* <Accordion children={[1,2,3]}/> */}
    </ThemeProvider>
  );
}

export default App;
