import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@/types/form';

const TextFieldComponent = ({ name, ...other }: TextFieldProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          error={!!error}
          helperText={error?.message}
          sx={{ backgroundColor: '#141414', borderRadius: 1.3 }}
          size="small"
          {...other}
        />
      )}
    />
  );
};

export default React.memo(TextFieldComponent);
