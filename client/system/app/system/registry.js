app.system.registry = controller => (a,x) => [
  app.close( controller ),
  a.h3( 'Registry' ),

  app.http(
    [
      '/-/-/registry/configurations/',
      '/-/-/registry/engines/',
      '/-/-/registry/services/',
      '/-/-/registry/sub_services/',
      '/-/-/registry/orphans/',
      '/-/-/registry/shares/',
    ],
    ( [
      configurations,
      engines,
      services,
      sub_services,
      orphans,
      shares,
    ], el ) => el.$nodes = [
      app.tree( configurations ),
      app.tree( engines ),
      app.tree( services ),
      app.tree( sub_services ),
      app.tree( orphans ),
      app.tree( shares ),
    ],
    {
      placeholder: app.hourglass('Loading registry'),
    }
  ),

]
