app.applications.commit = controller => (a,x) => [

  a.h5('Commit'),

  app.form( {
    url: `/-/applications/${ controller.params.application_id }/commit`,
    scope: 'commit',
    form: (f) => [
      f.field( {
        key: 'message',
        as: 'textarea',
        label: false,
        required: true,
        vertical: true,
        placeholder: 'Message',
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: ( result, el ) => el.$('^ax-appkit-asyncform').$nodes = [
      a.pre( result.message ),
      a['div.clearfix']( [
        app.button( {
          label: app.icon( 'fa fa-check', 'OK' ),
          onclick: (e,el) => {
            controller.open( '..' )
          },
          title: 'Return to applications',
        } ),
      ] ),
    ]
  } )

]
