import { BasicTable } from '@/components/Table/BasicTable/style';
import { COLOR } from '@/utils/globalVariable';
import { leaderboardColumn } from '../../consts';

interface ILeaderboardTableProps {
  data: Array<any>;
}

const LeaderboardTable = ({ data }: ILeaderboardTableProps) => {
  return (
    <BasicTable
      rows={data}
      columns={leaderboardColumn}
      pageSize={5}
      disableColumnSelector
      disableSelectionOnClick
      disableColumnFilter
      disableColumnMenu
      autoHeight
      rowsPerPageOptions={[5]}
      sx={{
        border: '0',
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: 1,
          borderColor: 'divider',
          fontSize: 14,
          color: COLOR.baseGreen,
        },
        '& .MuiDataGrid-cell': {
          borderBottom: 1,
          borderColor: 'divider',
          fontWeight: 500,
          fontSize: '1rem',
        },
      }}
    />
  );
};

export default LeaderboardTable;
