import { Option } from './types.ts';

const options = [
  { email: 'johnDoe@mail.com', first_name: 'John', last_name: 'Doe' },
  { email: 'johnDoe1@mail.com', first_name: 'John1', last_name: 'Doe' },
  { email: 'johnDoe2@mail.com', first_name: 'John2', last_name: 'Doe' },
  { email: 'johnDoe3@mail.com', first_name: 'John3', last_name: 'Doe' },
  { email: 'johnDoe4@mail.com', first_name: 'John4', last_name: 'Doe' },
  { email: 'janeSmith@mail.com', first_name: 'Jane', last_name: 'Smith' },
  {
    email: 'aliceWonderland@mail.com',
    first_name: 'Alice',
    last_name: 'Wonderland',
  },
  { email: 'bobBuilder@mail.com', first_name: 'Bob', last_name: 'Builder' },
  { email: 'charlieBrown@mail.com', first_name: 'Charlie', last_name: 'Brown' },
  { email: 'davidBowie@mail.com', first_name: 'David', last_name: 'Bowie' },
  { email: 'emilyBlunt@mail.com', first_name: 'Emily', last_name: 'Blunt' },
  { email: 'frankCastle@mail.com', first_name: 'Frank', last_name: 'Castle' },
  { email: 'graceHopper@mail.com', first_name: 'Grace', last_name: 'Hopper' },
  { email: 'harryPotter@mail.com', first_name: 'Harry', last_name: 'Potter' },
  { email: 'harryPotter1@mail.com', first_name: 'Harry1', last_name: 'Potter' },
  { email: 'harryPotter2@mail.com', first_name: 'Harry2', last_name: 'Potter' },
  { email: 'harryPotter3@mail.com', first_name: 'Harry3', last_name: 'Potter' },
  { email: 'harryPotter4@mail.com', first_name: 'Harry4', last_name: 'Potter' },
  { email: 'harryPotter5@mail.com', first_name: 'Harry5', last_name: 'Potter' },
];

export const mockSearchUser = async (value: string): Promise<Option[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(options.filter((option) => isMatch(value, option)));
    }, 1000);
  });
};

const isMatch = (input: string, option: Option) => {
  const trimmedInput = input.trim();

  let fullName = '';
  let reversedFullName = '';
  if (option.first_name && option.last_name) {
    fullName = `${option.first_name} ${option.last_name}`;
    reversedFullName = `${option.last_name} ${option.first_name}`;
  }

  return (
    option.email.toLowerCase().includes(trimmedInput.toLowerCase()) ||
    (fullName && fullName.toLowerCase().includes(trimmedInput.toLowerCase())) ||
    (reversedFullName &&
      reversedFullName.toLowerCase().includes(trimmedInput.toLowerCase()))
  );
};
