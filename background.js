var host = "http://www.google.com";
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         alert('Fechando a página');
         return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    },
    {
        urls: [
            "*://facebook.com/*",
            "*://www.facebook.com/*",
            "*://www.instagram.com/*",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);