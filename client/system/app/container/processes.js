app.container.processes = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }/ps`

  return [

    a.h3( `Processes` ),
    app.close( controller ),
    a.br,
    app.http(
      path,
      ( processes, el ) => {

        let headings = a.thead( a.tr( processes['Titles'].map(
          title => a.th( title )
        ) ) )
        let rows = a.tbody( processes['Processes'].map(
          process => a.tr( process.map( value => a.td( value ) ) )
        ) )

        el.$nodes = a.table( [ headings, rows ], { class: 'table table-responsive text-nowrap' } )

      },
      {
        placeholder: app.hourglass( 'Loading processes' )
      }

    ),

  ]


}
