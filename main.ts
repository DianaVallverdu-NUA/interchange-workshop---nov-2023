input.onButtonPressed(Button.A, function () {
    music.play(Sound1, music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.play(Sound1, music.PlaybackMode.UntilDone)
    music.play(Sound2, music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(Sound2, music.PlaybackMode.UntilDone)
})
let Sound2: SoundExpression = null
let Sound1: SoundExpression = null
Sound1 = music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Curve)
Sound2 = music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Linear)
