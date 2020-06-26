app.system.menu.
system = ( system, controller ) => (a,x) => a['div.container']( [

  app.btn(
    [
      system.hostname,
      a({
        id: 'system',
        $state: system,
        $tag: 'app-system-state',
        $nodes: (el, state) => [

          (
            state.needs_reboot ||
            state.needs_engines_update ||
            state.needs_base_update
          ) ?
            a['.text-warning']( app.icon( 'fa fa-bell', ' ' ) ) :
            null,

          state.did_build_fail ?
            a['.error']( app.icon( 'fas fa-tools', ' ' ) ) :
            null,

          state.is_building ?
            a['.text-info']( app.icon( 'fas fa-tools', ' ' ) ) :
            null,

        ],
      }),
    ],
    () => controller.open( '/' ),
    {
      class: 'btn app-btn d-block w-100 text-left mt-3',
    }
  ),

] ),
