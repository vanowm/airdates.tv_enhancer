// ==UserScript==
// @name        Airdates.tv enhancer
// @namespace   V@no
// @author      V@no
// @description Control how many past weeks you want to see and many other enhancements
// @include     http://www.airdates.tv/*
// @include     https://www.airdates.tv/*
// @include     https://disqus.com/embed/comments/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEiElEQVRYw+2VW4hVVRjHf+uyz97nnLkcHWfGuWYzDlKUhUrUgynkQxREFJFEDwbzFkXQg0I9hIRF9BDRk1AyigkhouJDBuEEPlcQNdqo1cnRzozpzDnOuezL+no4czVnqIfBl/m/7L2+tde3/vv7/uu/YBWruMdQCweXRkff2Ltv36elUun3MAzFswnabiCq5qiGIX1NIT3uD8TzEJXDmo2kMbAOLvddoTg5RXNDI1YPEIce63vuo1fyrPcm0RmfX0cr97/wylvv9PX3HJjd0y4kkP8zv+nMmTPs379/wyObN3PzVhbPOwDuCF0JHPd38YF7n6zVoL7G6PeYXgebLz7MwTcPEmoIbUwUDpIOrjCQUbyrPuQrPUhLWKWv6xAvvjzauXDPRQQ8L0U6SLPrqV1s2bplJrphbv43OoEnmAbg5lx8ujVkW+nxBZkEShEAEWsp0kYRaG3dSENjsqgF+s6OCI4oDgGo1cA5mZuNFndsPkl89zhAgpn/QZP8e+3ioSBOEGFFIFLPvyQBESGKImSFGLjE4RK3XAUgTpKVI+ASXLKMBhQgzq0YgThOcLJcC2YrwMoQiFxM7OKlCcyqT5z7z0n/D1yckMTLtGD2v1fqFERxjHPLiHC29yulgcQlJHeIcJETzm5sbf3p+4sTqKW0oZYjPD8XhjFRsowG7l6B+Xe1hBMqdWd8fo1esKZSrRLFiwksqoCZcc3duzWtbVCtQHNTlkwWrgjsKWeRqfo3xwPDS00Q3IDCQxkeKIPT4BzktgXYXyAPfPSZZeh1iBLY97ZiZMQtTSAM6xfI2NgPjI3lAB+4ARgwlhGmILmEQ0BfpjloobdsqepmLiQ/gWhIhFxvO6nSbcbLFcKWv4ECnlEYc51ytW9pAr6fVu1tnQTpvWSzoJQQR60kbhOec5w332L0lyilyakcvXQhHjRGf/FYzw6sZ/FTPrq7B2+gn3QqxeFPjnLo4yGMMdRqNZ57/lX/rgREZODw0NBgc64B319DHIVESUzKC3BRREiCHwd0JB2AQitNiSLaGCpGoVvWzOnRK04ixVukrYfVlkqlgmiFiHDhwsigiBxVSg3PERCR7PC5c+dPnT6dEhHa2zsoThVRClK+T6VSwRiDUgqjTf1WAxJxWAXKOZwDqzVaa5qbmylXyigB63mEYUhDJsP18QInTp4kt3btKRF5UCk1pkRkIJ/Pf372m7PbNYrJyUmqtSrWWJwTtNaghFq1hvU80kGKWhSThDFWK0ARR1VwjiCVwg8CfC/AGEu2sZHYJXjaooW6B/iWQqHAkzt3/vzo1i171HfDw18cO3bstfGJCYLAB6kfq7ppODzPm7mmQ5I4RmlDd1cHjQ0NlCshTamA2AiV8m0mCuOgFJ71SZwj5XmEtRqJc2htUAqM1oS1Globnn72mUN2YmLiyLVr1/J9/f391tpGpVUkru4FSlG3TgFtNL6f4urVcX788Xs6OteTL0zT5sXcLJUJgR3bt+OcULpd8tpza4rdPd3XnYjVWiMzfqGVIpPJpC5dvOiM0SdYxSruNf4Bbv4W546hynoAAAAASUVORK5CYII=
// @license     MIT
// @version     1.16
// @run-at      document-start
// @grant       none
// ==/UserScript==

