import dynamic from 'next/dynamic';

const Overview = dynamic(() => import('@/features/game/Overview'));

export default function OverviewPages() {
  return <Overview />;
}
