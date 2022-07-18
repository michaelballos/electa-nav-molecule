import { forwardRef } from 'react';
import { UnstyledButton } from '@mantine/core';

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
}

export const DropdownButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        marginTop: 5,
        '&:hover': {
          cursor: 'pointer',
        },
      })}
      {...others}
    >
      <svg
        fill="none"
        height="16"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 16 24"
      >
        <path d="M13 8.517L8 3 3 8.517M3 15.48l5 5.517 5-5.517" />
      </svg>
    </UnstyledButton>
  )
);
