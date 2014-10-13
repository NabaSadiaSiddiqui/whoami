window.onload = populateTbl;

function populateTbl() {
	console.log(navigator)
	var appCodeName = navigator.appCodeName;
	var appName = navigator.appName;
	var appVersion = navigator.appVersion;
	var cookieEnabled = navigator.cookieEnabled;
	var lang = navigator.language;
	var online = navigator.onLine;
	var platform = navigator.platform;
	var product = navigator.product;
	var userAgent = navigator.userAgent;
	var vendor = navigator.vendor;

	$("#codeName").html(appCodeName);
	$("#name").html(appName);
	$("#version").html(appVersion);
	$("#lang").html(lang);
	$("#cookies").html(cookieEnabled);
	$("#online").html(online);
	$("#platform").html(platform);
	$("#product").html(product);
	$("#vendor").html(vendor);
	$("#ua").html(userAgent);
}
