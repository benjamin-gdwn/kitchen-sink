import { useState } from 'react';
import { MainLayout } from './components/MainLayout/MainLayout';
import { Button} from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'src/common/types/routes.types';
import { HeaderBar } from './components/HeaderBar/HeaderBar';

export const LandingPage = () => {
  const x = '';
  const linkBtn = <Button>Something</Button>
  return (
    <>
      <HeaderBar/>
      <MainLayout>
        <Link to={ROUTES.NEW}>
          {linkBtn}
          </Link>
        <h1>Hello World</h1>
        <h2>This is the main section</h2>
      </MainLayout>
    </>
  )
};