//tab = 2 spaces


//to add custom links, uncomment this block of code:

//begin custom links
/*
let loo = 1000;
(function loop()
{
	if ((typeof(engines) == "undefined" || !engines.length) && loo--)
		return setTimeout(loop, 0);

//	Available tags in the url (must be in capital letters):
//	MONKEY = full name of the episode
//	MONKEY_N = full name without episode number (S01E32)
//	MONKEY_ID = show ID on this website
//	MONKEY_ARCHIVELINK = url to the archive listing on this website
//	{WIKI_TITLE} = wikipedia path for the show
	window.engines = window.engines.concat([
		{
			host: "example.com", //domain name, used as ID
			href: "http://example.com/path?monkey=MONKEY&monkey_n=MONKEY_N&monkey_id=MONKEY_ID&monkey_archivelink=MONKEY_ARCHIVELINK&wiki_title={WIKI_TITLE}", //url to the website
			name: "test" //name will be displayed in the list
		},
		{
			host: "blah.com", //domain name, used as ID
			href: "http://example.com/another/path?monkey=MONKEY&monkey_n=MONKEY_N&monkey_id=MONKEY_ID&monkey_archivelink=MONKEY_ARCHIVELINK&wiki_title={WIKI_TITLE}", //url to the website
			name: "second example" //name will be displayed in the list
		},
	]);
})()
*/

//end custom links


let log = console.log;
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
		catch(e){}
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

