import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const ActivityPage = dynamic(() => import('@/features/game/Activity'), {
  ssr: false,
});

const Activty: NextPage = () => {
  return <ActivityPage />;
};

export default Activty;
