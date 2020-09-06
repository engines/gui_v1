app.blueprintForm = (
  controller,
  blueprint,
  entry,
  fields,
  manipulator,
) => app.form( {
  object: entry.formObject,
  form: (f) => [
    fields(f),
    f.buttons( {
      cancel: {
        onclick: () => controller.open( '..' ),
      },
    } ),
  ],
  action: (submission) => {

    let data = manipulator ? manipulator( submission.data ) : submission.data,
        form = submission.form,
        output = submission.output,
        complete = submission.complete

    let isNew = entry.isNew
    entry.formSubmit( data )
    let path = isNew ? `../${ entry.id }` : '..'

    output.$nodes = [app.http(
      blueprint.apiEndpoint,
      () => controller.open( path ),
      {
        complete: complete,
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body:  JSON.stringify( blueprint.output, null, 2 )
      }
    )]


  },

} )
