class ApplicationBlueprintDialogueParameters {

  constructor( dialogue, collection ) {
    this.dialogue = dialogue
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection

    // .map( ( item, i ) => ( {
    //   ...( item.method ? { method: item.method } : {} ),
    //   ...( item.action ? { action: item.action } : {} ),
    //   ...( item.assign ? { assign: item.assign } : {} ),
    // } ) )
  }

  get formObject() {
    return { parameters: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.parameters || {} ) )
  }

  output() {
    return this.collection
  }

}
