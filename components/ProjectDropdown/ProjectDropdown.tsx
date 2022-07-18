import { useState } from 'react';
import {
  Popper,
  Button,
  Paper,
  Center,
  Group,
  useMantineTheme,
} from '@mantine/core';
import { useStyles } from './ProjectDropdown.styles';

export default function ProjectDropdown() {
  const { classes } = useStyles();
  const [
    referenceElement,
    setReferenceElement,
  ] = useState(null);
  const [
    visible,
    setVisible,
  ] = useState(true);
  const theme = useMantineTheme();

  return (
    <div className={classes.container}>
      <button
        className={classes.dropdownButton}
        type="button"
        ref={setReferenceElement}
        onClick={() => setVisible((m) => !m)}
      >
        <svg
          fill="none"
          height="16"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 16 24"
        >
          <path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517" />
        </svg>
      </button>

      <Popper
        placement="center"
        arrowSize={5}
        withArrow
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
        arrowStyle={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }}
      >
        <Paper
          style={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        >
          <Center
            style={{
              height: 100,
              width: 200,
            }}
          >
            Popper content
          </Center>
        </Paper>
      </Popper>
    </div>
  );
}
