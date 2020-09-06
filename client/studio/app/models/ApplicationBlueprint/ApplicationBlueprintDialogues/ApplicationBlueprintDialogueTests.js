class ApplicationBlueprintDialogueTests {

  constructor( dialogue, collection ) {
    this.dialogue = dialogue
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      label: item.label,
      parameters: item.parameters || {},
    } ) )
  }

  get formObject() {
    return { tests: this.collection.map( ( item, i ) => ( {
      label: item.label,
      parameters: JSON.stringify(item.parameters, null, 2),
    } ) ) }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.tests || {} ) )
  }

  output() {
    return this.collection
  }

  map(fn) {
    return this.collection.map(fn)
  }

  find(i) {
    return this.collection[i]
  }

}
