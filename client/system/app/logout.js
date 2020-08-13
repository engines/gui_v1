app.logout = controller => (a,x) => [
  app.http(
    '/-/session',
    ( result, el  ) => el.$send( 'app.unauthenticated' ),
    {
      method: 'delete',
      placeholder: app.hourglass('Logging out'),
    }
  )
]
