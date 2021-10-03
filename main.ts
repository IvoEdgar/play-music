input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    basic.clearScreen()
})
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
    basic.clearScreen()
}
basic.forever(function () {
	
})
