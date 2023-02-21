import { ReactElement } from 'react';
import { useQuery } from 'react-query';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { getCountryCodeList } from '@/services/countryCode';

const SelectMenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
    },
  },
};

const RegistrationSelect = ({ input }: { input: ReactElement }) => {
  const {
    data: countriesCode,
    isLoading,
    isError,
  } = useQuery(['getCountryCodeList'], () => getCountryCodeList());

  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      defaultValue={''}
      input={input}
      MenuProps={SelectMenuProps}
    >
      {countriesCode &&
        countriesCode.map((country: any) => (
          <MenuItem key={country.country_name} value={country.alpha3code}>
            {country.country_name}
          </MenuItem>
        ))}
    </Select>
  );
};

export default RegistrationSelect;