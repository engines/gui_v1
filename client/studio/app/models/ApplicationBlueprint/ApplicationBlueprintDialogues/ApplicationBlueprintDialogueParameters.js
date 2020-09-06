class ApplicationBlueprintDialogueParameters {

  constructor( dialogue, collection ) {
    this.dialogue = dialogue
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection
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
