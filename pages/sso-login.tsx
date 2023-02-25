import React from 'react';
import Router from 'next/router';
import { Box, CircularProgress, Paper, styled } from '@mui/material';
import { NextResponse } from 'next/server';
import actionLogin from '@/store/auth/action';
import { SSLoginProps } from '@/types/general';
import { COLOR } from '@/utils/globalVariable';

export const ContainterSigin = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  background: 'black',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '16px',
}));

export const Wrapper = styled(Paper)(() => ({
  color: COLOR.baseWhite,
  backgroundColor: 'black',
  borderRadius: '8px',
  padding: '32px 24px',
  border: `1px solid ${COLOR.backgroundTableHover}`,
}));

const SSOLogin = ({ query }: SSLoginProps) => {
  const { success, message } = query;
  React.useEffect(() => {
    if (success !== ('false' as any)) {
      return actionLogin.setAuthLogin(query);
    }
    Router.replace({
      pathname: '/',
      query: { success, message },
    });
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
