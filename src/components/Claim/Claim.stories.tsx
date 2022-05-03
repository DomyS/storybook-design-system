import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import {Meta, Canvas, Story} from "@storybook/addon-docs/blocks";

import Claim from './Claim';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Claim',
  component: Claim,
} as ComponentMeta<typeof Claim>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Claim> = (args) => <Claim {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  claim: {
    claim:
      'Viral video of the moon rising in the North Pole is computer generated',
    domain: 'https://www.reuters.com/favicon.ico',
    domainName: 'reuters',
    publishDate: '2022-04-27',
    label: 'Originated As Satire',
  },
};

export const SimpleClaim = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleClaim.args = {
  simpleClaim: 'Putin warned India to not interfere in Ukraine.',
};

export const SimpleClaimWithStyles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleClaimWithStyles.args = {
  simpleClaim:
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
  simpleClaimTypographyStyles: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
  },
};

export const LongClaimTitle = Template.bind({});
LongClaimTitle.args = {
  claim: {
    claim:
      'A high school in Indiana sent out an email informing teachers of a new “otherkin policy” to accommodate students who identify as part animal.',
    domain: 'https://www.snopes.com/favicon.ico',
    domainName: 'snopes',
    publishDate: '2022-04-27',
    label: 'False',
    url: 'https://topics.factiverse.no/',
  },
};
