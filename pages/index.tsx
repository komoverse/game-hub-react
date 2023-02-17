import React from 'react';
import Router from 'next/router';
import { NextRequest, NextResponse } from 'next/server';
import { SSLoginProps } from '@/types/general';
import MainPage from 'features/home';
import isEmpty from 'lodash/isEmpty';

const Home = ({ query }: SSLoginProps) => {
  const { success } = query;

  React.useEffect(() => {
    Router.replace({ pathname: '/' });
    if (!success && !isEmpty(success)) {
      // redirect to register page
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainPage />;
};

export default Home;

export const getServerSideProps = async (
  res: NextResponse,
  req: NextRequest
) => {
  // @ts-ignore
  const { query } = res;

  return {
    props: {
      query,
    },
  };
};
