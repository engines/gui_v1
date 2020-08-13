app.container.bindings.persistent.delete.show = type => controller => (a,x) => {

  let name = controller.params.name

  let bindingIdentifier = `${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.handle
  }`

  return [

    app.form( {
      action: (submission, el) => {

        controller.open(submission.data.strategy, controller.query)

        // if (submission.data.strategy == 'destroy') {
        //
        //   controller.open('destroy', controller.query)
        //
        // } else {
        //
        //   let path = `/-/-/containers/engine/${
        //     name
        //   }/services/persistent/none/${
        //     bindingIdentifier
        //   }`
        //
        //   el.$nodes = [
        //     app.http(
        //       path,
        //       () => controller.open('../..'),
        //       {
        //         method: 'DELETE',
        //         placeholder: app.hourglass('Deleting binding')
        //       }
        //     )
        //   ]
        //
        // }
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

// app.form( {
//   action: (submission, el) => {
//
//     let path = `/-/-/containers/engine/${
//       name
//     }/services/persistent/${
//       submission.data.strategy == 'destroy' ? 'all' : 'none'
//     }/${
//       bindingIdentifier
//     }`
//
//     el.$nodes = [
//       app.http(
//         path,
//         () => controller.open('../..'),
//         {
//           method: 'DELETE',
//           placeholder: app.hourglass('Deleting binding')
//         }
//       )
//     ]
//
//   },
//   form: f => [
//     f.field({
//       key: 'strategy',
//       as: 'select',
//       label: false,
//       vertical: true,
//       selections: {
//         keep: 'Keep data',
//         destroy: 'Destory data',
//       }
//     }),
//     f.buttons(),
//   ]
// } )
