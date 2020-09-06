class ApplicationBlueprintDialogueFormFieldDependent {

  constructor(collection) {
    this.assign(collection)
  }

  assign(collection) {
    if (ax.is.object(collection)) collection = Object.values(collection)
    this.collection = collection
  }

  get formObject() {
    return this.collection
  }

  output() {
    return this.collection
  }

}
