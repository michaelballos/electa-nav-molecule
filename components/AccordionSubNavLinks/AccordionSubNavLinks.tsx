import { Accordion } from '@mantine/core';
import type { INavLinks } from '../AsideNav/AsideNav';

export interface IAccordionNavLinks {
  label: string;
}

export default function AccordionSubNavLinks({
  label,
}: IAccordionNavLinks) {
  return (
    <Accordion
      styles={{
        control: {
          width: '12em',
        },
        content: {
          paddingLeft: '0px !important',
        },
      }}
    >
      <Accordion.Item label={label}>

      </Accordion.Item>
    </Accordion>
  );
}
