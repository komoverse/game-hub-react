import { getGamePlayableFiles } from '@/services/games/playNow';
import { QueryKey } from '@/types/general';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

const PlayNowPage = () => {
  const router = useRouter();
  const { game: gameId } = router.query;
  const { data, isError, isLoading } = useQuery({
    queryKey: [QueryKey.PLAY_NOW, gameId],
    queryFn: () => getGamePlayableFiles(gameId as string),
  });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div>
      <h1>Play Now</h1>
      <p>Play Now page</p>
      <p>
        {data?.map((file) => (
          <div key={file.id}>
            <p>{file.game_id}</p>
            <p>{file.value}</p>
            {/* download game from file.value */}
            <a href={file.value} download rel="noreferrer" target="_blank">
              link
            </a>
          </div>
        ))}
      </p>
    </div>
  );
};

export default PlayNowPage;
