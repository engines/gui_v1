app.system.show.os = controller => (a,x) => [
  a['div.clearfix']( [
    a['div.float-right'](
      app.btn(
        app.icon( 'fas fa-redo' ),
        () => controller.open( 'update/os' )
      ),
    ),
    a['div.float-left'](
      a.div( null, {
        $init: (el) => el.$text = system.$state.os.pretty_name,
        class: 'mt-2' }
      ),
    ),
  ] ),
]
