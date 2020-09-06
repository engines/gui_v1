app.system.menu.applications.application = ( controller, name, status ) => (a,x) =>
a['app-menu-application'](
  app.btn(
    a['app-container-state']( null,
      {
        name: `${ name }`,
        $state: { status: status },
        $nodes: ( el ) => [
          app.container.icons.state( el.$state.status ),
          ` ${name} `,
          app.container.icons.error( el.$state.status ),
        ],
      }
    ),
    () => controller.open( `/applications/${ name }` ),
    {
      class: 'btn app-btn d-block w-100 text-left overflow-hidden',
    }
  ),
  {
    name: name,
  }
)
