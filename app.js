function speak() {
    var text = document.getElementById("text").value;
    var utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}