// ==UserScript==
// @name         МультиКач GUI
// @description  LW_multi Bot
// @match        https://www.lowadi.com/*
// @version      0.4.5
// @grant       none
// @run-at      document-end
// ==/UserScript==

// id завода, в который переиещаем рожденных жеребят. Если перемещать не надо, оставляем пустым
zavod = "";


/* 	ТРЕНИРОВКИ 	*/
/* Названия  всех навыков:
	'dressage' - выездка
	'galop' - галоп
	'saut' - прыжки
	'trot' - рысь
	'endurance' - выносливость
	'vitesse' - скорость
*/
var train1 = 'dressage';
var train2 = 'endurance';
var train3 = 'galop';


/*	 НАСТРОЙКИ СОРЕВНОВАНИЙ 	*/
// Тут выбираем специализацию - классика или вест
var specialisation = 'specialisationWestern'; // specialisationWestern или specialisationClassique
var amSpecialisation = 'western'; // 'classique' или 'western'

//Какое соревнование бегаем
var compName = 'reining';
/*Внутри ковычек вставляем название соревнования для бега из списка ниже (учитываем специализацию):
galop - галоп
dressage - выездка
saut - конкур
cross - кросс
trot - рысь
trail-class - трейл
cutting - катт
barrel - бочки
reining - рейн
western-pleasure - плеже
*/


/*	 ПРОГУЛКИ 	*/
//foret - это лес, montagne - горы
var walk1='foret';
var walk2 = 'montagne';


/* НАСТРОЙКИ КСК:	*/
var spec = 'foret'; //спец кск с общих
var viborksk = кскOLL; //кскOLL-с общий с душем и поилкой, кскOLL1- общий корм и сено  кскрезерв- резерв
var centerLocalisation = 'centerLocalisationForet'; // если кск резерв:  лес-centerLocalisationForet или горы - centerLocalisationMontagne


var nav = 0; //докач навыков. 0 - да, 1 - нет
var mol = 360; //НАСТРОЙКА, возраст, когда рожаем под молнию,даже если транс - в месяцах. 180=15 лет


/*	СЛУЧКИ И РОДЫ	*/
var polM ='м'; // как называет коня (перед ГП)
var polJ ='ж'; // как называет кобылу (перед ГП)
var offersToBeDone = 10; // Сколько случек кидать
var poroda = 11; // Порода, от которой надо принимать случки, где:
/*
1 - Американская кучерявая
2 - Английская
3 - Аппалуза
4 - Арабская
5 - Аргентинский Криоло
6 - Ахалтекинская
7 - Буденновская
8 - Голландская
9 - Голштинская
10 - Донская
11 - Ирландская
12 - Исландская
13 - Кнабструппер
14 - Лмпиццан
15 - Лузитанская порода
16 - Мустанг
17 - Нокота
18 - Орловский рысак
19 - Пейнт
20 - Теннесийская
21 - Тракенская
22 - Французский
23 - Фриз
24 - Ганноверская
25 - Цыганская
26 - Четвертьмильная
27 - Чистокровная Испанская
28 - Шагия
29 - Бельгийский пони
30 - Коннемара
31 - Пони Хайленд
32 - Уэльский
33 - Фьорд
34 - Хафлингер
35 - Шетландский пони
*/




//КОНЕЦ НАСТРОЕК <--
if (typeof chevalAge!=="undefined"){
	var age = chevalAge;
	if (age>16) {
		console.log('age: '+chevalAge);
		if (typeof eval(train1+'Complet')!=="undefined"){
			var compComplet  = eval(train1+'Complet');
		}
        if (typeof eval(train2+'Complet')!=="undefined"){
			var compComplet2  = eval(train2+'Complet');
		}
		if (typeof eval(train3+'Complet')!=="undefined"){
			var compComplet3  = eval(train3+'Complet');
		}
	}
}

var shortPause1 = 70;
var shortPause2 = 100;
var mediumPause1 = 400;
var mediumPause2 = 500;
var longPause1 = 700;
var longPause2 = 800;

var centerCount = 2; //1 или 2 КСК
var centerPosition = 2;

load_settings();


var HayToGive = 12;
var OatsToGive = 10;

if (typeof e1 !=="undefined"){
	var enduranceTComplet = e1;
	var vitesseTComplet = e2;
	var dressageTComplet = e3;
	var galopTComplet = e4;
	var trotTComplet = e5;
	var sautTComplet = e6;

	var foretComplet = b3;
	var montagneComplet = b1;
}

var genetics = ['galopGenetique'];
var lastParentPage = "";
var lastParentSex = "";

var offers = "offers" + getMyParameterByName(genetics[0]);
var doAbort = "doAbort" + getMyParameterByName(genetics[0]);
if(readCookie (doAbort) == undefined){
	console.log("!!!"+readCookie (doAbort) );
	createCookie(doAbort,false);
}

if(readCookie (offers) == "" || readCookie (offers) == undefined ){
	createCookie (offers, 0);
}

var amunitionEquiped = 'amunitionEquiped' + getMyParameterByName(['sautGenetique'][0]);

if (window.self != window.top)
{
	throw "stop";
}
var pause_reload=25000;

if (/www.lowadi.com\/elevage\/bureau/.test(window.location.href)===false)
setTimeout(reload,pause_reload);
if (/www.lowadi.com\/elevage\/chevaux\/\?elevage=all-horses/.test(window.location.href))
{
	history.go(-2);
}


//------- Переменные -------
if (/\/marche\/noir\/object\?qName=/.test(window.location.href))
{

	var pause=getRandomPause(longPause1*2,longPause2*2);
	setTimeout(st,pause);
	var pause1 =  pause+ getRandomPause(longPause1*2,longPause2*2);
	setTimeout( doR,pause1);
}




if (/\/elevage\/chevaux\/cheval\?id=/.test(window.location.href))
{
	var sante = document.getElementById('sante').textContent;
	if (sante > 75)
	{
		if (chevalAge<=6)
		{

			if(chevalNom.indexOf(".") == -1){

				eraseCookie(amunitionEquiped);
				giveName();
			}
			else {

				ORProg();
			}
		}
		else if (chevalAge>6 && chevalAge<=16)
		{
			ORProg();
		}

		else
		{
			GeneticsTraining();
		}
	}
}
// Рост ОРками
function ORProg()
{
	var pause = getRandomPause(shortPause1,shortPause2);
	setTimeout(f1,pause);
	function f1()
	{
		if (/elevage\/chevaux\/centreInscription\?id=/.test(document.body.innerHTML))
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(eqCenterReg,pause);
			var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(f22,pause1);
		}
	}
	function f2()
	{
		var n=document.getElementById('energie').innerHTML;
		var u1=document.getElementsByClassName('tab-action missionForet action action-style-4 missionForet action-disabled');
		var u2=document.getElementsByClassName('tab-action missionMontagne action action-style-4 missionMontagne action-disabled');
		var u3=document.getElementsByClassName('tab-action missionPlage action action-style-4 missionPlage action-disabled');
		var u4=document.getElementsByClassName('tab-action missionEquus action action-style-4 missionEquus action-disabled');
		var u11=document.getElementsByClassName('tab-action missionForet-rainbow action action-style-4 missionForet action-disabled');
		var u21=document.getElementsByClassName('tab-action missionMontagne-rainbow action action-style-4 missionMontagne action-disabled');
		var u31=document.getElementsByClassName('tab-action missionPlage-rainbow action action-style-4 missionPlage action-disabled');
		var u41=document.getElementsByClassName('tab-action missionEquus-rainbow action action-style-4 missionEquus action-disabled');
		if ((u1[0] !== undefined) || (u2[0] !== undefined) || (u3[0] !== undefined) || (u4[0] !== undefined)||(u11[0] !== undefined) ||( timeConvert() > 840 )|| (u21[0] !== undefined) || (u31[0] !== undefined) ||(n < 40)|| (u41[0] !== undefined)|| (chevalAge<24))
		{
			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f22,pause3);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(lesson,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}
	function f22()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(shortPause1,shortPause2)
			setTimeout(f3,pause3);
		}
	}
	function f3()
	{
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d1=document.getElementById('feeding');
		var d2=-1;
		if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{

			var pause5=getRandomPause(shortPause1,shortPause2);
			setTimeout(doEatNorm,pause5);
			var pause6=pause5+getRandomPause(longPause1,longPause2);
			setTimeout(f22,pause6);
		}
	}
	function f5()
	{
		var n=document.getElementById('energie').innerHTML;
		if (n < 20) {
			var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
			var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
			if ((d[0] !== undefined)||(d1[0] !== undefined))
			{
				var pause1=getRandomPause(shortPause1,shortPause2);
				setTimeout(f7,pause1);
			}
			else
			{
				var pause2=getRandomPause(shortPause1,shortPause2);
				setTimeout(stroke,pause2);
				var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
				setTimeout(f5,pause3);
			}
		}
		else
		{
			var pause4=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause4);
		}
	}

	// Спать action action-style-4 coucher action-disabled
	function f7()
	{

		var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 coucher action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}

}

