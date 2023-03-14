import dynamic from 'next/dynamic';

const Overview = dynamic(() => import('@/features/game/Overview'), {
  loading: () => <p>Loading...</p>,
});

export default function OverviewPages() {
  return <Overview />;
}
