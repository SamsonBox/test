let zahl = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("hallo paul")
        basic.pause(500)
    }
    music.playMelody("C5 B A G F E D C ", 136)
    basic.showString("hi!")
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showNumber(5000)
    basic.showString("hallo papa  hallo mama  hallo emil")
    music.playMelody("C5 A B G A F G E ", 136)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    input.calibrateCompass()
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        # # . # .
        # # # # .
        . # # # #
        # # # # #
        . . # # #
        `)
    basic.showString("was ist die gefärlichste sport art der welt")
})
input.onGesture(Gesture.Shake, function () {
    zahl = randint(1, 6)
    if (zahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (zahl == 2) {
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (zahl == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
    } else if (zahl == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (zahl == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    }
    basic.pause(500)
    basic.showNumber(zahl)
})
basic.forever(function () {
    for (let Index = 0; Index <= 255; Index++) {
        basic.setLedColor(basic.rgb(10, 0, 0))
    }
})
