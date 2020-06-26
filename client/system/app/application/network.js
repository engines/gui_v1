app.application.network = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3( 'Network' ),
    app.http(
      [
        `/-/-/containers/engine/${ name }`,
        `/-/-/containers/engine/${ name }/blueprint`,
        '/-/-/system/domains/',
      ],

      ( [
        container,
        blueprint,
        domains,
      ], el ) => {

        let protocols_allowed = ((blueprint.software || {}).base || {}).http_protocol || 'https_only'
        let protocol_selections
        if ( protocols_allowed == "http_only" ) {
          protocol_selections = [ [ "http", "HTTP" ] ];
        } else if ( protocols_allowed == "https_only" ) {
          protocol_selections = [ [ "https", "HTTPS" ] ]
        } else {
          protocol_selections = [
            [ "https_and_http", "HTTPS and HTTP" ],
            [ "http_and_https", "HTTP and HTTPS" ],
            [ "https", "HTTPS" ],
            [ "http", "HTTP" ]
          ]
        };

        el.$nodes = [
          app.form({
            object: {
              http_protocol: container.protocol,
              host_name: container.hostname,
              domain_name: container.domain_name,
            },
            action: `/-/-/containers/engine/${name}/properties/network`,
            success: () => controller.open('..'),
            scope: 'api_vars',
            form: (f) => [
              f.field({
                key: 'http_protocol',
                as: 'select',
                selections: protocol_selections,
              }),
              f.field({
                key: 'host_name',
              }),
              f.field({
                key: 'domain_name',
                as: 'select',
                selections: Object.keys(domains),
              }),
              f.buttons({
                router: controller,
              })
            ]
          })
        ]
      },
      {
        placeholder: app.hourglass( 'Loading network' )
      }

    ),

  ]

}
