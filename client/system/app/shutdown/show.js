app.shutdown.show = controller => (a,x) => [
  a.p('Shutdown system?'),
  app.form( {
    url: '/-/-/system/control/base_os/shutdown',
    success: (result, el) => el.$send( 'app.shutdown' ),
    form: (f) => [
      f.textarea( { name: 'api_vars[reason]', placeholder: 'Reason for shutdown' } ),
      a.br,
      f.buttons(),
    ]
  } )
]
