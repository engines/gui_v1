app.license = ( parent, path ) => controller => (a,x) => [

  app.http(
    `/-/${ path }/license`,
    ( license, el ) => el.$nodes = [

      a.h5( 'License' ),

      app.form( {
        url: `/-/${ path }/license`,
        object: license,
        scope: 'license',
        form: (f) => [
          f.field( {
            as: 'codemirror',
            key: 'content',
            vertical: true,
            label: false,
          } ),
          f.buttons( {
            cancel: {
              onclick: () => controller.open( '..' )
            }
          } ),
        ],
        success: () => {
          controller.open( '..' )
        }
      } )

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading license' )
      )
    }
  )



]
