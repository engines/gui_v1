app.restart.start = (controller) => (a,x) => [
  app.http(
    '/-/-/system/control/engines_system/restart',
    ( result, el, response ) => el.$send( 'app.restarting' ),
    { placeholder: app.hourglass('Initiating restart') }
  ),
]
