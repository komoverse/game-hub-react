import React from 'react';
import Router from 'next/router';
import { MutationKey, SSLoginProps } from '@/types/general';
import MainPage from 'features/home';
// import { toast } from 'react-toastify';
import { NextResponse } from 'next/server';

const Home = ({ query }: SSLoginProps) => {
  const { success, message } = query;

  React.useEffect(() => {
    Router.replace({ pathname: '/' });
    if (success === ('false' as any)) {
      // toast.error(message, {
      //   position: 'top-right',
      //   autoClose: 4000,
      //   theme: 'dark',
      //   type: 'error',
      //   toastId: MutationKey.LOGIN_SOCMED,
      // });
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
