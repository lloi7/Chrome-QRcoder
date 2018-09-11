chrome.tabs.getSelected(null, function (tab) {
	document.getElementById("QRcodeImage").src="http://qr.liantu.com/api.php?&w=200&text="+tab.url
});
