app.system.menu.services.
service = ( controller, name, status ) => (a,x) =>
a['app-menu-service'](
  app.btn(
    a['app-container-state']( null,
      {
        id: `service_${ name }`,
        name: `${ name }`,
        $state: { status: status },
        $nodes: ( el, container ) => [
          app.container.icons.state( container.status ),
          name,
          app.container.icons.error( container.status ),
        ],
      }
    ),
    () => controller.open( `/services/${ name }` ),
    {
      class: 'btn app-btn d-block w-100 text-left',
    }
  ),
  {
    name: name,
  }
)
