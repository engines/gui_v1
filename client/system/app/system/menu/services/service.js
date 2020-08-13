app.system.menu.services.
service = ( controller, name, status ) => (a,x) =>
a['app-menu-service'](
  app.btn(
    a['app-container-state']( null,
      {
        id: `service_${ name }`,
        name: `${ name }`,
        $state: { status: status },
        $nodes: ( el ) => [
          app.container.icons.state( el.$state.status ),
          ` ${name} `,
          app.container.icons.error( el.$state.status ),
        ],
      }
    ),
    () => controller.open( `/services/${ name }` ),
    {
      class: 'btn app-btn d-block w-100 text-left overflow-hidden',
    }
  ),
  {
    name: name,
  }
)
