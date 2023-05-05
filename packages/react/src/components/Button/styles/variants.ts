export const variants = {
  variants: {
    variant: {
      contained: {
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
      },
      text: {
        background: 'transparent !important',
      },
      outlined: {
        borderWidth: 'thin',
        borderStyle: 'solid',
        borderColor: 'inherit',
        background: 'transparent !important',
        '&:not(:disabled):not(:active):hover': {
          background: 'transparent',
        },
        '&:active': {
          background: 'rgba(255, 255, 255, 0.16) !important',
        },
      },
    },
    size: {
      small: {
        height: '$8',

        padding: '$2 $4',

        lineHeight: '$base',

        fontSize: '$3',
      },
      medium: {
        padding: '$3 $6',
        height: '$10',

        fontSize: '$4',
      },
      large: {
        padding: '$4 $8',
        height: '$12',

        fontSize: '$5',
      },
    },
    hasIcon: {
      true: {
        gap: '$2',
      },
    },
    color: {
      primary: {
        color: '$white',
        background: '$primary-normal',
        '&:hover': {
          background: '$primary-hover',
        },
        '&:active': {
          background: '$primary-active',
          '&:hover': {
            background: '$primary-active',
          },
        },
      },
      secondary: {
        color: '$white',
        background: '$secondary-normal',
        '&:hover': {
          background: '$secondary-hover',
        },
        '&:active': {
          background: '$secondary-active',
        },
      },
      danger: {
        color: '$white',
        background: '$feedback-error-normal',
        '&:hover': {
          background: '$feedback-error-hover',
        },
        '&:active': {
          background: '$feedback-error-active',
        },
        '& svg': {
          fill: '$white',
          '& path': {
            fill: '$white',
          },
        },
      },
      success: {
        color: '$white',
        background: '$feedback-success-normal',
        '&:hover': {
          background: '$feedback-success-hover',
        },
        '&:active': {
          background: '$feedback-success-active',
        },
      },
      tertiary: {
        color: '$white',
        background: '$tertiary-normal',
        '&:hover': {
          background: '$tertiary-hover',
        },
        '&:active': {
          background: '$tertiary-active',
          '&:hover': {
            background: '$tertiary-active',
          },
        },
      },
    },
    isLoading: {
      true: {
        color: 'transparent !important',
        '& svg': {
          color: 'white !important',
          '& path': {
            fill: 'transparent',
          },
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        minWidth: '100%',
      },
    },
    icon: {
      true: {},
    },
  },
}
