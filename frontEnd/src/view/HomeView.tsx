import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import AppHeader from '../components/AppHeader';
import MainPage from '../components/MainPage';


function HomeView() {
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item marginTop={7}>
          <Card elevation={0}>
            <CardContent>
              <MainPage />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeView;
