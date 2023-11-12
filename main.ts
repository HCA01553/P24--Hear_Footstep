basic.clearScreen()
basic.showString("24")
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
    serial.writeLine("" + (pins.analogReadPin(AnalogPin.P0)))
})
