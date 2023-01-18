import { Box, IconButton, Slide } from "@mui/material";
import Iconify from "@/components/Iconify";
import SearchField from "./SearchField";
import { APPBAR_MOBILE } from "../constant";

interface Props {
  isOpen: boolean;
  toggleOpen: () => void;
}

const SearchFieldPopOver = ({ isOpen, toggleOpen }: Props) => {
  return (
    <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
      <Box
        sx={{
          height: APPBAR_MOBILE,
          zIndex: (theme) => theme.zIndex.appBar + 1,
          display: "flex",
          width: "100%",
          position: "absolute",
          alignItems: "center",
          bgcolor: "#111111",
        }}
      >
        <SearchField isOpen={isOpen} />
        <IconButton
          size="medium"
          sx={{ display: { sm: "none" } }}
          onClick={() => toggleOpen()}
        >
          <Iconify icon="ic:baseline-close" height={24} width={24} />
        </IconButton>
      </Box>
    </Slide>
  );
};

export default SearchFieldPopOver;
