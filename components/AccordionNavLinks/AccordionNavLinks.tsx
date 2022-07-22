import { Accordion } from '@mantine/core';
import AccordionSubNavLinks from '../AccordionSubNavLinks/AccordionSubNavLinks';
import type { INavLinks } from '../AsideNav/AsideNav';

export interface IAccordionNavLinks {
  subLinks: INavLinks[];
}

export default function AccordionNavLinks({
  subLinks,
}: IAccordionNavLinks) {
  const accordionSubNavLinks = subLinks.map((item) => {
    const {
      label,
    } = item;
    return (
      <Accordion.Item
        key={label}
        label={label}
      >
        {accordionSubNavLinks}
      </Accordion.Item>
    );
  });

  return (
    <Accordion
      styles={{
        contentInner: {
          padding: 0,
        },
        content: {
          padding: 0,
        },
      }}
    >
      {accordionSubNavLinks}
    </Accordion>
  );
}
