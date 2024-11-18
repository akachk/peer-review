import { forwardRef } from 'react';
import { StyledHelperText, StyledInput, StyledInputWrapper } from './styles';
import { InputProps } from '@mui/material';
import Typography from '@mui/material/Typography';

interface Props extends InputProps {
  label?: string;
  withBorder?: boolean;
  helperText?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    {
      label,
      type = 'text',
      autoComplete = 'off',
      withBorder = true,
      helperText,
      ...rest
    }: Props,
    ref,
  ) => (
    <StyledInputWrapper>
      {label && <Typography variant="bodyS">{label}</Typography>}
      <StyledInput
        type={type}
        autoComplete={autoComplete}
        withBorder={withBorder}
        ref={ref}
        {...rest}
      />
      {helperText && (
        <StyledHelperText
          variant="bodyS"
          color={rest.error ? 'error.main' : undefined}
        >
          {helperText}
        </StyledHelperText>
      )}
    </StyledInputWrapper>
  ),
);

export default Input;
