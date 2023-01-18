import { useEffect, useState } from "react";
import { TextField, Autocomplete, CircularProgress } from "@mui/material";
import Iconify from "@/components/Iconify";

interface Film {
  title: string;
  year: number;
  firstLetter: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const topFilms = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const filmOptions = topFilms.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    ...option,
  };
});

export default function SearchField({ isOpen }: { isOpen: boolean }) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Film[]>([]);
  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      // TDOD: Fetch search data from the API
      await sleep(1000);

      if (active) {
        setOptions([...filmOptions]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <Autocomplete
      id="asynchronous-demo"
      size="small"
      sx={{
        width: 350,
        borderRadius: "1rem",
        display: { xs: isOpen ? "block" : "none", sm: "block" },
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      groupBy={(option) => option.firstLetter}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "2rem",

              legend: {
                marginLeft: "30px",
              },
            },
            "& .MuiAutocomplete-inputRoot": {
              paddingLeft: "20px !important",
              borderRadius: "2rem",
            },
          }}
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <Iconify icon="ic:outline-search" height={24} width={24} />
            ),
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
