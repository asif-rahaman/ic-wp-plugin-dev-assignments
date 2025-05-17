// alert ("Spt Working");
// document.ondblclick = function () {
//    var sel = (document.selection && document.selection.createRange().text) ||
//              (window.getSelection && window.getSelection().toString());
//    alert(sel);
// };

// var tooltip = document.querySelector('.tooltip')

// tooltip.addEventListener('click', function() {
//   if (this.classList.contains('active')) {
//     this.classList.remove('active');
//   } else {
//     this.classList.add('active');
//   }
  
// });

// document.addEventListener('dblclick', async function () {
//     const selectedText = window.getSelection().toString().trim();
//     if (selectedText) {
//         // Proceed to fetch the meaning
//         console.log("You clicked:", selectedText);
//     }
// });


//const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`);
//const data = await response.json();


function showTooltip(text, x, y) {
    let tooltip = document.createElement('div');
    tooltip.innerText = text;
    tooltip.style.position = 'absolute';
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.style.background = '#333';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '8px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.zIndex = '9999';
    document.body.appendChild(tooltip);

    setTimeout(() => tooltip.remove(), 5000);
}


document.addEventListener('dblclick', async function (e) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`);
            const data = await response.json();
            const meaning = data[0]?.meanings[0]?.definitions[0]?.definition || "No definition found.";
            showTooltip(meaning, e.pageX, e.pageY);
        } catch (err) {
            showTooltip("Error fetching definition.", e.pageX, e.pageY);
        }
    }
});
