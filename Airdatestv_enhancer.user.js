﻿// ==UserScript==
// @name        Airdates.tv enhancer
// @namespace   V@no
// @author      V@no
// @description Control how many past weeks you want to see and many other enhancements
// @include     http://www.airdates.tv/*
// @include     https://www.airdates.tv/*
// @include     https://disqus.com/embed/comments/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEiElEQVRYw+2VW4hVVRjHf+uyz97nnLkcHWfGuWYzDlKUhUrUgynkQxREFJFEDwbzFkXQg0I9hIRF9BDRk1AyigkhouJDBuEEPlcQNdqo1cnRzozpzDnOuezL+no4czVnqIfBl/m/7L2+tde3/vv7/uu/YBWruMdQCweXRkff2Ltv36elUun3MAzFswnabiCq5qiGIX1NIT3uD8TzEJXDmo2kMbAOLvddoTg5RXNDI1YPEIce63vuo1fyrPcm0RmfX0cr97/wylvv9PX3HJjd0y4kkP8zv+nMmTPs379/wyObN3PzVhbPOwDuCF0JHPd38YF7n6zVoL7G6PeYXgebLz7MwTcPEmoIbUwUDpIOrjCQUbyrPuQrPUhLWKWv6xAvvjzauXDPRQQ8L0U6SLPrqV1s2bplJrphbv43OoEnmAbg5lx8ujVkW+nxBZkEShEAEWsp0kYRaG3dSENjsqgF+s6OCI4oDgGo1cA5mZuNFndsPkl89zhAgpn/QZP8e+3ioSBOEGFFIFLPvyQBESGKImSFGLjE4RK3XAUgTpKVI+ASXLKMBhQgzq0YgThOcLJcC2YrwMoQiFxM7OKlCcyqT5z7z0n/D1yckMTLtGD2v1fqFERxjHPLiHC29yulgcQlJHeIcJETzm5sbf3p+4sTqKW0oZYjPD8XhjFRsowG7l6B+Xe1hBMqdWd8fo1esKZSrRLFiwksqoCZcc3duzWtbVCtQHNTlkwWrgjsKWeRqfo3xwPDS00Q3IDCQxkeKIPT4BzktgXYXyAPfPSZZeh1iBLY97ZiZMQtTSAM6xfI2NgPjI3lAB+4ARgwlhGmILmEQ0BfpjloobdsqepmLiQ/gWhIhFxvO6nSbcbLFcKWv4ECnlEYc51ytW9pAr6fVu1tnQTpvWSzoJQQR60kbhOec5w332L0lyilyakcvXQhHjRGf/FYzw6sZ/FTPrq7B2+gn3QqxeFPjnLo4yGMMdRqNZ57/lX/rgREZODw0NBgc64B319DHIVESUzKC3BRREiCHwd0JB2AQitNiSLaGCpGoVvWzOnRK04ixVukrYfVlkqlgmiFiHDhwsigiBxVSg3PERCR7PC5c+dPnT6dEhHa2zsoThVRClK+T6VSwRiDUgqjTf1WAxJxWAXKOZwDqzVaa5qbmylXyigB63mEYUhDJsP18QInTp4kt3btKRF5UCk1pkRkIJ/Pf372m7PbNYrJyUmqtSrWWJwTtNaghFq1hvU80kGKWhSThDFWK0ARR1VwjiCVwg8CfC/AGEu2sZHYJXjaooW6B/iWQqHAkzt3/vzo1i171HfDw18cO3bstfGJCYLAB6kfq7ppODzPm7mmQ5I4RmlDd1cHjQ0NlCshTamA2AiV8m0mCuOgFJ71SZwj5XmEtRqJc2htUAqM1oS1Globnn72mUN2YmLiyLVr1/J9/f391tpGpVUkru4FSlG3TgFtNL6f4urVcX788Xs6OteTL0zT5sXcLJUJgR3bt+OcULpd8tpza4rdPd3XnYjVWiMzfqGVIpPJpC5dvOiM0SdYxSruNf4Bbv4W546hynoAAAAASUVORK5CYII=
// @license     MIT
// @version     1.27.4
// @run-at      document-start
// @grant       none
// ==/UserScript==

//tab = 2 spaces


let log = console.log;

let adeName = "Airdates.tv enhancer",
		adeVersion = "n/a",
		force = false,
		enginesDefault = [],
		_engines = [],
		_hidden = ls("hidden") || [],
		loo = 1000,
		_enginesList = [];


try
{
	adeName = GM_info.script.name;
	adeVersion = GM_info.script.version;
}catch(e){};
function ls(id, data)
{
	let r;
	if (typeof(data) == "undefined")
	{
		r = localStorage.getItem(id);
		try
		{
			r = JSON.parse(r);
		}catch(e){}
	}
	else
	{
		try
		{
			r = localStorage.setItem(id, JSON.stringify(data));
		}
		catch(e){log(e);}
	}
	return r;
}
function cs(id, data)
{
	let r;
	if (typeof(data) == "undefined")
	{
		r = readCookie(id);
		try
		{
			r = JSON.parse(r);
		}catch(e){}
	}
	else
	{
		try
		{
			r = createCookie(id, JSON.stringify(data));
		}
		catch(e){}
	}
	return r;
}
cs.list = ["s","n"];
cs.listLegacy = {
	sh: "showHidden",
	sn: "showNew",
	sr: "showReturn",
	cm: "collapseMulti",
	w: "weeks",
	wa: "enableWatched",
	middleClick: "middleClick"
};
function multiline(func)
{
	func = func.toString();
	return func.slice(func.indexOf("/*") + 2, func.lastIndexOf("*/")).split("*//*").join("*/").replace(/[\n\t]*/g, "");
}

let enginesHide = ls("enginesHide") || [];
let Settings = {
	SORT_NAME: 0,
	SORT_COLOR: 1,
	inited: false,
	box: null,
	prefs: {},
	prefsDef: {
		enableWatched: 0,
		shortTitle: 0,
		shortTitleExpand: 1,
//		animateExpand: 0,
		showHidden: 0,
		collapseMulti: 0,
		showNew: 0,
		showReturn: 0,
		middleClick: [],
		weeks: 0,
		sortBy: 0,
	},
	pref: function(id, val)
	{
		if (typeof(val) == "undefined")
			return typeof(this.prefs[id]) == "undefined" ? null : this.prefs[id];

		this.prefs[id] = val;
		this.save();
	},
	init: function()
	{
		if (this.inited)
			return;

		this.prefs = ls("settings") || this.prefsDef;
		for(i in this.prefsDef)
		{
			if (!(i in this.prefs))
				this.prefs[i] = this.prefsDef[i];
		}
		let c = cs("wa"),
				s = false;

		if (c !== null)
		{
			this.prefs.enableWatched = c ? 1 : 0;
			eraseCookie("wa");
			s = true;
		}
		c = cs("showhidden");
		if (c !== null)
		{
			this.prefs.showHidden = c ? 1 : 0;
			eraseCookie("showhidden");
			s = true;
		}
		c = cs("sh");
		if (c !== null)
		{
			this.prefs.showHidden = c ? 1 : 0;
			eraseCookie("sh");
			s = true;
		}

		c = cs("cm");
		if (c !== null)
		{
			this.prefs.collapseMulti = c ? 1 : 0;
			eraseCookie("cm");
			s = true;
		}

		c = cs("middleClick");
		if (c !== null)
		{
			this.prefs.middleClick = c ? c : [];
			eraseCookie("middleClick");
			s = true;
		}

		//splitting New/Returning into two separate filters
		c = cs("sn");
		if (c === null && this.pref("showNew") === null)
		{
			let n = cs("n") ? 1 : 0;
			this.prefs.showNew = n;
			this.prefs.showReturn = n;
		}
		else if (c !== null)
		{
			this.prefs.showNew = c;
			eraseCookie("sn");
			s = true;
		}

		c = cs("sr");
		if (c !== null)
		{
			this.prefs.showReturn = c;
			eraseCookie("sr");
			s = true;
		}

		c = cs("w");
		if (c !== null)
		{
			this.prefs.weeks = c;
			eraseCookie("w");
			s = true;
		}

		if (s)
			this.save();

		this.create();
	},
	create: function(callback)
	{
		if (Settings.box)
			return callback ? callback() : true;

		let html = multiline(function(){/*
<div id="settings-popup">
	<div id="settings-popup-content">
		<div class="header">
			<div class="back">
				<svg viewBox="0 0 24 24">
					<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
				</svg>
			</div>
			<h4>Options</h4>
			<div class="close">
				<svg viewBox="0 0 24 24">
					<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"></path>
				</svg>
				<svg viewBox="0 0 24 24">
					<path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"></path>
				</svg>
			</div>
		</div>
		<div class="content">
		</div>
	</div>
</div>
		*/});//html

		let popup = $(html).appendTo("body"),
				content = popup.find(".content"),
				a = document.createElement("a"),
				i = document.createElement("span"),
				span = document.createElement("div");

		content.toggleClass("settings", true);
		span.appendChild(i);
		span.appendChild(a);

		Settings.box = popup;
		popup.find(".back").click(function()
		{
			Settings.hide();
			setTimeout(function()
			{
				$("#account-overview").click();
			});
		});
		content.append(createCheckbox("enableWatched", "Enable watched", this.prefs.enableWatched ? true : false, this.callback, null, "pointer"));
		let opt = createCheckbox("shortTitle", "Truncate long titles", this.prefs.shortTitle ? true : false, this.callback, null, "pointer");
		opt.title = "Shorten titles to fit into single row.";
		content.append(opt);
		opt = createCheckbox("shortTitleExpand", "Auto expand truncated titles", this.prefs.shortTitleExpand ? true : false, this.callback, null, "pointer");
		opt.title = "Show full title when cursor over it. If disabled you still be able see full title in tooltip or when show is opened.";
		content.append(opt);
//		content.append(createCheckbox("animateExpand", "Animate during expanding", this.prefs.animateExpand ? true : false, this.callback, null, "pointer"));
		content.append('<div class="spacer"/>');

		a.href = "#";
		i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>';
		a.textContent = "Backup settings";
		span.title = "Backup all settings that also include links settings, watched and hidden shows lists, middle click selection.";
		let backup = function()
		{
			let cookies = {},
					str = "",
					obj = {
						version: adeVersion,
						settings: Settings.prefs
					};

			for(let i = 0; i < cs.list.length; i++)
			{
				let v = cs(cs.list[i]);
				if (v !== null)
				{
					cookies[cs.list[i]] = v;
				}
			}
			for(let i in cookies)
			{
				obj.cookies = cookies;
				break;
			}
			for(let i in _hidden)
			{
				obj.hidden = _hidden;
				break;
			}
			for(let i in watched._list)
			{
				obj.watched = watched._list;
				break;
			}
			for(let i in customLinks._list)
			{
				obj.customLinks = customLinks._list;
				break;
			}
			for(let i in enginesHide)
			{
				obj.enginesHide = enginesHide;
				break;
			}
			for(let i in enginesSort._list)
			{
				obj.enginesSort = enginesSort._list;
				break;
			}
			str = JSON.stringify(obj);

			return str;
		}
		a.addEventListener("click", function(e)
		{
			e.preventDefault();

			let str = backup();
			if (str)
					prompt( adeName + " Settings \nYou can save it in a normal textfile and/or restore it to another computer/browser.", str );
			else
					alert("Nothing to backup");
			return false;
		}, false);
		let d = a.cloneNode(true);


		d.addEventListener("click", function(e)
		{
			if (e.isTrigger)
				return;

			e.preventDefault();
			e.stopPropagation();

			let d = new Date(),
					date = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate()) + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());

			fileSave("Airdates.tv_enhancer_v" + adeVersion + "_settings_" + date + ".json", backup());
		}, false);
		d.textContent = "save to file";
		d.className = "file";
		span.appendChild(d);
		content.append(span);

		span = span.cloneNode(true);
		span.title = "Note, your watched and hidden shows list will stay intact, new shows will be added to it. Custom links will only overwrite existing with matched ID. Everything else will be overwritten";
		i = span.firstChild;
		a = i.nextSibling;
		d = span.lastChild;
		i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3M12,8V13L16.28,15.54L17,14.33L13.5,12.25V8H12Z" /></svg>';
		a.textContent = "Restore settings";
		function restore(str)
		{
			let reload = false,
					txt = "Error restoring settings";
			if(!str)
				return;

			let hiddenNum = 0,
					watchedNum = 0,
					settingsNum = 0,
					enginesNum = 0,
					engineHideNum = 0;

			let json = null;
			try
			{
				json = JSON.parse(str);
			}
			catch(e){}
			if (json)
			{
				if ("hidden" in json)
				{
					hiddenNum = json.hidden.length;
					for(let i = 0; i < hiddenNum; i++)
						showHide(parseInt(json.hidden[i]), 1);
				}
				if ("watched" in json)
				{
					for(let id in json.watched)
					{
						for(let i = 0; i < json.watched[id].length; i++)
						{
							let ep = json.watched[id][i];
							watched.add(id, ep);
							watchedNum++;
							$('div.entry[data-series-id="' + id + '"]').each(function(n, entry)
							{
								if (watched.title(entry) == ep)
									watched.update(entry, true);
							});
						}
					}
					watched.save(true);
				}
				if (!json.cookies)
					json.cookies = {};

				if ("settings" in json)
				{
					let save = false;
					for(let i in json.settings)
					{
						let val = json.settings[i];
						if (i in cs.listLegacy && !(i in Settings.prefsDef))
						{
							val = json.settings[i];
							i = cs.listLegacy[i];
						}

						if (!(i in Settings.prefsDef))
						{
							if (!(i in json.cookies) && cs.list.indexOf(i) != -1)
								json.cookies[i] = val;

							continue;
						}

						if (!command(i, val))
						{
							settingsNum++;
							Settings.prefs[i] = val;
							reload = true;
							save = true;
						}
					}
					if (save)
						Settings.save();
				}

				if ("cookies" in json)
				{
					for(let i in json.cookies)
					{
						if (cs.list.indexOf(i) == -1)
							continue;

						if (!command(i, json.cookies[i]))
						{
							settingsNum++;
							cs(i, json.cookies[i]);
							reload = true;
						}
					}
				}
				let enginesNew = [];
				if ("customLinks" in json)
				{
					let changed = false;
					for (i in json.customLinks)
					{
						enginesNum++;
						changed = reload = true;
						customLinks._list[i] = json.customLinks[i];
						enginesNew.push(json.customLinks[i]);
					}
					if (changed)
						ls("customLinks", customLinks._list);

				}
				if ("enginesHide" in json)
				{
					let changed = false;
					let list = [];
					for(let i = 0; i < json.enginesHide.length; i++)
					{
						if (enginesFind(json.enginesHide[i]) != -1 || enginesFind(json.enginesHide[i], enginesNew) != -1)
						{
							list[list.length] = json.enginesHide[i];
							changed = reload = true;
							engineHideNum++;
						}
					}
					enginesHide = list;
					if (changed)
						ls("enginesHide", enginesHide);
				}
				if ("enginesSort" in json)
				{
					let changed = false;
					enginesSort._list = [];
					for(let i = 0; i < json.enginesSort.length; i++)
					{
						if (enginesFind(json.enginesSort[i]) != -1 || enginesFind(json.enginesSort[i], enginesNew) != -1)
						{
							changed = reload = true;
							enginesSort._list.push(json.enginesSort[i]);
						}
					}
					if (changed)
						ls("enginesSort", enginesSort._list);
				}
				txt = settingsNum + " setting" + (settingsNum > 1 ? "s" : "") + " imported" + ((hiddenNum || watchedNum) ? " and marked " : "");
				if (hiddenNum)
					txt += hiddenNum + " show" + (hiddenNum > 1 ? "s" : "") + " as hidden";
				if (watchedNum)
					txt += (hiddenNum ? ", " : " ") + watchedNum + " as watched";
			}
			alert(txt);
			if (reload)
				window.location.reload();
		}
		a.addEventListener("click", function(e)
		{
			e.preventDefault();
			restore(prompt( "Please enter the " + adeName + " settings text" ));
		}, false);

		d.addEventListener("click", function(e)
		{
			e.preventDefault();
			e.stopPropagation();
			fileLoad(function(text)
			{
				restore(text);
			});
		}, false);
		d.textContent = "load from file";
		span.appendChild(d);
		content.append(span);


	},//Settings.create()

	callback: function(e, id, check)
	{
		Settings.prefs[id] = check ? 1 : 0;
		Settings.save();
	},

	save: function(f)
	{
		ls("settings", this.prefs);
	},

	show: function()
	{
		Settings.box.show();
	},

	hide: function()
	{
		Settings.box.hide();
	},
}//Settings

