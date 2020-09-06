class ApplicationBlueprintDialogueNavigationRowColumns {

  constructor(collection) {
    if (ax.is.object(collection)) collection = Object.values(collection)
    this.collection = collection.map((item) => {
      return new ApplicationBlueprintDialogueNavigationComponents(item.components || [])
    })
  }

  get formObject() {
    return this.collection.map((item) => ({
      components: item.formObject
    }))
  }

  output() {
    return this.collection.map((item) => ({
      components: item.output()
    }))
  }

}
