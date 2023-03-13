import { GetServerSidePropsContext } from 'next';
import DetailDynamic from '@/features/resources/Academy/Detail';

const NewsPagesDetail = ({ fullUrl }: { fullUrl: string }) => {
  return <DetailDynamic url={fullUrl} />;
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
