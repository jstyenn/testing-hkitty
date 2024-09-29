const quotes = [
    "“Believe you can, and you're halfway there!”",
    "“Happiness is not by chance, but by choice.”",
    "“Smile more, worry less!”",
    "“Dream big, sparkle more, shine bright!”",
    "“Life is better when you're smiling!”"
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");

newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});
