const data = [
  {
    id: 1,
    game_id: 'komochess',
    tournament_banner_url:
      'https://komo.s3.ap-southeast-1.amazonaws.com/website_mint/1OZ2-komochess.webp',
    candy_machine_id: 'RqP3BfJWnM56CHaXs5QKqFqcc5gvxYiL7AEox8WHStC',
    tournament_name: 'Whitelist Mint',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore alias provident, perferendis asperiores dicta suscipit! Repellat nam pariatur, cupiditate quos deserunt ratione id voluptatibus magnam inventore in harum dolor esse nihil qui nobis enim eligendi laudantium quis aliquam ipsum impedit doloribus ipsam. Placeat, ab! Quia veniam tempora explicabo deleniti fugiat repellat laboriosam, reprehenderit autem corrupti, maxime error. Iste nihil provident quaerat adipisci, id illum unde, ab accusamus non ex. Praesentium minus vel, cum quasi dolor, accusamus ad sequi similique quis voluptatum inventore! Repudiandae ipsa in ullam, similique. Libero vel autem veniam repellat saepe maiores inventore amet neque totam impedit!',
    reward: '$750 (~25 SOL), NFT raffles, Seed NFTs',
    currency: 'SOL',
    tournament_start_date: '2023-01-30 00:00:00',
    tournament_end_date: '2023-02-28 23:59:59',
    learn_more_url: 'https://komoverse.dev/news',
    created_at: '2023-01-20 03:51:29',
    leaderboard: [
      {
        rank: 1,
        id: 1,
        eval: 1123443253,
        player: 'Snow Jon',
        kills: 35,
        points: 10023,
      },
      {
        rank: 1,
        id: 2,
        eval: 1123443253,
        player: 'Lannister Cersei',
        kills: 42,
        points: 10023,
      },
      {
        rank: 1,
        id: 3,
        eval: 1123443253,
        player: 'Lannister Jaime',
        kills: 45,
        points: 10023,
      },
      {
        rank: 1,
        id: 4,
        eval: 1123443253,
        player: 'Stark Arya',
        kills: 16,
        points: 10023,
      },
      {
        rank: 1,
        id: 5,
        eval: 1123443253,
        player: 'Targaryen Daenerys',
        kills: 12,
        points: 10023,
      },
      {
        rank: 1,
        id: 6,
        eval: 1123443253,
        player: 'Melisandre ull',
        kills: 15,
        points: 100230,
      },
      {
        rank: 1,
        id: 7,
        eval: 1123443253,
        player: 'Clifford Ferrara',
        kills: 44,
        points: 10023,
      },
      {
        rank: 1,
        id: 8,
        eval: 1123443253,
        player: 'Frances Rossini',
        kills: 36,
        points: 10023,
      },
      {
        rank: 1,
        id: 9,
        eval: 1123443253,
        player: 'Roxie Harvey',
        kills: 65,
        points: 10023,
      },
    ],
  },
  {
    id: 2,
    game_id: 'komochess',
    tournament_banner_url:
      'https://storage.googleapis.com/fractal-media/media_44b2d004-0e0d-4cdf-87a6-b7be9ddae42b',
    candy_machine_id: 'RqP3BfJWnM56CHaXs5QKqFqcc5gvxYiL7AEox8WHStC',
    tournament_name: 'Public Mint',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore alias provident, perferendis asperiores dicta suscipit! Repellat nam pariatur, cupiditate quos deserunt ratione id voluptatibus magnam inventore in harum dolor esse nihil qui nobis enim eligendi laudantium quis aliquam ipsum impedit doloribus ipsam. Placeat, ab! Quia veniam tempora explicabo deleniti fugiat repellat laboriosam, reprehenderit autem corrupti, maxime error. Iste nihil provident quaerat adipisci, id illum unde, ab accusamus non ex. Praesentium minus vel, cum quasi dolor, accusamus ad sequi similique quis voluptatum inventore! Repudiandae ipsa in ullam, similique. Libero vel autem veniam repellat saepe maiores inventore amet neque totam impedit!',
    reward: '$750 (~25 SOL), NFT raffles, Seed NFTs',
    currency: 'SOL',
    tournament_start_date: '2023-03-01 00:00:00',
    tournament_end_date: '2023-05-30 23:59:59',
    learn_more_url: 'https://komoverse.dev/news',
    created_at: '2023-01-20 03:56:00',
    leaderboard: null,
  },
];

export const getGameTournaments = async (gameId: string): Promise<any> => {
  const result = new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
  return result;
};
