input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(150)
    basic.showNumber(randint(0, 9))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
