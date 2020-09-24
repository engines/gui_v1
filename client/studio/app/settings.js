app.settings = controller => (a,x) => [

  a.h3( 'Settings' ),

  app.form( {
    object: {
      theme: window.localStorage.cssTheme,
      editor_keymap: window.localStorage.editorKeymap,
    },
    form: f => [
      f.field( {
        key: 'theme',
        as: 'select',
        placeholder: 'Default',
        selections: {
          dark: 'Dark',
        },
      } ),
      f.field( {
        key: 'editor_keymap',
        as: 'select',
        placeholder: 'None',
        selections: {
          vim: 'Vim',
          emacs: 'Emacs',
          sublime: 'Sublime',
        },
      } ),
      f.buttons(),
    ],
    action: (submission) => {
      window.localStorage.cssTheme = submission.data.theme
      window.localStorage.editorKeymap = submission.data.editor_keymap
      location.assign( '/' )
    }
  } ),

]
