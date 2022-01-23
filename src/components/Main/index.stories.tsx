import Main from '.'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'NextJS Boilerplate',
    description: 'Typescript, ReactJS, NextJS e Styled Components'
  }
} as Meta

export const Primary: Story = (args) => <Main {...args} />
