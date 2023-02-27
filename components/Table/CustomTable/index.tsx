import React from 'react';
import { Box, Button } from '@mui/material';
import { columns } from './config';
import { CustomTable } from './style';
import {
  GridCellParams,
  GridRowClassNameParams,
  GridValidRowModel,
} from '@mui/x-data-grid';
import {
  TopPlayersCellClassnames,
  TopPlayersRowClassnames,
} from '@/types/general';
import { useSelector } from 'react-redux';
import { ReduxState } from '@/types/redux';
import { COLOR } from '@/utils/globalVariable';
import actionPagination from '@/store/pagination/action';
import { t } from 'i18next';

const KomoverseTableCustom = () => {
  const data = useSelector(
    (state: ReduxState) =>
      state.transactionHistory as readonly GridValidRowModel[]
  );

  const handleRowClassnames = (idx: number) => {
    if (idx === 0) return TopPlayersRowClassnames.FIRST;
    if (idx === 1) return TopPlayersRowClassnames.SECOND;
    if (idx === 2) return TopPlayersRowClassnames.THIRD;
    if (idx === 3) return TopPlayersRowClassnames.FOURTH;
    if (idx > 3) return TopPlayersRowClassnames.MORE_THAN_FOUR;
  };

  const handleCellClassnames = (field: string) => {
    if (field === 'player_name') return TopPlayersCellClassnames.PLAYER_NAME;
    if (field === 'score') return TopPlayersCellClassnames.SCORE;
  };

  return (
    <Box sx={{ flexGrow: 1, height: '750px' }}>
      <CustomTable
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        getRowClassName={(params: GridRowClassNameParams<GridValidRowModel>) =>
          handleRowClassnames(params.indexRelativeToCurrentPage)!
        }
        getCellClassName={(
          params: GridCellParams<any, GridValidRowModel, any>
        ) => handleCellClassnames(params.field)!}
        components={{
          Footer() {
            return <MemoizedCustomFooter />;
          },
        }}
        pagination
      />
    </Box>
  );
};

export default React.memo(KomoverseTableCustom);

const CustomFooter = () => {
  const defaultpage = useSelector((state: ReduxState) => state.pagination);

  const nextPage = () =>
    actionPagination.setPagination({ page: defaultpage.page + 1 });
  const previousPage = () =>
    actionPagination.setPagination({ page: defaultpage.page - 1 });

  return (
    <Box
      sx={{
        m: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        size="large"
        variant="contained"
        disabled={defaultpage.page === 1 ? true : false}
        sx={{
          color: defaultpage.page !== 1 ? COLOR.baseWhite : '',
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
        onClick={previousPage}
      >
        {t('table.previous')}
      </Button>
      <Button
        size="large"
        variant="contained"
        sx={{
          color: COLOR.baseWhite,
          fontWeight: 500,
          textTransform: 'uppercase',
        }}
        onClick={nextPage}
      >
        {t('table.next')}
      </Button>
    </Box>
  );
};

const MemoizedCustomFooter = React.memo(CustomFooter);
