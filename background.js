chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "sendToWhatsApp",
        title: "Send number to WhatsApp",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "sendToWhatsApp") {
        let phoneNumber = info.selectionText.replace(/\D/g, '');
        phoneNumber = phoneNumber.replace(/^0+/, '');
        if (phoneNumber) {
            const whatsappUrl = `https://wa.me/${phoneNumber}`;
            chrome.tabs.create({ url: whatsappUrl });
        }
    }
});
