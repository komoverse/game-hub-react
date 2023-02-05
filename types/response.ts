export interface ErrorResponseDto {
  response: {
    data: {
      status: number | string;
      message: string;
    };
  };
}

export enum TopPlayersRowClassnames {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
  FOURTH = 'fourth',
  MORE_THAN_FOUR = 'more-than-four',
}

export enum TopPlayersCellClassnames {
  RANK = 'rank',
  PLAYER_NAME = 'player-name',
  SCORE = 'score',
}
