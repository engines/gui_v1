app.system = controller => (a,x) => a( {
  $init: (el) => {
    el.$nodes = [app.http( [
      '/-/-/system/status',
      '/-/-/engine_builder/status',
      '/-/-/system/system_user/settings',
      '/-/-/system/config/hostname',
      '/-/-/system/version/ident',
      '/-/-/system/version/base_os',
    ], ( [ status, installer, settings, hostname, version, os ] ) => {

      el.$send( 'app.connected' )

      let system = {
        ...status,
        ...installer,
        ...settings,
        hostname: hostname,
        version: version,
        os: os,
      }

      if ( system.is_rebooting ) {
        el.$send( 'app.rebooting' )
      } else if ( system.is_base_system_updating ) {
        el.$send( 'app.os.updating' )
      } else if ( system.is_halting ) {
        el.$send( 'app.shutdown' )
      } else if ( system.is_engines_system_updating ) {
        el.$send( 'app.updating' )
      }

      el.$nodes = [ app.system.panes( system, controller ) ]

    }, {
      placeholder: a['div.mt-2']( app.hourglass( 'Loading system' ) )
    } )]
  },
} ),
