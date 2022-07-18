import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: 0,
  },

  dropdownButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
