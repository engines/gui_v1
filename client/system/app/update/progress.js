app.update.progress = controller => (a,x) => [
  a.p( "Updating Engines system." ),
  app.polling(
    '/-/-/system/status',
    ( status, el ) => {
      if ( status.is_engines_system_updating ) {
        el.$('^app-polling').$wait()
      } else {
        el.$send( 'app.reconnected' )
      }
    },
  )
]
