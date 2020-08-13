app.applications.new = controller => (a,x) => [

  a.h3('New application'),

  app.form( {
    url: '/-/applications',
    scope: 'application',
    form: (f) => [
      f.field( {
        key: 'url',
        as: 'input',
        type: 'url',
        label: false,
        vertical: true,
        placeholder: 'Repo URL',
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: application => controller.open(
      `/applications/${ application.id }`
    )
  } )

]
