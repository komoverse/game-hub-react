import { ReactNode } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

const RegistrationInput = ({
  id,
  label,
  helper,
  error,
  children,
  required = true,
}: {
  id: string;
  label: string;
  helper?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  children: ReactNode;
  required?: boolean;
}) => {
  const inputLabel = `${label}${required ? '*' : ''}`;
  const errorMessage = error?.message as string;
  const isShowHelperText = helper && !error;

  return (
    <FormControl
      id={id}
      margin="dense"
      variant="standard"
      fullWidth
      error={!!error}
    >
      <InputLabel shrink>{inputLabel}</InputLabel>
      {children}
      {isShowHelperText && <FormHelperText>{helper}</FormHelperText>}
      {error && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default RegistrationInput;
