import React from 'react'
import { Box } from '@mui/material'
import { columns, data } from './config'
import { CustomTable } from './style'
import { GridCellParams, GridRowClassNameParams, GridValidRowModel } from '@mui/x-data-grid'
import { TopPlayersCellClassnames, TopPlayersRowClassnames } from '@/types/response'

const KomoverseTableCustom = () => {
  const handleRowClassnames = (idx: number) => {
    if (idx === 0) return TopPlayersRowClassnames.FIRST
    if (idx === 1) return TopPlayersRowClassnames.SECOND
    if (idx === 2) return TopPlayersRowClassnames.THIRD
    if (idx === 3) return TopPlayersRowClassnames.FOURTH
    if (idx > 3) return TopPlayersRowClassnames.MORE_THAN_FOUR
  }

  const handleCellClassnames = (field: string) => { 
    if (field === 'player_name') return TopPlayersCellClassnames.PLAYER_NAME
    if (field === 'score') return TopPlayersCellClassnames.SCORE
  }

  return (
    <Box sx={{ flexGrow: 1, height: '500px' }}>
      <CustomTable
        rows={data}
        columns={columns}
        // pageSize={7}
        // rowsPerPageOptions={[10]}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        getRowClassName={
          (params: GridRowClassNameParams<GridValidRowModel>) =>
            handleRowClassnames(params.indexRelativeToCurrentPage)!
        }
        getCellClassName={(params: GridCellParams<any, GridValidRowModel, any>) =>
          handleCellClassnames(params.field)!
        }
        hideFooter
      />
    </Box>
  )
}

export default React.memo(KomoverseTableCustom)