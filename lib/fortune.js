var fortunes = [
    "Победи свои страхи, или они победят тебя.",
    "Рекам нужны истоки.",
    "Тебя ждет приятный сюрприз",
    "Будь проще везде, где только можно."
];

exports.getFortune = function() {    
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};