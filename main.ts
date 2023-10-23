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
})
