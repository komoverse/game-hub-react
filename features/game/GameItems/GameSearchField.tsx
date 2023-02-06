import { Dispatch, SetStateAction } from "react";
import Iconify from "@/components/Iconify";
import {
  Box,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const GameSearchField = ({
  sortKey,
  setSortKey,
  setKeyword,
}: {
  sortKey: string;
  setSortKey: Dispatch<SetStateAction<string>>;
  setKeyword: Dispatch<SetStateAction<string>>;
}) => {
  const handleSelectSortKey = (event: SelectChangeEvent) => {
    setSortKey(event.target.value as string);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 1,
      }}
    >
      <TextField
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Search..."
        sx={{
          flexGrow: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: "2rem",
            height: "40px",
          },
        }}
        InputProps={{
          startAdornment: (
            <Iconify icon="ic:outline-search" height={24} width={24} />
          ),
        }}
      />
      <FormControl>
        <Select
          value={sortKey}
          onChange={handleSelectSortKey}
          input={
            <OutlinedInput
              sx={{
                borderRadius: "2rem",
                height: "40px",
                minWidth: "180px",
              }}
            />
          }
        >
          <MenuItem value="DATE_ASC">Date: New to Old</MenuItem>
          <MenuItem value="DATE_DESC">Date: Old to New</MenuItem>
          <MenuItem value="PRICE_ASC">Price: Low to High</MenuItem>
          <MenuItem value="PRICE_DESC">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default GameSearchField;
