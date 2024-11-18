import { Option } from '@/containers/SendEmailForm/types.ts';
import { FormEvent, useMemo, useState } from 'react';
import { mockSearchUser } from './mock.ts';

export const useSendEmailForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [fetchedOptions, setFetchedOptions] = useState<Option[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const searchUser = async (value: string) => {
    const response = await mockSearchUser(value);

    setFetchedOptions(response);
  };

  const options = useMemo(() => {
    if (fetchedOptions.length) {
      return fetchedOptions;
    } else if (inputValue) {
      return [{ email: inputValue }];
    } else return [];
  }, [fetchedOptions, inputValue]);

  return {
    inputValue,
    setInputValue,
    options,
    searchUser,
    handleSubmit,
  };
};
