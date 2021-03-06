app.namespaces.workspace.services.new = controller => (a,x) => [

  a.h5( 'New service' ),

  app.form( {
    url: `/-/namespaces/${ controller.params.namespace_id }/workspace/services`,
    scope: 'service',
    form: (f) => [
      f.field( {
        key: 'url',
        as: 'input',
        type: 'url',
        label: false,
        required: true,
        placeholder: 'Repo URL',
        vertical: true,
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: ( service, el ) => controller.open( `../${ service.id }` )
  } )

]
