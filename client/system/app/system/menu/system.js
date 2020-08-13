app.system.menu.
system = ( system, controller ) => (a,x) => a['div.container']( [

  app.btn(
    [
      `${system.hostname} `,
      a({
        id: 'system',
        $state: system,
        $tag: 'app-system-state',
        $nodes: (el) => [
          // el.$state,
          (
            el.$state.needs_reboot ||
            el.$state.needs_engines_update ||
            el.$state.needs_base_update
          ) ?
            a['.text-warning']( app.icon( 'fa fa-bell', ' ' ) ) :
            null,

          el.$state.did_build_fail ?
            a['.error']( app.icon( 'fas fa-tools', ' ' ) ) :
            null,

          el.$state.is_building ?
            a['.text-info']( app.icon( 'fas fa-tools', ' ' ) ) :
            null,

        ],
      }),
    ],
    () => controller.open( '/' ),
    {
      class: 'btn app-btn d-block w-100 text-left overflow-hidden mt-3',
    }
  ),

] ),
