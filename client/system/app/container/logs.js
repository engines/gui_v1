app.container.logs = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }/logs`

  return [

    a.h3( 'Logs' ),
    app.close( controller ),
    a.br,
    app.http(
      path,
      ( logs, el ) => {
        el.$nodes = [
          app.report({
            object: logs,
            report: (r) => [
              r.field({key: 'stdout', as: 'xtermjs', label: false, control: {label: 'stdout', convertEol: true}}),
              r.field({key: 'stderr', as: 'xtermjs', label: false, control: {label: 'stderr', convertEol: true}}),
            ]
          })
        ]
      },
      {
        placeholder: app.hourglass( 'Loading logs' )
      }
    ),

  ]


}
