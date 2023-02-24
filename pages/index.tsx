import React from 'react';
import Router from 'next/router';
import { MutationKey, TypeAuthLogin } from '@/types/general';
import MainPage from 'features/home';
import isEmpty from 'lodash/isEmpty';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import actionModalAuth from '@/store/modalAuth/action';
import { toast } from 'react-toastify';

const Home = () => {
  const { auth } = useSelector((state: ReduxState) => ({
    auth: state.login as TypeAuthLogin,
  }));

  React.useEffect(() => {
    Router.replace({ pathname: '/' });
    if (auth.success === ('false' as any) && !isEmpty(auth)) {
      actionModalAuth.setModalAuth({ modalType: 'REGISTER', visible: true });
      toast.error(auth.message, {
        position: 'top-right',
        autoClose: 4000,
        theme: 'dark',
        type: 'error',
        toastId: MutationKey.LOGIN_SOCMED,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainPage />;
};

export default Home;