function GeneticsTraining(){
	if (chevalAge>16 && chevalAge<=22)
	{
		OatsToGive = 12;
		Walks(walk1);
	}

	else  if (((document.getElementsByClassName('action action-style-4 competition-barrel action'))[0] == undefined) &&((document.getElementsByClassName('action action-style-4 competition-galop action'))[0] == undefined)&& (chevalAge>36))
	{
		EquipAmunition();
	}

	else if (getMyParameterByName(walk1 + 'Complet')<100)//65
	{
		HayToGive = 14;
		OatsToGive = 14;
		Walks(walk1);
	}

	else if (getMyParameterByName(train1 + 'TComplet')<100 )
	{
		OatsToGive = 14;
		//HayToGive = 14;
		Train(train1);
	}

	else if (getMyParameterByName(train2 + 'TComplet')<100 )
	{
		OatsToGive = 12;
		Train(train2);
	}

	else if (($('.competition-'+compName).attr('data-tooltip').length) > 60 && chevalAge<120)
	{
        console.log('Соревнования');
		HayToGive = -1;
		OatsToGive = 10;
		if (chevalEnergie>25 && timeConvert() < 1270)
		{
			console.log('-=CompnoVIP=- Energy: '+chevalEnergie+' Time: '+timeConvert());
			CompNoVIP();
		}
		else
		{
			console.log('-=ANOTHER=- Energy: '+chevalEnergie+' Time: '+timeConvert());
			setTimeout(carrot,100);
			setTimeout(minEnergy,400);
			setTimeout(mash(),700);
			setTimeout(sleep,1000);
			setTimeout(OR,1100);
		}
	}

	else if (getMyParameterByName(train3 + 'TComplet')<100 )
	{
		OatsToGive = 12;
		Train(train3);

	}

	else if (getMyParameterByName(walk2 + 'Complet')<100 && walk2!='')
	{
		HayToGive = 14;
		OatsToGive = 14;
		Walks(walk2);
	}

	else if (chevalAge<120)
	{
		HayToGive = 12;
		OatsToGive = 14;
		setTimeout(function() {ORProg();}, 400);
	}
	else
	{
	    if (chevalEnergie<30)
        {
         	setTimeout(carrot,100);
			setTimeout(minEnergy,400);
			setTimeout(mash(),700);
			setTimeout(sleep,1000);
			setTimeout(OR,1100);
        }

		if (chevalSexe == "feminin"){
			BirthProg();
		}
		else if (chevalSexe == "masculin" && parseInt(readCookie(offers),10) < offersToBeDone){
			GiveOfferings(5);

		}
		else if (chevalSexe == "masculin" && parseInt(readCookie(offers),10) >= offersToBeDone){
			eraseCookie(offers);
			GoToMother();
		}
	}

}


function zeus(){
	var regexp = /id=([^&]+)/i;
	var GetValue = '';
	GetValue = regexp.exec(document.location.search)[1];
	window.location='http://www.lowadi.com/marche/noir/object?qName=eclair-zeus&cheval='+ GetValue ;
}
function doR(){
	var d = document.getElementsByClassName('button button-style-2');
	d[0].click();
}
function st()/////////////////////////////////////
{
	var d = document.getElementById('inventaire-utilisation-standard');
	if(d!== null)
	{
		d.click();
	}
}

//------- Программа кача -------



function GiveOfferings(offerings){

	var pause = getRandomPause(shortPause1,shortPause2);
	setTimeout(f1,pause);

	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{

		if( (timeConvert() >800  )&&( timeConvert() <1200  ))
		{
			var pause=getRandomPause(shortPause1,shortPause2);

			setTimeout(function() { competitionByName1();}, pause);
			pause=pause +getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f22,pause3);
		}
	}
	function f22()
	{

		if( timeConvert() < 540 )
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(giveOfferForTeam, pause);

			pause=pause +getRandomPause(longPause1*2,longPause2*2);
			setTimeout(f22,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause3);
		}
	}
	function f3()
	{
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f3,pause3);
		}
	}
	function f4()
	{

		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined)  || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause4=getRandomPause(shortPause1,shortPause2);
			setTimeout(openFeeding,pause4);
			var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(longPause1,longPause2);
			setTimeout(f4,pause6);
		}
	}
	function f5()
	{
		var n=document.getElementById('energie').innerHTML;
		if ((n > 22)&&( timeConvert() <800  ))
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(giveOfferForTeam, pause);

			pause=pause +getRandomPause(longPause1*3,longPause2*3);
			setTimeout(f5,pause);
		}
		else
		{
			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f99,pause3);
		}
	}
	function f99()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if( (timeConvert() > 1100 )||((d[0] !== undefined)||(d1[0] !== undefined)))
		{
			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause3);
		}
		else
		{
			console.log("offers=" + readCookie(offers));
			createCookie(offers, parseInt(readCookie(offers),10) + offerings);
			console.log("offers=" + readCookie(offers));
			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause3);
		}
	}

	function f7()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	function f8()
	{
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}


	// Спать
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if(((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined))&&(parseInt(readCookie(offers),10) == offersToBeDone)))
		{
			eraseCookie(offers);
			GoToMother();
		}
		else  if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1*3,longPause2*3);
			setTimeout(pauseFunc,pause11);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(longPause1*3,longPause2*3);
			setTimeout(f9,pause3);
		}
	}


}
function GoToMother(){
	var d = document.getElementsByClassName('horsename')[1].href;
	document.location.replace('http://www.lowadi.com/elevage/chevaux/cheval?id=' + d.substring(d.search("=") + 1));
}
function giveOfferForTeam(){
	var pause = 0;
	// Открыть случки
	var pause1 = pause + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(openReproduction,pause1);
	// Выбрать командные
	var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(selectTeamOffers,pause2);
	// Кинуть случку
	var pause3 = pause2+getRandomPause(mediumPause1,mediumPause2);
	setTimeout(doOffer,pause3);
	var pause4=pause2+getRandomPause(longPause1,longPause2);
	setTimeout(pauseFunc,pause4);
}
function selectTeamOffers(){
	document.getElementById('formMalePublicTypeEquipe').click();
}
function doOffer(){
	document.getElementById('boutonMaleReproduction').click();

}
//------- Жеребцы -------



// Конвертация времени
function timeConvert(){
	var d = document.getElementsByClassName('hour');
	var timeStr = d.item(0).innerHTML;
	var hours = parseInt(timeStr.substring(0,3));
	var minutes = parseInt(timeStr.substring(3));
	return hours * 60 + minutes;
}
//------- Роды -------


function BirthProg(){

	console.log(doAbort + "=" + readCookie(doAbort));
	var b =((document.getElementById('alerteVeterinaireContent')!==null) &&( (readCookie(doAbort)==0) || (chevalAge>mol)));
	console.log("Условие родить = " + b);
	if(b){

		var j=document.getElementById('lienVeterinaire');
		j.click();
	}
	else if  (timeConvert() >800  )
	{
		var pause1=getRandomPause(mediumPause1,mediumPause2);
		setTimeout( ORProg,pause1);

	}
	else if  (nav==0 )
	{
		var pause = getRandomPause(shortPause1,shortPause2);
		setTimeout(openReproduction,pause);
		var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
		setTimeout( Train1,pause1);
	}
	else{
		var pause = getRandomPause(shortPause1,shortPause2);
		setTimeout(openReproduction,pause);
		var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
		setTimeout( ORProg,pause1);
	}
}

