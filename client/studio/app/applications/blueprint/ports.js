app.applications.blueprint.ports = blueprint => controller => (a,x) => [

  a.h5( 'Ports' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.ports,
    (f) => [
      f.field( {
        key: 'ports',
        as: 'table',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'port',
            required: true,
            hint: "0 to 65535 (or a range, e.g. 5000-5100)",
          } ),
          ff.field( {
            key: 'external',
            required: true,
          } ),
          ff.field( {
            key: 'protocol',
            required: true,
            as: 'select',
            selections: {
              tcp: 'TCP',
              udp: 'UDP',
              tcp_and_udp: 'TCP and UDP',
            },
          } ),
        ]
      } ),

    ]

  ),

]
