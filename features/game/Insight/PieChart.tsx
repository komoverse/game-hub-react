import React from 'react';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { Box, CardContent, Divider, Grid, Typography } from '@mui/material';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';
import { formatPercent } from '@/utils/percentage';
import { t } from 'i18next';
import Iconify from '@/components/Iconify';
import { formatFollowerCount } from '@/utils/formatter';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import useResponsive from '@/hooks/useResponsive';
import { ChartProps, Socmed } from '@/types/general';

const PieChart = ({ data, source }: ChartProps) => {
  const smDown = useResponsive('down', 'sm');

  const title =
    source === Socmed.DISCORD ? 'Discord Members' : 'Telegram Members';

  const member =
    source === Socmed.DISCORD ? data?.discord_member : data?.telegram_member;

  const activeMember =
    source === Socmed.DISCORD ? data?.discord_active : data?.telegram_active;

  const changes =
    source === Socmed.DISCORD
      ? data?.discord_percent_changes
      : data?.telegram_percent_changes;

  const percentActive =
    source === Socmed.DISCORD
      ? data?.discord_percent_active
      : data?.telegram_percent_active;

  const icon =
    source === Socmed.DISCORD ? 'ic:baseline-discord' : 'file-icons:telegram';

  return (
    <CardContent
      sx={{
        backgroundColor: COLOR.backgroundCardBlack,
        borderRadius: RADIUS.large,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body1">{title}</Typography>
        <Iconify icon={icon} height={24} width={24} />
      </Box>
      <Divider sx={{ my: 2 }} />

      <Grid container sx={{ alignItems: 'center' }}>
        <Grid item lg={8} sm={12} xs={12} md={8}>
          <CardContent>
            <Typography variant="subtitle1" fontWeight={400}>
              Members
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h3">
                {formatFollowerCount(member)}
              </Typography>
              {changes < 1 ? (
                <KeyboardDoubleArrowDownIcon
                  sx={{ color: COLOR.baseColorDanger }}
                />
              ) : (
                <KeyboardDoubleArrowUpIcon sx={{ color: COLOR.baseGreen }} />
              )}
              <span
                style={{
                  color: changes < 1 ? COLOR.baseColorDanger : COLOR.baseGreen,
                }}
              >
                {changes}
              </span>
            </Box>
            <Typography variant="subtitle1" fontWeight={400}>
              Active Members
            </Typography>
            <Typography variant="h3">
              {formatFollowerCount(activeMember)}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item lg={4} sm={12} xs={12} md={4}>
          <Box sx={{ maxWidth: 180, margin: smDown ? 'auto' : '' }}>
            <CircularProgressbarWithChildren
              value={percentActive}
              maxValue={100}
              strokeWidth={16}
              counterClockwise={true}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: COLOR.baseGreen,
                trailColor: COLOR.baseGrayPieChart,
              })}
            >
              <Typography variant="h4">
                {formatPercent(percentActive, t('utils.format'))}
              </Typography>
              <Typography variant="subtitle1" color={COLOR.baseGreen}>
                Active
              </Typography>
            </CircularProgressbarWithChildren>
          </Box>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default React.memo(PieChart);