function Train1() //докачка треней на родах
{
	var d=document.getElementsByClassName('action action-style-4 competition-'+compName+' action-disabled');
	if (d[0] !== undefined)
	{
		ORProg();
	}

	else if (getMyParameterByName('dressage' + 'TComplet')<100){
		OatsToGive = 12;
		HayToGive = -1;
		Train('dressage');
	}

	else if (getMyParameterByName('endurance' + 'TComplet')<100){
		OatsToGive = 12;
		Train('endurance');
	}

	else if (getMyParameterByName('saut' + 'TComplet')<100){
		OatsToGive = 12;
		Train('saut');
	}

	else if (getMyParameterByName('trot' + 'TComplet')<100){
		OatsToGive = 12;
		Train('trot');
	}

	else if (getMyParameterByName('galop' + 'TComplet')<100){
		OatsToGive = 12;
		Train('galop');
	}

	else if (getMyParameterByName('vitesse' + 'TComplet')<100){
		OatsToGive = 12;
		Train('vitesse');
	}
	else {
		ORProg();
	}
}

function openReproduction(){
	if (document.getElementById('reproduction-bottom')!==null)
	{
		var d1 = document.getElementById('reproduction-tab-0').getElementsByTagName('a')[1];
		//console.log(d1);
		d1.click();
		if(d1.className.indexOf("action action-style-4 echographie") != -1){
			var childSexe = "";
			var pause = getRandomPause(shortPause1,shortPause2);
			setTimeout(function(){
				var d = document.getElementById('reproduction-tab-1').getElementsByClassName('col-1');
				console.log(d);
				var s = d[0].childNodes[0].nodeValue;
				console.log(s);
				if(s.indexOf("жереб") != -1){
					childSexe = "masculin";}
				else{
					childSexe = "feminin";}
				console.log("childSexe=" + childSexe);
				lParentSex = getLastParentSexForBirth();
				console.log("!!getLastParentSexForBirth=" + getLastParentSexForBirth());
				if(lParentSex == childSexe){
					createCookie(doAbort,1);}
				else{
					createCookie(doAbort,0);}
				console.log("openReproduction/doAbort=" +readCookie(doAbort));

			},pause);
		}
	}
}
function reserve(){
	var d = document.getElementById('tab-1');
	if(d.className != 'tab-style-6-0-0 selected')
	{
		var d1 = document.getElementsByClassName('tab-action');
		d1[1].click();
	}

}
function doReproduction(){
	var d = document.getElementsByClassName('button button-style-0');
	document.getElementById('race').options[poroda].selected = true;
	// document.getElementById('licorne-aileeCheckbox').setAttribute('value','0');
	// document.getElementById('licorneCheckbox').setAttribute('value','0');
	if (document.getElementById('race').options[poroda].selected = true){
		d.item(0).click();
	}
}
function doReproduction2(){
	var d = document.getElementsByClassName('button button-style-0');
	d[1].click();
}
if (/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href)){
	if (document.body.innerHTML.indexOf('femelle_v1828806360.png') !== -1)
	{
		document.getElementById('poulain-1').setAttribute('value','Кобыла');
	}
	else document.getElementById('poulain-1').setAttribute('value','Жеребенок');
	var d = document.getElementsByTagName('button');
	if (d[d.length-1].getAttribute('type')=='submit')
	{
		d[d.length-1].click();
	}

}
if (/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href)){

	var pause =  getRandomPause(longPause1,longPause2);
	setTimeout(function (){ document.getElementById('boutonDoReproduction').click();},pause);}
if (/www.lowadi.com\/elevage\/chevaux\/rechercherMale\?jument=/.test(window.location.href)){
	var pause = getRandomPause(longPause1*2,longPause2*2);
	setTimeout(reserve,pause);
	var pause1 =  pause+ getRandomPause(longPause1*2,longPause2*2);
	setTimeout( doReproduction,pause1);
	var pause2=  pause1+ getRandomPause(longPause1*2,longPause2*2);
	setTimeout( doReproduction2,pause2);

}





//------- Жеребцы -------
// Конвертация времени
function timeConvert(){
	var d = document.getElementsByClassName('hour');
	var timeStr = d.item(0).innerHTML;
	var hours = parseInt(timeStr.substring(0,3));
	var minutes = parseInt(timeStr.substring(3));
	return hours * 60 + minutes;
}
//------- Роды -------


// Имя жеребенка
if (/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href)){
	if (document.body.innerHTML.indexOf('femelle_v1828806360.png') !== -1)
	{
		document.getElementById('poulain-1').setAttribute('value','Кобыла');
	}
	else document.getElementById('poulain-1').setAttribute('value','Жеребец');
	var d = document.getElementsByTagName('button');
	if (d[d.length-1].getAttribute('type')=='submit')
	{
		d[d.length-1].click();
	}

}
// Страница случки
if (/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href)){
	var pause1 =  getRandomPause(mediumPause1,mediumPause2);
	//  setTimeout(slez,pause1);
	//  var pause2 = pause1+ getRandomPause(mediumPause1,mediumPause2);
	//  setTimeout(slez,pause2);
	var pause = pause1+ getRandomPause(mediumPause1*2,mediumPause2*2);
	setTimeout(function (){ document.getElementById('boutonDoReproduction').click();},pause);}


//------- Выборка -------
function loadURL(url){
	var oRequest = new XMLHttpRequest();
	oRequest.open('GET', url, false);
	oRequest.send(null);
	return oRequest.responseText;
}
function getGenetics(geneticsName){
	document.getElementById('tab-genetics-title').onclick();
	return document.getElementById(geneticsName).childNodes[0].nodeValue;
}
function getLastParent(){
	if (lastParentPage === "")
	{
		var d = document.getElementsByClassName('horsename');
		console.log(d);
		var d1 = (d[0].href).substring((d[0].href).search('=')+1);
		var d2 = (d[d.length-1].href).substring((d[d.length-1].href).search('=')+1);
		if (d1>d2)
		{
			lastParentPage = "";
			lastParentPage = loadURL('http://www.lowadi.com/elevage/fiche/?id='+d1);
		}
		else
		{
			lastParentPage = "";
			lastParentPage = loadURL('http://www.lowadi.com/elevage/fiche/?id='+d2);
		}
	}
	return lastParentPage;
}
function getLastParentSex(){
	var d = document.getElementById('tab-genetics').getElementsByClassName('horsename');
	var d1 = (d[0].href).substring((d[0].href).search('=')+1);
	var d2 = (d[d.length-1].href).substring((d[d.length-1].href).search('=')+1);
	console.log(d1 +";" + d2 + ";" + chevalId);
	if (d1>d2)
	{
		lastParentSex = "masculin";
	}
	else
	{
		lastParentSex = "feminin";
	}

	return lastParentSex;
}
function getLastParentSexForBirth(){
	var d = document.getElementById('reproduction').getElementsByClassName('horsename');
	console.log(d);
	var d0 = (d[0].href).substring((d[0].href).search('=')+1);
	console.log("d0=" + d0 + "; d=" + chevalId);
	if(chevalId>d0)
	{
		lastParentSexForBirth = "feminin";
	}
	else
	{
		lastParentSexForBirth = "masculin";
	}
	console.log("lastParentSexForBirth="+ lastParentSexForBirth);
	return lastParentSexForBirth;
}
function getLastParentGenetics(geneticsName){
	var t = getLastParent();
	var s = t.substring(t.search(geneticsName) + geneticsName.length + 2 );
	return s.substring(0, s.search('<') );
}
//------- Выборка -------


//------- Игры -------
function Walks(walkName)
{
	var pause = getRandomPause(shortPause1,shortPause2);

	setTimeout(f1,pause);
	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{
		var em = document.getElementById('moral').textContent;
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if (( em >99 )||(d[0] !== undefined)||(d1[0] !== undefined))

		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}
	function f3()
	{

		if(timeConvert() > 600)
		{

			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk00(walkName,5);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f3,pause3);
		}
	}

	function f4()
	{
		var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(mash,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f4,pause3);
		}
	}
	function f5()
	{
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f6,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f5,pause3);
		}
	}

	function f6()
	{
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d1=document.getElementById('feeding');
		var d2=-1;
		if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause1);
		}
		else
		{

			var pause5=getRandomPause(shortPause1,shortPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f6,pause6);
		}
	}
	function f7()
	{
		var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		var n=document.getElementById('energie').innerHTML;
		if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1300 ))

		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk(walkName);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	// Ласка
	function f8()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f91,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}
	// Спать
	function f91()
	{
		var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}


}

