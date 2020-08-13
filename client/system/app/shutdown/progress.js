app.shutdown.progress = controller => (a,x) => [
  a.p('Shutting down system.'),
  app.polling(
    '/-/-/system/status',
    ( result, el ) =>  {
      if ( result.is_halting ) {
        el.$('^app-polling').$wait()
      } else {
        el.$send( 'app.reconnected' )
      }
    },
    {
      when: {
        503: ( result, el ) => {
          controller.open('/shutdown/exit')
        }
      }
    }
  )
]
