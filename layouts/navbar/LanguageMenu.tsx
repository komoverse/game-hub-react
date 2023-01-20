import { useCallback, useEffect, useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton } from "@mui/material";
import MenuPopover from "@/components/MenuPopover";
import languageAction from "store/language/action";
import { useRouter, withRouter } from "next/router";
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
  {
    value: "cn",
    label: "China",
    icon: "https://flagcdn.com/cn.svg",
  },
  {
    value: "in",
    label: "India",
    icon: "https://flagcdn.com/in.svg",
  },
];

const LanguagePopover = () => {
  const router = useRouter();
  const locale = router.locale;
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(() => locale);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleChangeLanguage = useCallback(
    (lang: string) => {
      languageAction.changeLanguage(lang);
      setLanguage(lang);
      router.push("/", "/", { locale: lang });
      handleClose();
    },
    [router]
  );

  useEffect(() => {
    if (locale) {
      languageAction.changeLanguage(locale);
      setLanguage(locale);
    }
  }, [locale]);

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          m: 1,
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
          src={`https://flagcdn.com/${language === "en" ? "gb" : language}.svg`}
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
