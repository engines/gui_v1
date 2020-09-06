app.reboot.start = (controller) => (a,x) => [
  app.http(
    '/-/-/system/control/base_os/reboot',
    ( result, el, response ) => el.$send( 'app.rebooting' ),
    { placeholder: app.hourglass('Initiating reboot') }
  ),
]
