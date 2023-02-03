import { Box, IconButton, Slide } from "@mui/material";
import { Iconify } from "@/components/index";
import SearchField from "./SearchField";
import { APPBAR_MOBILE } from "../constants";

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
          display: { xs: "flex", sm: "none" },
          width: "100%",
          position: "absolute",
          alignItems: "center",
          bgcolor: "#111111",
          left: 0,
          px: 1
        }}
      >
        <SearchField />
        <IconButton
          size="medium"
          onClick={() => toggleOpen()}
        >
          <Iconify icon="ic:baseline-close" height={24} width={24} />
        </IconButton>
      </Box>
    </Slide>
  );
};

export default SearchFieldPopOver;
