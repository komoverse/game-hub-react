import React from 'react';
import Box from '@mui/material/Box';
import {
  Bracket,
  IRoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  IRenderSeedProps,
  ISeedProps,
} from 'react-brackets';

import { Typography } from '@mui/material';
import { ITournamentSingleElimination } from '@/types/game/tournament';

interface ISingleEliminationProps {
  data?: Array<ITournamentSingleElimination>;
}

const CustomSeed = ({ seed, breakpoint }: IRenderSeedProps) => {
  const getStatusColor = (status: 'W' | 'L') => {
    switch (status) {
      case 'W':
        return 'green';
      case 'L':
        return 'red';
      default:
        return 'white';
    }
  };
  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <>
          <SeedTeam>
            <Typography
              variant="body2"
              sx={{
                color: getStatusColor(seed.teams[0].status),
              }}
            >
              {seed.teams[0]?.name}
            </Typography>
          </SeedTeam>
          <SeedTeam>
            <Typography
              variant="body2"
              sx={{
                color: getStatusColor(seed.teams[1].status),
              }}
            >
              {seed.teams[1]?.name}
            </Typography>
          </SeedTeam>
        </>
      </SeedItem>
    </Seed>
  );
};

const transformMatch = (inputArray?: Array<ITournamentSingleElimination>) => {
  if (!inputArray) return [];
  const rounds: IRoundProps[] = [];

  inputArray?.forEach((item) => {
    const match: ISeedProps = {
      id: item.match_no,
      round: item.round_no,
      date: '',
      teams: [
        {
          id: item.participant[0].komo_username,
          name:
            item.participant[0].komo_username ||
            item.participant[0].placeholder,
          status: item.participant[0].status,
        },
        {
          id: item.participant[1].komo_username,
          name:
            item.participant[1].komo_username ||
            item.participant[1].placeholder,
          status: item.participant[1].status,
        },
      ],
    };

    const round: IRoundProps = {
      title: item.round_no.toString(),
      seeds: [],
    };

    if (rounds.find((r) => r.title === item.round_no.toString())) {
      const roundIndex = rounds.findIndex(
        (r) => r.title === item.round_no.toString()
      );
      rounds[roundIndex].seeds.push(match);
    } else {
      round.seeds.push(match);
      rounds.push(round);
    }
  });

  rounds.sort((a, b) => {
    return parseInt(a.title) - parseInt(b.title);
  });

  return rounds;
};

const SingleElimination = ({ data }: ISingleEliminationProps) => {
  const transformedMatch = transformMatch(data);

  return (
    <Bracket
      bracketClassName="custom-bracket"
      rounds={transformedMatch}
      roundTitleComponent={(title: React.ReactNode) => {
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
            }}
          >
            <Typography
              variant="overline"
              fontWeight={500}
            >{`Round ${title}`}</Typography>
          </Box>
        );
      }}
      renderSeedComponent={CustomSeed}
    />
  );
};

const MemoizedSingleElimination = React.memo(SingleElimination);

export default MemoizedSingleElimination;
