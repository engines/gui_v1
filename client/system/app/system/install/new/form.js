app.system.install.new.form = ( controller, install ) => (a,x) => {

  return app.form( {
    url: '/-/-/containers/engines/build',
    success: () => controller.open( '../monitor' ),
    object: install,
    scope: 'api_vars',
    form: (f) => [

      f.field( { key: 'repository_url', as: 'input', type: 'hidden' } ),
      f.field( { key: 'icon_url', as: 'input', type: 'hidden' } ),

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
          f.object.attached_services.map( service => [
            // service,
            a['.app-install-form-service']( [
              `${
                service.publisher_namespace
              }/${
                service.type_path
              }`,
              f.field( {
                name: 'api_vars[attached_services][][publisher_namespace]',
                value: service.publisher_namespace,
                as: 'input',
                type: 'hidden'
              } ),
              f.field( {
                name: 'api_vars[attached_services][][type_path]',
                value: service.type_path,
                as: 'input',
                type: 'hidden'
              } ),
              f.field( {
                name: 'api_vars[attached_services][][create_type]',
                label: false,
                vertical: true,
                as: 'select',
                selections: service.create_types,
              } ),
              f.field( {
                name: 'api_vars[attached_services][][share]',
                label: false,
                vertical: true,
                as: 'select',
                placeholder: 'Share...',
                required: true,
                selections: service.shareable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: '[name="api_vars[attached_services][][create_type]"]',
                  value: 'share_existing'
                },
              } ),
              f.field( {
                name: 'api_vars[attached_services][][adopt]',
                label: false,
                vertical: true,
                as: 'select',
                placeholder: 'Adopt...',
                required: true,
                selections: service.adoptable,
                dependent: {
                  search: '^.app-install-form-service',
                  selector: '[name="api_vars[attached_services][][create_type]"]',
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

    ]
  } )

}
