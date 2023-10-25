"""
Created by: Michael Bruneau
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *
import random

# variables
random_number1 = -1
random_number2 = -1

# setup
display.clear()
display.show(Image.HAPPY)

# loop
while True:
    if button_a.is_pressed():
        display.clear()

        # picking random number 1
        random_number1 = random.randint(0, 99)
        display.scroll(("#1 : ") + str(random_number1))
        sleep(1000)
        display.show(Image.HAPPY)

    if button_b.is_pressed():
        display.clear()

        # picking random number 2
        random_number2 = random.randint(0, 99)
        display.scroll(("#2 : ") + str(random_number2))
        sleep(1000)
        display.show(Image.HAPPY)

    if accelerometer.was_gesture("shake"):
        display.clear()

        # making sure random numbers are picked
        if random_number1 == -1 or random_number2 == -1:
            display.scroll("numbers not picked")
        else:
            # camparing the random numbers
            if random_number1 > random_number2:
                display.scroll(str(random_number1) + (" > ") + str(random_number2))
            else:
                display.scroll(str(random_number1) + (" < ") + str(random_number2))
        sleep(1000)
        display.show(Image.HAPPY)
