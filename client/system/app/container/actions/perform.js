app.container.actions.perform = ( controller, containerPath, action ) => (a,x) => {

  const actionName = controller.params.action_name

  return [
    a.h3( action.label || action.name ),
    a.small( action.description ),

    app.form( {
      url: `${ containerPath }/action/${ actionName }`,
      scope: 'api_vars',
      form: f => [
        action.variables.map( variable =>
          f.field( enginesFieldV1( variable ) )
        ),
        action.variables.length ?
        f.buttons() :
        a({
          $init: (el) => el.$send('submit')
        }),
      ],
      asyncformTag: {
        $on: {
          'ax.appkit.http.success': (e, el) => {
            el.$('ax-appkit-asyncform-body').$nodes = [app.btn(
              app.icon( 'fa fa-check', 'OK' ),
              () => controller.open( '..' ),
              { class: 'btn btn-primary' },
            )]
          },
        }
      },

    } ),
  ]

}
