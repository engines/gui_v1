app.system.orphans.delete = controller => (a,x) => {

  let path = `/-/-/service_manager/orphan_service/${
    controller.params.publisher
  }/${
    controller.params.type
  }/${
    controller.params.parent
  }/${
    controller.params.handle
  }`;

  return [

    a.h3(controller.params.parent),
    a.h5(`Delete ${controller.params.service}:${controller.params.handle}`),

    a.p('Are you sure that you want to destroy data?'),

    app.form( {
      url: path,
      method: 'DELETE',
      success: () => controller.open( '../..' ),
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

  ];

};
