ax.extension.filepond = ( options={} ) => {

  return ax.a['axf-filepond']( null, {

    $init: (el) => {

      el.$nodes = FilePond.create( {
        server: options.server,
        ...options.filepond
      } ).element

    },

    ...options.filepondTag

  } )

}
