import { Box, Datepicker, DatepickerProps } from '@odonto-clean/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Datepicker',
  component: Datepicker,

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="div" css={{ minHeight: '400px' }}>
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {},
} as Meta<DatepickerProps>

export const Primary: StoryObj<DatepickerProps> = {
  args: {},
}
