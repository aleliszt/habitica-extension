function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

chrome.browserAction.onClicked.addListener(function() {
  var creating = chrome.tabs.create({
    url:"https://habitica.com"
  });
  creating.then(onCreated, onError);
});
