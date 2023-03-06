import React from 'react';
import Router from 'next/router';
import { SSLoginProps } from '@/types/general';
import MainPage from 'features/home';
import { NextResponse } from 'next/server';
import actionToast from '@/store/toast/action';

const Home = ({ query }: SSLoginProps) => {
  const { success, message } = query;

  React.useEffect(() => {
    Router.replace({ pathname: '/' });
    if (success === ('false' as any)) {
      actionToast.setToast({
        display: true,
        message: message,
        type: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainPage />;
};

export default Home;

export const getServerSideProps = async (res: NextResponse) => {
  // @ts-ignore
  const { query } = res;

  return {
    props: {
      query,
    },
  };
};
