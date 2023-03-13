import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';

const Detail = dynamic(() => import('@/features/resources/Academy/Detail'), {
  ssr: false,
});

const NewsPagesDetail = ({ fullUrl }: { fullUrl: string }) => {
  return <Detail url={fullUrl} />;
};

export default NewsPagesDetail;

export const getServerSideProps = async (res: GetServerSidePropsContext) => {
  const { host } = res.req.headers;
  const { locale } = res;
  const { resolvedUrl } = res;

  const fullUrl = `${host}/${locale}${resolvedUrl}`;

  return {
    props: {
      fullUrl,
    },
  };
};
