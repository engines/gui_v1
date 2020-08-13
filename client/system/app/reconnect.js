app.reconnect = controller => (a,x) => [
  a.h3( "Reconnect" ),
  app.polling(
    '/-/reconnected',
    ( result, el ) => el.$send( 'app.reconnected' ),
    {
      when: {
        // 418: (result,el) => el.$send( 'app.reconnected' )
      }
    }
  )
]
