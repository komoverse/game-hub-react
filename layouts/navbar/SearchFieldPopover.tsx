import { Box, ClickAwayListener, IconButton, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
          <CloseIcon />
        </IconButton>
      </Box>
    </Slide>
  );
};

export default SearchFieldPopOver;
