input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Knopfpressed += 1
})
let Knopfpressed = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    if (Knopfpressed == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(10)
    }
})
