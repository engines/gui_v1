app.system.hostname = controller => (a,x) => [
  a.h3( "Hostname" ),

  app.http(
    '/-/-/system/config/hostname',
    ( hostname, el ) => el.$nodes = [app.form( {
      url: '/-/-/system/config/hostname',
      success: () => location.assign( '/' ),
      scope: 'api_vars',
      form: (f) => [
        f.field( {
          key: 'host_name',
          value: hostname,
          label: false,
          vertical: true
        } ),
        f.buttons({cancel: {onclick: () => controller.open('..')}}),
      ]
    } )],
    {
      placeholder: app.hourglass( 'Loading hostname' ),
    }
  ),

]
