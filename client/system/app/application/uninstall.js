app.application.uninstall = controller => (a,x) => [
  app.close( controller ),

  a.h3('Uninstall'),

  a.p( app.btn(
    app.icon( 'fas fa-minus-circle', 'Uninstall' ),
    (e,el) => el.$('^').$uninstall()
  ), {
    $uninstall: (el) => () => {
      el.$nodes = app.http(
        `/-/-/containers/engine/${controller.params.name}/delete/all`,
        (result, el) => {
          x.lib.animate.fade.out(
            document.querySelector(`app app-menu-application[name='${controller.params.name}']`)
          )
          controller.open('/')
        },
        {
          placeholder: app.hourglass('Uninstalling'),
          method: 'delete'
        }
      )
    },
  } ),

]
