chrome.contextMenus.create({
    title: "dメニュー で「%s」を検索",
    contexts: ["selection"],
    type: "normal",
    onclick: function (info, tab) {
        window.open("https://search.smt.docomo.ne.jp/result?search_box=" + info.selectionText + "&MT=" + info.selectionText + "&SID=s04&URANK=1&SPAGE=1&TPLID=01&UNIT=02&PAGE=1")
    }
});