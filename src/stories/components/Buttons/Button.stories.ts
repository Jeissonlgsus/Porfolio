import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Example/Buttons',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Language: Story = {
  args: {
    primary: true,
    label: 'language',
  },
};

export const Page: Story = {
  args: {
    secondary: true,
    label: 'Page',
  },
};
export const BurgerButton: Story = {
  args: {
    tertiary: true,
    label: 'Burger',
  },
};