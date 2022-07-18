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

  arrowStyle: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
  },

  dropdownContainer: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
  },

  dropdownInnerContainer: {
    padding: 5,
    height: 400,
  },

  searchAndButton: {
    display: 'flex',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'max-content',
    width: '100%',
  },
}));
