input.onGesture(Gesture.Shake, function () {
    Reset()
})
function Reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Ties = 0
    Rounds = 0
    OLED.writeStringNewLine("Shall we play a game?")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("Player 1 score: " + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 score: " + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds: " + Rounds)
}
let Rounds = 0
let Ties = 0
let P2 = 0
let P1 = 0
Reset()
basic.forever(function () {
	
})
