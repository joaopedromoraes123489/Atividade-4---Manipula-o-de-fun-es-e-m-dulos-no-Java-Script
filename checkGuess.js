export function checkGuess(playerGuess, correctNumber) {
    if (playerGuess > correctNumber) {
        return "O número aleatório é menor";
    } else if (playerGuess < correctNumber) {
        return "O número aleatório é maior!";
    } else {
        return "Parabéns! Você acertou";
    }
}