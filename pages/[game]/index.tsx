import dynamic from 'next/dynamic';

const Overview = dynamic(() => import('@/features/game/Overview'), {
  ssr: false,
});

export default function OverviewPages() {
  return <Overview />;
}
