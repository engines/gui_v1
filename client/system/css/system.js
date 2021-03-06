ax.style( {

  'app-system': {

    'ax-appkit-panes': {

      top: 'calc( 1.5rem + 14px )',

      '> *': {

        borderTop: '1px solid #eee',

      },

    },

    '.system-show-chart': {
      marginTop: '-1.5rem',
      marginBottom: '-2.5rem',
      'canvas': {
        position: 'relative',
      },
      '&:hover canvas': {
        zIndex: 1,
      },
    },

    '.button-with-hover-text': {
      '.button-hover-text': {
        display: 'none',
      }
    },
    '.button-with-hover-text:hover': {
      '.button-hover-text': {
        display: 'unset',
      }
    },

  }

} )
