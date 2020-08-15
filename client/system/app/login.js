app.login = controller => (a,x) =>
a['div.mt-2']([

  app.form( {
    url: '/-/session',
    success: ( result, el ) => el.$send( 'app.authenticated' ),
    when: {
      401: null,
    },
    form: (f) => [
      f.input( { name: 'password', type: 'password', placeholder: 'Password' } ),
      f.submit( {
        label: app.icon( 'fas fa-sign-in-alt' ),
        button: { to: app.hourglass() },
      } ),
    ],
    formTag: { class: 'form-inline' },
  } ),

]);
