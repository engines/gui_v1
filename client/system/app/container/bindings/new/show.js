app.container.bindings.new.show = type => controller => (a,x) => {

  const name = controller.params.name

  return [
    app.close( controller ),

    app.http(
      `/-/-/service_manager/available_services/managed_engine/${name}`,
      (services, el) => {
        el.$nodes = [
          a.hr,
          a.small('Persistent'),
          services.persistent.map((service) => a.div(
            app.btn(
              [
                app.icon('fa fa-caret-right', service.service_container),
                ' ',
                a.small(
                  service.title ?
                  service.title :
                  a['.error'](app.icon('fas fa-exclamation-triangle', 'No title'))
                )
              ],
              () => controller.open('strategy', {
                type: service.type_path,
                publisher: service.publisher_namespace,
                service: service.service_container,
              }),
            )
          )),
          a.hr,
          a.small('Nonpersistent'),
          services.non_persistent.map((service) => a.div(
            app.btn(
              [
                app.icon('fa fa-caret-right', service.service_container),
                ' ',
                a.small(
                  service.title ?
                  service.title :
                  a['.error'](app.icon('fas fa-exclamation-triangle', 'No title'))
                )
              ],
              () => controller.open('nonpersistent', {
                type: service.type_path,
                publisher: service.publisher_namespace,
                service: service.service_container,
              }),
            )
          )),
        ]
      },
      {
        placeholder: app.hourglass( 'Loading available binding types' )
      }
    )
  ]

}
