cc.close = ( controller, options={} ) => {

  let title = options.title || 'Close'
  let path= options.path || '..'
  let query = options.query || {}
  let anchor = options.anchor || ''

  return (a,x) => a['app-close-button'](cc.button( {
    label: cc.icon( 'fa fa-times', 'Close' ),
    onclick: (e,el) => {
      controller.open(path, query, anchor)
    },
    title: title,
  } ))

}