function walk00(walkName, trainTime1)//////////////////errorsBox
{
	var en = document.getElementById('energie').textContent;
	var tTime1=timeConvert();
	var trainTime0= Math.floor((1350-tTime1)/30);
	var spans;
	var trains;
	var hidden;
	switch (walkName) {
	case 'foret':
		spans = document.getElementById('walkforetSlider').getElementsByTagName('li');
		hidden = document.getElementById('walkforetSlider-sliderHidden');
		trains = document.getElementById('walk-foret-submit');
		break;
	case 'montagne':
		spans = document.getElementById('walkmontagneSlider').getElementsByTagName('li');
		hidden = document.getElementById('walkmontagneSlider-sliderHidden');
		trains = document.getElementById('walk-montagne-submit');
		break;

	}

	if (trainTime1 <= trainTime0 )
	{
		trainTime= trainTime1;
	}
	else{
		trainTime= trainTime0;
	}

	for (var i =  trainTime; i >= 0; i--)

	{
		if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
		{
			spans[i].className = spans[i].className + " selected";
			spans[i].click();
			hidden.value = i;

			spans[i].click();
			trains.click();
			return;
		}
	}
}
function walk(walkName)//////////////////
{
	var en = document.getElementById('energie').textContent;
	var trainTime1 = 20;
	var trainTime;
	var tTime1=timeConvert();
	var trainTime0= Math.floor((1380-tTime1)/30);
	var spans;
	var trains;
	var hidden;
	switch (walkName) {
	case 'foret':
		spans = document.getElementById('walkforetSlider').getElementsByTagName('li');
		hidden = document.getElementById('walkforetSlider-sliderHidden');
		trains = document.getElementById('walk-foret-submit');
		break;
	case 'montagne':
		spans = document.getElementById('walkmontagneSlider').getElementsByTagName('li');
		hidden = document.getElementById('walkmontagneSlider-sliderHidden');
		trains = document.getElementById('walk-montagne-submit');
		break;

	}
	if (trainTime1 <= trainTime0 )
	{
		trainTime= trainTime1;
	}
	else{
		trainTime= trainTime0;
	}

	for (var i =  trainTime; i >= 0; i--)

	{
		if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
		{
			spans[i].className = spans[i].className + " selected";
			spans[i].click();
			hidden.value = i;

			spans[i].click();
			trains.click();
			return;
		}
	}
}
//------- Прогулки -------



function WalksBirth(walkName)
{
	var pause = getRandomPause(shortPause1,shortPause2);

	setTimeout(f1,pause);
	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{

		if( (timeConvert() > 600)|| (chevalAge>36) )
		{

			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f22,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk00(walkName,5);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}

	function f22()
	{

		if( timeConvert() > 655 )
		{

			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk00(walkName,4);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f22,pause3);
		}
	}
	function f3()
	{
		var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(mash,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f3,pause3);
		}
	}
	function f4()
	{
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f4,pause3);
		}
	}
	function f5()
	{
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d1=document.getElementById('feeding');
		var d2=-1;
		if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f6,pause1);
		}
		else
		{

			var pause5=getRandomPause(shortPause1,shortPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f5,pause6);
		}
	}
	function f6()
	{
		var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		var n=document.getElementById('energie').innerHTML;
		if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1320 ))

		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk(walkName);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f6,pause3);
		}
	}

	function f7()
	{
		var n=document.getElementById('energie').innerHTML;
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	function f8()
	{
		var n=document.getElementById('energie').innerHTML;
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined)||(n > 20))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
	// Спать
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}


}





function Walks1(walkName)
{
	var pause = getRandomPause(shortPause1,shortPause2);

	setTimeout(f1,pause);
	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{

		if( (timeConvert() > 600)|| (chevalAge>36) )
		{

			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f21,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk00(walkName,5);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}

	function f21()
	{

		if(( timeConvert() < 600 )&& (chevalAge>36) )
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() { competitionByNameVIP(compName2);}, pause);
			pause=pause +getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f21,pause);
		}
		else
		{
			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f22,pause3);
		}
	}
	function f22()
	{

		if( timeConvert() > 655 )
		{

			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk00(walkName,4);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f22,pause3);
		}
	}
	function f3()
	{
		var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(mash,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f3,pause3);
		}
	}
	function f4()
	{
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f4,pause3);
		}
	}
	function f5()
	{
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d1=document.getElementById('feeding');
		var d2=-1;
		if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f6,pause1);
		}
		else
		{

			var pause5=getRandomPause(shortPause1,shortPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f5,pause6);
		}
	}
	function f6()
	{
		var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		var n=document.getElementById('energie').innerHTML;
		if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1320 ))

		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {walk(walkName);}, pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f6,pause3);
		}
	}

	function f7()
	{
		var n=document.getElementById('energie').innerHTML;
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	function f8()
	{
		var n=document.getElementById('energie').innerHTML;
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined)||(n > 20))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
	// Спать
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}


}

