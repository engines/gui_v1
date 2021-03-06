app.restart.progress = controller => (a,x) => [
  a.p( "Restarting system." ),
  app.polling(
    '/-/-/system/status',
    ( result, el ) =>  {
      if ( result.is_restarting ) {
        el.$('^app-polling').$wait()
      } else {
        el.$send( 'app.reconnected' )
      }
    },
  )
]
