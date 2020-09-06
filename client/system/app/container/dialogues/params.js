app.container.dialogues.params = ( type, controller, container, blueprint, params, dialogue, index=0 ) => {

  let path = `/-/-/containers/${
    container.type === 'service' ? 'service' : 'engine'
  }/${ container.name }`

  let dialogueParams = dialogue.parameters || []
  let length = dialogueParams.length

  if ( index === length ) {
    return app.container.dialogues.components( type, controller, container, params, dialogue )
  } else {
    let dialogueParam =  dialogueParams[index]

    if ( dialogueParam.method === 'action' ) {

      let actionName = dialogueParam.action

      return app.http(
        `${ path }/action/${ actionName }`,
        ( result, el ) => {
          params = { ...params, ...result }
          el.$nodes = app.container.dialogues.params( type, controller, container, blueprint, params, dialogue, index + 1 )
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { api_vars: params } ),
          placeholder: app.hourglass( `Loading dialogue step ${ index + 1 } of ${ length }` ),
        }
      )

    } else if ( dialogueParam.method === 'assign' ) {

      let assign = dialogueParam.assign
      let templateString = Mustache.render( assign.value || '', params )

      return app.http(
        `${ path }/template`,
        ( result, el ) => {
          params[assign.key] = result
          el.$nodes = app.container.dialogues.params( type, controller, container, blueprint, params, dialogue, index + 1 )
        },
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( { api_vars: { template_string: templateString } } ),
          placeholder: app.hourglass( `Loading dialogue step ${ index + 1 } of ${ length }` ),
        }
      )


    }

  }

}