let func = function(e)
{
	let _today,
			_hidden = ls("hidden") || [],
			showHidden = cs("sh") ? true : false,
			_assignColor = assignColor;
/*
work around for expand/collapse same series in one day
*/
window.assignColor = function assignColor ( seriesId, color, permanent )
{
	let r = _assignColor(seriesId, color, permanent),
			css = $("#css_"+seriesId);

	css.html(css.html().replace(/(\s+)(\.activeOnly[^\{]+)\{/, "$1$2:not(.collapse),body:not(.collapseMulti) $2{"));
	return r;
}
/*
fixing browser history inflating after each page refresh and prev/next history jump don't work
*/
var prevPath;
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

	var whenDone = function(){
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
		showPast();
		showHideLoad();
//adding watched checkboxes
		$("div.day > div.entry").each(watched.attach);
//collapse multiple entries of the same series in one day
		$("div.day").each(collapseMulti);
	};

	if(ymCurrent != ym){
		$(".days").load("/_archive/" + ~~(ym/12) + "-" + ~~((ym%12)+1), function(){
			ymCurrent = ym;
			whenDone();
		});
	}
	else{
		whenDone();
	}
}

//collapse multiple entries of the same series in one day
let collapseMulti = function collapseMulti(i, day)
{
	if (day.list)
	{
		for(let i in day.list)
		{
			if (day.list[i].length < 2)
				continue;

			day.list[i][0]._title.html(day.list[i][0]._title[collapseMulti.enabled ? "_titleCollapsed" : "_titleOrig"]);
		}
		return;
	}

	day.list = {};
	$(day).find("div.entry").each(function(i, entry)
	{
		let id = entry.getAttribute("data-series-id");
		
		entry._title = $(entry).find(".title");
		entry._title._titleOrig = entry._title.text();
		if (!(id in day.list))
		{
			day.list[id] = [entry]
		}
		else
		{
			if (day.list[id].length == 1)
			{
				day.list[id][0].addEventListener("mouseover", function(e)
				{
					collapseMulti.mouseOver(e, day, id)
				}, false);
				day.list[id][0].addEventListener("mouseout", function(e)
				{
					collapseMulti.mouseOut(e, day, id)
				}, false);
			}
			$(entry).toggleClass("collapse", true);
			day.list[id].push(entry);
			entry.addEventListener("mouseover", function(e)
			{
				collapseMulti.mouseOver(e, day, id)
			}, true);
			entry.addEventListener("mouseout", function(e)
			{
				collapseMulti.mouseOut(e, day, id)
			}, true);
		}
	});
	
	for(let i in day.list)
	{
		if (day.list[i].length < 2)
			continue;

		day.list[i][0]._title._titleCollapsed = day.list[i][0]._title.text() + "-" + day.list[i][day.list[i].length - 1]._title.text().replace(/.* ([^ ]+)$/, "$1");
		day.list[i][0]._title.html(day.list[i][0]._title[collapseMulti.enabled ? "_titleCollapsed" : "_titleOrig"]);
	}
}
collapseMulti.prev = {day: null, id: null, timer: null};
collapseMulti.mouseOver = function(e, day, id)
{
	if (!collapseMulti.enabled)
		return;

	if (collapseMulti.prev.day && collapseMulti.prev.id)
	{
		if (collapseMulti.prev.day != day || collapseMulti.prev.id != id)
		{
			$(collapseMulti.prev.day.list[id].entry).toggleClass("opened", false);
		}
		else
		{
			clearTimeout(collapseMulti.prev.timer);
			return;
		}
	}
	for (let i = 1; i < day.list[id].length; i++)	
	{
		$(day.list[id][i]).toggleClass("collapse", false);
	}
	day.list[id][0]._title.html(day.list[id][0]._title._titleOrig)
	collapseMulti.prev.day = day;
	collapseMulti.prev.id = id;
}
collapseMulti.mouseOut = function(e, day, id)
{
	if (!collapseMulti.enabled)
		return;

	collapseMulti.prev.timer = setTimeout(function()
	{
		$(day.list[id][0]).toggleClass("opened", false)
		for (let i = 1; i < day.list[id].length; i++)	
		{
			$(day.list[id][i]).toggleClass("collapse", true);
			collapseMulti.prev.day = null;
			collapseMulti.prev.id = null;
		}
		day.list[id][0]._title.html(day.list[id][0]._title._titleCollapsed)
	}, 100);
}

collapseMulti.onOff = function(e, id, checked)
{
	collapseMulti.enabled = checked;
	$("div.day").each(collapseMulti);
}
//fixing prev/next history jump does nothing
$(window).on("popstate", function(e)
{
	let state = e.originalEvent.state;
	prevPath = (state ? state.originalPath : undefined) || e.target.location.pathname;

	loadArchiveFromPathname(prevPath, state ? state.highlightSelector : undefined);
});
/*
end fixing browser history inflating after each page refresh and prev/next history jump don't work
*/

window.loadArchiveFromPathname = loadArchiveFromPathname;
function showPast()
{
// hide all past days
	let	d = new Date();

	_today = $("div.day[data-date='" + d.getFullYear() + pad2((new Date()).getMonth() + 1) + pad2((new Date()).getDate()) + "']");

	if (!_today || $(".archive").length)
		return;

	let	firstDay = $(".days").children().first(),
			firstDate = firstDay.attr("data-date"),
			div = [document.createElement("div")],
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
		for(let i = 0; i < daysNum  && prev; i++)
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
			weeks = parseInt(readCookieRaw("w")),
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

		createCookie("w", weeks);
	}
	//add new class pastNN to each past day, where NN is a week number.
	let func = function(i)
	{
		$(this).addClass("past" +  (Math.ceil((daysPast.length - i) / 7 % (weeksMax + 1))));
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

var prevOpened = null;
//adding attribute "opened" to the entry allows us show/hide things from CSS based on entry state
$("div.days").on("click", "div.entry div.title", function(e)
{
	if (prevOpened)
	{
		prevOpened.attr("opened", "");
		let po = prevOpened;
		setTimeout(function()
		{
			po.removeAttr("opened");
		}, 300);
		prevOpened = null;
	}

	let $entry = $( this ).parent();
	if ($entry.attr("opened") === undefined)
	{
		$entry.attr("opened", "");
//idealy this should've been done via "on complete" function submitted for slideUp/slideDown
		setTimeout(function()
		{
			$entry.attr("opened", "1");
		}, 300);
		prevOpened = $entry;
	}
});

//create stylesheet. A little trick to have multi-line text in javascript
let	style = document.createElement("style"),
		css = function(){/*
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
div.title:hover
{
	background-color: #ffffd5;
	-webkit-transition: background 0s;
	color: black;
}

div[white] div.entry:hover div.title,
div[white] div.title:hover
{
	color: black;
}


/* highlight opened entry *//*
.entry[opened]
{
	border: 1px solid black;
}

.entry[opened][white]
{
	border-color: grey;
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

div.entry,
.date
{
	cursor: pointer;
}

.filter
{
	margin-left: 1em;
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
#nu-hidden
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
body:not(.enableWatched) div.entry > input[type="checkbox"]
{
	display: none;
}

body.enableWatched div.entry[watched] > div.title
{
	text-decoration: line-through;
}

div.entry > input[type="checkbox"]
{
	vertical-align: bottom;
	width: unset !important;
	float: left;
}


/*Past related*//*
.past
{
	opacity: 0.5;
}

div.entry.collapse
{
	display: none !important;
}
*/};

style.innerHTML = css.toString().slice(14,-3).split("*//*").join("*/");
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

let engines = window.engines;
engines.add = function(id)
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
			_enginesList.push(engines[i].name);
			_engines.push(engines[i]);
			cs("middleClick", _enginesList);
			return;
		}
	}
};

