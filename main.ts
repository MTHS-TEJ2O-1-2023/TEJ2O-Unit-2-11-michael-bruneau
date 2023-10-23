/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Oct 2023
 * This program campare to random numbers
*/

// variables
let randomNumber1: number = -1
let randomNumber2: number = -1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  randomNumber1 = randint(0, 99)
  basic.showString(('#1 :') + (randomNumber1).toString())
  basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  randomNumber2 = randint(0, 99)
  basic.showString(('#2 :') + (randomNumber2).toString())
  basic.pause(1000)
  basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function() {
  basic.clearScreen()
  if (randomNumber1 == null) {
    basic.showString('#1 not picked')
  }
  if (randomNumber2 == null) {
    basic.showString('#2 not picked')
  }

  if (randomNumber1 > randomNumber2) {
    basic.showString((randomNumber1).toString() + ('>') + (randomNumber2).toString())
  } else {
    basic.showString((randomNumber1).toString() + ('<') + (randomNumber2).toString())
  }
})
