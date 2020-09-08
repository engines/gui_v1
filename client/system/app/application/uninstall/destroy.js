app.application.uninstall.destroy = controller => (a,x) => {

  let name = controller.params.name
  let path = `/-/-/containers/engine/${name}/delete/all`;

  return [

    a.p('Are you sure that you want to destroy data?'),

    app.form( {
      url: path,
      method: 'DELETE',
      success: () => controller.open( '/' ),
      form: f => [
        f.buttons({
          submit: {
            buttonTag: {
              class: 'btn btn-danger'
            }
          }
        }),
      ]
    } ),

  ]

}
