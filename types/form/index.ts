import { FormEventHandler, ReactNode } from 'react';

export interface TextFieldProps {
  name: string;
  label: string;
  type?: string;
  InputProps?: {
    endAdornment: JSX.Element;
  };
}
export interface FormProviderProps {
  children?: ReactNode;
  methods?: any;
  onSubmit?: FormEventHandler<HTMLFormElement> | undefined;
}
