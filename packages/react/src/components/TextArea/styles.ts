import { styled } from '../../styles'

import * as LabelPrimitive from '@radix-ui/react-label'

export const ContainedTextArea = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const WrappedInput = styled('div', {
  alignItems: 'center',
  boxSizing: 'border-box',

  borderWidth: 'thin',
  borderStyle: 'solid',
  borderColor: '$secondary-light-active',

  display: 'flex',
  gap: '$2',
  '& textarea:autofill': {
    '-webkit-transition-delay': '9999s',
    transitionDelay: '9999s',
  },

  '& svg': {
    fill: '$secondary-light-active',
    '& path': {
      fill: '$secondary-light-active',
    },
  },

  '&:hover': {
    borderColor: '$secondary-normal',
    '& svg': {
      fill: '$secondary-normal',
      '& path': {
        fill: '$secondary-normal',
      },
    },
  },
  '&:has(textarea:focus)': {
    borderColor: '$secondary-hover',
    '& svg': {
      fill: '$secondary-hover',
      '& path': {
        fill: '$secondary-hover',
      },
    },
  },
  '&:has(textarea:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  variants: {
    size: {
      small: {
        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',

        borderRadius: '$1',
      },
      medium: {
        padding: '$2 $4',
        borderRadius: '$1',

        fontSize: '$4',
      },
      large: {
        padding: '$3 $4',
        borderRadius: '$1',

        fontSize: '$5',
      },
    },
  },

  defaultVariants: {
    size: 'medium',
  },
})

export const Input = styled('textarea', {
  fontFamily: '$default',
  color: '$secondary-normal',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '100%',
  fontWeight: '$medium',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$secondary-light-active',
  },

  '&:hover': {
    '&::placeholder': {
      color: '$secondary-light-active',
    },
  },
  '-webkit-autofil': {
    color: 'red',
    border: '2px solid red',
  },

  '&:autofil': {
    color: 'red',
    border: '2px solid red',
  },

  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$sm',
      },
      large: {
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const Hint = styled('span', {
  alignSelf: 'end',
  color: '$feedback-error-normal',
})

export const Label = styled(LabelPrimitive.Root, {
  color: '$secondary-normal',

  '& > span': {
    fontSize: '$sm',
    color: '$secondary-light-active',
  },

  '& .isRequired': {
    color: '$feedback-error-normal',
  },
  variants: {
    size: {
      small: {
        fontSize: '$sm',
      },
      medium: {
        fontSize: '$md',
      },
      large: {
        fontSize: '$lg',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
})