//------- Тренировки -------
function Train(trainName){
	switch (trainName) {
	case 'dressage':
	case 'galop':
	case 'saut':
	case 'trot':
	case 'endurance':
	case 'vitesse':
		Train9(trainName);
		break;
	}
}
function Train9(trainName){
	var pause = getRandomPause(shortPause1,shortPause2);
	setTimeout( f1,pause);
	function  f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout( f21,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout( f1,pause3);
		}
	}

	function f21()
	{
		var en = document.getElementById('energie').textContent;
		if( timeConvert() > 600 )
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause);
		}
		else
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {train(trainName, 6);},pause1);
			var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f21,pause2);
		}

	}

	function f3()
	{
		var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f33,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(mash,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f3,pause3);
		}
	}
	function f33()
	{
		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f33,pause3);
		}
	}
	function f4()
	{
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d1=document.getElementById('feeding');
		var d2=-1;
		if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{

			var pause5=getRandomPause(shortPause1,shortPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(longPause1,longPause2);
			setTimeout(f4,pause6);
		}
	}
	function f5()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var n = document.getElementById('energie').textContent;
		if ((n < 30)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() > 1300 ))
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(f6,pause);
		}
		else
		{
			var tT1 = getMyParameterByName(trainName + 'TComplet');
			if(tT1<94) {
				var pause1=getRandomPause(shortPause1,shortPause2);
				setTimeout(function() {train(trainName, 20);},pause1);
				var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
				setTimeout(f5,pause2);
			}
			else if (((tT1>94)&&( timeConvert() < 1300 ))&&((tT1>94)&&(n >15)))
			{
				var pause=getRandomPause(shortPause1,shortPause2);
				setTimeout(function() {walk(walk1);}, pause);
				pause=pause +getRandomPause(longPause1,longPause2);
				setTimeout(f5,pause);
			}
			else
			{

				var pause=getRandomPause(shortPause1,shortPause2);
				setTimeout(f6,pause);
			}
		}
	}
	// Ласка
	function f6()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f6,pause3);
		}
	}
	function f7()
	{
		var n = document.getElementById('energie').textContent;
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((n > 19)||(d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	// Спать
	function f8()
	{
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
}


function train(trainName, trainTime){
	var spans;
	var trains;
	var hidden;
	var trainTime1;
	var tTime1=timeConvert();
	var trainTime0= Math.floor((1351-tTime1)/30);
	switch (trainName) {
	case 'endurance':
		spans = document.getElementById('trainingEnduranceSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingEnduranceSlider-sliderHidden');
		trains = document.getElementById('training-endurance-submit');
		break;
	case 'vitesse':
		spans = document.getElementById('trainingVitesseSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingVitesseSlider-sliderHidden');
		trains = document.getElementById('training-vitesse-submit');
		break;
	case 'dressage':
		spans = document.getElementById('trainingDressageSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingDressageSlider-sliderHidden');
		trains = document.getElementById('training-dressage-submit');
		break;
	case 'galop':
		spans = document.getElementById('trainingGalopSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingGalopSlider-sliderHidden');
		trains = document.getElementById('training-galop-submit');
		break;
	case 'trot':
		spans = document.getElementById('trainingTrotSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingTrotSlider-sliderHidden');
		trains = document.getElementById('training-trot-submit');
		break;
	case 'saut':
		spans = document.getElementById('trainingSautSlider').getElementsByTagName('li');
		hidden = document.getElementById('trainingSautSlider-sliderHidden');
		trains = document.getElementById('training-saut-submit');
		break;
	}
	if (trainTime <= trainTime0 )
	{
		trainTime1= trainTime;
	}
	else if (trainTime > trainTime0 )
	{
		trainTime1 = trainTime0;
	}

	for (var i =  trainTime1; i >= 0; i--)
	{
		if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
		{
			spans[i].className = spans[i].className + " selected";
			spans[i].click();
			hidden.value = i;

			spans[i].click();
			trains.click();
			return;
		}
	}
}
//------- Тренировки -------

//------- Соревнования -------

// Амунка
function EquipAmunition(){
	var pause1 = pause + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(specialization,pause1);
	var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(amunition1,pause2);
	var pause3 = pause2 + getRandomPause(mediumPause1*3,mediumPause2*3);
	setTimeout(amunition2,pause3);

}
function specialization() {
	var d = document.getElementById(specialisation).getElementsByTagName('button');
	d[0].click();
	setTimeout(function() {
		location.reload();
	},1500);
}
function amunition1() {

	var d = document.getElementById('competition-body-content').getElementsByTagName('a');
	console.log(d[0]);
	d[0].click();
}
function amunitionById(idName) {
	var d = document.getElementById(idName);
	d.click();
}
function amunition2() {
	var pause = 0;
	var pause1 = pause + getRandomPause(mediumPause1*5,mediumPause2*5);
	setTimeout(function() {amunitionById('modele-tapis-'+amSpecialisation+'-1x');},pause1);
	var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(function() {amunitionById('modele-selle-'+amSpecialisation+'-1x');},pause2);
	var pause3 = pause2 + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(function() {amunitionById('modele-bride-'+amSpecialisation+'-1x');},pause3);
	var pause4 = pause3 + getRandomPause(mediumPause1,mediumPause2);
	setTimeout(function() {
		var d = document.getElementById('choisir-equipement-popup-content').getElementsByTagName('button');
		console.log(d[d.length-1]);
		d[d.length-1].click();

		if(((document.getElementsByClassName('action action-style-4 competition-galop action'))[0] == undefined)&&((document.getElementsByClassName('action action-style-4 competition-barrel action'))[0] == undefined)){
			var pause5= pause4 + getRandomPause(mediumPause1*10,mediumPause2*10);
			setTimeout(function() {
				location.reload();
			},pause4);}
	},pause4);

}

// Запись на соревнование
if (/www.lowadi.com\/elevage\/competition\/inscription\?cheval=/.test(window.location.href))
{

	var  pause2 =  getRandomPause(mediumPause1*2,mediumPause2*2);
	setTimeout(competitionInscript,pause2);
	var  pause3 =  pause2 + getRandomPause(mediumPause1*4,mediumPause2*4);
	setTimeout(competitionInscript,pause3);
	var  pause4 =  pause2 + getRandomPause(mediumPause1*6,mediumPause2*6);
	setTimeout( checkComp,pause4);
	
}
//Запись на первое
function competitionInscript(){
	// var d = document.getElementsByClassName('button button-style-0');
	// d.item(0).click();
	// }
	var d=document.getElementById('public');//race public
	var c=d.getElementsByClassName('button button-style-0');
	c.item(0).click();
}

// Проверка
function checkComp(){
	var d=document.getElementsByClassName('fieldErrorText into');
	if (d[0] !== undefined)

	{
		location.reload();
	}
}

function competitionByName(compName){
    console.log('competitionByName'+chevalEnergie);
	var d = document.getElementsByClassName('action action-style-4 competition-' + compName);
	document.location.replace(d.item(0).href);
}
function competitionByNameVIP(compName){
    console.log('competitionByNameVIP'+chevalEnergie);
	var d = document.getElementsByClassName('action action-style-4 competition-' + compName).item(0);
	d.click();
}
function CompNoVIP(){
	var pause = getRandomPause(shortPause1,shortPause2);
	setTimeout(f1,pause);
	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{

		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}
	function f3()
	{

		if( timeConvert() <700  )
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() { if (chevalEnergie>35)  competitionByNameVIP(compName); else f4(); }, pause);
			pause=pause +getRandomPause(longPause1,longPause2);
			setTimeout(f3,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause3);
		}
	}
	function f4()
	{
		// Корм
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined)  || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause4=getRandomPause(shortPause1,shortPause2);
			setTimeout(openFeeding,pause4);
			var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(longPause1,longPause2);
			setTimeout(f4,pause6);
		}
	}
	function f5()
	{
		if( timeConvert() <1250  )//1290
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {if (chevalEnergie>30) competitionByNameVIP(compName); else f7(); }, pause);
			pause=pause +getRandomPause(longPause1,longPause2);
			setTimeout(f5,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause3);
		}
	}
	function f7()
	{
		var n = document.getElementById('energie').textContent;
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() >1395  ))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	function f8()
	{
		var n = chevalEnergie;
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() >1410  ))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
	// Спать
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}

}


//------- Корм -------

