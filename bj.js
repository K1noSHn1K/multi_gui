zavod = "";
var train1 = "", train2 = "", train3 = "", specialisation = "", amSpecialisation = "", compName = "", compName2 = "", walk1 = "", walk2 = "", spec = "foret", KCK_Select = KCK_ALL, centerLocalisation = "centerLocalisationForet", nav = 0, mol = 360, name_male = "", name_female = "", offersToBeDone = 10, poroda = 38, shortPause1 = 70, shortPause2 = 100, mediumPause1 = 400, mediumPause2 = 500, longPause1 = 700, longPause2 = 
800, centerCount = 2, centerPosition = 2;

load_settings();
console.log("Abort state = " + ReadLocalStorage(doAbort));
console.log("Offers state = " + ReadLocalStorage(offers));


var HayToGive = 12, OatsToGive = 10;
if ("undefined" !== typeof e1) {
	var enduranceTComplet = e1, vitesseTComplet = e2, dressageTComplet = e3, galopTComplet = e4, trotTComplet = e5, sautTComplet = e6, foretComplet = b3, montagneComplet = b1;
}

var genetics = ["galopGenetique"], lastParentPage = "", lastParentSex = "", offers = "BJ_offers", doAbort = "BJ_doAbort";
if (void 0 === ReadLocalStorage(doAbort) || null === ReadLocalStorage(doAbort)) {
	SaveLocalStorage(doAbort, !1);
}


"" != ReadLocalStorage(offers) && void 0 !== ReadLocalStorage(offers) && null !== ReadLocalStorage(offers) || SaveLocalStorage(offers, 0);
var amunitionEquiped = "amunitionEquiped" + getMyParameterByName("sautGenetique");
if (window.self != window.top) {
	throw "stop";
}

var pause_reload = 25000;
!1 === /www.lowadi.com\/elevage\/bureau/.test(window.location.href) && setTimeout(reload, pause_reload);
/www.lowadi.com\/elevage\/chevaux\/\?elevage=all-horses/.test(window.location.href) && history.go(-2);
if (/\/marche\/noir\/object\?qName=/.test(window.location.href)) {
	var pause = getRandomPause(2 * longPause1, 2 * longPause2);
	setTimeout(st, pause);
	var pause1 = pause + getRandomPause(2 * longPause1, 2 * longPause2);
	setTimeout(doR, pause1);
}

if (/\/elevage\/chevaux\/cheval\?id=/.test(window.location.href)) {
	var sante = document.getElementById("sante").textContent;
	75 < sante && (6 >= chevalAge ? -1 == chevalNom.indexOf(".") ? (ClearLocalStorage(amunitionEquiped), giveHorseName()) : MainProg() : 6 < chevalAge && 16 >= chevalAge ? MainProg() : HorseTraining());
}

function MainProg() {
	function a() {
		if (/elevage\/chevaux\/centreInscription\?id=/.test(document.body.innerHTML)) {
			var c = getRandomPause(shortPause1, shortPause2);
			setTimeout(eqCenterReg, c);
			c += getRandomPause(mediumPause1, mediumPause2);
			setTimeout(a, c);
		} else {
			getRandomPause(shortPause1, shortPause2), setTimeout(b, c);
		}
	}
	function b() {
		var a = document.getElementsByClassName("action action-style-4 panser action-disabled"), b = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? a = getRandomPause(shortPause1, shortPause2) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(groom, a), a += getRandomPause(shortPause1, shortPause2));
		setTimeout(c, a);
	}
	function c() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), c = document.getElementById("feeding"), f = -1;
		null !== c && (f = c.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== f || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(g, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(doEatNorm, a), a += getRandomPause(longPause1, longPause2), setTimeout(b, a));
	}
	function g() {
		if (20 > document.getElementById("energie").innerHTML) {
			var a = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
			void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(f, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(g, a));
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(f, a);
		}
	}
	function f() {
		var a = document.getElementsByClassName("action action-style-4 coucher-box action-disabled"), b = document.getElementsByClassName("action action-style-4 coucher action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(OR, a), a += getRandomPause(longPause1, longPause2), setTimeout(pauseFunc, a), a += getRandomPause(2 * longPause1, 2 * longPause2), setTimeout(reload, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(f, a));
	}
	var h = getRandomPause(shortPause1, shortPause2);
	setTimeout(a, h);
}

function HorseTraining() {
	16 < chevalAge && 22 >= chevalAge ? (OatsToGive = 12, Walks(walk1)) : void 0 === document.getElementsByClassName("action action-style-4 competition-barrel action")[0] && void 0 === document.getElementsByClassName("action action-style-4 competition-galop action")[0] && 36 < chevalAge ? EquipAmunition() : 100 > getMyParameterByName(walk1 + "Complet") ? (OatsToGive = HayToGive = 14, Walks(walk1)) : 100 > getMyParameterByName(train1 + "TComplet") ? (OatsToGive = 14, Train(train1)) : 100 > getMyParameterByName(train2 + 
	"TComplet") ? (OatsToGive = 12, Train(train2)) : 60 < $(".competition-" + compName).attr("data-tooltip").length && 120 > chevalAge ? (console.log("\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u044f"), HayToGive = -1, OatsToGive = 10, 25 < chevalEnergie && 1270 > timeConvert() ? (console.log("-=CompnoVIP=- Energy: " + chevalEnergie + " Time: " + timeConvert()), CompNoVIP()) : (console.log("-=ANOTHER=- Energy: " + chevalEnergie + " Time: " + timeConvert()), setTimeout(carrot, 
	100), setTimeout(minEnergy, 400), setTimeout(mash(), 700), setTimeout(sleep, 1000), setTimeout(OR, 1100))) : 100 > getMyParameterByName(train3 + "TComplet") ? (OatsToGive = 12, Train(train3)) : 100 > getMyParameterByName(walk2 + "Complet") && "" != walk2 ? (OatsToGive = HayToGive = 14, Walks(walk2)) : "" != compName2 && 60 < $(".competition-" + compName2).attr("data-tooltip").length && 120 > chevalAge ? CompNoVIP_Second() : 120 > chevalAge ? (HayToGive = 12, OatsToGive = 14, setTimeout(function() {
		MainProg();
	}, 400)) : (30 > chevalEnergie && (setTimeout(carrot, 100), setTimeout(minEnergy, 400), setTimeout(mash(), 700), setTimeout(sleep, 1000), setTimeout(OR, 1100)), "feminin" == chevalSexe ? BirthProg() : "masculin" == chevalSexe && parseInt(ReadLocalStorage(offers), 10) < offersToBeDone ? GiveSluchki(5) : "masculin" == chevalSexe && parseInt(ReadLocalStorage(offers), 10) >= offersToBeDone && (ClearLocalStorage(offers), GoToMother()));
}

function doR() {
	document.getElementsByClassName("button button-style-2")[0].click();
}

function st() {
	var a = document.getElementById("inventaire-utilisation-standard");
	null !== a && a.click();
}

