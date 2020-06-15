app.system.keys.remove = controller => (a,x) => [

  a.h5( 'Remove' ),

  app.http(
    '/-/-/system/keys/',
    ( keys, el ) => el.$nodes = [

      app.form( {
        // scope: 'api_vars',
        form: (f) => [

          f.field( {
            key: 'key',
            label: false,
            vertical: true,
            as: 'select',
            selections: Object.keys( keys ),
            placeholder: 'Select key...',
            required: 'required',
          } ),

          f.buttons(),

        ],

        action: ( submition ) => {

          let key = submition.data.key

          submition.output.$nodes = app.http(
            `/-/-/system/keys/${ key }`,
            () => controller.open( '..' ),
            {
              complete: submition.complete,
              method: 'DELETE',
              placeholder: app.hourglass( `Removing key...` )
            }
          )

        },

      } )

    ]
  ),

]
