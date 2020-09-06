app.container.bindings.index = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/-/-/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }/services`

  return [

    app.close( controller ),

    a.h3( 'Bindings' ),

    app.http(
      [
        `${ path }/persistent/`,
        `${ path }/non_persistent/`,
      ],
      ( [ persistent, nonpersistent ], el ) => {

        el.$nodes = [
          app.btn(
            app.icon('fa fa-plus', 'New'),
            () => controller.open('new', controller.query),
          ),
          a.hr,
          a.small('Persistent'),
          persistent.length ?
          persistent.map( binding => a.div( app.btn (
            app.icon(
              'fa fa-caret-right',
              `${
                binding.service_container_name
              }:${
                binding.service_handle
              }`
            ),
            () => controller.open(
              'persistent',
              {
                service: binding.service_container_name,
                type: binding.type_path,
                publisher: binding.publisher_namespace,
                handle: binding.service_handle,
              }
            )
          ) ) ) :
          a.p(a['i.placeholder']('None')),

          a.hr,
          a.small('Nonpersistent'),
          nonpersistent ?
          nonpersistent.map( binding => a.div( app.btn (
            app.icon(
              'fa fa-caret-right',
              `${
                binding.service_container_name
              }:${
                binding.service_handle
              }`
            ),
            () => controller.open(
              'nonpersistent',
              {
                service: binding.service_container_name,
                type: binding.type_path,
                publisher: binding.publisher_namespace,
                handle: binding.service_handle,
              }
            )
          ) ) ) :
          a.p(a['i.placeholder']('None')),

        ]

      },
      {
        placeholder: app.hourglass( 'Loading service bindings' )
      }

    ),

    type === 'service' ? [

      a.hr,

      app.http(
        `/-/-/containers/service/${ name }/consumers/`,
        ( consumers, el ) => {

          el.$nodes = [
            a.small( 'Consumers' ),
            consumers.length ?
            consumers.map((consumer) => a.div(app.btn(
              app.icon(
                'fa fa-caret-right',
                `${
                  consumer.parent_engine
                } ${
                  consumer.service_container_name
                }:${
                  consumer.service_handle
                }`
              ),
              () => {
                let path = `/applications/${
                  consumer.parent_engine
                }/bindings/${
                  consumer.persistent ? 'persistent' : 'nonpersistent'
                }/`;
                let query = {
                  service: consumer.service_container_name,
                  type: consumer.type_path,
                  publisher: consumer.publisher_namespace,
                  handle: consumer.service_handle,
                };
                controller.open(path, query);
              }
            ))) :
            a.p(a['i.placeholder']('None')),
          ];

        },
        {
          placeholder: app.hourglass('Loading consumer bindings')
        }
      ),

    ] : null,

  ]

}
