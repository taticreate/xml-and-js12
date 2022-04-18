(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const companies = require("../data/companies");

const getAll = ({id, name, city, country,email} = {}) =>
	new Promise((resolve) => {
		let result = Array.from(companies);
		if (id) {
			result = result.filter((obj) => obj.id.toLowerCase().includes(id));
		}
		if (name) {
			result = result.filter((obj) => obj.name.toLowerCase().includes(name));
		}
		if (city) {
			result = result.filter((obj) => obj.city.toLowerCase().includes(city));
		}
		if (country) {
			result = result.filter((obj) => obj.country.toLowerCase().includes(country));
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
module.exports=[{"id":1,"name":"Zoovu","city":"Yanjiang","country":"China","email":"sscoular0@admin.ch"},
{"id":2,"name":"Wikizz","city":"Huangcun","country":"China","email":"cwoolmer1@nytimes.com"},
{"id":3,"name":"Feedspan","city":"Shijiao","country":"China","email":"ejorgesen2@fda.gov"},
{"id":4,"name":"Zoozzy","city":"Pilar","country":"Philippines","email":"djakov3@purevolume.com"},
{"id":5,"name":"Innotype","city":"Macroom","country":"Ireland","email":"aslegg4@163.com"},
{"id":6,"name":"Mynte","city":"Lille","country":"France","email":"aizkovitz5@adobe.com"},
{"id":7,"name":"Yodo","city":"Esparza","country":"Costa Rica","email":"resposi6@reuters.com"},
{"id":8,"name":"Wikizz","city":"Bayan Tuohai","country":"China","email":"jmidgely7@google.com"},
{"id":9,"name":"Twinder","city":"Candi","country":"Indonesia","email":"cwarburton8@tripod.com"},
{"id":10,"name":"Jabbercube","city":"Xujiaqiao","country":"China","email":"stomaskunas9@addtoany.com"},
{"id":11,"name":"Avaveo","city":"Mangochi","country":"Malawi","email":"bweblina@vinaora.com"},
{"id":12,"name":"Dynava","city":"Baños","country":"Ecuador","email":"hgylesb@biblegateway.com"},
{"id":13,"name":"Realcube","city":"Farah","country":"Afghanistan","email":"ycapec@howstuffworks.com"},
{"id":14,"name":"Brightbean","city":"Bagroy","country":"Philippines","email":"tcollierd@addthis.com"},
{"id":15,"name":"Oyope","city":"Independencia","country":"Mexico","email":"aridgleye@wired.com"},
{"id":16,"name":"Yotz","city":"Besuki","country":"Indonesia","email":"cpendrickf@photobucket.com"},
{"id":17,"name":"Zazio","city":"Areado","country":"Brazil","email":"ailemg@wikispaces.com"},
{"id":18,"name":"Quaxo","city":"Taoyuan","country":"China","email":"mgoodredgeh@edublogs.org"},
{"id":19,"name":"Jaxspan","city":"Asamankese","country":"Ghana","email":"bcryeri@weibo.com"},
{"id":20,"name":"Blognation","city":"Pingshui","country":"China","email":"llygoj@issuu.com"},
{"id":21,"name":"Babblestorm","city":"Satuek","country":"Thailand","email":"bhegertyk@xrea.com"},
{"id":22,"name":"Devify","city":"Usu","country":"China","email":"ccotilardl@apache.org"},
{"id":23,"name":"Skippad","city":"Porvenir","country":"Uruguay","email":"dfeldbergm@microsoft.com"},
{"id":24,"name":"Zoomdog","city":"Kanoni","country":"Uganda","email":"gsambrookn@webs.com"},
{"id":25,"name":"Blogtags","city":"Binitayan","country":"Philippines","email":"pmacclintono@nsw.gov.au"},
{"id":26,"name":"Shuffledrive","city":"Oslo","country":"Norway","email":"mmorterp@telegraph.co.uk"},
{"id":27,"name":"Yakidoo","city":"Sarulla","country":"Indonesia","email":"sklimkinq@csmonitor.com"},
{"id":28,"name":"Yakijo","city":"Bibiani","country":"Ghana","email":"vmcguineyr@jimdo.com"},
{"id":29,"name":"Skimia","city":"Votorantim","country":"Brazil","email":"alivoirs@illinois.edu"},
{"id":30,"name":"Fiveclub","city":"Citeureup","country":"Indonesia","email":"abarneyt@ow.ly"},
{"id":31,"name":"Camido","city":"Pocora","country":"Costa Rica","email":"ibeamontu@barnesandnoble.com"},
{"id":32,"name":"Wikivu","city":"Beylagan","country":"Azerbaijan","email":"vandrewv@about.com"},
{"id":33,"name":"Photolist","city":"Pimentel","country":"Dominican Republic","email":"jfitchetw@chron.com"},
{"id":34,"name":"Roomm","city":"Tabuating","country":"Philippines","email":"lhonigx@reuters.com"},
{"id":35,"name":"Photospace","city":"Jiangxiangzhen","country":"China","email":"ltufty@hp.com"},
{"id":36,"name":"Devshare","city":"Lysekil","country":"Sweden","email":"kbantickz@slate.com"},
{"id":37,"name":"Oba","city":"Gaolong","country":"China","email":"ecolnet10@accuweather.com"},
{"id":38,"name":"Dynabox","city":"Cheremnoye","country":"Russia","email":"hnary11@webs.com"},
{"id":39,"name":"Skyba","city":"Darungan","country":"Indonesia","email":"blintin12@oracle.com"},
{"id":40,"name":"Fivebridge","city":"Askainen","country":"Finland","email":"mleakner13@shinystat.com"},
{"id":41,"name":"Browsecat","city":"Maoming","country":"China","email":"rfend14@dot.gov"},
{"id":42,"name":"Fivebridge","city":"Papetoai","country":"French Polynesia","email":"gcrebbin15@homestead.com"},
{"id":43,"name":"Dynabox","city":"Dubrava","country":"Croatia","email":"tallaway16@shareasale.com"},
{"id":44,"name":"Realblab","city":"Brody","country":"Poland","email":"dgibbieson17@privacy.gov.au"},
{"id":45,"name":"Skimia","city":"Rongai","country":"Kenya","email":"msinncock18@soundcloud.com"},
{"id":46,"name":"Tazzy","city":"Beiling","country":"China","email":"horvis19@archive.org"},
{"id":47,"name":"Realmix","city":"Trinidad","country":"Bolivia","email":"hhansard1a@hostgator.com"},
{"id":48,"name":"Skyndu","city":"At Tāj","country":"Libya","email":"jmcfeat1b@mail.ru"},
{"id":49,"name":"Skibox","city":"Spånga","country":"Sweden","email":"uwynter1c@studiopress.com"},
{"id":50,"name":"Realbuzz","city":"Shamanka","country":"Russia","email":"mcokayne1d@mac.com"},
{"id":51,"name":"Bluejam","city":"Yanggu","country":"China","email":"hshorto1e@dion.ne.jp"},
{"id":52,"name":"Oodoo","city":"Piedecuesta","country":"Colombia","email":"celwin1f@ebay.co.uk"},
{"id":53,"name":"Youspan","city":"Prado","country":"Brazil","email":"yhuntriss1g@weather.com"},
{"id":54,"name":"Quatz","city":"El Vigía","country":"Venezuela","email":"astanway1h@ucoz.com"},
{"id":55,"name":"LiveZ","city":"Wilkes Barre","country":"United States","email":"rpetty1i@gov.uk"},
{"id":56,"name":"Kare","city":"Smečno","country":"Czech Republic","email":"mhakes1j@acquirethisname.com"},
{"id":57,"name":"Realcube","city":"Oštarije","country":"Croatia","email":"amarson1k@canalblog.com"},
{"id":58,"name":"Quamba","city":"Xinyang","country":"China","email":"nlythgoe1l@studiopress.com"},
{"id":59,"name":"Mycat","city":"Sumuragung","country":"Indonesia","email":"alagrange1m@facebook.com"},
{"id":60,"name":"Quaxo","city":"Rostov","country":"Russia","email":"dlinsey1n@blinklist.com"},
{"id":61,"name":"Voomm","city":"Daxing","country":"China","email":"dcarah1o@myspace.com"},
{"id":62,"name":"Livetube","city":"Bukabu","country":"Indonesia","email":"elivezley1p@discovery.com"},
{"id":63,"name":"Flashspan","city":"Polonnaruwa","country":"Sri Lanka","email":"gveschi1q@disqus.com"},
{"id":64,"name":"Wordtune","city":"Pangal Sur","country":"Philippines","email":"dpask1r@whitehouse.gov"},
{"id":65,"name":"Voonte","city":"Loacan","country":"Philippines","email":"rtessington1s@qq.com"},
{"id":66,"name":"Brightbean","city":"Sumberngerjat","country":"Indonesia","email":"rreisin1t@seesaa.net"},
{"id":67,"name":"Yodo","city":"Svenljunga","country":"Sweden","email":"lhelstrip1u@pinterest.com"},
{"id":68,"name":"Yadel","city":"Dongxiang","country":"China","email":"minston1v@gravatar.com"},
{"id":69,"name":"Ailane","city":"Teófilo Otoni","country":"Brazil","email":"rgedge1w@naver.com"},
{"id":70,"name":"Zazio","city":"Chaviña","country":"Peru","email":"ahensmans1x@yahoo.co.jp"},
{"id":71,"name":"Tagpad","city":"Santa Catarina Ixtahuacán","country":"Guatemala","email":"cscarce1y@bbb.org"},
{"id":72,"name":"Muxo","city":"Kugluktuk","country":"Canada","email":"pcundy1z@odnoklassniki.ru"},
{"id":73,"name":"BlogXS","city":"Belle-Anse","country":"Haiti","email":"tlocard20@archive.org"},
{"id":74,"name":"Realcube","city":"Aranyaprathet","country":"Thailand","email":"pbruff21@godaddy.com"},
{"id":75,"name":"Omba","city":"Qixia","country":"China","email":"jnorheny22@yahoo.com"},
{"id":76,"name":"Babblestorm","city":"Wuguishan","country":"China","email":"lsaddington23@twitpic.com"},
{"id":77,"name":"Meeveo","city":"Huolu","country":"China","email":"eclewlow24@toplist.cz"},
{"id":78,"name":"Oyonder","city":"Hortolândia","country":"Brazil","email":"mculvey25@free.fr"},
{"id":79,"name":"Thoughtbridge","city":"Porto Alto","country":"Portugal","email":"omcginn26@wikimedia.org"},
{"id":80,"name":"Zoozzy","city":"Detusoko","country":"Indonesia","email":"wdumpleton27@is.gd"},
{"id":81,"name":"Centizu","city":"Hailin","country":"China","email":"grheubottom28@delicious.com"},
{"id":82,"name":"Avaveo","city":"Futu","country":"China","email":"jlamburne29@netscape.com"},
{"id":83,"name":"Meedoo","city":"Nal’chik","country":"Russia","email":"brobbert2a@cbsnews.com"},
{"id":84,"name":"Wordtune","city":"Richmond","country":"United States","email":"rkingswoode2b@nba.com"},
{"id":85,"name":"Voonyx","city":"Kučevo","country":"Serbia","email":"hnoulton2c@mayoclinic.com"},
{"id":86,"name":"Thoughtmix","city":"Wanfu","country":"China","email":"erusson2d@cnet.com"},
{"id":87,"name":"Quamba","city":"Irvine","country":"United States","email":"lchivrall2e@state.gov"},
{"id":88,"name":"Realbuzz","city":"Linhó","country":"Portugal","email":"hsandiland2f@about.com"},
{"id":89,"name":"Gigabox","city":"Bielefeld","country":"Germany","email":"wofallone2g@creativecommons.org"},
{"id":90,"name":"Cogidoo","city":"Ban Ratsada","country":"Thailand","email":"lbirdsey2h@cloudflare.com"},
{"id":91,"name":"Bluejam","city":"Moravský Krumlov","country":"Czech Republic","email":"bdanser2i@theguardian.com"},
{"id":92,"name":"Jazzy","city":"Wangfu","country":"China","email":"veede2j@livejournal.com"},
{"id":93,"name":"Flashspan","city":"Kuidou","country":"China","email":"easpin2k@ca.gov"},
{"id":94,"name":"Gabvine","city":"Tvŭrditsa","country":"Bulgaria","email":"cduinbleton2l@google.cn"},
{"id":95,"name":"Shufflester","city":"Camias","country":"Philippines","email":"vcodman2m@163.com"},
{"id":96,"name":"Tagopia","city":"Saqqez","country":"Iran","email":"dmelato2n@abc.net.au"},
{"id":97,"name":"Babblestorm","city":"Sucre","country":"Peru","email":"wherrema2o@51.la"},
{"id":98,"name":"Yamia","city":"Kilifi","country":"Kenya","email":"cturpey2p@diigo.com"},
{"id":99,"name":"Avaveo","city":"Stockholm","country":"Sweden","email":"adurante2q@youtu.be"},
{"id":100,"name":"Divanoodle","city":"Lanta Timur","country":"Indonesia","email":"dmacscherie2r@princeton.edu"},
{"id":101,"name":"Meembee","city":"Guisijan","country":"Philippines","email":"dizaac2s@bigcartel.com"},
{"id":102,"name":"Gabtype","city":"Ferme-Neuve","country":"Canada","email":"tverdie2t@newyorker.com"},
{"id":103,"name":"Gigaclub","city":"Malilipot","country":"Philippines","email":"pkroger2u@redcross.org"},
{"id":104,"name":"Fivechat","city":"Tartaro","country":"Philippines","email":"psellers2v@gov.uk"},
{"id":105,"name":"Brightdog","city":"Orikum","country":"Albania","email":"akeeri2w@icio.us"},
{"id":106,"name":"Yakidoo","city":"Perivóli","country":"Greece","email":"gmurford2x@pcworld.com"},
{"id":107,"name":"Skibox","city":"Aş Şalw","country":"Yemen","email":"tscogin2y@globo.com"},
{"id":108,"name":"Skajo","city":"Penha Longa","country":"Portugal","email":"isweetsur2z@fc2.com"},
{"id":109,"name":"Fatz","city":"Eenhana","country":"Namibia","email":"clesor30@intel.com"},
{"id":110,"name":"Gabtune","city":"Rahama","country":"Nigeria","email":"odomingues31@nih.gov"},
{"id":111,"name":"Tazz","city":"Huangchen","country":"China","email":"gwickersley32@issuu.com"},
{"id":112,"name":"Skinder","city":"Sungaiduri","country":"Indonesia","email":"qbeedham33@clickbank.net"},
{"id":113,"name":"Skimia","city":"Baochang","country":"China","email":"mgawkes34@smugmug.com"},
{"id":114,"name":"Yakijo","city":"Cimaragas","country":"Indonesia","email":"fcorrea35@usda.gov"},
{"id":115,"name":"Wikizz","city":"Ayia Napa","country":"Cyprus","email":"elyngsted36@wiley.com"},
{"id":116,"name":"Voolia","city":"Ḩammām Damt","country":"Yemen","email":"bfiske37@unblog.fr"},
{"id":117,"name":"Yodoo","city":"Rancapare","country":"Indonesia","email":"lreedshaw38@webmd.com"},
{"id":118,"name":"Devbug","city":"Cunday","country":"Colombia","email":"lfranzettoini39@marriott.com"},
{"id":119,"name":"Browsebug","city":"Borovlyany","country":"Belarus","email":"zrickword3a@fc2.com"},
{"id":120,"name":"Voonder","city":"Fantan","country":"Armenia","email":"ccocker3b@ebay.co.uk"},
{"id":121,"name":"Skinix","city":"Ḩabīl ar Raydah","country":"Yemen","email":"rbodocs3c@epa.gov"},
{"id":122,"name":"Devshare","city":"Xueshan","country":"China","email":"dtindall3d@disqus.com"},
{"id":123,"name":"Fatz","city":"Senduro","country":"Indonesia","email":"kshore3e@youku.com"},
{"id":124,"name":"Skyble","city":"Sankanan","country":"Philippines","email":"klilburn3f@amazon.com"},
{"id":125,"name":"Jamia","city":"Montego Bay","country":"Jamaica","email":"kpatridge3g@go.com"},
{"id":126,"name":"Thoughtbridge","city":"North Perth","country":"Canada","email":"aloudian3h@mlb.com"},
{"id":127,"name":"Oyoyo","city":"La Roche-sur-Yon","country":"France","email":"jhincham3i@geocities.jp"},
{"id":128,"name":"Jetpulse","city":"Boñgalon","country":"Philippines","email":"clowder3j@typepad.com"},
{"id":129,"name":"Feedfish","city":"Jialu","country":"China","email":"bverry3k@bandcamp.com"},
{"id":130,"name":"Thoughtmix","city":"Gainesville","country":"United States","email":"aabyss3l@marriott.com"},
{"id":131,"name":"Oyope","city":"Sapphaya","country":"Thailand","email":"rsleeford3m@nps.gov"},
{"id":132,"name":"Leenti","city":"Ekou","country":"China","email":"eslyde3n@elpais.com"},
{"id":133,"name":"Eadel","city":"Priboj","country":"Serbia","email":"ashawyer3o@ft.com"},
{"id":134,"name":"Fatz","city":"Kagoshima-shi","country":"Japan","email":"hbratton3p@ucoz.ru"},
{"id":135,"name":"Skalith","city":"Timur","country":"Indonesia","email":"mpetford3q@uiuc.edu"},
{"id":136,"name":"Demimbu","city":"Puhja","country":"Estonia","email":"dchatenier3r@theglobeandmail.com"},
{"id":137,"name":"Browsezoom","city":"West Palm Beach","country":"United States","email":"jcorriea3s@chronoengine.com"},
{"id":138,"name":"Wordpedia","city":"Qimantage","country":"China","email":"tkwietak3t@reference.com"},
{"id":139,"name":"Topiclounge","city":"Sułkowice","country":"Poland","email":"bjohantges3u@linkedin.com"},
{"id":140,"name":"Wordtune","city":"Miranda","country":"Colombia","email":"eswinfen3v@tiny.cc"},
{"id":141,"name":"Brightbean","city":"Paradyż","country":"Poland","email":"bspringer3w@instagram.com"},
{"id":142,"name":"Fadeo","city":"Challans","country":"France","email":"mpottberry3x@adobe.com"},
{"id":143,"name":"Realcube","city":"Babakan","country":"Indonesia","email":"bkoppens3y@de.vu"},
{"id":144,"name":"Tagfeed","city":"Balazar","country":"Portugal","email":"ccuddihy3z@linkedin.com"},
{"id":145,"name":"Thoughtstorm","city":"Novoselitsa","country":"Ukraine","email":"bcallington40@dedecms.com"},
{"id":146,"name":"Feedspan","city":"Prince Rupert","country":"Canada","email":"bdeath41@gravatar.com"},
{"id":147,"name":"Edgeclub","city":"Pyhäselkä","country":"Finland","email":"aarnholz42@constantcontact.com"},
{"id":148,"name":"Pixope","city":"Libas","country":"Philippines","email":"lolohan43@seesaa.net"},
{"id":149,"name":"Fivespan","city":"Revda","country":"Russia","email":"pcuss44@oaic.gov.au"},
{"id":150,"name":"Rhyzio","city":"Kristinestad","country":"Finland","email":"nmuckersie45@hugedomains.com"},
{"id":151,"name":"Katz","city":"Pugeran","country":"Indonesia","email":"vpeat46@cloudflare.com"},
{"id":152,"name":"Babbleblab","city":"Soanierana Ivongo","country":"Madagascar","email":"wavrahamoff47@squarespace.com"},
{"id":153,"name":"Quamba","city":"Sar-e Pul","country":"Afghanistan","email":"holesen48@wiley.com"},
{"id":154,"name":"Fivebridge","city":"Hostomice","country":"Czech Republic","email":"safield49@seattletimes.com"},
{"id":155,"name":"Vipe","city":"Sydney","country":"Australia","email":"cdenson4a@cyberchimps.com"},
{"id":156,"name":"Jazzy","city":"Preobrazhenka","country":"Ukraine","email":"wguille4b@tinyurl.com"},
{"id":157,"name":"Skidoo","city":"Ichihara","country":"Japan","email":"smanoelli4c@noaa.gov"},
{"id":158,"name":"Dabtype","city":"Shijia","country":"China","email":"rcasbon4d@liveinternet.ru"},
{"id":159,"name":"Yabox","city":"Shencang","country":"China","email":"jsmooth4e@sun.com"},
{"id":160,"name":"Riffpath","city":"Mpika","country":"Zambia","email":"saberkirder4f@wordpress.org"},
{"id":161,"name":"Dablist","city":"Muroto-misakicho","country":"Japan","email":"dnortheast4g@cbslocal.com"},
{"id":162,"name":"Devcast","city":"Banī Ḩassān","country":"Tunisia","email":"fscrauniage4h@soup.io"},
{"id":163,"name":"Linkbuzz","city":"Shishan","country":"China","email":"agantzman4i@telegraph.co.uk"},
{"id":164,"name":"Browsecat","city":"San Carlos de Bariloche","country":"Argentina","email":"scrangle4j@163.com"},
{"id":165,"name":"Yoveo","city":"Songwon","country":"South Korea","email":"iferrandez4k@t.co"},
{"id":166,"name":"Brainsphere","city":"Štore","country":"Slovenia","email":"cpaydon4l@odnoklassniki.ru"},
{"id":167,"name":"Plajo","city":"Dananyu","country":"China","email":"bribbens4m@clickbank.net"},
{"id":168,"name":"Realfire","city":"Yongping","country":"China","email":"ariggeard4n@mail.ru"},
{"id":169,"name":"Buzzdog","city":"Lékoni","country":"Gabon","email":"rkytter4o@google.com.br"},
{"id":170,"name":"Thoughtblab","city":"Sanyi","country":"China","email":"jgendricke4p@yandex.ru"},
{"id":171,"name":"Realcube","city":"Karditsomagoúla","country":"Greece","email":"rswanborrow4q@fc2.com"},
{"id":172,"name":"Demizz","city":"Sanying","country":"China","email":"chosby4r@omniture.com"},
{"id":173,"name":"Thoughtworks","city":"Bailizhou","country":"China","email":"aflanigan4s@cbsnews.com"},
{"id":174,"name":"Tagchat","city":"Colonia Nicolich","country":"Uruguay","email":"rmullender4t@reddit.com"},
{"id":175,"name":"Minyx","city":"Winnipeg","country":"Canada","email":"tlinn4u@skype.com"},
{"id":176,"name":"Oyope","city":"Talibura","country":"Indonesia","email":"jhaseman4v@hhs.gov"},
{"id":177,"name":"Agimba","city":"Santa Cruz do Bispo","country":"Portugal","email":"ogodman4w@sogou.com"},
{"id":178,"name":"Babbleset","city":"Klang","country":"Malaysia","email":"gtynan4x@printfriendly.com"},
{"id":179,"name":"Yodo","city":"Rakhiv","country":"Ukraine","email":"bnewdick4y@yolasite.com"},
{"id":180,"name":"Rhybox","city":"Paris 01","country":"France","email":"gmehew4z@reverbnation.com"},
{"id":181,"name":"Devpoint","city":"Bangui","country":"Philippines","email":"tyearsley50@imdb.com"},
{"id":182,"name":"Gabvine","city":"Gaogu","country":"China","email":"vpozzo51@jimdo.com"},
{"id":183,"name":"Yadel","city":"Petukhovo","country":"Russia","email":"mdufall52@utexas.edu"},
{"id":184,"name":"Topicstorm","city":"Santa Ana","country":"Venezuela","email":"glepick53@macromedia.com"},
{"id":185,"name":"Feedbug","city":"Curahuasi","country":"Peru","email":"gcallaghan54@angelfire.com"},
{"id":186,"name":"Mita","city":"Seattle","country":"United States","email":"dschutter55@flickr.com"},
{"id":187,"name":"Skyble","city":"Vila Viçosa","country":"Portugal","email":"drowlinson56@dagondesign.com"},
{"id":188,"name":"Quaxo","city":"Saurama","country":"Peru","email":"ameekings57@usda.gov"},
{"id":189,"name":"Skimia","city":"Jesús María","country":"Argentina","email":"socaine58@apple.com"},
{"id":190,"name":"Vidoo","city":"Zhuqi","country":"China","email":"rcastilla59@edublogs.org"},
{"id":191,"name":"Gabtune","city":"Lingtou","country":"China","email":"qmacfayden5a@yellowpages.com"},
{"id":192,"name":"Linktype","city":"Göteborg","country":"Sweden","email":"dskey5b@salon.com"},
{"id":193,"name":"Blognation","city":"Batatais","country":"Brazil","email":"gelcome5c@tinyurl.com"},
{"id":194,"name":"Edgetag","city":"Mulatupo","country":"Panama","email":"ikegley5d@mapquest.com"},
{"id":195,"name":"Fatz","city":"Biny Selo","country":"Azerbaijan","email":"qhalgarth5e@uol.com.br"},
{"id":196,"name":"Brightdog","city":"Saribudolok","country":"Indonesia","email":"skeller5f@hugedomains.com"},
{"id":197,"name":"Devpulse","city":"Gazojak","country":"Turkmenistan","email":"fgirt5g@gnu.org"},
{"id":198,"name":"Quaxo","city":"Montongtebolak","country":"Indonesia","email":"ucredland5h@over-blog.com"},
{"id":199,"name":"Realblab","city":"Caluire-et-Cuire","country":"France","email":"ksquires5i@un.org"},
{"id":200,"name":"Blogtags","city":"Saint-Pierre-des-Corps","country":"France","email":"plowle5j@disqus.com"},
{"id":201,"name":"Divape","city":"Salor","country":"Uzbekistan","email":"onavan5k@icio.us"},
{"id":202,"name":"Realblab","city":"Pikalëvo","country":"Russia","email":"pdavidou5l@studiopress.com"},
{"id":203,"name":"Jabbersphere","city":"Paris 15","country":"France","email":"kfillary5m@yale.edu"},
{"id":204,"name":"Photojam","city":"Shazhenxi","country":"China","email":"njanatka5n@dell.com"},
{"id":205,"name":"Photofeed","city":"Dongbei","country":"China","email":"rcicetti5o@ow.ly"},
{"id":206,"name":"Mymm","city":"Quiling","country":"Philippines","email":"gbody5p@constantcontact.com"},
{"id":207,"name":"Tazzy","city":"Licupis","country":"Peru","email":"mlewton5q@hatena.ne.jp"},
{"id":208,"name":"Eadel","city":"Zapatero","country":"Peru","email":"esantos5r@arizona.edu"},
{"id":209,"name":"Kwideo","city":"Greenwood","country":"Canada","email":"nfranzonetti5s@tmall.com"},
{"id":210,"name":"Quire","city":"Matsubase","country":"Japan","email":"bgreson5t@guardian.co.uk"},
{"id":211,"name":"Zoombeat","city":"Jingmao","country":"China","email":"tdanielian5u@sohu.com"},
{"id":212,"name":"Skippad","city":"Saint John’s","country":"Antigua and Barbuda","email":"rbucktharp5v@who.int"},
{"id":213,"name":"Riffpath","city":"Banjar Lalangpasek","country":"Indonesia","email":"mclements5w@google.cn"},
{"id":214,"name":"JumpXS","city":"Portmore","country":"Jamaica","email":"dmcairt5x@nbcnews.com"},
{"id":215,"name":"Roomm","city":"Wakkanai","country":"Japan","email":"saronovitz5y@independent.co.uk"},
{"id":216,"name":"Trudoo","city":"Wanghu","country":"China","email":"ppilkinton5z@spotify.com"},
{"id":217,"name":"Divape","city":"Lugui","country":"Philippines","email":"rswannack60@globo.com"},
{"id":218,"name":"Brainverse","city":"Quellouno","country":"Peru","email":"cbigglestone61@dell.com"},
{"id":219,"name":"Muxo","city":"Huaraz","country":"Peru","email":"bfairhead62@example.com"},
{"id":220,"name":"Trupe","city":"Gumalang","country":"Philippines","email":"acampany63@prnewswire.com"},
{"id":221,"name":"Aimbo","city":"Wulong","country":"China","email":"atombleson64@columbia.edu"},
{"id":222,"name":"Skinte","city":"Namur","country":"Belgium","email":"pjakovijevic65@ucsd.edu"},
{"id":223,"name":"Devify","city":"Pupiales","country":"Colombia","email":"nchellam66@mac.com"},
{"id":224,"name":"Jabbercube","city":"Yajiang","country":"China","email":"jsteed67@paginegialle.it"},
{"id":225,"name":"Innotype","city":"Évry","country":"France","email":"shayle68@whitehouse.gov"},
{"id":226,"name":"Realcube","city":"Beitan","country":"China","email":"mpauluzzi69@goodreads.com"},
{"id":227,"name":"Aivee","city":"Diriamba","country":"Nicaragua","email":"klawless6a@marketwatch.com"},
{"id":228,"name":"Skipstorm","city":"Qingkenpao","country":"China","email":"gmcalarney6b@oakley.com"},
{"id":229,"name":"Youbridge","city":"Ob’","country":"Russia","email":"ggrundon6c@desdev.cn"},
{"id":230,"name":"Midel","city":"HanHuang","country":"China","email":"jlutz6d@telegraph.co.uk"},
{"id":231,"name":"Demivee","city":"Avranches","country":"France","email":"abednall6e@i2i.jp"},
{"id":232,"name":"Voonder","city":"Nagua","country":"Dominican Republic","email":"swahncke6f@vimeo.com"},
{"id":233,"name":"Skivee","city":"Campo Largo","country":"Argentina","email":"cpierri6g@bizjournals.com"},
{"id":234,"name":"Realbuzz","city":"Rassvet","country":"Russia","email":"dlindstedt6h@cdbaby.com"},
{"id":235,"name":"Devpulse","city":"Heliconia","country":"Colombia","email":"hbissell6i@stanford.edu"},
{"id":236,"name":"Thoughtstorm","city":"Nikol’sk","country":"Russia","email":"gandrichuk6j@forbes.com"},
{"id":237,"name":"Jaxnation","city":"Shabo","country":"Ukraine","email":"kcandey6k@sina.com.cn"},
{"id":238,"name":"Demimbu","city":"Balitai","country":"China","email":"sclubbe6l@foxnews.com"},
{"id":239,"name":"Fivebridge","city":"Tambakmerak","country":"Indonesia","email":"lkohnen6m@furl.net"},
{"id":240,"name":"Avamba","city":"Kayl","country":"Luxembourg","email":"itroth6n@lulu.com"},
{"id":241,"name":"Trupe","city":"Strasbourg","country":"France","email":"gmitchinson6o@japanpost.jp"},
{"id":242,"name":"Skipfire","city":"Pan de Azúcar","country":"Uruguay","email":"rroseby6p@usda.gov"},
{"id":243,"name":"Gevee","city":"Bang Kruai","country":"Thailand","email":"kmalin6q@deviantart.com"},
{"id":244,"name":"Twimm","city":"Ngunguru","country":"New Zealand","email":"kleathers6r@ow.ly"},
{"id":245,"name":"Viva","city":"Lingtou","country":"China","email":"abauman6s@cnn.com"},
{"id":246,"name":"Quimba","city":"Marechal Deodoro","country":"Brazil","email":"groderighi6t@fema.gov"},
{"id":247,"name":"Bubblemix","city":"Göteborg","country":"Sweden","email":"nrodolf6u@alexa.com"},
{"id":248,"name":"Topicblab","city":"Kakuda","country":"Japan","email":"oswenson6v@rediff.com"},
{"id":249,"name":"Lazz","city":"Plyussa","country":"Russia","email":"sshearsby6w@amazon.com"},
{"id":250,"name":"Skimia","city":"Dobratice","country":"Czech Republic","email":"keilhertsen6x@topsy.com"}]
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

	getAll({id, name, city, country, email}).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
},{"./api/company.js":1}]},{},[3]);