// Корм по заданным параметрам
function doEatDef()//////////??????
{
	var subm = false;
	var d2 = document.getElementById('feeding').innerHTML;
	var hay = 0;
	var oats = 0;
	if (HayToGive == -1)
	{
		hay = hayToGive();
	}
	else
	{
		hay = HayToGive;
	}
	if (OatsToGive == -1)
	{
		oats = oatsToGive();
	}
	else
	{
		oats = OatsToGive;
	}

	if (hay + oats === 0) return;
	if (d2.indexOf('недостаточный') !== -1)
	{
		hay = 20-hayGiven();
		oats = 15-oatsGiven();
	}
	// Для слайдеров
	if (d2.indexOf('haySlider') !== -1)
	{
		// Выставляем сено
		var spans=document.getElementById('haySlider').getElementsByTagName('li');
		var i = hay;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('haySlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}
	// Выставляем зерно, если оно есть
	if (d2.indexOf('oatsSlider') !== -1)
	{
		var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
		var i =oats;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('oatsSlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}
	if (subm === false)
	{
		// Для выпадающих списков
		if (d2.indexOf('id="feedingHay"') !== -1)
		{
			document.getElementById('feedingHay').options[hay].selected = true;
		}
		if (d2.indexOf('id="feedingOats"') !== -1)
		{
			document.getElementById('feedingOats').options[oats].selected = true;
		}
	}
	// Нажимаем на кнопку

	var k = document.getElementById('feed-button');
	if (k!==null)
	{
		k.click();
	}

}
// Корм по заданному
function doEatPre(){
	// Если кормим молоком
	if (document.body.innerHTML.indexOf('boutonAllaiter') !== -1)
	{
		var d = document.getElementById('boutonAllaiter');

		d.click();

		return;
	}
	var subm = false;
	var d2 = document.getElementById('feeding').innerHTML;

	var hay = hayToGive();
	var oats = oatsToGive();
	//alert('hay' + hay);
	//alert('oats' + oats);
	if (hay + oats === 0) return;
	if (d2.indexOf('толст') !== -1) return;
	if (d2.indexOf('недостаточный') !== -1)
	{
		hay = 20-hayGiven();
		oats = 15-oatsGiven();
	}
	// Для слайдеров
	if (d2.indexOf('haySlider') !== -1)
	{
		// Выставляем сено
		var spans=document.getElementById('haySlider').getElementsByTagName('li');
		var i = hay;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('haySlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}

	// Выставляем зерно, если оно есть
	if (d2.indexOf('oatsSlider') !== -1)
	{
		var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
		var i =oats;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('oatsSlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}
	if (subm === false)
	{
		// Для выпадающих списков
		if (d2.indexOf('id="feedingHay"') !== -1)
		{
			document.getElementById('feedingHay').options[hay].selected = true;
		}
		if (d2.indexOf('id="feedingOats"') !== -1)
		{
			document.getElementById('feedingOats').options[oats].selected = true;
		}
	}
}
// Корм по норме
function doEatNorm()//////////?
{
	// Если кормим молоком
	if (document.body.innerHTML.indexOf('boutonAllaiter') !== -1)
	{
		var d = document.getElementById('boutonAllaiter');
		d.click();
		return;

	}
	var subm = false;
	var d2 = document.getElementById('feeding').innerHTML;

	var hay = hayToGive();
	var oats = oatsToGive();
	//alert('hay' + hay);
	//alert('oats' + oats);
	if (hay + oats === 0) return;
	if (d2.indexOf('толст') !== -1) return;
	if (d2.indexOf('недостаточный') !== -1)
	{
		hay = 20-hayGiven();
		oats = 15-oatsGiven();
	}
	// Для слайдеров
	if (d2.indexOf('haySlider') !== -1)
	{
		// Выставляем сено
		var spans=document.getElementById('haySlider').getElementsByTagName('li');
		var i = hay;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('haySlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}
	// Выставляем зерно, если оно есть
	if (d2.indexOf('oatsSlider') !== -1)
	{
		var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
		var i =oats;
		spans[i].className = spans[i].className + " selected";
		spans[i].click();

		var hidden=document.getElementById('oatsSlider-sliderHidden');
		hidden.setAttribute("value",i);
		subm=true;
	}
	if (subm === false)
	{
		// Для выпадающих списков
		if (d2.indexOf('id="feedingHay"') !== -1)
		{
			document.getElementById('feedingHay').options[hay].selected = true;
		}
		if (d2.indexOf('id="feedingOats"') !== -1)
		{
			document.getElementById('feedingOats').options[oats].selected = true;
		}
	}
	// Нажимаем на кнопку

	var k = document.getElementById('feed-button');
	if (k!==null)
	{
		k.click();
	}

}
// Вычисление необходимой нормы сена
function hayToGive()/////////
{
	// Дано сена
	var hay_to_give = (hayNorm()*1-hayGiven()*1);
	// Не меньше нуля
	if (hay_to_give<0) hay_to_give = 0;
	// Не больше 10 кг
	if (hay_to_give>20) hay_to_give = 20;
	// Норма сена
	return hay_to_give;
}
// Вычисление необходимой нормы зерна
function oatsToGive(){
	if (document.getElementById('feeding').outerHTML.indexOf('oats') !== -1||document.getElementById('feeding').outerHTML.indexOf('Oats') !== -1)
	{
		var oats_to_give = (oatsNorm()*1-oatsGiven()*1);
		// Не меньше нуля
		if (oats_to_give<0) oats_to_give = 0;
		// Не больше 15 кг
		if (oats_to_give>15) oats_to_give = 15;
		// Норма сена
		return oats_to_give;
	}
	else return 0;
}

// Нормы корма
// Норма сена
function hayNorm()
{
	var hay_norm=document.getElementsByClassName('section-fourrage section-fourrage-target')[0].childNodes[0].nodeValue;
	return hay_norm;
}
// Съедено сена
function hayGiven()
{
	var d2 = document.getElementsByClassName('float-right section-fourrage section-fourrage-quantity')[0].outerHTML;
	var hay_given=d2.substring(d2.indexOf('/ <strong class')-3,d2.lastIndexOf('/ <strong class'));
	return hay_given;
}
// Норма зерна
function oatsNorm()
{
	var hay_norm=document.getElementsByClassName('section-avoine section-avoine-target')[0].childNodes[0].nodeValue;
	return hay_norm;
}
// Съедено зерна
function oatsGiven()
{
	var d2 = document.getElementsByClassName('float-right section-avoine section-avoine-quantity')[0].outerHTML;
	var oats_given=d2.substring(d2.indexOf('/ <strong class')-3,d2.lastIndexOf('/ <strong class'));
	return oats_given;
}

//------- Корм -------


//------- Остальные действия -------
// Перезагрузка
function reload()
{
	location.reload();
}
// Урок
function lesson()////////////////////////
{
	var d=document.getElementById('boutonMissionEquus');
	if(d!==null)
	{
		d.click();
	}
	var c=document.getElementById('boutonMissionMontagne');
	if(c!==null)
	{
		c.click();
	}
	var m=document.getElementById('boutonMissionForet');
	if(m!==null)
	{
		m.click();
	}
	var n=document.getElementById('boutonMissionPlage');
	if(n!==null)
	{
		n.click();
	}
}
// Чистка
function groom()//////////////////////////////////
{
	var d = document.getElementById('boutonPanser');
	if(d!== null)
	{
		d.click();
	}
}
// Если энергии меньше 20, то
function minEnergy(){
	if (chevalEnergie<20)
	{
		// Ласка
		var d = document.getElementById('boutonCaresser');
		if(d.hasAttribute("onclick"))
		{
			d.onclick();
		}
		// Пить
		var d = document.getElementById('boutonBoire');
		if(d.hasAttribute("onclick"))
		{
			d.onclick();
		}
	}
}
// Сон
function sleep()/////////////////////
{
	var d = document.getElementById('boutonCoucher');
	if(d!== null)
	{
		d.click();
	}
}
// Ласка
function stroke()/////////////////////////////////////
{
	var d = document.getElementById('boutonCaresser');
	if(d!== null)
	{
		d.click();
	}
}
// Морковка
function carrot()//////////////////////
{
	var d = document.getElementById('boutonCarotte');
	if(d!== null)
	{
		d.click();
	}
}
// Пить
function drink()///////////////////
{
	var d = document.getElementById('boutonBoire');
	if(d!== null)
	{
		d.click();
	}
}
// Смесь
function mash()////////////////////
{
	var d = document.getElementById('boutonMash');
	if(d!== null)
	{
		d.click();
	}
}
// Предыдущий
function prev()/////////////////////
{
	var d = document.getElementById('nav-previous');
	if(d!== null&&d.hasAttribute("href"))
	{
		d.click();
	}
}
// Рост ОР
function OR()/////////////////////////////
{
	minEnergy();
	var d=document.getElementById('age');
	var c=d.getElementsByTagName('button');
	if(c[0]!==null)
	{
		c[0].click();
	}
}

// Дать имя и аффикс
function giveName()///работает но переписать
{
	var gv = enduranceGenetique.toString().split('.')[1].substring(0,2);
	var pause = 0;
	// Чистка
	var pause1 = pause + getRandomPause(shortPause1,shortPause2);
	setTimeout(function(){
		document.getElementById('widget--1').click();
	},pause1);
	var pause2 = pause1 + getRandomPause(shortPause1/4,shortPause2/4);
	setTimeout(function(){
		document.getElementsByClassName('options-menu')[0].getElementsByClassName('first')[0].getElementsByTagName('a')[2].click();
	},pause2);
	var pause3 = pause2 + getRandomPause(shortPause1,shortPause2);
	setTimeout(function(){
		var d =document.getElementById('horseNameName');
		var s = ("" + getMyParameterByName(genetics[0])).split(".");
		var nn;
		if (chevalSexe == 'masculin')
		{
			nn=polM;
		}
		else
		{
			nn= polJ;
		}
		d.value = nn + " " +(enduranceGenetique + vitesseGenetique + dressageGenetique + galopGenetique + trotGenetique + sautGenetique).toFixed(2);
	},pause3);
	var pause4 = pause3 + getRandomPause(shortPause1/4,shortPause2/4);
	setTimeout(function (){
		var d = document.getElementById('horseNameAffixe').getElementsByTagName('optgroup')[1].getElementsByTagName('option')[0];
		d.setAttribute('selected','selected');
	},pause4);
	var pause5 = pause4 + getRandomPause(shortPause1,shortPause2);
	setTimeout(function(){
		if (zavod!="" || zavod!=" ") $("#horseNameElevage").val(zavod);
	},pause5);

	var pause6 = pause5 + getRandomPause(shortPause1,shortPause2);
	setTimeout(function(){
		document.getElementById('profil-popup-content').getElementsByClassName('spacer-small-top button button-style-0')[0].click();
	},pause5);
}
//------- Остальные действия -------

//------- Вспомогательные функции -------

function createCookie (name, value) {
	document.cookie = name + "=" + value + ";expires: 800 ";
}
function readCookie (name) {
	var value = "; " + document.cookie,
	parts = value.split("; " + name + "=");
	if (parts.length === 2) {
		return parts.pop().split(";").shift();
	}
}
function eraseCookie (name) {
	createCookie(name, ";expires: -1");
}
function getGlobalParameterByName(a){
	return window[a];
}
function getMyParameterByName(x) {
	var res = "";
	try{
		res = eval(x);
	} catch(e) {}
	return res;
}
// Пустая функция
function pauseFunc(){
	if (document.body.innerHTML.indexOf('chevalId') !== -1)
	{
		return;
	}
}
// Удаление пробелов
function trim(str, chars){
	return ltrim(rtrim(str, chars), chars);
}
function ltrim(str, chars){
	chars = chars || "\\s";
	return str.replace(new RegExp("^[" + chars + "] + ", "g"), "");
}
function rtrim(str, chars){
	chars = chars || "\\s";
	return str.replace(new RegExp("[" + chars + "] + $", "g"), "");
}
// Случайное число
function getRandomPause(min, max)//////////////////
{
	var rand = Math.random() * (max - min) + min;
	return rand;
}
function openFeeding()/////////////визуально открывает корм
{
	if (document.body.innerHTML.indexOf('boutonAllaiter') == -1)
	{
		var d = document.getElementById('boutonNourrir');
		d.click();
	}
}

function openForests()//////////////////
{
	if (document.body.innerHTML.indexOf('boutonAllaiter') == -1)
	{
		var d = document.getElementById('boutonBalade-foret');
		d.click();
	}
}
function openMountains()///////////////////////
{
	if (document.body.innerHTML.indexOf('boutonAllaiter') == -1)
	{
		var d = document.getElementById('boutonBalade-montagne');
		d.click();
	}
}
//------- Вспомогательные функции -------

//------- Запись в КСК из резерва -------
// Запись в КСК
function eqCenterReg(){
	if (document.body.innerHTML.indexOf('cheval-inscription') !== -1)
	{
		// Нажимаем на кнопку
		var d=document.getElementById('cheval-inscription').firstChild;
		if (d!==null)
		{
			d.click();
		}
	}
}
// Запись в КСК
if (/www.lowadi.com\/elevage\/chevaux\/centreInscription\?id=/.test(window.location.href)){
	// Выбор резерва
	viborksk();
}
// Резерв

function кскрезерв()/////////
{
	var pause=0;
	pause=pause+getRandomPause(2000,2500);
	setTimeout(eqCenterReg2,pause);
	// Запись
	var pause1=pause+getRandomPause(2500,3200);
	setTimeout(eqCenterReg3,pause1);
	// Проверка результата
	var pause2=pause1+getRandomPause(3500,3800);
	setTimeout(eqCenterReg4,pause2);
}

function eqCenterReg2()/////////
{
	var d1 = document.getElementById('tab-box-reserve').getElementsByTagName('a');
	console.log(d1[0]);
	d1[0].click();}
function eqCenterReg3(){
	var dom = (document.getElementById('boxContent').getElementsByTagName('tbody'))[0].getElementsByTagName('tr');
	for(var  i = 1; i <dom.length ;i++) //(var i = dom.length - 1; i >= 0; i--)
	{
		localisation = ((dom[i].getElementsByClassName('align-left width-19'))[0]).getElementsByTagName('a')[0].className;
		if( localisation == 'centerLocalisation ' + centerLocalisation){
			var text = (dom[i].getElementsByClassName('align-center')[0]).outerHTML;
			var s = text.search('abreuvoir');
			if(s>0){
				text = text.substring(s);
				s = text.search('douche');
				if(s>0){
					var buttons0 = (dom[i].getElementsByClassName('align-center align-middle spacer-small-left spacer-small-right')[0]).getElementsByTagName('button'); ////0-на 1 день ,1-на3
					for (var j = 0; j < buttons0.length; j++) {
						var d1=(dom[i].getElementsByClassName('align-center align-middle spacer-small-left spacer-small-right')[0]).getElementsByClassName('disabled button button-style-8');
						if (d1[0] == undefined)
						{

							buttons0[j].click();
							return;
						}

					}
					//  var buttons1 = (dom[i].getElementsByClassName('align-center align-middle spacer-small-left spacer-small-right')[1]).getElementsByTagName('button');
					//     for (var k = 0; k < buttons1.length; k++) {

					//   buttons1[k].click();
					//   return;


					// }
				}
			}

		}
	}
}
function eqCenterReg4(){
	// Проверка результата
	// Если не записано, записать
	if (/message=centreOk/.test(window.location.href)!==true)
	{
		location.reload();
	}
}
//------- Запись в КСК из резерва -------
function кскOLL()/////////
{
	var pause=0;

	pause=pause+getRandomPause(2000,2500);
	setTimeout(КСК_O,pause);
	var pause1=pause+getRandomPause(2000,2800);
	setTimeout(КСК1,pause1);
	var pause2=pause1+getRandomPause(2200,2800);
	setTimeout(КСК2,pause2);
	//   var pause3=pause2+getRandomPause(2500,2800);
	// setTimeout(eqCenterReg4,pause3);
}
function КСК_O()
{
	document.getElementById('abreuvoir').setAttribute('value','1');//поилка
	document.getElementById('douche').setAttribute('value','1'); //душ
	document.getElementById(spec).setAttribute('value','1'); //спеца

	var d=document.getElementsByClassName('module module-style-20 module-css').nextElementSibling;
	d[0].click();

}
function КСК1()
{
	// Сортировка
	var c = document.getElementsByClassName('grid-cell spacer-small-top spacer-small-bottom');
	var d = c[1 ].getElementsByTagName('a');
	var pause1=getRandomPause(1000,1300);
	d[0].click();
}
function КСК2()
{
	// Запись в первый
	var c = document.getElementsByClassName('odd highlight');
	var d = c[0].getElementsByTagName('button');
	var e = d[1];
	window.oldConfirm = window.confirm;
	window.confirm = (function (){return true;});
	e.click();
	window.confirm = window.oldConfirm;
}



function CompNoVIP_Second(){
	var pause = getRandomPause(shortPause1,shortPause2);
	setTimeout(f1,pause);
	function f1()
	{
		var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f2,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(groom,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f1,pause3);
		}
	}
	function f2()
	{

		var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
		if ((d[0] !== undefined)||(d1[0] !== undefined))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f3,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(drink,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f2,pause3);
		}
	}
	function f3()
	{

		if( timeConvert() <700  )
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {  competitionByNameVIP('galop');}, pause);
			pause=pause +getRandomPause(longPause1,longPause2);
			setTimeout(f3,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f4,pause3);
		}
	}
	function f4()
	{
		// Корм
		var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
		var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
		if ((d[0] !== undefined)  || (d0[0] !== undefined))
		{
			// Спать
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f5,pause1);
		}
		else
		{
			var pause4=getRandomPause(shortPause1,shortPause2);
			setTimeout(openFeeding,pause4);
			var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(doEatDef,pause5);
			var pause6=pause5+getRandomPause(longPause1,longPause2);
			setTimeout(f4,pause6);
		}
	}
	function f5()
	{
		if( timeConvert() <1270  )//1290
		{
			var pause=getRandomPause(shortPause1,shortPause2);
			setTimeout(function() {  competitionByNameVIP('galop');}, pause);
			pause=pause +getRandomPause(longPause1,longPause2);
			setTimeout(f5,pause);
		}
		else
		{

			var pause3=getRandomPause(shortPause1,shortPause2);
			setTimeout(f7,pause3);
		}
	}
	function f7()
	{
		var n = document.getElementById('energie').textContent;
		var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
		if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() >1395  ))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f8,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(stroke,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f7,pause3);
		}
	}
	function f8()
	{
		var n = document.getElementById('energie').textContent;
		var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
		var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
		if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() >1410  ))
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(f9,pause1);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(carrot,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f8,pause3);
		}
	}
	// Спать
	function f9()
	{
		var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
		if (d[0] !== undefined)
		{
			var pause1=getRandomPause(shortPause1,shortPause2);
			setTimeout(OR,pause1);
			var pause11=pause1+getRandomPause(longPause1,longPause2);
			setTimeout(pauseFunc,pause11);
			var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
			setTimeout(reload,pause12);
		}
		else
		{
			var pause2=getRandomPause(shortPause1,shortPause2);
			setTimeout(sleep,pause2);
			var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
			setTimeout(f9,pause3);
		}
	}

}


