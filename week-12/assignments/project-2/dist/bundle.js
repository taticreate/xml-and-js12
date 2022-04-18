(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const companies = require("../data/companies");

const getAll = ({id, name, city, country, } = {}) =>
	new Promise((resolve) => {
		let result = Array.from(companies);
		if (id) {
			result = result.filter((obj) => obj.id === id);
		}
		if (name) {
			result = result.filter((obj) => obj.name.toLowerCase().includes(name));
		}
		if (city) {
			result = result.filter((obj) => obj.city === city);
		}
		if (country) {
			result = result.filter((obj) => obj.country === country);
		}
        if (email) {
			result = result.filter((obj) => obj.email.toLowerCase().includes(email));
        }
        
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const company = companies.find((company) => company.id === id);

		if (company) {
			resolve({ code: 200, data: company });
		} else {
			resolve({
				code: 404,
				data: { message: `No found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
},{"../data/companies":2}],2:[function(require,module,exports){
module.exports=[{"name":"Aimbo","city":"Primorsko-Akhtarsk","country":"Russia","email":"clakey0@ftc.gov"},
    {"name":"Centizu","city":"Longtang","country":"China","email":"ruccello1@sogou.com"},
    {"name":"Twimbo","city":"Bahía Honda","country":"Cuba","email":"lkilbane2@ted.com"},
    {"name":"Skidoo","city":"Shengao","country":"China","email":"crogliero3@berkeley.edu"},
    {"name":"Kayveo","city":"Jiujianfang","country":"China","email":"amatissoff4@hibu.com"},
    {"name":"Mynte","city":"Ojiya","country":"Japan","email":"gblumson5@hexun.com"},
    {"name":"Kanoodle","city":"Luofang","country":"China","email":"mpearle6@360.cn"},
    {"name":"Riffpedia","city":"Amnat Charoen","country":"Thailand","email":"ashovlin7@photobucket.com"},
    {"name":"Divavu","city":"San Carlos","country":"Peru","email":"nbewley8@seesaa.net"},
    {"name":"Oyoba","city":"Katabu","country":"Indonesia","email":"gwillets9@live.com"},
    {"name":"Divavu","city":"Takedamachi","country":"Japan","email":"rolomana@senate.gov"},
    {"name":"Blogtag","city":"Honghe","country":"China","email":"astenningb@quantcast.com"},
    {"name":"Demimbu","city":"Khudāydād Khēl","country":"Afghanistan","email":"jcolmorec@ovh.net"},
    {"name":"Fadeo","city":"Az Zaytūnīyah","country":"Palestinian Territory","email":"lroggierid@delicious.com"},
    {"name":"Youspan","city":"Guia","country":"Portugal","email":"pjaillere@google.it"},
    {"name":"Zooveo","city":"Pułtusk","country":"Poland","email":"cdeeprosef@sphinn.com"},
    {"name":"Realcube","city":"Géfyra","country":"Greece","email":"arubenchikg@washington.edu"},
    {"name":"Fadeo","city":"Tazouta","country":"Morocco","email":"kmackeigh@nba.com"},
    {"name":"Midel","city":"Rivne","country":"Ukraine","email":"ctieraneyi@answers.com"},
    {"name":"Dabshots","city":"Tanzhesi","country":"China","email":"rmabsonj@amazonaws.com"},
    {"name":"Kare","city":"Radzanów","country":"Poland","email":"ihawkshawk@yelp.com"},
    {"name":"Chatterpoint","city":"Diyarb Najm","country":"Egypt","email":"ibrunnl@bravesites.com"},
    {"name":"Kwimbee","city":"Włocławek","country":"Poland","email":"mangerm@rakuten.co.jp"},
    {"name":"Jabberstorm","city":"Mosoc Llacta","country":"Peru","email":"kbrammalln@geocities.jp"},
    {"name":"Teklist","city":"San Carlos de Bolívar","country":"Argentina","email":"mwarltono@nps.gov"},
    {"name":"Photobug","city":"Cacoal","country":"Brazil","email":"snaccip@merriam-webster.com"},
    {"name":"Livetube","city":"Wolowiro","country":"Indonesia","email":"smilaq@com.com"},
    {"name":"Voolith","city":"Hullo","country":"Estonia","email":"ffiridolfir@ameblo.jp"},
    {"name":"Vipe","city":"Shuangjie","country":"China","email":"npenrights@netscape.com"},
    {"name":"InnoZ","city":"Södra Sandby","country":"Sweden","email":"ldosedalet@nyu.edu"},
    {"name":"Skyble","city":"Värnamo","country":"Sweden","email":"jharbereru@printfriendly.com"},
    {"name":"Zazio","city":"Göteborg","country":"Sweden","email":"cwhykev@clickbank.net"},
    {"name":"Photobean","city":"Nong Khai","country":"Thailand","email":"zbomew@whitehouse.gov"},
    {"name":"Bubblebox","city":"Beni Khiar","country":"Tunisia","email":"tspelwoodx@sohu.com"},
    {"name":"Dabvine","city":"Liuliping","country":"China","email":"msachery@yandex.ru"},
    {"name":"Twinder","city":"Woken","country":"China","email":"nstiffellz@blogspot.com"},
    {"name":"Realcube","city":"Huangjinbu","country":"China","email":"gjurczyk10@dyndns.org"},
    {"name":"Thoughtsphere","city":"Bogatynia","country":"Poland","email":"bsollime11@digg.com"},
    {"name":"Meejo","city":"Skutskär","country":"Sweden","email":"gdorant12@mayoclinic.com"},
    {"name":"Ainyx","city":"Cikayas","country":"Indonesia","email":"ewestrip13@google.nl"},
    {"name":"Skaboo","city":"Baihe","country":"China","email":"rclutheram14@usgs.gov"},
    {"name":"Katz","city":"Vân Canh","country":"Vietnam","email":"osand15@deviantart.com"},
    {"name":"Podcat","city":"Esperalvillo","country":"Dominican Republic","email":"trobshaw16@nature.com"},
    {"name":"Bluezoom","city":"Águas Vermelhas","country":"Brazil","email":"mlyfield17@geocities.jp"},
    {"name":"Realbridge","city":"Sukahening","country":"Indonesia","email":"eperulli18@tuttocitta.it"},
    {"name":"Quinu","city":"Chimboy Shahri","country":"Uzbekistan","email":"kreading19@bandcamp.com"},
    {"name":"Topiczoom","city":"Cotovia","country":"Portugal","email":"rklais1a@diigo.com"},
    {"name":"Twinte","city":"Maji","country":"China","email":"gmeuse1b@shareasale.com"},
    {"name":"Youspan","city":"Providencia","country":"Mexico","email":"wmedd1c@businesswire.com"},
    {"name":"Jabbersphere","city":"Ternovka","country":"Russia","email":"jjone1d@myspace.com"},
    {"name":"Centizu","city":"Condado","country":"Cuba","email":"jgregorace1e@youtube.com"},
    {"name":"Skinte","city":"Červené Pečky","country":"Czech Republic","email":"ohendrich1f@hexun.com"},
    {"name":"Leenti","city":"Stráž nad Nisou","country":"Czech Republic","email":"esteckings1g@ucsd.edu"},
    {"name":"Latz","city":"Huyunxiang","country":"China","email":"mleeds1h@tumblr.com"},
    {"name":"Divape","city":"Hongos","country":"Peru","email":"mvassel1i@patch.com"},
    {"name":"Brainbox","city":"Da’an","country":"China","email":"bleve1j@amazon.co.jp"},
    {"name":"Oloo","city":"Toledo","country":"Spain","email":"wsprowles1k@360.cn"},
    {"name":"Aimbu","city":"Bromma","country":"Sweden","email":"tmitroshinov1l@diigo.com"},
    {"name":"Gabcube","city":"Hongqi Yingzi","country":"China","email":"kmckeney1m@disqus.com"},
    {"name":"Feedfish","city":"Kampungruweh","country":"Indonesia","email":"rclutheram1n@weibo.com"},
    {"name":"Thoughtstorm","city":"Zhongxing","country":"China","email":"ahardcastle1o@weebly.com"},
    {"name":"Trudeo","city":"Arnage","country":"France","email":"ostevenson1p@google.co.uk"},
    {"name":"Buzzshare","city":"Paris 18","country":"France","email":"fperrone1q@mediafire.com"},
    {"name":"Wordtune","city":"Starobachaty","country":"Russia","email":"ttrevallion1r@twitter.com"},
    {"name":"Layo","city":"Alofi","country":"Niue","email":"gyouster1s@cocolog-nifty.com"},
    {"name":"Jazzy","city":"Tabira","country":"Brazil","email":"mangood1t@google.es"},
    {"name":"Edgeblab","city":"Jinping","country":"China","email":"wallsepp1u@house.gov"},
    {"name":"Miboo","city":"Tanahedang","country":"Indonesia","email":"fhothersall1v@nps.gov"},
    {"name":"Edgeclub","city":"Liangchahe","country":"China","email":"mforbes1w@freewebs.com"},
    {"name":"Zazio","city":"Waiwukak","country":"Indonesia","email":"aedkins1x@posterous.com"},
    {"name":"Babblestorm","city":"Jiangchi","country":"China","email":"ggiron1y@issuu.com"},
    {"name":"Jamia","city":"Bengras","country":"Indonesia","email":"easlen1z@washington.edu"},
    {"name":"Blogtags","city":"Olocuilta","country":"El Salvador","email":"afothergill20@si.edu"},
    {"name":"Buzzbean","city":"Paracatu","country":"Brazil","email":"kduffin21@stanford.edu"},
    {"name":"Zoomdog","city":"Saint-Avold","country":"France","email":"eplumb22@imageshack.us"},
    {"name":"Demizz","city":"Shuishi","country":"China","email":"mtowll23@etsy.com"},
    {"name":"Realcube","city":"Stuttgart Stuttgart-Mitte","country":"Germany","email":"frydings24@senate.gov"},
    {"name":"Wikizz","city":"Haizigou","country":"China","email":"mmccluskey25@e-recht24.de"},
    {"name":"Trunyx","city":"Xicheng","country":"China","email":"pbeckwith26@simplemachines.org"},
    {"name":"Buzzdog","city":"Presidente Dutra","country":"Brazil","email":"pwoolway27@typepad.com"},
    {"name":"Feedfish","city":"Ganting","country":"China","email":"lkleinstein28@reuters.com"},
    {"name":"Leenti","city":"Rizal","country":"Philippines","email":"arenfrew29@reuters.com"},
    {"name":"Camido","city":"Pereiro","country":"Portugal","email":"awellard2a@cargocollective.com"},
    {"name":"Zoombeat","city":"Tonga","country":"Cameroon","email":"mmaccallum2b@prlog.org"},
    {"name":"Demizz","city":"Belalcazar","country":"Colombia","email":"ggrigolli2c@smh.com.au"},
    {"name":"Jaxspan","city":"Doljo","country":"Philippines","email":"adoldon2d@skyrock.com"},
    {"name":"Topicblab","city":"‘Amd","country":"Yemen","email":"csked2e@cdbaby.com"},
    {"name":"Wordware","city":"Huolianpo","country":"China","email":"kciobotaro2f@desdev.cn"},
    {"name":"Youfeed","city":"Mandalgovi","country":"Mongolia","email":"fbertomeu2g@tripod.com"},
    {"name":"Thoughtbridge","city":"Datar","country":"Indonesia","email":"swyd2h@dailymotion.com"},
    {"name":"Plajo","city":"Tanūmah","country":"Saudi Arabia","email":"mlisciandro2i@tumblr.com"},
    {"name":"Realblab","city":"Överkalix","country":"Sweden","email":"fbails2j@yellowbook.com"},
    {"name":"Centidel","city":"Komsomol’sk","country":"Russia","email":"ggodwyn2k@huffingtonpost.com"},
    {"name":"Realbridge","city":"Kanoni","country":"Uganda","email":"adaybell2l@slate.com"},
    {"name":"Teklist","city":"Aghsu","country":"Azerbaijan","email":"cdrance2m@nydailynews.com"},
    {"name":"Voomm","city":"Kariat Arkmane","country":"Morocco","email":"btomlin2n@cbslocal.com"},
    {"name":"Skinte","city":"Bordeaux","country":"France","email":"csilcock2o@odnoklassniki.ru"},
    {"name":"Jayo","city":"Shezë","country":"Albania","email":"ahousam2p@mozilla.com"},
    {"name":"Edgepulse","city":"Morrinhos","country":"Brazil","email":"lkinney2q@businessinsider.com"},
    {"name":"Realbuzz","city":"Pruszcz Gdański","country":"Poland","email":"jhabert2r@cargocollective.com"},
    {"name":"Oodoo","city":"Shicang","country":"China","email":"btizard2s@mail.ru"},
    {"name":"Blogpad","city":"Naze","country":"Japan","email":"vison2t@yale.edu"},
    {"name":"Yodel","city":"Monte Agudo","country":"Portugal","email":"bthormann2u@dedecms.com"},
    {"name":"Zooxo","city":"Wysoka","country":"Poland","email":"pcoldman2v@creativecommons.org"},
    {"name":"Ainyx","city":"Pesochnoye","country":"Russia","email":"llinger2w@slideshare.net"},
    {"name":"Kayveo","city":"Atar","country":"Mauritania","email":"cvigars2x@ucoz.com"},
    {"name":"Babbleopia","city":"Baghdad","country":"Iraq","email":"awadge2y@dell.com"},
    {"name":"Fivebridge","city":"Ribeiro","country":"Portugal","email":"fgendricke2z@slate.com"},
    {"name":"Talane","city":"Velyka Lepetykha","country":"Ukraine","email":"nredmire30@nytimes.com"},
    {"name":"Skynoodle","city":"Amga","country":"Russia","email":"nmcintosh31@sogou.com"},
    {"name":"Babbleset","city":"Zhovti Vody","country":"Ukraine","email":"agarth32@simplemachines.org"},
    {"name":"Agimba","city":"Séléa","country":"Comoros","email":"rhovenden33@facebook.com"},
    {"name":"Babbleopia","city":"Krajan","country":"Indonesia","email":"dbrosnan34@npr.org"},
    {"name":"Demimbu","city":"Firmat","country":"Argentina","email":"kdonne35@miitbeian.gov.cn"},
    {"name":"Jamia","city":"Novosmolinskiy","country":"Russia","email":"mguidetti36@storify.com"},
    {"name":"Voonte","city":"Rustam jo Goth","country":"Pakistan","email":"cceeley37@hc360.com"},
    {"name":"Topiclounge","city":"Karangsuko","country":"Indonesia","email":"kkobierzycki38@netvibes.com"},
    {"name":"Trilith","city":"Huotong","country":"China","email":"smcmurthy39@ca.gov"},
    {"name":"Dynabox","city":"Týn nad Vltavou","country":"Czech Republic","email":"rkynan3a@quantcast.com"},
    {"name":"Agivu","city":"Kuantan","country":"Malaysia","email":"dcasone3b@dropbox.com"},
    {"name":"Zooxo","city":"Jabungsisir","country":"Indonesia","email":"aoliva3c@vimeo.com"},
    {"name":"Cogilith","city":"Piotrków Kujawski","country":"Poland","email":"jlathan3d@theguardian.com"},
    {"name":"Livefish","city":"Pahārpur","country":"Pakistan","email":"akingswoode3e@de.vu"},
    {"name":"Youfeed","city":"Ban Tak","country":"Thailand","email":"sconiff3f@time.com"},
    {"name":"Livepath","city":"Baiyashi","country":"China","email":"tguirardin3g@mayoclinic.com"},
    {"name":"Kimia","city":"Santo Tomas","country":"Peru","email":"ymallen3h@addtoany.com"},
    {"name":"Voomm","city":"Büzmeýin","country":"Turkmenistan","email":"remanuele3i@parallels.com"},
    {"name":"Podcat","city":"Idtig","country":"Philippines","email":"dbenzie3j@dedecms.com"},
    {"name":"Skibox","city":"Al Jafr","country":"Saudi Arabia","email":"fgiacobillo3k@barnesandnoble.com"},
    {"name":"Jabbertype","city":"Shikhany","country":"Russia","email":"cfontin3l@reuters.com"},
    {"name":"Riffpath","city":"Lozova","country":"Ukraine","email":"ckaesmans3m@bloglines.com"},
    {"name":"Brightbean","city":"Huangji","country":"China","email":"dsiene3n@wikimedia.org"},
    {"name":"Zoomcast","city":"Yuetang","country":"China","email":"atalks3o@state.gov"},
    {"name":"Realbuzz","city":"Giv'on HaHadasha","country":"Israel","email":"rfulks3p@home.pl"},
    {"name":"Leexo","city":"Uddevalla","country":"Sweden","email":"rgregorace3q@e-recht24.de"},
    {"name":"Jabberbean","city":"Saint-Étienne-du-Rouvray","country":"France","email":"rvanbaaren3r@vinaora.com"},
    {"name":"Yabox","city":"Kuytun","country":"Russia","email":"dsarfass3s@liveinternet.ru"},
    {"name":"Tagopia","city":"Pandanwangi","country":"Indonesia","email":"onuschke3t@fc2.com"},
    {"name":"Feedfish","city":"Venda do Alcaide","country":"Portugal","email":"epignon3u@sitemeter.com"},
    {"name":"Divape","city":"Szydłowo","country":"Poland","email":"astanmer3v@smh.com.au"},
    {"name":"Buzzdog","city":"Pangushan","country":"China","email":"zwoollin3w@mac.com"},
    {"name":"Jaxnation","city":"Antsohihy","country":"Madagascar","email":"kdungate3x@amazon.com"},
    {"name":"Tagcat","city":"Jiuxian","country":"China","email":"gfirbanks3y@nytimes.com"},
    {"name":"Jaxbean","city":"Manassas","country":"United States","email":"cpywell3z@ocn.ne.jp"},
    {"name":"Twitterwire","city":"Yingcheng","country":"China","email":"cmignot40@engadget.com"},
    {"name":"Fiveclub","city":"Zambujeira","country":"Portugal","email":"whansman41@spotify.com"},
    {"name":"Mycat","city":"Pshekhskaya","country":"Russia","email":"awinfindale42@bbb.org"},
    {"name":"Blogpad","city":"San Antonio","country":"United States","email":"dwhittingham43@prlog.org"},
    {"name":"Quinu","city":"Caoxi","country":"China","email":"rblaze44@weebly.com"},
    {"name":"Gigaclub","city":"Kool Tengah","country":"Indonesia","email":"vlunnon45@hubpages.com"},
    {"name":"Trilith","city":"Sentieiras","country":"Portugal","email":"ggilroy46@weebly.com"},
    {"name":"Kare","city":"Douma","country":"Syria","email":"tguyot47@oakley.com"},
    {"name":"Realmix","city":"Shinshiro","country":"Japan","email":"nratazzi48@cbc.ca"},
    {"name":"Zoomzone","city":"Nagua","country":"Dominican Republic","email":"ioliverpaull49@census.gov"},
    {"name":"Teklist","city":"Nizhnyaya Omka","country":"Russia","email":"ndecaroli4a@yahoo.co.jp"},
    {"name":"Tagchat","city":"Sacramento","country":"Brazil","email":"amanuelli4b@boston.com"},
    {"name":"Minyx","city":"Disūq","country":"Egypt","email":"mambresin4c@bandcamp.com"},
    {"name":"Buzzdog","city":"Ivanovka","country":"Russia","email":"tkindread4d@free.fr"},
    {"name":"Zoozzy","city":"Bachuan","country":"China","email":"hgheeraert4e@hugedomains.com"},
    {"name":"Kimia","city":"Hostavice","country":"Czech Republic","email":"mcarnalan4f@berkeley.edu"},
    {"name":"Yombu","city":"Palca","country":"Peru","email":"rgogin4g@google.pl"},
    {"name":"Reallinks","city":"Xinzha","country":"China","email":"obovey4h@youtube.com"},
    {"name":"Brightdog","city":"Medianeira","country":"Brazil","email":"sgomer4i@a8.net"},
    {"name":"Buzzbean","city":"Wangmeng","country":"China","email":"ozoanetti4j@mlb.com"},
    {"name":"Ozu","city":"Xiangcheng","country":"China","email":"pkarpychev4k@parallels.com"},
    {"name":"Trilith","city":"Bridgetown","country":"Barbados","email":"tmayoral4l@newyorker.com"},
    {"name":"Blogpad","city":"Brocēni","country":"Latvia","email":"epipping4m@soup.io"},
    {"name":"Cogilith","city":"El Valle del Espíritu Santo","country":"Venezuela","email":"tbasterfield4n@goo.ne.jp"},
    {"name":"Dablist","city":"Verkhniy Avzyan","country":"Russia","email":"cverchambre4o@icq.com"},
    {"name":"Tekfly","city":"Los Angeles","country":"United States","email":"mjones4p@mapquest.com"},
    {"name":"Voonyx","city":"Aş Şanamayn","country":"Syria","email":"darnould4q@arstechnica.com"},
    {"name":"Mudo","city":"Krzynowłoga Mała","country":"Poland","email":"tscrange4r@nationalgeographic.com"},
    {"name":"Topicblab","city":"Shizuoka-shi","country":"Japan","email":"kgouldie4s@list-manage.com"},
    {"name":"Aivee","city":"Al Qaţn","country":"Yemen","email":"rdoby4t@google.it"},
    {"name":"Jayo","city":"Ringinrejo","country":"Indonesia","email":"ddafydd4u@independent.co.uk"},
    {"name":"Meevee","city":"Lapu-Lapu City","country":"Philippines","email":"cpaddle4v@nature.com"},
    {"name":"Digitube","city":"Behbahān","country":"Iran","email":"mcodeman4w@prweb.com"},
    {"name":"Realbuzz","city":"Oras","country":"Philippines","email":"lkerry4x@amazon.com"},
    {"name":"Topicshots","city":"Bagong Pagasa","country":"Philippines","email":"molivari4y@ca.gov"},
    {"name":"Wordify","city":"Vybor","country":"Russia","email":"bmcinility4z@rediff.com"},
    {"name":"Blogpad","city":"President Roxas","country":"Philippines","email":"tlermouth50@intel.com"},
    {"name":"Zoonder","city":"Avignon","country":"France","email":"jbetham51@tiny.cc"},
    {"name":"Yadel","city":"Kedungringin","country":"Indonesia","email":"dellacott52@e-recht24.de"},
    {"name":"Feedbug","city":"Pergan","country":"Indonesia","email":"ccrabtree53@tiny.cc"},
    {"name":"Thoughtstorm","city":"Houston","country":"United States","email":"ycarlo54@oaic.gov.au"},
    {"name":"Skippad","city":"Kyaka","country":"Tanzania","email":"mellsworthe55@mtv.com"},
    {"name":"Twinder","city":"Azenha","country":"Portugal","email":"aheyward56@acquirethisname.com"},
    {"name":"Wikizz","city":"Thanatpin","country":"Myanmar","email":"vmorrallee57@reuters.com"},
    {"name":"Dabshots","city":"Caticugan","country":"Philippines","email":"kpocknoll58@istockphoto.com"},
    {"name":"Cogibox","city":"San Antonio Ilotenango","country":"Guatemala","email":"rbenda59@nsw.gov.au"},
    {"name":"Photospace","city":"Repušnica","country":"Croatia","email":"lhaxell5a@nasa.gov"},
    {"name":"Babbleopia","city":"Kuanghe","country":"China","email":"kmckerrow5b@ifeng.com"},
    {"name":"Eazzy","city":"Irtyshskiy","country":"Russia","email":"jopfer5c@samsung.com"},
    {"name":"Jabbertype","city":"Robonkon","country":"Philippines","email":"ldalzell5d@biblegateway.com"},
    {"name":"Voonte","city":"Stockholm","country":"Sweden","email":"agagen5e@usda.gov"},
    {"name":"Leenti","city":"Cipicung Timur","country":"Indonesia","email":"cdudley5f@abc.net.au"},
    {"name":"Blogtags","city":"Dajt","country":"Albania","email":"hpleaden5g@delicious.com"},
    {"name":"Oyope","city":"Dongxing","country":"China","email":"mgain5h@hibu.com"},
    {"name":"Podcat","city":"Kagoro","country":"Nigeria","email":"aosmund5i@topsy.com"},
    {"name":"Agivu","city":"Saño","country":"Peru","email":"rrosekilly5j@google.co.uk"},
    {"name":"Skyndu","city":"Buyant","country":"Mongolia","email":"lhanford5k@gnu.org"},
    {"name":"LiveZ","city":"Dalang","country":"China","email":"ahewes5l@springer.com"},
    {"name":"Kayveo","city":"Polevskoy","country":"Russia","email":"khanselmann5m@cbsnews.com"},
    {"name":"Agivu","city":"Yingcui","country":"China","email":"meve5n@technorati.com"},
    {"name":"Kwideo","city":"San Francisco","country":"Mexico","email":"kperkin5o@123-reg.co.uk"},
    {"name":"Devpoint","city":"Birendranagar","country":"Nepal","email":"lweaver5p@irs.gov"},
    {"name":"Riffwire","city":"Chuncheon","country":"South Korea","email":"lromanet5q@phpbb.com"},
    {"name":"Voonder","city":"Yasnyy","country":"Russia","email":"mbaswall5r@parallels.com"},
    {"name":"Mydo","city":"Soldato-Aleksandrovskoye","country":"Russia","email":"mkees5s@npr.org"},
    {"name":"Skinte","city":"Ansermanuevo","country":"Colombia","email":"hgerling5t@princeton.edu"},
    {"name":"Aivee","city":"Tripoli","country":"Libya","email":"abohlens5u@ftc.gov"},
    {"name":"Browsezoom","city":"Krasnyy Oktyabr’","country":"Russia","email":"fblissett5v@columbia.edu"},
    {"name":"Skynoodle","city":"Wattala","country":"Sri Lanka","email":"ntimlett5w@sitemeter.com"},
    {"name":"Yakidoo","city":"Messejana","country":"Portugal","email":"cpatron5x@rakuten.co.jp"},
    {"name":"Blogtags","city":"Wang Noi","country":"Thailand","email":"dmacmarcuis5y@smh.com.au"},
    {"name":"Twiyo","city":"Óbidos","country":"Portugal","email":"fmackelworth5z@shinystat.com"},
    {"name":"Roombo","city":"Wugong","country":"China","email":"lmusicka60@facebook.com"},
    {"name":"Agivu","city":"Vale de Madeiros","country":"Portugal","email":"dmarcome61@time.com"},
    {"name":"Brainsphere","city":"Tuojiang","country":"China","email":"bkennaird62@wix.com"},
    {"name":"Eazzy","city":"Luokou","country":"China","email":"jiggo63@seesaa.net"},
    {"name":"Zazio","city":"Miasskoye","country":"Russia","email":"alistone64@go.com"},
    {"name":"Edgewire","city":"Taverny","country":"France","email":"hdibbe65@indiegogo.com"},
    {"name":"Zooxo","city":"Hamburg","country":"Germany","email":"cbortolotti66@tripadvisor.com"},
    {"name":"Meedoo","city":"Tonjongsari","country":"Indonesia","email":"kgowrich67@weather.com"},
    {"name":"Yodo","city":"Casal de Cambra","country":"Portugal","email":"nmaughan68@smh.com.au"},
    {"name":"Thoughtworks","city":"Jiyang","country":"China","email":"egatfield69@boston.com"},
    {"name":"Mybuzz","city":"Dumlan","country":"Philippines","email":"scake6a@redcross.org"},
    {"name":"Abatz","city":"Liverpool","country":"United Kingdom","email":"dmcgawn6b@plala.or.jp"},
    {"name":"Miboo","city":"Dzhiginka","country":"Russia","email":"cstrephan6c@google.com"},
    {"name":"Gigashots","city":"Kalunan","country":"Indonesia","email":"hdrewry6d@indiatimes.com"},
    {"name":"Kazio","city":"Vysokovsk","country":"Russia","email":"theyfield6e@utexas.edu"},
    {"name":"Zoozzy","city":"Zhenwen","country":"China","email":"ejulian6f@xinhuanet.com"},
    {"name":"Eimbee","city":"Bratslav","country":"Ukraine","email":"sbackman6g@pbs.org"},
    {"name":"Cogibox","city":"Nilópolis","country":"Brazil","email":"gjewkes6h@fotki.com"},
    {"name":"Photolist","city":"Frederico Westphalen","country":"Brazil","email":"slippi6i@usda.gov"},
    {"name":"Voolith","city":"Łapczyca","country":"Poland","email":"rtenwick6j@constantcontact.com"},
    {"name":"Meedoo","city":"Arraial do Cabo","country":"Brazil","email":"acritoph6k@tinypic.com"},
    {"name":"Thoughtstorm","city":"Baguinge","country":"Philippines","email":"gbackwell6l@xrea.com"},
    {"name":"Gigabox","city":"Wiwilí","country":"Nicaragua","email":"claybourne6m@linkedin.com"},
    {"name":"Jetwire","city":"Sua","country":"Indonesia","email":"ebraganca6n@etsy.com"},
    {"name":"Quamba","city":"Andorinha","country":"Portugal","email":"mhartshorne6o@smh.com.au"},
    {"name":"Realmix","city":"Takeo","country":"Cambodia","email":"glindley6p@unc.edu"},
    {"name":"Lazz","city":"Majayjay","country":"Philippines","email":"ggoodhand6q@zimbio.com"},
    {"name":"Twitterwire","city":"Xia Zanggor","country":"China","email":"elebatteur6r@scientificamerican.com"},
    {"name":"Vinte","city":"Coelho Neto","country":"Brazil","email":"randreone6s@cornell.edu"},
    {"name":"Eamia","city":"Banjar Buahan","country":"Indonesia","email":"eollis6t@liveinternet.ru"},
    {"name":"Wordtune","city":"Kafir Qala","country":"Afghanistan","email":"apavluk6u@zimbio.com"},
    {"name":"Photolist","city":"Yinhe","country":"China","email":"gatherton6v@purevolume.com"},
    {"name":"Wordify","city":"Descalvado","country":"Brazil","email":"udufore6w@prnewswire.com"},
    {"name":"Flashdog","city":"Villanueva","country":"Philippines","email":"atolchard6x@oracle.com"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./api/company.js");

const renderTable = (data, nameTerm) => {
	const tableBody = document.getElementById("data-table");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	if (nameTerm) {
		source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
	}

	const rows = source.reduce(
		(acc, { id, name, city, country, email }) =>
			acc +
			`<tr id="table-row-${id}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${city}</td>
            <td>${country}</td>
            <td>${email}</td>
            </tr>`,
		``
	);

	tableBody.innerHTML = rows;
};


getAll().then(({ data }) =>  {
  renderTable(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const name = event.target.name.value;
	const city = event.target.city.value;
	const country= event.target.country.value;
    const email= event.target.email.value;

	getAll({ id, name, city, country, email }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
},{"./api/company.js":1}]},{},[3]);
