app.applications.index = controller => (a,x) => [

  a.h5( 'Applications' ),

  x.form({
    shims: [
      x.form.field.shim,
      x.form.field.extras.shim,
      x.form.field.dependent.shim,
      x.form.field.nest.shim,
      x.form.field.nest.prefab.shim,
      x.codemirror.form.shim,
      x.bootstrap.form.shim,
      x.form.async.shim,
    ],
    form: (f) => [
      f.field({key: 'cats'}),
      f.field({
        key: 'code',
        as: 'codemirror',
        mode: 'javascript',
        codemirror: {lineNumbers: false},
        hint: 'This is a hint',
      }),
    ]
  }),



  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New application' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New application',
    } ),
    app.close( controller, {title: 'Return to home'}),
  ] ) ),


  app.http(
    '/-/applications',
    ( applications, el ) => el.$nodes = [

      applications.length == 0 ? 'None' : null,
      applications.map( application => a.p( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', application.name ),
          onclick: (e,el) => {
            controller.open( application.id )
          },
          title: application.remote,
        } ),
      ] ) )
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading applications' )
      )
    }
  )

]