/*GUI*/


$('body').append('<div class="lwm_logo" style="display:block; z-index:9999; position:fixed; right:0;  top:120px; width:150px;"><img src="https://raw.githubusercontent.com/Crasher69/lowadi/master/horse.png" /></div>');

$('body').append('<style>.lw {color:#fff;}</style><div class="lw_gui" style="display:block; z-index:9999; position:fixed; width:240px; height:auto; right:0; top:300px; padding:5px; background-color: rgba(0, 0, 0, 0.65);  border-radius: 10px 0px 0px 10px;"></div>');
$('.lw_gui').append('<center><p style="color:#fff;"><span style="font-family: Arial,Helvetica,sans-serif; font-size: 12px; color:#F1F9F1;"><b>BotJack 0.4.5</b></span></p> </center>');
$('.lw_gui').append('<center><p style="color:#fff;"><span style="font-family: Arial,Helvetica,sans-serif; font-size: 11px; color:#F1F9F1;">  </p></center> <hr>');

$('.lw_gui').append('<span class="lw">id завода:</span> <input type="text" name="lw_zavod" id="lw_zavod" size="18"><br>');
$('.lw_gui').append('<span class="lw">Тренировка 1: &nbsp; &nbsp;</span> <select id="train1" name="train1">	<option value="dressage">выездка</option>	<option value="galop">галоп</option>	<option value="saut">прыжки</option>	<option value="trot">рысь</option>	<option value="endurance">выносливость</option>	<option value="vitesse">скорость</option>		</select><br>');
$('.lw_gui').append('<span class="lw">Тренировка 2: &nbsp; &nbsp;</span> <select id="train2" name="train2">	<option value="dressage">выездка</option>	<option value="galop">галоп</option>	<option value="saut">прыжки</option>	<option value="trot">рысь</option>	<option value="endurance">выносливость</option>	<option value="vitesse">скорость</option>		</select><br>');
$('.lw_gui').append('<span class="lw">Тренировка 3: &nbsp; &nbsp;</span> <select id="train3" name="train3">	<option value="dressage">выездка</option>	<option value="galop">галоп</option>	<option value="saut">прыжки</option>	<option value="trot">рысь</option>	<option value="endurance">выносливость</option>	<option value="vitesse">скорость</option>		</select><br>');

