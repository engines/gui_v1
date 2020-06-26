app.system.install.url = controller => (a,x) => [
  a.h5( "Load" ),
  app.form( {
    action: ( submition ) => {
      let url = submition.data.url
      controller.open( '../new', { label: 'Side load', blueprint_url: url } )
    },
    form: (f) => [
      f.field( {
        name: 'install[url]',
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
