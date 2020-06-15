app.system.menu.applications.application = ( controller, name, status ) => (a,x) =>
app.btn(
  a['app-container-state']( null,
    {
      id: `application_${ name }`,
      name: `${ name }`,
      $state: { status: status },
      $nodes: ( el, container ) => [
        app.container.icons.state( container.status ),
        name,
        app.container.icons.error( container.status ),
      ],
    }
  ),
  () => controller.open( `/applications/${ name }` ),
  {
    class: 'btn app-btn d-block w-100 text-left',
  }
)
