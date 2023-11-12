import React from 'react'
import { Meta, StoryObj } from '@storybook/react';
import { Burger } from './Burger';
import Button from '../Buttons/Button'; // Asegúrate de que la importación sea correcta

const meta: Meta = {
  title: 'Example/Burger',
  component: Burger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderOne: Story = {
  args: {
    primary: true,
    children: React.createElement(Button)
  },
};

export const HeaderTwo: Story = {
  args: {
    secondary: true,
    children: React.createElement(Button)
  },
};

export const HeaderThree: Story = {
  args: {
    tertiary: true,
    children: React.createElement(Button) 
  },
};