$('.lw_gui').append('<span class="lw">Специализация&nbsp;</span> <select id="specialisation" name="specialisation">	<option value="specialisationWestern">Вестерн</option>	<option value="specialisationClassique">Классика</option>	</select><br>');
$('.lw_gui').append('<span class="lw">Расположение КСК</span> <select id="ksk_r" name="ksk_r">	<option value="foret">Лес</option>	<option value="plage">Пляж</option>	<option value="montagne">Горы</option>	</select><br>');

$('.lw_gui').append('<span class="lw">Соревнование: &nbsp;</span> <select id="compName" name="compName">	 <optgroup label="Классика"><option value="galop">галоп</option>	<option value="dressage">выездка</option>	<option value="saut">конкур</option>	<option value="cross">кросс</option>	<option value="trot">рысь</option></optgroup>	<optgroup label="Вестерн"><option value="trail-class">трейл</option>	<option value="cutting">каттинг</option>	<option value="barrel">бочки</option>	<option value="reining">рейнинг</option>	<option value="western-pleasure">Плеже</option>	</optgroup>	</select><br>');

$('.lw_gui').append('<span class="lw">Прогулка 1: &nbsp; &nbsp; &nbsp; &nbsp;</span> <select id="walk1" name="walk1">  <option value="montagne">Горы</option>	<option value="foret">Лес</option>	</select><br>');
$('.lw_gui').append('<span class="lw">Прогулка 2: &nbsp; &nbsp; &nbsp; &nbsp;</span> <select id="walk2" name="walk2">  <option value=""></option>	<option value="montagne">Горы</option>	<option value="foret">Лес</option>	</select><br>');


$('.lw_gui').append('<span class="lw">Докачивать навыки: </span> <input type="checkbox" id="nav" /><br>');
$('.lw_gui').append('<span class="lw">Кидать случек: &nbsp;</span> <input type="text" size="10" id="offerstobedone" />');
$('.lw_gui').append('<span class="lw">Случки с: &nbsp; &nbsp; &nbsp;</span> <select id="poroda">		<option value="1">Американская</option>	<option value="2">Английская</option>	<option value="3">Аппалуза</option>	<option value="4">Арабская</option>	<option value="5">Аргентинцы</option>	<option value="6">Ахалтекинская</option>	<option value="7">Буденновская</option>	<option value="8">Голландская</option>	<option value="9">Голштинская</option>	<option value="10">Донская</option>	<option value="11">Ирландская</option>	<option value="12">Исландская</option>	<option value="13">Кнабструппер</option>	<option value="14">Липиццан</option>	<option value="15">Лузитанская</option>	<option value="16">Мустанг</option>	<option value="17">Нокота</option>	<option value="18">Орловский рысак</option>	<option value="19">Пейнт</option>	<option value="20">Теннесийская</option>	<option value="21">Тракенская</option>	<option value="22">Французский</option>	<option value="23">Фриз</option>	<option value="24">Ганноверская</option>	<option value="25">Цыганская</option>	<option value="26">Четвертьмильная</option>	<option value="27">Испанская</option>	<option value="28">Шагия</option> <option value="29">Бельгийский пони</optoin> <option value="30">Коннемара</optoin> <option value="31">Пони Хайленд</optoin> <option value="32">Уэльский</optoin> <option value="33">Фьорд</optoin> <option value="34">Хафлингер</optoin> <option value="35">Шетландский пони</optoin> </select>');
$('.lw_gui').append('<br><br><center><span><button class="lwb_sett_gui">Сохранить</span></center>');



$('.lwb_sett_gui').click(function(){
   save_settings();
});

form_settings();

function save_settings()
{
	let zavod = $("#lw_zavod").val();
	let train1 = $("#train1").val();
	let train2 = $("#train2").val();
	let train3 = $("#train3").val();
	let walk1 = $("#walk1").val();
	let walk2 = $("#walk2").val();
	let specialisation = $("#specialisation").val();
	let ksk = $('#ksk_r').val();
	let compName = $("#compName").val();
	let offerstobedone = $("#offerstobedone").val();
	let poroda = $("#poroda").val();
	if ($('input#nav').prop('checked'))
		nav = "0";
		else  nav = "1";

    localStorage.setItem("lwm_zavod", zavod);
    localStorage.setItem("lwm_train1", train1);
    localStorage.setItem("lwm_train2", train2);
    localStorage.setItem("lwm_train3", train3);
	localStorage.setItem("lwm_walk1", walk1);
	localStorage.setItem("lwm_walk2", walk2);
    localStorage.setItem("lwm_spec", specialisation);
	localStorage.setItem("lwm_ksk", ksk);
    localStorage.setItem("lwm_comp", compName);
    localStorage.setItem("lwm_offers", offerstobedone);
    localStorage.setItem("lwm_poroda", poroda);
    localStorage.setItem("lwm_nav", nav);
    alert('Настройки сохранены! Теперь можно качать!');
}

function load_settings()
{
    zavod = localStorage.getItem("lwm_zavod");
    train1 = localStorage.getItem("lwm_train1");
    train2 = localStorage.getItem("lwm_train2");
    train3 = localStorage.getItem("lwm_train3");

	walk1 = localStorage.getItem("lwm_walk1");
	walk2 = localStorage.getItem("lwm_walk2");
	
	

    if (train1===null || train2===null || train3===null) {
        alert('Перед началом работы необходимо настроить бота! Сделайте необходимые настройки и нажмите кнопку Сохранить');
    }
    specialisation = localStorage.getItem("lwm_spec");
	spec = localStorage.getItem("lwm_ksk");
	
    if (specialisation=="specialisationWestern") amSpecialisation = "western";
    else amSpecialisation = "classique";

    compName = localStorage.getItem("lwm_comp");
    offersToBeDone = localStorage.getItem("lwm_offers");
    poroda = localStorage.getItem("lwm_poroda");
    nav = localStorage.getItem("lwm_nav");
}

function form_settings()
{

    $("#lw_zavod").val(zavod);
    $("#train1 option[value='"+train1+"']").attr("selected", "selected");
    $("#train2 option[value='"+train2+"']").attr("selected", "selected");
    $("#train3 option[value='"+train3+"']").attr("selected", "selected");

	 $("#walk1 option[value='"+walk1+"']").attr("selected", "selected");
	 $("#walk2 option[value='"+walk2+"']").attr("selected", "selected");

    $("#specialisation option[value='"+specialisation+"']").attr("selected", "selected");
	$("#ksk_r option[value='"+spec+"']").attr("selected", "selected");
	
    $("#compName option[value='"+compName+"']").attr("selected", "selected");
    $("#offerstobedone").val(offersToBeDone);
    $("#poroda option[value='"+poroda+"']").attr("selected", "selected");
    if (nav=='0')
        $('#nav').prop('checked', true);
    else
        $('#nav').prop('checked', false);
}
