import { useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import MenuPopover from "@/components/MenuPopover";
import languageAction from "store/language/action";
import { withRouter } from "next/router";
import Image from "next/image";

// resource for flag icon
// https://flagpedia.net/download/api
const LANGS = [
  {
    value: "en",
    label: "English",
    icon: "https://flagcdn.com/gb.svg",
  },
  {
    value: "id",
    label: "Indonesian",
    icon: "https://flagcdn.com/id.svg",
  },
];

const LanguagePopover = () => {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("id");

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChangeLanguage = (lang: string) => {
    languageAction.changeLanguage(lang);
    setLanguage(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          my: 1,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <Image
          src={`https://flagcdn.com/${language || "gb"}.svg`}
          alt="great britain flag icon"
          width={30}
          height={30}
        />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{
          mt: 1.5,
          ml: 0.75,
          width: 180,
          "& .MuiMenuItem-root": {
            px: 1,
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Stack spacing={0.75}>
          {LANGS.map((option) => {
            return (
              <MenuItem
                key={option.value}
                selected={language === option.value}
                onClick={() => handleChangeLanguage(option.value)}
              >
                <Box
                  component="img"
                  alt={option.label}
                  src={option.icon}
                  sx={{ width: 28, mr: 2 }}
                />
                {option.label}
              </MenuItem>
            );
          })}
        </Stack>
      </MenuPopover>
    </>
  );
};

export default withRouter(LanguagePopover);
