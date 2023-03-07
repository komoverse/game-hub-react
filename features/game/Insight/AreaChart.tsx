import React from 'react';
import {
  Area,
  AreaChart as Chart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { COLOR, RADIUS } from '@/utils/globalVariable';
import { Box, Divider, Typography, CardContent } from '@mui/material';
import { formatFollowerCount } from '@/utils/formatter';
import Iconify from '@/components/Iconify';
import { ChartProps, Socmed, TooltipChartProps } from '@/types/general';

const CustomTooltip = ({ active, payload, label }: TooltipChartProps | any) => {
  if (active && payload && payload.length) {
    return (
      <Typography variant="subtitle1">{`${label} : ${payload[0].value}`}</Typography>
    );
  }

  return null;
};

const AreaChart = ({ data, source }: ChartProps) => {
  const title = source === Socmed.TWITTER ? 'Followers Count' : 'Members Count';
  const valueChart = source === Socmed.TWITTER ? 'max_follower' : 'max_member';
  const icon = {
    [Socmed.TWITTER]: 'bx:bxl-twitter',
    [Socmed.DISCORD]: 'ic:baseline-discord',
    [Socmed.TELEGRAM]: 'file-icons:telegram',
  }[source];

  const renderXAxis = (month: string) => {
    return month.slice(0, 3);
  };

  return (
    <CardContent
      sx={{
        backgroundColor: COLOR.backgroundCardBlack,
        borderRadius: RADIUS.large,
      }}
    >
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body1">{title}</Typography>
          <Iconify icon={icon!} height={24} width={24} />
        </Box>
        <Divider sx={{ my: 2 }} />

        <ResponsiveContainer width="100%" height={200}>
          <Chart width={500} height={200} data={data} syncId="anyId">
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={COLOR.baseGreen}
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor={COLOR.baseGreen}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <XAxis
              dataKey="month_year"
              tick={{ fill: COLOR.baseWhite }}
              tickFormatter={renderXAxis}
            />
            <YAxis
              tick={{ fill: COLOR.baseWhite }}
              tickFormatter={formatFollowerCount}
            />
            <Area
              connectNulls
              type="linear"
              dataKey={valueChart}
              stroke={COLOR.baseGreen}
              fillOpacity={1}
              fill="url(#colorPv)"
              dot={{
                fill: COLOR.baseWhite,
                stroke: COLOR.baseWhite,
                strokeWidth: 1,
                r: 4,
              }}
            />
          </Chart>
        </ResponsiveContainer>
      </div>
    </CardContent>
  );
};

export default React.memo(AreaChart);

// export const AreaChartDiscord = ({ data }: any) => {
//   const renderXAxis = (month: string) => {
//     return month.slice(0, 3);
//   };

//   return (
//     <CardContent
//       sx={{
//         backgroundColor: COLOR.backgroundCardBlack,
//         borderRadius: RADIUS.large,
//       }}
//     >
//       <div style={{ width: '100%' }}>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Typography variant="body1">Member Count</Typography>
//           <Iconify icon="ic:baseline-discord" height={24} width={24} />
//         </Box>
//         <Divider sx={{ my: 2 }} />

//         <ResponsiveContainer width="100%" height={200}>
//           <Chart width={500} height={200} data={data} syncId="anyId">
//             <defs>
//               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//                 <stop
//                   offset="5%"
//                   stopColor={COLOR.baseGreen}
//                   stopOpacity={0.4}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor={COLOR.baseGreen}
//                   stopOpacity={0}
//                 />
//               </linearGradient>
//             </defs>
//             <CartesianGrid />
//             <Tooltip
//               content={<CustomTooltip />}
//               cursor={{ fill: 'transparent' }}
//             />
//             <XAxis
//               dataKey="month_year"
//               tick={{ fill: COLOR.baseWhite }}
//               tickFormatter={renderXAxis}
//             />
//             <YAxis
//               tick={{ fill: COLOR.baseWhite }}
//               tickFormatter={formatFollowerCount}
//             />
//             <Area
//               connectNulls
//               type="linear"
//               dataKey="max_member"
//               stroke={COLOR.baseGreen}
//               fillOpacity={1}
//               fill="url(#colorPv)"
//               dot={{
//                 fill: COLOR.baseWhite,
//                 stroke: COLOR.baseWhite,
//                 strokeWidth: 1,
//                 r: 4,
//               }}
//             />
//           </Chart>
//         </ResponsiveContainer>
//       </div>
//     </CardContent>
//   );
// };
