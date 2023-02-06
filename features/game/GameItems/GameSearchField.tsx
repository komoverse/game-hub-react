import { Dispatch, SetStateAction } from "react";
import Iconify from "@/components/Iconify";
import {
  Box,
  FormControl,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";

const GameSearchField = ({
  setValue,
}: {
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 1,
      }}
    >
      <TextField
        onChange={(event) => setValue(event.target.value)}
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
          multiple
          input={
            <OutlinedInput
              sx={{
                borderRadius: "2rem",
                height: "40px",
                minWidth: "180px",
              }}
            />
          }
        ></Select>
      </FormControl>
    </Box>
  );
};

export default GameSearchField;
