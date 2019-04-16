const inputVi = document.querySelector('#inputVi');
const inputEn = document.querySelector('#inputEn');
const saveBtn = document.querySelector('#saveBtn');
let chatTemplate = { en: '', vi: '' };

const saveTemplate = function() {
  chatTemplate.en = inputEn.value;
  chatTemplate.vi = inputVi.value;
  chrome.storage.sync.set(
    { chatTemplate: JSON.stringify(chatTemplate) },
    function() {}
  );
};

saveBtn.addEventListener('click', saveTemplate);

window.onload = function() {
  chrome.storage.sync.get(['chatTemplate'], function(result) {
    if (!result) {
      chrome.storage.sync.set(
        { chatTemplate: JSON.stringify(chatTemplate) },
        function() {}
      );
    } else {
      chatTemplate = JSON.parse(result.chatTemplate);
      inputVi.value = chatTemplate.vi;
      inputEn.value = chatTemplate.en;
    }
  });
};
