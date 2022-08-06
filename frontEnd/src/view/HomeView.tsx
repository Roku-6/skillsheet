import React from 'react';
import axios from "axios";
import { v4 as uuid } from 'uuid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Grid } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AppHeader from '../components/AppHeader';
import MainPage from '../components/MainPage';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const theme = createTheme({
  palette: {
    primary: {
      main: '#42425A',
    },
  },
});

const drawerWidth = 256;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#FFF',
  marginLeft: 0,
  height: '48px',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '100%',
  position: 'absolute',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const resumeModel = {
  resume_id: uuid(),
  title: "スキルシート",
  update_date: "",
  job_summary: "this is React. this is ReactProject.",
  skills: "React test",
  about_myself: "React introduction",
}

const createResume = () => {
  axios.post("https://yjsig8wqw9.execute-api.ap-northeast-1.amazonaws.com/Stage/resume", resumeModel).then((res) => {
    console.log(res.data)
  })
}

function HomeView() {
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid
          item
          marginTop={7}
          sx={{
            width: { xs: `100%`, md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Card
            elevation={0}
            style={{
              minHeight: "100vh",
              backgroundColor: "#F0F1F6"
            }}
          >
            <CardContent>
              <Grid container spacing={2} style={{padding: "0 4%"}}>
                <Grid
                  item
                  style={{position: 'relative'}}
                  sx={{ display: { xs: 'none', md: 'flex' }, width: '50%' }}
                >
                  <Typography variant="h6" style={{ position: 'absolute', bottom: '0'}}>KeyStone</Typography>
                </Grid>
                <Grid
                  item
                  sx={{ display: { xs: 'none', md: 'flex' }, width: '50%' }}
                >
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Grid>
                <MainPage />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <ThemeProvider theme={theme}>
        <Fab
          aria-label="add"
          color='primary'
          style={{ position: "fixed", right: "2.5%", bottom: "5%"}}
          onClick={createResume}
        >
          <AddIcon/>
        </Fab>
      </ThemeProvider>
    </>
  );
}

export default HomeView;
