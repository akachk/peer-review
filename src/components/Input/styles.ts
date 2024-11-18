import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { preventForwardCustomProps } from '@/utils/preventForwardCustomProps';
import { css } from '@mui/material';

export const StyledInputWrapper = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StyledInput = styled(
  InputBase,
  preventForwardCustomProps(['withBorder']),
)<
  InputBaseProps & {
    withBorder?: boolean;
  }
>(
  ({ theme, error, disabled, withBorder }) => css`
      flex: 1;
      width: 100%;

      border-radius: 4px;
      padding: 0 8px;
      ${
        withBorder &&
        `border: 1px solid
      ${error ? theme.palette.error.main : theme.palette.grey[300]};`
      }

      & .MuiInputBase-input {
          height: auto;
          font-family: ${theme.typography.subtitle2.fontFamily};
          font-weight: ${theme.typography.subtitle2.fontWeight};
          font-size: ${theme.typography.subtitle2.fontSize};
          line-height: ${theme.typography.subtitle2.lineHeight};
          color: ${
            disabled
              ? 'var(--borders-tables-border-dark)'
              : theme.typography.subtitle2.color
          };
          padding: 7px 0;

          ${
            !error &&
            !disabled &&
            css`
              &:hover {
                border-color: ${theme.palette.grey[300]};
              }
            `
          }
  `,
);

export const StyledHelperText = styled(Typography)`
  font-size: 12px;
`;
