app.container.report = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }`

  return [

    a.h3( `Container` ),
    app.close( controller ),
    app.http(
      path,
      ( container, el ) => el.$nodes = x.out( container ),
      {
        placeholder: app.hourglass( 'Loading container' )
      }

    ),

  ]


}
