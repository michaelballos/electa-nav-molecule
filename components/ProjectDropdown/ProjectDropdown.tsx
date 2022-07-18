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
              styles={{
                hovered: {
                  background: 'linear-gradient(#e66465, #9198e5)',
                  color: 'white',
                },
              }}
              placeholder="Search for project"
              data={['dev-delegation', 'nurse-to-patient', 'aircraft-pilots', 'speed-dating']}
            />
            <Button
              sx={() => ({
                backgroundColor: '#e66465',
                '&:hover': {
                  background: 'linear-gradient(#e66465, #9198e5)',
                },
              })}
            >
              New
            </Button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
