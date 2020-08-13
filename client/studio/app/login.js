app.login = controller => (a,x) => app.form( {
  url: '/-/session',
  success: ( result, el, response ) => {
    nav.$setUser( true )
    el.$send( 'app.server.authenticated' )
    controller.open()
  },
  // when: {
  //   401: null, // Perform default error behaviour on 401, i.e. Show error message.
  // },
  form: (f) => [
    f.input( { name: 'name', value: 'Engines Studio', inputTag: { class: 'd-none' } } ),
    f.input( { name: 'password', type: 'password', placeholder: 'Password', required: 'required' } ),
    f.submit( {
      label: app.icon( 'fas fa-sign-in-alt' ),
      title: 'Log in',
      button: { to: app.hourglass() },
      // success: () => { controller.open() }
    } ),
  ],
  formTag: { class: 'form-inline' },
} )
