import React from 'react';
import Router from 'next/router';
import { Box, CircularProgress } from '@mui/material';
import { NextResponse } from 'next/server';
import actionLogin from '@/store/auth/action';
import { ContainterSigin, Wrapper } from './signin';
import { SSLoginProps } from '@/types/general';

const SSOLogin = ({ query }: SSLoginProps) => {
  React.useEffect(() => {
    actionLogin.setAuthLogin(query);
    Router.replace({ pathname: '/', query: { success: query.success } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainterSigin>
      <Wrapper>
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress color="success" />
        </Box>
      </Wrapper>
    </ContainterSigin>
  );
};

export default SSOLogin;

export const getServerSideProps = async (res: NextResponse) => {
  // @ts-ignore
  const { query } = res;

  return {
    props: {
      query,
    },
  };
};
