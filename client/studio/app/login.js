app.login = controller => (a,x) =>
a['div.mt-2']([
  app.form( {
    url: '/-/session',
    success: ( result, el, response ) => {
      nav.$setUser( true )
      el.$send( 'app.server.authenticated' )
      controller.open()
    },
    when: {
      401: () => 'Wrong password.',
    },
    form: (f) => [
      f.input( { name: 'name', value: 'Engines Studio', inputTag: { class: 'd-none' } } ),
      f.input( { name: 'password', type: 'password', placeholder: 'Password', required: 'required' } ),
      f.submit( {
        label: app.icon( 'fas fa-sign-in-alt' ),
        title: 'Log in',
        button: { to: app.hourglass() },
      } ),
    ],
    formTag: { class: 'form-inline' },
    } )
])
