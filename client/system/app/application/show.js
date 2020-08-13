app.application.show = controller => (a,x) => {

  const name = controller.params.name;

  const icon = (container) => a({
    $tag: 'img',
    src: container.icon_url,
    height: 48,
    width: 48
  })

  const container = (controller, container) => a['app-container-state'](
    [
      a['div.float-right'](icon(container)),
      x.transition.fade({
        initial: body(controller, container)
      }),
    ],
    {
      name: name,
      $state: container,
      $update: (el) => {
        let container = el.$state;
        el.$('ax-appkit-transition').$to(body(controller, container))
      }
    }
  )

  const body = (controller, container) => [
    app.container.show.state( container ),
    app.container.show.instructions( controller, container ),
    app.container.show.websites( container ),
    app.container.show.metrics( container ),
  ];

  const urls = [
    `/-/-/containers/engine/${ name }/status`,
    `/-/-/containers/engine/${ name }/websites`,
    `/-/-/containers/engine/${ name }/icon_url`,
  ];

  const success = ([status, websites, icon_url], el) => {
    el.$nodes = container(controller, {
      type: 'application',
      name: name,
      status: status,
      websites: websites,
      icon_url: icon_url,
    })
  }

  return app.fetch({
    url: urls,
    placeholder: app.hourglass( 'Loading container' ),
    success: success,
  })

}
