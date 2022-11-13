import { makeAutoObservable, observable, action } from 'mobx'

class CountStore {
  // observalbe value
  value = 0

  constructor() {
    // auto inference from type
    makeAutoObservable(this)
  }

  // action used to mutate observalbe value
  increment() {
    // Intermediate states will not become visible to observers.
    this.value++
  }

  clear() {
    // Intermediate states will not become visible to observers.
    this.value = 0
  }

  // computed alway updated if value changed
  get double() {
    return this.value * 2
  }
}

export const countStore = new CountStore()
