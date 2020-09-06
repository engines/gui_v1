app.system.domains.remove = controller => (a,x) => [

  a.h5( 'Remove' ),

  app.http(
    '/-/-/system/domains/',
    ( domains, el ) => el.$nodes = [

      app.form( {
        form: (f) => [

          f.field( {
            key: 'domain',
            label: false,
            vertical: true,
            as: 'select',
            selections: Object.keys( domains ),
            placeholder: 'Select domain...',
            required: 'required',
          } ),

          f.buttons(),

        ],

        action: (submission) => {

          let domain = submission.data.domain

          submission.output.$nodes = app.http(
            `/-/-/system/domains/${ domain }`,
            () => controller.open( '..' ),
            {
              complete: submission.complete,
              method: 'DELETE'
            }
          )

        },

      } )

    ]
  ),

]
