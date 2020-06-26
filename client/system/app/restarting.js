app.restarting = controller => (a,x) => [
  a.h3( "Restarting system" ),
  app.system.polling(
    '/-/-/system/status',
    ( result, el ) =>  {
      if ( result.is_rebooting ) {
        el.$('^app-polling').$wait()
      } else {
        el.$send( 'app.reconnected' )
      }
    },
    {
      when: {
        503: ( result, el ) => {
          el.$send( 'app.reconnected' )
        }
      }
    }
  )
]
