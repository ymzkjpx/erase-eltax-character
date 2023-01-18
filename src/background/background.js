chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.indexOf('https://www.eltax.lta.go.jp') > -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['index.js'],
        });
    }
});