function fileLoad(callback, ext)
{
	let f = document.createElement("input");
	f.type = "file";
	if (typeof(ext) == "undefined")
		ext = ".json";

	if (ext)
		f.setAttribute("accept", ext);

	function readFile(e)
	{
		f.removeEventListener("change", readFile, false);
		let files = f.files;
		if (!f.files.length)
		{
			alert('Please select a file!');
			return;
		}
		let reader = new FileReader();

		reader.onloadend = function(evt)
		{
			if (evt.target.readyState == FileReader.DONE)
			{
				callback(evt.target.result);
			}
		};

		let blob = f.files[0].slice(0, f.files[0].size);
		reader.readAsBinaryString(blob);
	}
	f.addEventListener("change", readFile, false);
	f.click();
}

function fileSave(name, data, type)
{
	type = type ? type : 'text/json';
	let blob = new Blob([data], {type: type}),
			a = document.createElement("a"),
			d = new Date(),
			date = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate()) + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());

	a.download = name;
	a.href = window.URL.createObjectURL(blob);
	a.dataset.downloadurl = [type, a.download, a.href].join(':');
	document.body.appendChild(a);
	a.click();
	a.parentNode.removeChild(a);
}

function exportGetColors()
{
	let str = $.map(DB.savedColors,function(e,i){return i + "=" + e;}).join(";");
	return str.replace(/;?[0-9]+=#FFFFFF/i, "");
}

function pad(t)
{
	return "" + t < 10 ? "0" + t : t;
}

function enginesBackup()
{
	if (!enginesBackup.backup)
		enginesBackup.backup = window.engines;
}

function enginesRestore()
{
	if (enginesBackup.backup)
	{
		window.engines = enginesBackup.backup;
		enginesBackup.backup = null
	}
}

function enginesAdd(id)
{
	for(let i = 0; i < _engines.length; i++)
	{
		if (_engines[i].name == id || _engines[i].host == id)
			return;
	}
	for(let i = 0; i < engines.length; i++)
	{
		if (engines[i].name == id || engines[i].host == id)
		{
			_enginesList.push(engines[i].host);
			_engines.push(engines[i]);
			Settings.pref("middleClick", _enginesList);
			return;
		}
	}
};

function enginesRemove(id)
{
	for(let i = 0; i < _engines.length; i++)
	{
		if (_engines[i].name == id || _engines[i].host == id)
		{
			let n = _enginesList.indexOf(_engines[i].host);
			if (n != -1)
				_enginesList.splice(n, 1);

			Settings.pref("middleClick", _enginesList);
			_engines.splice(i, 1);
			return;
		}
	}
};

function enginesCheck(id)
{
	for(let i = 0; i < _engines.length; i++)
	{
		if (_engines[i].name == id || _engines[i].host == id)
			return i;
	}
	return -1;
};

function enginesFind(id, obj)
{
	obj = typeof(obj) == "undefined" ? window.engines : obj;
	for(let i = 0; i < obj.length; i++)
	{
		if (obj[i].name == id || obj[i].host == id)
			return i;
	}
	return -1;
};

function enginesSort(list, save)
{
	if (typeof(list) == "undefined")
	{
		list = ls("enginesSort") || [];
		save = true;
	}

	let newList = [],
			newEnginesList = [];

	for(let i = 0; i < list.length; i++)
	{
		let index = enginesFind(list[i]);
		if (index == -1 || newList.indexOf(window.engines[index].host) != -1)
			continue;

		newEnginesList[newEnginesList.length] = window.engines[index];
		newList[newList.length] = window.engines[index].host;
	}
	for(let i = 0; i < window.engines.length; i++)
	{
		if (newList.indexOf(window.engines[i].host) == -1)
		{
			newEnginesList[newEnginesList.length] = window.engines[i];
			newList[newList.length] = window.engines[i].host;
		}
	}
	for(let i in customLinks._list)
	{
		if (newList.indexOf(i) == -1)
		{
			newEnginesList[newEnginesList.length] = customLinks._list[i];
			newList[newList.length] = i;
		}
	}
	if (save)
		enginesSort._list = newList;

	window.engines = newEnginesList;
}
enginesSort.changed = function()
{
	let list = [];
	for (let i = 0; i < enginesDefault.length; i++)
	{
		list[list.length] = enginesDefault[i].host;
	}
	for (i in customLinks._list)
	{
		if (list.indexOf(i) == -1)
			list[list.length] = i;
	}
	return !isEqual(list, enginesSort._list);
}

function isEqual (a, b)
{
	for(let i in a)
	{
		if (!(i in b) || a[i] != b[i])
			return false
	}
	for(let i in b)
	{
		if (!(i in a) || a[i] != b[i])
			return false
	}
	return true;
}

function cleanName(id)
{
	return id.replace(/[^a-zA-Z0-9-_]/g, "_");
}

function getHost(url)
{
	let a = document.createElement('a');
	a.href = url;
	return a.hostname;
}
function engineFixHost(engine)
{
	if (engine.host)
		return;

	engine.host = getHost(engine.href);
}

function showHide(id, t)
{
	let hidden = _hidden.indexOf(id);
	if (typeof(t) == "undefined")
		return hidden != -1;

	if (t == 2)
		t = hidden == -1 ? 1 : 0;

	switch(t)
	{
		case 0:
			_hidden.splice(hidden, 1);
			if (!DB.savedColors[id])
				DB.infoRemove(id);

			hidden = false;
			break;
		case 1:
			if (hidden == -1)
			{
				_hidden.push(id);
				DB.infoAdd(id);
			}

			hidden = true;
			break;
	}
	let css = $("#css" + id);
	if (hidden)
	{
 		if (!css.length)
 		{
			let style = "<style id='css" + id + "'>"+
									"div.calendar:not(.showHidden).activeOnly .entry[data-series-id='" + id + "'][opened]:not(.multi){ display: block !important; }"+
									"div.calendar:not(.showHidden) .entry[data-series-id='" + id + "']:not([opened]):not(.searchResult){ display: none !important; }"+
									".entry[data-series-id='" + id + "'] .title{ font-style: italic; }"+
									"div:not(#searchResults) > .entry[data-series-id='" + id + "']:not([opened]):not(.searchResult){ opacity: 0.3;}"+
									".entry[data-series-id='" + id + "'] .showhide0{ display: inline; }"+
									".entry[data-series-id='" + id + "'] .showhide1{ display: none; }"+
									"</style>";
			$(style).appendTo("body");
		}
	}
	else
		css.remove();

	ls("hidden", _hidden);
	return hidden;
}


function command(id, val)
{
	if (!command.list[id])
		return false;

	try
	{
		command.list[id].func({preventDefault:function(){},stopPropagation:function(){}}, val);
	}
	catch(e)
	{
		return false;
	}
	return true;
}
command.list = {};
command.add = function(id, objId, func)
{
	command.list[id] = {
		id: id,
		objId: objId,
		func: func
	};
};

//watched checkbox
function watched(entry)
{
	if (entry._input.checked)
		watched.add(entry.getAttribute("data-series-id"), watched.title(entry));
	else
		watched.remove(entry.getAttribute("data-series-id"), watched.title(entry));

	watched.update(entry, entry._input.checked);
}
watched._list = ls("watched") || {};
watched._saving = false;
watched.add = function(id, episode)
{
	if (!watched._list[id])
		watched._list[id] = [];

	if (watched._list[id].indexOf(episode) == -1)
		watched._list[id].push(episode);

	watched.save();
};

watched.remove = function(id, episode)
{
	if (!watched._list[id])
		return;

	let n = watched._list[id].indexOf(episode);
	if (n == -1)
		return;

	watched._list[id].splice(n, 1);
	if (!watched._list[id].length)
		delete watched._list[id];

	watched.save();
};

watched.save = function(f)
{
	if (watched._saving && !f)
		return;

	function func()
	{
		watched._saving = false;
		ls("watched", watched._list);
	}
	clearTimeout(watched._saving);
	if (f)
		func();
	else
		watched._saving = setTimeout(func, 500);
};

watched.has = function(entry)
{
	let id = entry.getAttribute("data-series-id");
	return watched._list[id] && watched._list[id].indexOf(watched.title(entry)) != -1;
};

watched.title = function(entry)
{
	let txt = entry._title && entry._title._titleOrig ? entry._title._titleOrig : $(entry).find("div.title").text();
	return txt.substring(txt.lastIndexOf(" ") + 1).replace(/\s+$/g, "");
};

watched.update = function(entry, enable)
{
	let text = "Watched";
	if (enable)
	{
		entry.setAttribute("watched", "");
	}
	else
	{
		text = "Not watched";
		entry.removeAttribute("watched");
	}
	entry.title = $(entry).find(".title > span")[0].lastChild.textContent + " (" + text + ")";
	$(entry).find(".title > input").prop("title", text);
	entry._input.checked = enable;

};

watched.attach = function(i,entry)
{
	if (entry._input)
		return;

	let input = document.createElement("input");
	input.type = "checkbox";
	input.checked = watched.has(entry);
	entry._input = input;

	input.addEventListener("change", function(e)
	{
		let title = watched.title(entry);
		$('div.entry[data-series-id="' + entry.getAttribute("data-series-id") + '"]').each(function(i, entry)
		{
			if (watched.title(entry) == title)
				watched.update(entry, input.checked);
		});
		watched(entry);
	}, false);
	let title = $(entry).find(".title")[0],
			text = title.innerHTML;

	title.innerHTML = "";
	title.appendChild(input);
	$(title).append("<span>" + text.trim() + "</span>");
	watched.update(entry, input.checked);
};


//custom links
function customLinks(obj)
{

}
customLinks._list = ls("customLinks") || {};
customLinks.show = function()
{
	$(customLinks.div).show();
}
customLinks.hide = function()
{
	$(customLinks.div).hide();
}

customLinks.manager = function customLinksManager(callback)
{
	if (customLinks.div)
		return callback ? callback() : true;

	let html = multiline(function(){/*
<div id="manage-links-popup">
	<div id="manage-links-popup-content">
		<div class="header">
			<div class="back">
				<svg viewBox="0 0 24 24">
					<path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
				</svg>
			</div>
			<h4>Links Manager</h4>
			<div class="close">
				<svg viewBox="0 0 24 24">
					<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"></path>
				</svg>
				<svg viewBox="0 0 24 24">
					<path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"></path>
				</svg>
			</div>
		</div>
		<div class="content"></div>
	</div>
</div>
		*/});//html

	let popup = $(html).appendTo("body");
	customLinks.div = popup[0];
	popup.find(".back").click(function()
	{
		customLinks.hide();
		setTimeout(function()
		{
			$("#account-overview").click();
		});
	});
	$(popup).find("[id^=account]").each(function()
	{
		this.id = this.id.replace("account", "manage-links");
	});

	let	content = $(popup).find(".content").html("");
	html = multiline(function(){/*
<div class="reset">
	<a id="sort-reset" href="#">reset sort</a>
</div>
<form>
	<div id="engine-edit">
		<div>
			<label>Name:</label>
			<input id="engine-name">
		</div>
		<div>
			<label>URL:</label>
			<input id="engine-url">
			<select id="engine-tags" size="1">
				<option value=""></option>
				<option value="MONKEY_N">Name</option>
				<option value="MONKEY">Name+Episode</option>
				<option value="MONKEY_ID">ID</option>
				<option value="{WIKI_TITLE}">Wiki page</option>
				<option value="MONKEY_ARCHIVELINK">Archive link</option>
			</select>
		</div>
		<div>
			<label>ID:</label>
			<input id="engine-id" placeholder="&lt;optional&gt;">
		</div>
		<div>
			<label></label>
			<input id="engine-submit" type="button" value="Add">
			<input id="engine-reset" type="reset" value="Reset">
		</div>
		<div>
			<label>Result:</label>
			<div id="engine-res"></div>
		</div>
	</div>
</form>
	*/});//html

	$(html).appendTo(content.parent());
	let engId = $("#engine-id"),
			engUrl = $("#engine-url"),
			engName = $("#engine-name"),
			engSubmit = $("#engine-submit"),
			engTags = $("#engine-tags"),
			engRes = $("#engine-res"),
			engReset = $("#engine-reset"),
			engSortReset = $("#sort-reset"),
			engResHidden = $('<div id="engine-hidden" class="entry" data-series-id="1234" data-series-source="List of Monsuno episodes" data-date="20120223"><div class="title">Monsuno S01E01</div></div>').appendTo(popup),
			prevTarget = null,
			prevVal = null;

			if (enginesSort.changed())
				popup.attr("changed", true);

	function change(e)
	{
		if (prevTarget === e.target && prevVal === e.target.value)
			return;

		clearTimeout(change.timer);
		change.timer = setTimeout(function()
		{
			prevVal = e.target.value;
			prevTarget = e.target;
			engResHidden.find(".details").remove();
			let opened = $('.details[style="display: block;"]').toggleClass("details", false);
			enginesBackup();
			let eng = [{
						name: engName.val(),
						host: engId.val(),
						href: engUrl.val()
					}];

			if (!eng[0].href.match(/[a-z]+:\/\//i))
				eng[0].href = "http://" + eng[0].href;

			engineFixHost(eng[0]);
			window.engines = eng;
			engResHidden.find(".title").trigger("click");
			opened.toggleClass("details", true);
			setTimeout(function()
			{
				let list = engResHidden.find(".engines").children(),
						a = list.filter("a")[0],
						img = list.filter("img")[0],
						children = engRes.children();

				img.src = "http://www.google.com/s2/favicons?domain=" + getHost(eng[0].href);

				if (!children.length)
				{
					engRes.append(img).append(a);
				}
				else
				{
					$(children[0]).replaceWith(img);
					$(children[1]).replaceWith(a);
				}
				if (enginesBackup)
				{
					enginesRestore();
				}
			});
		}, 300);
	}//change()
	engId.on("input change", change);
	engUrl.on("input change", change);
	engName.on("input change", change);

	engTags.on("change", function(e)
	{
		let start = engUrl[0].selectionStart,
				end = engUrl[0].selectionEnd,
				endNew = start + e.target.value.length,
				startNew = endNew,
				txt = engUrl.val();
		engUrl.val(txt.substring(0, start) + e.target.value + txt.substring(end));
		engUrl[0].selectionStart = startNew;
		engUrl[0].selectionEnd = endNew;
		engUrl.focus();
		engUrl.trigger("input");
		e.target.value = "";
	});
	engReset.click(function(e)
	{
		engRes.html("");
		prevVal = null;
	});
	function flash(obj, color)
	{
		obj.toggleClass("update", false);
		obj.css("background-color", color ? color : "#90FF90");
		setTimeout(function()
		{
			obj.toggleClass("update", true);
			obj.removeAttr("style");
		}, 100);
	}
	engSubmit.click(function(e)
	{
		let engine = {
					name: engName.val().trim(),
					href: engUrl.val().trim(),
					host: engId.val().trim()
				};
		if (!engine.href.match(/[a-z]+:\/\//i))
			engine.href = "http://" + engine.href;

//		engUrl.val(engine.href);
		engineFixHost(engine);
		let id = "engine_" + cleanName(engine.host),
				update = $("#" + id),
				exists = customLinks._list[engine.host];

		if (!engine.name || !engine.href)
			return false;

		let equal = false,
				n = -1;
		for(let i = 0; i < window.engines.length; i++)
		{
			if (window.engines[i].host == engine.host)
			{
				equal = isEqual(window.engines[i], engine);
				n = i;
				break;
			}
		}
		if (equal)
		{
			flash(update);
			return false;
		}

		if (!exists || update.length)
		{
			customLinks._list[engine.host] = engine;
			if (update.length)
			{
				if (n > -1)
					window.engines[n] = engine;

			}
			else
				window.engines.push(engine);

			ls("customLinks", customLinks._list);
			customLinksAddCss(id);
		}
		function updater(update)
		{
			flash($(update));
			updateDetails();
		}
		if (update.length)
		{
			if (exists)
			{
				for (let i = 0; i < enginesDefault.length; i++)
				{
					if (isEqual(enginesDefault[i], engine))
					{
						update.find(".del").trigger("click");
						return;
					}
				}
			}
			update.replaceWith(create(engine, !exists ? updater : function(update)
			{
				flash($(update));
			}));
			let entry = $("div.entry").find("." + id);
			entry.filter("a.link").attr("href", engine.href).text(engine.name);
			flash(update);
		}
		else
		{
			let last = content.children(":last-child");
			content.append(create(engine, updater));
//			updateDetails();
		}

		engName.val("");
		engId.val("");
		engUrl.val("");
	});//engSubmit.click()

	function updateDetails()
	{
		let clone = engResHidden.clone();
		clone.find(".details").remove();
		$("body").append(clone);
		let opened = $('.details[style="display: block;"]').toggleClass("details", false);
		force = true;
		clone.find(".title").trigger("click");
		opened.toggleClass("details", true);
		setTimeout(function()
		{
			$('div:not(#engine-hidden) .details[style="display: block;"]').find(".engines").replaceWith(clone.find(".engines"));
			clone.remove();
		}, 300);
	}
	engSortReset.click(function(e)
	{
		e.stopPropagation();
		e.preventDefault();
		let host = engId.val(),
				name = engName.val(),
				href = engUrl.val(),
				list = [];

		for (let i = 0; i < enginesDefault.length; i++)
		{
			list[list.length] = enginesDefault[i].host;
		}
		for (i in customLinks._list)
		{
			list[list.length] = customLinks._list[i].host;
		}
		enginesSort(list, true);
		ls("enginesSort", []);
		updateDetails();
		$(customLinks.div).remove();
		customLinks.div = null;
		popup.removeAttr("changed");
		customLinks.manager(function()
		{
			if (host || name || href)
			{
				$("#engine-id").val(host);
				$("#engine-name").val(name);
				$("#engine-url").val(href);
				$("#engine-url").trigger("input");
			}
		});
		customLinks.show();
	});
	let dragged = null;

	function dndEvent(e)
	{
		let r = null;
		switch(e.type)
		{
			case "mousedown":
				if (typeof(e.target.className) != "string" || e.target.className.indexOf("dndh") != -1)
					dragged = e.target.parentNode;
				break;
			case "dragstart":
				if (!dragged)
					return;

				e.dataTransfer.effectAllowed = 'move';
				dragged = this;
				dragged.classList.add("dragging");
				this.parentNode.classList.add("dragging");
				setTimeout(function()
				{
					dragged.classList.add("hide");
				});
				e.dataTransfer.setData('application/x-moz-node', dragged);
				break;
			case "dragenter":
				if (!dragged)
					return;

				let node = this,
						up = (node.nextSibling == dragged),
						moveold = up ? node : node.nextSibling,
/*
						anim1 = up ? "up" : "down",
						anim2 = up ? "down" : "up",
*/
						movenew = dragged;
/*
				movenew.classList.add(anim1);
				moveold.classList.add(anim2);
				movenew.classList.remove(anim2);
				moveold.classList.remove(anim1);
//				$(dragged).toggleClass(anim1, true);
//				$(moveto).toggleClass(anim2, true);
//				clearTimeout(dragged.__timer);
//				clearTimeout(moveto.__timer);
				movenew.__timer = setTimeout(function()
				{
					movenew.classList.remove(anim1);
//					$(dragged).toggleClass(anim1, false);
				}, 1000);
				moveold.__timer = setTimeout(function()
				{
					moveold.classList.remove(anim2);
//					$(moveto).toggleClass(anim2, false);
				}, 1000);
*/
				node.parentNode.insertBefore(movenew, moveold);
				break;
			case "dragover":
				if (!dragged)
					return;

				e.dataTransfer.dropEffect = 'move';
				if (e.stopPropagation)
					e.stopPropagation();

				if (e.preventDefault)
						e.preventDefault(); // Necessary. Allows us to drop.

				r = false;
				break;
			case "dragleave":
				break;
			case "dragend":
				if (!dragged)
					return;

				dragged.classList.remove("dragging");
				dragged.classList.remove("hide");
				let div = document.querySelectorAll('#manage-links-popup-content .content [draggable]'),
						list = [];
				[].forEach.call(div, function (col)
				{
					list[list.length] = col._engine.host;
				});
				dragged.parentNode.classList.remove("dragging");
				enginesSort(list, true);
				ls("enginesSort", list);
				if (enginesSort.changed())
					popup.attr("changed", true);
				else
					popup.removeAttr("changed");

				updateDetails();
				dragged = false;
				break;
			case "drop":
				if (!dragged)
					return;

				if (e.stopPropagation)
					e.stopPropagation();
				if (e.preventDefault)
						e.preventDefault(); // Necessary. Allows us to drop.
				break;
		}
		if (r !== null)
			return r;
	}
	function create(engine, callback)
	{
		let div = document.createElement("div"),
				id = "engine_" + cleanName(engine.host),
				cb = createCheckbox(id, "", enginesHide.indexOf(engine.host) == -1, function(e, id, checked)
				{
					if (checked)
						enginesHide.splice(enginesHide.indexOf(engine.host), 1);
					else
						enginesHide.push(engine.host);

					ls("enginesHide", enginesHide);
			}, ["Visible", "Hidden"]),
				dndHandle = document.createElement("span");
		div._engine = engine;
		div.id = id;

		content[0].setAttribute("draggable", true);
		div.setAttribute("draggable", true);
		div.addEventListener('dragstart', dndEvent, false);
		div.addEventListener('dragenter', dndEvent, false)
		div.addEventListener('dragover', dndEvent, false);
		div.addEventListener('dragleave', dndEvent, false);
		div.addEventListener('drop', dndEvent, false);
		div.addEventListener('dragend', dndEvent, false);
		div.addEventListener("mousedown", dndEvent, false);

		dndHandle.innerText = "☰";
		dndHandle.className = "dndh";
		div.appendChild(dndHandle);
		div.appendChild(cb);
		let clone = engResHidden.clone();
		$("body").append(clone);
		clone.find(".details").remove();
		let opened = $('.details[style="display: block;"]').toggleClass("details", false);

		enginesBackup();
		window.engines = [engine];
		clone.find(".title").trigger("click");
		opened.toggleClass("details", true);
		let n = 100;
		setTimeout(function loop()
		{
//			let list = clone.find(".engines").children().filter(".engine_" + cleanName(engine.host)),
			let list = clone.find(".engines").children();
			if (!list.length && n--)
			{
				setTimeout(loop);
				return;
			}
			let	a = list.filter("a")[0],
					img = list.filter("img")[0],
					def = false;

			for (let i = 0; i < enginesDefault.length; i++)
			{
				if (enginesDefault[i].host == engine.host)
				{
					def = true;
					break;
				}
			}
			if (a && img)
				img.src = "http://www.google.com/s2/favicons?domain=" + getHost(a.href);

			$(div).append(img);
			$(div).append(a);
			if (def)
				$(div).toggleClass("def", true);

			enginesRestore();
			clone.remove();

			$('<span class="edit" title="Edit"><svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"></path></svg></span>').appendTo(div).click(function(e)
			{
				engId.val((getHost(engine.href) == engine.host) ? "" : engine.host);
				engName.val(engine.name);
				engUrl.val(engine.href.replace(/http:\/\//i, ""));
				engId.trigger("input");
			});
			if (customLinks._list[engine.host])
			{
	//				$('<span class="del" title="delete">&#9249;</span>').appendTo(div).click(function(e)
				$('<span class="del" title="' + (def ? "Clear" : "Delete") + '">' + '<svg viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path></svg>' + '</span>').appendTo(div).click(function(e)
				{
					e.stopPropagation();
					e.preventDefault();
					flash($("#" + id), e.isTrigger ? null : "#FF9090");
					setTimeout(function()
					{
						let host = engId.val(),
								name = engName.val(),
								href = engUrl.val();

						delete customLinks._list[engine.host];
						let update = false;
						for(let i = 0; i < window.engines.length; i++)
						{
							if (window.engines[i].host == engine.host)
							{
								for(let d = 0; d < enginesDefault.length; d++)
								{
									if (enginesDefault[d].host == engine.host)
									{
										update = d;
										break;
									}
								}
								if (update !== false)
									window.engines[i] = enginesDefault[update];
								else
								{
									let index = enginesSort._list.indexOf(engine.host);

									if (index != -1)
									{
										enginesSort._list.splice(i, 1);
										ls("enginesSort", enginesSort._list);
									}
									window.engines.splice(i, 1);
								}
								break;
							}
						}
						ls("customLinks", customLinks._list);
						if (update === false)
						{
							$("#" + id).remove();
							$(".engines").find("." + id).remove();
							$("." + id).toggleClass(id, false);
							$("#css_" + id).remove();
							let index = enginesHide.indexOf(engine.host);
							if (index != -1)
							{
								enginesHide.splice(index, 1);
								ls("enginesHide", enginesHide);
							}
						}
						$(customLinks.div).remove();
						customLinks.div = null;
						customLinks.manager(function()
						{
							if (update !== false)
							{
								let aNew = $("#manage-links-popup").find("#" + id).find("a.link"),
										a = $('.details[style="display: block;"]').find(".engines").find("a." + id);

								a.html(aNew.html());
								a.attr("href", aNew.attr("href"));
							}
							if (host || name || href)
							{
								$("#engine-id").val(host);
								$("#engine-name").val(name);
								$("#engine-url").val(href);
								$("#engine-url").trigger("input");
							}
						});
						customLinks.show();
					}, 200);
				});
			}
			if (callback)
				callback(div);
		});
		return div;
	}//create();
	enginesBackup();

	let eng = window.engines,
			n = eng.length;
	function finished()
	{
		if (!--n)
			callback();
	}
	for(let i = 0; i < eng.length; i++)
	{
		content.append(create(eng[i], callback ? finished : null));
	};
	setTimeout(enginesRestore,100);
}//customLinks.manager()

function customLinksAdd()
{

	let listNew = [],
			remove = [],
			list = [];
	for(let l in customLinks._list)
	{
		listNew.push(customLinks._list[l]);
	}
	let hosts = [];
	for(let n = 0; n < window.engines.length; n++)
	{
		hosts[hosts.length] = window.engines[n].host;
		enginesDefault[enginesDefault.length] = window.engines[n];
	}
	for(let i = 0; i < listNew.length; i++)
	{
		let n = hosts.indexOf(listNew[i].host);
		if (n != -1)
			window.engines[n] = listNew[i];
		else
			list.push(listNew[i]);

		customLinks._list[listNew[i].host] = listNew[i];
	}
	ls("customLinks", customLinks._list);
	window.engines = window.engines.concat(list);

	enginesSort();
	let css = [],
			css2 = [];

	for (let i = 0; i < window.engines.length; i++)
	{
		let id = "engine_" + cleanName(window.engines[i].host);
		customLinksAddCss(id);
	}
	customLinks.manager();
	$(customLinks.div).remove();
	customLinks.div = null;


	//middle click on day's title opens selected engines for user's shows
	_enginesList = Settings.pref("middleClick") || [];
	let engines = enginesBackup.backup ? enginesBackup.backup : window.engines,
			del = [],
			add = [];

	for(let i = 0; i < _enginesList.length; i++)
	{
		let found = false;
		for (let n = 0; n < engines.length; n++)
		{
			if (engines[n].name == _enginesList[i])
				_enginesList[i] = engines[n].host

			if (engines[n].host == _enginesList[i])
			{
				_engines.push(engines[n]);

				if (!i && engines[n].host == "thepiratebay.org")
				{
					//sort by date instead of seeds
					engines[n].href = engines[n].href.replace(/\.se\//, ".org").replace(/\/0\/7\/0$/, "/0/3/0");
				}

				found = true;
				break
			}
		}
		if (!found)
			del.push(_enginesList[i]);
	}
	for(let i = 0; i < del.length; i++)
	{
		_enginesList.splice(_enginesList.indexOf(del[i]), 1);
	}
	let l = _enginesList.length;
	try
	{
		_enginesList = Array.from(new Set(_enginesList));
	}catch(e){}
	if (l != _enginesList)
		Settings.pref("middleClick", _enginesList);

}//customLinksAdd()

function customLinksAddCss(id)
{
	let css = 'body:not(.' + id + ') .engines .' + id + "{display:none;}",
			css2 = 'body:not(.' + id + ') #' + id + " img";

	css2 += ',body:not(.' + id + ') #' + id + " a.link";
	css2 += "{font-style: italic; opacity: 0.5;}";
	$('<style id="css_' + id + '"></style>').html(css+css2).appendTo("head");
}


function createCheckbox(id, label, cookie, callback, title, className)
{
	let span = document.createElement("span"),
			checkon = document.createElement("span"),
			checkoff = document.createElement("span"),
			a = document.createElement("a"),
			check = typeof(cookie) == "boolean" ? cookie : cs(cookie) ? true : false;
	if (title)
	{
		checkon.title = title[0];
		checkoff.title = title[1] || title[0];
		a.title = title[2] || title[0];
	}
	a.className = (typeof(className) == "undefined" ? "filter " : className + " ") + id;
	checkon.className = "checkon nu";
	checkoff.className = "checkoff nu";
	checkon.innerHTML = "☑";
//	checkon.innerHTML = '<svg style="width:1em;height:1em;" viewBox="0 0 24 24"><path d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" /></svg>';
	checkoff.innerHTML = "☐";
//	checkoff.innerHTML = '<svg style="width:1em;height:1em;" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" /></svg>';
//	a.href = "#";
	span.appendChild(checkon);
	span.appendChild(checkoff);
	span.appendChild(document.createTextNode(label));
	a.appendChild(span);
	$(a).insertBefore("#nu-showing");
	let func = function(e, val)
	{
		e.preventDefault();
		e.stopPropagation();
		let check = span.hasAttribute("checked");
		if (val !== undefined)
			check = !val;

		if (check)
			span.removeAttribute("checked");
		else
			span.setAttribute("checked", "checked");

		$(".calendar").toggleClass(id, !check);
		$("body").toggleClass(id, !check);
		if (typeof(cookie) != "boolean")
			cs(cookie, check ? 0 : 1);

		return (typeof(callback) == "function") ? callback(e, id, !check) : e;
	};
	command.add(cookie, id, func);
	a.addEventListener("click", func, false);
	if (check)
		span.setAttribute("checked", "checked");

/*
//real checkboxes
	let box = document.createElement("span"),
			labelNode = document.createElement("label"),
			checkbox = document.createElement("input"),
			checkboxId = "cb_" + id,
			suf = "",
			i = 1;
	checkbox.type = "checkbox";
	box.className = (typeof(className) == "undefined" ? "filter " : className + " ") + id;
	if (title)
		box.title = title[0];

	labelNode.textContent = label;
	box.appendChild(checkbox);
	box.appendChild(labelNode);
	
	while($("#" + checkboxId + suf).length)
	{
		suf = "_" + i++;
	}
	checkbox.addEventListener("change", func, false);
	checkbox.id = checkboxId + suf;
	checkbox.checked = check;
	labelNode.setAttribute("for", checkbox.id);
	$(box).insertBefore("#nu-showing");
*/
	$(".calendar").toggleClass(id, check);
	$("body").toggleClass(id, check);

	return a;
}

function rand(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function loop()
{
	if ((typeof(engines) == "undefined" || !engines.length) && --loo)
		return setTimeout(loop, 0);

	if (!loo)
		return;

	Settings.init();
	customLinksAdd();
})();


let func = function(event)
{
	Settings.init();

	// fix highlighting today would remove /u/user ..
	$( "#linkToday" ).click(function click(e)
	{
		e.stopPropagation();
		e.preventDefault();
		e.stopImmediatePropagation();
		loadArchiveFromPathname("#today", "#today");
		return false;  
	});

	let _today,
			showHidden = Settings.pref("showHidden") ? true : false;
			_assignColor = assignColor;

	/*
	work around for expand/collapse same series in one day
	*/
	window.assignColor = function assignColor ( seriesId, color, permanent )
	{
		let r = _assignColor(seriesId, color, permanent),
				css = $("#css_"+seriesId),
				html = css.html();

		if (html)
			css.html(html.replace(/(\s+)(\.activeOnly)([^\{]+)\{/, "$1$2$3:not(.multi),body:not(.collapseMulti) $2$3,$2 .day.expand $3,$2 .day.opened $3{"));

		return r;
	};
	/*
	fixing browser history inflating after each page refresh and prev/next history jump don't work
	*/
	var prevPath;
	//MS Edge get's /undefined in the address
	if (window.location.pathname.match(/\/undefined/))
	{
		history.go(-1);
		let path = window.location.href;
		history.go(1)
		history.replaceState({}, "", path);
		history.go(-1);
	}

	function loadArchiveFromPathname(originalPath,highlightSelector)
	{
		path = originalPath||document.location.pathname;
		var match = path.match(/^\/archive\/([0-9]+)-([0-9]+)$/);
		var ym = match && match.length == 3? (~~match[1]*12+~~match[2]-1) : ymToday;
	//start fix - browser history inflating after each page refresh
		if (originalPath && prevPath != originalPath)
		{
			prevPath = originalPath;
			history.pushState({originalPath:originalPath,highlightSelector:highlightSelector}, "", originalPath);
		}

	//end fix
		$("#archive-prev").attr("href", "/archive/" + ym2str(ym-1));
		$("#archive-next").attr("href", "/archive/" + ym2str(ym+1));
		$("body").toggleClass("archive", !!match&&match.length==3);
		$("#leaveArchive").text(ym>ymToday?"Leave future":"Leave archive");

		let whenDone = function(){
			// set title
			$("#archive-current").text((!!match&&match.length==3)?ym2str(ym):"Go waste your time");
			// highlight today with a happy yellow background
			$( "div.day[data-date='" + today.getFullYear() + pad2( today.getMonth() + 1 ) + pad2( today.getDate() ) + "']" ).addClass( "today" ).attr( "id", "today" );
			markSearchResults();

			var $hl = $(highlightSelector||".does-not-exist-and-never-will");
			if($hl.get().length>0){
				// blink
				for( var i = 0; i < 8; i++ ) $hl.animate( {"opacity":i%2}, 1 ).delay( 100 );

				// scroll to
				var val = function(){return $hl.offset().top-Math.max(document.documentElement.clientHeight, window.innerHeight || 0)/2;};
				$('html, body').animate({
							scrollTop: val()
					},{duration:500, step:function(top,info){
						info.end = val();
					}});
			}
	//injecting userscript function execution
			showPast(function()
			{
	//adding watched checkboxes
				$("div.day > div.entry").each(watched.attach);
	//collapse multiple entries of the same series in one day
				$("div.day").each(collapseMulti);
			});
			showHideLoad();
		};

		if(ymCurrent != ym)
		{
			$(".days").load("/_archive/" + ~~(ym/12) + "-" + ~~((ym%12)+1), function()
			{
				ymCurrent = ym;
				whenDone();
			});
		}
		else
		{
			whenDone();
		}
	}
	window.loadArchiveFromPathname = loadArchiveFromPathname;
	/*
	end fixing browser history inflating after each page refresh and prev/next history jump don't work
	*/

	//collapse multiple entries of the same series in one day
	let collapseMulti = function collapseMulti(i, day)
	{
		if (!$(day).find("div.entry > .title > span").length)
			return;

		if (day.list)
		{
			collapseMulti.setTitle(day.list, Settings.prefs.collapseMulti && !$(day).hasClass("opened") ? "_titleCollapsed" : "_titleOrig");
			return;
		}
		day.list = {};
		let list = {};
		day.addEventListener("mouseenter", function(e)
		{
			collapseMulti.mouseOver(e, day);
		}, true);
		day.addEventListener("mouseleave", function(e)
		{
			collapseMulti.mouseOut(e, day);
		}, true);

		$(day).find("div.entry").each(function(i, entry)
		{
			let id = entry.getAttribute("data-series-id");
			entry._title = $(entry).find(".title>span");
			entry._title._titleOrig = entry._title.text();
			if (list[id])
				$(entry).toggleClass("multi", true);
			else
			{
				list[id] = [];
			}

			list[id].push(entry);
		});
		for(let i in list)
		{
			if (list[i].length < 2)
				continue;

			list[i][0]._title._titleCollapsed = list[i][0]._title.text() + "-" + list[i][list[i].length - 1]._title.text().replace(/.* ([^ ]+)$/, "$1");
			$(list[i][0]).toggleClass("multif", true);

			day.list[i] = list[i][0]._title;
			if (Settings.prefs.collapseMulti)
				$(day.list[i]).html(day.list[i]._titleCollapsed);
		}
	};


	collapseMulti.setTitle = function(list, title)
	{
		for (let i in list)
			$(list[i]).html(list[i][title]);
	};

	collapseMulti.mouseOver = function(e, day)
	{
		if (e.target != day)
			return;

		day._type = "over";
		clearTimeout(day._collapseMultiTimer);
		if (Settings.prefs.animateExpand)
		{
			let func = function()
			{
				collapseMulti.animate(day, "expand", true, Settings.prefs.collapseMulti ? "_titleOrig" : "");
			};
			if (!$(day).hasClass("expand") && !$(day).hasClass("opened"))
			{
				func();
			}
			else
			{
				$(day).toggleClass("expand", true);
				if (!Settings.prefs.collapseMulti)
					return;

				collapseMulti.setTitle(day.list, "_titleOrig");
			}
		}
		else
		{
			$(day).toggleClass("expand", true);
			if (!Settings.prefs.collapseMulti)
				return;

			collapseMulti.setTitle(day.list, "_titleOrig");
		}
	};

	collapseMulti.mouseOut = function(e, day, id)
	{
		if (e.target != day)
			return;

		day._type = "out";
		day._collapseMultiTimer = setTimeout(function()
		{
			if (Settings.prefs.animateExpand)
			{
				collapseMulti.animate(day, "expand", false, Settings.prefs.collapseMulti && !$(day).hasClass("opened") ? "_titleCollapsed" : "")
			}
			else
			{
				$(day).toggleClass("expand", false);
				if (!Settings.prefs.collapseMulti)
					return;

				if (!$(day).hasClass("opened"))
					collapseMulti.setTitle(day.list, "_titleCollapsed");
			}
		}, 300)
	};

	collapseMulti.animateDone = function(e, n)
	{
		e.elem.style.overflow = "";
		e.elem.style.height = "";
		e.elem.style.display = "";
		e.elem.style.textOverflow = "";
		$(e.elem).find(".title").css("white-space", "");
	};
	collapseMulti.animate = function(day, cl, val, title)
	{
		if (!day._animatingQuie)
			day._animatingQuie = {};

		if (day._animating)
		{
			clearTimeout(day._animatingQuie[cl+val]);
			return day._animatingQuie[cl+val] = setTimeout(function()
			{
				collapseMulti.animate(day, cl, val, title);
			});
		}

		let type = day._type;
		if (Settings.prefs.collapseMulti)
			clearTimeout(day._collapseMultiTimer);

		let clone = day.cloneNode(true);
		$(clone).toggleClass(cl, val);
		if (title)
		{
			clone.list = {};
			for (let i in day.list)
			{
				clone.list[i] = $($(clone).find(".multif[data-series-id=" + i + "]")[0]);
				clone.list[i]._titleCollapsed = day.list[i]._titleCollapsed;
				clone.list[i]._titleOrig = day.list[i]._titleOrig;
			}
			collapseMulti.setTitle(clone.list, title);
		}
		clone.style.visibility = "hidden";
		clone.style.position = "absolute";
		clone.style.top = 0;
		clone.style.width = day.clientWidth + "px";
		$(clone).toggleClass("clone", true);
		day.parentNode.appendChild(clone);
		let n = 0;
		collapseMulti.setTitle(day.list, title);
		let stopped = false;
		day._animating = true;
		$(clone).find(".entry").each(function(i, c)
		{
			n++;
			let e = $(day).find(".entry")[i];
			e.style.height = (e.clientHeight ? e.clientHeight : 1) + "px";
			e.style.overflow = "hidden";
			e.style.textOverflow = "unset";
			e.style.display = "block !important";
			$(e).find(".title").css("white-space", "normal");
			$(e).show();
			$(e).css("display", "block !important");
			if (!$(e).is( ":visible" ))
			{
				e.style.setProperty("display", $(c).css("display"), "important");
			}
			$(e).stop(true);
			$(e).animate({
				height: c.clientHeight,
			},
			{
				duration: 200,
				progress: function(e)
				{
					if (day._type != type)
					{
						e.stop(true);
						stopped = true;
					}
				},
				always: function(e)
				{
					if (!--n)
					{
						if (!stopped)
							$(day).toggleClass(cl, val);

						day._animating = false;
					}
					collapseMulti.animateDone(e);
				}
			});
		});
	};

	collapseMulti.onOff = function(e, id, checked)
	{
		Settings.prefs.collapseMulti = checked;
		$("div.day").each(collapseMulti);
		Settings.callback(e, id, checked);
	};

	//fixing prev/next history jump does nothing
	$(window).on("popstate", function(e)
	{
		let state = e.originalEvent.state;
		prevPath = (state ? state.originalPath : undefined) || e.target.location.pathname;

		loadArchiveFromPathname(prevPath, state ? state.highlightSelector : undefined);
	});

	function showPast(callback)
	{

	// hide all past days
		let	d = new Date();

		_today = $("div.day[data-date='" + d.getFullYear() + pad2((new Date()).getMonth() + 1) + pad2((new Date()).getDate()) + "']");

		if (!_today || $(".archive").length)
		{
			if (callback)
				return callback();

			return;
		}

		let	firstDay = $(".days").children().first(),
				firstDate = firstDay.attr("data-date");

		if (!firstDay.length)
			return;

		let div = [document.createElement("div")],
				y = firstDate.slice(0, 4),
				m = firstDate.slice(4, 6);

		if (parseInt(firstDate.slice(6, 8)) < 15)
			div.push(document.createElement("div"));

		let c = div.length;
		for (let n = 0; n < div.length; n++)
		{
			let d = new Date(y, m - n - 1);
			$(div[n]).load("/_archive/" + d.getFullYear() + "-" + pad2(d.getMonth() + 1), pastLoadDone);
		}
		function pastLoadDone()
		{
			if (--c > 0)
				return;

			let found = false,
					func = function (i, o)
					{
						if ($(this).attr("data-date") == firstDate)
							found = true;

						if (found)
							$(this).remove();
					};
			for (let n = 0; n < div.length; n++)
			{
				found = false;
			//remove any duplicate dates that already exist;
				$(div[n]).children().each(func);
				$(div[n]).children().prependTo($("div.days"));
			}
			pastLoaded();
			if (callback)
				callback();
		}
	}//showPast()

	function pastLoaded()
	{
		let	hasLoaded = $("#pastWeeks").length,
				stop = false;

		$("div.days").children().each(function(i, o)
		{
			if ($(this).is(_today))
			{
				$(this).attr("today", "true");
				stop = true;
			}
			if (stop)
			{
				$(this).removeClass("past");
			}
			else
			{
				$(this).addClass("past");
			}
		});

		let week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
				match = $(_today).find(".date").text().toLowerCase().match(/([^,]{3})/),
				daysNum = match ? week.indexOf(match[1]) : -1;

		let prev = _today.prev();
		//there is no identication of which week a day belong to, so we must make sure that previous days of current week don't count as previous week.
		if (daysNum > 0)
		{
			for(let i = 0; i < daysNum && prev; i++)
			{
				prev.removeClass("past");
				prev = prev.prev();
			}
		}
		//remove more then 4 weeks worth of days.
		for(let i = 0; i < 27 && prev; i++)
		{
			prev = prev.prev();
		}
		if (prev)
		{
			let found = false,
					func = function(i, o)
					{
						if (found)
							return;

						if ($(this).is(prev))
							found = true;
						else
							$(this).remove();
					};
			$("div.days").children().each(func);
		}
		let	daysPast = $('div.past'),
				weeks = parseInt(Settings.pref("weeks")),
				weeksMax = Math.round((daysPast.length) / 7);//how many past weeks do we have available?

		if (isNaN(weeks))
			weeks = readCookieRaw("p") == "1" ? weeksMax : 0;

		if (weeks > weeksMax)
			weeks = weeksMax;

		//main function that shows/hides past days
		function showWeeks()
		{

			//get week numbers from dropdown
			let weeks = parseInt($("#pastWeeks").val());

			//just some sanity check
			if (weeks * 7 > daysPast.length)
				weeks = weeksMax;

			if (weeks < 1)
				weeks = 0;

			for(let i = weeksMax; i > 0; i--)
				$( "div.calendar" ).toggleClass("showPast" + i, (weeks >= i));

			Settings.pref("weeks", weeks);
		}
		//add new class pastNN to each past day, where NN is a week number.
		let func = function(i)
		{
			$(this).addClass("past" + (Math.ceil((daysPast.length - i) / 7 % (weeksMax + 1))));
		};
		daysPast.each(func);

		if (!hasLoaded)
		{
			//create dropdown menu with number of available past weeks
			let dropdown = document.createElement("select");
			dropdown.id = "pastWeeks";

			for(let i = 0; i <= weeksMax; i++)
			{
				let option = document.createElement("option");
				option.value = i;
				option.text = i;
				option.selected = (weeks == i);
				dropdown.appendChild(option);
			}

			//add event listener to dropdown
			$(dropdown).change(showWeeks);

			let span = document.createElement("span");
			span.id = "past-weeks";
			span.appendChild(document.createTextNode("Show past weeks:"));
			span.appendChild(dropdown);
			//insert our dropdown and new text into document
			$(".calendar").prepend(span);

			//hide "Show/Hide past month" links
			$("#past-showing").toggle(true);
			//togglePast();//make sure we disable "Show past month"
			$("#past-showing").toggle(false);
			$("#past-hidden").toggle(false);
		}
		showWeeks();
	}//pastLoaded()

	var prevOpened = null,
			prevParentOpened = null,
			prevParentOpenTimer = null;
	//adding attribute "opened" to the entry allows us show/hide things from CSS based on entry state
	$("body").on("click", "div.entry div.title", function(e)
	{
		if (e.isTrigger)
			return;

		let $entry = $( this ).parent(),
				parent = $entry.parent();

		if (prevOpened)
		{
			let po = prevOpened,
					ppo = prevParentOpened;

			prevParentOpenTimer = setTimeout(function()
			{
				collapseMulti.setTitle(ppo[0].list, Settings.prefs.collapseMulti && !ppo.hasClass("expand")? "_titleCollapsed" : "_titleOrig");

				po.parent().toggleClass("opened", false);
			}, 400);

			prevOpened.attr("opened", "");
			setTimeout(function()
			{
				po.removeAttr("opened");
			}, 300);
			prevOpened = null;
		}


		if ($entry.attr("opened") === undefined)
		{
			$entry.attr("opened", "");
			parent.toggleClass("opened", true);
			collapseMulti.setTitle(parent[0].list, "_titleOrig");
	//idealy this should've been done via "on complete" function submitted for slideUp/slideDown
			if (prevParentOpened && parent[0] == prevParentOpened[0])
				clearTimeout(prevParentOpenTimer);

			setTimeout(function()
			{
				$entry.attr("opened", "1");
			}, 300);

			prevParentOpened = parent;
			prevOpened = $entry;
		}
	});

	//create stylesheet. A little trick to have multi-line text in javascript
	let	style = document.createElement("style"),
			css = multiline(function(){/*
	#account-overview > span.nu > svg
	{
		width: 1.2em;
		height: 1.2em;
		vertical-align: top;
		margin-right: 0.3em;
		fill: #3e3e3e; 
	}
	svg
	{
		width: 1em;
		height: 1em;
		vertical-align: top;
	}
	body.userViewer .importColors,
	body.userViewer .importColorsIcon,
	body.userViewer .clearColorsIcon,
	body.userViewer .clearColors,
	body.userViewer .colors
	{
		display: none !important;
	}
	div.showPast1 div.past1,
	div.showPast2 div.past2,
	div.showPast3 div.past3,
	div.showPast4 div.past4,
	div.showPast5 div.past5,
	div.showPast6 div.past6,
	div.showPast7 div.past7,
	div.showPast8 div.past8,
	div.showPast9 div.past9
	{
		display: block;
	}

	/*
	div.calendar.searching > #past-weeks
	{
		text-decoration: line-through;
	}
	*//*
	#past-weeks
	{
		margin-left: 0.2%;
	}

	#pastWeeks
	{
		margin-left: 0.5em;
	}

	.archive #past-weeks
	{
		text-decoration: line-through;
	}


	/* today column border *//*
	div.today
	{
		border-color: #FFC800;
	}


	/* higlighted title under cursor *//*
	div.title > input[type="checkbox"]:hover + div.title,
	div.title:hover
	{
		background-color: #ffffd5;
		-webkit-transition: background 0s;
		color: black;
	}

	/* highlight opened entry *//*
	.entry[opened]
	{
		border: 1px solid black;
	}

	div[opened] + div
	{
		border-top: 0;
	}

	.engines input[type="checkbox"]
	{
		width: unset !important;
		vertical-align: top;
	}
	.engines img
	{
		vertical-align: text-bottom !important;
	}

	div.entry
	{
		float: left;
		width: 100%;
	}
	div.entry,
	.pointer,
	.date
	{
		cursor: pointer;
	}

	.filter
	{
		margin-left: 1em;
		cursor: pointer;
	}

	.past,
	.showhide0,
	span[checked] > .checkoff,
	span:not([checked]) > .checkon,
	/*separate showing searies and season premiere*//*
	div.calendar.showNew div.entry:not(.series-premiere):not(.searchResult),
	div.calendar.showReturn div.entry:not(.season-premiere):not(.searchResult)
	{
		display: none;
	}


	/*separate showing searies and season premiere*//*
	#nu-showing,
	#nu-hidden,
	#selected-only-hidden
	{
		display: none !important;
	}

	div.calendar.showNew div.entry.series-premiere:not(.searchResult),
	div.calendar.showReturn div.entry.season-premiere:not(.searchResult)
	{
		display: block;
	}


	/*Search field overlaps text below in Firefox*//*
	#searchFieldContainer
	{
		background-color: unset;
	}


	/*Watched*//*
	body:not(.enableWatched) div.title > input[type="checkbox"]
	{
		display: none;
	}

	body.enableWatched div.entry[watched] > div.title
	{
		text-decoration: line-through;
	}

	div.title > input[type="checkbox"]
	{
		vertical-align: middle;
		margin: 1px 3px 0 1px;
		height: 1em;
	}

	#searchResults div.title > input[type="checkbox"]
	{
		width: unset;
		float: left;
	}

	#searchResults > div.entry:last-child
	{
		margin-bottom: 1em;
	}
	/*Past related*//*
	.past
	{
		opacity: 0.5;
	}

	body.collapseMulti div.day:not(.expand):not(.opened) div.entry.multi
	{
		display: none !important;
	}

	body.collapseMulti div.day:not(.expand):not(.opened) div.entry.multif div.title:after
	{
		content: "";
		background-color: black;
		border-left: 1px solid white;
	}

	body.collapseMulti div.day:not(.expand):not(.opened) div.entry.multif div.title:after
	{
		position: absolute;
		height: 100%;
		right: -1px;
		top: 0;
		width: 3px;
	}
	/*Account popup*//*
	#settings-popup .content h4,
	#manage-links-popup .content h4,
	#account-popup-content .content h4
	{
		margin-top: 1em;
		margin-bottom: 1em;
		display: inline-block;
	}
	#settings-popup .header h4,
	#manage-links-popup .header h4
	{
		margin: 0.2em 0 0 0;
	}
	#settings-popup .content,
	#manage-links-popup .content,
	#account-popup-content .content
	{
		padding-top: 0;
		padding-bottom: 1em;
	}
	#settings-popup-content .content > div > *:first-child,
	#account-popup-content .content > div > *:first-child
	{
		width: 1.6em;
		display: inline-block;
		vertical-align: bottom;
	}

	#settings-popup,
	#manage-links-popup
	{
		position: absolute;
		z-index: 1234;
		top: 50px;
		left: 4.7%;
		width: 1px;
		display: none;
	}
	#settings-popup-content,
	#manage-links-popup-content
	{
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: #ffff00;
		border: 1px dotted black;
		width: 300px;
		min-height: 10px;
	}
	#settings-popup-content div.back,
	#manage-links-popup-content div.back
	{
		font-size: 1.2em;
		width: 1.3em;
		height: 1.3em;
		cursor: pointer;
		position: absolute;
		top: 5px;
		left: 5px;
	}
	.close > svg:first-child
	{
		display: none;
	}
	#settings-popup-content div.close,
	#manage-links-popup-content div.close
	{
		font-size: 1.2em;
		width: 1.3em;
		height: 1.3em;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		padding: 5px;
	}
	#settings-popup .header,
	#manage-links-popup .header
	{
		background-color: #7FFFFF;
		padding: 5px;
		text-align: center;
		height: 1.5em;
	}
	#settings-popup .content,
	#manage-links-popup .content,
	#engine-edit
	{
		padding: 3px 10px;
	}
	#engine-edit > div:not(#engine-res),
	#manage-links-popup .content > div:not(#engine-res)
	{
		display: table-row;
		white-space: nowrap;
	}
	#engine-edit > div:not(#engine-res) > *,
	#manage-links-popup .content > div:not(#engine-res) > *
	{
		display: table-cell;
		vertical-align: middle;
		margin: 2px 4px 2px 1px;
	}
	#manage-links-popup .content > div:not(#engine-res) > img
	{
		vertical-align: bottom;
		display: list-item;
	}

	#manage-links-popup .content > div:not(#engine-res) > filter
	{
		padding-left: 0.3em;
	}
	#manage-links-popup .content > div:not(#engine-res) > .edit,
	#manage-links-popup .content > div:not(#engine-res) > .del
	{
		cursor: pointer;
		margin: 3px;
		position: relative;
		top: -0.1em;
		font-size: 80%;
		padding: 3px;
		display: inline-block;
		height: 1em;
		float: left;
	}
	#settings-popup-content div.back:hover,
	#manage-links-popup-content div.back:hover,
	#manage-links-popup .content > div.dragging:not(.hide),
	#manage-links-popup .content:not(.dragging) > div:not(#engine-res):hover
	{
		background-color: #FFFFB7;
		outline: 1px dotted grey;
	}
	.close:hover > svg
	{
		background-color: #e81123;
	}
	.close:hover > svg:last-child
	{
		display: none;
	}
	.close:hover > svg:first-child
	{
		fill: #FFFFFF;
		display: inline-block;
	}

	#manage-links-popup .content > div.dragging.hide > *
	{
		opacity: 0;
	}
	#manage-links-popup .content > div.dragging.hide
	{
		outline: 1px dashed grey;
	}
	#manage-links-popup .content > div:not(.def) > a.link:after
	{
		content: "*";
		text-decoration: none;
		display: inline-block;
		color: red;
		margin-left: 0.2em;
	}
	#engine-edit > div:not(#engine-res) > label
	{
		text-align: right;
	}
	#engine-edit > div:not(#engine-res) > input
	{
		width: 95%;
		margin-left: 0.5em;
		padding-right: 1.5em;
	}
	#engine-edit > div:not(#engine-res) > select
	{
		width: 1.5em;
		position: relative;
		left: -1.8em;
		margin: 0;
		padding: 0;
	}
	#engine-res
	{
		overflow-x: auto;
		overflow-y: hidden;
		min-height: 18px;
		display: block !important;
		margin-left: 0.5em !important;
	}
	#engine-hidden
	{
		display: none !important;
	}
	#engine-res > *
	{
		vertical-align: middle;
		display: inline-block;
		margin: 0 4px 0 0;
	}
	#engine-submit,
	#engine-reset
	{
		font-size: 90%;
		display: inline-block !important;
		width: 50% !important;
	}
	#engine-reset
	{
		margin-left: 1em;
	}
	div.reset
	{
		display: none !important;
	}
	#manage-links-popup[changed] div.reset
	{
		display: block !important;
	}
	#sort-reset
	{
		display: block !important;
		text-align: right;
		margin-right: 0.5em;
		margin-bottom: 0.5em;
	}
	#engine-edit
	{
		 border-top: 1px dotted;
	}
	#manage-links-popup .nu,
	#manage-links-popup .nu
	{
		vertical-align: bottom;
		font-size: 1.3em;
	}
	#manage-links-popup-content .content > div.update
	{
		-webkit-transition:background-color 0.4s ease-in;
		-moz-transition:background-color 0.4s ease-in;
		-o-transition:background-color 0.4s ease-in;
		transition:background-color 0.4s ease-in;
	}

	[draggable]
	{
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		user-select: none;
		/* Required to make elements draggable in old WebKit *//*
		-khtml-user-drag: element;
		-webkit-user-drag: element;
	}
	[draggable] .dndh
	{
		cursor: move;
		margin: 0 0.5em 0 0 !important;
		font-size: 1.2em;
		float: left;
		position: relative;
		top: -2px;
		padding-left: 3px;
		padding-right: 3px;
	}

	#settings-popup-content > .content > *
	{
		margin: 3px 0 3px 0;
		display: table;
	}

	.user > svg
	{
		margin-right: 0.3em;
	}

/*fixing menu wrapping too soon*//*
	@media screen and (max-width: 1000px)
	{
		body #menu li,
		body:not(.userViewer) #menu li
		{ display: inline-block; }
		body #menu li .nu,
		body:not(.userViewer) #menu li .nu
		{ min-width: unset; }
		body #account-popup,
		body:not(.userViewer) #account-popup
		{ top: 50px; }
	}
	#menu .nu
	{
		font-weight: bold;
	}
	#menu .close
	{
		font-size: 0.9em;
		position: relative;
		top: -0.6em;
		cursor: pointer;
		padding: 0.3em;
	}
	#menu .close > svg
	{
		width: 0.9em;
		height: 0.9em;
		position: unset;
	}

	.user > svg,
	.back > svg,
	.content > div > span > svg
	{
		width: 1.3em;
		height: 1.3em;
		vertical-align: bottom;
	}
	#searchResults > div.entry > div.title,
	body:not(.shortTitle) div > div.entry > div.title,
	body.shortTitle.shortTitleExpand div.day.expand > div.entry > div.title,
	body.shortTitle div.day.opened > div.entry > div.title
	{
		display: flex;
	}
	body.shortTitle:not(.shortTitleExpand) div.day.expand:not(.opened) > div.entry > div.title > input[type="checkbox"],
	body.shortTitle div.day:not(.expand):not(.opened) div.title > input[type="checkbox"]
	{
		float: left;
	}
	body.shortTitle:not(.shortTitleExpand) div.day.expand:not(.opened) > div.entry > div.title,
	body.shortTitle div.day:not(.expand):not(.opened) > div.entry > div.title
	{
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	div.spacer
	{
		height: 0;
		border-bottom: 1px dotted silver;
		margin-top: 0.5em !important;
		margin-bottom: 0.5em !important;
		display: block !important;
	}
	a.parentheses,
	a.file
	{
		margin-left: 1em;
	}
	a.parentheses:before,
	a.file:before
	{
		text-decoration: none;
		display: inline-block;
		content: "(";
	}
	a.parentheses:after,
	a.file:after
	{
		text-decoration: none;
		display: inline-block;
		content: ")";
	}

	#searchResults > .info
	{
		margin-bottom: 0.7em;
	}
	
	#searchResults > .info > small
	{
		vertical-align: text-bottom;
	}
	#searchResults > .info > small > span:not(.info)
	{
		position: absolute;
		right: 1em;
	}
	span.button
	{
		cursor: pointer;
		background-color: #DDDDDD;
		border-radius: 4px;
		padding: 3px;
	}
	
/* fix search field box covers text on bottom *//*
	#searchFieldContainer
	{
		height: 0;
	}
*/});//css

	style.innerHTML = css;
	$("head").append(style);


	//fix incorrect initial color in colorpicker
	//fix clicking outside of colorpicker saves selected color instead of discarding
	//fix close colorpicker by pressing escape button

	var editingSeriesId = -1;
	var clone = $("#colorPickerHolder").clone();
	$("#colorPickerHolder").remove();
	var picker = clone.colorPicker(
	{
		animationSpeed: 0,
		opacity: false,
		buildCallback: function($elm)
		{
			let cp = this;
			$elm
				.append('<div class="cp-disp"><input type="button" value="save"> <input type="button" value="cancel"></div>')
				.on( "click", "input", function()
				{
					if (!this.value)
						return;

					if (this.value == 'save')
					{
						assignColor( editingSeriesId, "#" + cp.color.colors.HEX, true );
						editingSeriesId = -1;
					}
					cp.toggle();
				});
			$("body").on("keydown", function(e)
			{
	//ESC(27) = cancel
				if (e.which == 27 && $elm.is(":visible"))
					cp.toggle();
			});
		},
		cssAddon: ".cp-disp{ padding-bottom: 2px; clear:both; }",
		renderCallback: function($elm, toggled) {
			var colors = this.color.colors;
			// on show
			if( toggled === true ){
			}
			// on change
			else if( toggled === undefined ){
	//preview new color
				assignColor( editingSeriesId, "#" + colors.HEX, false );
			}
			// on hide
			else if( toggled === false ){
	//restore entry color
				if( editingSeriesId > 0 )
					loadColor( editingSeriesId );

				editingSeriesId = -1;
				picker.detach().appendTo("body");
			}

		}
	}).attr("id", "colorPickerHolderNew"); //replace ID so it won't initialize in main.js

	$("body").off("click", ".picker");

	// now hook up the picker to the picker icons
	$("body").on("click", ".picker", function(e){
		if( !$(e.target).hasClass("picker") ) return;

		editingSeriesId = $(this).parents("[data-series-id]").data("series-id");
	//set initial color in colorpicker based on current entry or default to white
		picker.val(coalesce(DB.savedColors[editingSeriesId], "#ffffff"));
		picker.detach().appendTo(this).click();
	});

	function middleClick(e, search)
	{
		if (e.button != 1 && !(!e.button && e.ctrlKey) )
			return;

		e.stopPropagation();
		e.preventDefault();
		let parent,
				entry = true;
		if (search)
			parent = $(search);
		else if ($(this).is("div.title"))
			parent = $(this).parent();
		else
		{
			parent = $(this).parent().find("div.entry");
			entry = false;
		}
		let func = function(e)
		{
			let el = $(this),
					MONKEY_ID = encodeURIComponent( el.data("series-id") );
			if (!entry && !DB.getColor(MONKEY_ID))
				return;

	//		let title = el.children("div.title").text().replace("?", "").replace(/[0-9]+-[0-9]+-[0-9]+/, ""),
			let title = this._title && this._title._titleOrig ? this._title._titleOrig : el.children("div.title").text();
			title = title.replace("?", "").replace(/[0-9]+-[0-9]+-[0-9]+/, "");
	//				MONKEY = encodeURIComponent( title ),
			let MONKEY = encodeURIComponent( title.replace(/ E[0-9]+/g, "") ),
					MONKEY_N = encodeURIComponent( title.replace( /S[0-9]+E[0-9]+$/g, '' ) ),
					WIKI_TITLE = encodeURIComponent( el.data("series-source") );
			$.each( _engines, function( i, engine )
			{
				if (!$("body").hasClass("engine_" + cleanName(engine.host)))
					return;

				let href = engine.href
					.replace( "MONKEY_ID", MONKEY_ID )
					.replace( "MONKEY_N", MONKEY_N )
					.replace( "MONKEY", MONKEY )
					.replace( "{WIKI_TITLE}", WIKI_TITLE );

				href = fixLink(href, engine.name);
				window.open(href, (MONKEY + engine.name).replace(/ /g, "").replace(/%.{2}/g, ""));
			});
		};
		parent.each(func);
	}
	$("body").on("mousedown", "div.date,div.title", middleClick);

	let _markSearchResults = markSearchResults;
	window.markSearchResults = function markSearchResults()
	{
		if (showMyShows.box || showMyHidden.box)
			return

		let entries = $("#searchResults").find("div.entry");
		entries.each(watched.attach);
		setTimeout(function()
		{
			$("div.day").each(collapseMulti);
		});

		return _markSearchResults();
	};

	$("body").on("click", 'div.entry div.title>input[type="checkbox"]', function(e)
	{
		e.stopPropagation();
	});
	//sanitizing engine links
	$("body").on("click", "div.entry div.title", function(e)
	{
		if (e.isTrigger && !force)
			return;

		force = false;
		let obj = this;
		setTimeout(function()
		{
			let details = $(obj).parent().find(".details");
			if (!details.length || details[0].inited)
				return;

			details[0].inited = true;
			let showHideObj = document.createElement("a"),
					showId = $(obj.parentNode).attr("data-series-id"),
					show = document.createElement("span"),
					hide = document.createElement("span");

			show.innerHTML = "Show";
			show.className = "showhide0";
			hide.innerHTML = "Hide";
			hide.className = "showhide1";
			showHideObj.appendChild(show);
			showHideObj.appendChild(hide);
			showHideObj.appendChild(document.createTextNode(" this show"));

			showHideObj.className = "showhide";
			showHideObj.href = "#";
			showHideObj.addEventListener("click", function(e)
			{
				e.stopPropagation();
				e.preventDefault();
				showHide(parseInt(showId), 2);
			}, false);

			let list = $(obj).parent().find(".engines").append(showHideObj).children();
			for (let i = 0; i < list.length; i += 3)
			{
				let img = list[i],
						a = list[i+1],
						br = list[i+2],
						checkbox = document.createElement("input"),
						engine = window.engines[i/3] ? window.engines[i/3].host : img.src ? img.src.match(/\?domain=(.*)/)[1] : null,
						id = "engine_" + cleanName(engine),
						engineInfo = window.engines[enginesFind(engine)],
						domain = engineInfo ? getHost(engineInfo.href) : null;

				if (domain)
					img.src = "http://www.google.com/s2/favicons?domain=" + domain;

				$(img).toggleClass(id, true);
				$(a).toggleClass(id, true);
				$(br).toggleClass(id, true);
				$(checkbox).toggleClass(id, true);
				checkbox.engine = engine;
				checkbox.type = "checkbox";
				checkbox.title = "Open with middle click on title";
				checkbox.checked = enginesCheck(engine) != -1;
				img.parentNode.insertBefore(checkbox, img);
				if (a.className.indexOf("archive-link") != -1 && (showMyShows.box || showMyHidden.box))
				{
					$(a).toggleClass("archive-link", false);
					a.textContent = "Show all episodes";
					a.href = "javascript:search('info:" + showId + "');";
				}
				if (engine == "airdates.tv" || a.className == "showhide")
				{
					checkbox.style.visibility = "hidden";
					return;
				}
				a.href = fixLink(a.href, a.text);

				$(checkbox).on("click", "", function(e)
				{
					if (checkbox.checked)
						enginesAdd(checkbox.engine);
					else
						enginesRemove(checkbox.engine);

					$("input." + id).prop("checked", checkbox.checked);
				});

			};
		});
	});//$("body").on("click", "div.entry div.title", function(e)

	function fixLink(link, engine)
	{
		link = link.replace("%3F", "").replace(/[0-9]+-[0-9]+-[0-9]+(%20)?/, "").replace(/( |%20)E[0-9]+/, "");
		if (engine == "Piratebay")
			link = link.replace(/['"`!]/g, '');
		return link;
	}

	function showHideLoad()
	{

		if (showHideLoad.inited)
			return;

		$(".days").before(createCheckbox("showHidden", "Show hidden", Settings.prefs.showHidden ? true : false, Settings.callback));
		$(".days").before(createCheckbox("collapseMulti", "Collapse multiple", Settings.prefs.collapseMulti ? true : false, collapseMulti.onOff));
		for(let i = 0; i < _hidden.length; i++)
		{
			showHide(_hidden[i], 1);
		}
		showHideLoad.inited = true;


		let clearColors = $(".clearColors"),
				clearHidden = clearColors.clone(false),
				clearWatched = clearColors.clone(false);

		clearHidden.removeClass();
		clearHidden.addClass("clearHidden");
		clearHidden.html("Clear hidden");
		clearHidden.insertAfter(clearColors);
		clearWatched.removeClass();
		clearWatched.addClass("clearWatched");
		clearWatched.html("Clear watched");
		clearWatched.insertAfter(clearHidden);
		clearColors.after(" | ");
		clearHidden.after(" | ");
		clearHidden.on( "click", function()
		{
			let array = [];
			for(let i = 0; i < _hidden.length; i++)
				array.push(_hidden[i]);

			for(let i = 0; i < array.length; i++)
				showHide(array[i], 0);

			alert( "Done!" );
			return false;
		});
		clearWatched.on( "click", function()
		{
			watched._list = {};
			watched.save();
			$("div.entry").each(function(i, entry)
			{
				if (entry._input)
					watched.update(entry, false);
			});

			alert( "Done!" );
			return false;
		});
			$("body").off("click", ".exportColors");
			$("body").on( "click", ".exportColors", function(e)
			{
				e.stopImmediatePropagation();
				let str = exportGetColors();
				if (str)
						prompt( "This is the crazy text. \nYou can save it in a normal textfile and/or import it to another computer/browser.", str );
				else
						alert("Nothing to export");
				return false;
			});
	} //showHideLoad()
	DB.viewing = DB.username != DB.loggedInUsername;
	let ul = $("#menu").find("ul");
	if (DB.viewing)
	{
		ul.children("li:last-child").css("margin-right", "1.5em");
		let li = $(multiline(function(){/*
<li>Viewing as 
	<span class="user">
		<svg viewBox="0 0 24 24">
			<path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
		</svg>
	</span>
	<span class="nu"></span>
	<a class="close" href="*/}) + window.location.href.replace(/\/u\/[^?#]+/, "") + multiline(function(){/*">
		<svg viewBox="0 0 24 24">
			<path d="M19,3H16.3H7.7H5A2,2 0 0,0 3,5V7.7V16.4V19A2,2 0 0,0 5,21H7.7H16.4H19A2,2 0 0,0 21,19V16.3V7.7V5A2,2 0 0,0 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z"></path>
		</svg>
		<svg viewBox="0 0 24 24">
			<path d="M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"></path>
		</svg>
	</a>
</li>
*/})).appendTo(ul);

		li.find("span.nu").text(DB.username);
//fix auto wrap on small screen
		let width = li.prop("clientWidth");
		width = Math.round(width * 2 + 760 + width / 6);
		$("head").append("<style>@media screen and (max-width: " + width + multiline(function(){/*
px)
{
	body.userViewer #menu li:not(:nth-last-child(2)):not(:last-child){ display: block; }
	body.userViewer #menu li .nu{ min-width: 15px; }
	body.userViewer #account-popup,
	body.userViewer #settings-popup,
	body.userViewer #manage-links-popup
	{ top: 80px; }
}
</style>*/}));
	}
	else
	{
		setTimeout(function()
		{
		let li = ul.children().last();
		let width = li.prop("clientWidth");
		width = Math.round(width * 2 + 600 + width / 6);
		$("head").append("<style>@media screen and (max-width: " + width + multiline(function(){/*
px)
{
	body:not(.userViewer) #menu li{ display: block; }
	body:not(.userViewer) #menu li .nu{ min-width: 15px; }
	body:not(.userViewer) #account-popup,
	body:not(.userViewer) #settings-popup,
	body:not(.userViewer) #manage-links-popup
	{ top: 80px; }
}
</style>*/}));
});
	}
if (!DB.loggedInUsername)
{
	//monkey
	$("#account-overview").find("span.nu")[0].innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" style="height: 1.2em; width: 1.2em; vertical-align: middle;"><circle style="fill:#5d433f;" cx="66.06" cy="222.97" r="66.06"/><circle style="fill:#f7b189;" cx="66.06" cy="222.97" r="41.29"/><circle style="fill:#5d433f;" cx="445.94" cy="222.97" r="66.06"/><circle style="fill:#f7b189;" cx="445.94" cy="222.97" r="41.29"/><path style="fill:#543e3b;" d="M442.589,262.049c-8.366-14.436-13.169-30.655-13.169-47.34v-0.001c0-72.373-44.364-134.33-107.355-160.318V24.774l-41.29,16.516l-8.258-33.032c-21.781,7.261-40.361,22.498-54.356,37.298c-77.557,17.283-135.58,86.39-135.58,169.154c0,16.685-4.803,32.904-13.169,47.34c-12.72,21.948-19.863,46.482-19.863,72.402c0,93.496,92.431,169.29,206.452,169.29s206.452-75.794,206.452-169.29C462.452,308.532,455.308,283.997,442.589,262.049z"/><path style="fill:#543e3b;" d="M140.387,364.043c0-30.24,7.143-58.864,19.863-84.469c8.367-16.841,13.169-35.764,13.169-55.23c0-84.035,43.969-155.956,106.493-186.502l-7.396-29.584c-21.781,7.261-40.361,22.498-54.357,37.298C140.604,62.839,82.581,131.946,82.581,214.71c0,16.685-4.802,32.904-13.169,47.34c-12.72,21.948-19.863,46.482-19.863,72.402c0,75.465,60.232,139.37,143.415,161.223C160.282,460.734,140.387,414.619,140.387,364.043z"/><path style="fill:#f7b189;" d="M256,470.71c68.412,0,123.871-44.367,123.871-99.097c0-11.354-2.414-22.245-6.835-32.386c-6.41-14.707-4.228-31.587,6.07-43.889c13.134-15.691,19.908-36.877,16.333-59.635c-4.91-31.259-30.182-56.486-61.448-61.353c-23.892-3.719-46.037,3.968-61.903,18.439c-4.51,4.113-10.3,6.17-16.087,6.17c-5.79,0-11.581-2.056-16.091-6.17c-15.866-14.471-38.011-22.158-61.903-18.439c-31.266,4.866-56.537,30.094-61.448,61.353c-3.575,22.757,3.199,43.943,16.333,59.635c10.298,12.303,12.48,29.182,6.07,43.889c-4.42,10.142-6.835,21.033-6.835,32.386C132.129,426.342,187.588,470.71,256,470.71z"/><path style="fill:#f7b189;" d="M132.129,371.612c0,18.522,6.468,35.795,17.524,50.625c-5.938-18.411-9.266-37.916-9.266-58.195c0-30.24,7.143-58.864,19.863-84.469c8.367-16.841,13.169-35.764,13.169-55.23c0-17.307,1.96-34.056,5.468-50.08c-0.295,0.042-0.583,0.04-0.879,0.086c-31.266,4.866-56.536,30.094-61.448,61.352c-3.575,22.758,3.2,43.944,16.333,59.635c10.298,12.302,12.481,29.181,6.071,43.889C134.543,349.368,132.129,360.259,132.129,371.612z"/><g><path style="fill:#5D5360;" d="M239.476,330.323c-1.242,0-2.5-0.278-3.685-0.871l-16.516-8.258c-4.081-2.04-5.734-7-3.694-11.081c2.048-4.081,7-5.734,11.081-3.694l16.516,8.258c4.081,2.04,5.734,7,3.694,11.081C245.419,328.653,242.508,330.323,239.476,330.323z"/><path style="fill:#5D5360;" d="M272.524,330.323c-3.032,0-5.944-1.669-7.395-4.565c-2.04-4.081-0.387-9.04,3.694-11.081l16.516-8.258c4.073-2.04,9.032-0.387,11.081,3.694c2.04,4.081,0.387,9.04-3.694,11.081l-16.516,8.258C275.024,330.044,273.766,330.323,272.524,330.323z"/></g><path style="fill:#4B3F4E;" d="M182.319,363.355c-5.001,0-8.941,4.431-8.248,9.384c5.126,36.617,39.853,64.938,81.929,64.938c42.077,0,76.803-28.321,81.929-64.938c0.693-4.953-3.247-9.384-8.248-9.384H182.319z"/><path style="fill:#E6646E;" d="M208.417,424.038c13.457,8.563,29.849,13.639,47.583,13.639s34.126-5.076,47.583-13.639c-5.966-20.666-25.063-35.909-47.583-35.909S214.383,403.371,208.417,424.038z"/><path style="fill:#4B3F4E;" d="M181.677,272.516L181.677,272.516c-13.682,0-24.774-11.092-24.774-24.774v-8.258c0-13.682,11.092-24.774,24.774-24.774l0,0c13.682,0,24.774,11.092,24.774,24.774v8.258C206.452,261.424,195.36,272.516,181.677,272.516z"/><path style="fill:#5D5360;" d="M181.677,214.71v28.903c0,6.841,5.546,12.387,12.387,12.387s12.387-5.546,12.387-12.387v-4.129C206.452,225.801,195.36,214.71,181.677,214.71z"/><circle style="fill:#FFFFFF;" cx="181.68" cy="231.23" r="8.258"/><path style="fill:#4B3F4E;" d="M330.323,272.516L330.323,272.516c-13.682,0-24.774-11.092-24.774-24.774v-8.258c0-13.682,11.092-24.774,24.774-24.774l0,0c13.682,0,24.774,11.092,24.774,24.774v8.258C355.097,261.424,344.005,272.516,330.323,272.516z"/><path style="fill:#5D5360;" d="M330.323,214.71v28.903c0,6.841,5.546,12.387,12.387,12.387s12.387-5.546,12.387-12.387v-4.129C355.097,225.801,344.005,214.71,330.323,214.71z"/><circle style="fill:#FFFFFF;" cx="330.32" cy="231.23" r="8.258"/><path style="fill:#FF8087;" d="M256,437.677c2.792,0,5.538-0.169,8.258-0.415v-16.101c0-4.56-3.694-8.258-8.258-8.258s-8.258,3.698-8.258,8.258v16.101C250.462,437.508,253.208,437.677,256,437.677z"/></svg>';
}

	//fix when removing color it still saves it in database as #FFFFFF
	window.DB._setColor = window.DB.setColor;
	window.DB.setColor = function setColor(id, c)
	{
		if (c == "#FFFFFF")
			c = "";

		if (c)
			DB.infoAdd(id);
		else if (_hidden.indexOf(id) == -1)
			DB.infoRemove(id);
		if (showMyShows.box)
			showMyShows();
		else if (showMyHidden.box)
		{
			showMyHidden();
		}

		this._setColor(id, c);
	};

	//hiding old combined checkboxes
	$( "#nu-showing" ).toggle(false);
	$( "#nu-hidden" ).toggle(false);
	//add new separate checkboxes
	createCheckbox("showNew", "New shows", Settings.prefs.showNew ? true : false, Settings.callback);
	createCheckbox("showReturn", "Returning shows", Settings.prefs.showReturn ? true : false, Settings.callback);

	//replacing existing "my shows" checkboxes with ours
	let _toggleSelectedOnly = window.toggleSelectedOnly,
			_updateSelectedOnly = window.updateSelectedOnly;

	window.toggleSelectedOnly = function(){};
	window.updateSelectedOnly = function(){};
	$("#selected-only-showing").toggle(false);
	$("#selected-only-hidden").toggle(false);
	createCheckbox("activeOnly", (DB.viewing ? DB.username + " user's" : "My") + " shows", "s", function(e, id, checked){}, [$("#selected-only-hidden").prop("title")]);

	//fix auto clear search field on click
	setTimeout(function()
	{
		$(document).off("click", ".onX, .x").on('touchstart click', '.onX', function( ev )
		{
			ev.preventDefault();
			$(this).removeClass('x onX').val('').change();
		});
	//fix no X button after page refresh and browser auto fill search bar with previous text
		$('input.clearable').trigger("input");
	});



	//injecting userscript function execution
		showPast(function()
		{
	//adding watched checkboxes
			$("div.day > div.entry").each(watched.attach);
	//collapse multiple entries of the same series in one day
			$("div.day").each(collapseMulti);
		});
		showHideLoad();

	//list of user's shows
	DB.infoNameClean = function(entry)
	{
		let title = entry._title && entry._title._titleOrig ? entry._title._titleOrig : $(entry).find("div.title").text();
		return title.substring(0, title.lastIndexOf(" "));
	};

	DB.infoSave = function()
	{
		ls("info", DB.info);
	};

	DB.infoAdd = function(id, name, nosave)
	{
		if (typeof(name) == "undefined")
		{
			return DB.infoAdd(id, DB.infoGet(id), nosave);
		}
		else if (!name)
		{
			setTimeout(function()
			{
				DB.infoLoad(id);
			}, rand(100, 2000));
			return;
		}
		DB.info[id] = name;
		if (!nosave)
			DB.infoSave();
	};

	DB.infoRemove = function(id)
	{
		delete DB.info[id];
		DB.infoSave();
	};

	DB.infoGet = function(id)
	{
		let entry = $('div.days div[data-series-id="' + id + '"]').first()[0];
		if (entry)
			return [DB.infoNameClean(entry), entry.getAttribute("data-series-source")];

		return null;
	};

	DB.infoLoad = function(id)
	{
		let obj = document.createElement("div");
		$(obj).load("/s?"+$.param({q:"info:" + id}), function(e)
		{
			let title = $(obj).find("b").first().text();
			title = title.substring(0, title.lastIndexOf("(") - 1);
			if (title)
				DB.infoAdd(id, [title, $(obj).find(".entry").attr("data-series-source")]);
		});
	};

	function showMyShows(e)
	{
		if (!DB.infoLoaded)
		{
			setTimeout(showMyShows, 100);
			return;
		}
		$(".entry").removeClass("searchResult");
		$("#searchStatus").css("visibility","hidden");
		let list = [];

		for (let i in DB.savedColors)
		{
			if (!DB.info[i])
				continue;

//http://runtime-era.blogspot.com/2011/11/grouping-html-hex-colors-by-hue-in.html
			/* Get the hex value without hash symbol. */
			let hex = DB.savedColors[i].substring(1);
			/* Get the RGB values to calculate the Hue. */
			let r = parseInt(hex.substring(0,2),16)/255,
					g = parseInt(hex.substring(2,4),16)/255,
					b = parseInt(hex.substring(4,6),16)/255;

			/* Getting the Max and Min values for Chroma. */
			let max = Math.max.apply(Math, [r,g,b]),
					min = Math.min.apply(Math, [r,g,b]);

			/* Variables for HSV value of hex color. */
			let chr = max-min,
					hue = 0,
					val = max,
					sat = 0;

			if (val > 0)
			{
				/* Calculate Saturation only if Value isn't 0. */
				sat = chr/val;
				if (sat > 0)
				{
					if (r == max)
					{ 
						hue = 60 * (((g - min) - (b - min)) / chr);
						if (hue < 0)
							hue += 360;
					}
					else if (g == max)
					{ 
						hue = 120 + 60 * (((b - min) - (r - min)) / chr); 
					} else if (b == max)
					{ 
						hue = 240 + 60 * (((r - min) - (g - min)) / chr); 
					}
				}
			}
			
			/* Modifies existing objects by adding HSV values. */
			list[list.length] = {
				id: i,
				hex: hex,
				hue: hue,
				sat: sat,
				val: val,
				lum: (r * 299 + g * 587 + b * 114) / 1000
			}
		}
		(function display()
		{
			if (Settings.prefs.sortBy == Settings.SORT_COLOR)
			{
				list = list.sort(function(a,b)
				{
					let r = b.hue - a.hue;
					if (!r)
						r = b.val - a.val;
					if (!r)
						r = b.sat - a.sat;
					if (!r)
						r = DB.info[a.id][0].toLowerCase().localeCompare(DB.info[b.id][0].toLowerCase());
					return r;
				});
			}
			else
			{
				list = list.sort(function(a, b)
				{
					return DB.info[a.id][0].toLowerCase().localeCompare(DB.info[b.id][0].toLowerCase());
				});
			}
			$(showMyShows.box).find("span.button").off("click");
			showMyShows.box = document.createElement("div");
			let entry = document.createElement("div"),
					title = document.createElement("div"),
					count = 0;

			entry.appendChild(title);
			entry.className = "entry";
			title.className = "title";
			for(let i = 0; i < list.length; i++)
			{
				let id = list[i].id;

				count++;
				entry = entry.cloneNode(true);
				title = entry.firstChild;
				entry.setAttribute("data-series-id", id);
				entry.setAttribute("data-series-source", DB.info[id][1]);
				title.textContent = DB.info[id][0];
				showMyShows.box.appendChild(entry);
			}
			let text = "You don't have any shows";
		
			if (count)
			{
				function getSortName()
				{
					let a = ["Name", "Color"];
					return  a[Settings.prefs.sortBy + 1] || a[0];
				}
				text = (DB.viewing ? DB.username + " has " : "You have ") + count + " show" + (count > 1 ? "s" : "") + '. <span>Sort by <span class="button">' + getSortName() + "</span></span>";
			}
			$(showMyShows.box).prepend('<div class="info"><small>' + text + '</small><div>');
			$("#searchResults").html(showMyShows.box.innerHTML).find("span.button").click(function(e)
			{
				if (++Settings.prefs.sortBy > 1)
					Settings.prefs.sortBy = 0;
				
				Settings.save();
				display();
			});;
		})();
	}

	function showMyHidden(e)
	{
		if (!DB.infoLoaded)
		{
			setTimeout(showMyHidden, 100);
			return;
		}
		$(".entry").removeClass("searchResult");
		$("#searchStatus").css("visibility","hidden");
		showMyHidden.box = document.createElement("div");
		let entry = document.createElement("div"),
				title = document.createElement("div");

		entry.appendChild(title);
		entry.className = "entry";
		title.className = "title";
		let list = [],
				count = 0;

		for(let i = 0; i < _hidden.length; i++)
		{
			list[list.length] = _hidden[i];
		}
		list.sort(function(a, b)
		{
			return !DB.info[a] || !DB.info[b] ? -1 : DB.info[a][0].toLowerCase().localeCompare(DB.info[b][0].toLowerCase());
		});
		for(let i = 0; i < list.length; i++)
		{
			let id = list[i];
			if (!DB.info[id])
				continue;

			count++;
			entry = entry.cloneNode(true);
			title = entry.firstChild;
			entry.setAttribute("data-series-id", id);
			entry.setAttribute("data-series-source", DB.info[id][1]);
			title.textContent = DB.info[id][0];
			showMyHidden.box.appendChild(entry);
		}
		let text = "There are no hidden shows";
		if (count)
		{
			text = "There are " + count + " hidden show" + (count > 1 ? "s" : "") + ":";
		}
		$(showMyHidden.box).prepend('<small>' + text + '</small><div style="height: 0.5em;"></div>');
		$("#searchResults").html(showMyHidden.box.innerHTML);
	}
	$(document).ready(function()
	{
		function hideNode(id)
		{
			$("." + id).each(function(i, e)
			{
				let prev = e.previousSibling;
				if (prev.nodeType == prev.TEXT_NODE)
				{
					let span = document.createElement("span");
					prev.parentNode.insertBefore(span, prev);
					span.appendChild(prev);
					prev = span;
				}
				$(prev).toggleClass(id + "Icon", true)
			});
		}
		if (DB.viewing)
		{
			$("body").toggleClass("userViewer", true);
			hideNode("clearColors");
			hideNode("importColors");
		}
		let accountLoop = 50;
		$("#account-popup").attr("hidden", "");
		$("#account-overview").click(function(e)
		{
			if (e.isTrigger)
				return;

			Settings.hide();
			customLinks.hide();
		});
		$("#account-overview").click(function loop(e)
		{
			if (e.isTrigger)
				return;

			Settings.hide();
			customLinks.hide();
			$("#account-popup").removeAttr("hidden");
			let as = $("#account-popup-content .content a");
			if( !$( "#account-popup" ).hasClass("loaded") || (!as.length && accountLoop--))
				return setTimeout(function()
				{
					loop(e)
				}, 100);

			if (!as.length)
				return;

			let header = $("#account-popup-content").find("div.header");
			//account reset password
			if (DB.loggedInUsername)
			{
				let div = $("<div/>").html(header.html().replace(/(\s)+/g, "$1")),
//						a = $('<a href="/_u/forgot-password#' + DB.username +'">Reset password</a>');
						a = $('<a href="/_u/forgot-password">Reset password</a>');
				header.html("").append(div);
				div.find("a").after(a).after(" | ");
			}
			else
			{
//some browsers don't have proper icon in the font
				let span = document.createElement("span");
				span.innerHTML = header[0].firstChild.textContent.replace("🍪", multiline(function(){/*<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="width:1.2em;height:1.2em;enable-background:new 0 0 512 512;" xml:space="preserve"><circle style="fill:#D5A150;" cx="256" cy="256" r="256"/><path style="fill:#AD712C;" d="M415.237,55.557c34.771,43.71,55.556,99.043,55.556,159.236c0,141.385-114.615,256-256,256c-60.193,0-115.527-20.785-159.237-55.556C102.456,474.194,174.808,512,256,512c141.385,0,256-114.615,256-256C512,174.809,474.194,102.456,415.237,55.557z"/><path style="fill:#C98A2E;" d="M139.553,145.28c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595c15.135,0,29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.919-6.799-4.527-10.926-4.527c-4.127,0-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C150.099,143.269,144.826,145.28,139.553,145.28z"/><circle style="fill:#674230;" cx="165.045" cy="99.186" r="36.056"/><path style="fill:#7A5436;" d="M129.154,95.733c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.929,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.985-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C144.353,65.025,130.744,78.748,129.154,95.733z"/><path style="fill:#C98A2E;" d="M57.139,310.109c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13C53.272,213.243,67.5,207.35,82.635,207.35s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.919-6.799-4.527-10.926-4.527c-4.127,0-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C67.685,308.098,62.411,310.109,57.139,310.109z"/><circle style="fill:#674230;" cx="82.631" cy="264.015" r="36.056"/><path style="fill:#7A5436;" d="M46.739,260.562c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.93,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.985-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C61.939,229.854,48.33,243.577,46.739,260.562z"/><path style="fill:#C98A2E;" d="M129.252,413.127c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.918-2.919-6.799-4.527-10.926-4.527s-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C139.798,411.116,134.524,413.127,129.252,413.127z"/><circle style="fill:#674230;" cx="154.743" cy="367.033" r="36.056"/><path style="fill:#7A5436;" d="M118.852,363.58c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.929,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.984-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C134.051,332.872,120.443,346.595,118.852,363.58z"/><path style="fill:#C98A2E;" d="M242.572,485.24c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595c15.135,0,29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.919-6.799-4.527-10.926-4.527c-4.127,0-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C253.118,483.229,247.844,485.24,242.572,485.24z"/><circle style="fill:#674230;" cx="268.063" cy="439.146" r="36.056"/><path style="fill:#7A5436;" d="M232.172,435.692c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.929,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.984-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C247.371,404.985,233.762,418.708,232.172,435.692z"/><path style="fill:#C98A2E;" d="M263.175,196.929c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.919-6.799-4.527-10.926-4.527s-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C273.721,194.918,268.448,196.929,263.175,196.929z"/><circle style="fill:#674230;" cx="288.667" cy="150.829" r="36.056"/><path style="fill:#7A5436;" d="M252.776,147.382c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.929,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.985-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C267.975,116.674,254.366,130.397,252.776,147.382z"/><path style="fill:#C98A2E;" d="M386.797,382.222c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.919-6.799-4.527-10.926-4.527c-4.127,0-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C397.343,380.211,392.069,382.222,386.797,382.222z"/><circle style="fill:#674230;" cx="412.289" cy="336.127" r="36.056"/><path style="fill:#7A5436;" d="M376.397,332.674c-0.013,0.139-0.025,0.277-0.036,0.416c-0.983,11.929,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.984-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C391.597,301.967,377.988,315.69,376.397,332.674z"/><path style="fill:#C98A2E;" d="M376.495,186.488c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.919-2.918-6.799-4.527-10.926-4.527s-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C387.041,184.477,381.768,186.488,376.495,186.488z"/><circle style="fill:#674230;" cx="401.987" cy="140.393" r="36.056"/><path style="fill:#7A5436;" d="M366.095,136.94c-0.013,0.139-0.025,0.277-0.036,0.416c-0.983,11.93,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.985-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C381.295,106.232,367.686,119.955,366.095,136.94z"/><path style="fill:#C98A2E;" d="M221.968,310.109c-5.273,0-10.546-2.012-14.569-6.035c-22.091-22.091-22.091-58.037,0-80.13c10.702-10.702,24.929-16.595,40.065-16.595s29.363,5.894,40.065,16.595c8.046,8.047,8.046,21.092,0,29.139c-8.048,8.045-21.093,8.046-29.139,0c-2.918-2.919-6.799-4.527-10.926-4.527s-8.008,1.608-10.926,4.527c-6.026,6.026-6.026,15.829,0,21.853c8.047,8.047,8.047,21.092,0,29.138C232.514,308.098,227.24,310.109,221.968,310.109z"/><circle style="fill:#674230;" cx="247.46" cy="264.015" r="36.056"/><path style="fill:#7A5436;" d="M211.568,260.562c-0.013,0.139-0.025,0.277-0.037,0.416c-0.983,11.93,8.817,21.985,20.779,21.551c0.792-0.029,1.591-0.083,2.393-0.164c16.973-1.712,30.582-15.435,32.172-32.42c0.013-0.139,0.025-0.277,0.036-0.415c0.983-11.928-8.817-21.985-20.779-21.551c-0.792,0.029-1.591,0.083-2.393,0.164C226.768,229.854,213.159,243.577,211.568,260.562z"/><g><circle style="fill:#AD712C;" cx="129.803" cy="294.632" r="7.726"/><circle style="fill:#AD712C;" cx="181.312" cy="294.632" r="7.726"/><circle style="fill:#AD712C;" cx="155.557" cy="248.274" r="7.726"/><circle style="fill:#AD712C;" cx="62.841" cy="340.99" r="7.726"/><circle style="fill:#AD712C;" cx="165.859" cy="454.31" r="7.726"/><circle style="fill:#AD712C;" cx="196.765" cy="413.103" r="7.726"/><circle style="fill:#AD712C;" cx="248.274" cy="351.292" r="7.726"/><circle style="fill:#AD712C;" cx="330.688" cy="320.386" r="7.726"/><circle style="fill:#AD712C;" cx="310.085" cy="340.99" r="7.726"/><circle style="fill:#AD712C;" cx="340.99" cy="371.895" r="7.726"/><circle style="fill:#AD712C;" cx="340.99" cy="433.706" r="7.726"/><circle style="fill:#AD712C;" cx="454.31" cy="217.368" r="7.726"/><circle style="fill:#AD712C;" cx="423.404" cy="423.404" r="7.726"/><circle style="fill:#AD712C;" cx="268.877" cy="31.936" r="7.726"/><circle style="fill:#AD712C;" cx="83.445" cy="124.652" r="7.726"/><circle style="fill:#AD712C;" cx="42.237" cy="186.463" r="7.726"/><circle style="fill:#AD712C;" cx="160.708" cy="201.915" r="7.726"/><circle style="fill:#AD712C;" cx="191.614" cy="186.463" r="7.726"/><circle style="fill:#AD712C;" cx="160.708" cy="171.01" r="7.726"/><circle style="fill:#AD712C;" cx="304.934" cy="248.274" r="7.726"/><circle style="fill:#AD712C;" cx="237.972" cy="93.746" r="7.726"/><circle style="fill:#AD712C;" cx="335.839" cy="186.463" r="7.726"/><circle style="fill:#AD712C;" cx="351.292" cy="232.821" r="7.726"/><circle style="fill:#AD712C;" cx="382.197" cy="232.821" r="7.726"/><circle style="fill:#AD712C;" cx="382.197" cy="263.726" r="7.726"/><circle style="fill:#AD712C;" cx="325.537" cy="78.294" r="7.726"/><circle style="fill:#AD712C;" cx="356.443" cy="62.841" r="7.726"/></svg>*/}));
				header[0].replaceChild(span, header[0].firstChild);
			}
			let content = $("#account-popup-content").find("div.content");
			//account overview neat icons
			content.contents().filter(function()
			{
				if (this.tagName == "BR")
					this.parentNode.removeChild(this);

				if (this.nodeType != Node.TEXT_NODE || !this.textContent.trim())
					return;

				let span = document.createElement("span"),
						div = document.createElement("div");
				div.appendChild(span);
				div.appendChild(this.nextSibling);
				span.textContent = this.textContent.trim();
				this.parentNode.replaceChild(div, this);
			});

			$("#account-overview").unbind("click", loop);
			content.find("div:first-of-type > span").html('<svg viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>');
			let d = document.createElement("a");
			d.addEventListener("click", function(e)
			{
				if (e.isTrigger)
					return;

				e.preventDefault();
				e.stopPropagation();

				let data = exportGetColors(),
						d = new Date(),
						date = d.getFullYear() + pad(d.getMonth()+1) + pad(d.getDate()) + pad(d.getHours()) + pad(d.getMinutes()) + pad(d.getSeconds());
				if (data)
					fileSave("Airdates.tv_colors_" + (DB.username ? DB.username.replace(/[\/\\?%*:|"<>]/g, "_") + "_" : "") + date + ".txt", data);
				else
					alert("Nothing to export");
			}, false);
			d.textContent = "save to file";
			d.className = "file";
			content.find(".exportColors").append(d);
			d = d.cloneNode(true);
			d.addEventListener("click", function(e)
			{
				if (e.isTrigger)
					return;

				e.preventDefault();
				e.stopPropagation();

				fileLoad(function(str)
				{
					if (str)
					{
						$.each( str.split( ";" ), function( i, e ){
							assignColor.apply( null, e.split("=").concat([true] ) );
						} );
						alert( "kk, imported " + str.split(";").length + " colors" );
					}
					else
					{
						alert( "Error importing" );
					}
				}, ".txt");

			}, false);
			d.textContent = "load from file";
			content.find(".importColors").append(d);

			hideNode("importColors");
			let a = document.createElement("a"),
					i = document.createElement("span"),
					span = document.createElement("div"),
					h = document.createElement("h4"),
					item = span,
					parent = as[as.length-1].parentNode.parentNode;

			h.textContent = adeName + " v" + adeVersion;
			parent.appendChild(h);
			span.appendChild(i);
			span.appendChild(a);

			span = span.cloneNode(true);
			a = span.lastChild;
			i = span.firstChild;
			a.className = "";
			i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>';
			a.href = '#myshows';
			a.id = "";
			a.addEventListener("click", function(e)
			{
				e.preventDefault();
				search("info:myshows");
				$("#account-popup").toggle(false);
			}, false);
			a.textContent = (DB.viewing ? DB.username + " user's" : "My") + " shows";
			parent.appendChild(span);

			span = span.cloneNode(true);
			a = span.lastChild;
			i = span.firstChild;
			i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>';
			a.href = '#hidden';
			a.id = "";
			a.addEventListener("click", function(e)
			{
				e.preventDefault();
				search("info:hidden");
				$("#account-popup").toggle(false);
			}, false);
			a.textContent = "Hidden shows";
			parent.appendChild(span);

			span = span.cloneNode(true);
			a = span.lastChild;
			i = span.firstChild;
			i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" /></svg>';
			a.href = '#';
			a.id = "manage-links-open";
			a.addEventListener("click", function(e)
			{
				e.preventDefault();
				customLinks.manager(function()
				{
					customLinks.show();
					$("#account-popup").toggle(false);
				});

			}, false);
			a.textContent = "Links manager";
			parent.appendChild(span);

			span = span.cloneNode(true);
			a = span.lastChild;
			i = span.firstChild;
			i.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" /></svg>';
			a.href = '#';
			a.id = "settings-open";
			a.addEventListener("click", function(e)
			{
				e.preventDefault();
				Settings.show();
				$("#account-popup").toggle(false);
			}, false);
			a.textContent = "Options";
			parent.appendChild(span);

			a = document.createElement("a");
			a.href = "https://github.com/vanowm/airdates.tv_enhancer/issues";
			a.target = "_blank";
			a.textContent = "Support";
			a.className = "parentheses support";
			parent.insertBefore(a, h.nextSibling);

		});

		let repeat = 100,
				list = ls("info") || {},
				userCookie = readCookieRaw("adsc_SESSION"),
				isUser = userCookie && userCookie.indexOf("username=") > 0,
				blank = {};
		DB.info = {};
		DB.infoLoaded = false;
		//to avoid hit a ceiling of max data allowed store in local storage, we only save names of user's current shows, nothing else.
		//unfortunately we don't know when saved colors are done loading for registered users, so we must wait in a loop
		(function loop()
		{
			let added = false;

			for(let id in DB.savedColors)
			{
				DB.loaded = true;
				repeat = 0;
				let col = new Colors().setColor(DB.savedColors[id] || "FFFFFF");

				//there is a bug in original ADT that store show's color as "FFFFFF" (which is "delete" show color)
				if (col.HEX == "FFFFFF")
					assignColor(id, DB.savedColors[id], true);

				if (id in list)
				{
					DB.info[id] = list[id];
					continue;
				}
				added = true;
				DB.infoAdd(id);
			}
			//we know DB.savedColors is empty, we can set it to empty again within our namespace so we can see if it was changed
			if (repeat == 100 && !Object.keys(DB.savedColors).length)
				DB.savedColors = blank;

			if (isUser && repeat-- && DB.savedColors === blank)
				return setTimeout(loop, 100);

			for(let i = 0; i < _hidden.length; i++)
			{
				let id = _hidden[i];
				if (id in list)
				{
					DB.info[id] = list[id];
					continue;
				}
				added = true;
				DB.infoAdd(id);
			}

			DB.infoLoaded = true;
			if (added)
				DB.infoSave();
		})();

		if (DB.loggedInUsername)
		{
			$("#account-overview").find("span.nu")[0].innerHTML = '<svg viewBox="0 0 24 24"><path d="M12,4C15.64,4 18.67,6.59 19.35,10.04C21.95,10.22 24,12.36 24,15A5,5 0 0,1 19,20H6A6,6 0 0,1 0,14C0,10.91 2.34,8.36 5.35,8.04C6.6,5.64 9.11,4 12,4M7.5,9.69C6.06,11.5 6.2,14.06 7.82,15.68C8.66,16.5 9.81,17 11,17V18.86L13.83,16.04L11,13.21V15C10.34,15 9.7,14.74 9.23,14.27C8.39,13.43 8.26,12.11 8.92,11.12L7.5,9.69M9.17,8.97L10.62,10.42L12,11.79V10C12.66,10 13.3,10.26 13.77,10.73C14.61,11.57 14.74,12.89 14.08,13.88L15.5,15.31C16.94,13.5 16.8,10.94 15.18,9.32C14.34,8.5 13.19,8 12,8V6.14L9.17,8.97Z"></path></svg>' + $("#account-overview").find("span.nu")[0].innerHTML;
		}
	//fix paste via right click: adding input event
		$( "#searchBecauseNoOneChecks" ).on( "input keyup change search", function(e)
		{
			let q = this.value.trim();
			if (q == "info:myshows" || q.match(/^info:([a-zA-Z]+|$)/))
			{
				e.preventDefault();
				e.stopPropagation();
				if (q == "info:hidden")
					showMyHidden(e);
				else if (q == "info:myshows")
					showMyShows(e);
				else
				{
					showMyShows.box = showMyHidden.box = document.createElement("div");
					$("#searchResults").html('<ul id="resultsBecauseNoOneChecks"><li>No results :(</li></ul><small>Search took 0.000 seconds</small>');
				}
	//fix paste via right click
				if (e.type == "input")
					$(this).trigger("change");
			}
			else
			{
				showMyShows.box = null;
				showMyHidden.box = null;
			}
		}).trigger("change");
		//fix clear colors for members
		$(document.body).off( "click", ".clearColors");
		$(document.body).on( "click", ".clearColors", function(e)
		{
			e.stopPropagation();
			e.preventDefault();
			if (!DB.viewing)
			{
				$.each( DB.savedColors, function( i, c )
				{ 
					assignColor( i, null, true );
				} );
				alert( "Done!" ); 
			}
			else
				alert( "You don't have permission!" );

			return false; 
		});


	});//document.ready()
	$(document.body).on( "click touchstart", function(e)
	{
		if (e.isTrigger)
			return;

		let close = $(e.target).parents(".close").get().length,
				p = $( e.target ).parents("#manage-links-popup").get().length;

		if (e.target.id != "manage-links-open" && (p == 0 || (p && close)))
			customLinks.hide();

		p = $( e.target ).parents("#settings-popup").get().length;
		if (e.target.id != "settings-open" && (p == 0 || (p && close)))
			Settings.hide();
	});
	//reset password auto fill username
	if (location.pathname == "/_u/forgot-password")
		$("#username").val(DB.loggedInUsername);

	$(window).on("hashchange", function(e)
	{
		if (location.hash == "#myshows")
			search("info:myshows");
		else if (location.hash == "#hidden")
			search("info:hidden");

	}).trigger("hashchange");

};//func()

//disqus
if (window.top !== window.self)
{
	func = function(){};

//disqus troll filter
	if (window.location.href.indexOf("disqus.com") != -1)
	{
		let trollHide = false;
		let trollList = ls("trolls"),
				trollTimer,
				comments = {};

		if (!trollList || typeof(trollList) != "object")
			trollList = ["Tubasing"];

		let isTroll = function (name)
		{
			return trollList.indexOf(name);
		};

		let trollSave = function ()
		{
			clearTimeout(trollTimer);
			trollTimer = setTimeout(function()
			{
				ls("trolls", trollList);
			}, 1000);
		};

		let trollAdd = function (name)
		{
			if (isTroll(name) == -1)
				trollList.push(name);

			trollSave();
		};

		let trollRemove = function (name)
		{
			let n = isTroll(name);
			if (n != -1)
				trollList.splice(n, 1);

			trollSave();
		};

		let isMatch = function (needle, array)
		{
			let r = -1;
			for(let i = 0; i < array.length; i++)
			{
				r = needle.indexOf(array[i]);
				if (r != -1)
					break;
			}
			return r;
		};
		let findParent = function (obj, c)
		{
			if (typeof(c) != "object")
				c = [c];

			if (obj && obj.className && isMatch(obj.className, c) != -1)
				return obj;

			if (obj)
				return findParent(obj.parentNode, c);

			return null;
		};
		let censor = function (a, b, c, d, e)
		{
			let p = "blah",
					r = "",
					caps = true,
					t,
					i,
					isStr = isNaN(a.replace(/['`].*/, ''));

			if ((a.length < 2 && isStr) || (a.length < 7 && a.match(/['`]/) && isStr) || a.match(/^\$?[0-9]+k?/i))
				return a;

			for(i = 0; i < a.length; i++)
				if (a[i] == a[i].toLowerCase())
				{
					caps = false;
					break;
				}

			for(i = 0; i < p.length; i++)
			{
				t = p[i];

				if (a.length < i + 1)
					continue;

				if (caps || (a.length > i && a[i] != a[i].toLowerCase()))
					t = t.toUpperCase();

				r += t;
			}
			return r;
		};

		let toggleTroll = function (comment, f)
		{
			//f = 0: orig
			//f = 1: troll
			//f = 2: toggle
			f = typeof(f) == "undefined" ? 2 : f;
			let parent = comment._parent,
					t = true;
			if (f == 1 || (f == 2 && parent.getAttribute("troll") != "true"))
			{
				if (trollHide)
					comment.innerHTML = '<img src="' + trollSrc + '" class="trollComment">';
				else
					censorText(comment);
			}
			else
			{
				censorText(comment, true);
				t = false;
			}
			parent.setAttribute("troll", t);
			return t;
		};

		let censorText = function (obj, orig)
		{
			let c = obj.childNodes;
			for(let i = 0; i < c.length; i++)
			{
				if (c[i].nodeName == "#text")
				{
					if (!("nodeValueOrig" in c[i]))
						c[i].nodeValueOrig = c[i].nodeValue;

					let t;
					if (orig)
						t = c[i].nodeValueOrig;
					else
					{
						if (!("nodeValueTroll" in c[i]))
							c[i].nodeValueTroll = c[i].nodeValue.replace(/(\w+(['`]\w+)?)/g, censor);

						t = c[i].nodeValueTroll;
					}

					c[i].nodeValue = t;
				}
				else if (c[i].childNodes.length && c[i].className != "see-more")
					censorText(c[i], orig);
			}
			return obj.innerHTML;
		};

		window.addEventListener("load", function(e)
		{
			let timer = setInterval (function()
			{
				let posts = document.getElementById("post-list");
				if (!posts)
					return;

				clearInterval(timer);
				timer = setInterval (function()
				{
					let names = posts.getElementsByClassName("author");
					if (!names.length)
						return;
					clearInterval(timer);

					let style = document.createElement("style");
					style.innerHTML = multiline(function(){/*
.trollComment
{
	cursor: pointer;
	opacity: 0.4;
	transform: scaleX(-1)
}
.post-byline:not([troll="true"]) img.troll
{
	opacity: 0.1;
	transform: scaleX(-1);
}
img.troll
{
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMi8yOC8xMZSAjI8AAAA/UExURf///wAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCw0NDQ8PDxAQEBISEhMTExYWFvr6+v////L9RbYAAAABdFJOUwBA5thmAAAAZklEQVQYGY3BWw6CMABFwXtQKLZafJz9r1WaaPgycSb5wwys8KT1DFcPZIeHlgQBZ5jcbUnTByq4oDXpopMDd88JWlCZEEtSKUsHRCUJr1W8iVqTIBeWAirZ4Rdk6A6cWPMBHfLbGzqjB8v8i7F/AAAAAElFTkSuQmCC");
	width: 16px;
	height: 16px;
	cursor: pointer;
	margin-left: 0.3em;
	vertical-align: top;
	display: inline-block;
}
.trollMenuImg
{
	vertical-align: top;
}
.trollBox
{
	height: auto;
	line-height: 1.3em;
}
*/
					});
					document.getElementsByTagName("head")[0].appendChild(style);
					for(let i = 0; i < names.length; i++)
					{

						let body = findParent(names[i], "post-content");
						if (!body)
							continue;

						let parent = findParent(names[i], "post-byline"),
								img = document.createElement("img"),
								name = names[i].innerText,
								troll = (isTroll(name) != -1),
								post = body.getElementsByClassName("post-message")[0];

						post._parent = parent;

						img.className = "troll";
						parent.insertBefore(img, parent.firstChild.nextSibling);

						parent.setAttribute("troll", troll);

						names[i].innerHTML = names[i].innerHTML.replace("Tubasing", "Tubashit");

						if (typeof(comments[name]) == "undefined")
							comments[name] = [];

						comments[name].push({
							parent: parent,
							post: post
						});

						img.addEventListener("click", function(e)
						{
							let troll = toggleTroll(post);
							if (troll)
								trollAdd(name);
							else
								trollRemove(name);

							for(let i = 0; i < comments[name].length; i++)
							{
								if (post === comments[name][i].post)
									continue;

								toggleTroll(comments[name][i].post);
							}
						}, false);



						let timer,
								prev,
								eventHandler = function(e)
								{
									if (parent.getAttribute("troll") != "true")
										return;

									let type = e.type == "mouseenter";

									if (prev == e.type)
										return;

									prev = e.type;
									clearTimeout(timer);
									timer = setTimeout(function()
									{
										censorText(post, type);
									}, type ? 100 : 1000);
								};
						body.addEventListener("mouseenter", eventHandler, false);
						body.addEventListener("mouseleave", eventHandler, false);

						if (!troll)
							continue;

						censorText(post);
					}
				}, 100);
			}, 100);
		}, false);
	}
}//disqus
if (document.readyState != "loading")
	func();
else
	document.addEventListener("DOMContentLoaded", func ,true);