engines.remove = function(id)
{
	for(let i = 0; i < _engines.length; i++)
	{
		if (_engines[i].name == id || _engines[i].host == id)
		{
			let n = _enginesList.indexOf(_engines[i].name);
			if (n != -1)
				_enginesList.splice(n, 1);

			cs("middleClick", _enginesList);
			_engines.splice(i, 1);
			return;
		}
	}
};

engines.check = function(id)
{
	for(let i = 0; i < _engines.length; i++)
	{
		if (_engines[i].name == id || _engines[i].host == id)
			return i;
	}
	return -1;
};

//middle click on day's title opens selected engines for user's shows
let _engines = [],
		_enginesList = cs("middleClick") || [];

for(let i = 0; i < engines.length; i++)
{
	let n = _enginesList.indexOf(engines[i].name);
	if (n != -1)
		_engines.push(engines[i]);

	if (engines[i].name == "Piratebay")
	{
		//sort by date instead of seeds
		engines[i].href = engines[i].href.replace(/\.se\//, ".org").replace(/\/0\/7\/0$/, "/0/3/0");
	}
}

function middleClick(e, search)
{
	if (e.button != 1)
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

		let title = el.children("div.title").text().replace("?", "").replace(/[0-9]+-[0-9]+-[0-9]+/, ""),
//				MONKEY = encodeURIComponent( title ),
				MONKEY = encodeURIComponent( title.replace(/ E[0-9]+/g, "") ),
				MONKEY_N = encodeURIComponent( title.replace( /S[0-9]+E[0-9]+$/g, '' ) ),
				WIKI_TITLE = encodeURIComponent( el.data("series-source") );

		$.each( _engines, function( i, engine )
		{
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
let markSearchResults = window.markSearchResults;
window.markSearchResults = function()
{
	let entries = $("#searchResults").find("div.entry");
	entries.each(watched.attach);
	$("div.day").each(collapseMulti);

	entries.on("mousedown", function(e)
	{
		middleClick(e, this);
	});
	return markSearchResults();
};
$("div.date,div.title").on("mousedown", middleClick);

//sanitizing engine links
$("body").on("click", "div.entry div.title", function(e)
{
	let obj = this;
	if (obj.inited)
		return;

	obj.inited = true;
	setTimeout(function()
	{
		let showHideObj = document.createElement("a"),
				id = $(obj.parentNode).attr("data-series-id"),
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
			showHide(parseInt(obj.parentNode.getAttribute("data-series-id")), 2);
		}, false);
		$(obj).parent().find(".engines").append(showHideObj).children().each(function(i, o)
		{
			if (o.tagName != "A")
				return;

			let checkbox = document.createElement("input"),
					img = o.previousSibling;

			if (img.tagName != "IMG")
				img = o;

			let engine = img.src ? img.src.match(/\?domain=(.*)/)[1] : null;
			checkbox.engine = engine;
			checkbox.type = "checkbox";
			checkbox.title = "Open with middle click on title";
			checkbox.checked = engines.check(engine) != -1;
			o.parentNode.insertBefore(checkbox, img);
			if (engine == "airdates.tv" || o.className == "showhide")
			{
				checkbox.style.visibility = "hidden";
				return;
			}
			o.href = fixLink(o.href, o.text);

			$(checkbox).on("click", "", function(e)
			{
				if (checkbox.checked)
					engines.add(checkbox.engine);
				else
					engines.remove(checkbox.engine);
			});

		});
	});
});

function fixLink(link, engine)
{
	link = link.replace("%3F", "").replace(/[0-9]+-[0-9]+-[0-9]+(%20)?/, "").replace(/( |%20)E[0-9]+/, "");
	if (engine == "Piratebay")
		link = link.replace(/['"`!]/g, '');
	return link;
}

function createCheckbox(id, label, checked, callback)
{
	let span = document.createElement("span"),
			checkon = document.createElement("span"),
			checkoff = document.createElement("span"),
			a = document.createElement("a"),
			check = cs(checked) ? true : false;
	a.className = "filter " + id;
	checkon.className = "checkon nu";
	checkoff.className = "checkoff nu";
	checkon.innerHTML = "☑";
	checkoff.innerHTML = "☐";
	a.href = "#";
	span.appendChild(checkon);
	span.appendChild(checkoff);
	span.appendChild(document.createTextNode(label));
	a.appendChild(span);
	$(a).insertBefore("#nu-showing");
	let func = function(e)
	{
		e.preventDefault();
		e.stopPropagation();
		let check = span.hasAttribute("checked");
		if (check)
			span.removeAttribute("checked");
		else
			span.setAttribute("checked", "checked");

		$(".calendar").toggleClass(id, !check);
		$("body").toggleClass(id, !check);
		cs(checked, check ? 0 : 1);

		return (typeof(callback) == "function") ? callback(e, id, !check) : e;
	};
	a.addEventListener("click", func, false);
	if (check)
		span.setAttribute("checked", "checked");

	$(".calendar").toggleClass(id, check);
	$("body").toggleClass(id, check);

	return a;
}

function showHideLoad()
{
	if (showHideLoad.inited)
		return;

	if (cs("sh") === null)
	{
		cs("sh", cs("showhidden") ? 1 : 0);
		eraseCookie("showhidden");
	}

	$(".days").before(createCheckbox("showHidden", "Show hidden", "sh"));
	$(".days").before(createCheckbox("collapseMulti", "Collapse multiple", "cm", collapseMulti.onOff));
	$(".days").before(createCheckbox("enableWatched", "Enable watched", "wa"));
	collapseMulti.enabled = cs("cm");
	for(let i = 0; i < _hidden.length; i++)
	{
		showHide(_hidden[i], 1);
	}
	showHideLoad.inited = true;


	let clearColors = $(".clearColors"),
			clearHidden = clearColors.clone(false),
			clearWatched = clearColors.clone(false);

	clearHidden.removeClass();
	clearHidden.addClass(".clearHidden");
	clearHidden.html("Clear hidden");
	clearHidden.insertAfter(clearColors);
	clearWatched.removeClass();
	clearWatched.addClass(".clearWatched");
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

	$("body").off("click", ".importColors");
	$("body").off("click", ".exportColors");
	$("body").on("click", ".importColors", function()
	{
		let str = prompt( "Please enter the crazy text!" );
		if( str )
		{
			let hidden = 0,
					colors = 0,
					watchedNum = 0;
			$.each( str.split( ";" ), function( i, e )
			{
				let color = e.split("=").concat([true] );
				if (color.length == 3)
				{
					assignColor.apply( null, color );
					colors++;
				}
				else
				{
					let json = null;
					try
					{
						json = JSON.parse(color[0]);
					}
					catch(e){}
					if (json)
					{
						if ("hidden" in json)
						{
							hidden = json.hidden.length;
							for(let i = 1; i < json.hidden.length; i++)
								showHide(parseInt(json.hidden[i]), 1);
						}
						if ("watched" in json)
						{
							watchedNum = 0;
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
						}
					}
					else
					{
						color = color[0].split(",");
						hidden = color.length - 1;
						for(let i = 1; i < color.length; i++)
							showHide(parseInt(color[i]), 1);
					}
				}
			});
			let txt = "Imported " + colors + " colors" + ((hidden || watchedNum) ? " and marked " : "");
			if (hidden)
				txt += hidden + " as hidden";
			if (watchedNum)
				txt += (hidden ? ", " : " ") + watchedNum + " as watched";

			alert(txt);
		}
		return false;
	});
	$("body").on( "click", ".exportColors", function()
	{
		let str = $.map(DB.savedColors,function(e,i){return i + "=" + e;}).join(";");
		str = str.replace(/;?[0-9]+=#FFFFFF/i, "");
		let obj = {
			hidden: _hidden,
			watched: watched._list
		};
		str += ";" + JSON.stringify(obj);

		if (str)
				prompt( "This is the crazy text. \nYou can save it in a normal textfile and/or import it to another computer/browser.", str );
		else
				alert("Nothing to export");
		return false;
	});


} //showHideLoad()
//fix when removing color it still saves it in database as #FFFFFF
window.DB._setColor = window.DB.setColor;
window.DB.setColor = function setColor(id, c)
{
	if (c == "#FFFFFF")
		c = "";

	this._setColor(id, c);
};

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
			hidden = false;
			break;
		case 1:
			if (hidden == -1)
				_hidden.push(id);

			hidden = true;
			break;
	}
	let css = $("#css" + id);
	if (hidden)
	{
 		if (!css.length)
 		{
			let style = "<style id='css" + id + "'>"+
									"div.calendar:not(.showHidden).activeOnly .entry[data-series-id='" + id + "'][opened]:not(.collapse){ display: block !important; }"+
									"div.calendar:not(.showHidden) .entry[data-series-id='" + id + "']:not([opened]):not(.searchResult){ display: none !important; }"+
									".entry[data-series-id='" + id + "'] .title{ font-style: italic; }"+
									".entry[data-series-id='" + id + "']{ opacity: 0.3;}"+
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

//splitting New/Returning into two separate filters
if (cs("sn") === null)
{
	let n = cs("n") ? 1 : 0;
	cs("sn", n);
	cs("sr", n);
}
//hiding old combined checkboxes
$( "#nu-showing" ).toggle(false);
$( "#nu-hidden" ).toggle(false);
//add new separate checkboxes
createCheckbox("showNew", "New shows", "sn");
createCheckbox("showReturn", "Returning shows", "sr");

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

//fix paste via right click
$("#searchBecauseNoOneChecks").on( "input", function(e)
{
	$(this).trigger("change");
});

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

	clearTimeout(watched._saving);
	watched._saving = setTimeout(function()
	{
		watched._saving = false;
		ls("watched", watched._list);
	}, 500);
};

watched.has = function(entry)
{
	let id = entry.getAttribute("data-series-id");
	return watched._list[id] && watched._list[id].indexOf(watched.title(entry)) != -1;
};

watched.title = function(entry)
{
	let txt = $(entry).find("div.title").text();
	return txt.substring(txt.lastIndexOf(" ") + 1).replace(/\s+$/g, "");
};

watched.update = function(entry, enable)
{
	if (enable)
	{
		entry.title = "Watched";
		entry.setAttribute("watched", "");
	}
	else
	{
		entry.title = "Not watched";
		entry.removeAttribute("watched");
	}
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
	watched.update(entry, input.checked);

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
	entry.insertBefore(input, entry.firstChild);
	log
};

};//func()

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
					style.innerHTML = function(){/*
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
					}.toString().slice(14,-3).split("*//*").join("*/");
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
}

document.addEventListener("DOMContentLoaded", func ,true);
