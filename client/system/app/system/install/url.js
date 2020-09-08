app.system.install.url = controller => (a,x) => [
  a.h5( "Load" ),
  app.form( {
    action: (submission) => {
      let url = submission.data.url
      controller.open( '../new', { label: 'Side load', blueprint_url: url } )
    },
    form: (f) => [
      f.field( {
        name: 'url',
        placeholder: 'URL',
        type: 'url',
        required: true,
        vertical: true,
        label: false,
      } ),
      f.buttons(),
    ]
  } )
]
