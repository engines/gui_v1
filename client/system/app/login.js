app.login = controller => (a,x) =>
a['div.mt-2']([

  app.form( {
    url: '/-/session',
    success: ( result, el ) => el.$send( 'app.authenticated' ),
    when: {
      401: () => 'Wrong password.',
    },
    form: (f) => [
      f.input( { name: 'name', value: 'Engines System', inputTag: { class: 'd-none' } } ),
      f.input( { name: 'password', type: 'password', placeholder: 'Password' } ),
      f.submit( {
        label: app.icon( 'fas fa-sign-in-alt' ),
        button: { to: app.hourglass() },
      } ),
    ],
    formTag: { class: 'form-inline' },
  } ),

]);
