class ApplicationBlueprintDialogueNavigationComponents {

  constructor(collection) {
    this.assign(collection || [])
  }

  assign(collection) {
    if (ax.is.object(collection)) collection = Object.values(collection)
    this.collection = collection.map((item) => {
      if (item.type == 'button') {
        return new ApplicationBlueprintDialogueNavigationButton(item.button || {})
      } else if (item.type == 'menu') {
        return new ApplicationBlueprintDialogueNavigationMenu(item.menu || {})
      } else if (item.type == 'row') {
        return new ApplicationBlueprintDialogueNavigationRow(item.row || {})
      }
    })
  }

  get formObject() {
    return this.collection.map((item) => ({
      type: item.type,
      [item.type]: item.formObject
    }))
  }

  output() {
    return this.collection.map((item) => ({
      type: item.type,
      [item.type]: item.output()
    }))
  }

}
