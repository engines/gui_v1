app.application.uninstall.show = controller => (a,x) => {

  // let name = controller.params.name

  return [

    app.form( {
      action: (submission, el) => {
        controller.open(submission.data.strategy, controller.query)
      },
      form: f => [
        f.field({
          key: 'strategy',
          as: 'select',
          label: false,
          vertical: true,
          selections: {
            keep: 'Keep data',
            destroy: 'Destory data',
          }
        }),
        f.buttons(),
      ]
    } )

  ]

}
