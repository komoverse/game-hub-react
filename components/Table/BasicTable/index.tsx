import React from 'react'
import { COLOR } from '@/utils/globalVariable'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Paper, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NoteIcon } from '@/components/index';
import { BasicTable } from './style';
import { columns } from './config';
import { useSelector } from 'react-redux';
import actionPagination from '@/store/pagination/action'
import { ReduxState } from '@/types/redux';
import { GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid';

const CustomFooter = () => {
  const defaultpage = useSelector((state: ReduxState) => state.pagination)

  const nextPage = () => actionPagination.setPagination({ page: defaultpage.page + 1 })
  const previousPage = () => actionPagination.setPagination({ page: defaultpage.page - 1 })

  return (
    <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button
        size='large'
        variant='contained'
        disabled={defaultpage.page === 1 ? true : false}
        sx={{ color: defaultpage.page !== 1 && COLOR.baseWhite, fontWeight: 500 }}
        onClick={previousPage}
      >
        PREVIOUS
      </Button>
      <Button
        size='large'
        variant='contained'
        sx={{ color: COLOR.baseWhite, fontWeight: 500 }}
        onClick={nextPage}
      >
        NEXT
      </Button>
    </Box >
  )
}

const MemoizedCustomFooter = React.memo(CustomFooter)

const KomoverseTable = () => {
  const [expanded, setExpanded] = React.useState<string | false>('historyTransaction');
  const data = useSelector((state: ReduxState) => state.transactionHistory as readonly GridValidRowModel[])

  const handleChange = (panel: string) => (
    event: React.SyntheticEvent, newExpanded: boolean
  ) => setExpanded(newExpanded ? panel : false)

  return (
    <Box sx={{ marginTop: 4 }}>
      <Box sx={{ overflowX: 'auto' }}>
        <div>
          <Accordion
            expanded={expanded === 'historyTransaction'}
            onChange={handleChange('historyTransaction')}
            sx={{ border: '1px solid rgb(45, 45, 45)' }}
          >
            <AccordionSummary
              sx={{ backgroundColor: COLOR.baseSemiBlack }}
              expandIcon={<ExpandMoreIcon />}
              id="historyTransaction"
            >
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <NoteIcon />
                <Typography variant='h6' sx={{ margin: '0px 0px 0px 8px' }}>Transaction History</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: COLOR.baseSemiBlack }}>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Paper sx={{ flexGrow: 1, height: '500px' }}>
                    <BasicTable
                      rows={data}
                      columns={columns}
                      pageSize={7}
                      rowsPerPageOptions={[10]}
                      disableSelectionOnClick
                      disableColumnMenu
                      disableColumnFilter
                      getRowClassName={(params: GridRowClassNameParams<GridValidRowModel>) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                      }
                      components={{
                        Footer() {
                          return <MemoizedCustomFooter />
                        }
                      }}
                      pagination
                    />
                  </Paper>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
      </Box>
    </Box>
  )
}

export default React.memo(KomoverseTable)