app.views.index = ( parent, path ) => controller => (a,x) => [

  a['div.clearfix']( a['div.btn-group.float-right']( [
    app.button( {
      label: app.icon( 'fa fa-plus', 'New view' ),
      onclick: (e,el) => {
        controller.open( 'new' )
      },
      title: 'New view',
    } ),
    app.close( controller, {title: 'Return to home'}),
  ] ) ),


  app.http(
    `/-/${ path }/views`,
    ( views, el ) => el.$nodes = [
      views.length == 0 ? 'None' : null,
      views.map( view => a.p( [
        app.button( {
          label: app.icon( 'fa fa-caret-right', view.name ),
          onclick: (e,el) => {
            controller.open( `${ view.name }/edit` )
          },
          title: `View ${ view.name }`,
        } ),
      ] ) )
    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading views' )
      )
    }
  )

]
