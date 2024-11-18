import * as React from 'react';
import MUIAutocomplete, { AutocompleteProps } from '@mui/material/Autocomplete';
import Input from '@/components/Input';
import { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete';
import { alpha, useTheme } from '@mui/material';

type CustomAutocompleteProps<
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  'renderInput'
> & {
  label?: string;
};

const Autocomplete = <
  T,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
>({
  label,
  ...props
}: CustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) => {
  const theme = useTheme();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <MUIAutocomplete
      autoHighlight
      renderInput={({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        InputLabelProps,
        InputProps,
        ...restProps
      }: AutocompleteRenderInputParams) => {
        return <Input label={label} {...InputProps} {...restProps} />;
      }}
      componentsProps={{
        popper: {
          sx: {
            marginTop: '3px !important',
            padding: 0,
            background: theme.palette.background.default,
            borderRadius: '4px',
            boxShadow: `0px 4px 4px ${alpha(theme.palette.common.black, 0.2)}`,
            overflow: 'hidden',
            '& .MuiAutocomplete-listbox': {
              margin: 0,
              padding: 0,

              '&>*': {
                '&:hover': {
                  cursor: 'pointer',
                  background: theme.palette.grey[100],
                },

                '&:active': {
                  background: 'var(--default-light-button-background)',
                },
              },
            },

            '& .MuiAutocomplete-noOptions': {
              ...theme.typography.body2,
            },
            '& .MuiAutocomplete-loading': {
              ...theme.typography.body2,
            },
          },
        },
      }}
      {...props}
    />
  );
};

export default Autocomplete;
