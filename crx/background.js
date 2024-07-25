chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.scripting.executeScript({
        target: {tabId: details.tabId},
        files: ["content.js"]
    });
}, {url: [{urlMatches: '.*'}]});
