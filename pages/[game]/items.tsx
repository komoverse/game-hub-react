import dynamic from 'next/dynamic';

const GameItems = dynamic(
  () => import('@/features/game/GameItems/GameMarket'),
  {
    ssr: false,
  }
);

export default function Items() {
  return <GameItems />;
}
