app.logout = controller => (a,x) => a['div.mt-2']([
  app.http(
    '/-/session',
    ( result, el  ) => el.$send( 'app.unauthenticated' ),
    {
      method: 'delete',
      placeholder: app.hourglass('Logging out'),
    }
  )
])
