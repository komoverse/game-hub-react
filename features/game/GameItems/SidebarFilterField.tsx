import { useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import Iconify from "@/components/Iconify";
import { COLOR } from "@/utils/globalVariable";
import action from "@/store/market/action";
import { useSelector } from "react-redux";
import { ReduxState } from "@/types/redux";
import { ISidebarFilterField } from "./types";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<Iconify icon="mdi:chevron-down" />}
    {...props}
  />
))(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: COLOR.backgroundRoot,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const SidebarFilterField = ({
  isOpen,
  attributes,
  options,
  setExpand,
}: ISidebarFilterField) => {
  const selectedFilter = useSelector(
    (state: ReduxState) => state.market?.value
  );
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const handleChange = (
    event: SelectChangeEvent<typeof selectedAttributes>
  ) => {
    const {
      target: { value },
    } = event;

    setSelectedAttributes(typeof value === "string" ? value.split(",") : value);
    action.setFilter({ ...selectedFilter, [attributes]: value });
  };

  return (
    <Accordion expanded={isOpen} onChange={setExpand}>
      <AccordionSummary>
        <Typography>{attributes}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="demo-multiple-chip-label">{`Select ${attributes}`}</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={selectedAttributes}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label={`Select ${attributes}`}
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip size="small" key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {options.map((item) => (
              <MenuItem
                key={item}
                value={item}
                sx={{ py: 1, m: 1, borderRadius: 1 }}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};

export default SidebarFilterField;
