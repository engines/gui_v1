app.container.bindings.persistent = type => controller => (a,x) => {

  let path = `/-/-/containers/${
    type == 'application' ? 'engine' : 'service'
  }/${
    controller.params.name
  }/services/persistent/${
    controller.params.publisher
  }/${
    controller.params.type
  }`

  return [
    type,
    controller.params,
    path,
    app.link( {
      label: app.icon( 'fa fa-download', 'Export' ),
      href: `/-/download/service/${
        controller.params.name
      }/persistent/${
        controller.params.publisher
      }/${
        controller.params.type
      }/${
        controller.params.handle
      }`,
      target: '_blank',
      class: 'btn app-btn',
    } ),
    app.http(path),
  ]


  // const name = controller.params.name
  //
  // let path = `/-/-/containers/${
  //   type === 'service' ? 'service' : 'engine'
  // }/${ name }/services`
  //
  // return [
  //
  //   app.close( controller ),
  //   a.br,
  //   app.http(
  //     [
  //       `${ path }/persistent/`,
  //       `${ path }/non_persistent/`,
  //     ],
  //     ( [ persistent, nonpersistent ], el ) => {
  //
  //       let bindings = [
  //         ...persistent,
  //         ...nonpersistent
  //       ].sort( ( a, b ) => {
  //         if ( a.service_handle < b.service_handle ){
  //           return -1
  //         }
  //         if ( a.service_handle > b.service_handle ){
  //           return 1
  //         }
  //         return 0
  //       } ).sort( ( a, b ) => {
  //         if ( a.service_container_name < b.service_container_name ){
  //           return -1
  //         }
  //         if ( a.service_container_name > b.service_container_name ){
  //           return 1
  //         }
  //         return 0
  //       } )
  //
  //       el.$nodes = [
  //
  //         bindings.map( binding => a.div( app.btn (
  //           app.icon(
  //             'fa fa-caret-right',
  //             [
  //               binding.service_container_name,
  //               a.small( binding.service_handle ),
  //             ]
  //           ),
  //           () => controller.open(
  //             binding.persistent ?
  //             'persistent' :
  //             'nonpersistent',
  //             {
  //               type: binding.type_path,
  //               publisher: binding.publisher_namespace,
  //               handle: binding.service_handle,
  //             }
  //           )
  //         ) ) ),
  //
  //       ]
  //
  //     },
  //     {
  //       placeholder: app.hourglass( 'Loading service bindings' )
  //     }
  //
  //   ),
  //
  //   type === 'service' ? [
  //
  //     a.hr,
  //
  //     a.p( 'Consumers' ),
  //     app.http(
  //       `/-/-/containers/service/${ name }/consumers/`,
  //       ( consumers, el ) => el.$nodes = x.out( consumers )
  //     ),
  //
  //
  //     a.p( 'Subservices' ),
  //     app.http(
  //       `/-/-/containers/service/${ name }/sub_services`,
  //       ( subservices, el ) => el.$nodes = x.out( subservices )
  //     ),
  //
  //   ] : null,
  //
  // ]

}
