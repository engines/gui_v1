app.namespaces.workspace = namespace => controller => (a,x) => [

  // app.http(
  //   `/~/namespaces/${ controller.params.namespace_id }/workspace`,
  //   ( workspace, el ) => el.$nodes = [

      controller.nest({
        routes: {
          '/?': app.namespaces.workspace.show,
          '/new': app.namespaces.workspace.new,
          '/delete': app.namespaces.workspace.delete,
          '/definitions*': app.namespaces.workspace.definitions,
          '/services*': app.namespaces.workspace.services( namespace ),
          '/readme': app.readme( 'workspace', `namespaces/${ controller.params.namespace_id }/workspace`),
          '/license': app.license( 'workspace', `namespaces/${ controller.params.namespace_id }/workspace`),
          '/branch*': app.namespaces.workspace.branch,
          '/status': app.namespaces.workspace.status,
          '/commit': app.namespaces.workspace.commit,
          '/push': app.namespaces.workspace.push,
          '/pull': app.namespaces.workspace.pull,
          '/reset': app.namespaces.workspace.reset,
        }
      }),

  //   ],
  //   {
  //     placeholder: a.p(
  //       app.hourglass( 'Loading workspace' )
  //     )
  //   }
  // ),

]
