import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  borderRadius: '$1',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $primary-normal',

  '&:hover': {
    boxShadow: '$emphasis',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$primary-normal',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $primary-normal',
  },

  variants: {
    isSmall: {
      true: {
        width: '$4',
        height: '$4',
      },
    },
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  position: 'relative',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="indeterminate"]': {
    '&::before': {
      content: `''`,
      display: 'block',
      background: '$primary-normal',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '8px',
      height: '2px',
      borderRadius: 'inherit',
    },
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
  variants: {
    isSmall: {
      true: {
        width: '$3',
        height: '$3',
      },
    },
  },
})