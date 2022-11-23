input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    for (let index = 0; index < 1; index++) {
        basic.showString("hallo paul")
        basic.pause(500)
    }
    music.playMelody("- - - - - - - - ", 136)
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
    music.playMelody("- - - - - - - - ", 136)
})
