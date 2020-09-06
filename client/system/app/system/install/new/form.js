app.system.install.new.form = ( controller, install ) => (a,x) => {

  return app.form( {
    url: '/-/-/containers/engines/build',
    success: () => controller.open( '../monitor' ),
    object: install,
    headers: {
      'Content-Type': 'application/json',
    },
    encode: (formData) => {
      let object = x.lib.form.data.objectify(formData)
      let bindings = Object.values(object.attached_services || {})
      object.attached_services = []
      for (let binding of bindings) {
        let parent, handle
        if (binding.share || binding.adopt) {
          [parent, handle] = binding.share.split(':')
        }
        object.attached_services.push({
          publisher_namespace: binding.publisher_namespace,
          type_path: binding.type_path,
          create_type: binding.create_type,
          parent_engine: parent,
          service_handle: handle,
        })
      }
      return JSON.stringify({api_vars: object})
    },
    form: (f) => [

      f.field( { key: 'repository_url', as: 'hidden' } ),
      f.field( { key: 'icon_url', as: 'hidden' } ),

      f.field( { key: 'engine_name', label: 'Name', required: 'required' } ),
      f.field( { key: 'memory', label: 'Memory (MB)', as: 'input', type: 'number', min: f.object.minimum_memory, required: 'required' } ),

      a.p( a.small( 'Locale' ), { class: 'border-bottom' } ),
      f.field( { key: 'country_code', label: 'Country', as: 'country' } ),
      f.field( { key: 'lang_code', label: 'Language', as: 'language' } ),

      a.p( a.small( 'Network' ), { class: 'border-bottom' } ),
      f.field( { key: 'http_protocol', label: 'HTTP protocol', as: 'select', selections: {
        "https_and_http": "HTTPS and HTTP",
        "http_and_https": "HTTP and HTTPS",
        "https_only": "HTTPS only",
        "http_only": "HTTP only"
      } } ),
      f.field( { key: 'host_name' } ),
      f.field( { key: 'domain_name', as: 'select', selections: f.object.domains } ),

      a.p( a.small( 'Services' ), { class: 'border-bottom' } ),

      a['div.form-row']( [

        a['div.col-sm-4']( 'Bind' ),
        a['div.col-sm-8'](
          f.object.attached_services.map( (service,i) => [
            a['.app-install-form-service']( [
              `${
                service.publisher_namespace
              }/${
                service.type_path
              }`,
              f.field( {
                name: `attached_services[${i}][publisher_namespace]`,
                value: service.publisher_namespace,
                as: 'hidden'
              } ),
              f.field( {
                name: `attached_services[${i}][type_path]`,
                value: service.type_path,
                as: 'hidden'
              } ),
              f.field( {
                name: `attached_services[${i}][create_type]`,
                label: false,
                vertical: true,
                as: 'select',
                selections: service.create_types,
              } ),
              f.field( {
                name: `attached_services[${i}][share]`,
                label: false,
                vertical: true,
                as: 'select',
                placeholder: 'Share...',
                required: true,
                selections: service.shareable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: `[name="attached_services[${i}][create_type]"]`,
                  value: 'share_existing'
                },
              } ),
              f.field( {
                name: `attached_services[${i}][adopt]`,
                label: false,
                vertical: true,
                as: 'select',
                placeholder: 'Adopt...',
                required: true,
                selections: service.adoptable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: `[name="attached_services[${i}][create_type]"]`,
                  value: 'adopt_orphan'
                },
              } ),

            ] )
          ] ),

        ),

      ] ),

      f.field( {
        key: 'permission',
        label: false,
        as: 'checkbox',
        control: {
          label: 'Permission'
        }
      } ),

      f.field( {
        key: 'permission_as',
        label: false,
        as: 'select',
        placeholder: 'as...',
        required: true,
        selections: f.object.application_names,
        dependent: {
          key: 'permission',
        }
      } ),

      f.object.variables.length > 0 ?
        a.p( a.small( 'Environment' ), { class: 'border-bottom' } ) :
        null,

      f.field( {
        key: 'variables',
        as: 'one',
        vertical: true,
        label: false,
        form: (ff) => [
          ff.object.map( variable => ff.field( variable ) )
        ]
      } ),

      f.buttons(),

    ],
  } )

}
