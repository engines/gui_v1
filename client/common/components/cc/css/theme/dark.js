ax.style( {

  'body.app-theme-dark': {

    color: 'lightgray',
    backgroundColor: '#111',

    '.app-btn': {
      color: 'lightgray',
    },

    '.app-btn:hover': {
      color: 'black',
    },

    'app-nav': {
      '.app-nav-btn.active': {
        color: 'black',
      },
    },

    hr: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },

    'ax-appkit-menu menu': {
      backgroundColor: 'black',
    },

    pre: {
      color: 'lightgray',
    },

    '.form-control': {
      backgroundColor: '#aaa',
      color: 'black',
    },
    '.form-control:focus, .custom-select:focus': {
      boxShadow: '0 0 0 .2rem #90F9',
    },
    '.custom-control-input:focus ~ .custom-control-label::before': {
      boxShadow: '0 0 0 .2rem #90F9',
    },
    '.custom-select': {
      backgroundColor: '#aaa',
      color: 'black',
    },

    'ssh-key textarea.form-control[readonly]': {
      backgroundColor: '#aaa'
    },

    '.table': {
      color: 'lightgray',
    },

    '.success': { color: 'lightblue' },
    '.success pre': { color: 'lightblue' },

    '.well': {
      borderColor: '#333',
    },

    'ax-appkit-panes': {

      'ax-appkit-panes-drag': {
        background: '#FFF1',
        '&:hover': {
          background: '#333',
        }
      },

      '&.dragable': {
        'ax-appkit-panes-drag': {
          background: '#666',
        },
      },

      '> *': {
        borderTop: '1px solid #FFF1',
      },

    },

    'ax-appkit-xtermjs-toolbar': {
      backgroundColor: '#aaa',
      button:{
        color: '#ddd'
      },
    },

    'ax-appkit-control-easymde': {
      '.editor-toolbar': {
        backgroundColor: '#aaa',
        button:{
          color: '#ddd'
        },
      },
      '.CodeMirror': {
        backgroundColor: '#aaa',
      }
    },

    'ax-appkit-codemirror': {
      'ax-appkit-codemirror-toolbar': {
        backgroundColor: '#aaa',
        button: {
          color: '#ddd'
        },
      },
      '.CodeMirror': {
        backgroundColor: '#aaa',
      }
    },

  },

} )
