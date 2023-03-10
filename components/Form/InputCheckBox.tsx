import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { InputFormProps } from '@/types/form';

const InputCheckbox = ({ name, label }: InputFormProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControlLabel
          {...field}
          control={<Checkbox value={field.value} />}
          label={
            <Typography variant="body2" fontSize={12}>
              {label}
            </Typography>
          }
        />
      )}
    />
  );
};

export default React.memo(InputCheckbox);
