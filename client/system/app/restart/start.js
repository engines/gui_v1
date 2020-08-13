app.restart.start = (controller) => (a,x) => [
  app.http(
    '/-/-/system/control/base_os/restart',
    // Returns immediately, so setTimeout to stop this view flashing by.
    ( result, el, response ) => setTimeout( () => el.$send( 'app.restarting' ), 2000),
    { placeholder: app.hourglass('Initiating restart') }
  ),
]
