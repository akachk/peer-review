import { FC, useEffect } from 'react';
import Input from '@/components/Input';
import { Button, Stack } from '@mui/material';
import Autocomplete from '@/components/Autocomplete';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useSendEmailForm } from '@/containers/SendEmailForm/UseSendEmailForm.ts';
import { AutocompleteValue } from '@mui/material/useAutocomplete/useAutocomplete';
import { Option } from '@/containers/SendEmailForm/types.ts';

const SendEmailForm: FC = () => {
  const { inputValue, setInputValue, options, handleSubmit, searchUser } =
    useSendEmailForm();

  useEffect(() => {
    if (inputValue) {
      const id = setTimeout(() => {
        searchUser(inputValue);
      }, 300);

      return () => {
        clearTimeout(id);
      };
    }
  }, [inputValue]);

  const handleInputChange = (event: React.SyntheticEvent, value: string) => {
    setInputValue(value);
  };

  const handleChange = (
    event: React.SyntheticEvent,
    value: AutocompleteValue<Option, false, false, true>,
  ) => {
    console.log('handleChange', value);
    if (value) {
      setInputValue((value as Option).email);
    } else {
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="16px">
        <Autocomplete
          freeSolo
          options={options}
          onInputChange={handleInputChange}
          onChange={handleChange}
          inputValue={inputValue}
          filterOptions={(options) => options}
          getOptionLabel={(option) => option.email}
          renderOption={(props, option) => (
            <li {...props} key={option.email}>
              <Typography>{option.email}</Typography>
            </li>
          )}
        />
        <Input id="note" placeholder="Note" multiline minRows={3} />
      </Stack>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SendEmailForm;
