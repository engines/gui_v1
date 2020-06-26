app.application.uninstall = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h3('Uninstall'),
    app.close( controller ),

    a.p( app.btn(
      app.icon( 'fas fa-minus-circle', 'Uninstall' ),
      (e,el) => el.$('^').$uninstall()
    ), {
      $uninstall: function() {
        this.$nodes = app.http(
          `/-/-/containers/engine/${ name }/delete/all`,
          (result, el) => {
            x.lib.animate.fade.out(
              document.querySelector(`app app-menu-application[name='${name}']`)
            )
            controller.open('/')
          },
          { method: 'delete' }
        )
      },
    } ),

  ]

}
