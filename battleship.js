var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = randomLoc + 1;
var location3 = randomLoc + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Готовься, целься, стреляй! (введите номер от 0 до 6):");
    if (guess < 0 || guess > 6) {
        alert("Пожалуйста, введите валидный номер от 0 до 6!");
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;
            alert("Попадание!");
            if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен!");
            }
        }
        else {
            alert("Промах!");
        }
    }
}
var stats = "Вы предприняли " + guesses + " попыток чтобы потопить корабль, " +
    "а это значит что твоя точность стрельбы " + (3 / guesses);
alert(stats);