function GiveSluchki(a) {
	function b() {
		var a = document.getElementsByClassName("action action-style-4 panser action-disabled"), e = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(c, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(groom, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(b, a));
	}
	function c() {
		if (800 < timeConvert() && 1200 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				competitionByName1();
			}, a);
			a += getRandomPause(mediumPause1, mediumPause2);
			setTimeout(c, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(g, a);
		}
	}
	function g() {
		if (540 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(giveOfferForTeam, a);
			a += getRandomPause(2 * longPause1, 2 * longPause2);
			setTimeout(g, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(f, a);
		}
	}
	function f() {
		var a = document.getElementsByClassName("action action-style-4 boire action-disabled"), e = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(h, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(f, a));
	}
	function h() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled");
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(k, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(openFeeding, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(doEatDef, a), a += getRandomPause(longPause1, longPause2), setTimeout(h, a));
	}
	function k() {
		if (22 < document.getElementById("energie").innerHTML && 800 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(giveOfferForTeam, a);
			a += getRandomPause(3 * longPause1, 3 * longPause2);
			setTimeout(k, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(l, a);
		}
	}
	function l() {
		var e = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		1100 < timeConvert() || void 0 !== e[0] || void 0 !== b[0] || (console.log("offers=" + ReadLocalStorage(offers)), SaveLocalStorage(offers, parseInt(ReadLocalStorage(offers), 10) + a), console.log("offers=" + ReadLocalStorage(offers)));
		e = getRandomPause(shortPause1, shortPause2);
		setTimeout(m, e);
	}
	function m() {
		var a = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(e, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(m, a));
	}
	function e() {
		var a = document.getElementsByClassName("action action-style-4 carotte action-disabled"), b = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(n, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(carrot, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(e, a));
	}
	function n() {
		var a = document.getElementsByClassName("action action-style-4 carotte action-disabled"), e = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), b = document.getElementsByClassName("action action-style-4 coucher-box action-disabled");
		void 0 === b[0] || void 0 === a[0] && void 0 === e[0] || parseInt(ReadLocalStorage(offers), 10) != offersToBeDone ? void 0 === b[0] || void 0 === a[0] && void 0 === e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(3 * longPause1, 3 * longPause2), setTimeout(n, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(OR, a), a += getRandomPause(3 * longPause1, 3 * longPause2), setTimeout(pauseFunc, a)) : (ClearLocalStorage(offers), GoToMother());
	}
	var p = getRandomPause(shortPause1, shortPause2);
	setTimeout(b, p);
}

function GoToMother() {
	var a = document.getElementsByClassName("horsename")[1].href;
	document.location.replace("http://www.lowadi.com/elevage/chevaux/cheval?id=" + a.substring(a.search("=") + 1));
}
function giveOfferForTeam() {
	var a = 0 + getRandomPause(mediumPause1, mediumPause2);
	setTimeout(openReproduction, a);
	a += getRandomPause(mediumPause1, mediumPause2);
	setTimeout(selectTeamOffers, a);
	var b = a + getRandomPause(mediumPause1, mediumPause2);
	setTimeout(doOffer, b);
	a += getRandomPause(longPause1, longPause2);
	setTimeout(pauseFunc, a);
}
function selectTeamOffers() {
	document.getElementById("formMalePublicTypeEquipe").click();
}
function doOffer() {
	document.getElementById("boutonMaleReproduction").click();
}
function testSpeed() {
	var a = new Date;
	loadURL("https://www.lowadi.com/elevage/chevaux/");
	return new Date - a;
}
function timeConvert() {
	var a = document.getElementsByClassName("hour").item(0).innerHTML, b = parseInt(a.substring(0, 3));
	a = parseInt(a.substring(3));
	return 60 * b + a;
}
function BirthProg() {
	console.log(doAbort + "=" + ReadLocalStorage(doAbort));
	var a = null !== document.getElementById("alerteVeterinaireContent") && (0 == ReadLocalStorage(doAbort) || chevalAge > mol);
	console.log("\u041d\u0443\u0436\u043d\u043e \u0440\u043e\u0436\u0430\u0442\u044c = " + a);
	a ? document.getElementById("lienVeterinaire").click() : 800 < timeConvert() ? (a = getRandomPause(mediumPause1, mediumPause2), setTimeout(MainProg, a)) : 0 == nav ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(openReproduction, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(Train1, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(openReproduction, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(MainProg, a));
}
function Train1() {
	void 0 !== document.getElementsByClassName("action action-style-4 competition-" + compName + " action-disabled")[0] ? MainProg() : 100 > getMyParameterByName("dressageTComplet") ? (OatsToGive = 12, HayToGive = -1, Train("dressage")) : 100 > getMyParameterByName("enduranceTComplet") ? (OatsToGive = 12, Train("endurance")) : 100 > getMyParameterByName("sautTComplet") ? (OatsToGive = 12, Train("saut")) : 100 > getMyParameterByName("trotTComplet") ? (OatsToGive = 12, Train("trot")) : 100 > getMyParameterByName("galopTComplet") ? 
	(OatsToGive = 12, Train("galop")) : 100 > getMyParameterByName("vitesseTComplet") ? (OatsToGive = 12, Train("vitesse")) : MainProg();
}
function openReproduction() {
	if (null !== document.getElementById("reproduction-bottom")) {
		var a = document.getElementById("reproduction-tab-0").getElementsByTagName("a")[1];
		a.click();
		if (-1 != a.className.indexOf("action action-style-4 echographie")) {
			var b = "";
			a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				var a = document.getElementById("reproduction-tab-1").getElementsByClassName("col-1");
				console.log(a);
				a = a[0].childNodes[0].nodeValue;
				console.log(a);
				b = -1 != a.indexOf("\u0436\u0435\u0440\u0435\u0431") ? "masculin" : "feminin";
				console.log("childSexe=" + b);
				lParentSex = getLastParentSexForBirth();
				console.log("!!getLastParentSexForBirth=" + getLastParentSexForBirth());
				lParentSex == b ? SaveLocalStorage(doAbort, 1) : SaveLocalStorage(doAbort, 0);
				console.log("openReproduction/doAbort=" + ReadLocalStorage(doAbort));
			}, a);
		}
	}
}
function reserve() {
	"tab-style-6-0-0 selected" != document.getElementById("tab-1").className && document.getElementsByClassName("tab-action")[1].click();
}
function doReproduction() {
	var a = document.getElementsByClassName("button button-style-0");
	document.getElementById("race").options[poroda].selected = !0;
	1 == document.getElementById("race").options[poroda].selected && a.item(0).click();
}
function doReproduction2() {
	document.getElementsByClassName("button button-style-0")[1].click();
}
if (/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href)) {
	-1 !== document.body.innerHTML.indexOf("femelle_v1828806360.png") ? document.getElementById("poulain-1").setAttribute("value", "\u041a\u043e\u0431\u044b\u043b\u0430") : document.getElementById("poulain-1").setAttribute("value", "\u0416\u0435\u0440\u0435\u0431\u0435\u043d\u043e\u043a");
	var d = document.getElementsByTagName("button");
	"submit" == d[d.length - 1].getAttribute("type") && d[d.length - 1].click();
}
/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href) && (pause = getRandomPause(longPause1, longPause2), setTimeout(function() {
	document.getElementById("boutonDoReproduction").click();
}, pause));
if (/www.lowadi.com\/elevage\/chevaux\/rechercherMale\?jument=/.test(window.location.href)) {
	var n0 = location.search.slice(location.search.indexOf("=") + 1);
	document.location.replace("https://www.lowadi.com/elevage/chevaux/rechercherMale?tri=cTotal&page=0&sens=DESC&rechercher=1&potentielTotal=0&prix=0&blup=-100&race=" + poroda + "&purete=2&cE=0&cV=0&cD=0&cG=0&cT=0&cS=0&cheval=1&poney=1&pegase=1&=1&licorne=1&licorne-ailee=1&jument=" + n0 + "&type=equipe");
}
/www.lowadi.com\/elevage\/chevaux\/rechercherMale\?tri=/.test(window.location.href) && (pause = getRandomPause(longPause1, longPause2), setTimeout(function() {
	document.getElementsByClassName("button button-style-0")[1].click();
}, pause));
function timeConvert() {
	var a = document.getElementsByClassName("hour"), b = a.item(0).innerHTML;
	a = parseInt(b.substring(0, 3));
	b = parseInt(b.substring(3));
	return 60 * a + b;
}
/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href) && (-1 !== document.body.innerHTML.indexOf("femelle_v1828806360.png") ? document.getElementById("poulain-1").setAttribute("value", "\u041a\u043e\u0431\u044b\u043b\u0430") : document.getElementById("poulain-1").setAttribute("value", "\u0416\u0435\u0440\u0435\u0431\u0435\u0446"), d = document.getElementsByTagName("button"), "submit" == d[d.length - 1].getAttribute("type") && d[d.length - 1].click());
/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href) && (pause1 = getRandomPause(mediumPause1, mediumPause2), pause = pause1 + getRandomPause(2 * mediumPause1, 2 * mediumPause2), setTimeout(function() {
	document.getElementById("boutonDoReproduction").click();
}, pause));
function loadURL(a) {
	var b = new XMLHttpRequest;
	b.open("GET", a, !1);
	b.send(null);
	return b.responseText;
}
function getGenetics(a) {
	document.getElementById("tab-genetics-title").onclick();
	return document.getElementById(a).childNodes[0].nodeValue;
}
function getLastParent() {
	if ("" === lastParentPage) {
		var a = document.getElementsByClassName("horsename");
		console.log(a);
		var b = a[0].href.substring(a[0].href.search("=") + 1);
		a = a[a.length - 1].href.substring(a[a.length - 1].href.search("=") + 1);
		b > a ? (lastParentPage = "", lastParentPage = loadURL("http://www.lowadi.com/elevage/fiche/?id=" + b)) : (lastParentPage = "", lastParentPage = loadURL("http://www.lowadi.com/elevage/fiche/?id=" + a));
	}
	return lastParentPage;
}
function getLastParentSex() {
	var a = document.getElementById("tab-genetics").getElementsByClassName("horsename"), b = a[0].href.substring(a[0].href.search("=") + 1);
	a = a[a.length - 1].href.substring(a[a.length - 1].href.search("=") + 1);
	console.log(b + ";" + a + ";" + chevalId);
	return lastParentSex = b > a ? "masculin" : "feminin";
}
function getLastParentSexForBirth() {
	var a = document.getElementById("reproduction").getElementsByClassName("horsename");
	console.log(a);
	a = a[0].href.substring(a[0].href.search("=") + 1);
	console.log("d0=" + a + "; d=" + chevalId);
	lastParentSexForBirth = chevalId > a ? "feminin" : "masculin";
	console.log("lastParentSexForBirth=" + lastParentSexForBirth);
	return lastParentSexForBirth;
}
function getLastParentGenetics(a) {
	var b = getLastParent();
	a = b.substring(b.search(a) + a.length + 2);
	return a.substring(0, a.search("<"));
}
function Walks(a) {
	function b() {
		var a = document.getElementsByClassName("action action-style-4 panser action-disabled"), e = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(c, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(groom, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(b, a));
	}
	function c() {
		var a = document.getElementById("moral").textContent, e = document.getElementsByClassName("action action-style-4 boire action-disabled"), b = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		99 < a || void 0 !== e[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(g, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(c, a));
	}
	function g() {
		if (600 < timeConvert()) {
			var e = getRandomPause(shortPause1, shortPause2);
			setTimeout(f, e);
		} else {
			e = getRandomPause(shortPause1, shortPause2), setTimeout(function() {
				walk_another(a, 5);
			}, e), e += getRandomPause(mediumPause1, mediumPause2), setTimeout(g, e);
		}
	}
	function f() {
		if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(h, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(mash, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(f, a);
		}
	}
	function h() {
		var a = document.getElementsByClassName("action action-style-4 boire action-disabled"), e = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(k, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(h, a));
	}
	function k() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), e = document.getElementById("feeding"), b = -1;
		null !== e && (b = e.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== b || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(l, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(doEatDef, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(k, a));
	}
	function l() {
		var e = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), c = document.getElementsByClassName("action action-style-4 carotte action-disabled"), p = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled"), f = document.getElementById("energie").innerHTML;
		void 0 !== e[0] || void 0 !== b[0] || void 0 !== c[0] || void 0 !== p[0] || 10 > f || 1300 < timeConvert() ? (e = getRandomPause(shortPause1, shortPause2), setTimeout(m, e)) : (e = getRandomPause(shortPause1, shortPause2), setTimeout(function() {
			walk(a);
		}, e), e += getRandomPause(mediumPause1, mediumPause2), setTimeout(l, e));
	}
	function m() {
		var a = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(e, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(m, a));
	}
	function e() {
		var a = document.getElementsByClassName("action action-style-4 carotte action-disabled"), b = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(n, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(carrot, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(e, a));
	}
	function n() {
		if (void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0]) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(OR, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(pauseFunc, a);
			a += getRandomPause(2 * longPause1, 2 * longPause2);
			setTimeout(reload, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(e, a);
		}
	}
	var p = getRandomPause(shortPause1, shortPause2);
	setTimeout(b, p);
}
function walk_another(a, b) {
	document.getElementById("energie");
	var c = timeConvert();
	c = Math.floor((1350 - c) / 30);
	switch(a) {
	case "foret":
		var g = document.getElementById("walkforetSlider").getElementsByTagName("li");
		var f = document.getElementById("walkforetSlider-sliderHidden");
		var h = document.getElementById("walk-foret-submit");
		break;
	case "montagne":
		g = document.getElementById("walkmontagneSlider").getElementsByTagName("li"), f = document.getElementById("walkmontagneSlider-sliderHidden"), h = document.getElementById("walk-montagne-submit");
	}
	for (c = trainTime = b <= c ? b : c; 0 <= c; c--) {
		if ("green hiddenNumber disabled" !== g[c].className && "green disabled" !== g[c].className) {
			g[c].className += " selected";
			g[c].click();
			f.value = c;
			g[c].click();
			h.click();
			break;
		}
	}
}
function walk(a) {
	document.getElementById("energie");
	var b = timeConvert();
	b = Math.floor((1380 - b) / 30);
	switch(a) {
	case "foret":
		var c = document.getElementById("walkforetSlider").getElementsByTagName("li");
		var g = document.getElementById("walkforetSlider-sliderHidden");
		var f = document.getElementById("walk-foret-submit");
		break;
	case "montagne":
		c = document.getElementById("walkmontagneSlider").getElementsByTagName("li"), g = document.getElementById("walkmontagneSlider-sliderHidden"), f = document.getElementById("walk-montagne-submit");
	}
	for (a = 20 <= b ? 20 : b; 0 <= a; a--) {
		if ("green hiddenNumber disabled" !== c[a].className && "green disabled" !== c[a].className) {
			c[a].className += " selected";
			c[a].click();
			g.value = a;
			c[a].click();
			f.click();
			break;
		}
	}
}
function Train(a) {
	switch(a) {
	case "dressage":
	case "galop":
	case "saut":
	case "trot":
	case "endurance":
	case "vitesse":
		Train9(a);
	}
}
function Train9(a) {
	function b() {
		var a = document.getElementsByClassName("action action-style-4 panser action-disabled"), e = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(c, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(groom, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(b, a));
	}
	function c() {
		document.getElementById("energie");
		if (600 < timeConvert()) {
			var e = getRandomPause(shortPause1, shortPause2);
			setTimeout(g, e);
		} else {
			e = getRandomPause(shortPause1, shortPause2), setTimeout(function() {
				train(a, 6);
			}, e), e += getRandomPause(mediumPause1, mediumPause2), setTimeout(c, e);
		}
	}
	function g() {
		if (void 0 !== document.getElementsByClassName("action action-style-4 mash action-disabled")[0]) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(f, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(mash, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(g, a);
		}
	}
	function f() {
		var a = document.getElementsByClassName("action action-style-4 boire action-disabled"), e = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(h, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(f, a));
	}
	function h() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled"), e = document.getElementById("feeding"), b = -1;
		null !== e && (b = e.innerHTML.indexOf("\u0442\u043e\u043b\u0441\u0442"));
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || -1 !== b || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(k, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(doEatDef, a), a += getRandomPause(longPause1, longPause2), setTimeout(h, a));
	}
	function k() {
		var e = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled"), c = document.getElementById("energie").textContent;
		30 > c || void 0 !== e[0] || void 0 !== b[0] || 1300 < timeConvert() ? (c = getRandomPause(shortPause1, shortPause2), setTimeout(l, c)) : (e = getMyParameterByName(a + "TComplet"), 94 > e ? (c = getRandomPause(shortPause1, shortPause2), setTimeout(function() {
			train(a, 20);
		}, c), c += getRandomPause(mediumPause1, mediumPause2), setTimeout(k, c)) : 94 < e && 1300 > timeConvert() && 94 < e && 15 < c ? (c = getRandomPause(shortPause1, shortPause2), setTimeout(function() {
			walk(walk1);
		}, c), c += getRandomPause(longPause1, longPause2), setTimeout(k, c)) : (c = getRandomPause(shortPause1, shortPause2), setTimeout(l, c)));
	}
	function l() {
		var a = document.getElementsByClassName("action action-style-4 caresser action-disabled"), e = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		void 0 !== a[0] || void 0 !== e[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(m, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(l, a));
	}
	function m() {
		var a = document.getElementById("energie").textContent, b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), c = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
		19 < a || void 0 !== b[0] || void 0 !== c[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(e, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(carrot, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(m, a));
	}
	function e() {
		var a = document.getElementsByClassName("action action-style-4 caresser action-disabled"), b = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		void 0 === document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0] || void 0 === a[0] && void 0 === b[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(e, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(OR, a), a += getRandomPause(longPause1, longPause2), setTimeout(pauseFunc, a), a += getRandomPause(2 * longPause1, 2 * longPause2), setTimeout(reload, a));
	}
	var n = getRandomPause(shortPause1, shortPause2);
	setTimeout(b, n);
}
function train(a, b) {
	var c, g = timeConvert();
	g = Math.floor((1351 - g) / 30);
	switch(a) {
	case "endurance":
		var f = document.getElementById("trainingEnduranceSlider").getElementsByTagName("li");
		var h = document.getElementById("trainingEnduranceSlider-sliderHidden");
		var k = document.getElementById("training-endurance-submit");
		break;
	case "vitesse":
		f = document.getElementById("trainingVitesseSlider").getElementsByTagName("li");
		h = document.getElementById("trainingVitesseSlider-sliderHidden");
		k = document.getElementById("training-vitesse-submit");
		break;
	case "dressage":
		f = document.getElementById("trainingDressageSlider").getElementsByTagName("li");
		h = document.getElementById("trainingDressageSlider-sliderHidden");
		k = document.getElementById("training-dressage-submit");
		break;
	case "galop":
		f = document.getElementById("trainingGalopSlider").getElementsByTagName("li");
		h = document.getElementById("trainingGalopSlider-sliderHidden");
		k = document.getElementById("training-galop-submit");
		break;
	case "trot":
		f = document.getElementById("trainingTrotSlider").getElementsByTagName("li");
		h = document.getElementById("trainingTrotSlider-sliderHidden");
		k = document.getElementById("training-trot-submit");
		break;
	case "saut":
		f = document.getElementById("trainingSautSlider").getElementsByTagName("li"), h = document.getElementById("trainingSautSlider-sliderHidden"), k = document.getElementById("training-saut-submit");
	}
	for (b <= g ? c = b : b > g && (c = g); 0 <= c; c--) {
		if ("green hiddenNumber disabled" !== f[c].className && "green disabled" !== f[c].className) {
			f[c].className += " selected";
			f[c].click();
			h.value = c;
			f[c].click();
			k.click();
			break;
		}
	}
}
function EquipAmunition() {
	var a = pause + getRandomPause(mediumPause1, mediumPause2);
	setTimeout(specialization, a);
	a += getRandomPause(mediumPause1, mediumPause2);
	setTimeout(amunition1, a);
	a += getRandomPause(3 * mediumPause1, 3 * mediumPause2);
	setTimeout(amunition2, a);
}
function specialization() {
	document.getElementById(specialisation).getElementsByTagName("button")[0].click();
	setTimeout(function() {
		location.reload();
	}, 1500);
}
function amunition1() {
	var a = document.getElementById("competition-body-content").getElementsByTagName("a");
	console.log(a[0]);
	a[0].click();
}
function amunitionById(a) {
	document.getElementById(a).click();
}
function amunition2() {
	var a = 0 + getRandomPause(5 * mediumPause1, 5 * mediumPause2);
	setTimeout(function() {
		amunitionById("modele-tapis-" + amSpecialisation + "-1x");
	}, a);
	a += getRandomPause(mediumPause1, mediumPause2);
	setTimeout(function() {
		amunitionById("modele-selle-" + amSpecialisation + "-1x");
	}, a);
	a += getRandomPause(mediumPause1, mediumPause2);
	setTimeout(function() {
		amunitionById("modele-bride-" + amSpecialisation + "-1x");
	}, a);
	var b = a + getRandomPause(mediumPause1, mediumPause2);
	setTimeout(function() {
		var a = document.getElementById("choisir-equipement-popup-content").getElementsByTagName("button");
		console.log(a[a.length - 1]);
		a[a.length - 1].click();
		void 0 === document.getElementsByClassName("action action-style-4 competition-galop action")[0] && void 0 === document.getElementsByClassName("action action-style-4 competition-barrel action")[0] && (getRandomPause(10 * mediumPause1, 10 * mediumPause2), setTimeout(function() {
			location.reload();
		}, b));
	}, b);
}
if (/www.lowadi.com\/elevage\/competition\/inscription\?cheval=/.test(window.location.href)) {
	var pause2 = getRandomPause(2 * mediumPause1, 2 * mediumPause2);
	setTimeout(competitionInscript, pause2);
	var pause3 = pause2 + getRandomPause(4 * mediumPause1, 4 * mediumPause2);
	setTimeout(competitionInscript, pause3);
	var pause4 = pause2 + getRandomPause(6 * mediumPause1, 6 * mediumPause2);
	setTimeout(checkComp, pause4);
}
function competitionInscript() {
	document.getElementById("public").getElementsByClassName("button button-style-0").item(0).click();
}
function checkComp() {
	void 0 !== document.getElementsByClassName("fieldErrorText into")[0] && location.reload();
}
function competitionByName(a) {
	console.log("competitionByName" + chevalEnergie);
	a = document.getElementsByClassName("action action-style-4 competition-" + a);
	document.location.replace(a.item(0).href);
}
function competitionByNameVIP(a) {
	console.log("competitionByNameVIP" + chevalEnergie);
	document.getElementsByClassName("action action-style-4 competition-" + a).item(0).click();
}
function CompNoVIP() {
	function a() {
		var e = document.getElementsByClassName("action action-style-4 panser action-disabled"), c = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== e[0] || void 0 !== c[0] ? (e = getRandomPause(shortPause1, shortPause2), setTimeout(b, e)) : (e = getRandomPause(shortPause1, shortPause2), setTimeout(groom, e), e += getRandomPause(mediumPause1, mediumPause2), setTimeout(a, e));
	}
	function b() {
		var a = document.getElementsByClassName("action action-style-4 boire action-disabled"), f = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		void 0 !== a[0] || void 0 !== f[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(c, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(b, a));
	}
	function c() {
		if (700 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				35 < chevalEnergie ? competitionByNameVIP(compName) : g();
			}, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(c, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(g, a);
		}
	}
	function g() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled");
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(f, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(openFeeding, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(doEatDef, a), a += getRandomPause(longPause1, longPause2), setTimeout(g, a));
	}
	function f() {
		if (1250 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				30 < chevalEnergie ? competitionByNameVIP(compName) : h();
			}, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(f, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(h, a);
		}
	}
	function h() {
		var a = document.getElementById("energie").textContent, b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), c = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		20 < a || void 0 !== b[0] || void 0 !== c[0] || 1395 < timeConvert() ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(k, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(h, a));
	}
	function k() {
		var a = chevalEnergie, b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), c = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
		20 < a || void 0 !== b[0] || void 0 !== c[0] || 1410 < timeConvert() ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(l, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(carrot, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(k, a));
	}
	function l() {
		if (void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0]) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(OR, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(pauseFunc, a);
			a += getRandomPause(2 * longPause1, 2 * longPause2);
			setTimeout(reload, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(l, a);
		}
	}
	var m = getRandomPause(shortPause1, shortPause2);
	setTimeout(a, m);
}
function doEatDef() {
	var a = !1, b = document.getElementById("feeding").innerHTML;
	var c = -1 == HayToGive ? hayToGive() : HayToGive;
	var g = -1 == OatsToGive ? oatsToGive() : OatsToGive;
	if (0 !== c + g) {
		-1 !== b.indexOf("\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0439") && (c = 20 - hayGiven(), g = 15 - oatsGiven());
		if (-1 !== b.indexOf("haySlider")) {
			var f = document.getElementById("haySlider").getElementsByTagName("li");
			a = c;
			f[a].className += " selected";
			f[a].click();
			f = document.getElementById("haySlider-sliderHidden");
			f.setAttribute("value", a);
			a = !0;
		}
		-1 !== b.indexOf("oatsSlider") && (f = document.getElementById("oatsSlider").getElementsByTagName("li"), a = g, f[a].className += " selected", f[a].click(), f = document.getElementById("oatsSlider-sliderHidden"), f.setAttribute("value", a), a = !0);
		!1 === a && (-1 !== b.indexOf('id="feedingHay"') && (document.getElementById("feedingHay").options[c].selected = !0), -1 !== b.indexOf('id="feedingOats"') && (document.getElementById("feedingOats").options[g].selected = !0));
		b = document.getElementById("feed-button");
		null !== b && b.click();
	}
}
function doEatNorm() {
	if (-1 !== document.body.innerHTML.indexOf("boutonAllaiter")) {
		document.getElementById("boutonAllaiter").click();
	} else {
		var a = !1, b = document.getElementById("feeding").innerHTML, c = hayToGive(), g = oatsToGive();
		if (0 !== c + g && -1 === b.indexOf("\u0442\u043e\u043b\u0441\u0442")) {
			-1 !== b.indexOf("\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u044b\u0439") && (c = 20 - hayGiven(), g = 15 - oatsGiven());
			if (-1 !== b.indexOf("haySlider")) {
				var f = document.getElementById("haySlider").getElementsByTagName("li");
				a = c;
				f[a].className += " selected";
				f[a].click();
				f = document.getElementById("haySlider-sliderHidden");
				f.setAttribute("value", a);
				a = !0;
			}
			-1 !== b.indexOf("oatsSlider") && (f = document.getElementById("oatsSlider").getElementsByTagName("li"), a = g, f[a].className += " selected", f[a].click(), f = document.getElementById("oatsSlider-sliderHidden"), f.setAttribute("value", a), a = !0);
			!1 === a && (-1 !== b.indexOf('id="feedingHay"') && (document.getElementById("feedingHay").options[c].selected = !0), -1 !== b.indexOf('id="feedingOats"') && (document.getElementById("feedingOats").options[g].selected = !0));
			b = document.getElementById("feed-button");
			null !== b && b.click();
		}
	}
}
function hayToGive() {
	var a = 1 * hayNorm() - 1 * hayGiven();
	0 > a && (a = 0);
	20 < a && (a = 20);
	return a;
}
function oatsToGive() {
	if (-1 !== document.getElementById("feeding").outerHTML.indexOf("oats") || -1 !== document.getElementById("feeding").outerHTML.indexOf("Oats")) {
		var a = 1 * oatsNorm() - 1 * oatsGiven();
		0 > a && (a = 0);
		15 < a && (a = 15);
		return a;
	}
	return 0;
}
function hayNorm() {
	return document.getElementsByClassName("section-fourrage section-fourrage-target")[0].childNodes[0].nodeValue;
}
function hayGiven() {
	var a = document.getElementsByClassName("float-right section-fourrage section-fourrage-quantity")[0].outerHTML;
	return a.substring(a.indexOf("/ <strong class") - 3, a.lastIndexOf("/ <strong class"));
}
function oatsNorm() {
	return document.getElementsByClassName("section-avoine section-avoine-target")[0].childNodes[0].nodeValue;
}
function oatsGiven() {
	var a = document.getElementsByClassName("float-right section-avoine section-avoine-quantity")[0].outerHTML;
	return a.substring(a.indexOf("/ <strong class") - 3, a.lastIndexOf("/ <strong class"));
}
function reload() {
	location.reload();
}
function lesson() {
	var a = document.getElementById("boutonMissionEquus");
	null !== a && a.click();
	a = document.getElementById("boutonMissionMontagne");
	null !== a && a.click();
	a = document.getElementById("boutonMissionForet");
	null !== a && a.click();
	a = document.getElementById("boutonMissionPlage");
	null !== a && a.click();
}
function groom() {
	var a = document.getElementById("boutonPanser");
	null !== a && a.click();
}
function minEnergy() {
	if (20 > chevalEnergie) {
		var a = document.getElementById("boutonCaresser");
		if (a.hasAttribute("onclick")) {
			a.onclick();
		}
		a = document.getElementById("boutonBoire");
		if (a.hasAttribute("onclick")) {
			a.onclick();
		}
	}
}
function sleep() {
	var a = document.getElementById("boutonCoucher");
	null !== a && a.click();
}
function stroke() {
	var a = document.getElementById("boutonCaresser");
	null !== a && a.click();
}
function carrot() {
	var a = document.getElementById("boutonCarotte");
	null !== a && a.click();
}
function drink() {
	var a = document.getElementById("boutonBoire");
	null !== a && a.click();
}
function mash() {
	var a = document.getElementById("boutonMash");
	null !== a && a.click();
}
function OR() {
	minEnergy();
	var a = document.getElementById("age").getElementsByTagName("button");
	null !== a[0] && a[0].click();
}
function giveHorseName() {
	enduranceGenetique.toString().split(".")[1].substring(0, 2);
	var a = 0 + getRandomPause(shortPause1, shortPause2);
	setTimeout(function() {
		document.getElementById("widget--1").click();
	}, a);
	a += getRandomPause(shortPause1 / 4, shortPause2 / 4);
	setTimeout(function() {
		document.getElementsByClassName("options-menu")[0].getElementsByClassName("first")[0].getElementsByTagName("a")[2].click();
	}, a);
	a += getRandomPause(shortPause1, shortPause2);
	setTimeout(function() {
		var a = document.getElementById("horseNameName");
		("" + getMyParameterByName(genetics[0])).split(".");
		a.value = ("masculin" == chevalSexe ? name_male : name_female) + " " + (enduranceGenetique + vitesseGenetique + dressageGenetique + galopGenetique + trotGenetique + sautGenetique).toFixed(2);
	}, a);
	a += getRandomPause(shortPause1 / 4, shortPause2 / 4);
	setTimeout(function() {
		document.getElementById("horseNameAffixe").getElementsByTagName("optgroup")[1].getElementsByTagName("option")[0].setAttribute("selected", "selected");
	}, a);
	a += getRandomPause(shortPause1, shortPause2);
	setTimeout(function() {
		"" === zavod && " " === zavod || $("#horseNameElevage").val(zavod);
	}, a);
	getRandomPause(shortPause1, shortPause2);
	setTimeout(function() {
		document.getElementById("profil-popup-content").getElementsByClassName("spacer-small-top button button-style-0")[0].click();
	}, a);
}
function SaveLocalStorage(a, b) {
	localStorage.setItem(a, b);
}
function ReadLocalStorage(a) {
	var x = localStorage.getItem(a);
	return x;
}
function ClearLocalStorage(a) {
	localStorage.setItem(a, "");
}
function getGlobalParameterByName(a) {
	return window[a];
}
function getMyParameterByName(a) {
	var b = "";
	try {
		b = eval(a);
	} catch (c) {
	}
	return b;
}
function pauseFunc() {
	document.body.innerHTML.indexOf("chevalId");
}
function trim(a, b) {
	return ltrim(rtrim(a, b), b);
}
function ltrim(a, b) {
	return a.replace(new RegExp("^[" + (b || "\\s") + "] + ", "g"), "");
}
function rtrim(a, b) {
	return a.replace(new RegExp("[" + (b || "\\s") + "] + $", "g"), "");
}
function getRandomPause(a, b) {
	return Math.random() * (b - a) + a;
}
function openFeeding() {
	-1 == document.body.innerHTML.indexOf("boutonAllaiter") && document.getElementById("boutonNourrir").click();
}
function openForests() {
	-1 == document.body.innerHTML.indexOf("boutonAllaiter") && document.getElementById("boutonBalade-foret").click();
}
function openMountains() {
	-1 == document.body.innerHTML.indexOf("boutonAllaiter") && document.getElementById("boutonBalade-montagne").click();
}
function eqCenterReg() {
	if (-1 !== document.body.innerHTML.indexOf("cheval-inscription")) {
		var a = document.getElementById("cheval-inscription").firstChild;
		null !== a && a.click();
	}
}
/www.lowadi.com\/elevage\/chevaux\/centreInscription\?id=/.test(window.location.href) && KCK_Select();
function KCK_reserve() {
	var a = 0 + getRandomPause(2000, 2500);
	setTimeout(eqCenterReg2, a);
	a += getRandomPause(2500, 3200);
	setTimeout(eqCenterReg3, a);
	a += getRandomPause(3500, 3800);
	setTimeout(eqCenterReg4, a);
}
function eqCenterReg2() {
	var a = document.getElementById("tab-box-reserve").getElementsByTagName("a");
	console.log(a[0]);
	a[0].click();
}
function eqCenterReg3() {
	for (var a = document.getElementById("boxContent").getElementsByTagName("tbody")[0].getElementsByTagName("tr"), b = 1; b < a.length; b++) {
		if (localisation = a[b].getElementsByClassName("align-left width-19")[0].getElementsByTagName("a")[0].className, localisation == "centerLocalisation " + centerLocalisation) {
			var c = a[b].getElementsByClassName("align-center")[0].outerHTML, g = c.search("abreuvoir");
			if (0 < g && (c = c.substring(g), g = c.search("douche"), 0 < g)) {
				for (c = a[b].getElementsByClassName("align-center align-middle spacer-small-left spacer-small-right")[0].getElementsByTagName("button"), g = 0; g < c.length; g++) {
					if (void 0 === a[b].getElementsByClassName("align-center align-middle spacer-small-left spacer-small-right")[0].getElementsByClassName("disabled button button-style-8")[0]) {
						c[g].click();
						return;
					}
				}
			}
		}
	}
}
function eqCenterReg4() {
	!0 !== /message=centreOk/.test(window.location.href) && location.reload();
}
function KCK_ALL() {
	var a = 0 + getRandomPause(2000, 2500);
	setTimeout(KCK_0, a);
	a += getRandomPause(2000, 2800);
	setTimeout(KCK1, a);
	a += getRandomPause(2200, 2800);
	setTimeout(KCK2, a);
}
function KCK_0() {
	document.getElementById("abreuvoir").setAttribute("value", "1");
	document.getElementById("douche").setAttribute("value", "1");
	document.getElementById(spec).setAttribute("value", "1");
	document.getElementsByClassName("module module-style-20 module-css").nextElementSibling[0].click();
}
function KCK1() {
	var a = document.getElementsByClassName("grid-cell spacer-small-top spacer-small-bottom")[1].getElementsByTagName("a");
	getRandomPause(1000, 1300);
	a[0].click();
}
function KCK2() {
	var a = document.getElementsByClassName("odd highlight")[0].getElementsByTagName("button")[1];
	window.oldConfirm = window.confirm;
	window.confirm = function() {
		return !0;
	};
	a.click();
	window.confirm = window.oldConfirm;
}
$("body").append('<div class="lwm_logo" style="display:block; z-index:9999; position:fixed; right:0;  top:120px; width:150px;"><img src="https://raw.githubusercontent.com/Crasher69/lowadi/master/horse.png" /></div>');
$("body").append('<style>.lw {color:#fff;}</style><div class="lw_gui" style="display:block; z-index:9999; position:fixed; width:240px; height:auto; right:0; top:300px; padding:5px; background-color: rgba(0, 0, 0, 0.65);  border-radius: 10px 0px 0px 10px;"></div>');
$(".lw_gui").append('<center><p style="color:#fff;"><span style="font-family: Arial,Helvetica,sans-serif; font-size: 12px; color:#F1F9F1;"><b>BotJack 0.4.7</b></span></p> </center>');
$(".lw_gui").append('<center><p style="color:#fff;"><span style="font-family: Arial,Helvetica,sans-serif; font-size: 11px; color:#F1F9F1;">  </p></center> <hr>');
$(".lw_gui").append('<span class="lw">id \u0437\u0430\u0432\u043e\u0434\u0430:</span> <input type="text" name="lw_zavod" id="lw_zavod" size="18"><br>');
$(".lw_gui").append('<span class="lw">\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 1: &nbsp; &nbsp;</span> <select id="train1" name="train1">\t<option value="dressage">\u0432\u044b\u0435\u0437\u0434\u043a\u0430</option>\t<option value="galop">\u0433\u0430\u043b\u043e\u043f</option>\t<option value="saut">\u043f\u0440\u044b\u0436\u043a\u0438</option>\t<option value="trot">\u0440\u044b\u0441\u044c</option>\t<option value="endurance">\u0432\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c</option>\t<option value="vitesse">\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c</option>\t\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 2: &nbsp; &nbsp;</span> <select id="train2" name="train2">\t<option value="dressage">\u0432\u044b\u0435\u0437\u0434\u043a\u0430</option>\t<option value="galop">\u0433\u0430\u043b\u043e\u043f</option>\t<option value="saut">\u043f\u0440\u044b\u0436\u043a\u0438</option>\t<option value="trot">\u0440\u044b\u0441\u044c</option>\t<option value="endurance">\u0432\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c</option>\t<option value="vitesse">\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c</option>\t\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 3: &nbsp; &nbsp;</span> <select id="train3" name="train3">\t<option value="dressage">\u0432\u044b\u0435\u0437\u0434\u043a\u0430</option>\t<option value="galop">\u0433\u0430\u043b\u043e\u043f</option>\t<option value="saut">\u043f\u0440\u044b\u0436\u043a\u0438</option>\t<option value="trot">\u0440\u044b\u0441\u044c</option>\t<option value="endurance">\u0432\u044b\u043d\u043e\u0441\u043b\u0438\u0432\u043e\u0441\u0442\u044c</option>\t<option value="vitesse">\u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c</option>\t\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f&nbsp;</span> <select id="specialisation" name="specialisation">\t<option value="specialisationWestern">\u0412\u0435\u0441\u0442\u0435\u0440\u043d</option>\t<option value="specialisationClassique">\u041a\u043b\u0430\u0441\u0441\u0438\u043a\u0430</option>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0420\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u041a\u0421\u041a</span> <select id="ksk_r" name="ksk_r">\t<option value="foret">\u041b\u0435\u0441</option>\t<option value="plage">\u041f\u043b\u044f\u0436</option>\t<option value="montagne">\u0413\u043e\u0440\u044b</option>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0435:&nbsp; &nbsp;</span> <select id="compName" name="compName">\t <optgroup label="\u041a\u043b\u0430\u0441\u0441\u0438\u043a\u0430"><option value="galop">\u0433\u0430\u043b\u043e\u043f</option>\t<option value="dressage">\u0432\u044b\u0435\u0437\u0434\u043a\u0430</option>\t<option value="saut">\u043a\u043e\u043d\u043a\u0443\u0440</option>\t<option value="cross">\u043a\u0440\u043e\u0441\u0441</option>\t<option value="trot">\u0440\u044b\u0441\u044c</option></optgroup>\t<optgroup label="\u0412\u0435\u0441\u0442\u0435\u0440\u043d"><option value="trail-class">\u0442\u0440\u0435\u0439\u043b</option>\t<option value="cutting">\u043a\u0430\u0442\u0442\u0438\u043d\u0433</option>\t<option value="barrel">\u0431\u043e\u0447\u043a\u0438</option>\t<option value="reining">\u0440\u0435\u0439\u043d\u0438\u043d\u0433</option>\t<option value="western-pleasure">\u041f\u043b\u0435\u0436\u0435</option>\t</optgroup>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0421\u043e\u0440\u0435\u0432\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2:</span> <select id="compName2" name="compName2"> <option value=""> </option>\t <optgroup label="\u041a\u043b\u0430\u0441\u0441\u0438\u043a\u0430"><option value="galop">\u0433\u0430\u043b\u043e\u043f</option>\t<option value="dressage">\u0432\u044b\u0435\u0437\u0434\u043a\u0430</option>\t<option value="saut">\u043a\u043e\u043d\u043a\u0443\u0440</option>\t<option value="cross">\u043a\u0440\u043e\u0441\u0441</option>\t<option value="trot">\u0440\u044b\u0441\u044c</option></optgroup>\t<optgroup label="\u0412\u0435\u0441\u0442\u0435\u0440\u043d"><option value="trail-class">\u0442\u0440\u0435\u0439\u043b</option>\t<option value="cutting">\u043a\u0430\u0442\u0442\u0438\u043d\u0433</option>\t<option value="barrel">\u0431\u043e\u0447\u043a\u0438</option>\t<option value="reining">\u0440\u0435\u0439\u043d\u0438\u043d\u0433</option>\t<option value="western-pleasure">\u041f\u043b\u0435\u0436\u0435</option>\t</optgroup>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 1: &nbsp; &nbsp; &nbsp; &nbsp;</span> <select id="walk1" name="walk1">  <option value="montagne">\u0413\u043e\u0440\u044b</option>\t<option value="foret">\u041b\u0435\u0441</option>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 2: &nbsp; &nbsp; &nbsp; &nbsp;</span> <select id="walk2" name="walk2">  <option value=""></option>\t<option value="montagne">\u0413\u043e\u0440\u044b</option>\t<option value="foret">\u041b\u0435\u0441</option>\t</select><br>');
$(".lw_gui").append('<span class="lw">\u0414\u043e\u043a\u0430\u0447\u0438\u0432\u0430\u0442\u044c \u043d\u0430\u0432\u044b\u043a\u0438: </span> <input type="checkbox" id="nav" /><br>');
$(".lw_gui").append('<span class="lw">\u0418\u043c\u044f \u043a\u043e\u0431\u044b\u043b:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> <input type="text" size="10" id="name_female" />');
$(".lw_gui").append('<br><span class="lw">\u0418\u043c\u044f \u0416\u0435\u0440\u0435\u0431\u0446\u043e\u0432:&nbsp;&nbsp;</span><input type="text" size="10" id="name_male" />');
$(".lw_gui").append('<span class="lw">\u041a\u0438\u0434\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0435\u043a:&nbsp; &nbsp;</span> <input type="text" size="10" id="offerstobedone" />');
$(".lw_gui").append('<span class="lw">\u0421\u043b\u0443\u0447\u043a\u0438 \u0441: &nbsp; &nbsp; &nbsp;</span> <select id="poroda">\t\t<option value="58">\u0410\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0430\u044f </option>      <option value="38">\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0430\u044f </option>      <option value="43">\u0410\u043f\u043f\u0430\u043b\u0443\u0437\u0430</option>      <option value="31">\u0410\u0440\u0430\u0431\u0441\u043a\u0430\u044f </option>      <option value="60">\u0410\u0440\u0433\u0435\u043d\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u041a</option>      <option value="30">\u0410\u0445\u0430\u043b\u0442\u0435\u043a\u0438\u043d\u0441\u043a\u0430\u044f</option>      <option value="32">\u0411\u0443\u0434\u0435\u043d\u043d\u043e\u0432\u0441\u043a\u0430\u044f</option>      <option value="61">\u0413\u043e\u043b\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f </option>      <option value="45">\u0413\u043e\u043b\u0448\u0442\u0438\u043d\u0441\u043a\u0430\u044f </option>      <option value="33">\u0414\u043e\u043d\u0441\u043a\u0430\u044f</option>      <option value="53">\u0418\u0440\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f </option>      <option value="63">\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f </option>      <option value="57">\u041a\u043d\u0430\u0431\u0441\u0442\u0440\u0443\u043f\u043f\u0435\u0440</option>      <option value="46">\u041b\u0438\u043f\u0438\u0446\u0446\u0430\u043d</option>      <option value="50">\u041b\u0443\u0437\u0438\u0442\u0430\u043d\u0441\u043a\u043e\u0439 </option>      <option value="55">\u041c\u0443\u0441\u0442\u0430\u043d\u0433</option>      <option value="56">\u041d\u043e\u043a\u043e\u0442\u0430</option>      <option value="39">\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u044b\u0441\u0430\u043a</option>      <option value="36">\u041f\u0435\u0439\u043d\u0442</option>      <option value="59">\u0422\u0435\u043d\u043d\u0435\u0441\u0438\u0439\u0441\u043a\u0430\u044f </option>      <option value="51">\u0422\u0440\u0430\u043a\u0435\u043d\u0435\u043d\u0441\u043a\u0430\u044f</option>      <option value="65">\u0424\u0440\u0430\u043d\u0446\u0443\u0437\u0441\u043a\u0438\u0439 </option>      <option value="34">\u0424\u0440\u0438\u0437</option>      <option value="35">\u0413\u0430\u043d\u043d\u043e\u0432\u0435\u0440\u0441\u043a\u0430\u044f</option>      <option value="52">\u0426\u044b\u0433\u0430\u043d\u0441\u043a\u0430\u044f</option>      <option value="44">\u0427\u0435\u0442\u0432\u0435\u0440\u0442\u044c\u043c\u0438\u043b\u044c\u043d\u0430\u044f </option>      <option value="37"> \u0438\u0441\u043f\u0430\u043d\u0441\u043a\u0430\u044f</option>      <option value="54">\u0428\u0430\u0433\u0438\u044f</option>      <option value="41">\u0411\u0435\u043b\u044c\u0433\u0438\u0439\u0441\u043a\u0438\u0439</option>      <option value="40">\u041a\u043e\u043d\u043d\u0435\u043c\u0430\u0440\u0430</option>      <option value="64"> \u0425\u0430\u0439\u043b\u0435\u043d\u0434</option>      <option value="42">\u0423\u044d\u043b\u044c\u0441\u043a\u0438\u0439</option>      <option value="70">\u0424\u044c\u043e\u0440\u0434</option>      <option value="48">\u0425\u0430\u0444\u043b\u0438\u043d\u0433\u0435\u0440</option>      <option value="62">\u0428\u0435\u0442\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 </option>\t\t</select>');
$(".lw_gui").append('<br><br><center><span><button class="lwb_sett_gui">\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c</span></center>');
$(".lwb_sett_gui").click(function() {
	save_settings();
});
form_settings();
function save_settings() {
	var a = $("#lw_zavod").val(), b = $("#train1").val(), c = $("#train2").val(), g = $("#train3").val(), f = $("#walk1").val(), h = $("#walk2").val(), k = $("#specialisation").val(), l = $("#ksk_r").val(), m = $("#compName").val(), e = $("#compName2").val(), n = $("#offerstobedone").val(), p = $("#name_male").val(), q = $("#name_female").val(), r = $("#poroda").val();
	nav = $("input#nav").prop("checked") ? "0" : "1";
	localStorage.setItem("lwm_zavod", a);
	localStorage.setItem("lwm_train1", b);
	localStorage.setItem("lwm_train2", c);
	localStorage.setItem("lwm_train3", g);
	localStorage.setItem("lwm_walk1", f);
	localStorage.setItem("lwm_walk2", h);
	localStorage.setItem("lwm_spec", k);
	localStorage.setItem("lwm_ksk", l);
	localStorage.setItem("lwm_comp", m);
	localStorage.setItem("lwm_comp2", e);
	localStorage.setItem("lwm_offers", n);
	localStorage.setItem("lwm_name_male", p);
	localStorage.setItem("lwm_name_female", q);
	localStorage.setItem("lwm_poroda", r);
	localStorage.setItem("lwm_nav", nav);
	alert("\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u043d\u043e \u043a\u0430\u0447\u0430\u0442\u044c!");
}
function load_settings() {
	zavod = localStorage.getItem("lwm_zavod");
	train1 = localStorage.getItem("lwm_train1");
	train2 = localStorage.getItem("lwm_train2");
	train3 = localStorage.getItem("lwm_train3");
	walk1 = localStorage.getItem("lwm_walk1");
	walk2 = localStorage.getItem("lwm_walk2");
	null !== train1 && null !== train2 && null !== train3 || alert("\u041f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0431\u043e\u0442\u0430! \u0421\u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c");
	specialisation = localStorage.getItem("lwm_spec");
	spec = localStorage.getItem("lwm_ksk");
	amSpecialisation = "specialisationWestern" == specialisation ? "western" : "classique";
	compName = localStorage.getItem("lwm_comp");
	compName2 = localStorage.getItem("lwm_comp2");
	offersToBeDone = localStorage.getItem("lwm_offers");
	name_male = localStorage.getItem("lwm_name_male");
	name_female = localStorage.getItem("lwm_name_female");
	poroda = localStorage.getItem("lwm_poroda");
	nav = localStorage.getItem("lwm_nav");
}
function form_settings() {
	$("#lw_zavod").val(zavod);
	$("#train1 option[value='" + train1 + "']").attr("selected", "selected");
	$("#train2 option[value='" + train2 + "']").attr("selected", "selected");
	$("#train3 option[value='" + train3 + "']").attr("selected", "selected");
	$("#walk1 option[value='" + walk1 + "']").attr("selected", "selected");
	$("#walk2 option[value='" + walk2 + "']").attr("selected", "selected");
	$("#specialisation option[value='" + specialisation + "']").attr("selected", "selected");
	$("#ksk_r option[value='" + spec + "']").attr("selected", "selected");
	$("#compName option[value='" + compName + "']").attr("selected", "selected");
	$("#compName2 option[value='" + compName2 + "']").attr("selected", "selected");
	$("#offerstobedone").val(offersToBeDone);
	$("#name_male").val(name_male);
	$("#name_female").val(name_female);
	$("#poroda option[value='" + poroda + "']").attr("selected", "selected");
	"0" == nav ? $("#nav").prop("checked", !0) : $("#nav").prop("checked", !1);
}
function CompNoVIP_Second() {
	function a() {
		var e = document.getElementsByClassName("action action-style-4 panser action-disabled"), c = document.getElementsByClassName("action action-style-4 panser-rainbow action-disabled");
		void 0 !== e[0] || void 0 !== c[0] ? (e = getRandomPause(shortPause1, shortPause2), setTimeout(b, e)) : (e = getRandomPause(shortPause1, shortPause2), setTimeout(groom, e), e += getRandomPause(mediumPause1, mediumPause2), setTimeout(a, e));
	}
	function b() {
		var a = document.getElementsByClassName("action action-style-4 boire action-disabled"), f = document.getElementsByClassName("action action-style-4 boire-fontaine action-disabled");
		void 0 !== a[0] || void 0 !== f[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(c, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(drink, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(b, a));
	}
	function c() {
		if (700 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				competitionByNameVIP(compName2);
			}, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(c, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(g, a);
		}
	}
	function g() {
		var a = document.getElementsByClassName("action action-style-4 allaiter action-disabled");
		void 0 !== document.getElementsByClassName("tab-action tab-action-select action action-style-4 nourrir-entame")[0] || void 0 !== a[0] ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(f, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(openFeeding, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(doEatDef, a), a += getRandomPause(longPause1, longPause2), setTimeout(g, a));
	}
	function f() {
		if (1270 > timeConvert()) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(function() {
				competitionByNameVIP(compName2);
			}, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(f, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(h, a);
		}
	}
	function h() {
		var a = document.getElementById("energie").textContent, b = document.getElementsByClassName("action action-style-4 caresser action-disabled"), c = document.getElementsByClassName("action action-style-4 caresser-rainbow action-disabled");
		20 < a || void 0 !== b[0] || void 0 !== c[0] || 1395 < timeConvert() ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(k, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(stroke, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(h, a));
	}
	function k() {
		var a = document.getElementById("energie").textContent, b = document.getElementsByClassName("action action-style-4 carotte action-disabled"), c = document.getElementsByClassName("action action-style-4 carotte-rainbow action-disabled");
		20 < a || void 0 !== b[0] || void 0 !== c[0] || 1410 < timeConvert() ? (a = getRandomPause(shortPause1, shortPause2), setTimeout(l, a)) : (a = getRandomPause(shortPause1, shortPause2), setTimeout(carrot, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(k, a));
	}
	function l() {
		if (void 0 !== document.getElementsByClassName("action action-style-4 coucher-box action-disabled")[0]) {
			var a = getRandomPause(shortPause1, shortPause2);
			setTimeout(OR, a);
			a += getRandomPause(longPause1, longPause2);
			setTimeout(pauseFunc, a);
			a += getRandomPause(2 * longPause1, 2 * longPause2);
			setTimeout(reload, a);
		} else {
			a = getRandomPause(shortPause1, shortPause2), setTimeout(sleep, a), a += getRandomPause(mediumPause1, mediumPause2), setTimeout(l, a);
		}
	}
	var m = getRandomPause(shortPause1, shortPause2);
	setTimeout(a, m);
}
;
