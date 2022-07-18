import {
  Menu,
  Button,
  Autocomplete,
} from '@mantine/core';
import { DropdownButton } from '../DropdownButton/DropdownButton';
import { useStyles } from './ProjectDropdown.styles';

export default function ProjectDropdown() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Menu
        sx={() => ({
          backgroundColor: 'transparent',
        })}
        control={<DropdownButton />}
        trigger="hover"
        placement="center"
        size="xl"
        className={classes.dropdownContainer}
        delay={500}
      >
        <div className={classes.dropdownInnerContainer}>
          <div className={classes.searchAndButton}>
            <Autocomplete
              placeholder="Pick one"
              data={['React', 'Angular', 'Svelte', 'Vue']}
            />
            <Button>
              New
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
