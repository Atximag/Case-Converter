const upButton = document.querySelector("#upper-case");
const lowButton = document.querySelector("#lower-case");
const propButton = document.querySelector("#proper-case");
const sentenceButton = document.querySelector("#sentence-case");
const saveTextButton = document.querySelector("#save-text-file");
const textArea = document.querySelector("#textArea");
upButton.addEventListener("click", (e) => {
    textArea.value = textArea.value.toUpperCase();
})
lowButton.addEventListener("click", (e) => {
    textArea.value = textArea.value.toLowerCase();
})
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}
propButton.addEventListener("click", (e) => {
    textArea.value = toTitleCase(textArea.value);
})
function sentenceCase(str) {
    return str
        .toLowerCase()
        .replace(/(^\s*|\.\s*|\?\s*|\!\s*)([a-z])/g, (match, space, letter) => {
            return space + letter.toUpperCase();
        });
}
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

sentenceButton.addEventListener("click", (e) => {
    textArea.value = sentenceCase(textArea.value);
})
saveTextButton.addEventListener("click", (e) => {
    if (textArea.value === "") {
        return;
    } else {
        download("text.txt",textArea.value);
    }
})
