app.namespaces.pull = controller => (a,x) => [

  a.p( 'Pull provider?' ),

  app.button( {
    label: app.icon( 'fa fa-times', 'Cancel' ),
    class: 'btn btn-secondary',
    title: 'Cancel',
    onclick: (e,el) => {
      controller.open('..')
    },
  } ),
  ' ',
  app.button( {
    label: app.icon( 'fas fa-file-download', 'Pull' ),
    class: 'btn btn-primary',
    title: 'Pull provider',
    onclick: (e,el) => {

      el.$('^').$nodes = app.http(
        `/-/namespaces/${ controller.params.namespace_id }/pull`,
        ( pull, el ) => el.$nodes = [
          a.pre( pull.message ),
          a['div.clearfix']( [
            app.button( {
              label: app.icon( 'fa fa-check', 'OK' ),
              onclick: (e,el) => {
                controller.open( '..' )
              },
              title: 'Return to provider',
            } ),
          ] ),
        ],
        {
          placeholder: a.p(
            app.hourglass( 'Pulling provider' )
          )
        }
      )

    },
  } ),

]
