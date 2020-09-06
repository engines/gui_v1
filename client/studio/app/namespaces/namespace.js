app.namespaces.namespace = controller => (a,x) => [

  app.http(
    `/-/namespaces/${ controller.params.namespace_id }`,
    ( namespace, el ) => el.$nodes = [
      a.h3( namespace.name ),
      a.small( namespace.remote ),

      controller.mount({
        routes: {
          '/?': app.namespaces.show,
          '/workspace*': app.namespaces.workspace( namespace ),
          '/delete': app.namespaces.delete,
          '/license': app.namespaces.license,
          '/pull': app.namespaces.pull,
          '/definitions*': app.namespaces.definitions,
        }
      }),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading provider' )
      )
    }
  ),

]
