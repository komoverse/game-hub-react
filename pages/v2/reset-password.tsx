import React from 'react';
import MainPage from '@/features/home';
import ResetPassword from '@/features/auth/ForgotPassword/ResetPassword';
import { NextResponse } from 'next/server';
import actionModalAuth from '@/store/modalAuth/action';

const ForgotPassword = ({ query }: { query: { token: string } }) => {
  const { token } = query;

  React.useEffect(() => {
    if (!token) return;
    actionModalAuth.setModalAuth({
      visible: true,
      modalType: 'RESET_PASSWORD',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainPage />
      <ResetPassword />
    </>
  );
};

export default ForgotPassword;

export const getServerSideProps = async (res: NextResponse) => {
  // @ts-ignore
  const { query } = res;

  return {
    props: {
      query,
    },
  };
};
