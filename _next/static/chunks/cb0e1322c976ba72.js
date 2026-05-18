(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,766715,e=>{"use strict";var t,r="user-agent",n="function",o="object",i="string",a="undefined",s="browser",l="device",h="engine",d="result",p="name",c="type",w="vendor",g="version",f="architecture",u="major",x="model",v="console",m="mobile",C="tablet",k="smarttv",b="wearable",y="embedded",_="inapp",$="brands",M="formFactors",B="fullVersionList",L="platform",A="platformVersion",H="bitness",S="sec-ch-ua",V=S+"-full-version-list",E=S+"-arch",F=S+"-"+H,Z=S+"-form-factors",G=S+"-"+m,I=S+"-"+x,j=S+"-"+L,T=j+"-version",W=[$,B,m,x,L,A,f,M,H],O="Amazon",D="Apple",U="ASUS",R="BlackBerry",P="Google",z="Huawei",N="Lenovo",q="Honor",Q="Microsoft",K="Motorola",X="Nvidia",Y="OnePlus",J="OPPO",ee="Samsung",et="Sharp",er="Sony",en="Xiaomi",eo="Zebra",ei="Chrome",ea="Chromium",es="Chromecast",el="Edge",eh="Firefox",ed="Opera",ep="Facebook",ec="Sogou",ew="Mobile ",eg=" Browser",ef="Windows",eu=typeof window!==a&&window.navigator?window.navigator:void 0,ex=eu&&eu.userAgentData?eu.userAgentData:void 0,ev=function(e,t){var r={},n=t;if(!ek(t))for(var o in n={},t)for(var i in t[o])n[i]=t[o][i].concat(n[i]?n[i]:[]);for(var a in e)r[a]=n[a]&&n[a].length%2==0?n[a].concat(e[a]):e[a];return r},em=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},eC=function(e,t){if(typeof e===o&&e.length>0){for(var r in e)if(e_(t)==e_(e[r]))return!0;return!1}return!!eb(e)&&e_(t)==e_(e)},ek=function(e,t){for(var r in e)return/^(browser|cpu|device|engine|os)$/.test(r)||!!t&&ek(e[r])},eb=function(e){return typeof e===i},ey=function(e){if(e){for(var t=[],r=eB(/\\?\"/g,e).split(","),n=0;n<r.length;n++)if(r[n].indexOf(";")>-1){var o=eA(r[n]).split(";v=");t[n]={brand:o[0],version:o[1]}}else t[n]=eA(r[n]);return t}},e_=function(e){return eb(e)?e.toLowerCase():e},e$=function(e){return eb(e)?eB(/[^\d\.]/g,e).split(".")[0]:void 0},eM=function(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r==o&&2==r.length?this[r[0]]=r[1]:this[r]=void 0}return this},eB=function(e,t){return eb(t)?t.replace(e,""):t},eL=function(e){return eB(/\\?\"/g,e)},eA=function(e,t){return e=eB(/^\s\s*/,String(e)),typeof t===a?e:e.substring(0,t)},eH=function(e,t){if(e&&t)for(var r,i,a,s,l,h,d=0;d<t.length&&!l;){var p=t[d],c=t[d+1];for(r=i=0;r<p.length&&!l&&p[r];)if(l=p[r++].exec(e))for(a=0;a<c.length;a++)h=l[++i],typeof(s=c[a])===o&&s.length>0?2===s.length?typeof s[1]==n?this[s[0]]=s[1].call(this,h):this[s[0]]=s[1]:s.length>=3&&(typeof s[1]!==n||s[1].exec&&s[1].test?3==s.length?this[s[0]]=h?h.replace(s[1],s[2]):void 0:4==s.length?this[s[0]]=h?s[3].call(this,h.replace(s[1],s[2])):void 0:s.length>4&&(this[s[0]]=h?s[3].apply(this,[h.replace(s[1],s[2])].concat(s.slice(4))):void 0):s.length>3?this[s[0]]=h?s[1].apply(this,s.slice(2)):void 0:this[s[0]]=h?s[1].call(this,h,s[2]):void 0):this[s]=h||void 0;d+=2}},eS=function(e,t){for(var r in t)if(typeof t[r]===o&&t[r].length>0){for(var n=0;n<t[r].length;n++)if(eC(t[r][n],e))return"?"===r?void 0:r}else if(eC(t[r],e))return"?"===r?void 0:r;return t.hasOwnProperty("*")?t["*"]:e},eV={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},eE={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},eF={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},eZ={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[g,[p,ew+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[g,[p,el+" WebView"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[g,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,g],[/opios[\/ ]+([\w\.]+)/i],[g,[p,ed+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[g,[p,ed+" GX"]],[/\bopr\/([\w\.]+)/i],[g,[p,ed]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[g,[p,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[g,[p,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,/(brave)(?: chrome)?\/([\d\.]+)/i,/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,/(qwant)(?:ios|mobile)\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[p,g],[/quark(?:pc)?\/([-\w\.]+)/i],[g,[p,"Quark"]],[/\bddg\/([\w\.]+)/i],[g,[p,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[g,[p,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[g,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[g,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[g,[p,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[g,[p,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[g,[p,"Smart "+N+eg]],[/(av(?:ast|g|ira))\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure"+eg],g],[/norton\/([\w\.]+)/i],[g,[p,"Norton Private"+eg]],[/\bfocus\/([\w\.]+)/i],[g,[p,eh+" Focus"]],[/ mms\/([\w\.]+)$/i],[g,[p,ed+" Neon"]],[/ opt\/([\w\.]+)$/i],[g,[p,ed+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[g,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[g,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[g,[p,ed+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[g,[p,"MIUI"+eg]],[/fxios\/([\w\.-]+)/i],[g,[p,ew+eh]],[/\bqihoobrowser\/?([\w\.]*)/i],[g,[p,"360"]],[/\b(qq)\/([\w\.]+)/i],[[p,/(.+)/,"$1Browser"],g],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1"+eg],g],[/samsungbrowser\/([\w\.]+)/i],[g,[p,ee+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[g,[p,ec+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[p,ec+" Mobile"],g],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[p,g],[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],[p],[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],[g,p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,ep],g,[c,_]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(bing)(?:web|sapphire)\/([\w\.]+)/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[p,g,[c,_]],[/\bgsa\/([\w\.]+) .*safari\//i],[g,[p,"GSA"],[c,_]],[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],[g,[p,"TikTok"],[c,_]],[/\[(linkedin)app\]/i],[p,[c,_]],[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],[[p,/(.+)/,"Zalo"],g,[c,_]],[/(chromium)[\/ ]([-\w\.]+)/i],[p,g],[/ome-(lighthouse)$/i],[p,[c,"fetcher"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[g,[p,ei+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[g,[p,el+" WebView2"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,ei+" WebView"],g],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[g,[p,"Android"+eg]],[/chrome\/([\w\.]+) mobile/i],[g,[p,ew+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,g],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[g,[p,ew+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[p,ew+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[g,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[g,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[p,g],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[p,ew+eh],g],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],g],[/(wolvic|librewolf)\/([\w\.]+)/i],[p,g],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[g,[p,eh+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[p,[g,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[p,[g,/[^\d\.]+./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[f,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[f,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[f,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[f,"arm"]],[/ sun4\w[;\)]/i],[[f,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,/((ppc|powerpc)(64)?)( mac|;|\))/i,/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],[[f,/ower/,"",e_]],[/mc680.0/i],[[f,"68k"]],[/winnt.+\[axp/i],[[f,"alpha"]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[x,[w,ee],[c,C]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[x,[w,ee],[c,m]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],[x,[w,D],[c,m]],[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,/\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],[x,[w,D],[c,C]],[/(macintosh);/i],[x,[w,D]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[x,[w,et],[c,m]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[x,[w,q],[c,C]],[/honor([-\w ]+)[;\)]/i],[x,[w,q],[c,m]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[x,[w,z],[c,C]],[/(?:huawei) ?([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],[x,[w,z],[c,m]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[x,/_/g," "],[w,en],[c,C]],[/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[x,/_/g," "],[w,en],[c,m]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[x,[w,Y],[c,m]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[x,[w,J],[c,m]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[x,[w,eS,{OnePlus:["203","304","403","404","413","415"],"*":J}],[c,C]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[x,[w,"BLU"],[c,m]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[x,[w,"Vivo"],[c,m]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[x,[w,"Realme"],[c,m]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[x,[w,N],[c,C]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[x,[w,N],[c,m]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[x,[w,K],[c,m]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[x,[w,K],[c,C]],[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[x,[w,"LG"],[c,C]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[x,[w,"LG"],[c,m]],[/(nokia) (t[12][01])/i],[w,x,[c,C]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],[[x,/_/g," "],[c,m],[w,"Nokia"]],[/(pixel (c|tablet))\b/i],[x,[w,P],[c,C]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[x,[w,P],[c,m]],[/(google) (pixelbook( go)?)/i],[w,x],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[x,[w,er],[c,m]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[x,"Xperia Tablet"],[w,er],[c,C]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[x,[w,O],[c,C]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[x,/(.+)/g,"Fire Phone $1"],[w,O],[c,m]],[/(playbook);[-\w\),; ]+(rim)/i],[x,w,[c,C]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/(?:blackberry|\(bb10;) (\w+)/i],[x,[w,R],[c,m]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[x,[w,U],[c,C]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[x,[w,U],[c,m]],[/(nexus 9)/i],[x,[w,"HTC"],[c,C]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[w,[x,/_/g," "],[c,m]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[x,[w,"TCL"],[c,C]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[x,[w,"TCL"],[c,m]],[/(itel) ((\w+))/i],[[w,e_],x,[c,eS,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[x,[w,"Acer"],[c,C]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[x,[w,"Meizu"],[c,m]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[x,[w,"Ulefone"],[c,m]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[x,[w,"Energizer"],[c,m]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[x,[w,"Cat"],[c,m]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[x,[w,"Smartfren"],[c,m]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[x,[w,"Nothing"],[c,m]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[x,[w,"Archos"],[c,C]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[x,[w,"Archos"],[c,m]],[/; (n159v)/i],[x,[w,"HMD"],[c,m]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[w,x,[c,C]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i,/(hisense) ([ehv][\w ]+)\)/i,/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],[w,x,[c,m]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[w,x,[c,C]],[/(surface duo)/i],[x,[w,Q],[c,C]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[x,[w,"Fairphone"],[c,m]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[x,[w,X],[c,C]],[/(sprint) (\w+)/i],[w,x,[c,m]],[/(kin\.[onetw]{3})/i],[[x,/\./g," "],[w,Q],[c,m]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[x,[w,eo],[c,C]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[x,[w,eo],[c,m]],[/(philips)[\w ]+tv/i,/smart-tv.+(samsung)/i],[w,[c,k]],[/hbbtv.+maple;(\d+)/i],[[x,/^/,"SmartTV"],[w,ee],[c,k]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[w,x,[c,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,"LG"],[c,k]],[/(apple) ?tv/i],[w,[x,D+" TV"],[c,k]],[/crkey.*devicetype\/chromecast/i],[[x,es+" Third Generation"],[w,P],[c,k]],[/crkey.*devicetype\/([^/]*)/i],[[x,/^/,"Chromecast "],[w,P],[c,k]],[/fuchsia.*crkey/i],[[x,es+" Nest Hub"],[w,P],[c,k]],[/crkey/i],[[x,es],[w,P],[c,k]],[/(portaltv)/i],[x,[w,ep],[c,k]],[/droid.+aft(\w+)( bui|\))/i],[x,[w,O],[c,k]],[/(shield \w+ tv)/i],[x,[w,X],[c,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[x,[w,et],[c,k]],[/(bravia[\w ]+)( bui|\))/i],[x,[w,er],[c,k]],[/(mi(tv|box)-?\w+) bui/i],[x,[w,en],[c,k]],[/Hbbtv.*(technisat) (.*);/i],[w,x,[c,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[w,/.+\/(\w+)/,"$1",eS,{LG:"lge"}],[x,eA],[c,k]],[/(playstation \w+)/i],[x,[w,er],[c,v]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[x,[w,Q],[c,v]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i,/(valve).+(steam deck)/i,/droid.+; ((shield|rgcube|gr0006))( bui|\))/i],[[w,eS,{Nvidia:"Shield",Anbernic:"RGCUBE",Logitech:"GR0006"}],x,[c,v]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[x,[w,ee],[c,b]],[/((pebble))app/i,/(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[w,x,[c,b]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[x,[w,J],[c,b]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[x,[w,D],[c,b]],[/(opwwe\d{3})/i],[x,[w,Y],[c,b]],[/(moto 360)/i],[x,[w,K],[c,b]],[/(smartwatch 3)/i],[x,[w,er],[c,b]],[/(g watch r)/i],[x,[w,"LG"],[c,b]],[/droid.+; (wt63?0{2,3})\)/i],[x,[w,eo],[c,b]],[/droid.+; (glass) \d/i],[x,[w,P],[c,"xr"]],[/(pico) ([\w ]+) os\d/i],[w,x,[c,"xr"]],[/(quest( \d| pro)?s?).+vr/i],[x,[w,ep],[c,"xr"]],[/mobile vr; rv.+firefox/i],[[c,"xr"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[c,y]],[/(aeobc)\b/i],[x,[w,O],[c,y]],[/(homepod).+mac os/i],[x,[w,D],[c,y]],[/windows iot/i],[[c,y]],[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],[x,[c,k]],[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],[[c,k]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],[x,[c,eS,{mobile:"Mobile",xr:"VR","*":C}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[c,C]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[c,m]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[x,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[g,[p,el+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[p,g],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[g,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[p,g],[/ladybird\//i],[[p,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[g,p]],os:[[/(windows nt) (6\.[23]); arm/i],[[p,/N/,"R"],[g,eS,eV]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[p,g],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[g,/(;|\))/g,"",eS,eV],[p,ef]],[/(windows ce)\/?([\d\.]*)/i],[p,g],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,/\btvos ?([\w\.]+)/i,/cfnetwork\/.+darwin/i],[[g,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[p,"macOS"],[g,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[g,[p,es+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[g,[p,es+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[g,[p,es+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[g,[p,es+" Linux"]],[/crkey\/([\d\.]+)/i],[g,[p,es]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[g,p],[/(ubuntu) ([\w\.]+) like android/i],[[p,/(.+)/,"$1 Touch"],g],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[p,g],[/\(bb(10);/i],[g,[p,R]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[g,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],[g,[p,eh+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[g,[p,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[g,eS,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[p,"webOS"]],[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],[g,[p,"watchOS"]],[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],[g,[p,"Chrome OS"]],[/kepler ([\w\.]+); (aft|aeo)/i],[g,[p,"Vega OS"]],[/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[p,g],[/(sunos) ?([\d\.]*)/i],[[p,"Solaris"],g],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[p,g]]},eG=(t={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},eM.call(t.init,[[s,[p,g,u,c]],["cpu",[f]],[l,[c,x,w]],[h,[p,g]],["os",[p,g]]]),eM.call(t.isIgnore,[[s,[g,u]],[h,[g]],["os",[g]]]),eM.call(t.isIgnoreRgx,[[s,/ ?browser$/i],["os",/ ?os$/i]]),eM.call(t.toString,[[s,[p,g]],["cpu",[f]],[l,[w,x]],[h,[p,g]],["os",[p,g]]]),t),eI=function(e,t){var r=eG.init[t],n=eG.isIgnore[t]||0,o=eG.isIgnoreRgx[t]||0,i=eG.toString[t]||0;function s(){eM.call(this,r)}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return ex?ex.getHighEntropyValues(W).then(function(t){return e.setCH(new ej(t,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},t!=d&&(s.prototype.is=function(e){var t=!1;for(var r in this)if(this.hasOwnProperty(r)&&!eC(n,r)&&e_(o?eB(o,this[r]):this[r])==e_(o?eB(o,e):e)){if(t=!0,e!=a)break}else if(e==a&&t){t=!t;break}return t},s.prototype.toString=function(){var e="";for(var t in i)typeof this[i[t]]!==a&&(e+=(e?" ":"")+this[i[t]]);return e||a}),s.prototype.then=function(e){var t=this,r=function(){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])};r.prototype={is:s.prototype.is,toString:s.prototype.toString,withClientHints:s.prototype.withClientHints,withFeatureCheck:s.prototype.withFeatureCheck};var n=new r;return e(n),n},new s};function ej(e,t){if(e=e||{},eM.call(this,W),t)eM.call(this,[[$,ey(e[S])],[B,ey(e[V])],[m,/\?1/.test(e[G])],[x,eL(e[I])],[L,eL(e[j])],[A,eL(e[T])],[f,eL(e[E])],[M,ey(e[Z])],[H,eL(e[F])]]);else for(var r in e)this.hasOwnProperty(r)&&typeof e[r]!==a&&(this[r]=e[r])}function eT(e,t,r,n){return eM.call(this,[["itemType",e],["ua",t],["uaCH",n],["rgxMap",r],["data",eI(this,e)]]),this}function eW(e,t,a){if(typeof e===o?(ek(e,!0)?(typeof t===o&&(a=t),t=e):(a=e,t=void 0),e=void 0):typeof e!==i||ek(t,!0)||(a=t,t=void 0),a)if(typeof a.append===n){var p={};a.forEach(function(e,t){p[String(t).toLowerCase()]=e}),a=p}else{var c={};for(var w in a)a.hasOwnProperty(w)&&(c[String(w).toLowerCase()]=a[w]);a=c}if(!(this instanceof eW))return new eW(e,t,a).getResult();var g=typeof e===i?e:a&&a[r]?a[r]:eu&&eu.userAgent?eu.userAgent:"",f=new ej(a,!0),u=t?ev(eZ,t):eZ,x=function(e){return e==d?function(){return new eT(e,g,u,f).set("ua",g).set(s,this.getBrowser()).set("cpu",this.getCPU()).set(l,this.getDevice()).set(h,this.getEngine()).set("os",this.getOS()).get()}:function(){return new eT(e,g,u[e],f).parseUA().get()}};return eM.call(this,[["getBrowser",x(s)],["getCPU",x("cpu")],["getDevice",x(l)],["getEngine",x(h)],["getOS",x("os")],["getResult",x(d)],["getUA",function(){return g}],["setUA",function(e){return eb(e)&&(g=eA(e,500)),this}]]).setUA(g),this}eT.prototype.get=function(e){return e?this.data.hasOwnProperty(e)?this.data[e]:void 0:this.data},eT.prototype.set=function(e,t){return this.data[e]=t,this},eT.prototype.setCH=function(e){return this.uaCH=e,this},eT.prototype.detectFeature=function(){if(eu&&eu.userAgent==this.ua)switch(this.itemType){case s:eu.brave&&typeof eu.brave.isBrave==n&&this.set(p,"Brave");break;case l:!this.get(c)&&ex&&ex[m]&&this.set(c,m),"Macintosh"==this.get(x)&&eu&&typeof eu.standalone!==a&&eu.maxTouchPoints&&eu.maxTouchPoints>2&&this.set(x,"iPad").set(c,C);break;case"os":!this.get(p)&&ex&&ex[L]&&this.set(p,ex[L]);break;case d:var e=this.data,t=function(t){return e[t].getItem().detectFeature().get()};this.set(s,t(s)).set("cpu",t("cpu")).set(l,t(l)).set(h,t(h)).set("os",t("os"))}return this},eT.prototype.parseUA=function(){switch(this.itemType!=d&&eH.call(this.data,this.ua,this.rgxMap),this.itemType){case s:this.set(u,e$(this.get(g)));break;case"os":if("iOS"==this.get(p)&&"18.6"==this.get(g)){var e=/\) Version\/([\d\.]+)/.exec(this.ua);e&&parseInt(e[1].substring(0,2),10)>=26&&this.set(g,e[1])}}return this},eT.prototype.parseCH=function(){var e=this.uaCH,t=this.rgxMap;switch(this.itemType){case s:case h:var r,n=e[B]||e[$];if(n)for(var o=0;o<n.length;o++){var i=n[o].brand||n[o],a=n[o].version;this.itemType==s&&!/not.a.brand/i.test(i)&&(!r||/Chrom/.test(r)&&i!=ea||r==el&&/WebView2/.test(i))&&(i=eS(i,eF),(r=this.get(p))&&!/Chrom/.test(r)&&/Chrom/.test(i)||this.set(p,i).set(g,a).set(u,e$(a)),r=i),this.itemType==h&&i==ea&&this.set(g,a)}break;case"cpu":var v=e[f];v&&(v&&"64"==e[H]&&(v+="64"),eH.call(this.data,v+";",t));break;case l:if(e[m]&&this.set(c,m),e[x]&&(this.set(x,e[x]),!this.get(c)||!this.get(w))){var C,k={};eH.call(k,"droid 9; "+e[x]+")",t),!this.get(c)&&k.type&&this.set(c,k.type),!this.get(w)&&k.vendor&&this.set(w,k.vendor)}if(e[M]){if("string"!=typeof e[M])for(var b=0;!C&&b<e[M].length;)C=eS(e[M][b++],eE);else C=eS(e[M],eE);this.set(c,C)}break;case"os":var y=e[L];if(y){var _=e[A];y==ef&&(_=parseInt(e$(_),10)>=13?"11":"10"),this.set(p,y).set(g,_)}this.get(p)==ef&&"Xbox"==e[x]&&this.set(p,"Xbox").set(g,void 0);break;case d:var S=this.data,V=function(t){return S[t].getItem().setCH(e).parseCH().get()};this.set(s,V(s)).set("cpu",V("cpu")).set(l,V(l)).set(h,V(h)).set("os",V("os"))}return this},eW.VERSION="2.0.9",eW.BROWSER=em([p,g,u,c]),eW.CPU=em([f]),eW.DEVICE=em([x,w,c,v,m,k,C,b,y]),eW.ENGINE=eW.OS=em([p,g]),e.s(["UAParser",()=>eW])},668562,e=>{"use strict";var t,r,n,o,i,a;let s=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,l=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,h=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,d=/^(@+)?(\+|#+)?[rs]?$/g,p=/(\*)(0+)|(#+)(0+)|(0+)/g,c=/^(0+)$/;function w(e){let t={};return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(d,function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""}),t}function g(e){switch(e){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function f(e){let t=g(e);return t||{}}let u=((t={})[t.literal=0]="literal",t[t.argument=1]="argument",t[t.number=2]="number",t[t.date=3]="date",t[t.time=4]="time",t[t.select=5]="select",t[t.plural=6]="plural",t[t.pound=7]="pound",t[t.tag=8]="tag",t),x=((r={})[r.number=0]="number",r[r.dateTime=1]="dateTime",r);function v(e){return e.type===u.literal}function m(e){return e.type===u.number}function C(e){return e.type===u.date}function k(e){return e.type===u.time}function b(e){return e.type===u.select}function y(e){return e.type===u.plural}function _(e){return e.type===u.tag}function $(e){return!!(e&&"object"==typeof e&&e.type===x.number)}function M(e){return!!(e&&"object"==typeof e&&e.type===x.dateTime)}let B=((n={})[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG",n),L=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,A={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GS:["H","h","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ku-SY":["H","hB"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]},H=RegExp(`^${L.source}*`),S=RegExp(`${L.source}*$`);function V(e,t){return{start:e,end:t}}let E=!!Object.fromEntries,F=!!String.prototype.trimStart,Z=!!String.prototype.trimEnd,G=E?Object.fromEntries:function(e){let t={};for(let[r,n]of e)t[r]=n;return t},I=F?function(e){return e.trimStart()}:function(e){return e.replace(H,"")},j=Z?function(e){return e.trimEnd()}:function(e){return e.replace(S,"")},T=RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");class W{message;position;locale;ignoreTag;requiresOtherClause;shouldParseSkeletons;constructor(e,t={}){this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}parse(){if(0!==this.offset())throw Error("parser can only be used once");return this.parseMessage(0,"",!1)}parseMessage(e,t,r){let n=[];for(;!this.isEOF();){let o=this.char();if(123===o){let t=this.parseArgument(e,r);if(t.err)return t;n.push(t.val)}else if(125===o&&e>0)break;else if(35===o&&("plural"===t||"selectordinal"===t)){let e=this.clonePosition();this.bump(),n.push({type:u.pound,location:V(e,this.clonePosition())})}else if(60!==o||this.ignoreTag||47!==this.peek())if(60===o&&!this.ignoreTag&&O(this.peek()||0)){let r=this.parseTag(e,t);if(r.err)return r;n.push(r.val)}else{let r=this.parseLiteral(e,t);if(r.err)return r;n.push(r.val)}else if(!r)return this.error(B.UNMATCHED_CLOSING_TAG,V(this.clonePosition(),this.clonePosition()));else break}return{val:n,err:null}}parseTag(e,t){let r=this.clonePosition();this.bump();let n=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:u.literal,value:`<${n}/>`,location:V(r,this.clonePosition())},err:null};if(!this.bumpIf(">"))return this.error(B.INVALID_TAG,V(r,this.clonePosition()));{let o=this.parseMessage(e+1,t,!0);if(o.err)return o;let i=o.val,a=this.clonePosition();if(!this.bumpIf("</"))return this.error(B.UNCLOSED_TAG,V(r,this.clonePosition()));{if(this.isEOF()||!O(this.char()))return this.error(B.INVALID_TAG,V(a,this.clonePosition()));let e=this.clonePosition();return n!==this.parseTagName()?this.error(B.UNMATCHED_CLOSING_TAG,V(e,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">"))?{val:{type:u.tag,value:n,children:i,location:V(r,this.clonePosition())},err:null}:this.error(B.INVALID_TAG,V(a,this.clonePosition()))}}}parseTagName(){var e;let t=this.offset();for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump();return this.message.slice(t,this.offset())}parseLiteral(e,t){let r=this.clonePosition(),n="";for(;;){let r=this.tryParseQuote(t);if(r){n+=r;continue}let o=this.tryParseUnquoted(e,t);if(o){n+=o;continue}let i=this.tryParseLeftAngleBracket();if(i){n+=i;continue}break}let o=V(r,this.clonePosition());return{val:{type:u.literal,value:n,location:o},err:null}}tryParseLeftAngleBracket(){var e;return this.isEOF()||60!==this.char()||!this.ignoreTag&&(O(e=this.peek()||0)||47===e)?null:(this.bump(),"<")}tryParseQuote(e){if(this.isEOF()||39!==this.char())return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if("plural"===e||"selectordinal"===e)break;return null;default:return null}this.bump();let t=[this.char()];for(this.bump();!this.isEOF();){let e=this.char();if(39===e)if(39===this.peek())t.push(39),this.bump();else{this.bump();break}else t.push(e);this.bump()}return String.fromCodePoint(...t)}tryParseUnquoted(e,t){if(this.isEOF())return null;let r=this.char();return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),String.fromCodePoint(r))}parseArgument(e,t){let r=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE,V(r,this.clonePosition()));if(125===this.char())return this.bump(),this.error(B.EMPTY_ARGUMENT,V(r,this.clonePosition()));let n=this.parseIdentifierIfPossible().value;if(!n)return this.error(B.MALFORMED_ARGUMENT,V(r,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE,V(r,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:u.argument,value:n,location:V(r,this.clonePosition())},err:null};case 44:if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE,V(r,this.clonePosition()));return this.parseArgumentOptions(e,t,n,r);default:return this.error(B.MALFORMED_ARGUMENT,V(r,this.clonePosition()))}}parseIdentifierIfPossible(){var e;let t=this.clonePosition(),r=this.offset(),n=(e=this.message,T.lastIndex=r,T.exec(e)[1]??""),o=r+n.length;return this.bumpTo(o),{value:n,location:V(t,this.clonePosition())}}parseArgumentOptions(e,t,r,n){let o=this.clonePosition(),i=this.parseIdentifierIfPossible().value,a=this.clonePosition();switch(i){case"":return this.error(B.EXPECT_ARGUMENT_TYPE,V(o,a));case"number":case"date":case"time":{this.bumpSpace();let e=null;if(this.bumpIf(",")){this.bumpSpace();let t=this.clonePosition(),r=this.parseSimpleArgStyleIfPossible();if(r.err)return r;let n=j(r.val);if(0===n.length)return this.error(B.EXPECT_ARGUMENT_STYLE,V(this.clonePosition(),this.clonePosition()));e={style:n,styleLocation:V(t,this.clonePosition())}}let t=this.tryParseArgumentClose(n);if(t.err)return t;let o=V(n,this.clonePosition());if(e&&e.style.startsWith("::")){let t=I(e.style.slice(2));if("number"===i){let n=this.parseNumberSkeletonFromString(t,e.styleLocation);if(n.err)return n;return{val:{type:u.number,value:r,location:o,style:n.val},err:null}}{let n;if(0===t.length)return this.error(B.EXPECT_DATE_TIME_SKELETON,o);let a=t;this.locale&&(a=function(e,t){let r="";for(let n=0;n<e.length;n++){let o=e.charAt(n);if("j"===o){let i=0;for(;n+1<e.length&&e.charAt(n+1)===o;)i++,n++;let a=1+(1&i),s=i<2?1:3+(i>>1),l=function(e){let t,r=e.hourCycle;if(void 0===r&&e.hourCycles&&e.hourCycles.length&&(r=e.hourCycles[0]),r)switch(r){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw Error("Invalid hourCycle")}let n=e.language;return"root"!==n&&(t=e.maximize().region),(A[t||""]||A[n||""]||A[`${n}-001`]||A["001"])[0]}(t);for(("H"==l||"k"==l)&&(s=0);s-- >0;)r+="a";for(;a-- >0;)r=l+r}else"J"===o?r+="H":r+=o}return r}(t,this.locale));let l={type:x.dateTime,pattern:a,location:e.styleLocation,parsedOptions:this.shouldParseSkeletons?(n={},a.replace(s,e=>{let t=e.length;switch(e[0]){case"G":n.era=4===t?"long":5===t?"narrow":"short";break;case"y":n.year=2===t?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":n.month=["numeric","2-digit","short","long","narrow"][t-1];break;case"w":case"W":throw RangeError("`w/W` (week) patterns are not supported");case"d":n.day=["numeric","2-digit"][t-1];break;case"D":case"F":case"g":throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":n.weekday=4===t?"long":5===t?"narrow":"short";break;case"e":if(t<4)throw RangeError("`e..eee` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"c":if(t<4)throw RangeError("`c..ccc` (weekday) patterns are not supported");n.weekday=["short","long","narrow","short"][t-4];break;case"a":n.hour12=!0;break;case"b":case"B":throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":n.hourCycle="h12",n.hour=["numeric","2-digit"][t-1];break;case"H":n.hourCycle="h23",n.hour=["numeric","2-digit"][t-1];break;case"K":n.hourCycle="h11",n.hour=["numeric","2-digit"][t-1];break;case"k":n.hourCycle="h24",n.hour=["numeric","2-digit"][t-1];break;case"j":case"J":case"C":throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":n.minute=["numeric","2-digit"][t-1];break;case"s":n.second=["numeric","2-digit"][t-1];break;case"S":case"A":throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":n.timeZoneName=t<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),n):{}};return{val:{type:"date"===i?u.date:u.time,value:r,location:o,style:l},err:null}}}return{val:{type:"number"===i?u.number:"date"===i?u.date:u.time,value:r,location:o,style:e?.style??null},err:null}}case"plural":case"selectordinal":case"select":{let o=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(B.EXPECT_SELECT_ARGUMENT_OPTIONS,V(o,{...o}));this.bumpSpace();let a=this.parseIdentifierIfPossible(),s=0;if("select"!==i&&"offset"===a.value){if(!this.bumpIf(":"))return this.error(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,V(this.clonePosition(),this.clonePosition()));this.bumpSpace();let e=this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,B.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(e.err)return e;this.bumpSpace(),a=this.parseIdentifierIfPossible(),s=e.val}let l=this.tryParsePluralOrSelectOptions(e,i,t,a);if(l.err)return l;let h=this.tryParseArgumentClose(n);if(h.err)return h;let d=V(n,this.clonePosition());if("select"===i)return{val:{type:u.select,value:r,options:G(l.val),location:d},err:null};return{val:{type:u.plural,value:r,options:G(l.val),offset:s,pluralType:"plural"===i?"cardinal":"ordinal",location:d},err:null}}default:return this.error(B.INVALID_ARGUMENT_TYPE,V(o,a))}}tryParseArgumentClose(e){return this.isEOF()||125!==this.char()?this.error(B.EXPECT_ARGUMENT_CLOSING_BRACE,V(e,this.clonePosition())):(this.bump(),{val:!0,err:null})}parseSimpleArgStyleIfPossible(){let e=0,t=this.clonePosition();for(;!this.isEOF();)switch(this.char()){case 39:{this.bump();let e=this.clonePosition();if(!this.bumpUntil("'"))return this.error(B.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,V(e,this.clonePosition()));this.bump();break}case 123:e+=1,this.bump();break;case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null};e-=1;break;default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}}parseNumberSkeletonFromString(e,t){let r=[];try{r=function(e){if(0===e.length)throw Error("Number skeleton cannot be empty");let t=e.split(l).filter(e=>e.length>0),r=[];for(let e of t){let t=e.split("/");if(0===t.length)throw Error("Invalid number skeleton");let[n,...o]=t;for(let e of o)if(0===e.length)throw Error("Invalid number skeleton");r.push({stem:n,options:o})}return r}(e)}catch{return this.error(B.INVALID_NUMBER_SKELETON,t)}return{val:{type:x.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?function(e){let t={};for(let r of e){switch(r.stem){case"percent":case"%":t.style="percent";continue;case"%x100":t.style="percent",t.scale=100;continue;case"currency":t.style="currency",t.currency=r.options[0];continue;case"group-off":case",_":t.useGrouping=!1;continue;case"precision-integer":case".":t.maximumFractionDigits=0;continue;case"measure-unit":case"unit":t.style="unit",t.unit=r.options[0].replace(/^(.*?)-/,"");continue;case"compact-short":case"K":t.notation="compact",t.compactDisplay="short";continue;case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long";continue;case"scientific":t={...t,notation:"scientific",...r.options.reduce((e,t)=>({...e,...f(t)}),{})};continue;case"engineering":t={...t,notation:"engineering",...r.options.reduce((e,t)=>({...e,...f(t)}),{})};continue;case"notation-simple":t.notation="standard";continue;case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow";continue;case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short";continue;case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long";continue;case"unit-width-iso-code":t.currencyDisplay="symbol";continue;case"scale":t.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":t.roundingMode="floor";continue;case"rounding-mode-ceiling":t.roundingMode="ceil";continue;case"rounding-mode-down":t.roundingMode="trunc";continue;case"rounding-mode-up":t.roundingMode="expand";continue;case"rounding-mode-half-even":t.roundingMode="halfEven";continue;case"rounding-mode-half-down":t.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":t.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw RangeError("integer-width stems only accept a single optional option");r.options[0].replace(p,function(e,r,n,o,i,a){if(r)t.minimumIntegerDigits=n.length;else if(o&&i)throw Error("We currently do not support maximum integer digits");else if(a)throw Error("We currently do not support exact integer digits");return""});continue}if(c.test(r.stem)){t.minimumIntegerDigits=r.stem.length;continue}if(h.test(r.stem)){if(r.options.length>1)throw RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(h,function(e,r,n,o,i,a){return"*"===n?t.minimumFractionDigits=r.length:o&&"#"===o[0]?t.maximumFractionDigits=o.length:i&&a?(t.minimumFractionDigits=i.length,t.maximumFractionDigits=i.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""});let e=r.options[0];"w"===e?t={...t,trailingZeroDisplay:"stripIfInteger"}:e&&(t={...t,...w(e)});continue}if(d.test(r.stem)){t={...t,...w(r.stem)};continue}let e=g(r.stem);e&&(t={...t,...e});let n=function(e){let t;if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){let r=e.slice(0,2);if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!c.test(e))throw Error("Malformed concise eng/scientific notation");t.minimumIntegerDigits=e.length}return t}(r.stem);n&&(t={...t,...n})}return t}(r):{}},err:null}}tryParsePluralOrSelectOptions(e,t,r,n){let o=!1,i=[],a=new Set,{value:s,location:l}=n;for(;;){if(0===s.length){let e=this.clonePosition();if("select"!==t&&this.bumpIf("=")){let t=this.tryParseDecimalInteger(B.EXPECT_PLURAL_ARGUMENT_SELECTOR,B.INVALID_PLURAL_ARGUMENT_SELECTOR);if(t.err)return t;l=V(e,this.clonePosition()),s=this.message.slice(e.offset,this.offset())}else break}if(a.has(s))return this.error("select"===t?B.DUPLICATE_SELECT_ARGUMENT_SELECTOR:B.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,l);"other"===s&&(o=!0),this.bumpSpace();let n=this.clonePosition();if(!this.bumpIf("{"))return this.error("select"===t?B.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:B.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,V(this.clonePosition(),this.clonePosition()));let h=this.parseMessage(e+1,t,r);if(h.err)return h;let d=this.tryParseArgumentClose(n);if(d.err)return d;i.push([s,{value:h.val,location:V(n,this.clonePosition())}]),a.add(s),this.bumpSpace(),{value:s,location:l}=this.parseIdentifierIfPossible()}return 0===i.length?this.error("select"===t?B.EXPECT_SELECT_ARGUMENT_SELECTOR:B.EXPECT_PLURAL_ARGUMENT_SELECTOR,V(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!o?this.error(B.MISSING_OTHER_CLAUSE,V(this.clonePosition(),this.clonePosition())):{val:i,err:null}}tryParseDecimalInteger(e,t){let r=1,n=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(r=-1);let o=!1,i=0;for(;!this.isEOF();){let e=this.char();if(e>=48&&e<=57)o=!0,i=10*i+(e-48),this.bump();else break}let a=V(n,this.clonePosition());return o?Number.isSafeInteger(i*=r)?{val:i,err:null}:this.error(t,a):this.error(e,a)}offset(){return this.position.offset}isEOF(){return this.offset()===this.message.length}clonePosition(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}}char(){let e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");let t=this.message.codePointAt(e);if(void 0===t)throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);return t}error(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}}bump(){if(this.isEOF())return;let e=this.char();10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}bumpIf(e){if(this.message.startsWith(e,this.offset())){for(let t=0;t<e.length;t++)this.bump();return!0}return!1}bumpUntil(e){let t=this.offset(),r=this.message.indexOf(e,t);return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)}bumpTo(e){if(this.offset()>e)throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);for(e=Math.min(e,this.message.length);;){let t=this.offset();if(t===e)break;if(t>e)throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);if(this.bump(),this.isEOF())break}}bumpSpace(){for(var e;!this.isEOF()&&((e=this.char())>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e);)this.bump()}peek(){if(this.isEOF())return null;let e=this.char(),t=this.offset();return this.message.charCodeAt(t+(e>=65536?2:1))??null}}function O(e){return e>=97&&e<=122||e>=65&&e<=90}function D(e,t={}){let r=new W(e,t={shouldParseSkeletons:!0,requiresOtherClause:!0,...t}).parse();if(r.err){let e=SyntaxError(B[r.err.kind]);throw e.location=r.err.location,e.originalMessage=r.err.message,e}return t?.captureLocation||function e(t){t.forEach(t=>{if(delete t.location,b(t)||y(t))for(let r in t.options)delete t.options[r].location,e(t.options[r].value);else m(t)&&$(t.style)||(C(t)||k(t))&&M(t.style)?delete t.style.location:_(t)&&e(t.children)})}(r.val),r.val}let U=((o={}).FORMAT_ERROR="FORMAT_ERROR",o.UNSUPPORTED_FORMATTER="UNSUPPORTED_FORMATTER",o.INVALID_CONFIG="INVALID_CONFIG",o.MISSING_DATA="MISSING_DATA",o.MISSING_TRANSLATION="MISSING_TRANSLATION",o);class R extends Error{code;constructor(e,t,r){const n=r?r instanceof Error?r:Error(String(r)):void 0;super(`[@formatjs/intl Error ${e}] ${t}
${n?`
${n.message}
${n.stack}`:""}`),this.code=e,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,R)}}class P extends R{constructor(e,t){super(U.UNSUPPORTED_FORMATTER,e,t)}}class z extends R{constructor(e,t){super(U.INVALID_CONFIG,e,t)}}class N extends R{constructor(e,t){super(U.MISSING_DATA,e,t)}}class q extends R{descriptor;locale;constructor(e,t,r){super(U.FORMAT_ERROR,`${e}
Locale: ${t}
`,r),this.locale=t}}class Q extends q{descriptor;locale;constructor(e,t,r,n){super(`${e}
MessageID: ${r?.id}
Default Message: ${r?.defaultMessage}
Description: ${r?.description}
`,t,n),this.descriptor=r,this.locale=t}}class K extends R{descriptor;constructor(e,t){super(U.MISSING_TRANSLATION,`Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage?`default message (${"string"==typeof e.defaultMessage?e.defaultMessage:e.defaultMessage.map(e=>e.value??JSON.stringify(e)).join()})`:"id"} as fallback.`),this.descriptor=e}}function X(e,t){let r=t&&t.cache?t.cache:er,n=t&&t.serializer?t.serializer:ee;return(t&&t.strategy?t.strategy:function(e,t){var r,n;let o=1===e.length?Y:J;return r=t.cache.create(),n=t.serializer,o.bind(this,e,r,n)})(e,{cache:r,serializer:n})}function Y(e,t,r,n){let o=null==n||"number"==typeof n||"boolean"==typeof n?n:r(n),i=t.get(o);return void 0===i&&(i=e.call(this,n),t.set(o,i)),i}function J(e,t,r){let n=Array.prototype.slice.call(arguments,3),o=r(n),i=t.get(o);return void 0===i&&(i=e.apply(this,n),t.set(o,i)),i}e.i(247167);let ee=function(){return JSON.stringify(arguments)};class et{cache;constructor(){this.cache=Object.create(null)}get(e){return this.cache[e]}set(e,t){this.cache[e]=t}}let er={create:function(){return new et}},en={variadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,J.bind(this,e,r,n)},monadic:function(e,t){var r,n;return r=t.cache.create(),n=t.serializer,Y.bind(this,e,r,n)}},eo=((i={}).MISSING_VALUE="MISSING_VALUE",i.INVALID_VALUE="INVALID_VALUE",i.MISSING_INTL_API="MISSING_INTL_API",i);class ei extends Error{code;originalMessage;constructor(e,t,r){super(e),this.code=t,this.originalMessage=r}toString(){return`[formatjs Error: ${this.code}] ${this.message}`}}class ea extends ei{constructor(e,t,r,n){super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`,eo.INVALID_VALUE,n)}}class es extends ei{constructor(e,t,r){super(`Value for "${e}" must be of type ${t}`,eo.INVALID_VALUE,r)}}class el extends ei{constructor(e,t){super(`The intl string context variable "${e}" was not provided to the string "${t}"`,eo.MISSING_VALUE,t)}}let eh=((a={})[a.literal=0]="literal",a[a.object=1]="object",a);function ed(e){return{create:()=>({get:t=>e[t],set(t,r){e[t]=r}})}}class ep{ast;locales;resolvedLocale;formatters;formats;message;formatterCache={number:{},dateTime:{},pluralRules:{}};constructor(e,t=ep.defaultLocale,r,n){if(this.locales=t,this.resolvedLocale=ep.resolveLocale(t),"string"==typeof e){if(this.message=e,!ep.__parse)throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");const{...t}=n||{};this.ast=ep.__parse(e,{...t,locale:this.resolvedLocale})}else this.ast=e;if(!Array.isArray(this.ast))throw TypeError("A message must be provided as a String or AST.");this.formats=function(e,t){return t?Object.keys(e).reduce((r,n)=>{var o,i;return r[n]=(o=e[n],(i=t[n])?{...o,...i,...Object.keys(o).reduce((e,t)=>(e[t]={...o[t],...i[t]},e),{})}:o),r},{...e}):e}(ep.formats,r),this.formatters=n&&n.formatters||function(e={number:{},dateTime:{},pluralRules:{}}){return{getNumberFormat:X((...e)=>new Intl.NumberFormat(...e),{cache:ed(e.number),strategy:en.variadic}),getDateTimeFormat:X((...e)=>new Intl.DateTimeFormat(...e),{cache:ed(e.dateTime),strategy:en.variadic}),getPluralRules:X((...e)=>new Intl.PluralRules(...e),{cache:ed(e.pluralRules),strategy:en.variadic})}}(this.formatterCache)}format=e=>{let t=this.formatToParts(e);if(1===t.length)return t[0].value;let r=t.reduce((e,t)=>(e.length&&t.type===eh.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e),[]);return r.length<=1?r[0]||"":r};formatToParts=e=>(function e(t,r,n,o,i,a,s){if(1===t.length&&v(t[0]))return[{type:eh.literal,value:t[0].value}];let l=[];for(let h of t){if(v(h)){l.push({type:eh.literal,value:h.value});continue}if(h.type===u.pound){"number"==typeof a&&l.push({type:eh.literal,value:n.getNumberFormat(r).format(a)});continue}let{value:t}=h;if(!(i&&t in i))throw new el(t,s);let d=i[t];if(h.type===u.argument){d&&"string"!=typeof d&&"number"!=typeof d&&"bigint"!=typeof d||(d="string"==typeof d||"number"==typeof d||"bigint"==typeof d?String(d):""),l.push({type:"string"==typeof d?eh.literal:eh.object,value:d});continue}if(C(h)){let e="string"==typeof h.style?o.date[h.style]:M(h.style)?h.style.parsedOptions:void 0;l.push({type:eh.literal,value:n.getDateTimeFormat(r,e).format(d)});continue}if(k(h)){let e="string"==typeof h.style?o.time[h.style]:M(h.style)?h.style.parsedOptions:o.time.medium;l.push({type:eh.literal,value:n.getDateTimeFormat(r,e).format(d)});continue}if(m(h)){let e="string"==typeof h.style?o.number[h.style]:$(h.style)?h.style.parsedOptions:void 0;if(e&&e.scale){let t=e.scale||1;if("bigint"==typeof d){if(!Number.isInteger(t))throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);d*=BigInt(t)}else d*=t}l.push({type:eh.literal,value:n.getNumberFormat(r,e).format(d)});continue}if(_(h)){let{children:t,value:d}=h,p=i[d];if("function"!=typeof p)throw new es(d,"function",s);let c=p(e(t,r,n,o,i,a).map(e=>e.value));Array.isArray(c)||(c=[c]),l.push(...c.map(e=>({type:"string"==typeof e?eh.literal:eh.object,value:e})))}if(b(h)){let t=d,a=(Object.prototype.hasOwnProperty.call(h.options,t)?h.options[t]:void 0)||h.options.other;if(!a)throw new ea(h.value,d,Object.keys(h.options),s);l.push(...e(a.value,r,n,o,i));continue}if(y(h)){let t=`=${d}`,a=Object.prototype.hasOwnProperty.call(h.options,t)?h.options[t]:void 0;if(!a){if(!Intl.PluralRules)throw new ei(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,eo.MISSING_INTL_API,s);let e="bigint"==typeof d?Number(d):d,t=n.getPluralRules(r,{type:h.pluralType}).select(e-(h.offset||0));a=(Object.prototype.hasOwnProperty.call(h.options,t)?h.options[t]:void 0)||h.options.other}if(!a)throw new ea(h.value,d,Object.keys(h.options),s);let p="bigint"==typeof d?Number(d):d;l.push(...e(a.value,r,n,o,i,p-(h.offset||0)));continue}}return l.length<2?l:l.reduce((e,t)=>{let r=e[e.length-1];return r&&r.type===eh.literal&&t.type===eh.literal?r.value+=t.value:e.push(t),e},[])})(this.ast,this.locales,this.formatters,this.formats,e,void 0,this.message);resolvedOptions=()=>({locale:this.resolvedLocale?.toString()||Intl.NumberFormat.supportedLocalesOf(this.locales)[0]});getAst=()=>this.ast;static memoizedDefaultLocale=null;static get defaultLocale(){return ep.memoizedDefaultLocale||(ep.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),ep.memoizedDefaultLocale}static resolveLocale=e=>{if(void 0===Intl.Locale)return;let t=Intl.NumberFormat.supportedLocalesOf(e);return new Intl.Locale(t.length>0?t[0]:"string"==typeof e?e:e[0])};static __parse=D;static formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}}}function ec(e,t,r={}){return t.reduce((t,n)=>(n in e?t[n]=e[n]:n in r&&(t[n]=r[n]),t),{})}let ew={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:e=>{},onWarn:e=>{}};function eg(e){return{create:()=>({get:t=>e[t],set(t,r){e[t]=r}})}}function ef(e,t,r,n){let o,i=e&&e[t];if(i&&(o=i[r]),o)return o;n(new P(`No ${t} format named: ${r}`))}let eu=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function ex({locale:e,formats:t,onError:r,timeZone:n},o,i,a={}){let{format:s}=a,l=ec(a,eu,{...n&&{timeZone:n},...s&&ef(t,o,s,r)});return"time"!==o||l.hour||l.minute||l.second||l.timeStyle||l.dateStyle||(l={...l,hour:"numeric",minute:"numeric"}),i(e,l)}function ev(e,t,r,n={}){let o="string"==typeof r?new Date(r||0):r;try{return ex(e,"date",t,n).format(o)}catch(t){e.onError(new q("Error formatting date.",e.locale,t))}return String(o)}function em(e,t,r,n={}){let o="string"==typeof r?new Date(r||0):r;try{return ex(e,"time",t,n).format(o)}catch(t){e.onError(new q("Error formatting time.",e.locale,t))}return String(o)}function eC(e,t,r,n,o={}){let i="string"==typeof r?new Date(r||0):r,a="string"==typeof n?new Date(n||0):n;try{return ex(e,"dateTimeRange",t,o).formatRange(i,a)}catch(t){e.onError(new q("Error formatting date time range.",e.locale,t))}return String(i)}function ek(e,t,r,n={}){let o="string"==typeof r?new Date(r||0):r;try{return ex(e,"date",t,n).formatToParts(o)}catch(t){e.onError(new q("Error formatting date.",e.locale,t))}return[]}function eb(e,t,r,n={}){let o="string"==typeof r?new Date(r||0):r;try{return ex(e,"time",t,n).formatToParts(o)}catch(t){e.onError(new q("Error formatting time.",e.locale,t))}return[]}let ey=["style","type","fallback","languageDisplay"];function e_({locale:e,onError:t},r,n,o){Intl.DisplayNames||t(new ei(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,eo.MISSING_INTL_API));let i=ec(o,ey);try{return r(e,i).of(n)}catch(r){t(new q("Error formatting display name.",e,r))}}let e$=["type","style"],eM=Date.now();function eB(e,t,r,n={}){let o=eL(e,t,r,n).reduce((e,t)=>{let r=t.value;return"string"!=typeof r?e.push(r):"string"==typeof e[e.length-1]?e[e.length-1]+=r:e.push(r),e},[]);return 1===o.length?o[0]:0===o.length?"":o}function eL({locale:e,onError:t},r,n,o={}){Intl.ListFormat||t(new ei(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,eo.MISSING_INTL_API));let i=ec(o,e$);try{let t={},o=Array.from(n).map((e,r)=>{if("object"==typeof e&&null!==e){let n=`${eM}_${r}_${eM}`;return t[n]=e,n}return String(e)});return r(e,i).formatToParts(o).map(e=>"literal"===e.type?e:{...e,value:t[e.value]||e.value})}catch(r){t(new q("Error formatting list.",e,r))}return n}function eA(e,t){return Object.keys(e).reduce((r,n)=>(r[n]={timeZone:t,...e[n]},r),{})}function eH(e,t){return Object.keys({...e,...t}).reduce((r,n)=>(r[n]={...e[n],...t[n]},r),{})}function eS(e,t){if(!t)return e;let r=ep.formats;return{...r,...e,date:eH(eA(r.date,t),eA(e.date||{},t)),time:eH(eA(r.time,t),eA(e.time||{},t))}}let eV=({locale:e,formats:t,messages:r,defaultLocale:n,defaultFormats:o,fallbackOnEmptyString:i,onError:a,timeZone:s,defaultRichTextElements:l},h,d={id:""},p,c)=>{let{id:w,defaultMessage:g}=d;!function(e,t,r=Error){if(!e)throw new r(t)}(!!w,`[@formatjs/intl] An \`id\` must be provided to format a message. You can either:
1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)
or [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR
2. Configure your \`eslint\` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)
to autofix this issue`);let f=String(w),x=r&&Object.prototype.hasOwnProperty.call(r,f)&&r[f];if(Array.isArray(x)&&1===x.length&&x[0].type===u.literal)return x[0].value;if(p={...l,...p},t=eS(t,s),o=eS(o,s),!x){if(!1===i&&""===x)return x;if((!g||e&&e.toLowerCase()!==n.toLowerCase())&&a(new K(d,e)),g)try{return h.getMessageFormat(g,n,o,c).format(p)}catch(t){return a(new Q(`Error formatting default message for: "${f}", rendering default message verbatim`,e,d,t)),"string"==typeof g?g:f}return f}try{return h.getMessageFormat(x,e,t,{formatters:h,...c}).format(p)}catch(t){a(new Q(`Error formatting message: "${f}", using ${g?"default message":"id"} as fallback.`,e,d,t))}if(g)try{return h.getMessageFormat(g,n,o,c).format(p)}catch(t){a(new Q(`Error formatting the default message for: "${f}", rendering message verbatim`,e,d,t))}return"string"==typeof x?x:"string"==typeof g?g:f},eE=["style","currency","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem","trailingZeroDisplay","roundingPriority","roundingIncrement","roundingMode"];function eF({locale:e,formats:t,onError:r},n,o={}){let{format:i}=o;return n(e,ec(o,eE,i&&ef(t,"number",i,r)||{}))}function eZ(e,t,r,n={}){try{return eF(e,t,n).format(r)}catch(t){e.onError(new q("Error formatting number.",e.locale,t))}return String(r)}function eG(e,t,r,n={}){try{return eF(e,t,n).formatToParts(r)}catch(t){e.onError(new q("Error formatting number.",e.locale,t))}return[]}let eI=["type"];function ej({locale:e,onError:t},r,n,o={}){Intl.PluralRules||t(new ei(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,eo.MISSING_INTL_API));let i=ec(o,eI);try{return r(e,i).select(n)}catch(r){t(new q("Error formatting plural.",e,r))}return"other"}let eT=["numeric","style"];function eW(e,t,r,n,o={}){n||(n="second"),Intl.RelativeTimeFormat||e.onError(new ei(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,eo.MISSING_INTL_API));try{return(function({locale:e,formats:t,onError:r},n,o={}){let{format:i}=o;return n(e,ec(o,eT,!!i&&ef(t,"relative",i,r)||{}))})(e,t,o).format(r,n)}catch(t){e.onError(new q("Error formatting relative time.",e.locale,t))}return String(r)}function eO(e,t){var r;let n=function(e={dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}){let t=Intl.RelativeTimeFormat,r=Intl.ListFormat,n=Intl.DisplayNames,o=X((...e)=>new Intl.DateTimeFormat(...e),{cache:eg(e.dateTime),strategy:en.variadic}),i=X((...e)=>new Intl.NumberFormat(...e),{cache:eg(e.number),strategy:en.variadic}),a=X((...e)=>new Intl.PluralRules(...e),{cache:eg(e.pluralRules),strategy:en.variadic});return{getDateTimeFormat:o,getNumberFormat:i,getMessageFormat:X((e,t,r,n)=>new ep(e,t,r,{formatters:{getNumberFormat:i,getDateTimeFormat:o,getPluralRules:a},...n}),{cache:eg(e.message),strategy:en.variadic}),getRelativeTimeFormat:X((...e)=>new t(...e),{cache:eg(e.relativeTime),strategy:en.variadic}),getPluralRules:a,getListFormat:X((...e)=>new r(...e),{cache:eg(e.list),strategy:en.variadic}),getDisplayNames:X((...e)=>new n(...e),{cache:eg(e.displayNames),strategy:en.variadic})}}(t),o={...ew,...e},{locale:i,defaultLocale:a,onError:s}=o;return i?!Intl.NumberFormat.supportedLocalesOf(i).length&&s?s(new N(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)):!Intl.DateTimeFormat.supportedLocalesOf(i).length&&s&&s(new N(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)):(s&&s(new z(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)),o.locale=o.defaultLocale||"en"),o.onWarn&&o.defaultRichTextElements&&"string"==typeof(r=o.messages||{})[Object.keys(r)[0]]&&o.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.github.io/docs/getting-started/message-distribution`),{...o,formatters:n,formatNumber:eZ.bind(null,o,n.getNumberFormat),formatNumberToParts:eG.bind(null,o,n.getNumberFormat),formatRelativeTime:eW.bind(null,o,n.getRelativeTimeFormat),formatDate:ev.bind(null,o,n.getDateTimeFormat),formatDateToParts:ek.bind(null,o,n.getDateTimeFormat),formatTime:em.bind(null,o,n.getDateTimeFormat),formatDateTimeRange:eC.bind(null,o,n.getDateTimeFormat),formatTimeToParts:eb.bind(null,o,n.getDateTimeFormat),formatPlural:ej.bind(null,o,n.getPluralRules),formatMessage:eV.bind(null,o,n),$t:eV.bind(null,o,n),formatList:eB.bind(null,o,n.getListFormat),formatListToParts:eL.bind(null,o,n.getListFormat),formatDisplayName:e_.bind(null,o,n.getDisplayNames)}}e.s(["createIntl",()=>eO],668562)},736837,e=>{"use strict";var t=e.i(776267),r=e.i(675107),n=e.i(608861),o=e.i(796516),i=e.i(704433),a=e.i(880841),s=e.i(769936),l=e.i(913091);async function h({hash:e,privateKey:n,to:o="object"}){let{r:i,s:h,recovery:d}=t.secp256k1.sign(e.slice(2),n.slice(2),{lowS:!0,extraEntropy:!!(0,a.isHex)(!1,{strict:!1})&&(0,s.hexToBytes)(!1)}),p={r:(0,r.numberToHex)(i,{size:32}),s:(0,r.numberToHex)(h,{size:32}),v:d?28n:27n,yParity:d};return"bytes"===o||"hex"===o?(0,l.serializeSignature)({...p,to:o}):p}var d=e.i(656450);async function p(e){let{chainId:t,nonce:r,privateKey:n,to:o="object"}=e,i=e.contractAddress??e.address,a=await h({hash:(0,d.hashAuthorization)({address:i,chainId:t,nonce:r}),privateKey:n,to:o});return"object"===o?{address:i,chainId:t,nonce:r,...a}:a}var c=e.i(658765);async function w({message:e,privateKey:t}){return await h({hash:(0,c.hashMessage)(e),privateKey:t,to:"hex"})}var g=e.i(831095),f=e.i(766816);async function u(e){let{privateKey:t,transaction:r,serializer:n=f.serializeTransaction}=e,o="eip4844"===r.type?{...r,sidecars:!1}:r,i=await h({hash:(0,g.keccak256)(await n(o)),privateKey:t});return await n(r,i)}var x=e.i(995062);async function v(e){let{privateKey:t,...r}=e;return await h({hash:(0,x.hashTypedData)(r),privateKey:t,to:"hex"})}function m(e,a={}){let{nonceManager:s}=a,l=(0,r.toHex)(t.secp256k1.getPublicKey(e.slice(2),!1));return{...function(e){if("string"==typeof e){if(!(0,o.isAddress)(e,{strict:!1}))throw new n.InvalidAddressError({address:e});return{address:e,type:"json-rpc"}}if(!(0,o.isAddress)(e.address,{strict:!1}))throw new n.InvalidAddressError({address:e.address});return{address:e.address,nonceManager:e.nonceManager,sign:e.sign,signAuthorization:e.signAuthorization,signMessage:e.signMessage,signTransaction:e.signTransaction,signTypedData:e.signTypedData,source:"custom",type:"local"}}({address:(0,i.publicKeyToAddress)(l),nonceManager:s,sign:async({hash:t})=>h({hash:t,privateKey:e,to:"hex"}),signAuthorization:async t=>p({...t,privateKey:e}),signMessage:async({message:t})=>w({message:t,privateKey:e}),signTransaction:async(t,{serializer:r}={})=>u({privateKey:e,transaction:t,serializer:r}),signTypedData:async t=>v({...t,privateKey:e})}),publicKey:l,source:"privateKey"}}e.s(["privateKeyToAccount",()=>m],736837)},812207,374576,542010,e=>{"use strict";let t,r,n,o;e.i(131507),e.i(654479),e.i(108285),e.i(794533),e.s([],812207),e.i(165399),e.i(120119),e.i(56350),e.i(467999),e.i(362318),e.i(995568),e.i(858578),e.i(391998),e.i(242691),e.s([],374576);var i,a=/\s+/g,s=(...e)=>{var t;let r=[],n=e=>{if(!e&&0!==e&&0n!==e)return;if(Array.isArray(e)){for(let t=0,r=e.length;t<r;t++)n(e[t]);return}let t=typeof e;if("string"===t||"number"===t||"bigint"===t){if("number"===t&&e!=e)return;r.push(String(e))}else if("object"===t){let t=Object.keys(e);for(let n=0,o=t.length;n<o;n++){let o=t[n];e[o]&&r.push(o)}}};for(let t=0,r=e.length;t<r;t++){let r=e[t];null!=r&&n(r)}return r.length>0?"string"==typeof(t=r.join(" "))&&t?t.replace(a," ").trim():t:void 0},l=e=>!1===e?"false":!0===e?"true":0===e?"0":e,h=e=>{if(!e||"object"!=typeof e)return!0;for(let t in e)return!1;return!0},d=(e,t)=>{for(let r=0;r<e.length;r++){let n=e[r];Array.isArray(n)?d(n,t):n&&t.push(n)}},p=(...e)=>{let t=[];d(e,t);let r=[];for(let e=0;e<t.length;e++)t[e]&&r.push(t[e]);return r},c=(e,t)=>{let r={};for(let n in e){let o=e[n];if(n in t){let e=t[n];Array.isArray(o)||Array.isArray(e)?r[n]=p(e,o):"object"==typeof o&&"object"==typeof e&&o&&e?r[n]=c(o,e):r[n]=e+" "+o}else r[n]=o}for(let n in t)n in e||(r[n]=t[n]);return r},w={twMerge:!0,twMergeConfig:{}},g=(t=null,r={},n=!1,{get cachedTwMerge(){return t},set cachedTwMerge(value){t=value},get cachedTwMergeConfig(){return r},set cachedTwMergeConfig(value){r=value},get didTwMergeConfigChange(){return n},set didTwMergeConfigChange(value){n=value},reset(){t=null,r={},n=!1}}),f=e.i(919056),{createTV:u,tv:x}=(i=(...e)=>t=>((e,t)=>{let r=s(e);if(!r||!(t?.twMerge??!0))return r;if(!g.cachedTwMerge||g.didTwMergeConfigChange){let e;g.didTwMergeConfigChange=!1,g.cachedTwMerge=h(e=g.cachedTwMergeConfig)?f.twMerge:(0,f.extendTailwindMerge)({...e,extend:{theme:e.theme,classGroups:e.classGroups,conflictingClassGroupModifiers:e.conflictingClassGroupModifiers,conflictingClassGroups:e.conflictingClassGroups,...e.extend}})}return g.cachedTwMerge(r)||void 0})(e,t),{tv:o=(e,t)=>{let{extend:r=null,slots:n={},variants:o={},compoundVariants:a=[],compoundSlots:d=[],defaultVariants:f={}}=e,u={...w,...t},x=r?.base?s(r.base,e?.base):e?.base,v=r?.variants&&!h(r.variants)?c(o,r.variants):o,m=r?.defaultVariants&&!h(r.defaultVariants)?{...r.defaultVariants,...f}:f;h(u.twMergeConfig)||((e,t)=>{if(e===t)return!0;if(!e||!t)return!1;let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++){let i=r[o];if(!n.includes(i)||e[i]!==t[i])return!1}return!0})(u.twMergeConfig,g.cachedTwMergeConfig)||(g.didTwMergeConfigChange=!0,g.cachedTwMergeConfig=u.twMergeConfig);let C=h(r?.slots),k=h(n)?{}:{base:s(e?.base,C&&r?.base),...n},b=C?k:((e,t)=>{for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let n=t[r];r in e?e[r]=s(e[r],n):e[r]=n}return e})({...r?.slots},h(k)?{base:e?.base}:k),y=h(r?.compoundVariants)?a:p(r?.compoundVariants,a),_=e=>{if(h(v)&&h(n)&&C)return i(x,e?.class,e?.className)(u);if(y&&!Array.isArray(y))throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof y}`);if(d&&!Array.isArray(d))throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof d}`);let t=(t,r=v,n=null,o=null)=>{let i=r[t];if(!i||h(i))return null;let a=o?.[t]??e?.[t];if(null===a)return null;let s=l(a);if("object"==typeof s)return null;let d=m?.[t];return i[(null!=s?s:l(d))||"false"]},r=(e,r)=>{if(!v||"object"!=typeof v)return null;let n=[];for(let o in v){let i=t(o,v,e,r),a="base"===e&&"string"==typeof i?i:i&&i[e];a&&n.push(a)}return n},o={};for(let t in e){let r=e[t];void 0!==r&&(o[t]=r)}let a=(t,r)=>{let n="object"==typeof e?.[t]?{[t]:e[t]?.initial}:{};return{...m,...o,...n,...r}},s=(e=[],t)=>{let r=[],n=e.length;for(let o=0;o<n;o++){let{class:n,className:i,...s}=e[o],l=!0,h=a(null,t);for(let e in s){let t=s[e],r=h[e];if(Array.isArray(t)){if(!t.includes(r)){l=!1;break}}else{if((null==t||!1===t)&&(null==r||!1===r))continue;if(r!==t){l=!1;break}}}l&&(n&&r.push(n),i&&r.push(i))}return r},p=e=>{let t=s(y,e);if(!Array.isArray(t))return t;let r={};for(let e=0;e<t.length;e++){let n=t[e];if("string"==typeof n)r.base=i(r.base,n)(u);else if("object"==typeof n)for(let e in n)r[e]=i(r[e],n[e])(u)}return r},c=e=>{if(d.length<1)return null;let t={},r=a(null,e);for(let e=0;e<d.length;e++){let{slots:n=[],class:o,className:i,...a}=d[e];if(!h(a)){let e=!0;for(let t in a){let n=r[t],o=a[t];if(void 0===n||(Array.isArray(o)?!o.includes(n):o!==n)){e=!1;break}}if(!e)continue}for(let e=0;e<n.length;e++){let r=n[e];t[r]||(t[r]=[]),t[r].push([o,i])}}return t};if(!h(n)||!C){let e={};if("object"==typeof b&&!h(b))for(let t in b)e[t]=e=>{let n=p(e),o=c(e);return i(b[t],r(t,e),n[t],o?o[t]:void 0,e?.class,e?.className)(u)};return e}return i(x,(()=>{if(!v)return null;let e=Object.keys(v),r=[];for(let n=0;n<e.length;n++){let o=t(e[n],v);o&&r.push(o)}return r})(),s(y),e?.class,e?.className)(u)};return _.variantKeys=(()=>{if(v&&"object"==typeof v)return Object.keys(v)})(),_.extend=r,_.base=x,_.slots=b,_.variants=v,_.defaultVariants=m,_.compoundSlots=d,_.compoundVariants=y,_},createTV:e=>(t,r)=>o(t,r?c(e,r):e)});e.s(["tv",()=>x],542010)},956636,e=>{"use strict";e.s([])},679396,464036,272424,365069,80260,e=>{"use strict";var t,r,n,o,i,a,s,l=e.i(658765),h=e.i(685720),d=e.i(736837),p={chrome:"https://chrome.google.com/webstore/detail/universal-profiles-testin/abpickdkkbnbcoepogfhkhennhfhehfn",brave:"https://chrome.google.com/webstore/detail/universal-profiles-testin/abpickdkkbnbcoepogfhkhennhfhehfn",edge:"https://chrome.google.com/webstore/detail/universal-profiles-testin/abpickdkkbnbcoepogfhkhennhfhehfn",opera:"",safari:"",firefox:""},c=e=>({id:"chrome",name:"",icon:"",...(()=>{let{isChrome:t,isBrave:r,isFirefox:n,isSafari:o,isEdge:i,isOpera:a}=e;return r?{id:"brave",name:"Brave",icon:"logo-brave",storeLink:p.brave}:i?{id:"edge",name:"Edge",icon:"logo-edge",storeLink:p.edge}:a?{id:"opera",name:"Opera",icon:"logo-opera",storeLink:p.opera}:t?{id:"chrome",name:"Chrome",icon:"logo-chrome",storeLink:p.chrome}:n?{id:"firefox",name:"Firefox",icon:"logo-firefox",storeLink:p.firefox}:o?{id:"safari",name:"Safari",icon:"logo-safari",storeLink:p.safari}:void 0})()}),w=/^ethereum:(0x[a-fA-F0-9]{40})@(\d+)\?ts=(\d+)&sig=(0x[a-fA-F0-9]+)$/;function g(e,t,r){return`ethereum:${e.toLowerCase()}@${t}?ts=${r}`}async function f(e,t,r,n){let o,i=Math.min(Math.max(0,n?.generationOffsetSeconds??0),5),a=g(t,r,Math.floor(Date.now()/1e3)+i);if(n?.signer)o=await n.signer(a);else if(e&&"0x"!==e){let t=(0,d.privateKeyToAccount)(e);o=await t.signMessage({message:a})}else throw Error("Either a valid privateKey or options.signer must be provided");return`${a}&sig=${o}`}function u(e){let t=e.match(w);if(!t)return null;let[,r,n,o,i]=t;return{profileAddress:r.toLowerCase(),chainId:Number.parseInt(n,10),timestamp:Number.parseInt(o,10),signature:i,message:g(r,Number.parseInt(n,10),Number.parseInt(o,10))}}async function x(e,t){let r=t?.maxAgeSeconds??60,n=t?.skipTimestampValidation??!1,o=u(e);if(!o)throw Error("Invalid QR format: does not match expected URI pattern");let{profileAddress:i,chainId:a,timestamp:s,signature:d,message:p}=o,c=(0,l.hashMessage)(p),w=await (0,h.recoverMessageAddress)({message:p,signature:d}),g=Math.floor(Date.now()/1e3),f=!n&&s+r<g;return{isValid:!f,profileAddress:i,chainId:a,timestamp:s,recoveredAddress:w.toLowerCase(),isExpired:f,message:p,messageHash:c}}function v(e){return w.test(e)}function m(e){return(0,d.privateKeyToAccount)(e).address}function C(e,t){let r=u(e);if(!r)throw Error("Invalid QR format");return{hash:t.messageHash,signature:r.signature}}var k=e=>e?e.toLowerCase().replace(/\s+/g,"-"):"",b=class{constructor(e){this.destination=new URL(e),"/"!==this.destination.pathname.at(-1)&&(this.destination.pathname+="/")}resolveUrl(e){let t=new URL(e),r=new URL(t.pathname?`./${t.hostname}${t.pathname}`:`./${t.hostname}`,this.destination);return r.pathname=r.pathname.replaceAll(/\/\/+/g,"/"),r.toString()}},y=class{constructor(e){for(const t of(this.converters=[],e)){const[e,r]=t;if(null==e)throw TypeError("Match criteria not defined");const n="string"==typeof r?new b(r):r;if(!(n instanceof b))throw TypeError("Invalid converter");this.converters.push({match:e,converter:n})}}resolveUrl(e){let t=e,r=new Set(this.converters),n=!0;for(;n;)for(let e of(n=!1,r)){let{match:o,converter:i}=e;if(o instanceof RegExp?o.test(t):t.startsWith(o)){t=i.resolveUrl(t),r.delete(e),n=!0;break}}return t}};e.s(["EIP1271_MAGIC_VALUE",()=>"0x1626ba7e","EXTENSION_STORE_LINKS",()=>p,"UrlConverter",()=>b,"UrlResolver",()=>y,"browserInfo",()=>c,"createMessage",()=>g,"createSignedQR",()=>f,"getControllerAddress",()=>m,"getEIP1271Data",()=>C,"isSignedQRFormat",()=>v,"parseSignedQR",()=>u,"slug",()=>k,"verifySignedQR",()=>x],679396);var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,M=Object.getOwnPropertyNames,B=Object.prototype.hasOwnProperty,L=(e,t)=>function(){return e&&(t=(0,e[M(e)[0]])(e=0)),t},A=(e,t)=>{for(var r in t)_(e,r,{get:t[r],enumerable:!0})},H=e=>((e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of M(t))B.call(e,o)||o===r||_(e,o,{get:()=>t[o],enumerable:!(n=$(t,o))||n.enumerable});return e})(_({},"__esModule",{value:!0}),e),S=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?$(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&_(t,r,i),i};e.s(["__decorateClass",()=>S,"__esm",()=>L,"__export",()=>A,"__toCommonJS",()=>H],464036);var V=L({"src/config.ts"(){t=["mainnet","testnet"],r="https://envio.lukso-mainnet.universal.tech/v1/graphql",n="https://envio.lukso-testnet.universal.tech/v1/graphql"}});e.s(["GRAPHQL_ENDPOINT_MAINNET",()=>r,"GRAPHQL_ENDPOINT_TESTNET",()=>n,"SUPPORTED_NETWORK_IDS",()=>t,"init_config",()=>V],272424);var E=e.i(44954),F=e.i(90351),Z={};A(Z,{luksoMainnet:()=>o});var G=L({"src/chains/luksoMainnet.ts"(){V(),o={...E.lukso,slug:"mainnet",name:"LUKSO Mainnet",nativeCurrency:{...E.lukso.nativeCurrency,supply:"42000000000000000000000000"},rpcUrls:{default:{http:["https://rpc1.mainnet.lukso.dev"],webSocket:["wss://ws-rpc.mainnet.lukso.network"]}},contracts:{...E.lukso.contracts,customLSP2Contract:{address:"0x51c602b249a5bc0ff437fbed4607448d8bc66dad"},followingSystemContract:{address:"0xf01103E5a9909Fc0DBe8166dA7085e0285daDDcA"}},dataKeyForController:"0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000001",LSPMintableInitAddresses:{LSP7DigitalAsset:"0x28B7CcdaD1E15cCbDf380c439Cc1F2EBe7f5B2d8",LSP8IdentifiableDigitalAsset:"0xd787a2f6B14d4dcC2fb897f40b87f2Ff63a07997"},wwsGraphqlHost:"wss://envio.lukso-mainnet.universal.tech/v1/graphql",graphqlHost:r}}}),I={};A(I,{luksoTestnet:()=>i});var j=L({"src/chains/luksoTestnet.ts"(){V(),i={...F.luksoTestnet,slug:"testnet",name:"LUKSO Testnet",nativeCurrency:{...F.luksoTestnet.nativeCurrency,supply:"42000000000000000000000000",name:"LUKSO"},contracts:{...F.luksoTestnet.contracts,customLSP2Contract:{address:"0x1690c1A6f5dc385d20139222567476F0A185f77a"},followingSystemContract:{address:"0xf01103E5a9909Fc0DBe8166dA7085e0285daDDcA"}},LSPMintableInitAddresses:{LSP7DigitalAsset:"0x51A1cC0B2fa430A607d60307Bc0aaC3ec8F7e67B",LSP8IdentifiableDigitalAsset:"0x3CFA56F3dC51850655176243a3a9F76C9489208e"},dataKeyForController:"0xdf30dba06db6a30e65354d9a64c6098600000000000000000000000000000001",wwsGraphqlHost:"wss://envio.lukso-testnet.universal.tech/v1/graphql",graphqlHost:n}}});function T(){return a||(a=(G(),H(Z)).luksoMainnet),a}function W(){return s||(s=(j(),H(I)).luksoTestnet),s}var O=new Proxy({},{get:(e,t)=>T()[t]}),D=new Proxy({},{get:(e,t)=>W()[t]});function U(){let e=T(),t=W();return{[e.id]:e,[t.id]:t}}function R(e){return U()[e]}e.s(["getChainById",()=>R,"getLuksoMainnet",()=>T,"getLuksoTestnet",()=>W,"luksoChainsByID",()=>U,"luksoMainnet",()=>O,"luksoTestnet",()=>D],365069),e.s([],80260)},858526,414400,e=>{"use strict";var t=e.i(568278),r=e.i(766715);function n(e){let n=e?.userAgent??"",o=new r.UAParser(n).getResult(),i=(0,t.signal)(1),a=o.device.type,s=o.os.name||"",l=s.includes("iOS")||s.includes("Mac OS"),h="Android"===s,d="Windows"===s,p="Mac OS"===s,c="Linux"===s,w=o.browser.name||"";return{isMobile:"mobile"===a,isTablet:"tablet"===a,isDesktop:!a,isIOS:l,isAndroid:h,isWindows:d,isMacOS:p,isLinux:c,isChrome:"Chrome"===w,isSafari:"Safari"===w,isFirefox:"Firefox"===w,isEdge:"Edge"===w,isOpera:"Opera"===w,isBrave:e?.brave!==void 0,getRaw:()=>o,initialized:i}}function o(e){return class extends e{connectedCallback(){super.connectedCallback(),this.device=n(navigator)}}}e.s(["deviceService",()=>n],414400),e.s(["withDeviceService",()=>o],858526)},991008,159463,e=>{"use strict";e.i(956636),e.i(679396),e.i(365069);var t=e.i(272424);e.i(80260),e.i(858526),e.i(668562),e.i(568278);var r=e.i(464036);e.i(374576);var n=e.i(120119),o=e.i(56350);function i(e){class t extends e{constructor(){super(...arguments),this.theme="light",this.isDark=!1,this.mediaQueryList=null,this.handleMediaQueryChange=e=>{this.isDark=e.matches}}connectedCallback(){super.connectedCallback(),this.updateTheme(),this.updateHostClass(),"auto"===this.theme&&(this.mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this.mediaQueryList.addEventListener("change",this.handleMediaQueryChange))}disconnectedCallback(){super.disconnectedCallback(),this.mediaQueryList&&this.mediaQueryList.removeEventListener("change",this.handleMediaQueryChange)}updated(e){super.updated(e),e.has("theme")&&(this.updateTheme(),"auto"!==this.theme||this.mediaQueryList?"auto"!==this.theme&&this.mediaQueryList&&(this.mediaQueryList.removeEventListener("change",this.handleMediaQueryChange),this.mediaQueryList=null):(this.mediaQueryList=window.matchMedia("(prefers-color-scheme: dark)"),this.mediaQueryList.addEventListener("change",this.handleMediaQueryChange))),e.has("isDark")&&this.updateHostClass()}updateTheme(){"auto"===this.theme?this.isDark=window.matchMedia("(prefers-color-scheme: dark)").matches:this.isDark="dark"===this.theme}createRenderRoot(){let e=super.createRenderRoot();return this.themeRoot=document.createElement("div"),this.themeRoot.setAttribute("data-theme-root",""),this.themeRoot.style.width="inherit",e.appendChild(this.themeRoot),this.themeRoot}updateHostClass(){this.isDark?(this.classList.add("dark"),this.themeRoot.classList.add("dark")):(this.classList.remove("dark"),this.themeRoot.classList.remove("dark"))}}return(0,r.__decorateClass)([(0,n.property)({type:String,reflect:!0})],t.prototype,"theme",2),(0,r.__decorateClass)([(0,o.state)()],t.prototype,"isDark",2),t}e.s(["withTheme",()=>i],159463),e.i(414400),(0,t.init_config)(),e.s([],991008)},757895,e=>{"use strict";e.s(["default",()=>"/**\n * backdrop-filter must be applied at :host level (Light DOM) because it cannot blur content\n * across the Shadow DOM boundary. pointer-events: none allows backdrop clicks while children remain interactive.\n */\n:host([is-open]) {\n  position: fixed !important;\n  inset: 0 !important;\n  width: 100vw !important;\n  height: 100vh !important;\n  z-index: 1011 !important;\n  backdrop-filter: blur(8px) !important;\n  background: rgb(196 202 206 / 60%) !important;\n  pointer-events: none !important;\n}\n\n/* Light theme backdrop */\n:host([is-open]:not([theme='dark'])) {\n  background: rgb(196 202 206 / 60%) !important;\n}\n\n/* Dark theme backdrop with reduced opacity */\n:host([is-open][theme='dark']) {\n  background: rgb(196 202 206 / 10%) !important;\n}\n\n/* Re-enable pointer events for modal content */\n:host([is-open]) > * {\n  pointer-events: auto !important;\n}\n\n/* Dialog panel custom properties — defaults are inlined as var() fallbacks\n   so inherited values from parent elements are not blocked by :host. */\n:host(:not([theme='dark'])) {\n  --lukso-modal-resolved-bg: var(--lukso-modal-bg, #f8fafb); /* neutral-98 */\n}\n\n:host([theme='dark']) {\n  --lukso-modal-resolved-bg: var(\n    --lukso-modal-dark-bg,\n    var(--lukso-modal-bg, #121b21)\n  ); /* neutral-10 */\n}\n"])},579078,e=>{"use strict";e.i(812207);var t=e.i(592057),r=e.i(604148);let n=(0,t.unsafeCSS)('/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {\n    *, :before, :after, ::backdrop {\n      --tw-translate-x: 0;\n      --tw-translate-y: 0;\n      --tw-translate-z: 0;\n      --tw-rotate-x: initial;\n      --tw-rotate-y: initial;\n      --tw-rotate-z: initial;\n      --tw-skew-x: initial;\n      --tw-skew-y: initial;\n      --tw-pan-x: initial;\n      --tw-pan-y: initial;\n      --tw-pinch-zoom: initial;\n      --tw-space-y-reverse: 0;\n      --tw-border-style: solid;\n      --tw-gradient-position: initial;\n      --tw-gradient-from: #0000;\n      --tw-gradient-via: #0000;\n      --tw-gradient-to: #0000;\n      --tw-gradient-stops: initial;\n      --tw-gradient-via-stops: initial;\n      --tw-gradient-from-position: 0%;\n      --tw-gradient-via-position: 50%;\n      --tw-gradient-to-position: 100%;\n      --tw-leading: initial;\n      --tw-font-weight: initial;\n      --tw-tracking: initial;\n      --tw-shadow: 0 0 #0000;\n      --tw-shadow-color: initial;\n      --tw-shadow-alpha: 100%;\n      --tw-inset-shadow: 0 0 #0000;\n      --tw-inset-shadow-color: initial;\n      --tw-inset-shadow-alpha: 100%;\n      --tw-ring-color: initial;\n      --tw-ring-shadow: 0 0 #0000;\n      --tw-inset-ring-color: initial;\n      --tw-inset-ring-shadow: 0 0 #0000;\n      --tw-ring-inset: initial;\n      --tw-ring-offset-width: 0px;\n      --tw-ring-offset-color: #fff;\n      --tw-ring-offset-shadow: 0 0 #0000;\n      --tw-outline-style: solid;\n      --tw-blur: initial;\n      --tw-brightness: initial;\n      --tw-contrast: initial;\n      --tw-grayscale: initial;\n      --tw-hue-rotate: initial;\n      --tw-invert: initial;\n      --tw-opacity: initial;\n      --tw-saturate: initial;\n      --tw-sepia: initial;\n      --tw-drop-shadow: initial;\n      --tw-drop-shadow-color: initial;\n      --tw-drop-shadow-alpha: 100%;\n      --tw-drop-shadow-size: initial;\n      --tw-backdrop-blur: initial;\n      --tw-backdrop-brightness: initial;\n      --tw-backdrop-contrast: initial;\n      --tw-backdrop-grayscale: initial;\n      --tw-backdrop-hue-rotate: initial;\n      --tw-backdrop-invert: initial;\n      --tw-backdrop-opacity: initial;\n      --tw-backdrop-saturate: initial;\n      --tw-backdrop-sepia: initial;\n      --tw-duration: initial;\n      --tw-ease: initial;\n      --tw-content: "";\n      --tw-scale-x: 1;\n      --tw-scale-y: 1;\n      --tw-scale-z: 1;\n    }\n  }\n}\n\n:root {\n  --neutral-10: #121b21;\n  --neutral-15: #1b2832;\n  --neutral-20: #243542;\n  --neutral-25: #2d4253;\n  --neutral-30: #365063;\n  --neutral-35: #3e5d74;\n  --neutral-40: #476a85;\n  --neutral-45: #507795;\n  --neutral-50: #5985a6;\n  --neutral-55: #6a91af;\n  --neutral-60: #7a9db8;\n  --neutral-65: #8ba9c1;\n  --neutral-70: #9cb6c9;\n  --neutral-75: #acc2d2;\n  --neutral-80: #bdcedb;\n  --neutral-85: #cddae4;\n  --neutral-90: #dee7ed;\n  --neutral-95: #eef3f6;\n  --neutral-97: #f5f8fa;\n  --neutral-98: #f8fafb;\n  --neutral-100: #fff;\n  --honey-72: #fad275;\n  --honey-75: #fbd784;\n  --honey-82: #fce2a6;\n  --honey-85: #fce7b5;\n  --honey-92: #fef2d8;\n  --coral-65: #f37c58;\n  --coral-74: #f69e83;\n  --coral-75: #f7a288;\n  --coral-84: #fac3b3;\n  --coral-85: #fac7b7;\n  --coral-94: #fde9e2;\n  --warm-77: #ffbb8a;\n  --warm-87: #ffd8bd;\n  --warm-97: #fff6f0;\n  --sea-salt-57: #7fa4a4;\n  --sea-salt-67: #9db9b9;\n  --sea-salt-88: #dbe6e6;\n  --cloud-43: #447c97;\n  --cloud-75: #a7c7d7;\n  --cloud-88: #d5e4ec;\n  --ocean-38: #3c6286;\n  --ocean-75: #a7c0d7;\n  --ocean-88: #d5e1ec;\n  --sky-64: #68a5de;\n  --sky-75: #96c1e8;\n  --sky-85: #c0daf1;\n  --lukso-50: #aa5578;\n  --lukso-60: #bb7793;\n  --lukso-70: #cc99ae;\n  --lukso-80: #ddbbc9;\n  --lukso-90: #eedde4;\n  --yellow-25: #804d00;\n  --yellow-55: #ffa31a;\n  --yellow-65: #ffb84d;\n  --yellow-75: #ffcc80;\n  --yellow-85: #ffe0b3;\n  --yellow-95: #fff5e5;\n  --green-45: #31b452;\n  --green-54: #47cd68;\n  --green-63: #6bd686;\n  --green-75: #9be4ad;\n  --green-85: #c3efce;\n  --green-95: #ebfaef;\n  --blue-40: #0452c8;\n  --blue-50: #0567fa;\n  --blue-60: #3785fb;\n  --blue-75: #82b3fc;\n  --blue-85: #b4d1fd;\n  --blue-95: #e6f0fe;\n  --red-55: #e23636;\n  --red-65: #e96363;\n  --red-75: #ef8f8f;\n  --red-85: #f5bcbc;\n  --red-95: #fce9e9;\n  --purple-15: #1d202f;\n  --purple-18: #232739;\n  --purple-31: #3c4262;\n  --purple-41: #4f5882;\n  --purple-51: #646ea0;\n  --purple-58: #7a83ae;\n  --purple-63: #8a92b7;\n  --purple-82: #c6cadc;\n  --purple-94: #ecedf3;\n  --pink-90: #f8dad3;\n  --pink-91: #f9ddd7;\n  --pink-92: #f9e1dc;\n  --pink-93: #fae5e0;\n  --pink-94: #fbe9e5;\n  --pink-95: #fcece9;\n  --pink-96: #fcf0ed;\n  --pink-97: #fdf4f2;\n  --measure-50: #e8178a;\n  --measure-70: #f174b9;\n  --measure-80: #f6a2d0;\n  --measure-97: #fef1f8;\n  --grey-10: #1a1a1a;\n  --grey-15: #262626;\n  --grey-20: #333;\n  --grey-25: #404040;\n  --grey-30: #4d4d4d;\n  --grey-35: #595959;\n  --grey-40: #666;\n  --grey-45: #737373;\n  --grey-50: gray;\n  --grey-55: #8c8c8c;\n  --grey-60: #999;\n  --grey-65: #a6a6a6;\n  --grey-70: #b3b3b3;\n  --grey-75: #bfbfbf;\n  --grey-80: #ccc;\n  --gradient-1-start: #d39b9d;\n  --gradient-1-end: #9071d1;\n  --gradient-2-start: #f8dad3;\n  --gradient-2-end: #cc99ae;\n  --gradient-3-start: #393e56;\n  --gradient-3-end: #646ea0;\n}\n\n:root, :host {\n  --color-neutral-10: #121b21;\n  --color-neutral-20: #243542;\n  --color-neutral-25: #2d4253;\n  --color-neutral-30: #365063;\n  --color-neutral-35: #3e5d74;\n  --color-neutral-45: #507795;\n  --color-neutral-60: #7a9db8;\n  --color-neutral-70: #9cb6c9;\n  --color-neutral-90: #dee7ed;\n  --color-neutral-95: #eef3f6;\n  --color-neutral-97: #f5f8fa;\n  --color-neutral-98: #f8fafb;\n  --color-neutral-100: #fff;\n  --color-honey-72: #fad275;\n  --color-honey-92: #fef2d8;\n  --color-warm-97: #fff6f0;\n  --color-sky-64: #68a5de;\n  --color-yellow-25: #804d00;\n  --color-yellow-55: #ffa31a;\n  --color-yellow-65: #ffb84d;\n  --color-yellow-85: #ffe0b3;\n  --color-green-45: #31b452;\n  --color-green-54: #47cd68;\n  --color-green-63: #6bd686;\n  --color-green-85: #c3efce;\n  --color-green-95: #ebfaef;\n  --color-blue-40: #0452c8;\n  --color-blue-95: #e6f0fe;\n  --color-red-55: #e23636;\n  --color-red-65: #e96363;\n  --color-red-85: #f5bcbc;\n  --color-red-95: #fce9e9;\n  --color-purple-31: #3c4262;\n  --color-purple-41: #4f5882;\n  --color-purple-51: #646ea0;\n  --color-purple-58: #7a83ae;\n  --color-purple-63: #8a92b7;\n  --color-purple-82: #c6cadc;\n  --color-gradient-1-start: #d39b9d;\n  --color-gradient-1-end: #9071d1;\n  --color-gradient-3-start: #393e56;\n  --color-gradient-3-end: #646ea0;\n  --shadow-neutral-shadow-round-1xl: 0px 27px 12px 0px #3f5d7400, 0px 18px 7px 0px #3f5d7405, 0px 10px 6px 0px #3f5d7414, 0px 4px 4px 0px #3f5d7421, 0px 1px 2px 0px #3f5d7426, 0px 0px 14px 0px #3f5d7429;\n  --font-inter: "Inter", ui-sans-serif, system-ui, sans-serif;\n  --font-mono: "PT Mono", ui-monospace, monospace;\n  --blur-sm: 8px;\n  --text-6: 6px;\n  --text-8: 8px;\n  --text-10: 10px;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-17: 17px;\n  --text-20: 20px;\n  --text-21: 21px;\n  --text-24: 24px;\n  --text-26: 26px;\n  --text-32: 32px;\n  --text-40: 40px;\n  --text-44: 44px;\n  --text-48: 48px;\n  --font-weight-100: 100;\n  --font-weight-200: 200;\n  --font-weight-300: 300;\n  --font-weight-400: 400;\n  --font-weight-500: 500;\n  --font-weight-600: 600;\n  --font-weight-700: 700;\n  --font-weight-800: 800;\n  --font-weight-900: 900;\n  --font-500: 500;\n  --font-600: 600;\n  --leading-10: 10px;\n  --leading-12: 12px;\n  --leading-14: 14px;\n  --leading-15: 15px;\n  --leading-17: 17px;\n  --leading-20: 20px;\n  --leading-22: 22px;\n  --leading-24: 24px;\n  --leading-26: 26px;\n  --leading-28: 28px;\n  --leading-31: 31px;\n  --leading-32: 32px;\n  --leading-38: 38px;\n  --leading-40: 40px;\n  --leading-48: 48px;\n  --leading-58: 58px;\n  --radius-0: 0;\n  --radius-4: 4px;\n  --radius-8: 8px;\n  --radius-10: 10px;\n  --radius-12: 12px;\n  --radius-14: 14px;\n  --radius-24: 24px;\n  --scale-98: .98;\n  --height-78: 78px;\n  --spacing-0: 0px;\n  --spacing-1: .25rem;\n  --spacing-2: .5rem;\n  --spacing-3: .75rem;\n  --spacing-4: 1rem;\n  --spacing-5: 1.25rem;\n  --spacing-6: 1.5rem;\n  --spacing-7: 1.75rem;\n  --spacing-8: 2rem;\n  --spacing-9: 2.25rem;\n  --spacing-10: 2.5rem;\n  --spacing-11: 2.75rem;\n  --spacing-12: 3rem;\n  --spacing-14: 3.5rem;\n  --spacing-16: 4rem;\n  --spacing-17: 4.25rem;\n  --spacing-20: 5rem;\n  --spacing-24: 6rem;\n  --spacing-30: 7.5rem;\n  --spacing-32: 8rem;\n  --animate-pulse-resize: pulse-resize 1s ease-in-out infinite;\n  --animate-resize-in: resize-in .5s ease-in-out;\n  --animate-fade-in: fade-in .5s ease-in-out forwards;\n  --animate-bounce2: bounce2 1s ease-in-out infinite alternate;\n  --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  --color-red-600: oklch(57.7% .245 27.325);\n  --color-orange-600: oklch(64.6% .222 41.116);\n  --color-yellow-600: oklch(68.1% .162 75.834);\n  --color-green-600: oklch(62.7% .194 149.214);\n  --color-gray-100: oklch(96.7% .003 264.542);\n  --color-gray-400: oklch(70.7% .022 261.325);\n  --color-gray-500: oklch(55.1% .027 264.364);\n  --color-gray-600: oklch(44.6% .03 256.802);\n  --color-gray-800: oklch(27.8% .033 256.848);\n  --color-white: #fff;\n  --spacing: .25rem;\n  --container-sm: 24rem;\n  --text-xs: .75rem;\n  --text-xs--line-height: calc(1 / .75);\n  --text-sm: .875rem;\n  --text-sm--line-height: calc(1.25 / .875);\n  --font-weight-semibold: 600;\n  --font-weight-bold: 700;\n  --tracking-wider: .05em;\n  --leading-tight: 1.25;\n  --leading-relaxed: 1.625;\n  --radius-md: .375rem;\n  --radius-lg: .5rem;\n  --ease-in: cubic-bezier(.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, .2, 1);\n  --ease-in-out: cubic-bezier(.4, 0, .2, 1);\n  --animate-spin: spin 1s linear infinite;\n  --animate-ping: ping 1s cubic-bezier(0, 0, .2, 1) infinite;\n  --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;\n  --animate-bounce: bounce 1s infinite;\n  --default-transition-duration: .15s;\n  --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n  --default-font-family: var(--font-sans);\n  --default-mono-font-family: var(--font-mono);\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-Regular.woff2") format("woff2");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-ExtraBold.woff2") format("woff2");\n  font-weight: 800;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-Bold.woff2") format("woff2");\n  font-weight: bold;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-SemiBold.woff2") format("woff2");\n  font-weight: 600;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-Medium.woff2") format("woff2");\n  font-weight: 500;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: Inter;\n  src: url("/assets/fonts/Inter-Thin.woff2") format("woff2");\n  font-weight: 100;\n  font-style: normal;\n  font-display: swap;\n}\n\n@font-face {\n  font-family: PT Mono;\n  src: url("/assets/fonts/PT-Mono-Regular.woff2") format("woff2");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: PT Mono;\n  src: url("/assets/fonts/PT-Mono-Bold.woff2") format("woff2");\n  font-weight: bold;\n  font-style: normal;\n}\n\n:root {\n  --font-inter: "Inter", ui-sans-serif, system-ui, sans-serif;\n  --font-mono: "PT Mono", ui-monospace, monospace;\n  --font-weight-100: 100;\n  --font-weight-200: 200;\n  --font-weight-300: 300;\n  --font-weight-400: 400;\n  --font-weight-500: 500;\n  --font-weight-600: 600;\n  --font-weight-700: 700;\n  --font-weight-800: 800;\n  --font-weight-900: 900;\n  --shadow-button-medium-hover-primary: 0px 20px 16px -16px #0006;\n  --shadow-button-medium-hover-secondary: 0px 20px 16px -16px #0000001f;\n  --shadow-button-medium-press-primary: 0px 12px 16px -16px #0006;\n  --shadow-button-medium-press-secondary: 0px 12px 16px -16px #0000001f;\n  --shadow-button-small-hover-primary: 0px 10px 8px -8px #0006;\n  --shadow-button-small-hover-secondary: 0px 10px 8px -8px #0000001f;\n  --shadow-button-small-press-primary: 0px 6px 8px -8px #0006;\n  --shadow-button-small-press-secondary: 0px 6px 8x -8px #0000001f;\n  --shadow-1xl: 0px 0px 16px #bdcedb66;\n  --shadow-2xl: 0px 36px 80px #bdcedb4d, 0px 5.01331px 33.4221px #bdcedb0d, 0px 2.68036px 17.869px #bdcedb0b, 0px 1.50259px 10.0172px #bdcedb09, 0px .798012px 5.32008px #bdcedb07, 0px .332071px 2.21381px #bdcedb05;\n  --shadow-3xl: 0px 12px 80px #bdcedb4d, 0px 73.78px 33.4221px #bdcedb14, 0px 22.3363px 17.869px #bdcedb0b, 0px 12.5216px 10.0172px #bdcedb09, 0px 6.6501px 5.32008px #bdcedb07, 0px 2.76726px 2.21381px #bdcedb05;\n  --shadow-neutral-drop-shadow: 0px 9px 4px #3f5d7403, 0px 5px 3px #3f5d740a, 0px 2px 2px #3f5d7412, 0px 1px 1px #3f5d7414, 0px 0px 0px #3f5d7414;\n  --shadow-neutral-drop-shadow-1xl: 0px 18px 7px #3f5d7405, 0px 10px 6px #3f5d7414, 0px 4px 4px #3f5d7421, 0px 1px 2px #3f5d7426, 0px 0px 0px #3f5d7429;\n  --shadow-neutral-drop-shadow-2xl: 0px 54px 22px #3f5d7405, 0px 30px 18px #3f5d7414, 0px 14px 14px #3f5d7421, 0px 3px 7px #3f5d7426, 0px 0px 0px #3f5d7429;\n  --shadow-neutral-drop-shadow-3xl: 0px 118px 47px #3f5d7405, 0px 67px 40px #3f5d7414, 0px 30px 30px #3f5d7421, 0px 7px 16px #3f5d7426, 0px 0px 0px #3f5d7429;\n  --shadow-pink-drop-shadow: 0px 9px 4px #70605c03, 0px 5px 3px #70605c0a, 0px 2px 2px #70605c12, 0px 1px 1px #70605c14, 0px 0px 0px #70605c14;\n  --shadow-pink-drop-shadow-1xl: 0px 17px 7px #70605c05, 0px 10px 6px #70605c14, 0px 4px 4px #70605c21, 0px 1px 2px #70605c26, 0px 0px 0px #70605c29;\n  --shadow-pink-drop-shadow-2xl: 0px 54px 21px #70605c05, 0px 30px 18px #70605c14, 0px 13px 13px #70605c21, 0px 3px 7px #70605c26, 0px 0px 0px #70605c29;\n  --shadow-pink-drop-shadow-3xl: 0px 117px 47px #70605c05, 0px 66px 40px #70605c14, 0px 29px 29px #70605c21, 0px 7px 16px #70605c26, 0px 0px 0px #70605c29;\n  --shadow-neutral-inner-shadow: inset 0px 9px 3px #3f5d7403, inset 0px 5px 3px #3f5d740a, inset 0px 2px 2px #3f5d7412, inset 0px 1px 1px #3f5d7414;\n  --shadow-neutral-inner-shadow-top: inset 0 7px 9px -7px #12294a36;\n  --shadow-neutral-inner-shadow-1xl: inset 0px 19px 8px #3f5d7405, inset 0px 11px 6px #3f5d7414, inset 0px 5px 5px #3f5d7421, inset 0px 1px 3px #3f5d7426;\n  --shadow-neutral-inner-shadow-2xl: inset 0px 60px 24px #3f5d7405, inset 0px 34px 20px #3f5d7414, inset 0px 15px 15px #3f5d7421, inset 0px 4px 8px #3f5d7426;\n  --shadow-neutral-inner-shadow-3xl: inset 0px 130px 52px #3f5d7405, inset 0px 73px 44px #3f5d7414, inset 0px 33px 33px #3f5d7421, inset 0px 8px 18px #3f5d7426;\n  --shadow-neutral-above-shadow: 0px 0px 24px #3f5d741a, 0px 0px 10.4625px #3f5d7411, 0px 0px 3.9px #3f5d740d, 0px 0px 1.3875px #3f5d7408;\n  --shadow-neutral-above-shadow-1xl: 0px 0px 32px #3f5d741a, 0px 0px 18.46px #3f5d7411, 0px 0px 11.9px #3f5d740d, 0px 0px 9.39px #3f5d7408;\n  --shadow-neutral-above-shadow-2xl: 0px 0px 40px #3f5d741a, 0px 0px 26.46px #3f5d7411, 0px 0px 19.9px #3f5d740d, 0px 0px 17.39px #3f5d7408;\n  --shadow-neutral-above-shadow-3xl: 0px 0px 48px #3f5d741a, 0px 0px 34.46px #3f5d7411, 0px 0px 27.9px #3f5d740d, 0px 0px 25.39px #3f5d7408;\n  --shadow-pink-above-shadow: 0px 0px 24px #70605c1a, 0px 0px 10.4625px #70605c11, 0px 0px 3.9px #70605c0d, 0px 0px 1.3875px #70605c08;\n  --shadow-pink-above-shadow-1xl: 0px 0px 32px #70605c1a, 0px 0px 18.46px #70605c11, 0px 0px 11.9px #70605c0d, 0px 0px 9.39px #70605c08;\n  --shadow-pink-above-shadow-2xl: 0px 0px 40px #70605c1a, 0px 0px 26.46px #70605c11, 0px 0px 19.9px #70605c0d, 0px 0px 17.39px #70605c08;\n  --shadow-pink-above-shadow-3xl: 0px 0px 48px #70605c1a, 0px 0px 34.46px #70605c11, 0px 0px 27.9px #70605c0d, 0px 0px 25.39px #70605c08;\n  --shadow-wizard-step: 1px 1px 8px #fff, inset 1px 1px 4px #00000029;\n  --shadow-wizard-line: inset 0px 0px 2px #00000024;\n  --shadow-neutral-shadow-round: 0px 7px 5px 0px #3f5d7400, 0px 0px 10px 0px #3f5d7405, 0px 3px 10px 0px #3f5d7414, 0px 4px 4px 0px #3f5d7421, 0px 1px 2px 0px #3f5d7426, 0px 0px 3px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-1xl: 0px 27px 12px 0px #3f5d7400, 0px 18px 7px 0px #3f5d7405, 0px 10px 6px 0px #3f5d7414, 0px 4px 4px 0px #3f5d7421, 0px 1px 2px 0px #3f5d7426, 0px 0px 14px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-2xl: 0px 85px 24px 0px #3f5d7400, 0px 54px 22px 0px #3f5d7405, 0px 30px 18px 0px #3f5d7414, 0px 14px 14px 0px #3f5d7421, 0px 3px 7px 0px #3f5d7426, 0px 0px 23px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-3xl: 0px 185px 52px 0px #3f5d7400, 0px 118px 47px 0px #3f5d7405, 0px 67px 40px 0px #3f5d7414, 0px 30px 30px 0px #3f5d7421, 0px 7px 16px 0px #3f5d7426, 0px 0px 30px 0px #3f5d7429;\n}\n\n@layer base {\n  :root {\n    --font-sans: "Inter", system-ui, sans-serif;\n  }\n\n  *, :after, :before, ::backdrop {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  ::file-selector-button {\n    box-sizing: border-box;\n    border: 0 solid;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, :host {\n    -webkit-text-size-adjust: 100%;\n    -moz-tab-size: 4;\n      -o-tab-size: 4;\n         tab-size: 4;\n    line-height: 1.5;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n\n  b, strong {\n    font-weight: bolder;\n  }\n\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n\n  small {\n    font-size: 80%;\n  }\n\n  sub, sup {\n    vertical-align: baseline;\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n  }\n\n  sub {\n    bottom: -.25em;\n  }\n\n  sup {\n    top: -.5em;\n  }\n\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n\n  :-moz-focusring {\n    outline: auto;\n  }\n\n  progress {\n    vertical-align: baseline;\n  }\n\n  summary {\n    display: list-item;\n  }\n\n  ol, ul, menu {\n    list-style: none;\n  }\n\n  img, svg, video, canvas, audio, iframe, embed, object {\n    vertical-align: middle;\n    display: block;\n  }\n\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n\n  button, input, select, optgroup, textarea {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    opacity: 1;\n    background-color: #0000;\n    border-radius: 0;\n  }\n\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n\n  ::-moz-placeholder {\n    opacity: 1;\n  }\n\n  ::placeholder {\n    opacity: 1;\n  }\n\n  @supports (not (-webkit-appearance: -apple-pay-button)) or (contain-intrinsic-size: 1px) {\n    ::-moz-placeholder {\n      color: currentColor;\n    }\n    ::placeholder {\n      color: currentColor;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      ::-moz-placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n      ::placeholder {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n\n  textarea {\n    resize: vertical;\n  }\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n\n  ::-webkit-datetime-edit {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-year-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-month-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-day-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-hour-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-minute-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-second-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-millisecond-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n\n  ::-webkit-calendar-picker-indicator {\n    line-height: 1;\n  }\n\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n\n  button, input:where([type="button"], [type="reset"], [type="submit"]) {\n    -webkit-appearance: button;\n       -moz-appearance: button;\n            appearance: button;\n  }\n\n  ::file-selector-button {\n    -webkit-appearance: button;\n       -moz-appearance: button;\n            appearance: button;\n  }\n\n  ::-webkit-inner-spin-button {\n    height: auto;\n  }\n\n  ::-webkit-outer-spin-button {\n    height: auto;\n  }\n\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n\n:root {\n  --font-inter: "Inter", ui-sans-serif, system-ui, sans-serif;\n  --font-mono: "PT Mono", ui-monospace, monospace;\n  --blur-xs: 4px;\n  --blur-sm: 8px;\n  --blur-md: 12px;\n  --blur-lg: 16px;\n  --blur-xl: 24px;\n  --blur-2xl: 40px;\n  --blur-3xl: 64px;\n  --text-6: 6px;\n  --text-8: 8px;\n  --text-10: 10px;\n  --text-12: 12px;\n  --text-13: 13px;\n  --text-14: 14px;\n  --text-16: 16px;\n  --text-17: 17px;\n  --text-20: 20px;\n  --text-21: 21px;\n  --text-24: 24px;\n  --text-26: 26px;\n  --text-32: 32px;\n  --text-40: 40px;\n  --text-44: 44px;\n  --text-48: 48px;\n  --font-weight-100: 100;\n  --font-weight-200: 200;\n  --font-weight-300: 300;\n  --font-weight-400: 400;\n  --font-weight-500: 500;\n  --font-weight-600: 600;\n  --font-weight-700: 700;\n  --font-weight-800: 800;\n  --font-weight-900: 900;\n  --font-100: 100;\n  --font-200: 200;\n  --font-300: 300;\n  --font-400: 400;\n  --font-500: 500;\n  --font-600: 600;\n  --font-700: 700;\n  --font-800: 800;\n  --font-900: 900;\n  --leading-10: 10px;\n  --leading-12: 12px;\n  --leading-14: 14px;\n  --leading-15: 15px;\n  --leading-17: 17px;\n  --leading-19: 19px;\n  --leading-20: 20px;\n  --leading-22: 22px;\n  --leading-24: 24px;\n  --leading-26: 26px;\n  --leading-28: 28px;\n  --leading-31: 31px;\n  --leading-32: 32px;\n  --leading-38: 38px;\n  --leading-40: 40px;\n  --leading-48: 48px;\n  --leading-58: 58px;\n  --radius-0: 0;\n  --radius-2: 2px;\n  --radius-4: 4px;\n  --radius-6: 6px;\n  --radius-8: 8px;\n  --radius-10: 10px;\n  --radius-12: 12px;\n  --radius-14: 14px;\n  --radius-16: 16px;\n  --radius-24: 24px;\n  --scale-98: .98;\n  --height-78: 78px;\n  --spacing-0: 0px;\n  --spacing-1: .25rem;\n  --spacing-2: .5rem;\n  --spacing-3: .75rem;\n  --spacing-4: 1rem;\n  --spacing-5: 1.25rem;\n  --spacing-6: 1.5rem;\n  --spacing-7: 1.75rem;\n  --spacing-8: 2rem;\n  --spacing-9: 2.25rem;\n  --spacing-10: 2.5rem;\n  --spacing-11: 2.75rem;\n  --spacing-12: 3rem;\n  --spacing-14: 3.5rem;\n  --spacing-16: 4rem;\n  --spacing-17: 4.25rem;\n  --spacing-18: 4.5rem;\n  --spacing-20: 5rem;\n  --spacing-22: 5.5rem;\n  --spacing-24: 6rem;\n  --spacing-28: 7rem;\n  --spacing-30: 7.5rem;\n  --spacing-32: 8rem;\n  --shadow-neutral-shadow-round: 0px 7px 5px 0px #3f5d7400, 0px 0px 10px 0px #3f5d7405, 0px 3px 10px 0px #3f5d7414, 0px 4px 4px 0px #3f5d7421, 0px 1px 2px 0px #3f5d7426, 0px 0px 3px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-1xl: 0px 27px 12px 0px #3f5d7400, 0px 18px 7px 0px #3f5d7405, 0px 10px 6px 0px #3f5d7414, 0px 4px 4px 0px #3f5d7421, 0px 1px 2px 0px #3f5d7426, 0px 0px 14px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-2xl: 0px 85px 24px 0px #3f5d7400, 0px 54px 22px 0px #3f5d7405, 0px 30px 18px 0px #3f5d7414, 0px 14px 14px 0px #3f5d7421, 0px 3px 7px 0px #3f5d7426, 0px 0px 23px 0px #3f5d7429;\n  --shadow-neutral-shadow-round-3xl: 0px 185px 52px 0px #3f5d7400, 0px 118px 47px 0px #3f5d7405, 0px 67px 40px 0px #3f5d7414, 0px 30px 30px 0px #3f5d7421, 0px 7px 16px 0px #3f5d7426, 0px 0px 30px 0px #3f5d7429;\n  --animate-pulse-resize: pulse-resize 1s ease-in-out infinite;\n  --animate-resize-in: resize-in .5s ease-in-out;\n  --animate-fade-in: fade-in .5s ease-in-out forwards;\n  --animate-bounce2: bounce2 1s ease-in-out infinite alternate;\n  --animate-fade-in-up: fade-in-up .5s ease-out forwards;\n  --animation-fill-none: none;\n  --animation-fill-forwards: forwards;\n  --animation-fill-backwards: backwards;\n  --animation-fill-both: both;\n}\n\n@keyframes pulse-resize {\n  0%, 100% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(.7);\n  }\n}\n\n@keyframes resize-in {\n  0% {\n    transform: scale(.5);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes bounce2 {\n  0% {\n    transform: translateY(-6px);\n  }\n\n  100% {\n    transform: translateY(10px);\n  }\n}\n\n@keyframes fade-in-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@layer components {\n  .heading-inter-48-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-48);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-58);\n  }\n\n  .heading-inter-48-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-48);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-58);\n  }\n\n  .heading-inter-44-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-44);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-40);\n  }\n\n  .heading-inter-44-medium {\n    font-family: var(--font-inter);\n    font-size: var(--text-44);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-40);\n  }\n\n  .heading-inter-40-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-40);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-48);\n  }\n\n  .heading-inter-40-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-40);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-48);\n  }\n\n  .heading-inter-32-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-32);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-38);\n  }\n\n  .heading-inter-32-medium {\n    font-family: var(--font-inter);\n    font-size: var(--text-32);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-38);\n  }\n\n  .heading-inter-24-medium {\n    font-family: var(--font-inter);\n    font-size: var(--text-24);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-28);\n  }\n\n  .heading-inter-26-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-26);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-31);\n  }\n\n  .heading-inter-21-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-21);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-26);\n  }\n\n  .heading-inter-17-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-17);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .heading-inter-12-bold-uppercase {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-15);\n    text-transform: uppercase;\n    letter-spacing: .02em;\n  }\n\n  .heading-inter-14-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-17);\n  }\n\n  .nav-inter-14-medium-uppercase {\n    font-family: var(--font-inter);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-17);\n    text-transform: uppercase;\n    letter-spacing: .08em;\n  }\n\n  .nav-inter-12-medium-uppercase {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-14);\n    text-transform: uppercase;\n    letter-spacing: .08em;\n  }\n\n  .nav-inter-10-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-12);\n  }\n\n  .nav-inter-8-medium-uppercase {\n    font-family: var(--font-inter);\n    font-size: var(--text-8);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-10);\n    text-transform: uppercase;\n    letter-spacing: .08em;\n  }\n\n  .paragraph-inter-20-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-20);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-32);\n  }\n\n  .paragraph-inter-16-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-16);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-24);\n  }\n\n  .paragraph-inter-16-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-16);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-24);\n  }\n\n  .paragraph-inter-16-semi-bold-underlined {\n    font-family: var(--font-inter);\n    font-size: var(--text-16);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-24);\n    text-decoration: underline;\n  }\n\n  .paragraph-inter-14-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .paragraph-inter-14-medium {\n    font-family: var(--font-inter);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .paragraph-inter-14-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .paragraph-inter-13-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-13);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-inter-12-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-inter-10-regular {\n    font-family: var(--font-inter);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-12);\n  }\n\n  .paragraph-inter-12-medium {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-500);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-inter-12-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-inter-12-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-inter-10-semi-bold {\n    font-family: var(--font-inter);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-600);\n    font-style: normal;\n    line-height: var(--leading-12);\n  }\n\n  .paragraph-inter-10-bold-uppercase {\n    font-family: var(--font-inter);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-12);\n    text-transform: uppercase;\n  }\n\n  .paragraph-ptmono-24-regular {\n    font-family: var(--font-mono);\n    font-size: var(--text-24);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-26);\n  }\n\n  .paragraph-ptmono-24-bold {\n    font-family: var(--font-mono);\n    font-size: var(--text-24);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-26);\n  }\n\n  .paragraph-ptmono-16-regular {\n    font-family: var(--font-mono);\n    font-size: var(--text-16);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .paragraph-ptmono-16-bold {\n    font-family: var(--font-mono);\n    font-size: var(--text-16);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-22);\n  }\n\n  .paragraph-ptmono-14-regular {\n    font-family: var(--font-mono);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-ptmono-14-bold {\n    font-family: var(--font-mono);\n    font-size: var(--text-14);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-20);\n  }\n\n  .paragraph-ptmono-12-bold {\n    font-family: var(--font-mono);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-14);\n  }\n\n  .paragraph-ptmono-12-regular {\n    font-family: var(--font-mono);\n    font-size: var(--text-12);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-14);\n  }\n\n  .paragraph-ptmono-10-bold {\n    font-family: var(--font-mono);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-700);\n    font-style: normal;\n    line-height: var(--leading-14);\n  }\n\n  .paragraph-ptmono-10-regular {\n    font-family: var(--font-mono);\n    font-size: var(--text-10);\n    font-weight: var(--font-weight-400);\n    font-style: normal;\n    line-height: var(--leading-14);\n  }\n}\n\n.tippy-box[data-animation="fade"][data-state="hidden"] {\n  opacity: 0;\n}\n\n.tippy-arrow:before {\n  content: "";\n  border-style: solid;\n  border-color: #0000;\n  position: absolute;\n}\n\n.tippy-box[data-placement^="top"] > .tippy-arrow:before {\n  transform-origin: top;\n}\n\n.tippy-box[data-placement^="bottom"] > .tippy-arrow:before {\n  transform-origin: bottom;\n}\n\n.tippy-box[data-placement^="left"] > .tippy-arrow:before {\n  transform-origin: 0;\n}\n\n.tippy-box[data-placement^="right"] > .tippy-arrow:before {\n  transform-origin: 100%;\n}\n\n.tippy-box[data-inertia][data-state="visible"] {\n  transition-timing-function: cubic-bezier(.54, 1.5, .38, 1.11);\n}\n\n.tippy-arrow {\n  width: 16px;\n  height: 16px;\n}\n\n.tippy-size-medium {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n}\n\n.tippy-size-medium[data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-size-medium[data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-size-medium[data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-size-medium[data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-size-medium[data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-size-medium[data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-size-medium[data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-size-medium[data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-size-large {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n}\n\n.tippy-size-large[data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-size-large[data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-size-large[data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-size-large[data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  top: -8px;\n  left: 0;\n}\n\n.tippy-size-large[data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-size-large[data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  right: -8px;\n}\n\n.tippy-size-large[data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-size-large[data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  left: -8px;\n}\n\n.tippy-variant-dark {\n  color: var(--neutral-100);\n  background-color: var(--neutral-30);\n}\n\n.tippy-variant-dark[data-placement^="top"] .tippy-arrow:before {\n  border-top-color: var(--neutral-30);\n}\n\n.tippy-variant-dark[data-placement^="bottom"] .tippy-arrow:before {\n  border-bottom-color: var(--neutral-30);\n}\n\n.tippy-variant-dark[data-placement^="left"] .tippy-arrow:before {\n  border-left-color: var(--neutral-30);\n}\n\n.tippy-variant-dark[data-placement^="right"] .tippy-arrow:before {\n  border-right-color: var(--neutral-30);\n}\n\n.tippy-variant-dark > .tippy-backdrop {\n  background-color: var(--neutral-30);\n}\n\n.tippy-variant-dark > .tippy-svg-arrow {\n  fill: var(--neutral-30);\n}\n\n.tippy-variant-light {\n  color: var(--neutral-20);\n  background-color: var(--neutral-97);\n}\n\n.tippy-variant-light[data-placement^="top"] .tippy-arrow:before {\n  border-top-color: var(--neutral-97);\n}\n\n.tippy-variant-light[data-placement^="bottom"] .tippy-arrow:before {\n  border-bottom-color: var(--neutral-97);\n}\n\n.tippy-variant-light[data-placement^="left"] .tippy-arrow:before {\n  border-left-color: var(--neutral-97);\n}\n\n.tippy-variant-light[data-placement^="right"] .tippy-arrow:before {\n  border-right-color: var(--neutral-97);\n}\n\n.tippy-variant-light > .tippy-backdrop {\n  background-color: var(--neutral-97);\n}\n\n.tippy-variant-light > .tippy-svg-arrow {\n  fill: var(--neutral-97);\n}\n\n.tippy-variant-white {\n  color: var(--neutral-20);\n  background-color: var(--neutral-100);\n}\n\n.tippy-variant-white[data-placement^="top"] .tippy-arrow:before {\n  border-top-color: var(--neutral-100);\n}\n\n.tippy-variant-white[data-placement^="bottom"] .tippy-arrow:before {\n  border-bottom-color: var(--neutral-100);\n}\n\n.tippy-variant-white[data-placement^="left"] .tippy-arrow:before {\n  border-left-color: var(--neutral-100);\n}\n\n.tippy-variant-white[data-placement^="right"] .tippy-arrow:before {\n  border-right-color: var(--neutral-100);\n}\n\n.tippy-variant-white > .tippy-backdrop {\n  background-color: var(--neutral-100);\n}\n\n.tippy-variant-white > .tippy-svg-arrow {\n  fill: var(--neutral-100);\n}\n\n.tippy-variant-success {\n  color: var(--neutral-100);\n  background-color: var(--green-54);\n}\n\n.tippy-variant-success[data-placement^="top"] .tippy-arrow:before {\n  border-top-color: var(--green-54);\n}\n\n.tippy-variant-success[data-placement^="bottom"] .tippy-arrow:before {\n  border-bottom-color: var(--green-54);\n}\n\n.tippy-variant-success[data-placement^="left"] .tippy-arrow:before {\n  border-left-color: var(--green-54);\n}\n\n.tippy-variant-success[data-placement^="right"] .tippy-arrow:before {\n  border-right-color: var(--green-54);\n}\n\n.tippy-variant-success > .tippy-backdrop {\n  background-color: var(--green-54);\n}\n\n.tippy-variant-success > .tippy-svg-arrow {\n  fill: var(--green-54);\n}\n\n.tippy-variant-danger {\n  color: var(--neutral-100);\n  background-color: var(--red-65);\n}\n\n.tippy-variant-danger[data-placement^="top"] .tippy-arrow:before {\n  border-top-color: var(--red-65);\n}\n\n.tippy-variant-danger[data-placement^="bottom"] .tippy-arrow:before {\n  border-bottom-color: var(--red-65);\n}\n\n.tippy-variant-danger[data-placement^="left"] .tippy-arrow:before {\n  border-left-color: var(--red-65);\n}\n\n.tippy-variant-danger[data-placement^="right"] .tippy-arrow:before {\n  border-right-color: var(--red-65);\n}\n\n.tippy-variant-danger > .tippy-backdrop {\n  background-color: var(--red-65);\n}\n\n.tippy-variant-danger > .tippy-svg-arrow {\n  fill: var(--red-65);\n}\n\n.tippy-box[data-theme~="dark-medium"] {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--neutral-30);\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  border-top-color: var(--neutral-30);\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  border-bottom-color: var(--neutral-30);\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--neutral-30);\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="dark-medium"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  border-right-color: var(--neutral-30);\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-box[data-theme~="dark-large"] {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--neutral-30);\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  border-top-color: var(--neutral-30);\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  border-bottom-color: var(--neutral-30);\n  top: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  border-left-color: var(--neutral-30);\n  right: -8px;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="dark-large"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  border-right-color: var(--neutral-30);\n  left: -8px;\n}\n\n.tippy-box[data-theme~="light-medium"] {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-20);\n  background-color: var(--neutral-97);\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  border-top-color: var(--neutral-97);\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  border-bottom-color: var(--neutral-97);\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--neutral-97);\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="light-medium"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  border-right-color: var(--neutral-97);\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-box[data-theme~="light-large"] {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-20);\n  background-color: var(--neutral-97);\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  border-top-color: var(--neutral-97);\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  border-bottom-color: var(--neutral-97);\n  top: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  border-left-color: var(--neutral-97);\n  right: -8px;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="light-large"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  border-right-color: var(--neutral-97);\n  left: -8px;\n}\n\n.tippy-box[data-theme~="white-medium"] {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-20);\n  background-color: var(--neutral-100);\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  border-top-color: var(--neutral-100);\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  border-bottom-color: var(--neutral-100);\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--neutral-100);\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="white-medium"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  border-right-color: var(--neutral-100);\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-box[data-theme~="white-large"] {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-20);\n  background-color: var(--neutral-100);\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  border-top-color: var(--neutral-100);\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  border-bottom-color: var(--neutral-100);\n  top: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  border-left-color: var(--neutral-100);\n  right: -8px;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="white-large"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  border-right-color: var(--neutral-100);\n  left: -8px;\n}\n\n.tippy-box[data-theme~="success-medium"] {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--green-54);\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  border-top-color: var(--green-54);\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  border-bottom-color: var(--green-54);\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--green-54);\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="success-medium"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  border-right-color: var(--green-54);\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-box[data-theme~="success-large"] {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--green-54);\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  border-top-color: var(--green-54);\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  border-bottom-color: var(--green-54);\n  top: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  border-left-color: var(--green-54);\n  right: -8px;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="success-large"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  border-right-color: var(--green-54);\n  left: -8px;\n}\n\n.tippy-box[data-theme~="danger-medium"] {\n  padding: var(--spacing-2) var(--spacing-2) var(--spacing-2) var(--spacing-2);\n  border-radius: var(--radius-4);\n  font-size: var(--text-10);\n  font-style: normal;\n  font-weight: var(--font-weight-600);\n  line-height: var(--leading-12);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--red-65);\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 6px 6px 0;\n  border-top-color: var(--red-65);\n  bottom: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 6px 6px;\n  border-bottom-color: var(--red-65);\n  top: -6px;\n  left: 2px;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 6px 0 6px 6px;\n  border-left-color: var(--red-65);\n  top: 2px;\n  right: -6px;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="danger-medium"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 6px 6px 6px 0;\n  border-right-color: var(--red-65);\n  top: 2px;\n  left: -6px;\n}\n\n.tippy-box[data-theme~="danger-large"] {\n  padding: var(--spacing-2) var(--spacing-3) var(--spacing-2) var(--spacing-3);\n  border-radius: var(--radius-8);\n  font-size: var(--text-12);\n  font-style: normal;\n  font-weight: var(--font-weight-400);\n  line-height: var(--leading-20);\n  font-family: var(--font-inter);\n  box-shadow: var(--shadow-neutral-shadow-round-1xl);\n  color: var(--neutral-100);\n  background-color: var(--red-65);\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="top"] > .tippy-arrow {\n  bottom: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="top"] > .tippy-arrow:before {\n  border-width: 8px 8px 0;\n  border-top-color: var(--red-65);\n  bottom: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="bottom"] > .tippy-arrow {\n  top: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="bottom"] > .tippy-arrow:before {\n  border-width: 0 8px 8px;\n  border-bottom-color: var(--red-65);\n  top: -8px;\n  left: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="left"] > .tippy-arrow {\n  right: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="left"] > .tippy-arrow:before {\n  border-width: 8px 0 8px 8px;\n  border-left-color: var(--red-65);\n  right: -8px;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="right"] > .tippy-arrow {\n  left: 0;\n}\n\n.tippy-box[data-theme~="danger-large"][data-placement^="right"] > .tippy-arrow:before {\n  border-width: 8px 8px 8px 0;\n  border-right-color: var(--red-65);\n  left: -8px;\n}\n\n@layer theme;\n\n@layer utilities {\n  .collapse {\n    visibility: collapse;\n  }\n\n  .visible {\n    visibility: visible;\n  }\n\n  .absolute {\n    position: absolute;\n  }\n\n  .fixed {\n    position: fixed;\n  }\n\n  .relative {\n    position: relative;\n  }\n\n  .static {\n    position: static;\n  }\n\n  .sticky {\n    position: sticky;\n  }\n\n  .inset-0 {\n    inset: var(--spacing-0);\n  }\n\n  .-top-6 {\n    top: calc(var(--spacing-6) * -1);\n  }\n\n  .-top-\\[40px\\] {\n    top: -40px;\n  }\n\n  .-top-\\[70px\\] {\n    top: -70px;\n  }\n\n  .top-0 {\n    top: var(--spacing-0);\n  }\n\n  .top-1\\/2 {\n    top: 50%;\n  }\n\n  .top-2 {\n    top: var(--spacing-2);\n  }\n\n  .top-4 {\n    top: var(--spacing-4);\n  }\n\n  .top-\\[72px\\] {\n    top: 72px;\n  }\n\n  .top-\\[78px\\] {\n    top: 78px;\n  }\n\n  .right-0 {\n    right: var(--spacing-0);\n  }\n\n  .right-2 {\n    right: var(--spacing-2);\n  }\n\n  .right-3 {\n    right: var(--spacing-3);\n  }\n\n  .right-4 {\n    right: var(--spacing-4);\n  }\n\n  .bottom-0 {\n    bottom: var(--spacing-0);\n  }\n\n  .bottom-7 {\n    bottom: var(--spacing-7);\n  }\n\n  .bottom-12 {\n    bottom: var(--spacing-12);\n  }\n\n  .-left-\\[257px\\] {\n    left: -257px;\n  }\n\n  .left-0 {\n    left: var(--spacing-0);\n  }\n\n  .left-3 {\n    left: var(--spacing-3);\n  }\n\n  .left-4 {\n    left: var(--spacing-4);\n  }\n\n  .left-\\[calc\\(50\\%_-_40px\\)\\] {\n    left: calc(50% - 40px);\n  }\n\n  .isolate {\n    isolation: isolate;\n  }\n\n  .z-10 {\n    z-index: 10;\n  }\n\n  .z-50 {\n    z-index: 50;\n  }\n\n  .z-\\[1\\] {\n    z-index: 1;\n  }\n\n  .z-\\[999\\] {\n    z-index: 999;\n  }\n\n  .z-\\[1000\\] {\n    z-index: 1000;\n  }\n\n  .z-\\[1001\\] {\n    z-index: 1001;\n  }\n\n  .z-\\[1010\\] {\n    z-index: 1010;\n  }\n\n  .z-\\[1011\\] {\n    z-index: 1011;\n  }\n\n  .z-\\[1012\\] {\n    z-index: 1012;\n  }\n\n  .col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n\n  .container {\n    width: 100%;\n  }\n\n  @media (min-width: 40rem) {\n    .container {\n      max-width: 40rem;\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .container {\n      max-width: 48rem;\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .container {\n      max-width: 64rem;\n    }\n  }\n\n  @media (min-width: 80rem) {\n    .container {\n      max-width: 80rem;\n    }\n  }\n\n  @media (min-width: 96rem) {\n    .container {\n      max-width: 96rem;\n    }\n  }\n\n  .mx-3 {\n    margin-inline: var(--spacing-3);\n  }\n\n  .mx-20 {\n    margin-inline: var(--spacing-20);\n  }\n\n  .mx-auto {\n    margin-inline: auto;\n  }\n\n  .my-1 {\n    margin-block: var(--spacing-1);\n  }\n\n  .my-2 {\n    margin-block: var(--spacing-2);\n  }\n\n  .my-6 {\n    margin-block: var(--spacing-6);\n  }\n\n  .my-8 {\n    margin-block: var(--spacing-8);\n  }\n\n  .prose {\n    max-width: none;\n    line-height: 1.6;\n  }\n\n  .prose p {\n    margin-top: .5em;\n    margin-bottom: .5em;\n    line-height: 1.5;\n  }\n\n  .prose hr {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose h1 {\n    margin-top: .75em;\n    margin-bottom: .5em;\n    line-height: 1.2;\n  }\n\n  .prose h2 {\n    margin-top: .65em;\n    margin-bottom: .45em;\n    line-height: 1.25;\n  }\n\n  .prose h3 {\n    margin-top: .6em;\n    margin-bottom: .4em;\n    line-height: 1.3;\n  }\n\n  .prose h4 {\n    margin-top: .5em;\n    margin-bottom: .35em;\n    line-height: 1.35;\n  }\n\n  .prose h5 {\n    margin-top: .45em;\n    margin-bottom: .3em;\n    line-height: 1.4;\n  }\n\n  .prose h6 {\n    margin-top: .4em;\n    margin-bottom: .25em;\n    line-height: 1.45;\n  }\n\n  .prose ul, .prose ol {\n    margin-top: .5em;\n    margin-bottom: .5em;\n    padding-left: 1.25em;\n  }\n\n  .prose ul ul, .prose ul ol, .prose ol ul, .prose ol ol, .prose li {\n    margin-top: .25em;\n    margin-bottom: .25em;\n  }\n\n  .prose blockquote {\n    color: inherit;\n    border-left-width: .25rem;\n    margin-top: .5em;\n    margin-bottom: .5em;\n    padding-left: 1em;\n    font-style: italic;\n  }\n\n  .prose a {\n    color: var(--tw-prose-links);\n    font-weight: 500;\n    text-decoration: underline;\n  }\n\n  .prose a:hover {\n    color: var(--tw-prose-links-hover, var(--tw-prose-links));\n    text-decoration: none;\n  }\n\n  .prose pre {\n    box-sizing: border-box;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    max-width: 100%;\n    margin-top: .5em;\n    margin-bottom: .5em;\n    line-height: 1.45;\n    overflow-x: auto;\n  }\n\n  .prose {\n    color: var(--tw-prose-body);\n    max-width: 65ch;\n  }\n\n  .prose :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n\n  .prose :where([class~="lead"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-lead);\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    font-size: 1.25em;\n    line-height: 1.6;\n  }\n\n  .prose :where(a):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-links);\n    font-weight: 500;\n    text-decoration: underline;\n  }\n\n  .prose :where(strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-bold);\n    font-weight: 600;\n  }\n\n  .prose :where(a strong):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(blockquote strong):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(thead th strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n  }\n\n  .prose :where(ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n    padding-inline-start: 1.625em;\n    list-style-type: decimal;\n  }\n\n  .prose :where(ol[type="A"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: upper-alpha;\n  }\n\n  .prose :where(ol[type="a"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: lower-alpha;\n  }\n\n  .prose :where(ol[type="A" s]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: upper-alpha;\n  }\n\n  .prose :where(ol[type="a" s]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: lower-alpha;\n  }\n\n  .prose :where(ol[type="I"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: upper-roman;\n  }\n\n  .prose :where(ol[type="i"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: lower-roman;\n  }\n\n  .prose :where(ol[type="I" s]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: upper-roman;\n  }\n\n  .prose :where(ol[type="i" s]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: lower-roman;\n  }\n\n  .prose :where(ol[type="1"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    list-style-type: decimal;\n  }\n\n  .prose :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n    padding-inline-start: 1.625em;\n    list-style-type: disc;\n  }\n\n  .prose :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *))::marker {\n    color: var(--tw-prose-counters);\n    font-weight: 400;\n  }\n\n  .prose :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *))::marker {\n    color: var(--tw-prose-bullets);\n  }\n\n  .prose :where(dt):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    margin-top: 1.25em;\n    font-weight: 600;\n  }\n\n  .prose :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    border-color: var(--tw-prose-hr);\n    border-top-width: 1px;\n    margin-top: 3em;\n    margin-bottom: 3em;\n  }\n\n  .prose :where(blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-quotes);\n    border-inline-start-width: .25rem;\n    border-inline-start-color: var(--tw-prose-quote-borders);\n    quotes: "“""”""‘""’";\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-inline-start: 1em;\n    font-style: italic;\n    font-weight: 500;\n  }\n\n  .prose :where(blockquote p:first-of-type):not(:where([class~="not-prose"], [class~="not-prose"] *)):before {\n    content: open-quote;\n  }\n\n  .prose :where(blockquote p:last-of-type):not(:where([class~="not-prose"], [class~="not-prose"] *)):after {\n    content: close-quote;\n  }\n\n  .prose :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    margin-top: 0;\n    margin-bottom: .888889em;\n    font-size: 2.25em;\n    font-weight: 800;\n    line-height: 1.11111;\n  }\n\n  .prose :where(h1 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-weight: 900;\n  }\n\n  .prose :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    margin-top: 2em;\n    margin-bottom: 1em;\n    font-size: 1.5em;\n    font-weight: 700;\n    line-height: 1.33333;\n  }\n\n  .prose :where(h2 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-weight: 800;\n  }\n\n  .prose :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    margin-top: 1.6em;\n    margin-bottom: .6em;\n    font-size: 1.25em;\n    font-weight: 600;\n    line-height: 1.6;\n  }\n\n  .prose :where(h3 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-weight: 700;\n  }\n\n  .prose :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    margin-top: 1.5em;\n    margin-bottom: .5em;\n    font-weight: 600;\n    line-height: 1.5;\n  }\n\n  .prose :where(h4 strong):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-weight: 700;\n  }\n\n  .prose :where(img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose :where(picture):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n    display: block;\n  }\n\n  .prose :where(video):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose :where(kbd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-kbd);\n    box-shadow: 0 0 0 1px var(--tw-prose-kbd-shadows), 0 3px 0 var(--tw-prose-kbd-shadows);\n    padding-top: .1875em;\n    padding-inline-end: .375em;\n    padding-bottom: .1875em;\n    border-radius: .3125rem;\n    padding-inline-start: .375em;\n    font-family: inherit;\n    font-size: .875em;\n    font-weight: 500;\n  }\n\n  .prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-code);\n    font-size: .875em;\n    font-weight: 600;\n  }\n\n  .prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)):before, .prose :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)):after {\n    content: "`";\n  }\n\n  .prose :where(a code):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(h1 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n  }\n\n  .prose :where(h2 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-size: .875em;\n  }\n\n  .prose :where(h3 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n    font-size: .9em;\n  }\n\n  .prose :where(h4 code):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(blockquote code):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(thead th code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: inherit;\n  }\n\n  .prose :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-pre-code);\n    background-color: var(--tw-prose-pre-bg);\n    padding-top: .857143em;\n    padding-inline-end: 1.14286em;\n    padding-bottom: .857143em;\n    border-radius: .375rem;\n    margin-top: 1.71429em;\n    margin-bottom: 1.71429em;\n    padding-inline-start: 1.14286em;\n    font-size: .875em;\n    font-weight: 400;\n    line-height: 1.71429;\n    overflow-x: auto;\n  }\n\n  .prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-weight: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-family: inherit;\n    line-height: inherit;\n    background-color: #0000;\n    border-width: 0;\n    border-radius: 0;\n    padding: 0;\n  }\n\n  .prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *)):before, .prose :where(pre code):not(:where([class~="not-prose"], [class~="not-prose"] *)):after {\n    content: none;\n  }\n\n  .prose :where(table):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    table-layout: auto;\n    width: 100%;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    font-size: .875em;\n    line-height: 1.71429;\n  }\n\n  .prose :where(thead):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    border-bottom-width: 1px;\n    border-bottom-color: var(--tw-prose-th-borders);\n  }\n\n  .prose :where(thead th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-headings);\n    vertical-align: bottom;\n    padding-inline-end: .571429em;\n    padding-bottom: .571429em;\n    padding-inline-start: .571429em;\n    font-weight: 600;\n  }\n\n  .prose :where(tbody tr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    border-bottom-width: 1px;\n    border-bottom-color: var(--tw-prose-td-borders);\n  }\n\n  .prose :where(tbody tr:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    border-bottom-width: 0;\n  }\n\n  .prose :where(tbody td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    vertical-align: baseline;\n  }\n\n  .prose :where(tfoot):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    border-top-width: 1px;\n    border-top-color: var(--tw-prose-th-borders);\n  }\n\n  .prose :where(tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    vertical-align: top;\n  }\n\n  .prose :where(th, td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    text-align: start;\n  }\n\n  .prose :where(figure > *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose :where(figcaption):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--tw-prose-captions);\n    margin-top: .857143em;\n    font-size: .875em;\n    line-height: 1.42857;\n  }\n\n  .prose {\n    --tw-prose-body: oklch(37.3% .034 259.733);\n    --tw-prose-headings: oklch(21% .034 264.665);\n    --tw-prose-lead: oklch(44.6% .03 256.802);\n    --tw-prose-links: oklch(21% .034 264.665);\n    --tw-prose-bold: oklch(21% .034 264.665);\n    --tw-prose-counters: oklch(55.1% .027 264.364);\n    --tw-prose-bullets: oklch(87.2% .01 258.338);\n    --tw-prose-hr: oklch(92.8% .006 264.531);\n    --tw-prose-quotes: oklch(21% .034 264.665);\n    --tw-prose-quote-borders: oklch(92.8% .006 264.531);\n    --tw-prose-captions: oklch(55.1% .027 264.364);\n    --tw-prose-kbd: oklch(21% .034 264.665);\n    --tw-prose-kbd-shadows: oklab(21% -.00316127 -.0338527 / .1);\n    --tw-prose-code: oklch(21% .034 264.665);\n    --tw-prose-pre-code: oklch(92.8% .006 264.531);\n    --tw-prose-pre-bg: oklch(27.8% .033 256.848);\n    --tw-prose-th-borders: oklch(87.2% .01 258.338);\n    --tw-prose-td-borders: oklch(92.8% .006 264.531);\n    --tw-prose-invert-body: oklch(87.2% .01 258.338);\n    --tw-prose-invert-headings: #fff;\n    --tw-prose-invert-lead: oklch(70.7% .022 261.325);\n    --tw-prose-invert-links: #fff;\n    --tw-prose-invert-bold: #fff;\n    --tw-prose-invert-counters: oklch(70.7% .022 261.325);\n    --tw-prose-invert-bullets: oklch(44.6% .03 256.802);\n    --tw-prose-invert-hr: oklch(37.3% .034 259.733);\n    --tw-prose-invert-quotes: oklch(96.7% .003 264.542);\n    --tw-prose-invert-quote-borders: oklch(37.3% .034 259.733);\n    --tw-prose-invert-captions: oklch(70.7% .022 261.325);\n    --tw-prose-invert-kbd: #fff;\n    --tw-prose-invert-kbd-shadows: #ffffff1a;\n    --tw-prose-invert-code: #fff;\n    --tw-prose-invert-pre-code: oklch(87.2% .01 258.338);\n    --tw-prose-invert-pre-bg: #00000080;\n    --tw-prose-invert-th-borders: oklch(44.6% .03 256.802);\n    --tw-prose-invert-td-borders: oklch(37.3% .034 259.733);\n    font-size: 1rem;\n    line-height: 1.75;\n  }\n\n  .prose :where(picture > img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose :where(li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .5em;\n    margin-bottom: .5em;\n  }\n\n  .prose :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: .375em;\n  }\n\n  .prose :where(.prose > ul > li p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .75em;\n    margin-bottom: .75em;\n  }\n\n  .prose :where(.prose > ul > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n  }\n\n  .prose :where(.prose > ul > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.25em;\n  }\n\n  .prose :where(.prose > ol > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n  }\n\n  .prose :where(.prose > ol > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.25em;\n  }\n\n  .prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .75em;\n    margin-bottom: .75em;\n  }\n\n  .prose :where(dl):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n\n  .prose :where(dd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .5em;\n    padding-inline-start: 1.625em;\n  }\n\n  .prose :where(hr + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(h2 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(h3 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose :where(h4 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose :where(thead th:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose :where(thead th:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose :where(tbody td, tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .571429em;\n    padding-inline-end: .571429em;\n    padding-bottom: .571429em;\n    padding-inline-start: .571429em;\n  }\n\n  .prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose :where(figure):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose :where(.prose > :first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose :where(.prose > :last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 0;\n  }\n\n  .prose-base {\n    font-size: 1rem;\n    line-height: 1.75;\n  }\n\n  .prose-base :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n\n  .prose-base :where([class~="lead"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.2em;\n    margin-bottom: 1.2em;\n    font-size: 1.25em;\n    line-height: 1.6;\n  }\n\n  .prose-base :where(blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.6em;\n    margin-bottom: 1.6em;\n    padding-inline-start: 1em;\n  }\n\n  .prose-base :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: .888889em;\n    font-size: 2.25em;\n    line-height: 1.11111;\n  }\n\n  .prose-base :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 1em;\n    font-size: 1.5em;\n    line-height: 1.33333;\n  }\n\n  .prose-base :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.6em;\n    margin-bottom: .6em;\n    font-size: 1.25em;\n    line-height: 1.6;\n  }\n\n  .prose-base :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.5em;\n    margin-bottom: .5em;\n    line-height: 1.5;\n  }\n\n  .prose-base :where(img):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(picture):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose-base :where(picture > img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose-base :where(video):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose-base :where(kbd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .1875em;\n    padding-inline-end: .375em;\n    padding-bottom: .1875em;\n    border-radius: .3125rem;\n    padding-inline-start: .375em;\n    font-size: .875em;\n  }\n\n  .prose-base :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(h2 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .875em;\n  }\n\n  .prose-base :where(h3 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .9em;\n  }\n\n  .prose-base :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .857143em;\n    padding-inline-end: 1.14286em;\n    padding-bottom: .857143em;\n    border-radius: .375rem;\n    margin-top: 1.71429em;\n    margin-bottom: 1.71429em;\n    padding-inline-start: 1.14286em;\n    font-size: .875em;\n    line-height: 1.71429;\n  }\n\n  .prose-base :where(ol):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n    padding-inline-start: 1.625em;\n  }\n\n  .prose-base :where(li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .5em;\n    margin-bottom: .5em;\n  }\n\n  .prose-base :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: .375em;\n  }\n\n  .prose-base :where(.prose-base > ul > li p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .75em;\n    margin-bottom: .75em;\n  }\n\n  .prose-base :where(.prose-base > ul > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n  }\n\n  .prose-base :where(.prose-base > ul > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.25em;\n  }\n\n  .prose-base :where(.prose-base > ol > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n  }\n\n  .prose-base :where(.prose-base > ol > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.25em;\n  }\n\n  .prose-base :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .75em;\n    margin-bottom: .75em;\n  }\n\n  .prose-base :where(dl):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n    margin-bottom: 1.25em;\n  }\n\n  .prose-base :where(dt):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.25em;\n  }\n\n  .prose-base :where(dd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .5em;\n    padding-inline-start: 1.625em;\n  }\n\n  .prose-base :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 3em;\n    margin-bottom: 3em;\n  }\n\n  .prose-base :where(hr + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(h2 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(h3 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-base :where(h4 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose-base :where(table):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .875em;\n    line-height: 1.71429;\n  }\n\n  .prose-base :where(thead th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: .571429em;\n    padding-bottom: .571429em;\n    padding-inline-start: .571429em;\n  }\n\n  .prose-base :where(thead th:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose-base :where(thead th:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose-base :where(tbody td, tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .571429em;\n    padding-inline-end: .571429em;\n    padding-bottom: .571429em;\n    padding-inline-start: .571429em;\n  }\n\n  .prose-base :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose-base :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose-base :where(figure):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 2em;\n    margin-bottom: 2em;\n  }\n\n  .prose-base :where(figure > *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose-base :where(figcaption):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .857143em;\n    font-size: .875em;\n    line-height: 1.42857;\n  }\n\n  .prose-base :where(.prose-base > :first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose-base :where(.prose-base > :last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 0;\n  }\n\n  .prose-lg {\n    font-size: 1.125rem;\n    line-height: 1.77778;\n  }\n\n  .prose-lg :where(p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n    margin-bottom: 1.33333em;\n  }\n\n  .prose-lg :where([class~="lead"]):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.09091em;\n    margin-bottom: 1.09091em;\n    font-size: 1.22222em;\n    line-height: 1.45455;\n  }\n\n  .prose-lg :where(blockquote):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.66667em;\n    margin-bottom: 1.66667em;\n    padding-inline-start: 1em;\n  }\n\n  .prose-lg :where(h1):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: .833333em;\n    font-size: 2.66667em;\n    line-height: 1;\n  }\n\n  .prose-lg :where(h2):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.86667em;\n    margin-bottom: 1.06667em;\n    font-size: 1.66667em;\n    line-height: 1.33333;\n  }\n\n  .prose-lg :where(h3):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.66667em;\n    margin-bottom: .666667em;\n    font-size: 1.33333em;\n    line-height: 1.5;\n  }\n\n  .prose-lg :where(h4):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.77778em;\n    margin-bottom: .444444em;\n    line-height: 1.55556;\n  }\n\n  .prose-lg :where(img):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(picture):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.77778em;\n    margin-bottom: 1.77778em;\n  }\n\n  .prose-lg :where(picture > img):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose-lg :where(video):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.77778em;\n    margin-bottom: 1.77778em;\n  }\n\n  .prose-lg :where(kbd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .222222em;\n    padding-inline-end: .444444em;\n    padding-bottom: .222222em;\n    border-radius: .3125rem;\n    padding-inline-start: .444444em;\n    font-size: .888889em;\n  }\n\n  .prose-lg :where(code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .888889em;\n  }\n\n  .prose-lg :where(h2 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .866667em;\n  }\n\n  .prose-lg :where(h3 code):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .875em;\n  }\n\n  .prose-lg :where(pre):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: 1em;\n    padding-inline-end: 1.5em;\n    padding-bottom: 1em;\n    border-radius: .375rem;\n    margin-top: 2em;\n    margin-bottom: 2em;\n    padding-inline-start: 1.5em;\n    font-size: .888889em;\n    line-height: 1.75;\n  }\n\n  .prose-lg :where(ol):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(ul):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n    margin-bottom: 1.33333em;\n    padding-inline-start: 1.55556em;\n  }\n\n  .prose-lg :where(li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .666667em;\n    margin-bottom: .666667em;\n  }\n\n  .prose-lg :where(ol > li):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(ul > li):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: .444444em;\n  }\n\n  .prose-lg :where(.prose-lg > ul > li p):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .888889em;\n    margin-bottom: .888889em;\n  }\n\n  .prose-lg :where(.prose-lg > ul > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n  }\n\n  .prose-lg :where(.prose-lg > ul > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.33333em;\n  }\n\n  .prose-lg :where(.prose-lg > ol > li > p:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n  }\n\n  .prose-lg :where(.prose-lg > ol > li > p:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 1.33333em;\n  }\n\n  .prose-lg :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .888889em;\n    margin-bottom: .888889em;\n  }\n\n  .prose-lg :where(dl):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n    margin-bottom: 1.33333em;\n  }\n\n  .prose-lg :where(dt):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.33333em;\n  }\n\n  .prose-lg :where(dd):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: .666667em;\n    padding-inline-start: 1.55556em;\n  }\n\n  .prose-lg :where(hr):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 3.11111em;\n    margin-bottom: 3.11111em;\n  }\n\n  .prose-lg :where(hr + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(h2 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(h3 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)), .prose-lg :where(h4 + *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose-lg :where(table):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    font-size: .888889em;\n    line-height: 1.5;\n  }\n\n  .prose-lg :where(thead th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: .75em;\n    padding-bottom: .75em;\n    padding-inline-start: .75em;\n  }\n\n  .prose-lg :where(thead th:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose-lg :where(thead th:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose-lg :where(tbody td, tfoot td):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-top: .75em;\n    padding-inline-end: .75em;\n    padding-bottom: .75em;\n    padding-inline-start: .75em;\n  }\n\n  .prose-lg :where(tbody td:first-child, tfoot td:first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-start: 0;\n  }\n\n  .prose-lg :where(tbody td:last-child, tfoot td:last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    padding-inline-end: 0;\n  }\n\n  .prose-lg :where(figure):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1.77778em;\n    margin-bottom: 1.77778em;\n  }\n\n  .prose-lg :where(figure > *):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n\n  .prose-lg :where(figcaption):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 1em;\n    font-size: .888889em;\n    line-height: 1.5;\n  }\n\n  .prose-lg :where(.prose-lg > :first-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-top: 0;\n  }\n\n  .prose-lg :where(.prose-lg > :last-child):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    margin-bottom: 0;\n  }\n\n  .-mt-\\[56px\\] {\n    margin-top: -56px;\n  }\n\n  .mt-0 {\n    margin-top: var(--spacing-0);\n  }\n\n  .mt-1 {\n    margin-top: var(--spacing-1);\n  }\n\n  .mt-2 {\n    margin-top: var(--spacing-2);\n  }\n\n  .mt-4 {\n    margin-top: var(--spacing-4);\n  }\n\n  .mt-6 {\n    margin-top: var(--spacing-6);\n  }\n\n  .mt-8 {\n    margin-top: var(--spacing-8);\n  }\n\n  .mt-20 {\n    margin-top: var(--spacing-20);\n  }\n\n  .mt-\\[1px\\] {\n    margin-top: 1px;\n  }\n\n  .mr-1 {\n    margin-right: var(--spacing-1);\n  }\n\n  .mr-2 {\n    margin-right: var(--spacing-2);\n  }\n\n  .mr-3 {\n    margin-right: var(--spacing-3);\n  }\n\n  .mr-4 {\n    margin-right: var(--spacing-4);\n  }\n\n  .-mb-2 {\n    margin-bottom: calc(var(--spacing-2) * -1);\n  }\n\n  .-mb-3 {\n    margin-bottom: calc(var(--spacing-3) * -1);\n  }\n\n  .-mb-6 {\n    margin-bottom: calc(var(--spacing-6) * -1);\n  }\n\n  .mb-1 {\n    margin-bottom: var(--spacing-1);\n  }\n\n  .mb-1\\.5 {\n    margin-bottom: calc(var(--spacing) * 1.5);\n  }\n\n  .mb-2 {\n    margin-bottom: var(--spacing-2);\n  }\n\n  .mb-4 {\n    margin-bottom: var(--spacing-4);\n  }\n\n  .mb-8 {\n    margin-bottom: var(--spacing-8);\n  }\n\n  .ml-1 {\n    margin-left: var(--spacing-1);\n  }\n\n  .ml-1\\.5 {\n    margin-left: calc(var(--spacing) * 1.5);\n  }\n\n  .ml-2 {\n    margin-left: var(--spacing-2);\n  }\n\n  .ml-3 {\n    margin-left: var(--spacing-3);\n  }\n\n  .ml-\\[2px\\] {\n    margin-left: 2px;\n  }\n\n  .ml-\\[6px\\] {\n    margin-left: 6px;\n  }\n\n  .\\!flex {\n    display: flex !important;\n  }\n\n  .\\!hidden {\n    display: none !important;\n  }\n\n  .block {\n    display: block;\n  }\n\n  .contents {\n    display: contents;\n  }\n\n  .flex {\n    display: flex;\n  }\n\n  .grid {\n    display: grid;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .inline {\n    display: inline;\n  }\n\n  .inline-block {\n    display: inline-block;\n  }\n\n  .inline-flex {\n    display: inline-flex;\n  }\n\n  .table {\n    display: table;\n  }\n\n  .size-4 {\n    width: var(--spacing-4);\n    height: var(--spacing-4);\n  }\n\n  .size-\\[200px\\] {\n    width: 200px;\n    height: 200px;\n  }\n\n  .size-\\[300px\\] {\n    width: 300px;\n    height: 300px;\n  }\n\n  .size-full {\n    width: 100%;\n    height: 100%;\n  }\n\n  .h-2 {\n    height: var(--spacing-2);\n  }\n\n  .h-3 {\n    height: var(--spacing-3);\n  }\n\n  .h-4 {\n    height: var(--spacing-4);\n  }\n\n  .h-5 {\n    height: var(--spacing-5);\n  }\n\n  .h-6 {\n    height: var(--spacing-6);\n  }\n\n  .h-7 {\n    height: var(--spacing-7);\n  }\n\n  .h-8 {\n    height: var(--spacing-8);\n  }\n\n  .h-9 {\n    height: var(--spacing-9);\n  }\n\n  .h-10 {\n    height: var(--spacing-10);\n  }\n\n  .h-12 {\n    height: var(--spacing-12);\n  }\n\n  .h-14 {\n    height: var(--spacing-14);\n  }\n\n  .h-17 {\n    height: var(--spacing-17);\n  }\n\n  .h-20 {\n    height: var(--spacing-20);\n  }\n\n  .h-24 {\n    height: var(--spacing-24);\n  }\n\n  .h-30 {\n    height: var(--spacing-30);\n  }\n\n  .h-78 {\n    height: var(--height-78);\n  }\n\n  .h-\\[2px\\] {\n    height: 2px;\n  }\n\n  .h-\\[10px\\] {\n    height: 10px;\n  }\n\n  .h-\\[12px\\] {\n    height: 12px;\n  }\n\n  .h-\\[17px\\] {\n    height: 17px;\n  }\n\n  .h-\\[20px\\] {\n    height: 20px;\n  }\n\n  .h-\\[26px\\] {\n    height: 26px;\n  }\n\n  .h-\\[32px\\] {\n    height: 32px;\n  }\n\n  .h-\\[34px\\] {\n    height: 34px;\n  }\n\n  .h-\\[56px\\] {\n    height: 56px;\n  }\n\n  .h-\\[60\\%\\] {\n    height: 60%;\n  }\n\n  .h-\\[70px\\] {\n    height: 70px;\n  }\n\n  .h-\\[83\\.3\\%\\] {\n    height: 83.3%;\n  }\n\n  .h-\\[100vh\\] {\n    height: 100vh;\n  }\n\n  .h-\\[200px\\] {\n    height: 200px;\n  }\n\n  .h-\\[300px\\] {\n    height: 300px;\n  }\n\n  .h-\\[600px\\] {\n    height: 600px;\n  }\n\n  .h-\\[inherit\\] {\n    height: inherit;\n  }\n\n  .h-\\[initial\\] {\n    height: initial;\n  }\n\n  .h-full {\n    height: 100%;\n  }\n\n  .h-screen {\n    height: 100vh;\n  }\n\n  .max-h-52 {\n    max-height: calc(var(--spacing) * 52);\n  }\n\n  .max-h-64 {\n    max-height: calc(var(--spacing) * 64);\n  }\n\n  .min-h-7 {\n    min-height: var(--spacing-7);\n  }\n\n  .min-h-10 {\n    min-height: var(--spacing-10);\n  }\n\n  .min-h-12 {\n    min-height: var(--spacing-12);\n  }\n\n  .min-h-\\[38px\\] {\n    min-height: 38px;\n  }\n\n  .min-h-\\[92px\\] {\n    min-height: 92px;\n  }\n\n  .min-h-\\[129px\\] {\n    min-height: 129px;\n  }\n\n  .min-h-\\[158px\\] {\n    min-height: 158px;\n  }\n\n  .min-h-\\[200px\\] {\n    min-height: 200px;\n  }\n\n  .min-h-\\[inherit\\] {\n    min-height: inherit;\n  }\n\n  .min-h-full {\n    min-height: 100%;\n  }\n\n  .min-h-screen {\n    min-height: 100vh;\n  }\n\n  .w-0\\.5 {\n    width: calc(var(--spacing) * .5);\n  }\n\n  .w-2 {\n    width: var(--spacing-2);\n  }\n\n  .w-3 {\n    width: var(--spacing-3);\n  }\n\n  .w-4 {\n    width: var(--spacing-4);\n  }\n\n  .w-5 {\n    width: var(--spacing-5);\n  }\n\n  .w-6 {\n    width: var(--spacing-6);\n  }\n\n  .w-7 {\n    width: var(--spacing-7);\n  }\n\n  .w-8 {\n    width: var(--spacing-8);\n  }\n\n  .w-9 {\n    width: var(--spacing-9);\n  }\n\n  .w-10 {\n    width: var(--spacing-10);\n  }\n\n  .w-12 {\n    width: var(--spacing-12);\n  }\n\n  .w-14 {\n    width: var(--spacing-14);\n  }\n\n  .w-20 {\n    width: var(--spacing-20);\n  }\n\n  .w-24 {\n    width: var(--spacing-24);\n  }\n\n  .w-30 {\n    width: var(--spacing-30);\n  }\n\n  .w-\\[1\\%\\] {\n    width: 1%;\n  }\n\n  .w-\\[1px\\] {\n    width: 1px;\n  }\n\n  .w-\\[10px\\] {\n    width: 10px;\n  }\n\n  .w-\\[12px\\] {\n    width: 12px;\n  }\n\n  .w-\\[17px\\] {\n    width: 17px;\n  }\n\n  .w-\\[18px\\] {\n    width: 18px;\n  }\n\n  .w-\\[20px\\] {\n    width: 20px;\n  }\n\n  .w-\\[26px\\] {\n    width: 26px;\n  }\n\n  .w-\\[28px\\] {\n    width: 28px;\n  }\n\n  .w-\\[32px\\] {\n    width: 32px;\n  }\n\n  .w-\\[40px\\] {\n    width: 40px;\n  }\n\n  .w-\\[48px\\] {\n    width: 48px;\n  }\n\n  .w-\\[60\\%\\] {\n    width: 60%;\n  }\n\n  .w-\\[83\\.3\\%\\] {\n    width: 83.3%;\n  }\n\n  .w-\\[92px\\] {\n    width: 92px;\n  }\n\n  .w-\\[96px\\] {\n    width: 96px;\n  }\n\n  .w-\\[100vw\\] {\n    width: 100vw;\n  }\n\n  .w-\\[121px\\] {\n    width: 121px;\n  }\n\n  .w-\\[153px\\] {\n    width: 153px;\n  }\n\n  .w-\\[180px\\] {\n    width: 180px;\n  }\n\n  .w-\\[190px\\] {\n    width: 190px;\n  }\n\n  .w-\\[210px\\] {\n    width: 210px;\n  }\n\n  .w-\\[260px\\] {\n    width: 260px;\n  }\n\n  .w-\\[300px\\] {\n    width: 300px;\n  }\n\n  .w-\\[350px\\] {\n    width: 350px;\n  }\n\n  .w-\\[352px\\] {\n    width: 352px;\n  }\n\n  .w-\\[500px\\] {\n    width: 500px;\n  }\n\n  .w-\\[849px\\] {\n    width: 849px;\n  }\n\n  .w-\\[876px\\] {\n    width: 876px;\n  }\n\n  .w-\\[inherit\\] {\n    width: inherit;\n  }\n\n  .w-full {\n    width: 100%;\n  }\n\n  .w-max {\n    width: -moz-max-content;\n    width: max-content;\n  }\n\n  .w-screen {\n    width: 100vw;\n  }\n\n  .prose-base, .prose-lg {\n    max-width: none;\n    line-height: 1.6;\n  }\n\n  .max-w-\\[200px\\] {\n    max-width: 200px;\n  }\n\n  .max-w-\\[300px\\] {\n    max-width: 300px;\n  }\n\n  .max-w-full {\n    max-width: 100%;\n  }\n\n  .max-w-none {\n    max-width: none;\n  }\n\n  .max-w-sm {\n    max-width: var(--container-sm);\n  }\n\n  .min-w-6 {\n    min-width: var(--spacing-6);\n  }\n\n  .min-w-8 {\n    min-width: var(--spacing-8);\n  }\n\n  .min-w-\\[120px\\] {\n    min-width: 120px;\n  }\n\n  .min-w-\\[200px\\] {\n    min-width: 200px;\n  }\n\n  .min-w-full {\n    min-width: 100%;\n  }\n\n  .shrink {\n    flex-shrink: 1;\n  }\n\n  .shrink-0 {\n    flex-shrink: 0;\n  }\n\n  .translate-x-4 {\n    --tw-translate-x: var(--spacing-4);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .-translate-y-1\\/2 {\n    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .rotate-180 {\n    rotate: 180deg;\n  }\n\n  .transform {\n    transform: var(--tw-rotate-x, ) var(--tw-rotate-y, ) var(--tw-rotate-z, ) var(--tw-skew-x, ) var(--tw-skew-y, );\n  }\n\n  .animate-\\[name\\] {\n    animation: name;\n  }\n\n  .animate-bounce {\n    animation: var(--animate-bounce);\n  }\n\n  .animate-bounce2 {\n    animation: var(--animate-bounce2);\n  }\n\n  .animate-fade-in {\n    animation: var(--animate-fade-in);\n  }\n\n  .animate-ping {\n    animation: var(--animate-ping);\n  }\n\n  .animate-pulse {\n    animation: var(--animate-pulse);\n  }\n\n  .animate-pulse-resize {\n    animation: var(--animate-pulse-resize);\n  }\n\n  .animate-resize-in {\n    animation: var(--animate-resize-in);\n  }\n\n  .animate-spin {\n    animation: var(--animate-spin);\n  }\n\n  .cursor-default {\n    cursor: default;\n  }\n\n  .cursor-help {\n    cursor: help;\n  }\n\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n\n  .cursor-pointer {\n    cursor: pointer;\n  }\n\n  .touch-pan-y {\n    --tw-pan-y: pan-y;\n    touch-action: var(--tw-pan-x, ) var(--tw-pan-y, ) var(--tw-pinch-zoom, );\n  }\n\n  .resize {\n    resize: both;\n  }\n\n  .resize-none {\n    resize: none;\n  }\n\n  .appearance-none {\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n\n  .grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n\n  .grid-cols-\\[28px_auto\\] {\n    grid-template-columns: 28px auto;\n  }\n\n  .grid-cols-\\[40px_auto\\] {\n    grid-template-columns: 40px auto;\n  }\n\n  .grid-cols-\\[48px_auto\\] {\n    grid-template-columns: 48px auto;\n  }\n\n  .grid-cols-\\[minmax\\(max-content\\,35\\%\\)_auto_minmax\\(max-content\\,35\\%\\)\\] {\n    grid-template-columns: minmax(max-content, 35%) auto minmax(max-content, 35%);\n  }\n\n  .grid-rows-2 {\n    grid-template-rows: repeat(2, minmax(0, 1fr));\n  }\n\n  .grid-rows-\\[1fr_auto\\] {\n    grid-template-rows: 1fr auto;\n  }\n\n  .grid-rows-\\[auto_1fr\\] {\n    grid-template-rows: auto 1fr;\n  }\n\n  .grid-rows-\\[max-content\\] {\n    grid-template-rows: max-content;\n  }\n\n  .grid-rows-\\[max-content_auto\\] {\n    grid-template-rows: max-content auto;\n  }\n\n  .flex-col {\n    flex-direction: column;\n  }\n\n  .flex-row {\n    flex-direction: row;\n  }\n\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n\n  .items-center {\n    align-items: center;\n  }\n\n  .items-end {\n    align-items: flex-end;\n  }\n\n  .justify-between {\n    justify-content: space-between;\n  }\n\n  .justify-center {\n    justify-content: center;\n  }\n\n  .justify-end {\n    justify-content: flex-end;\n  }\n\n  .gap-1 {\n    gap: var(--spacing-1);\n  }\n\n  .gap-1\\.5 {\n    gap: calc(var(--spacing) * 1.5);\n  }\n\n  .gap-2 {\n    gap: var(--spacing-2);\n  }\n\n  .gap-3 {\n    gap: var(--spacing-3);\n  }\n\n  .gap-4 {\n    gap: var(--spacing-4);\n  }\n\n  .gap-5 {\n    gap: var(--spacing-5);\n  }\n\n  .gap-6 {\n    gap: var(--spacing-6);\n  }\n\n  .gap-8 {\n    gap: var(--spacing-8);\n  }\n\n  .gap-10 {\n    gap: var(--spacing-10);\n  }\n\n  .gap-16 {\n    gap: var(--spacing-16);\n  }\n\n  :where(.space-y-3 > :not(:last-child)) {\n    --tw-space-y-reverse: 0;\n    margin-block-start: calc(var(--spacing-3) * var(--tw-space-y-reverse));\n    margin-block-end: calc(var(--spacing-3) * calc(1 - var(--tw-space-y-reverse)));\n  }\n\n  .truncate {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .overflow-hidden {\n    overflow: hidden;\n  }\n\n  .overflow-y-auto {\n    overflow-y: auto;\n  }\n\n  .overflow-y-scroll {\n    overflow-y: scroll;\n  }\n\n  .overscroll-none {\n    overscroll-behavior: none;\n  }\n\n  .rounded {\n    border-radius: .25rem;\n  }\n\n  .rounded-0 {\n    border-radius: var(--radius-0);\n  }\n\n  .rounded-4 {\n    border-radius: var(--radius-4);\n  }\n\n  .rounded-8 {\n    border-radius: var(--radius-8);\n  }\n\n  .rounded-10 {\n    border-radius: var(--radius-10);\n  }\n\n  .rounded-12 {\n    border-radius: var(--radius-12);\n  }\n\n  .rounded-14 {\n    border-radius: var(--radius-14);\n  }\n\n  .rounded-24 {\n    border-radius: var(--radius-24);\n  }\n\n  .rounded-\\[2px\\] {\n    border-radius: 2px;\n  }\n\n  .rounded-\\[10px\\] {\n    border-radius: 10px;\n  }\n\n  .rounded-\\[14px\\] {\n    border-radius: 14px;\n  }\n\n  .rounded-\\[50\\%\\] {\n    border-radius: 50%;\n  }\n\n  .rounded-\\[56px\\] {\n    border-radius: 56px;\n  }\n\n  .rounded-\\[103px_103px_0_0\\] {\n    border-radius: 103px 103px 0 0;\n  }\n\n  .rounded-\\[inherit\\] {\n    border-radius: inherit;\n  }\n\n  .rounded-full {\n    border-radius: 3.40282e38px;\n  }\n\n  .rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n\n  .rounded-md {\n    border-radius: var(--radius-md);\n  }\n\n  .rounded-s-24 {\n    border-start-start-radius: var(--radius-24);\n    border-end-start-radius: var(--radius-24);\n  }\n\n  .rounded-e-24 {\n    border-start-end-radius: var(--radius-24);\n    border-end-end-radius: var(--radius-24);\n  }\n\n  .rounded-t-0 {\n    border-top-left-radius: var(--radius-0);\n    border-top-right-radius: var(--radius-0);\n  }\n\n  .rounded-t-\\[inherit\\] {\n    border-top-left-radius: inherit;\n    border-top-right-radius: inherit;\n  }\n\n  .\\!rounded-r-0 {\n    border-top-right-radius: var(--radius-0) !important;\n    border-bottom-right-radius: var(--radius-0) !important;\n  }\n\n  .rounded-r-8 {\n    border-top-right-radius: var(--radius-8);\n    border-bottom-right-radius: var(--radius-8);\n  }\n\n  .rounded-r-10 {\n    border-top-right-radius: var(--radius-10);\n    border-bottom-right-radius: var(--radius-10);\n  }\n\n  .rounded-r-12 {\n    border-top-right-radius: var(--radius-12);\n    border-bottom-right-radius: var(--radius-12);\n  }\n\n  .rounded-r-\\[10px\\] {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n\n  .rounded-r-\\[14px\\] {\n    border-top-right-radius: 14px;\n    border-bottom-right-radius: 14px;\n  }\n\n  .rounded-b-0 {\n    border-bottom-right-radius: var(--radius-0);\n    border-bottom-left-radius: var(--radius-0);\n  }\n\n  .rounded-b-\\[inherit\\] {\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n  }\n\n  .border {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .border-0 {\n    border-style: var(--tw-border-style);\n    border-width: 0;\n  }\n\n  .border-2 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n\n  .border-\\[1px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n\n  .border-\\[3px\\] {\n    border-style: var(--tw-border-style);\n    border-width: 3px;\n  }\n\n  .\\!border-r-0 {\n    border-right-style: var(--tw-border-style) !important;\n    border-right-width: 0 !important;\n  }\n\n  .border-r {\n    border-right-style: var(--tw-border-style);\n    border-right-width: 1px;\n  }\n\n  .border-b {\n    border-bottom-style: var(--tw-border-style);\n    border-bottom-width: 1px;\n  }\n\n  .border-l {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 1px;\n  }\n\n  .border-l-0 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 0;\n  }\n\n  .border-l-4 {\n    border-left-style: var(--tw-border-style);\n    border-left-width: 4px;\n  }\n\n  .border-none {\n    --tw-border-style: none;\n    border-style: none;\n  }\n\n  .border-solid {\n    --tw-border-style: solid;\n    border-style: solid;\n  }\n\n  .\\!border-red-65 {\n    border-color: var(--color-red-65) !important;\n  }\n\n  .border-\\[rgba\\(255\\,255\\,255\\,0\\.8\\)\\] {\n    border-color: #fffc;\n  }\n\n  .border-gray-500 {\n    border-color: var(--color-gray-500);\n  }\n\n  .border-green-54 {\n    border-color: var(--color-green-54);\n  }\n\n  .border-green-600 {\n    border-color: var(--color-green-600);\n  }\n\n  .border-neutral-20 {\n    border-color: var(--color-neutral-20);\n  }\n\n  .border-neutral-35 {\n    border-color: var(--color-neutral-35);\n  }\n\n  .border-neutral-60 {\n    border-color: var(--color-neutral-60);\n  }\n\n  .border-neutral-90 {\n    border-color: var(--color-neutral-90);\n  }\n\n  .border-neutral-100 {\n    border-color: var(--color-neutral-100);\n  }\n\n  .border-orange-600 {\n    border-color: var(--color-orange-600);\n  }\n\n  .border-purple-51 {\n    border-color: var(--color-purple-51);\n  }\n\n  .border-red-55 {\n    border-color: var(--color-red-55);\n  }\n\n  .border-red-65 {\n    border-color: var(--color-red-65);\n  }\n\n  .border-red-85 {\n    border-color: var(--color-red-85);\n  }\n\n  .border-red-600 {\n    border-color: var(--color-red-600);\n  }\n\n  .border-yellow-55 {\n    border-color: var(--color-yellow-55);\n  }\n\n  .border-yellow-600 {\n    border-color: var(--color-yellow-600);\n  }\n\n  .border-b-neutral-90 {\n    border-bottom-color: var(--color-neutral-90);\n  }\n\n  .border-b-neutral-95 {\n    border-bottom-color: var(--color-neutral-95);\n  }\n\n  .border-l-purple-82 {\n    border-left-color: var(--color-purple-82);\n  }\n\n  .\\!bg-red-65 {\n    background-color: var(--color-red-65) !important;\n  }\n\n  .\\!bg-transparent {\n    background-color: #0000 !important;\n  }\n\n  .bg-\\[rgba\\(36\\,53\\,66\\,0\\.8\\)\\] {\n    background-color: #243542cc;\n  }\n\n  .bg-blue-95 {\n    background-color: var(--color-blue-95);\n  }\n\n  .bg-gray-100 {\n    background-color: var(--color-gray-100);\n  }\n\n  .bg-green-54 {\n    background-color: var(--color-green-54);\n  }\n\n  .bg-green-85 {\n    background-color: var(--color-green-85);\n  }\n\n  .bg-green-95 {\n    background-color: var(--color-green-95);\n  }\n\n  .bg-honey-92 {\n    background-color: var(--color-honey-92);\n  }\n\n  .bg-neutral-10\\/10 {\n    background-color: #121b211a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-10\\/10 {\n      background-color: color-mix(in oklab, var(--color-neutral-10) 10%, transparent);\n    }\n  }\n\n  .bg-neutral-20 {\n    background-color: var(--color-neutral-20);\n  }\n\n  .bg-neutral-20\\/10 {\n    background-color: #2435421a;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-20\\/10 {\n      background-color: color-mix(in oklab, var(--color-neutral-20) 10%, transparent);\n    }\n  }\n\n  .bg-neutral-20\\/20 {\n    background-color: #24354233;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .bg-neutral-20\\/20 {\n      background-color: color-mix(in oklab, var(--color-neutral-20) 20%, transparent);\n    }\n  }\n\n  .bg-neutral-90 {\n    background-color: var(--color-neutral-90);\n  }\n\n  .bg-neutral-95 {\n    background-color: var(--color-neutral-95);\n  }\n\n  .bg-neutral-97 {\n    background-color: var(--color-neutral-97);\n  }\n\n  .bg-neutral-98 {\n    background-color: var(--color-neutral-98);\n  }\n\n  .bg-neutral-100 {\n    background-color: var(--color-neutral-100);\n  }\n\n  .bg-purple-51 {\n    background-color: var(--color-purple-51);\n  }\n\n  .bg-purple-63 {\n    background-color: var(--color-purple-63);\n  }\n\n  .bg-red-55 {\n    background-color: var(--color-red-55);\n  }\n\n  .bg-red-85 {\n    background-color: var(--color-red-85);\n  }\n\n  .bg-red-95 {\n    background-color: var(--color-red-95);\n  }\n\n  .bg-transparent {\n    background-color: #0000;\n  }\n\n  .bg-warm-97 {\n    background-color: var(--color-warm-97);\n  }\n\n  .bg-white {\n    background-color: var(--color-white);\n  }\n\n  .bg-yellow-55 {\n    background-color: var(--color-yellow-55);\n  }\n\n  .bg-yellow-65 {\n    background-color: var(--color-yellow-65);\n  }\n\n  .bg-yellow-85 {\n    background-color: var(--color-yellow-85);\n  }\n\n  .bg-gradient-to-b {\n    --tw-gradient-position: to bottom in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .bg-gradient-to-r {\n    --tw-gradient-position: to right in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .from-gradient-1-start {\n    --tw-gradient-from: var(--color-gradient-1-start);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .from-transparent {\n    --tw-gradient-from: transparent;\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-gradient-1-end {\n    --tw-gradient-to: var(--color-gradient-1-end);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .to-neutral-100\\/80 {\n    --tw-gradient-to: #fffc;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .to-neutral-100\\/80 {\n      --tw-gradient-to: color-mix(in oklab, var(--color-neutral-100) 80%, transparent);\n    }\n  }\n\n  .to-neutral-100\\/80 {\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .bg-cover {\n    background-size: cover;\n  }\n\n  .bg-clip-text {\n    -webkit-background-clip: text;\n    background-clip: text;\n  }\n\n  .bg-\\[50\\%\\] {\n    background-position: 50%;\n  }\n\n  .bg-center {\n    background-position: center;\n  }\n\n  .bg-no-repeat {\n    background-repeat: no-repeat;\n  }\n\n  .object-cover {\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .\\!p-0 {\n    padding: var(--spacing-0) !important;\n  }\n\n  .p-0 {\n    padding: var(--spacing-0);\n  }\n\n  .p-1 {\n    padding: var(--spacing-1);\n  }\n\n  .p-2 {\n    padding: var(--spacing-2);\n  }\n\n  .p-3 {\n    padding: var(--spacing-3);\n  }\n\n  .p-4 {\n    padding: var(--spacing-4);\n  }\n\n  .p-5 {\n    padding: var(--spacing-5);\n  }\n\n  .p-6 {\n    padding: var(--spacing-6);\n  }\n\n  .p-10 {\n    padding: var(--spacing-10);\n  }\n\n  .px-0 {\n    padding-inline: var(--spacing-0);\n  }\n\n  .px-1 {\n    padding-inline: var(--spacing-1);\n  }\n\n  .px-2 {\n    padding-inline: var(--spacing-2);\n  }\n\n  .px-3 {\n    padding-inline: var(--spacing-3);\n  }\n\n  .px-3\\.5 {\n    padding-inline: calc(var(--spacing) * 3.5);\n  }\n\n  .px-4 {\n    padding-inline: var(--spacing-4);\n  }\n\n  .px-5 {\n    padding-inline: var(--spacing-5);\n  }\n\n  .px-6 {\n    padding-inline: var(--spacing-6);\n  }\n\n  .px-9 {\n    padding-inline: var(--spacing-9);\n  }\n\n  .px-\\[2px\\] {\n    padding-inline: 2px;\n  }\n\n  .px-\\[5px\\] {\n    padding-inline: 5px;\n  }\n\n  .px-\\[10px\\] {\n    padding-inline: 10px;\n  }\n\n  .py-1 {\n    padding-block: var(--spacing-1);\n  }\n\n  .py-2 {\n    padding-block: var(--spacing-2);\n  }\n\n  .py-3 {\n    padding-block: var(--spacing-3);\n  }\n\n  .py-5 {\n    padding-block: var(--spacing-5);\n  }\n\n  .py-6 {\n    padding-block: var(--spacing-6);\n  }\n\n  .py-12 {\n    padding-block: var(--spacing-12);\n  }\n\n  .py-\\[1px\\] {\n    padding-block: 1px;\n  }\n\n  .py-\\[2px\\] {\n    padding-block: 2px;\n  }\n\n  .pt-0 {\n    padding-top: var(--spacing-0);\n  }\n\n  .pt-2 {\n    padding-top: var(--spacing-2);\n  }\n\n  .pt-3 {\n    padding-top: var(--spacing-3);\n  }\n\n  .pt-5 {\n    padding-top: var(--spacing-5);\n  }\n\n  .pt-6 {\n    padding-top: var(--spacing-6);\n  }\n\n  .pr-4 {\n    padding-right: var(--spacing-4);\n  }\n\n  .pr-6 {\n    padding-right: var(--spacing-6);\n  }\n\n  .pr-7 {\n    padding-right: var(--spacing-7);\n  }\n\n  .pr-8 {\n    padding-right: var(--spacing-8);\n  }\n\n  .pr-10 {\n    padding-right: var(--spacing-10);\n  }\n\n  .pr-11 {\n    padding-right: var(--spacing-11);\n  }\n\n  .pb-1 {\n    padding-bottom: var(--spacing-1);\n  }\n\n  .pb-2 {\n    padding-bottom: var(--spacing-2);\n  }\n\n  .pb-4 {\n    padding-bottom: var(--spacing-4);\n  }\n\n  .pb-6 {\n    padding-bottom: var(--spacing-6);\n  }\n\n  .pb-9 {\n    padding-bottom: var(--spacing-9);\n  }\n\n  .pb-12 {\n    padding-bottom: var(--spacing-12);\n  }\n\n  .pb-32 {\n    padding-bottom: var(--spacing-32);\n  }\n\n  .pb-\\[120px\\] {\n    padding-bottom: 120px;\n  }\n\n  .pl-1 {\n    padding-left: var(--spacing-1);\n  }\n\n  .pl-2 {\n    padding-left: var(--spacing-2);\n  }\n\n  .pl-3 {\n    padding-left: var(--spacing-3);\n  }\n\n  .pl-4 {\n    padding-left: var(--spacing-4);\n  }\n\n  .pl-5 {\n    padding-left: var(--spacing-5);\n  }\n\n  .text-center {\n    text-align: center;\n  }\n\n  .text-left {\n    text-align: left;\n  }\n\n  .font-500 {\n    font-family: var(--font-500);\n  }\n\n  .font-600 {\n    font-family: var(--font-600);\n  }\n\n  .font-inter {\n    font-family: var(--font-inter);\n  }\n\n  .text-sm {\n    font-size: var(--text-sm);\n    line-height: var(--tw-leading, var(--text-sm--line-height));\n  }\n\n  .text-xs {\n    font-size: var(--text-xs);\n    line-height: var(--tw-leading, var(--text-xs--line-height));\n  }\n\n  .\\!text-12 {\n    font-size: var(--text-12) !important;\n  }\n\n  .text-6 {\n    font-size: var(--text-6);\n  }\n\n  .text-8 {\n    font-size: var(--text-8);\n  }\n\n  .text-10 {\n    font-size: var(--text-10);\n  }\n\n  .text-12 {\n    font-size: var(--text-12);\n  }\n\n  .text-14 {\n    font-size: var(--text-14);\n  }\n\n  .text-16 {\n    font-size: var(--text-16);\n  }\n\n  .leading-20 {\n    --tw-leading: var(--leading-20);\n    line-height: var(--leading-20);\n  }\n\n  .leading-\\[7\\.26px\\] {\n    --tw-leading: 7.26px;\n    line-height: 7.26px;\n  }\n\n  .leading-none {\n    --tw-leading: 1;\n    line-height: 1;\n  }\n\n  .leading-relaxed {\n    --tw-leading: var(--leading-relaxed);\n    line-height: var(--leading-relaxed);\n  }\n\n  .leading-tight {\n    --tw-leading: var(--leading-tight);\n    line-height: var(--leading-tight);\n  }\n\n  .font-bold {\n    --tw-font-weight: var(--font-weight-bold);\n    font-weight: var(--font-weight-bold);\n  }\n\n  .font-semibold {\n    --tw-font-weight: var(--font-weight-semibold);\n    font-weight: var(--font-weight-semibold);\n  }\n\n  .tracking-wider {\n    --tw-tracking: var(--tracking-wider);\n    letter-spacing: var(--tracking-wider);\n  }\n\n  .break-normal {\n    overflow-wrap: normal;\n    word-break: normal;\n  }\n\n  .break-words {\n    overflow-wrap: break-word;\n  }\n\n  .text-ellipsis {\n    text-overflow: ellipsis;\n  }\n\n  .whitespace-nowrap {\n    white-space: nowrap;\n  }\n\n  .whitespace-pre-line {\n    white-space: pre-line;\n  }\n\n  .whitespace-pre-wrap {\n    white-space: pre-wrap;\n  }\n\n  .text-blue-40 {\n    color: var(--color-blue-40);\n  }\n\n  .text-gray-400 {\n    color: var(--color-gray-400);\n  }\n\n  .text-gray-500 {\n    color: var(--color-gray-500);\n  }\n\n  .text-gray-600 {\n    color: var(--color-gray-600);\n  }\n\n  .text-gray-800 {\n    color: var(--color-gray-800);\n  }\n\n  .text-green-45 {\n    color: var(--color-green-45);\n  }\n\n  .text-green-600 {\n    color: var(--color-green-600);\n  }\n\n  .text-honey-72 {\n    color: var(--color-honey-72);\n  }\n\n  .text-neutral-20 {\n    color: var(--color-neutral-20);\n  }\n\n  .text-neutral-30 {\n    color: var(--color-neutral-30);\n  }\n\n  .text-neutral-35 {\n    color: var(--color-neutral-35);\n  }\n\n  .text-neutral-45 {\n    color: var(--color-neutral-45);\n  }\n\n  .text-neutral-60 {\n    color: var(--color-neutral-60);\n  }\n\n  .text-neutral-90 {\n    color: var(--color-neutral-90);\n  }\n\n  .text-neutral-100 {\n    color: var(--color-neutral-100);\n  }\n\n  .text-orange-600 {\n    color: var(--color-orange-600);\n  }\n\n  .text-purple-41 {\n    color: var(--color-purple-41);\n  }\n\n  .text-purple-41\\/70 {\n    color: #4f5882b3;\n  }\n\n  @supports (color: color-mix(in lab, red, red)) {\n    .text-purple-41\\/70 {\n      color: color-mix(in oklab, var(--color-purple-41) 70%, transparent);\n    }\n  }\n\n  .text-purple-51 {\n    color: var(--color-purple-51);\n  }\n\n  .text-purple-63 {\n    color: var(--color-purple-63);\n  }\n\n  .text-red-55 {\n    color: var(--color-red-55);\n  }\n\n  .text-red-65 {\n    color: var(--color-red-65);\n  }\n\n  .text-red-600 {\n    color: var(--color-red-600);\n  }\n\n  .text-sky-64 {\n    color: var(--color-sky-64);\n  }\n\n  .text-transparent {\n    color: #0000;\n  }\n\n  .text-yellow-25 {\n    color: var(--color-yellow-25);\n  }\n\n  .text-yellow-600 {\n    color: var(--color-yellow-600);\n  }\n\n  .lowercase {\n    text-transform: lowercase;\n  }\n\n  .uppercase {\n    text-transform: uppercase;\n  }\n\n  .italic {\n    font-style: italic;\n  }\n\n  .not-italic {\n    font-style: normal;\n  }\n\n  .no-underline {\n    text-decoration-line: none;\n  }\n\n  .underline {\n    text-decoration-line: underline;\n  }\n\n  .\\!opacity-100 {\n    opacity: 1 !important;\n  }\n\n  .opacity-0 {\n    opacity: 0;\n  }\n\n  .opacity-50 {\n    opacity: .5;\n  }\n\n  .opacity-60 {\n    opacity: .6;\n  }\n\n  .opacity-70 {\n    opacity: .7;\n  }\n\n  .opacity-100 {\n    opacity: 1;\n  }\n\n  .\\!shadow-none {\n    --tw-shadow: 0 0 #0000 !important;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow) !important;\n  }\n\n  .shadow {\n    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, #0000001a), 0 1px 2px -1px var(--tw-shadow-color, #0000001a);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-1xl {\n    --tw-shadow: 0px 0px 16px var(--tw-shadow-color, #bdcedb66);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-2xl {\n    --tw-shadow: 0px 36px 80px var(--tw-shadow-color, #bdcedb4d), 0px 5.01331px 33.4221px var(--tw-shadow-color, #bdcedb0d), 0px 2.68036px 17.869px var(--tw-shadow-color, #bdcedb0b), 0px 1.50259px 10.0172px var(--tw-shadow-color, #bdcedb09), 0px .798012px 5.32008px var(--tw-shadow-color, #bdcedb07), 0px .332071px 2.21381px var(--tw-shadow-color, #bdcedb05);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-3xl {\n    --tw-shadow: 0px 12px 80px var(--tw-shadow-color, #bdcedb4d), 0px 73.78px 33.4221px var(--tw-shadow-color, #bdcedb14), 0px 22.3363px 17.869px var(--tw-shadow-color, #bdcedb0b), 0px 12.5216px 10.0172px var(--tw-shadow-color, #bdcedb09), 0px 6.6501px 5.32008px var(--tw-shadow-color, #bdcedb07), 0px 2.76726px 2.21381px var(--tw-shadow-color, #bdcedb05);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-above-shadow {\n    --tw-shadow: 0px 0px 24px var(--tw-shadow-color, #3f5d741a), 0px 0px 10.4625px var(--tw-shadow-color, #3f5d7411), 0px 0px 3.9px var(--tw-shadow-color, #3f5d740d), 0px 0px 1.3875px var(--tw-shadow-color, #3f5d7408);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-above-shadow-1xl {\n    --tw-shadow: 0px 0px 32px var(--tw-shadow-color, #3f5d741a), 0px 0px 18.46px var(--tw-shadow-color, #3f5d7411), 0px 0px 11.9px var(--tw-shadow-color, #3f5d740d), 0px 0px 9.39px var(--tw-shadow-color, #3f5d7408);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-above-shadow-2xl {\n    --tw-shadow: 0px 0px 40px var(--tw-shadow-color, #3f5d741a), 0px 0px 26.46px var(--tw-shadow-color, #3f5d7411), 0px 0px 19.9px var(--tw-shadow-color, #3f5d740d), 0px 0px 17.39px var(--tw-shadow-color, #3f5d7408);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-above-shadow-3xl {\n    --tw-shadow: 0px 0px 48px var(--tw-shadow-color, #3f5d741a), 0px 0px 34.46px var(--tw-shadow-color, #3f5d7411), 0px 0px 27.9px var(--tw-shadow-color, #3f5d740d), 0px 0px 25.39px var(--tw-shadow-color, #3f5d7408);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-drop-shadow {\n    --tw-shadow: 0px 9px 4px var(--tw-shadow-color, #3f5d7403), 0px 5px 3px var(--tw-shadow-color, #3f5d740a), 0px 2px 2px var(--tw-shadow-color, #3f5d7412), 0px 1px 1px var(--tw-shadow-color, #3f5d7414), 0px 0px 0px var(--tw-shadow-color, #3f5d7414);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-drop-shadow-1xl {\n    --tw-shadow: 0px 18px 7px var(--tw-shadow-color, #3f5d7405), 0px 10px 6px var(--tw-shadow-color, #3f5d7414), 0px 4px 4px var(--tw-shadow-color, #3f5d7421), 0px 1px 2px var(--tw-shadow-color, #3f5d7426), 0px 0px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-drop-shadow-2xl {\n    --tw-shadow: 0px 54px 22px var(--tw-shadow-color, #3f5d7405), 0px 30px 18px var(--tw-shadow-color, #3f5d7414), 0px 14px 14px var(--tw-shadow-color, #3f5d7421), 0px 3px 7px var(--tw-shadow-color, #3f5d7426), 0px 0px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-drop-shadow-3xl {\n    --tw-shadow: 0px 118px 47px var(--tw-shadow-color, #3f5d7405), 0px 67px 40px var(--tw-shadow-color, #3f5d7414), 0px 30px 30px var(--tw-shadow-color, #3f5d7421), 0px 7px 16px var(--tw-shadow-color, #3f5d7426), 0px 0px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-inner-shadow {\n    --tw-shadow: inset 0px 9px 3px var(--tw-shadow-color, #3f5d7403), inset 0px 5px 3px var(--tw-shadow-color, #3f5d740a), inset 0px 2px 2px var(--tw-shadow-color, #3f5d7412), inset 0px 1px 1px var(--tw-shadow-color, #3f5d7414);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-inner-shadow-1xl {\n    --tw-shadow: inset 0px 19px 8px var(--tw-shadow-color, #3f5d7405), inset 0px 11px 6px var(--tw-shadow-color, #3f5d7414), inset 0px 5px 5px var(--tw-shadow-color, #3f5d7421), inset 0px 1px 3px var(--tw-shadow-color, #3f5d7426);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-inner-shadow-2xl {\n    --tw-shadow: inset 0px 60px 24px var(--tw-shadow-color, #3f5d7405), inset 0px 34px 20px var(--tw-shadow-color, #3f5d7414), inset 0px 15px 15px var(--tw-shadow-color, #3f5d7421), inset 0px 4px 8px var(--tw-shadow-color, #3f5d7426);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-inner-shadow-3xl {\n    --tw-shadow: inset 0px 130px 52px var(--tw-shadow-color, #3f5d7405), inset 0px 73px 44px var(--tw-shadow-color, #3f5d7414), inset 0px 33px 33px var(--tw-shadow-color, #3f5d7421), inset 0px 8px 18px var(--tw-shadow-color, #3f5d7426);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-inner-shadow-top {\n    --tw-shadow: inset 0 7px 9px -7px var(--tw-shadow-color, #12294a36);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-shadow-round {\n    --tw-shadow: 0px 7px 5px 0px var(--tw-shadow-color, #3f5d7400), 0px 0px 10px 0px var(--tw-shadow-color, #3f5d7405), 0px 3px 10px 0px var(--tw-shadow-color, #3f5d7414), 0px 4px 4px 0px var(--tw-shadow-color, #3f5d7421), 0px 1px 2px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 3px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-shadow-round-1xl {\n    --tw-shadow: 0px 27px 12px 0px var(--tw-shadow-color, #3f5d7400), 0px 18px 7px 0px var(--tw-shadow-color, #3f5d7405), 0px 10px 6px 0px var(--tw-shadow-color, #3f5d7414), 0px 4px 4px 0px var(--tw-shadow-color, #3f5d7421), 0px 1px 2px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 14px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-shadow-round-2xl {\n    --tw-shadow: 0px 85px 24px 0px var(--tw-shadow-color, #3f5d7400), 0px 54px 22px 0px var(--tw-shadow-color, #3f5d7405), 0px 30px 18px 0px var(--tw-shadow-color, #3f5d7414), 0px 14px 14px 0px var(--tw-shadow-color, #3f5d7421), 0px 3px 7px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 23px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-neutral-shadow-round-3xl {\n    --tw-shadow: 0px 185px 52px 0px var(--tw-shadow-color, #3f5d7400), 0px 118px 47px 0px var(--tw-shadow-color, #3f5d7405), 0px 67px 40px 0px var(--tw-shadow-color, #3f5d7414), 0px 30px 30px 0px var(--tw-shadow-color, #3f5d7421), 0px 7px 16px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 30px 0px var(--tw-shadow-color, #3f5d7429);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-above-shadow {\n    --tw-shadow: 0px 0px 24px var(--tw-shadow-color, #70605c1a), 0px 0px 10.4625px var(--tw-shadow-color, #70605c11), 0px 0px 3.9px var(--tw-shadow-color, #70605c0d), 0px 0px 1.3875px var(--tw-shadow-color, #70605c08);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-above-shadow-1xl {\n    --tw-shadow: 0px 0px 32px var(--tw-shadow-color, #70605c1a), 0px 0px 18.46px var(--tw-shadow-color, #70605c11), 0px 0px 11.9px var(--tw-shadow-color, #70605c0d), 0px 0px 9.39px var(--tw-shadow-color, #70605c08);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-above-shadow-2xl {\n    --tw-shadow: 0px 0px 40px var(--tw-shadow-color, #70605c1a), 0px 0px 26.46px var(--tw-shadow-color, #70605c11), 0px 0px 19.9px var(--tw-shadow-color, #70605c0d), 0px 0px 17.39px var(--tw-shadow-color, #70605c08);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-above-shadow-3xl {\n    --tw-shadow: 0px 0px 48px var(--tw-shadow-color, #70605c1a), 0px 0px 34.46px var(--tw-shadow-color, #70605c11), 0px 0px 27.9px var(--tw-shadow-color, #70605c0d), 0px 0px 25.39px var(--tw-shadow-color, #70605c08);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-drop-shadow {\n    --tw-shadow: 0px 9px 4px var(--tw-shadow-color, #70605c03), 0px 5px 3px var(--tw-shadow-color, #70605c0a), 0px 2px 2px var(--tw-shadow-color, #70605c12), 0px 1px 1px var(--tw-shadow-color, #70605c14), 0px 0px 0px var(--tw-shadow-color, #70605c14);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-drop-shadow-1xl {\n    --tw-shadow: 0px 17px 7px var(--tw-shadow-color, #70605c05), 0px 10px 6px var(--tw-shadow-color, #70605c14), 0px 4px 4px var(--tw-shadow-color, #70605c21), 0px 1px 2px var(--tw-shadow-color, #70605c26), 0px 0px 0px var(--tw-shadow-color, #70605c29);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-drop-shadow-2xl {\n    --tw-shadow: 0px 54px 21px var(--tw-shadow-color, #70605c05), 0px 30px 18px var(--tw-shadow-color, #70605c14), 0px 13px 13px var(--tw-shadow-color, #70605c21), 0px 3px 7px var(--tw-shadow-color, #70605c26), 0px 0px 0px var(--tw-shadow-color, #70605c29);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-pink-drop-shadow-3xl {\n    --tw-shadow: 0px 117px 47px var(--tw-shadow-color, #70605c05), 0px 66px 40px var(--tw-shadow-color, #70605c14), 0px 29px 29px var(--tw-shadow-color, #70605c21), 0px 7px 16px var(--tw-shadow-color, #70605c26), 0px 0px 0px var(--tw-shadow-color, #70605c29);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .shadow-wizard-step {\n    --tw-shadow: 1px 1px 8px var(--tw-shadow-color, #fff), inset 1px 1px 4px var(--tw-shadow-color, #00000029);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring-2 {\n    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .ring-purple-51 {\n    --tw-ring-color: var(--color-purple-51);\n  }\n\n  .outline, .outline-1 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n\n  .outline-2 {\n    outline-style: var(--tw-outline-style);\n    outline-width: 2px;\n  }\n\n  .outline-\\[2\\.5px\\] {\n    outline-style: var(--tw-outline-style);\n    outline-width: 2.5px;\n  }\n\n  .outline-neutral-100 {\n    outline-color: var(--color-neutral-100);\n  }\n\n  .blur {\n    --tw-blur: blur(8px);\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .filter {\n    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );\n  }\n\n  .backdrop-blur-sm {\n    --tw-backdrop-blur: blur(var(--blur-sm));\n    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );\n  }\n\n  .transition {\n    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, backdrop-filter, display, content-visibility, overlay, pointer-events;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-all {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .transition-opacity {\n    transition-property: opacity;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .delay-300 {\n    transition-delay: .3s;\n  }\n\n  .duration-150 {\n    --tw-duration: .15s;\n    transition-duration: .15s;\n  }\n\n  .duration-250 {\n    --tw-duration: .25s;\n    transition-duration: .25s;\n  }\n\n  .duration-300 {\n    --tw-duration: .3s;\n    transition-duration: .3s;\n  }\n\n  .ease-in {\n    --tw-ease: var(--ease-in);\n    transition-timing-function: var(--ease-in);\n  }\n\n  .ease-in-out {\n    --tw-ease: var(--ease-in-out);\n    transition-timing-function: var(--ease-in-out);\n  }\n\n  .ease-out {\n    --tw-ease: var(--ease-out);\n    transition-timing-function: var(--ease-out);\n  }\n\n  .prose-inherit {\n    --tw-prose-body: inherit;\n    --tw-prose-headings: inherit;\n    --tw-prose-lead: inherit;\n    --tw-prose-links: inherit;\n    --tw-prose-bold: inherit;\n    --tw-prose-counters: inherit;\n    --tw-prose-bullets: inherit;\n  }\n\n  .outline-none {\n    --tw-outline-style: none;\n    outline-style: none;\n  }\n\n  .prose-blue {\n    --tw-prose-links: oklch(54.6% .245 262.881);\n    --tw-prose-invert-links: oklch(62.3% .214 259.815);\n  }\n\n  .select-none {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n         user-select: none;\n  }\n\n  @media (hover: hover) {\n    .group-hover\\:border-neutral-35:is(:where(.group):hover *) {\n      border-color: var(--color-neutral-35);\n    }\n\n    .group-hover\\:border-neutral-90:is(:where(.group):hover *) {\n      border-color: var(--color-neutral-90);\n    }\n\n    .group-hover\\:border-red-65:is(:where(.group):hover *) {\n      border-color: var(--color-red-65);\n    }\n\n    .group-hover\\:text-purple-41:is(:where(.group):hover *) {\n      color: var(--color-purple-41);\n    }\n  }\n\n  .placeholder\\:text-neutral-70::-moz-placeholder {\n    color: var(--color-neutral-70);\n  }\n\n  .placeholder\\:text-neutral-70::placeholder {\n    color: var(--color-neutral-70);\n  }\n\n  .before\\:absolute:before {\n    content: var(--tw-content);\n    position: absolute;\n  }\n\n  .before\\:top-0:before {\n    content: var(--tw-content);\n    top: var(--spacing-0);\n  }\n\n  .before\\:top-\\[calc\\(50\\%-6px\\)\\]:before {\n    content: var(--tw-content);\n    top: calc(50% - 6px);\n  }\n\n  .before\\:top-\\[calc\\(50\\%-12px\\)\\]:before {\n    content: var(--tw-content);\n    top: calc(50% - 12px);\n  }\n\n  .before\\:bottom-\\[7px\\]:before {\n    content: var(--tw-content);\n    bottom: 7px;\n  }\n\n  .before\\:left-0:before {\n    content: var(--tw-content);\n    left: var(--spacing-0);\n  }\n\n  .before\\:z-\\[-1\\]:before {\n    content: var(--tw-content);\n    z-index: -1;\n  }\n\n  .before\\:ml-\\[15px\\]:before {\n    content: var(--tw-content);\n    margin-left: 15px;\n  }\n\n  .before\\:block:before {\n    content: var(--tw-content);\n    display: block;\n  }\n\n  .before\\:h-6:before {\n    content: var(--tw-content);\n    height: var(--spacing-6);\n  }\n\n  .before\\:h-12:before {\n    content: var(--tw-content);\n    height: var(--spacing-12);\n  }\n\n  .before\\:h-\\[2px\\]:before {\n    content: var(--tw-content);\n    height: 2px;\n  }\n\n  .before\\:h-\\[12px\\]:before {\n    content: var(--tw-content);\n    height: 12px;\n  }\n\n  .before\\:w-0:before {\n    content: var(--tw-content);\n    width: var(--spacing-0);\n  }\n\n  .before\\:w-\\[1px\\]:before {\n    content: var(--tw-content);\n    width: 1px;\n  }\n\n  .before\\:w-\\[18px\\]:before {\n    content: var(--tw-content);\n    width: 18px;\n  }\n\n  .before\\:w-\\[calc\\(100\\%-16px\\)\\]:before {\n    content: var(--tw-content);\n    width: calc(100% - 16px);\n  }\n\n  .before\\:w-full:before {\n    content: var(--tw-content);\n    width: 100%;\n  }\n\n  .before\\:\\!-translate-y-\\[0px\\]:before {\n    content: var(--tw-content);\n    --tw-translate-y: calc(0px * -1) !important;\n    translate: var(--tw-translate-x) var(--tw-translate-y) !important;\n  }\n\n  .before\\:-translate-y-\\[6px\\]:before {\n    content: var(--tw-content);\n    --tw-translate-y: calc(6px * -1);\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .before\\:rotate-\\[45deg\\]:before {\n    content: var(--tw-content);\n    rotate: 45deg;\n  }\n\n  .before\\:rounded-0:before {\n    content: var(--tw-content);\n    border-radius: var(--radius-0);\n  }\n\n  .before\\:rounded-4:before {\n    content: var(--tw-content);\n    border-radius: var(--radius-4);\n  }\n\n  .before\\:bg-green-54:before {\n    content: var(--tw-content);\n    background-color: var(--color-green-54);\n  }\n\n  .before\\:bg-neutral-10:before {\n    content: var(--tw-content);\n    background-color: var(--color-neutral-10);\n  }\n\n  .before\\:bg-neutral-20:before {\n    content: var(--tw-content);\n    background-color: var(--color-neutral-20);\n  }\n\n  .before\\:bg-neutral-90:before {\n    content: var(--tw-content);\n    background-color: var(--color-neutral-90);\n  }\n\n  .before\\:bg-purple-51:before {\n    content: var(--tw-content);\n    background-color: var(--color-purple-51);\n  }\n\n  .before\\:bg-red-55:before {\n    content: var(--tw-content);\n    background-color: var(--color-red-55);\n  }\n\n  .before\\:bg-yellow-55:before {\n    content: var(--tw-content);\n    background-color: var(--color-yellow-55);\n  }\n\n  .before\\:shadow-wizard-line:before {\n    content: var(--tw-content);\n    --tw-shadow: inset 0px 0px 2px var(--tw-shadow-color, #00000024);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .before\\:transition-all:before {\n    content: var(--tw-content);\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .before\\:transition-none:before {\n    content: var(--tw-content);\n    transition-property: none;\n  }\n\n  .before\\:duration-\\[2000ms\\]:before {\n    content: var(--tw-content);\n    --tw-duration: 2s;\n    transition-duration: 2s;\n  }\n\n  .before\\:content-\\[\\\'\\\'\\]:before {\n    --tw-content: "";\n    content: var(--tw-content);\n  }\n\n  .after\\:absolute:after {\n    content: var(--tw-content);\n    position: absolute;\n  }\n\n  .after\\:bottom-\\[7px\\]:after {\n    content: var(--tw-content);\n    bottom: 7px;\n  }\n\n  .after\\:ml-\\[15px\\]:after {\n    content: var(--tw-content);\n    margin-left: 15px;\n  }\n\n  .after\\:block:after {\n    content: var(--tw-content);\n    display: block;\n  }\n\n  .after\\:h-\\[2px\\]:after {\n    content: var(--tw-content);\n    height: 2px;\n  }\n\n  .after\\:w-\\[18px\\]:after {\n    content: var(--tw-content);\n    width: 18px;\n  }\n\n  .after\\:\\!translate-y-\\[0px\\]:after {\n    content: var(--tw-content);\n    --tw-translate-y: 0px !important;\n    translate: var(--tw-translate-x) var(--tw-translate-y) !important;\n  }\n\n  .after\\:translate-y-\\[6px\\]:after {\n    content: var(--tw-content);\n    --tw-translate-y: 6px;\n    translate: var(--tw-translate-x) var(--tw-translate-y);\n  }\n\n  .after\\:-rotate-\\[45deg\\]:after {\n    content: var(--tw-content);\n    rotate: -45deg;\n  }\n\n  .after\\:rounded-4:after {\n    content: var(--tw-content);\n    border-radius: var(--radius-4);\n  }\n\n  .after\\:bg-neutral-20:after {\n    content: var(--tw-content);\n    background-color: var(--color-neutral-20);\n  }\n\n  .after\\:bg-transparent:after {\n    content: var(--tw-content);\n    background-color: #0000;\n  }\n\n  .after\\:transition-all:after {\n    content: var(--tw-content);\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n\n  .after\\:duration-300:after {\n    content: var(--tw-content);\n    --tw-duration: .3s;\n    transition-duration: .3s;\n  }\n\n  .after\\:content-\\[\\\'\\\'\\]:after {\n    --tw-content: "";\n    content: var(--tw-content);\n  }\n\n  .first\\:-ml-12:first-child {\n    margin-left: calc(var(--spacing-12) * -1);\n  }\n\n  .last\\:-mr-12:last-child {\n    margin-right: calc(var(--spacing-12) * -1);\n  }\n\n  @media (hover: hover) {\n    .hover\\:scale-105:hover {\n      --tw-scale-x: 105%;\n      --tw-scale-y: 105%;\n      --tw-scale-z: 105%;\n      scale: var(--tw-scale-x) var(--tw-scale-y);\n    }\n\n    .hover\\:scale-\\[1\\.02\\]:hover {\n      scale: 1.02;\n    }\n\n    .hover\\:border-green-63:hover {\n      border-color: var(--color-green-63);\n    }\n\n    .hover\\:border-neutral-25:hover {\n      border-color: var(--color-neutral-25);\n    }\n\n    .hover\\:border-neutral-35:hover {\n      border-color: var(--color-neutral-35);\n    }\n\n    .hover\\:border-neutral-60:hover {\n      border-color: var(--color-neutral-60);\n    }\n\n    .hover\\:border-purple-58:hover {\n      border-color: var(--color-purple-58);\n    }\n\n    .hover\\:border-red-65:hover {\n      border-color: var(--color-red-65);\n    }\n\n    .hover\\:border-yellow-65:hover {\n      border-color: var(--color-yellow-65);\n    }\n\n    .hover\\:bg-green-63:hover {\n      background-color: var(--color-green-63);\n    }\n\n    .hover\\:bg-neutral-25:hover {\n      background-color: var(--color-neutral-25);\n    }\n\n    .hover\\:bg-neutral-95:hover {\n      background-color: var(--color-neutral-95);\n    }\n\n    .hover\\:bg-neutral-98:hover {\n      background-color: var(--color-neutral-98);\n    }\n\n    .hover\\:bg-purple-58:hover {\n      background-color: var(--color-purple-58);\n    }\n\n    .hover\\:bg-red-65:hover {\n      background-color: var(--color-red-65);\n    }\n\n    .hover\\:bg-yellow-65:hover {\n      background-color: var(--color-yellow-65);\n    }\n\n    .hover\\:text-neutral-20:hover {\n      color: var(--color-neutral-20);\n    }\n\n    .hover\\:text-neutral-35:hover {\n      color: var(--color-neutral-35);\n    }\n\n    .hover\\:text-purple-31:hover {\n      color: var(--color-purple-31);\n    }\n\n    .hover\\:text-purple-31\\/70:hover {\n      color: #3c4262b3;\n    }\n\n    @supports (color: color-mix(in lab, red, red)) {\n      .hover\\:text-purple-31\\/70:hover {\n        color: color-mix(in oklab, var(--color-purple-31) 70%, transparent);\n      }\n    }\n\n    .hover\\:text-purple-41:hover {\n      color: var(--color-purple-41);\n    }\n\n    .hover\\:underline:hover {\n      text-decoration-line: underline;\n    }\n\n    .hover\\:opacity-80:hover {\n      opacity: .8;\n    }\n\n    .hover\\:shadow-button-medium-hover-primary:hover {\n      --tw-shadow: 0px 20px 16px -16px var(--tw-shadow-color, #0006);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-button-medium-hover-secondary:hover {\n      --tw-shadow: 0px 20px 16px -16px var(--tw-shadow-color, #0000001f);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-button-small-hover-primary:hover {\n      --tw-shadow: 0px 10px 8px -8px var(--tw-shadow-color, #0006);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-button-small-hover-secondary:hover {\n      --tw-shadow: 0px 10px 8px -8px var(--tw-shadow-color, #0000001f);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-neutral-drop-shadow-1xl:hover {\n      --tw-shadow: 0px 18px 7px var(--tw-shadow-color, #3f5d7405), 0px 10px 6px var(--tw-shadow-color, #3f5d7414), 0px 4px 4px var(--tw-shadow-color, #3f5d7421), 0px 1px 2px var(--tw-shadow-color, #3f5d7426), 0px 0px 0px var(--tw-shadow-color, #3f5d7429);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-neutral-shadow-round-1xl:hover {\n      --tw-shadow: 0px 27px 12px 0px var(--tw-shadow-color, #3f5d7400), 0px 18px 7px 0px var(--tw-shadow-color, #3f5d7405), 0px 10px 6px 0px var(--tw-shadow-color, #3f5d7414), 0px 4px 4px 0px var(--tw-shadow-color, #3f5d7421), 0px 1px 2px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 14px 0px var(--tw-shadow-color, #3f5d7429);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-neutral-shadow-round-2xl:hover {\n      --tw-shadow: 0px 85px 24px 0px var(--tw-shadow-color, #3f5d7400), 0px 54px 22px 0px var(--tw-shadow-color, #3f5d7405), 0px 30px 18px 0px var(--tw-shadow-color, #3f5d7414), 0px 14px 14px 0px var(--tw-shadow-color, #3f5d7421), 0px 3px 7px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 23px 0px var(--tw-shadow-color, #3f5d7429);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-neutral-shadow-round-3xl:hover {\n      --tw-shadow: 0px 185px 52px 0px var(--tw-shadow-color, #3f5d7400), 0px 118px 47px 0px var(--tw-shadow-color, #3f5d7405), 0px 67px 40px 0px var(--tw-shadow-color, #3f5d7414), 0px 30px 30px 0px var(--tw-shadow-color, #3f5d7421), 0px 7px 16px 0px var(--tw-shadow-color, #3f5d7426), 0px 0px 30px 0px var(--tw-shadow-color, #3f5d7429);\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n\n    .hover\\:shadow-none:hover {\n      --tw-shadow: 0 0 #0000;\n      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n    }\n  }\n\n  .active\\:\\!scale-100:active {\n    --tw-scale-x: 100% !important;\n    --tw-scale-y: 100% !important;\n    --tw-scale-z: 100% !important;\n    scale: var(--tw-scale-x) var(--tw-scale-y) !important;\n  }\n\n  .active\\:scale-98:active {\n    --tw-scale-x: var(--scale-98);\n    --tw-scale-y: var(--scale-98);\n    --tw-scale-z: var(--scale-98);\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .active\\:scale-100:active {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .active\\:border-neutral-25:active {\n    border-color: var(--color-neutral-25);\n  }\n\n  .active\\:bg-neutral-25:active {\n    background-color: var(--color-neutral-25);\n  }\n\n  .active\\:text-neutral-35:active {\n    color: var(--color-neutral-35);\n  }\n\n  .active\\:shadow-button-medium-press-primary:active {\n    --tw-shadow: 0px 12px 16px -16px var(--tw-shadow-color, #0006);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .active\\:shadow-button-medium-press-secondary:active {\n    --tw-shadow: 0px 12px 16px -16px var(--tw-shadow-color, #0000001f);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .active\\:shadow-button-small-press-primary:active {\n    --tw-shadow: 0px 6px 8px -8px var(--tw-shadow-color, #0006);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .active\\:shadow-button-small-press-secondary:active {\n    --tw-shadow: 0px 6px 8x -8px var(--tw-shadow-color, #0000001f);\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .active\\:shadow-none:active {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  .active\\:outline-0:active {\n    outline-style: var(--tw-outline-style);\n    outline-width: 0;\n  }\n\n  .active\\:duration-25:active {\n    --tw-duration: 25ms;\n    transition-duration: 25ms;\n  }\n\n  .disabled\\:scale-100:disabled {\n    --tw-scale-x: 100%;\n    --tw-scale-y: 100%;\n    --tw-scale-z: 100%;\n    scale: var(--tw-scale-x) var(--tw-scale-y);\n  }\n\n  .disabled\\:cursor-not-allowed:disabled {\n    cursor: not-allowed;\n  }\n\n  .disabled\\:text-neutral-90:disabled {\n    color: var(--color-neutral-90);\n  }\n\n  .disabled\\:opacity-50:disabled {\n    opacity: .5;\n  }\n\n  .disabled\\:shadow-none:disabled {\n    --tw-shadow: 0 0 #0000;\n    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);\n  }\n\n  @media (hover: hover) {\n    .disabled\\:hover\\:\\!border-green-54:disabled:hover {\n      border-color: var(--color-green-54) !important;\n    }\n\n    .disabled\\:hover\\:\\!border-neutral-20:disabled:hover {\n      border-color: var(--color-neutral-20) !important;\n    }\n\n    .disabled\\:hover\\:\\!border-purple-51:disabled:hover {\n      border-color: var(--color-purple-51) !important;\n    }\n\n    .disabled\\:hover\\:\\!border-red-55:disabled:hover {\n      border-color: var(--color-red-55) !important;\n    }\n\n    .disabled\\:hover\\:\\!border-yellow-55:disabled:hover {\n      border-color: var(--color-yellow-55) !important;\n    }\n\n    .disabled\\:hover\\:\\!bg-green-54:disabled:hover {\n      background-color: var(--color-green-54) !important;\n    }\n\n    .disabled\\:hover\\:\\!bg-neutral-20:disabled:hover {\n      background-color: var(--color-neutral-20) !important;\n    }\n\n    .disabled\\:hover\\:\\!bg-purple-51:disabled:hover {\n      background-color: var(--color-purple-51) !important;\n    }\n\n    .disabled\\:hover\\:\\!bg-red-55:disabled:hover {\n      background-color: var(--color-red-55) !important;\n    }\n\n    .disabled\\:hover\\:\\!bg-yellow-55:disabled:hover {\n      background-color: var(--color-yellow-55) !important;\n    }\n  }\n\n  @media (min-width: 40rem) {\n    .sm\\:ml-8 {\n      margin-left: var(--spacing-8);\n    }\n\n    .sm\\:flex {\n      display: flex;\n    }\n\n    .sm\\:hidden {\n      display: none;\n    }\n\n    .sm\\:flex-row {\n      flex-direction: row;\n    }\n\n    .sm\\:justify-between {\n      justify-content: space-between;\n    }\n\n    .sm\\:justify-end {\n      justify-content: flex-end;\n    }\n\n    .sm\\:gap-4 {\n      gap: var(--spacing-4);\n    }\n  }\n\n  @media (min-width: 48rem) {\n    .md\\:flex {\n      display: flex;\n    }\n\n    .md\\:hidden {\n      display: none;\n    }\n\n    .md\\:px-10 {\n      padding-inline: var(--spacing-10);\n    }\n  }\n\n  @media (min-width: 64rem) {\n    .lg\\:flex {\n      display: flex;\n    }\n\n    .lg\\:hidden {\n      display: none;\n    }\n\n    .lg\\:grid-cols-\\[auto_max-content\\] {\n      grid-template-columns: auto max-content;\n    }\n  }\n\n  @media (min-width: 80rem) {\n    .xl\\:block {\n      display: block;\n    }\n\n    .xl\\:flex {\n      display: flex;\n    }\n\n    .xl\\:hidden {\n      display: none;\n    }\n\n    .xl\\:grid-rows-1 {\n      grid-template-rows: repeat(1, minmax(0, 1fr));\n    }\n  }\n\n  :where(.dark, .dark *) .dark\\:border-neutral-20 {\n    border-color: var(--color-neutral-20);\n  }\n\n  :where(.dark, .dark *) .dark\\:bg-neutral-20 {\n    background-color: var(--color-neutral-20);\n  }\n\n  :where(.dark, .dark *) .dark\\:text-neutral-100 {\n    color: var(--color-neutral-100);\n  }\n\n  .prose-headings\\:text-red-600 :where(h1, h2, h3, h4, h5, h6, th):not(:where([class~="not-prose"], [class~="not-prose"] *)) {\n    color: var(--color-red-600);\n  }\n\n  .\\[\\&_\\.lukso-wizard-circle-inner\\]\\:border-2 .lukso-wizard-circle-inner {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n\n  .\\[\\&_\\.lukso-wizard-circle-inner\\]\\:border-purple-51 .lukso-wizard-circle-inner {\n    border-color: var(--color-purple-51);\n  }\n\n  .\\[\\&_\\.lukso-wizard-circle-inner\\]\\:bg-gradient-to-t .lukso-wizard-circle-inner {\n    --tw-gradient-position: to top in oklab;\n    background-image: linear-gradient(var(--tw-gradient-stops));\n  }\n\n  .\\[\\&_\\.lukso-wizard-circle-inner\\]\\:from-gradient-3-start .lukso-wizard-circle-inner {\n    --tw-gradient-from: var(--color-gradient-3-start);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .\\[\\&_\\.lukso-wizard-circle-inner\\]\\:to-gradient-3-end .lukso-wizard-circle-inner {\n    --tw-gradient-to: var(--color-gradient-3-end);\n    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));\n  }\n\n  .\\[\\&\\>\\.lukso-wizard-circle\\]\\:after\\:bg-purple-51 > .lukso-wizard-circle:after {\n    content: var(--tw-content);\n    background-color: var(--color-purple-51);\n  }\n\n  .last\\:\\[\\&\\>\\.lukso-wizard-circle\\]\\:before\\:hidden:last-child > .lukso-wizard-circle:before, .last\\:\\[\\&\\>\\.lukso-wizard-circle\\]\\:after\\:hidden:last-child > .lukso-wizard-circle:after {\n    content: var(--tw-content);\n    display: none;\n  }\n}\n\n@property --tw-translate-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-translate-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-rotate-x {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-rotate-y {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-rotate-z {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-skew-x {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-skew-y {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-pan-x {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-pan-y {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-pinch-zoom {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-space-y-reverse {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-gradient-position {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-from {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-via {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-to {\n  syntax: "<color>";\n  inherits: false;\n  initial-value: #0000;\n}\n\n@property --tw-gradient-stops {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-via-stops {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-gradient-from-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n\n@property --tw-gradient-via-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 50%;\n}\n\n@property --tw-gradient-to-position {\n  syntax: "<length-percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-leading {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-font-weight {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-tracking {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-shadow-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-inset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-shadow-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-inset-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-ring-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-inset-ring-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-inset-ring-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-ring-inset {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-ring-offset-width {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0;\n}\n\n@property --tw-ring-offset-color {\n  syntax: "*";\n  inherits: false;\n  initial-value: #fff;\n}\n\n@property --tw-ring-offset-shadow {\n  syntax: "*";\n  inherits: false;\n  initial-value: 0 0 #0000;\n}\n\n@property --tw-outline-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n\n@property --tw-blur {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-brightness {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-contrast {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-grayscale {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-hue-rotate {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-invert {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-opacity {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-saturate {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-sepia {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-drop-shadow {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-drop-shadow-color {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-drop-shadow-alpha {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 100%;\n}\n\n@property --tw-drop-shadow-size {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-blur {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-brightness {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-contrast {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-grayscale {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-hue-rotate {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-invert {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-opacity {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-saturate {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-backdrop-sepia {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-duration {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-ease {\n  syntax: "*";\n  inherits: false\n}\n\n@property --tw-content {\n  syntax: "*";\n  inherits: false;\n  initial-value: "";\n}\n\n@property --tw-scale-x {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-y {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n\n@property --tw-scale-z {\n  syntax: "*";\n  inherits: false;\n  initial-value: 1;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n\n@keyframes pulse {\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    animation-timing-function: cubic-bezier(.8, 0, 1, 1);\n    transform: translateY(-25%);\n  }\n\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, .2, 1);\n    transform: none;\n  }\n}\n'),o=e=>class extends r.LitElement{static{this.styles=e?[n,(0,t.unsafeCSS)(e)]:[n]}};class i extends r.LitElement{static{this.styles=[n]}}e.s(["TailwindElement",()=>i,"TailwindStyledElement",()=>o],579078)},600100,e=>{"use strict";function t(e){return t=>("u">typeof customElements&&!customElements.get(e)&&customElements.define(e,t),t)}e.s(["safeCustomElement",()=>t])},261028,e=>{"use strict";e.i(812207);var t=e.i(654479);e.i(374576);var r=e.i(120119),n=e.i(542010);e.i(991008);var o=e.i(159463),i=e.i(757895),a=e.i(579078),s=e.i(600100),l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?h(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&l(t,r,i),i};let p=class extends(0,o.withTheme)((0,a.TailwindStyledElement)(i.default)){constructor(){super(...arguments),this.isOpen=!1,this.disableAnimations=!1,this.size="small",this.hasBottomPadding=!1,this.styles=(0,n.tv)({slots:{wrapper:"opacity-0 fixed z-[1011] transition-opacity inset-0 w-screen h-screen overflow-y-auto overscroll-none scrolling-touch touch-pan-y isolate",inner:"min-h-screen flex items-center justify-center px-6 pt-6 w-full",overlay:"absolute inset-0 w-full h-full z-[1010]",dialog:"shadow-neutral-shadow-round-3xl z-[1012] mx-auto"},variants:{isOpen:{true:{wrapper:"opacity-100 visible w-[100vw] h-[100vh]"},false:{wrapper:"hidden"}},size:{small:{dialog:"w-[352px]"},medium:{dialog:"w-[849px]"},full:{dialog:"w-full"},auto:{}},disableAnimations:{false:{wrapper:"animation-duration-300 delay-300",overlay:"animation-duration-300"}},hasBottomPadding:{true:{inner:"pb-[120px]"},false:{inner:"pb-6"}}},compoundVariants:[{disableAnimations:!1,isOpen:!0,class:{wrapper:"animate-fade-in",overlay:"animate-fade-in"}}]})}close(){this.isOpen=!1}async handleBackdropClick(){await this.updateComplete;let e=new CustomEvent("on-backdrop-click",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){let{wrapper:e,overlay:r,dialog:n,inner:o}=this.styles({isOpen:this.isOpen,size:this.size,disableAnimations:this.disableAnimations,hasBottomPadding:this.hasBottomPadding});return t.html`
      <div data-testid="modal" class=${e()}>
        <div class=${o()}>
          <div class=${r()} @click=${this.handleBackdropClick}></div>
          <div
            class=${n()}
            style="background: var(--lukso-modal-resolved-bg); border-radius: var(--lukso-modal-border-radius, 12px);"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `}};d([(0,r.property)({type:Boolean,attribute:"is-open"})],p.prototype,"isOpen",2),d([(0,r.property)({type:Boolean,attribute:"disable-animations"})],p.prototype,"disableAnimations",2),d([(0,r.property)({type:String})],p.prototype,"size",2),d([(0,r.property)({type:Boolean,attribute:"has-bottom-padding"})],p.prototype,"hasBottomPadding",2),p=d([(0,s.safeCustomElement)("lukso-modal")],p),e.s(["LuksoModal",()=>p])},746536,523911,e=>{"use strict";var t=e.i(654479),r=e.i(391909);e.s([],523911);var n=r;class o extends n.Directive{constructor(e){if(super(e),e.type!==n.PartType.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("`customStyleMap()` can only be used in the `style` attribute and must be the only part in the attribute.")}render(e){let r=Object.keys(e).filter(t=>e[t]);return 0===r.length?t.nothing:` ${r.join("; ")} `}}let i=(0,n.directive)(o);e.s(["customStyleMap",()=>i],746536)},90274,e=>{"use strict";e.i(812207);var t=e.i(654479);e.i(374576);var r=e.i(120119),n=e.i(542010),o=e.i(600100),i=e.i(746536),a=e.i(579078);let s="/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n:host {\n  display: inline-flex;\n}\n";var l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?h(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&l(t,r,i),i};let p=class extends(0,a.TailwindStyledElement)(s){constructor(){super(...arguments),this.size="small",this.isRounded=!1,this.backgroundColor="",this.borderColor="",this.textColor="",this.tagStyles=(0,n.tv)({base:"inline-flex items-center justify-center border border-neutral-20 text-neutral-20 px-2 whitespace-nowrap",variants:{size:{"x-small":"font-inter text-8 font-500 leading-20 h-[20px] px-1 rounded-4",small:"paragraph-inter-12-medium h-7 px-2 rounded-8",large:"paragraph-inter-14-medium h-[34px] px-4 rounded-8"},isRounded:{true:"rounded-[56px]"}},compoundVariants:[{size:"small",isRounded:!0,class:"px-3"},{size:"x-small",isRounded:!0,class:"px-2"}]})}resolveBorderColor(){return this.borderColor?this.borderColor:this.backgroundColor?this.backgroundColor:void 0}render(){let e=this.tagStyles({size:this.size,isRounded:this.isRounded});return t.html`
      <div
        data-testid="tag"
        class=${e}
        style=${(0,i.customStyleMap)({[`background-color: var(--${this.backgroundColor})`]:!!this.backgroundColor,[`border-color: var(--${this.resolveBorderColor()})`]:!!this.resolveBorderColor(),[`color: var(--${this.textColor})`]:!!this.textColor})}
      >
        <slot></slot>
      </div>
    `}};d([(0,r.property)({type:String})],p.prototype,"size",2),d([(0,r.property)({type:Boolean,attribute:"is-rounded"})],p.prototype,"isRounded",2),d([(0,r.property)({type:String,attribute:"background-color"})],p.prototype,"backgroundColor",2),d([(0,r.property)({type:String,attribute:"border-color"})],p.prototype,"borderColor",2),d([(0,r.property)({type:String,attribute:"text-color"})],p.prototype,"textColor",2),p=d([(0,o.safeCustomElement)("lukso-tag")],p),e.s(["LuksoTag",()=>p],90274)},708874,316490,483829,700393,977151,e=>{"use strict";e.i(812207);var t=e.i(654479);e.i(374576);var r=e.i(120119),n=e.i(391909);class o extends n.Directive{constructor(e){if(super(e),this.it=t.nothing,e.type!==n.PartType.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===t.nothing||null==e)return this._t=void 0,this.it=e;if(e===t.noChange)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let r=[e];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;let i=(0,n.directive)(o);e.s(["unsafeHTML",()=>i],316490),e.s([],483829);var a=e.i(600100),s=e.i(579078);let l="/*! tailwindcss v4.1.18 | MIT License | https://tailwindcss.com */\n:host {\n  line-height: 0;\n  display: inline-flex;\n  position: relative;\n}\n\n:host svg {\n  display: block !important;\n}\n";var h=n;let d="important",p=" !"+d,c=(0,h.directive)(class extends h.Directive{constructor(e){if(super(e),e.type!==h.PartType.ATTRIBUTE||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{let n=e[r];return null==n?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[r]){let{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(let e of this.ft)null==r[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(let e in r){let t=r[e];if(null!=t){this.ft.add(e);let r="string"==typeof t&&t.endsWith(p);e.includes("-")||r?n.setProperty(e,r?t.slice(0,-11):t,r?d:""):n[e]=t}}return t.noChange}});e.s(["styleMap",()=>c],700393),e.s([],977151);let w=e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="var(--${e.color})" />
    <path
      d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.80008 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.9501 11.362 24 12 24C12.638 24 13.264 23.9501 13.875 23.8542V15.4688H16.6711Z"
      fill="white"
    />
  </svg> `;var g=Object.defineProperty,f=Object.getOwnPropertyDescriptor,u=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?f(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&g(t,r,i),i};let x={"add-photo":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M18 3V9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 6L15 6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.1214 9.87858C15.2929 11.05 15.2929 12.95 14.1214 14.1214C12.95 15.2929 11.05 15.2929 9.87858 14.1214C8.70714 12.95 8.70714 11.05 9.87858 9.87858C11.05 8.70714 12.95 8.70714 14.1214 9.87858Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg>`,"arrow-down-lg":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5.25 9.25L12 16L18.75 9.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-down-sm":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8 10.25L11.75 14L15.5 10.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-left-lg":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M15 5L8.25 11.75L15 18.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-left-sm":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13.625 8.375L9.875 12.125L13.625 15.875"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-right-lg":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.25 18.5L15 11.75L8.25 5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-right-sm":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9.875 15.875L13.625 12.125L9.875 8.375"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-up-lg":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.75 15L12 8.25L5.25 15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"arrow-up-sm":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M15.5 14L11.75 10.25L8 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"barbell-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M2.25 12H21.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 6.75C19.5 6.33579 19.1642 6 18.75 6C18.3358 6 18 6.33579 18 6.75V17.25C18 17.6642 18.3358 18 18.75 18C19.1642 18 19.5 17.6642 19.5 17.25V6.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6.75C6 6.33579 5.66421 6 5.25 6C4.83579 6 4.5 6.33579 4.5 6.75V17.25C4.5 17.6642 4.83579 18 5.25 18C5.66421 18 6 17.6642 6 17.25V6.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.25 9.375C2.25 9.16789 2.08211 9 1.875 9C1.66789 9 1.5 9.16789 1.5 9.375V14.625C1.5 14.8321 1.66789 15 1.875 15C2.08211 15 2.25 14.8321 2.25 14.625V9.375Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 9.375C22.5 9.16789 22.3321 9 22.125 9C21.9179 9 21.75 9.16789 21.75 9.375V14.625C21.75 14.8321 21.9179 15 22.125 15C22.3321 15 22.5 14.8321 22.5 14.625V9.375Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"bulb-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14.25 18V16.875C14.25 15.5157 15.7285 14.2299 16.6875 13.3125C18.0394 12.0202 18.75 10.2839 18.75 8.25003C18.75 4.50003 15.7627 1.50003 12 1.50003C11.1129 1.49755 10.2341 1.67046 9.41399 2.0088C8.59392 2.34714 7.84883 2.84425 7.22154 3.47154C6.59425 4.09883 6.09714 4.84392 5.7588 5.66399C5.42046 6.48405 5.24755 7.36291 5.25003 8.25003C5.25003 10.2113 5.99112 12.0652 7.31253 13.3125C8.26643 14.213 9.75003 15.5016 9.75003 16.875V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 22.5H13.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.75 20.25H14.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 18V12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.7812 11.25C13.7812 11.25 12.773 12 12 12C11.227 12 10.2188 11.25 10.2188 11.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,camera:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.1214 9.87858C15.2929 11.05 15.2929 12.95 14.1214 14.1214C12.95 15.2929 11.05 15.2929 9.87858 14.1214C8.70714 12.95 8.70714 11.05 9.87858 9.87858C11.05 8.70714 12.95 8.70714 14.1214 9.87858Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <rect
      x="15"
      y="5"
      width="4"
      height="2"
      rx="1"
      fill="var(--${e.color})"
    />
  </svg> `,clipboard:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M15.75 3H17.25C17.8467 3 18.419 3.23705 18.841 3.65901C19.2629 4.08097 19.5 4.65326 19.5 5.25V20.25C19.5 20.8467 19.2629 21.419 18.841 21.841C18.419 22.2629 17.8467 22.5 17.25 22.5H6.75C6.15326 22.5 5.58097 22.2629 5.15901 21.841C4.73705 21.419 4.5 20.8467 4.5 20.25V5.25C4.5 4.65326 4.73705 4.08097 5.15901 3.65901C5.58097 3.23705 6.15326 3 6.75 3H8.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M14.5252 1.5H9.47484C8.79838 1.5 8.25 2.04838 8.25 2.72484V3.27516C8.25 3.95162 8.79838 4.5 9.47484 4.5H14.5252C15.2016 4.5 15.75 3.95162 15.75 3.27516V2.72484C15.75 2.04838 15.2016 1.5 14.5252 1.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M17 9H7"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 12H7"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 15H7"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 15H12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,clock:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M12 6.5V12L15.5 15.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"close-lg":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.34326 17.6569L17.657 6.34315"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.34326 6.34314L17.657 17.6568"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"close-sm":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8 16.0001L16.0002 7.99995"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 8L16.0002 16.0002"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,cloud:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.75 11.25C18.3333 7.05281 15.4219 4.5 12 4.5C8.76562 4.5 6.6825 6.75938 6 9C3.1875 9.28125 0.75 11.0433 0.75 14.25C0.75 17.3438 3.28125 19.5 6.375 19.5H18.5625C21.1406 19.5 23.25 18.2138 23.25 15.375C23.25 12.5709 20.7656 11.355 18.75 11.25Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
  </svg> `,"compass-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
    />
    <path
      d="M16.4378 7.07483L10.944 9.27233C10.5667 9.42322 10.224 9.64919 9.93665 9.93652C9.64931 10.2239 9.42334 10.5666 9.27245 10.9439L7.07495 16.4376C7.04767 16.5058 7.04099 16.5804 7.05575 16.6524C7.0705 16.7243 7.10603 16.7903 7.15793 16.8422C7.20984 16.8941 7.27583 16.9296 7.34774 16.9443C7.41965 16.9591 7.4943 16.9524 7.56245 16.9251L13.0562 14.7276C13.4335 14.5768 13.7762 14.3508 14.0636 14.0634C14.3509 13.7761 14.5769 13.4334 14.7278 13.0561L16.9253 7.56233C16.9525 7.49418 16.9592 7.41953 16.9445 7.34762C16.9297 7.27571 16.8942 7.20971 16.8423 7.15781C16.7904 7.1059 16.7244 7.07037 16.6525 7.05562C16.5806 7.04087 16.5059 7.04755 16.4378 7.07483V7.07483ZM12.0001 13.125C11.7776 13.125 11.5601 13.059 11.3751 12.9354C11.1901 12.8118 11.0459 12.6361 10.9607 12.4305C10.8756 12.2249 10.8533 11.9987 10.8967 11.7805C10.9401 11.5623 11.0473 11.3618 11.2046 11.2045C11.3619 11.0472 11.5624 10.94 11.7806 10.8966C11.9989 10.8532 12.2251 10.8755 12.4306 10.9606C12.6362 11.0458 12.8119 11.19 12.9355 11.375C13.0591 11.56 13.1251 11.7775 13.1251 12C13.1251 12.2984 13.0066 12.5845 12.7956 12.7955C12.5846 13.0065 12.2985 13.125 12.0001 13.125Z"
      fill="var(--${e.color})"
    />
  </svg> `,"complete-filled":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 12.1429L10.8 15L16 10"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"complete-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 12.1429L10.8 15L16 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,connect:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M16.1584 6.06115C17.4126 6.93932 18.3565 8.192 18.855 9.63963C19.3535 11.0873 19.3808 12.6555 18.9332 14.1197C18.4856 15.5838 17.5859 16.8687 16.3632 17.7901C15.1404 18.7115 13.6573 19.2222 12.1265 19.2489C10.5957 19.2756 9.09573 18.817 7.84157 17.9389C6.58741 17.0607 5.64345 15.808 5.14499 14.3604C4.64653 12.9127 4.61915 11.3445 5.06679 9.88031C5.51442 8.41616 6.41409 7.1313 7.63684 6.20989"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 5.14282V12.2539"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,connections:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <clipPath id="a"><path d="m0 0h24v24h-24z" /></clipPath>
    <g
      clip-path="url(#a)"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    >
      <path
        d="m10.6667 3.33325 7.5 7.49995-3.8021 3.8021-.0522.0522c-2.071 2.071-5.42887 2.071-7.49993 0-2.07105-2.0711-2.07105-5.42892 0-7.49997l.05215-.05215z"
      />
      <path d="m16.3738 2.37378-3.3333 3.33331" stroke-linecap="round" />
      <path d="m19.126 5.12598-3.3333 3.33331" stroke-linecap="round" />
      <path
        d="m6.5 14.5c-3.15447 1.3519-2.64518 5.9728.72799 6.6052l4.77201.8948"
      />
    </g>
  </svg> `,"contract-lock":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13.5 14.25V13.4062C13.5 12.6267 12.8316 12 12 12C11.1684 12 10.5 12.6267 10.5 13.4062V14.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.25 19.5H9.75C9.35218 19.5 8.97064 19.342 8.68934 19.0607C8.40804 18.7794 8.25 18.3978 8.25 18V15.75C8.25 15.3522 8.40804 14.9706 8.68934 14.6893C8.97064 14.408 9.35218 14.25 9.75 14.25H14.25C14.6478 14.25 15.0294 14.408 15.3107 14.6893C15.592 14.9706 15.75 15.3522 15.75 15.75V18C15.75 18.3978 15.592 18.7794 15.3107 19.0607C15.0294 19.342 14.6478 19.5 14.25 19.5Z"
      fill="var(--${e.color})"
    />
    <path
      d="M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M12 2.38501V8.25001C12 8.64783 12.158 9.02936 12.4393 9.31067C12.7206 9.59197 13.1022 9.75001 13.5 9.75001H19.365"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"contract-signed":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M2 10.1211V19.25C2 19.8467 2.23705 20.419 2.65901 20.841C3.08097 21.2629 3.65326 21.5 4.25 21.5H14.75C15.3467 21.5 15.919 21.2629 16.341 20.841C16.7629 20.419 17 19.8467 17 19.25V4.25C17 3.65326 16.7629 3.08097 16.341 2.65901C15.919 2.23705 15.3467 2 14.75 2H10.1211C9.72341 2.00006 9.34202 2.15804 9.06078 2.43922L2.43922 9.06078C2.15804 9.34202 2.00006 9.72341 2 10.1211Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M11 13H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 16H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 16H10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.5 2.13501V8.00001C9.5 8.39783 9.34196 8.77936 9.06066 9.06067C8.77936 9.34197 8.39782 9.50001 8 9.50001H2.135"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.25 12C21.25 14.3472 19.3472 16.25 17 16.25C14.6528 16.25 12.75 14.3472 12.75 12C12.75 9.65279 14.6528 7.75 17 7.75C19.3472 7.75 21.25 9.65279 21.25 12Z"
      fill="var(--${e.secondaryColor})"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M15 12.0714L16.4 13.5L19 11"
      stroke="white"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,controller:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.9145 11.6638C21.052 7.76478 19.7728 5.2776 17.7225 4.6715C17.3254 4.55566 16.9136 4.49788 16.5 4.49994C15.2395 4.49994 14.2448 5.24994 12 5.24994C9.75512 5.24994 8.75856 4.49994 7.49996 4.49994C7.06906 4.49771 6.63995 4.55545 6.22496 4.6715C4.17184 5.2776 2.9034 7.76713 2.03106 11.6638C1.14043 15.644 1.30168 18.7888 3.04262 19.3926C4.26137 19.8145 5.35121 18.9421 6.3834 17.6582C7.55527 16.1957 8.99856 15.7457 12 15.7457C15.0014 15.7457 16.3884 16.1957 17.5621 17.6582C18.5934 18.9431 19.7236 19.8046 20.91 19.4001C22.8328 18.7434 22.8056 15.6909 21.9145 11.6638Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
    />
    <path
      d="M13.6875 11.4375C14.2053 11.4375 14.625 11.0178 14.625 10.5C14.625 9.98223 14.2053 9.5625 13.6875 9.5625C13.1697 9.5625 12.75 9.98223 12.75 10.5C12.75 11.0178 13.1697 11.4375 13.6875 11.4375Z"
      fill="var(--${e.color})"
    />
    <path
      d="M15.75 13.5C15.5645 13.5 15.3831 13.445 15.2289 13.3418C15.0747 13.2387 14.9545 13.0922 14.8836 12.9207C14.8128 12.7493 14.7943 12.5607 14.8307 12.3787C14.8671 12.1968 14.9566 12.0298 15.0879 11.8988C15.2193 11.7677 15.3865 11.6786 15.5685 11.6427C15.7506 11.6068 15.9391 11.6257 16.1104 11.697C16.2817 11.7684 16.4279 11.8889 16.5306 12.0434C16.6334 12.1978 16.688 12.3793 16.6875 12.5648C16.6869 12.8131 16.5878 13.0509 16.4121 13.2262C16.2363 13.4016 15.9982 13.5 15.75 13.5V13.5Z"
      fill="var(--${e.color})"
    />
    <path
      d="M15.75 9.375C16.2678 9.375 16.6875 8.95527 16.6875 8.4375C16.6875 7.91973 16.2678 7.5 15.75 7.5C15.2322 7.5 14.8125 7.91973 14.8125 8.4375C14.8125 8.95527 15.2322 9.375 15.75 9.375Z"
      fill="var(--${e.color})"
    />
    <path
      d="M17.8125 11.4375C18.3303 11.4375 18.75 11.0178 18.75 10.5C18.75 9.98223 18.3303 9.5625 17.8125 9.5625C17.2947 9.5625 16.875 9.98223 16.875 10.5C16.875 11.0178 17.2947 11.4375 17.8125 11.4375Z"
      fill="var(--${e.color})"
    />
    <path
      d="M7.5 8.25V12.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.75 10.5H5.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,copy:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3 9V19C3 20.1046 3.89543 21 5 21H15C16.1046 21 17 20.1046 17 19V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M7 7V5C7 3.89543 7.89543 3 9 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H17"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,"cross-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 16.0001L16.0002 7.99995"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 8L16.0002 16.0002"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,dots:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <circle cx="12" cy="6" r="2" fill="var(--${e.color})" />
    <circle cx="12" cy="12" r="2" fill="var(--${e.color})" />
    <circle cx="12" cy="18" r="2" fill="var(--${e.color})" />
  </svg> `,edit:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9.20522 17.4916L18.5695 8.12731C18.9601 7.73679 18.9601 7.10362 18.5695 6.7131L16.5635 4.70704C16.173 4.31652 15.5398 4.31652 15.1493 4.70704L5.78495 14.0714C5.64561 14.2107 5.55055 14.3881 5.51169 14.5813L5.00661 17.0924C4.86572 17.7929 5.48368 18.4109 6.18417 18.27L8.6953 17.7649C8.88848 17.726 9.06588 17.631 9.20522 17.4916Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M13.2913 6.28015L16.7115 9.70042"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,error:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M6 6.00012L18 18.0001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,expand:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 12V7C4 5.34315 5.34315 4 7 4H12M20 12V17C20 18.6569 18.6569 20 17 20H12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M19.9999 8C19.9999 6.17755 20 4 20 4H16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 10L20 4"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.00007 16C4.00007 17.8224 4 20 4 20L8 20"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14L4 20"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,extension:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5789 7.68421C12.1486 7.68421 13.421 6.41176 13.421 4.84211C13.421 3.27245 12.1486 2 10.5789 2C9.00927 2 7.73682 3.27245 7.73682 4.84211C7.73682 6.41176 9.00927 7.68421 10.5789 7.68421ZM19.1578 16.2632C20.7274 16.2632 21.9999 14.9907 21.9999 13.4211C21.9999 11.8514 20.7274 10.579 19.1578 10.579C17.5881 10.579 16.3157 11.8514 16.3157 13.4211C16.3157 14.9907 17.5881 16.2632 19.1578 16.2632Z"
      fill="var(--${e.color})"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3 7.84216C3 6.73759 3.89543 5.84216 5 5.84216H16.1579C17.2625 5.84216 18.1579 6.73759 18.1579 7.84216V19.0001C18.1579 20.1046 17.2625 21.0001 16.1579 21.0001H13.2401C13.357 20.689 13.421 20.3519 13.421 19.9999C13.421 18.4303 12.1486 17.1578 10.5789 17.1578C9.00927 17.1578 7.73682 18.4303 7.73682 19.9999C7.73682 20.3519 7.8008 20.689 7.91777 21.0001H5C3.89543 21.0001 3 20.1046 3 19.0001V16.0823C3.31108 16.1992 3.6481 16.2632 4.00006 16.2632C5.56972 16.2632 6.84217 14.9907 6.84217 13.4211C6.84217 11.8514 5.56972 10.579 4.00006 10.579C3.6481 10.579 3.31108 10.643 3 10.7599V7.84216Z"
      fill="var(--${e.color})"
    />
  </svg> `,"eye-hide":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4.99976 19L18.9998 5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.77284 14.227C8.54284 12.997 8.54284 11.002 9.77284 9.77199C11.0028 8.54199 12.9978 8.54199 14.2278 9.77199"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9998 9L20.7044 11.5569C20.889 11.8339 20.9273 12.1845 20.7837 12.4849C19.3958 15.3885 15.55 20.0126 9.49976 18.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.0438 6.956C15.4968 5.759 13.7478 5 11.9998 5C8.50475 5 5.00975 8.033 3.11775 11.533C2.96075 11.824 2.96075 12.177 3.11775 12.468C4.06375 14.217 5.40975 15.849 6.95575 17.045"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"eye-show":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.11799 12.467C2.96099 12.176 2.96099 11.823 3.11799 11.532C5.00999 8.033 8.50499 5 12 5C15.495 5 18.99 8.033 20.882 11.533C21.039 11.824 21.039 12.177 20.882 12.468C18.99 15.967 15.495 19 12 19C8.50499 19 5.00999 15.967 3.11799 12.467Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87868 14.1213C8.70711 12.9497 8.70711 11.0502 9.87868 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,filter:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.9998 7H19.9998"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.99976 17H11.9998"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.94461 8.94461C9.01846 7.87076 9.01846 6.12924 7.94461 5.05539C6.87076 3.98154 5.12924 3.98154 4.05539 5.05539C2.98154 6.12924 2.98154 7.87076 4.05539 8.94461C5.12924 10.0185 6.87076 10.0185 7.94461 8.94461Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M19.9446 18.9446C21.0185 17.8708 21.0185 16.1292 19.9446 15.0554C18.8708 13.9815 17.1292 13.9815 16.0554 15.0554C14.9815 16.1292 14.9815 17.8708 16.0554 18.9446C17.1292 20.0185 18.8708 20.0185 19.9446 18.9446Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"fish-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.25 7.125C8.87297 7.69734 6.83672 9.57703 5.61094 10.567C5.2573 10.2394 4.88462 9.93291 4.49484 9.64922C2.79047 8.40422 0.75 8.25 0.75 8.25C0.75 8.25 1.28297 10.6655 2.68875 11.992C1.28297 13.3191 0.75 15.7345 0.75 15.7345C0.75 15.7345 2.79047 15.5803 4.49484 14.3353C4.88133 14.0541 5.25088 13.7503 5.60156 13.4255C6.825 14.4164 8.87063 16.3008 11.25 16.875L10.5 19.5C12.3483 19.1873 14.1966 17.8355 14.94 17.2383C21 16.9688 23.25 13.0781 23.25 12C23.25 10.9688 21 7.03125 14.9583 6.76266C14.2275 6.17719 12.3637 4.815 10.5 4.5L11.25 7.125Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 11.9995C19.9142 11.9995 20.25 11.6637 20.25 11.2495C20.25 10.8353 19.9142 10.4995 19.5 10.4995C19.0858 10.4995 18.75 10.8353 18.75 11.2495C18.75 11.6637 19.0858 11.9995 19.5 11.9995Z"
      fill="var(--${e.color})"
    />
    <path
      d="M17.7361 16.6875C16.9096 15.2635 16.4744 13.6464 16.4744 12C16.4744 10.3536 16.9096 8.73646 17.7361 7.3125"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="20"
      stroke-linecap="round"
    />
  </svg> `,flip:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13 8C17.4183 8 21 9.64162 21 11.6667C21 12.5531 20.3137 13.366 19.1714 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M14.8285 10.6567C13.5398 9.36808 12 7.82837 12 7.82837L14.8284 4.99994"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 16C6.58172 16 3 14.3584 3 12.3333C3 11.4469 3.68628 10.634 4.8286 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M9.17153 13.3433C10.4602 14.6319 12 16.1716 12 16.1716L9.17157 19.0001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,glasses:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.25 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8m12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M14.25 15a2 2 0 0 0-4 0" fill="var(--${e.color})" />
    <path
      d="M14.25 15a2 2 0 0 0-4 0m-7.5-2 2.5-6c.7-1.3 1.4-2 3-2m13.5 8-2.5-6c-.7-1.3-1.5-2-3-2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,globe:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_455_4588)">
      <path
        d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M12 3L12 21"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M21 12L3 12"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M12 3V3C5.44859 7.21162 5.44859 16.7884 12 21V21"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M12 3V3C18.5514 7.21162 18.5514 16.7884 12 21V21"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M5 18.5V18.5C8.70577 14.2648 15.2942 14.2648 19 18.5V18.5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M5 5.5V5.5C8.70577 9.73517 15.2942 9.73517 19 5.5V5.5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
    </g>
    <defs>
      <clipPath id="clip0_455_4588">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,hamburger:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5 7H19"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 12L19 12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 17H19"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,infinite:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12 12C12 12 9.75 7.5 6.09375 7.5C3.55688 7.5 1.5 9.51562 1.5 12C1.5 14.4844 3.55688 16.5 6.09375 16.5C7.85203 16.5 9.42188 15.4495 10.5 14.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M12 12C12 12 14.25 16.5 17.9062 16.5C20.4431 16.5 22.5 14.4844 22.5 12C22.5 9.51562 20.4431 7.5 17.9062 7.5C16.148 7.5 14.5781 8.55047 13.5 9.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg> `,information:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M12 16L12 11"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="12"
      cy="8"
      r="1"
      transform="rotate(-180 12 8)"
      fill="var(--${e.color})"
    />
  </svg> `,"key-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M10.2234 7.83609C10.2234 8.44547 10.2234 9.03609 10.4156 9.58922C8.39531 11.9611 3.06094 18.2283 2.56406 18.7064C2.46531 18.795 2.38631 18.9034 2.3322 19.0245C2.27809 19.1457 2.25009 19.2769 2.25 19.4095C2.25 19.808 2.49375 20.1923 2.7 20.408C3.00937 20.7314 4.33125 21.9548 4.575 21.7205C5.29687 21.0173 5.44219 20.8298 5.7375 20.5392C6.18281 20.1033 5.69062 19.2127 5.84531 18.8517C6 18.4908 6.16406 18.4205 6.43125 18.3642C6.69844 18.308 7.17187 18.5002 7.54219 18.5048C7.93125 18.5095 8.14219 18.3455 8.43281 18.0736C8.66719 17.858 8.83594 17.6564 8.84063 17.3423C8.85 16.9205 8.24063 16.3627 8.69531 15.9173C9.15 15.472 9.80625 16.208 10.2891 16.1517C10.7719 16.0955 11.3578 15.4252 11.4188 15.1392C11.4797 14.8533 10.8703 14.1173 10.9641 13.7002C10.9969 13.5595 11.2828 13.2314 11.4984 13.1845C11.7141 13.1377 12.6703 13.508 12.8859 13.4611C13.1484 13.4048 13.4531 13.1283 13.7016 12.9736C14.4281 13.2877 15.0891 13.4142 15.9375 13.4142C19.1484 13.4142 21.75 10.9111 21.75 7.82672C21.75 4.74234 19.1484 2.25 15.9375 2.25C12.7266 2.25 10.2234 4.75172 10.2234 7.83609ZM18.75 6.75C18.75 7.04667 18.662 7.33668 18.4972 7.58336C18.3324 7.83003 18.0981 8.02229 17.824 8.13582C17.5499 8.24935 17.2483 8.27906 16.9574 8.22118C16.6664 8.1633 16.3991 8.02044 16.1893 7.81066C15.9796 7.60088 15.8367 7.33361 15.7788 7.04264C15.7209 6.75166 15.7506 6.45006 15.8642 6.17598C15.9777 5.90189 16.17 5.66762 16.4166 5.5028C16.6633 5.33797 16.9533 5.25 17.25 5.25C17.6478 5.25 18.0294 5.40804 18.3107 5.68934C18.592 5.97064 18.75 6.35218 18.75 6.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
  </svg> `,link:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g
      stroke="var(--${e.color})"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="${e.strokeWidth}"
    >
      <path
        d="m9.75 16.5h-3c-1.19347 0-2.33807-.4741-3.18198-1.318s-1.31802-1.9885-1.31802-3.182.47411-2.33807 1.31802-3.18198 1.98851-1.31802 3.18198-1.31802h3"
      />
      <path
        d="m14.25 7.5h3c1.1935 0 2.3381.47411 3.182 1.31802s1.318 1.98848 1.318 3.18198-.4741 2.3381-1.318 3.182-1.9885 1.318-3.182 1.318h-3"
      />
      <path d="m7.6543 12h8.7853" />
    </g>
  </svg> `,"link-1":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12 4H7C5.34315 4 4 5.34315 4 7V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M19.9999 8C19.9999 6.17755 20 4 20 4H16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 10L20 4"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"link-2":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.9999 8C19.9999 6.17755 20 4 20 4H16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 11L20 4"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <mask id="path-3-inside-1_156_2008" fill="var(--${e.secondaryColor})">
      <rect x="4" y="13" width="7" height="7" rx="1" />
    </mask>
    <rect
      x="4"
      y="13"
      width="7"
      height="7"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-3-inside-1_156_2008)"
    />
  </svg> `,"link-3":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12 20H17C18.6569 20 20 18.6569 20 17V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V17.5858C4 18.4767 5.07714 18.9229 5.70711 18.2929L13.5 10.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M13.9999 14C13.9999 12.1776 14 10 14 10H10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"link-4":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M17.9999 10C17.9999 8.17755 18 6 18 6H14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 13L18 6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <mask id="path-4-inside-1_156_2044" fill="var(--${e.secondaryColor})">
      <rect x="5" y="14" width="5" height="5" rx="1" />
    </mask>
    <rect
      x="5"
      y="14"
      width="5"
      height="5"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-4-inside-1_156_2044)"
    />
  </svg> `,loading:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12 2.75C13.2147 2.75 14.4176 2.98926 15.5398 3.45411C16.6621 3.91897 17.6818 4.60032 18.5407 5.45926C19.3997 6.3182 20.081 7.33792 20.5459 8.46018C21.0107 9.58244 21.25 10.7853 21.25 12C21.25 13.2147 21.0107 14.4176 20.5459 15.5398C20.081 16.6621 19.3997 17.6818 18.5407 18.5407C17.6818 19.3997 16.6621 20.081 15.5398 20.5459C14.4176 21.0107 13.2147 21.25 12 21.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M4.51659 6.56299C5.4324 5.30249 6.65176 4.29374 8.06154 3.63035"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M3.06519 14.3941C2.66193 12.8891 2.64536 11.3067 3.01701 9.79357"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M8.38574 20.5147C6.95153 19.9059 5.69434 18.9447 4.73083 17.7203"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M8 12.1429L10.8 15L16 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,location:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.0001 3C7.97775 3 4.71436 6.67519 4.71436 9.65073C4.71436 14.3338 10.2338 17.241 11.355 19.7446C11.429 19.8237 11.526 19.8881 11.6382 19.9325C11.7503 19.9769 11.8743 20 12.0001 20C12.1259 20 12.2499 19.9769 12.362 19.9325C12.4741 19.8881 12.5711 19.8237 12.6452 19.7446C13.7663 17.2417 19.2858 14.3365 19.2858 9.65073C19.2858 6.67519 16.0224 3 12.0001 3Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.0002 10.2857C12.8943 10.2857 13.6192 9.56083 13.6192 8.66666C13.6192 7.77248 12.8943 7.04761 12.0002 7.04761C11.106 7.04761 10.3811 7.77248 10.3811 8.66666C10.3811 9.56083 11.106 10.2857 12.0002 10.2857Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,locked:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5 19V11C5 10.4477 5.44772 10 6 10H18C18.5523 10 19 10.4477 19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M13.2375 15.7375C13.9208 15.0541 13.9208 13.9459 13.2375 13.2625C12.5541 12.5792 11.4459 12.5792 10.7625 13.2625C10.0792 13.9459 10.0792 15.0541 10.7625 15.7375C11.4459 16.4208 12.5541 16.4208 13.2375 15.7375Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M7 10V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79113 17 7.00027C17 8.25889 17 9.46107 17 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
    <path
      d="M12 16.5V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,login:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M10.4142 14.771C11.7029 13.4823 13.2427 11.9426 13.2427 11.9426L10.4142 9.1142"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.75736 11.9426H13.2426"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 6.40541V5C7 3.89543 7.89543 3 9 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H9C7.89543 21 7 20.1046 7 19V17.5946"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg>`,"login-2":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M4 16V18C4 19.1046 4.89543 20 6 20H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 4L18 4C19.1046 4 20 4.89543 20 6L20 8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 20L18 20C19.1046 20 20 19.1046 20 18L20 16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M9.36954 9.46179H10.3728V13.08C10.3728 13.4766 10.2791 13.8255 10.0916 14.1265C9.90587 14.4276 9.64447 14.6629 9.30734 14.8323C8.97022 15 8.57631 15.0838 8.12561 15.0838C7.67311 15.0838 7.27829 15 6.94117 14.8323C6.60404 14.6629 6.34264 14.4276 6.15695 14.1265C5.97126 13.8255 5.87842 13.4766 5.87842 13.08V9.46179H6.88168V12.9962C6.88168 13.2269 6.93215 13.4325 7.03311 13.6127C7.13587 13.793 7.2801 13.9345 7.46578 14.0373C7.65147 14.1383 7.87141 14.1887 8.12561 14.1887C8.3798 14.1887 8.59974 14.1383 8.78543 14.0373C8.97292 13.9345 9.11715 13.793 9.2181 13.6127C9.31906 13.4325 9.36954 13.2269 9.36954 12.9962V9.46179Z"
      fill="var(--${e.color})"
    />
    <path
      d="M11.4633 15V9.46179H13.5401C13.9656 9.46179 14.3225 9.54112 14.611 9.69976C14.9012 9.85841 15.1202 10.0765 15.2681 10.3542C15.4177 10.63 15.4925 10.9437 15.4925 11.2952C15.4925 11.6504 15.4177 11.9659 15.2681 12.2417C15.1184 12.5175 14.8976 12.7348 14.6055 12.8934C14.3135 13.0503 13.9538 13.1287 13.5266 13.1287H12.1501V12.3039H13.3914C13.6401 12.3039 13.8439 12.2606 14.0025 12.1741C14.1612 12.0876 14.2783 11.9686 14.3541 11.8172C14.4316 11.6657 14.4703 11.4917 14.4703 11.2952C14.4703 11.0987 14.4316 10.9257 14.3541 10.776C14.2783 10.6264 14.1603 10.5101 13.9998 10.4272C13.8412 10.3425 13.6365 10.3001 13.386 10.3001H12.4665V15H11.4633Z"
      fill="var(--${e.color})"
    />
    <path
      d="M17.5186 9.46179L17.4294 13.3721H16.5587L16.4721 9.46179H17.5186ZM16.994 15.0595C16.83 15.0595 16.6894 15.0018 16.5722 14.8864C16.4568 14.771 16.3991 14.6304 16.3991 14.4646C16.3991 14.3023 16.4568 14.1635 16.5722 14.0481C16.6894 13.9327 16.83 13.875 16.994 13.875C17.1545 13.875 17.2933 13.9327 17.4105 14.0481C17.5295 14.1635 17.589 14.3023 17.589 14.4646C17.589 14.5745 17.561 14.6746 17.5051 14.7647C17.451 14.8549 17.3789 14.927 17.2888 14.9811C17.2005 15.0333 17.1022 15.0595 16.994 15.0595Z"
      fill="var(--${e.color})"
    />
  </svg> `,"login-3":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M4 16V18C4 19.1046 4.89543 20 6 20H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 4L18 4C19.1046 4 20 4.89543 20 6L20 8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 20L18 20C19.1046 20 20 19.1046 20 18L20 16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M14.25 9C14.25 10.2426 13.2426 11.25 12 11.25C10.7574 11.25 9.75 10.2426 9.75 9C9.75 7.75736 10.7574 6.75 12 6.75C13.2426 6.75 14.25 7.75736 14.25 9Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M7.25 16.3333C7.25 15.6847 7.79801 15.04 8.88924 14.5101C9.93411 14.0027 11.1972 13.75 12 13.75C12.8028 13.75 14.0659 14.0027 15.1108 14.5101C16.202 15.04 16.75 15.6847 16.75 16.3333V17.25H7.25V16.3333Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"logo-brave":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
    />
    <g clip-path="url(#clip0_859_26885)">
      <path
        d="M14.2485 5.3999C14.3316 5.3999 14.4107 5.43629 14.4656 5.49978L15.5291 6.72896C15.5423 6.72644 15.556 6.72391 15.5701 6.72138C15.8263 6.67571 16.0903 6.65901 16.3437 6.68926C16.6675 6.72792 16.9444 6.84088 17.1503 7.05066C17.3653 7.26972 17.5793 7.4932 17.7824 7.70933C17.8535 7.78498 17.9182 7.85435 17.9752 7.91593C17.9952 7.93753 18.0129 7.95662 18.028 7.97303C18.1236 8.07729 18.1456 8.19893 18.1031 8.30513L17.8287 8.99135L18.1943 10.0556C18.2133 10.1111 18.2157 10.171 18.2009 10.2278C18.1983 10.2379 18.1983 10.2379 18.186 10.2856C18.1691 10.3509 18.1691 10.3509 18.1437 10.4489C18.0981 10.6248 18.0473 10.8208 17.9927 11.032C17.8365 11.6353 17.6802 12.239 17.5345 12.8031C17.1746 14.1955 16.9386 15.1123 16.8818 15.3407C16.5725 16.5844 16.3272 17.0162 15.5341 17.5847C14.8393 18.0829 13.3895 19.0824 13.1108 19.2599C13.0841 19.2769 13.0547 19.2967 13.0156 19.3236C13.0005 19.334 12.9268 19.3853 12.9057 19.3998C12.7702 19.4932 12.6735 19.5531 12.5693 19.6024C12.4372 19.665 12.3108 19.6999 12.1826 19.6999C12.0544 19.6999 11.9279 19.665 11.7958 19.6024C11.6916 19.5531 11.5949 19.4932 11.4594 19.3998C11.4383 19.3853 11.3647 19.334 11.3495 19.3236C11.3105 19.2967 11.281 19.2769 11.2544 19.2599C10.9756 19.0824 9.52579 18.0829 8.831 17.5847C8.03793 17.0162 7.79259 16.5844 7.48335 15.3408C7.42654 15.1123 7.19056 14.1955 6.83331 12.8133C6.68489 12.239 6.52868 11.6353 6.37247 11.032C6.3178 10.8208 6.26703 10.6248 6.22147 10.4489C6.19609 10.3509 6.19609 10.3509 6.17916 10.2856C6.1668 10.2379 6.1668 10.2379 6.1642 10.2278C6.14948 10.171 6.15179 10.1111 6.17084 10.0556L6.53645 8.99135L6.26205 8.30513C6.21958 8.19893 6.24157 8.07729 6.31841 7.99342C6.35226 7.95662 6.3699 7.93753 6.38991 7.91593C6.44696 7.85435 6.51166 7.78498 6.58276 7.70933C6.78586 7.4932 6.9998 7.26972 7.21481 7.05066C7.42072 6.84088 7.69768 6.72792 8.02146 6.68926C8.27487 6.65901 8.53886 6.67571 8.795 6.72138C8.80916 6.72391 8.82285 6.72644 8.83606 6.72896L9.8995 5.49978C9.95443 5.43629 10.0335 5.3999 10.1167 5.3999H14.2485ZM14.1177 5.98874H10.2474L9.15744 7.24863C9.08412 7.33337 8.96963 7.36799 8.86273 7.33774C8.85716 7.33616 8.84325 7.33253 8.82201 7.3275C8.78474 7.31868 8.74209 7.30975 8.69512 7.30138C8.48969 7.26475 8.27883 7.25141 8.08889 7.27409C7.8839 7.29856 7.72625 7.36286 7.62426 7.46677C7.41246 7.68255 7.20138 7.90305 7.00099 8.11628C6.95367 8.16664 6.90924 8.21415 6.86809 8.25835L7.11368 8.8725C7.14024 8.93892 7.14206 9.01292 7.11881 9.08061L6.74633 10.1649C6.75644 10.2039 6.76013 10.2181 6.78104 10.2988C6.82661 10.4747 6.87738 10.6708 6.93206 10.882C7.08829 11.4854 7.24452 12.0892 7.39033 12.6533C7.75114 14.0493 7.98685 14.9651 8.04435 15.1963C8.32257 16.3152 8.49969 16.6269 9.1643 17.1034C9.8512 17.5959 11.2934 18.5901 11.5613 18.7608C11.5951 18.7822 11.6299 18.8056 11.6743 18.8362C11.6907 18.8476 11.7642 18.8987 11.7839 18.9123C11.8958 18.9894 11.9708 19.0358 12.0401 19.0686C12.1019 19.0979 12.1496 19.1111 12.1826 19.1111C12.2155 19.1111 12.2633 19.0979 12.325 19.0686C12.3944 19.0358 12.4694 18.9894 12.5812 18.9123C12.601 18.8987 12.6744 18.8476 12.6908 18.8362C12.7352 18.8056 12.7701 18.7822 12.8038 18.7608C13.0718 18.5901 14.5139 17.5959 15.2008 17.1034C15.8654 16.6269 16.0426 16.3152 16.3208 15.1963C16.3783 14.9651 16.614 14.0493 16.9722 12.6635C17.1206 12.0891 17.2768 11.4853 17.4331 10.8819C17.4878 10.6708 17.5385 10.4747 17.5841 10.2988C17.605 10.2181 17.6087 10.2039 17.6188 10.1649L17.2463 9.08061C17.2231 9.01292 17.2249 8.93892 17.2515 8.8725L17.497 8.25835C17.4559 8.21415 17.4115 8.16664 17.3641 8.11628C17.1638 7.90305 16.9527 7.68255 16.7409 7.46677C16.6389 7.36286 16.4812 7.29856 16.2763 7.27409C16.0863 7.25141 15.8754 7.26475 15.67 7.30138C15.623 7.30975 15.5804 7.31868 15.5431 7.3275C15.5219 7.33253 15.508 7.33616 15.5024 7.33774C15.3955 7.36799 15.281 7.33337 15.2077 7.24863L14.1177 5.98874ZM12.1826 14.227C12.2612 14.227 12.7651 14.4082 13.1695 14.6214C13.5738 14.8346 13.8669 14.9854 13.9606 15.0451C14.0542 15.1048 13.9971 15.2175 13.9118 15.2789C13.8264 15.3404 12.6798 16.245 12.5686 16.3449C12.4573 16.4449 12.2937 16.6101 12.1826 16.6101C12.0714 16.6101 11.9078 16.4449 11.7966 16.3449C11.6853 16.245 10.5387 15.3404 10.4534 15.2789C10.368 15.2175 10.3109 15.1048 10.4046 15.0451C10.4983 14.9854 10.7913 14.8346 11.1957 14.6214C11.6 14.4082 12.1039 14.227 12.1826 14.227ZM12.1841 7.78408C12.2047 7.78441 12.4285 7.79048 12.7564 7.90184C13.1007 8.01877 13.4738 8.16494 13.6459 8.16494C13.8181 8.16494 15.0949 7.91646 15.0949 7.91646C15.0949 7.91646 16.6081 9.78006 16.6081 10.1784C16.6081 10.5767 16.4177 10.6818 16.2263 10.8888C16.0349 11.0959 15.1991 12.0002 15.0917 12.1163C14.9844 12.2324 14.7609 12.4085 14.8924 12.7254C15.0238 13.0423 15.2177 13.4456 15.0021 13.8546C14.7865 14.2637 14.417 14.5367 14.1803 14.4915C13.9436 14.4464 13.3877 14.1504 13.1832 14.0152C12.9788 13.88 12.3309 13.3355 12.3309 13.1272C12.3309 12.9189 13.0006 12.5449 13.1244 12.46C13.2481 12.375 13.8125 12.0461 13.8241 11.917C13.8356 11.7879 13.8312 11.75 13.6647 11.431C13.4981 11.112 13.1982 10.6863 13.2481 10.4031C13.298 10.1199 13.7818 9.97261 14.127 9.83978C14.4722 9.70697 15.1369 9.45613 15.2199 9.41713C15.3029 9.3781 15.2815 9.34095 15.0299 9.31666C14.7784 9.29236 14.0647 9.19584 13.7429 9.28722C13.4211 9.3786 12.8713 9.51763 12.8268 9.59136C12.7823 9.66508 12.743 9.66757 12.7887 9.92189C12.8344 10.1762 13.0699 11.3966 13.0927 11.6133C13.1156 11.8301 13.1603 11.9734 12.9309 12.0268C12.7015 12.0803 12.3153 12.1731 12.1826 12.1731C12.0499 12.1731 11.6637 12.0803 11.4343 12.0268C11.2048 11.9734 11.2495 11.8301 11.2724 11.6133C11.2953 11.3966 11.5307 10.1762 11.5764 9.92189C11.6221 9.66757 11.5829 9.66508 11.5384 9.59136C11.4938 9.51763 10.944 9.3786 10.6222 9.28722C10.3005 9.19584 9.58671 9.29236 9.33519 9.31666C9.08367 9.34095 9.06221 9.3781 9.14524 9.41713C9.22828 9.45613 9.89296 9.70697 10.2381 9.83978C10.5833 9.97261 11.0671 10.1199 11.1171 10.4031C11.167 10.6863 10.867 11.112 10.7005 11.431C10.5339 11.75 10.5295 11.7879 10.541 11.917C10.5526 12.0461 11.117 12.375 11.2408 12.46C11.3645 12.5449 12.0343 12.9189 12.0343 13.1272C12.0343 13.3355 11.3863 13.88 11.1819 14.0152C10.9775 14.1504 10.4215 14.4464 10.1848 14.4915C9.9481 14.5367 9.57868 14.2637 9.36302 13.8546C9.1474 13.4456 9.3413 13.0423 9.47272 12.7254C9.60416 12.4085 9.38073 12.2324 9.27336 12.1163C9.16605 12.0002 8.33016 11.0959 8.13878 10.8888C7.9474 10.6818 7.75708 10.5767 7.75708 10.1784C7.75708 9.78006 9.27023 7.91646 9.27023 7.91646C9.27023 7.91646 10.5471 8.16494 10.7192 8.16494C10.8914 8.16494 11.2644 8.01877 11.6087 7.90184C11.953 7.78491 12.1826 7.78406 12.1826 7.78406L12.1841 7.78408Z"
        fill="var(--${e.secondaryColor})"
      />
    </g>
    <defs>
      <clipPath id="clip0_859_26885">
        <rect
          width="12.0559"
          height="14.3"
          fill="var(--${e.secondaryColor})"
          transform="translate(6.15463 5.3999)"
        />
      </clipPath>
    </defs>
  </svg> `,"logo-chrome":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.8501 11.9967C8.84991 12.6198 9.0345 13.2289 9.38051 13.747C9.72653 14.2652 10.2184 14.669 10.794 14.9076C11.3696 15.1462 12.003 15.2087 12.6141 15.0872C13.2252 14.9658 13.7865 14.6659 14.2272 14.2254C14.6678 13.7849 14.9679 13.2236 15.0895 12.6125C15.2111 12.0015 15.1488 11.3681 14.9104 10.7924C14.672 10.2168 14.2683 9.72476 13.7502 9.37859C13.2322 9.03242 12.6231 8.84766 12.0001 8.84766C11.1655 8.84988 10.3657 9.18234 9.7755 9.7724C9.18527 10.3625 8.85257 11.1621 8.8501 11.9967V11.9967Z"
      fill="var(--${e.color})"
    />
    <path
      d="M22.3477 10.2089C22.3477 10.2089 22.3477 10.2089 22.3477 10.2112C22.2708 9.75334 22.1612 9.30155 22.0195 8.85938H22.0144C22.1582 9.30371 22.269 9.75808 22.3458 10.2188V10.2188C22.2687 9.75812 22.158 9.30378 22.0144 8.85938H14.73C15.623 9.65625 16.2 10.7423 16.2 12.0023C16.202 12.7407 16.0025 13.4657 15.623 14.0991L10.8281 22.4273C10.8284 22.4316 10.8284 22.4358 10.8281 22.44V22.4531V22.4409C11.2173 22.4825 11.6086 22.5022 12 22.5C12.3206 22.5 12.638 22.4817 12.9516 22.4531C13.4214 22.4107 13.8877 22.3364 14.3475 22.2309C19.0162 21.165 22.5 16.9875 22.5 11.9972C22.5001 11.3979 22.4491 10.7996 22.3477 10.2089V10.2089Z"
      fill="var(--${e.color})"
    />
    <path
      d="M12.0001 16.1953C10.4251 16.1953 9.11262 15.3558 8.37715 14.0958L3.56262 5.76796L3.55606 5.75671C2.51717 7.16323 1.846 8.80693 1.60346 10.5386C1.36091 12.2703 1.55468 14.0351 2.16717 15.673C2.77966 17.3108 3.79148 18.7697 5.11079 19.9173C6.4301 21.0649 8.01513 21.8648 9.722 22.2445V22.2422L13.3637 15.9328C12.9283 16.1003 12.4666 16.1892 12.0001 16.1953V16.1953Z"
      fill="var(--${e.color})"
    />
    <path
      d="M4.27925 4.90177L7.90503 11.1479C8.09326 10.1999 8.60413 9.34636 9.35073 8.73257C10.0973 8.11878 11.0335 7.78263 12 7.7813H21.6174C21.2868 7.05485 20.8818 6.3646 20.4089 5.72161L20.4146 5.72536C20.8856 6.36718 21.2887 7.05619 21.6174 7.7813H21.6253C21.2969 7.05402 20.8938 6.36281 20.4225 5.7188C20.4167 5.7152 20.4112 5.71112 20.4061 5.70661C19.4823 4.47157 18.2977 3.45528 16.9365 2.73005C15.5753 2.00481 14.071 1.58845 12.5307 1.51058C10.9903 1.43271 9.45172 1.69524 8.02434 2.27951C6.59697 2.86377 5.31588 3.75541 4.27222 4.89099L4.27878 4.90224L4.27925 4.90177Z"
      fill="var(--${e.color})"
    />
  </svg> `,"logo-edge":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_859_26884)">
      <path
        d="M20.3792 18.3324L20.3792 18.3325L20.3856 18.3301C20.4942 18.2913 20.6015 18.2491 20.7074 18.2037C18.7523 20.9256 15.5598 22.7031 11.9766 22.7031C6.06521 22.7031 1.22656 17.8645 1.22656 11.9531C1.22656 6.04177 6.06521 1.20312 11.9766 1.20312C17.6126 1.20312 22.7269 4.94604 22.7313 10.4441C22.7311 11.7578 22.0963 12.9708 21.3781 13.7275C20.4951 14.6565 19.1827 15.1431 17.9565 15.2037C17.3333 15.2346 16.6235 15.1858 15.9857 15.0623C15.333 14.9358 14.8205 14.7432 14.5407 14.5286C14.4113 14.4291 14.3577 14.3591 14.3361 14.3215L14.3392 14.3181C14.8725 13.7129 15.3312 12.9108 15.3312 11.9484C15.3312 10.0945 13.8201 8.63125 11.9813 8.63125C10.2858 8.63125 8.816 9.9177 8.65259 11.5461C8.50542 12.9873 8.8311 14.1355 9.38198 15.0553C9.92325 15.9591 10.9029 16.9737 12.0915 17.6799C13.2875 18.3905 14.9624 18.8618 16.3468 18.9214C17.5657 18.975 18.582 18.9477 20.3792 18.3324ZM14.3224 14.2898C14.3225 14.2897 14.3229 14.2912 14.3233 14.294C14.3224 14.2912 14.3223 14.2898 14.3224 14.2898Z"
        fill="var(--${e.color})"
        stroke="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_859_26884">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-facebook":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="#1877F2" />
    <path
      d="M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.80008 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.736 23.9501 11.362 24 12 24C12.638 24 13.264 23.9501 13.875 23.8542V15.4688H16.6711Z"
      fill="white"
    />
  </svg> `,"logo-fantom":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <circle cx="12.5" cy="12" r="12" fill="#1969FF" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.306 3.813a1.71 1.71 0 0 0-1.613 0L7.763 5.91c-.26.195-.384.407-.398.605h-.008v10.949c0 .253.14.486.363.605l3.973 2.119c.504.269 1.11.269 1.613 0l3.973-2.12a.69.69 0 0 0 .363-.604V6.514h-.007c.01-.237-.11-.474-.398-.605zm3.65 3.456-3.65 1.946-.08.04 3.73 1.99zm0 5.485-3.65 1.947a1.71 1.71 0 0 1-1.613 0l-3.65-1.947v4.709l3.973 2.119c.302.161.665.161.968 0l3.973-2.12zm-8.914-1.508 3.732-1.99-.081-.04-3.65-1.947zm3.974-6.828a1.03 1.03 0 0 1 .968 0l3.93 2.096-3.93 2.096a1.03 1.03 0 0 1-.968 0l-3.93-2.096zm.826 9.74v-4.33L16.915 12l-3.93 2.096a1 1 0 0 1-.142.062m-.685-4.33v4.33a1 1 0 0 1-.141-.062L8.086 12z"
      fill="#fff"
    />
    <path
      d="m17.481 4.338.566.353a2.06 2.06 0 0 1 .967 1.745v.421h-.686v-.421c0-.473-.243-.912-.644-1.163l-.566-.354zM6.952 19.309l.566.353.363-.581-.565-.354a1.37 1.37 0 0 1-.645-1.163v-.421h-.686v.421c0 .71.366 1.369.967 1.744"
      fill="#fff"
    />
  </svg> `,"logo-firefox":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M22.0996 9.12283V9.11954C22.0893 9.08392 22.0785 9.04829 22.0677 9.01267C22.0654 9.00376 22.0625 8.99486 22.0597 8.98642C22.0396 8.91892 22.019 8.85142 21.9974 8.78439L21.9946 8.77501C21.8631 8.3664 21.7065 7.96627 21.5258 7.57689C21.3508 7.19123 21.1487 6.81843 20.9211 6.46126C20.0421 5.04908 18.8416 3.86469 17.4177 3.0047C15.7832 2.01749 13.9094 1.49709 11.9999 1.50001C11.6718 1.50001 11.3436 1.51595 11.024 1.54689C9.89333 1.66595 7.98739 2.07236 6.44099 3.43033C12.0702 0.55595 19.5908 4.0172 18.951 10.4531C18.7232 12.75 16.7732 14.3283 14.9577 14.5945C14.6348 14.6439 14.3065 14.6472 13.9827 14.6044C9.5488 13.988 9.82021 10.3538 11.1674 8.79986C9.38614 8.78861 8.00474 10.9931 8.67599 13.1592C7.13145 10.2914 8.69239 5.79986 12.0008 4.44048C8.11255 3.87798 4.46755 5.76236 3.29614 9.03751C3.43603 7.84036 3.71527 6.66363 4.12817 5.53126C4.12817 5.53126 2.00849 7.20657 1.5763 10.7297C1.56974 10.7841 1.56364 10.8385 1.55802 10.8933C1.55567 10.912 1.5538 10.9308 1.55192 10.95C1.53536 11.1141 1.52286 11.2792 1.51442 11.4455C1.51442 11.4581 1.51442 11.4708 1.51442 11.4834C1.51114 11.5528 1.50833 11.6241 1.50646 11.6925V11.7511C1.50646 11.8336 1.50317 11.9161 1.50317 11.9991C1.50317 17.798 6.20427 22.4991 12.0032 22.4991C17.8021 22.4991 22.4999 17.7989 22.4999 12C22.5004 11.027 22.3657 10.0587 22.0996 9.12283Z"
      fill="var(--${e.color})"
    />
  </svg> `,"logo-opera":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.38088 5.80142C7.1621 7.2369 6.37562 9.36097 6.32062 11.7413V12.2583C6.37672 14.6398 7.1632 16.7606 8.37978 18.1982C9.95716 20.2464 12.3023 21.5466 14.9247 21.5466C16.4943 21.543 18.0275 21.0737 19.3301 20.198C17.1832 22.1276 14.3604 23.13 11.4773 22.9865C8.6536 22.8527 5.9898 21.6368 4.03885 19.591C2.08791 17.5452 0.999662 14.8267 1 11.9998C1 5.92352 5.92572 1 11.9998 1H12.0405C14.7321 1.00722 17.327 2.004 19.3312 3.80056C18.0268 2.92612 16.4929 2.45692 14.9225 2.45198C12.3023 2.45198 9.95716 3.75326 8.37758 5.80142H8.37978H8.38088ZM22.9997 11.9998C23.0016 13.548 22.6758 15.0791 22.0435 16.4923C21.4112 17.9055 20.4868 19.1688 19.3312 20.1991C16.5098 21.5741 13.8808 20.6127 13.0096 20.0121C15.7816 19.4027 17.8748 16.0522 17.8748 11.9998C17.8748 7.94639 15.7816 4.59694 13.0096 3.98865C13.8797 3.38916 16.5098 2.42668 19.3312 3.80056C20.487 4.83074 21.4114 6.09402 22.0437 7.50725C22.676 8.92048 23.0018 10.4516 22.9997 11.9998Z"
      fill="var(--${e.color})"
    />
  </svg> `,"logo-polygon":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.5 24C19.1276 24 24.5 18.6276 24.5 12C24.5 5.3724 19.1276 0 12.5 0C5.8724 0 0.5 5.3724 0.5 12C0.5 18.6276 5.8724 24 12.5 24Z"
      fill="#863FF8"
    />
    <path
      d="M9.71191 4.97714C9.31378 4.74102 8.82 4.74102 8.42187 4.97714L5.24142 6.86343C4.85284 7.09389 4.61426 7.51447 4.61426 7.96901V11.7555C4.61426 12.21 4.85284 12.6306 5.24142 12.8611L8.42187 14.7474C8.82 14.9835 9.31378 14.9835 9.71191 14.7474L16.2759 10.8543L19.0323 12.4891V15.7865L16.2759 17.4213L13.5195 15.7865V13.7103L11.8233 14.7792V16.0311C11.8233 16.4856 12.0619 16.9062 12.4504 17.1367L15.6309 19.023C16.029 19.2591 16.5228 19.2591 16.9209 19.023L20.1014 17.1367C20.49 16.9062 20.7285 16.4856 20.7285 16.0311V12.2446C20.7285 11.7901 20.49 11.3695 20.1014 11.139L16.9209 9.25272C16.5228 9.0166 16.029 9.0166 15.6309 9.25272L9.06689 13.1458L6.3105 11.511V8.21355L9.06689 6.57877L11.8233 8.21355V10.2898L13.5195 9.22093V7.96901C13.5195 7.51447 13.2809 7.09389 12.8924 6.86343L9.71191 4.97714Z"
      fill="white"
    />
  </svg> `,"logo-safari":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_1898_22739)">
      <path
        d="M23.25 12C23.25 13.4774 22.959 14.9403 22.3936 16.3052C21.8283 17.6701 20.9996 18.9103 19.9549 19.955C18.9103 20.9996 17.6701 21.8283 16.3052 22.3937C14.9403 22.959 13.4774 23.25 12 23.25C9.0163 23.25 6.15483 22.0647 4.04505 19.955C1.93526 17.8452 0.75 14.9837 0.75 12C0.75 9.01632 1.93526 6.15484 4.04505 4.04505C6.15483 1.93527 9.01631 0.750001 12 0.75C13.4774 0.75 14.9403 1.04099 16.3052 1.60636C17.6701 2.17172 18.9103 3.00039 19.9549 4.04505C20.9996 5.08971 21.8283 6.3299 22.3936 7.69481C22.959 9.05972 23.25 10.5226 23.25 12Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5001 3.01394C10.1046 3.09162 8.73306 3.49395 7.50005 4.20582C6.95968 4.51781 6.45749 4.88257 5.99941 5.29238L7.05031 6.34328C7.24557 6.53854 7.24557 6.85512 7.05031 7.05038C6.85504 7.24565 6.53846 7.24565 6.3432 7.05038L5.29232 5.99951C4.36055 7.04115 3.67521 8.29546 3.30672 9.67068C3.14523 10.2734 3.04805 10.8864 3.01392 11.5001H4.50005C4.77619 11.5001 5.00005 11.7239 5.00005 12.0001C5.00005 12.2762 4.77619 12.5001 4.50005 12.5001H3.01394C3.09162 13.8955 3.49395 15.267 4.20582 16.5001C4.51784 17.0405 4.88264 17.5427 5.29249 18.0008L6.34352 16.9498C6.47495 16.8184 6.66135 16.7754 6.82871 16.8209L10.6884 11.273L12.5985 13.155L7.14098 17.073C7.2388 17.2613 7.20868 17.4989 7.05063 17.6569L5.99963 18.7079C7.04125 19.6396 8.29551 20.3249 9.67068 20.6934C10.2734 20.8549 10.8864 20.9521 11.5001 20.9862V19.5001C11.5001 19.2239 11.7239 19.0001 12.0001 19.0001C12.2762 19.0001 12.5001 19.2239 12.5001 19.5001V20.9862C13.8955 20.9085 15.267 20.5062 16.5001 19.7943C17.0404 19.4823 17.5426 19.1176 18.0006 18.7078L16.9497 17.6569C16.7545 17.4617 16.7545 17.1451 16.9497 16.9498C17.145 16.7546 17.4616 16.7546 17.6568 16.9498L18.7077 18.0007C19.6395 16.959 20.3249 15.7047 20.6934 14.3294C20.8549 13.7267 20.9521 13.1137 20.9862 12.5001H19.5001C19.2239 12.5001 19.0001 12.2762 19.0001 12.0001C19.0001 11.7239 19.2239 11.5001 19.5001 11.5001H20.9862C20.9085 10.1046 20.5062 8.73306 19.7943 7.50005C19.4823 6.95961 19.1174 6.45736 18.7076 5.99923L17.6567 7.05012C17.4614 7.24538 17.1448 7.24538 16.9496 7.05012C16.9283 7.02889 16.9094 7.00622 16.8928 6.98243L12.5988 13.1547L10.6887 11.2727L16.8314 6.86278C16.7696 6.687 16.809 6.48357 16.9496 6.34301L18.0004 5.29216C16.9588 4.36047 15.7046 3.67519 14.3294 3.30672C13.7267 3.14523 13.1137 3.04805 12.5001 3.01392V4.50008C12.5001 4.77622 12.2762 5.00008 12.0001 5.00008C11.7239 5.00008 11.5001 4.77622 11.5001 4.50008V3.01394Z"
        fill="var(--${e.color})"
      />
      <rect
        x="10.6477"
        y="11.3079"
        width="1.92994"
        height="1.92994"
        rx="0.96497"
        transform="rotate(-1.74608 10.6477 11.3079)"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_1898_22739">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-x":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="m2.05 2.599 7.757 10.37-7.805 8.433h1.757l6.833-7.382 5.522 7.382h5.978l-8.193-10.955L21.164 2.6h-1.756l-6.294 6.799-5.085-6.8zm2.584 1.294h2.747l12.127 16.215h-2.746z"
      fill="#243542"
    />
  </svg> `,mail:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.875 4.5H4.125C3.08947 4.5 2.25 5.33947 2.25 6.375V17.625C2.25 18.6605 3.08947 19.5 4.125 19.5H19.875C20.9105 19.5 21.75 18.6605 21.75 17.625V6.375C21.75 5.33947 20.9105 4.5 19.875 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.25 7.5L12 12.75L18.75 7.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"menu-1":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <mask id="path-1-inside-1_156_2042" fill="white">
      <rect x="5" y="5" width="6" height="6" rx="1" />
    </mask>
    <rect
      x="5"
      y="5"
      width="6"
      height="6"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-1-inside-1_156_2042)"
    />
    <mask id="path-2-inside-2_156_2042" fill="white">
      <rect x="5" y="13" width="6" height="6" rx="1" />
    </mask>
    <rect
      x="5"
      y="13"
      width="6"
      height="6"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-2-inside-2_156_2042)"
    />
    <mask id="path-3-inside-3_156_2042" fill="white">
      <rect x="13" y="5" width="6" height="6" rx="1" />
    </mask>
    <rect
      x="13"
      y="5"
      width="6"
      height="6"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-3-inside-3_156_2042)"
    />
    <mask id="path-4-inside-4_156_2042" fill="white">
      <rect x="13" y="13" width="6" height="6" rx="1" />
    </mask>
    <rect
      x="13"
      y="13"
      width="6"
      height="6"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-4-inside-4_156_2042)"
    />
  </svg> `,"menu-2":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19 7H9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 12H9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 17H9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 7H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 12H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 17H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"metamask-logo":e=>t.html`<svg
    width="28"
    height="26"
    viewBox="0 0 28 26"
    fill="none"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="metamask">
      <path
        id="Vector"
        d="M25.5986 1L15.4971 8.50254L17.3651 4.07614L25.5986 1Z"
        fill="#E2761B"
        stroke="#E2761B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="Group">
        <path
          id="Vector_2"
          d="M2.2793 1L12.2996 8.5736L10.5229 4.07614L2.2793 1Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_3"
          d="M21.9648 18.3909L19.2744 22.5127L25.0308 24.0965L26.6856 18.4822L21.9648 18.3909Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_4"
          d="M1.21289 18.4822L2.85756 24.0965L8.6139 22.5127L5.92355 18.3909L1.21289 18.4822Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_5"
          d="M8.28961 11.4265L6.68555 13.8529L12.4013 14.1067L12.1982 7.9646L8.28961 11.4265Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_6"
          d="M19.5884 11.4263L15.629 7.89331L15.4971 14.1065L21.2027 13.8527L19.5884 11.4263Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_7"
          d="M8.61426 22.5128L12.0457 20.8377L9.08126 18.5229L8.61426 22.5128Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_8"
          d="M15.832 20.8377L19.2737 22.5128L18.7965 18.5229L15.832 20.8377Z"
          fill="#E4761B"
          stroke="#E4761B"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g id="Group_2">
        <path
          id="Vector_9"
          d="M19.2746 22.5128L15.833 20.8376L16.1071 23.0813L16.0767 24.0255L19.2746 22.5128Z"
          fill="#D7C1B3"
          stroke="#D7C1B3"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_10"
          d="M8.61426 22.5128L11.8122 24.0255L11.7919 23.0813L12.0457 20.8376L8.61426 22.5128Z"
          fill="#D7C1B3"
          stroke="#D7C1B3"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        id="Vector_11"
        d="M11.8629 17.0407L9 16.198L11.0203 15.2742L11.8629 17.0407Z"
        fill="#233447"
        stroke="#233447"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_12"
        d="M16.0156 17.0407L16.8583 15.2742L18.8887 16.198L16.0156 17.0407Z"
        fill="#233447"
        stroke="#233447"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="Group_3">
        <path
          id="Vector_13"
          d="M8.61418 22.5127L9.10149 18.3909L5.92383 18.4822L8.61418 22.5127Z"
          fill="#CD6116"
          stroke="#CD6116"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_14"
          d="M18.7871 18.3909L19.2744 22.5127L21.9648 18.4822L18.7871 18.3909Z"
          fill="#CD6116"
          stroke="#CD6116"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_15"
          d="M21.2027 13.8528L15.4971 14.1066L16.025 17.0406L16.8676 15.2741L18.8981 16.198L21.2027 13.8528Z"
          fill="#CD6116"
          stroke="#CD6116"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_16"
          d="M9.00027 16.198L11.0307 15.2741L11.8632 17.0406L12.4013 14.1066L6.68555 13.8528L9.00027 16.198Z"
          fill="#CD6116"
          stroke="#CD6116"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <g id="Group_4">
        <path
          id="Vector_17"
          d="M6.68555 13.8528L9.08149 18.5228L9.00027 16.198L6.68555 13.8528Z"
          fill="#E4751F"
          stroke="#E4751F"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_18"
          d="M18.8984 16.198L18.7969 18.5228L21.203 13.8528L18.8984 16.198Z"
          fill="#E4751F"
          stroke="#E4751F"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_19"
          d="M12.4014 14.1067L11.8633 17.0407L12.5333 20.5026L12.6856 15.9443L12.4014 14.1067Z"
          fill="#E4751F"
          stroke="#E4751F"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_20"
          d="M15.4977 14.1067L15.2236 15.9341L15.3455 20.5026L16.0257 17.0407L15.4977 14.1067Z"
          fill="#E4751F"
          stroke="#E4751F"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        id="Vector_21"
        d="M16.0249 17.0406L15.3447 20.5026L15.832 20.8376L18.7965 18.5229L18.898 16.198L16.0249 17.0406Z"
        fill="#F6851B"
        stroke="#F6851B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_22"
        d="M9 16.198L9.08122 18.5229L12.0457 20.8376L12.533 20.5026L11.8629 17.0406L9 16.198Z"
        fill="#F6851B"
        stroke="#F6851B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_23"
        d="M16.0762 24.0254L16.1066 23.0812L15.8528 22.8579H12.0254L11.7919 23.0812L11.8122 24.0254L8.61426 22.5127L9.73101 23.4264L11.995 25H15.8833L18.1574 23.4264L19.2742 22.5127L16.0762 24.0254Z"
        fill="#C0AD9E"
        stroke="#C0AD9E"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_24"
        d="M15.8326 20.8375L15.3453 20.5024H12.5331L12.0458 20.8375L11.792 23.0811L12.0255 22.8578H15.8529L16.1067 23.0811L15.8326 20.8375Z"
        fill="#161616"
        stroke="#161616"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="Group_5">
        <path
          id="Vector_25"
          d="M26.0259 8.98985L26.8888 4.84772L25.5995 1L15.833 8.24873L19.5894 11.4264L24.899 12.9797L26.0767 11.6091L25.569 11.2437L26.3812 10.5025L25.7518 10.0152L26.564 9.39594L26.0259 8.98985Z"
          fill="#763D16"
          stroke="#763D16"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_26"
          d="M1 4.84772L1.86294 8.98985L1.31472 9.39594L2.1269 10.0152L1.50761 10.5025L2.3198 11.2437L1.81218 11.6091L2.9797 12.9797L8.28934 11.4264L12.0457 8.24873L2.27919 1L1 4.84772Z"
          fill="#763D16"
          stroke="#763D16"
          stroke-width="1.25143"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        id="Vector_27"
        d="M24.8984 12.9798L19.5888 11.4265L21.203 13.8529L18.7969 18.523L21.9644 18.4824H26.6852L24.8984 12.9798Z"
        fill="#F6851B"
        stroke="#F6851B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_28"
        d="M8.28903 11.4265L2.97939 12.9798L1.21289 18.4824H5.92355L9.08091 18.523L6.68497 13.8529L8.28903 11.4265Z"
        fill="#F6851B"
        stroke="#F6851B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="Vector_29"
        d="M15.4971 14.1066L15.8321 8.24876L17.3753 4.07617H10.5225L12.0453 8.24876L12.4006 14.1066L12.5225 15.9543L12.5326 20.5026H15.3448L15.3651 15.9543L15.4971 14.1066Z"
        fill="#F6851B"
        stroke="#F6851B"
        stroke-width="1.25143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>`,migrate:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.96436 5.42896H13.207V9.6716"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.3284 11.793H19.571V16.0356"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 6.13609L5.42896 13.2072"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.864 12.5L11.793 19.571"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,minimize:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 12V7C4 5.34315 5.34315 4 7 4H12M20 12V17C20 18.6569 18.6569 20 17 20H12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M14.0001 6C14.0001 7.82245 14 10 14 10L18 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 4L14 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.99993 18C9.99993 16.1776 10 14 10 14L6 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 20L10 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,network:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5.75 20.125C4.09315 20.125 2.75 18.7819 2.75 17.125C2.75 15.4681 4.09315 14.125 5.75 14.125C7.40685 14.125 8.75 15.4681 8.75 17.125C8.75 18.7819 7.40685 20.125 5.75 20.125Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M18.25 20.125C16.5931 20.125 15.25 18.7819 15.25 17.125C15.25 15.4681 16.5931 14.125 18.25 14.125C19.9069 14.125 21.25 15.4681 21.25 17.125C21.25 18.7819 19.9069 20.125 18.25 20.125Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M12 8.875C10.3431 8.875 9 7.53185 9 5.875C9 4.21815 10.3431 2.875 12 2.875C13.6569 2.875 15 4.21815 15 5.875C15 7.53185 13.6569 8.875 12 8.875Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M10.125 8.375L6.375 14.8702"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M15.75 17.75L8.25 17.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M17 14.625L13.25 8.12981"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,notifications:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.0475 16.4733C18.8437 15 17.9939 14.25 17.9939 10.1883C17.9939 6.46875 16.0945 5.14359 14.5312 4.5C14.3236 4.41469 14.1281 4.21875 14.0648 4.00547C13.7906 3.07219 13.0219 2.25 12 2.25C10.9781 2.25 10.2089 3.07266 9.93749 4.00641C9.87421 4.22203 9.67874 4.41469 9.47108 4.5C7.90593 5.14453 6.00842 6.465 6.00842 10.1883C6.00608 14.25 5.15624 15 3.95249 16.4733C3.45374 17.0836 3.89061 18 4.76296 18H19.2417C20.1094 18 20.5434 17.0808 20.0475 16.4733Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 18V18.75C15 19.5456 14.6839 20.3087 14.1213 20.8713C13.5587 21.4339 12.7956 21.75 12 21.75C11.2044 21.75 10.4413 21.4339 9.87868 20.8713C9.31607 20.3087 9 19.5456 9 18.75V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"phone-portrait-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M15.75 0.75H8.25C7.00736 0.75 6 1.75736 6 3V21C6 22.2426 7.00736 23.25 8.25 23.25H15.75C16.9926 23.25 18 22.2426 18 21V3C18 1.75736 16.9926 0.75 15.75 0.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.25 0.75H9.375C9.47446 0.75 9.56984 0.789509 9.64017 0.859835C9.71049 0.930161 9.75 1.02554 9.75 1.125C9.75 1.32391 9.82902 1.51468 9.96967 1.65533C10.1103 1.79598 10.3011 1.875 10.5 1.875H13.5C13.6989 1.875 13.8897 1.79598 14.0303 1.65533C14.171 1.51468 14.25 1.32391 14.25 1.125C14.25 1.02554 14.2895 0.930161 14.3598 0.859835C14.4302 0.789509 14.5255 0.75 14.625 0.75H15.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,pin:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.99995 4.61538C7.99995 4.27552 8.27547 4 8.61533 4H8.99995H15H15.3846C15.7244 4 16 4.27552 16 4.61538C16 4.95525 15.7244 5.23076 15.3846 5.23076H15V12L17.1464 14.1464C17.4614 14.4614 17.2383 15 16.7928 15H12.6665V19.3333C12.6665 19.7015 12.3681 20 11.9999 20C11.6317 20 11.3332 19.7015 11.3332 19.3333V15H7.20706C6.7616 15 6.53852 14.4614 6.8535 14.1464L8.99995 12V5.23076H8.61533C8.27547 5.23076 7.99995 4.95525 7.99995 4.61538Z"
      fill="var(--${e.color})"
    />
  </svg> `,"play-filled":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M7.11732 7.23208C7.11732 6.46228 7.95065 5.98115 8.61732 6.36605L16.1173 10.6962C16.784 11.0811 16.784 12.0433 16.1173 12.4282L8.61732 16.7584C7.95065 17.1433 7.11732 16.6621 7.11732 15.8923L7.11732 7.23208Z"
      fill="var(--${e.color})"
    />
  </svg> `,"play-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.24232 7.01557L15.7423 11.3457C15.909 11.4419 15.909 11.6825 15.7423 11.7787L8.24232 16.1088C8.07565 16.2051 7.86732 16.0848 7.86732 15.8923L7.86732 7.23208C7.86732 7.03963 8.07565 6.91934 8.24232 7.01557Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,plus:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.9998 20V4"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.99976 12H19.9998"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"profile-add":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4.125 8.25V13.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.75 10.875H1.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"profile-export":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 13L4 7.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 9L4 7L2 9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"profile-import":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 7V12.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 11L4 13L6 11"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"profile-recovery":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_642_8623)">
      <path
        d="M2.75 18.6667C2.75 16.8725 4.09998 15.4016 6.10179 14.3324C8.07966 13.2759 10.4587 12.75 12 12.75C13.5413 12.75 15.9203 13.2759 17.8982 14.3324C19.9 15.4016 21.25 16.8725 21.25 18.6667V21.25H2.75V18.6667Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M13.9214 9.90371C13.3135 10.1872 12.6472 10.3227 11.9769 10.2993C11.3066 10.2759 10.6514 10.0942 10.0648 9.76904C9.4782 9.44388 8.97688 8.9845 8.60183 8.42847C8.22679 7.87244 7.98866 7.23554 7.90692 6.56985"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
      <path
        d="M10.0759 6.65833L7.61788 5.25903L6.21859 7.71708"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
      <path
        d="M10.0786 2.45042C10.6865 2.16697 11.3528 2.03141 12.0231 2.05481C12.6934 2.07822 13.3486 2.25993 13.9352 2.58509C14.5218 2.91025 15.0231 3.36962 15.3982 3.92565C15.7732 4.48168 16.0113 5.11858 16.0931 5.78428"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
      <path
        d="M13.9241 5.6958L16.3821 7.09509L17.7814 4.63705"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_642_8623">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"profile-recovery-2":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_643_8332)">
      <path
        d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
      />
      <path
        d="M1 10L6.25 10"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5 12L7 10L5 8"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
      <path
        d="M7 5L1.75 5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 3L1 5L3 7"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_643_8332">
        <rect width="24" height="24" fill="var(--${e.secondaryColor})" />
      </clipPath>
    </defs>
  </svg> `,"profile-restore":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3.84377 10.6109L2.26123 9.28296"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 13H2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10V8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,profile:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M16.25 6C16.25 8.34721 14.3472 10.25 12 10.25C9.65279 10.25 7.75 8.34721 7.75 6C7.75 3.65279 9.65279 1.75 12 1.75C14.3472 1.75 16.25 3.65279 16.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M2.75 18.6667C2.75 16.8725 4.09998 15.4016 6.10179 14.3324C8.07966 13.2759 10.4587 12.75 12 12.75C13.5413 12.75 15.9203 13.2759 17.8982 14.3324C19.9 15.4016 21.25 16.8725 21.25 18.6667V21.25H2.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"qr-code":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <mask id="path-1-inside-1_2994_36309" fill="white">
      <rect x="4" y="4" width="6.4" height="6.4" rx="1" />
    </mask>
    <rect
      x="4"
      y="4"
      width="6.4"
      height="6.4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-1-inside-1_2994_36309)"
    />
    <mask id="path-2-inside-2_2994_36309" fill="white">
      <rect x="4" y="13.6" width="6.4" height="6.4" rx="1" />
    </mask>
    <rect
      x="4"
      y="13.6"
      width="6.4"
      height="6.4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-2-inside-2_2994_36309)"
    />
    <rect
      x="13.6001"
      y="13.6"
      width="1.6"
      height="1.6"
      rx="0.8"
      fill="var(--${e.color})"
    />
    <rect
      x="18.3999"
      y="13.6"
      width="1.6"
      height="1.6"
      rx="0.8"
      fill="var(--${e.color})"
    />
    <rect
      x="18.3999"
      y="18.4"
      width="1.6"
      height="1.6"
      rx="0.8"
      fill="var(--${e.color})"
    />
    <rect
      x="13.6001"
      y="18.4"
      width="1.6"
      height="1.6"
      rx="0.8"
      fill="var(--${e.color})"
    />
    <rect
      x="16"
      y="16"
      width="1.6"
      height="1.6"
      rx="0.8"
      fill="var(--${e.color})"
    />
    <mask id="path-8-inside-3_2994_36309" fill="white">
      <rect x="13.6001" y="4" width="6.4" height="6.4" rx="1" />
    </mask>
    <rect
      x="13.6001"
      y="4"
      width="6.4"
      height="6.4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-8-inside-3_2994_36309)"
    />
  </svg> `,relayer:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13.9999 14C13.9999 12.1776 14 10 14 10H10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.99993 19C8.99993 17.1776 9 15 9 15H5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.9999 9C18.9999 7.17755 19 5 19 5H15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,reload:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M17.8336 6.16637C19.1833 7.51601 20.0232 9.29187 20.2103 11.1914C20.3974 13.0908 19.92 14.9964 18.8596 16.5835C17.7992 18.1705 16.2213 19.3407 14.3949 19.8948C12.5684 20.4488 10.6063 20.3524 8.84286 19.622C7.07947 18.8916 5.6239 17.5723 4.72415 15.889C3.8244 14.2057 3.53616 12.2625 3.90852 10.3905C4.28089 8.5185 5.29082 6.83352 6.76625 5.62267C8.24168 4.41181 10.0913 3.75 12 3.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M20.979 5.40921C19.1661 5.2228 17 5 17 5L16.5909 8.97902"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"return-down":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.1716 16.1715C13.4603 17.4602 15 19 15 19L17.8284 16.1716"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 11.8824V8C7 6.34315 8.34315 5 10 5H12C13.6569 5 15 6.34315 15 8V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"return-left":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M7.82847 12.1716C6.53981 13.4603 5 15 5 15L7.82843 17.8284"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.1176 7H16C17.6569 7 19 8.34315 19 10V12C19 13.6569 17.6569 15 16 15H6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"return-right":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M16.1715 12.8284C17.4602 11.5397 19 10 19 10L16.1716 7.17157"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.8824 18L8 18C6.34315 18 5 16.6569 5 15L5 13C5 11.3431 6.34315 10 8 10L18 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"return-up":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.1716 7.82847C13.4603 6.53981 15 5 15 5L17.8284 7.82843"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 12.1176V16C7 17.6569 8.34315 19 10 19H12C13.6569 19 15 17.6569 15 16V6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,search:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.25 10.5C18.25 14.7802 14.7802 18.25 10.5 18.25C6.21979 18.25 2.75 14.7802 2.75 10.5C2.75 6.21979 6.21979 2.75 10.5 2.75C14.7802 2.75 18.25 6.21979 18.25 10.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M16.5303 15.4697L16 14.9393L14.9393 16L15.4697 16.5303L16.5303 15.4697ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM15.4697 16.5303L20.4697 21.5303L21.5303 20.4697L16.5303 15.4697L15.4697 16.5303Z"
      fill="var(--${e.color})"
    />
  </svg> `,settings:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.10627 15.6778L5.50414 15.8918C6.53605 16.0498 7.27298 16.9737 7.19699 18.0146L7.094 19.4255C7.064 19.8365 7.28798 20.2234 7.65894 20.4024L8.69285 20.9004C9.06381 21.0793 9.50677 21.0123 9.80975 20.7334L10.8486 19.7735C11.6146 19.0655 12.7965 19.0655 13.5634 19.7735L14.6023 20.7334C14.9053 21.0133 15.3472 21.0793 15.7192 20.9004L16.7551 20.4014C17.1251 20.2234 17.3481 19.8375 17.3181 19.4275L17.2151 18.0146C17.1391 16.9737 17.876 16.0498 18.9079 15.8918L20.3058 15.6778C20.7127 15.6158 21.0407 15.3109 21.1327 14.9089L21.3877 13.791C21.4797 13.389 21.3167 12.9721 20.9767 12.7401L19.8098 11.9412C18.9489 11.3512 18.6859 10.1993 19.2059 9.29443L19.9108 8.06854C20.1158 7.71157 20.0818 7.26461 19.8248 6.94264L19.1099 6.04573C18.8529 5.72376 18.425 5.59077 18.031 5.71176L16.6791 6.12572C15.6802 6.43169 14.6153 5.91874 14.2313 4.94783L13.7134 3.63495C13.5614 3.25098 13.1904 2.99901 12.7775 3L11.6316 3.00301C11.2186 3.00401 10.8486 3.25798 10.6987 3.64295L10.1937 4.94083C9.81374 5.91774 8.74384 6.43469 7.74194 6.12672L6.33406 5.69476C5.9391 5.57277 5.50914 5.70676 5.25216 6.03073L4.54223 6.92864C4.28525 7.25361 4.25426 7.70157 4.46324 8.05854L5.18417 9.28743C5.71512 10.1933 5.45515 11.3562 4.58923 11.9492L3.43633 12.7391C3.09636 12.9721 2.93338 13.389 3.02537 13.79L3.28035 14.9079C3.37134 15.3109 3.69931 15.6158 4.10627 15.6778Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.1214 9.87858C15.2929 11.05 15.2929 12.95 14.1214 14.1214C12.95 15.2929 11.05 15.2929 9.87858 14.1214C8.70714 12.95 8.70714 11.05 9.87858 9.87858C11.05 8.70714 12.95 8.70714 14.1214 9.87858Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"smart-contract-doc":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M10 8H9.38462C8.83233 8 8.38462 8.44772 8.38462 9V10.4887C8.38462 10.8098 8.23042 11.1114 7.97011 11.2994L7.56124 11.5947C7.2849 11.7942 7.2849 12.2058 7.56124 12.4053L7.97011 12.7006C8.23042 12.8886 8.38462 13.1902 8.38462 13.5113V15C8.38462 15.5523 8.83233 16 9.38462 16H10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M14 8H14.6154C15.1677 8 15.6154 8.44772 15.6154 9V10.4887C15.6154 10.8098 15.7696 11.1114 16.0299 11.2994L16.4388 11.5947C16.7151 11.7942 16.7151 12.2058 16.4388 12.4053L16.0299 12.7006C15.7696 12.8886 15.6154 13.1902 15.6154 13.5113V15C15.6154 15.5523 15.1677 16 14.6154 16H14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <rect
      x="3.25"
      y="1.25"
      width="17.5"
      height="21.5"
      rx="2.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"smart-contract":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9 3H7.69231C6.03545 3 4.69231 4.34315 4.69231 6V9.18833C4.69231 9.53715 4.51055 9.86076 4.21268 10.0423L1.70067 11.573C1.38092 11.7679 1.38092 12.2321 1.70067 12.427L4.21268 13.9577C4.51055 14.1392 4.69231 14.4628 4.69231 14.8117V18C4.69231 19.6569 6.03545 21 7.69231 21H9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M15 3H16.3077C17.9645 3 19.3077 4.34315 19.3077 6V9.18833C19.3077 9.53715 19.4895 9.86076 19.7873 10.0423L22.2993 11.573C22.6191 11.7679 22.6191 12.2321 22.2993 12.427L19.7873 13.9577C19.4895 14.1392 19.3077 14.4628 19.3077 14.8117V18C19.3077 19.6569 17.9645 21 16.3077 21H15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,spinner:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.25 12C20.25 13.6317 19.7661 15.2267 18.8596 16.5835C17.9531 17.9402 16.6646 18.9976 15.1571 19.622C13.6496 20.2464 11.9908 20.4098 10.3905 20.0915C8.79016 19.7732 7.32015 18.9874 6.16637 17.8336C5.01259 16.6798 4.22685 15.2098 3.90852 13.6095C3.59019 12.0092 3.75357 10.3504 4.37799 8.84286C5.00242 7.33537 6.05984 6.0469 7.41655 5.14038C8.77325 4.23385 10.3683 3.75 12 3.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,"star-filled":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.1751 3.20359C11.5723 2.62402 12.4277 2.62401 12.8249 3.20359L15.3257 6.85257C15.4557 7.0423 15.6472 7.18141 15.8678 7.24645L20.111 8.49726C20.7849 8.69593 21.0492 9.50939 20.6208 10.0663L17.9232 13.5723C17.7829 13.7546 17.7098 13.9796 17.7161 14.2096L17.8377 18.6316C17.8571 19.334 17.1651 19.8367 16.5031 19.6013L12.335 18.1191C12.1183 18.0421 11.8817 18.0421 11.665 18.1191L7.49693 19.6013C6.83492 19.8367 6.14295 19.334 6.16226 18.6316L6.28388 14.2096C6.29021 13.9796 6.21708 13.7546 6.07681 13.5723L3.37922 10.0663C2.95075 9.5094 3.21506 8.69593 3.88901 8.49726L8.1322 7.24645C8.35282 7.18141 8.54429 7.0423 8.67432 6.85257L11.1751 3.20359Z"
      fill="var(--${e.color})"
    />
  </svg> `,"star-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13.0311 4.83116L14.506 6.98324C14.8636 7.505 15.3901 7.88754 15.9968 8.06639L18.4993 8.80408C19.3418 9.05242 19.6722 10.0693 19.1366 10.7653L17.5456 12.8331C17.1599 13.3344 16.9588 13.9534 16.9762 14.5857L17.0479 17.1936C17.0721 18.0716 16.2071 18.7 15.3796 18.4058L12.9214 17.5316C12.3254 17.3197 11.6746 17.3197 11.0786 17.5316L8.62043 18.4058C7.79292 18.7 6.92795 18.0716 6.9521 17.1937L7.02382 14.5857C7.04121 13.9534 6.8401 13.3344 6.45438 12.8331L4.86341 10.7653C4.32783 10.0693 4.65822 9.05242 5.50066 8.80408L8.00317 8.06639C8.60989 7.88754 9.13641 7.505 9.494 6.98324L10.9689 4.83117C11.4654 4.1067 12.5346 4.1067 13.0311 4.83116Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"step-dot":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="#243542"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <circle
      cx="12"
      cy="12"
      r="3.25"
      fill="var(--${e.secondaryColor})"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,"step-progress":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="#243542"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M18.25 12C18.25 13.2361 17.8834 14.4445 17.1967 15.4723C16.5099 16.5001 15.5338 17.3012 14.3918 17.7742C13.2497 18.2473 11.9931 18.3711 10.7807 18.1299C9.5683 17.8888 8.45466 17.2935 7.58058 16.4194C6.7065 15.5453 6.11125 14.4317 5.87009 13.2193C5.62893 12.0069 5.75271 10.7503 6.22575 9.60823C6.6988 8.46619 7.49988 7.49007 8.52769 6.80331C9.55549 6.11656 10.7639 5.75 12 5.75"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,steps:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14 10.0001C12.1776 10.0001 10 10 10 10L10 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 6.00007C16.1776 6.00007 14 6 14 6L14 10"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 14.0001C8.17755 14.0001 6 14 6 14L6 18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,tick:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19 8L9.48366 17L6.92157 14.4286L5.64052 13.1429L5 12.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"timer-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 4H20"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M6 5C6 5.17925 6.00788 5.34626 6.02293 5.50178C6.28304 8.18956 10.714 9.22784 11.5854 11.7837V11.7837C11.7202 12.1794 12.2798 12.1794 12.4146 11.7837V11.7837C13.286 9.22784 17.717 8.18956 17.9771 5.50178C17.9921 5.34626 18 5.17925 18 5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M20 20L4 20"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M18 19C18 18.8208 17.9921 18.6537 17.9771 18.4982C17.717 15.8104 13.286 14.7722 12.4146 12.2163V12.2163C12.2798 11.8206 11.7202 11.8206 11.5854 12.2163V12.2163C10.714 14.7722 6.28304 15.8104 6.02293 18.4982C6.00788 18.6537 6 18.8208 6 19"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M7.5 16C10.0994 15.1537 14.6225 15.4636 16.5 16C17.4191 16.2626 17.5293 16.9407 17.5217 17.288C17.5187 17.4289 17.5143 17.5714 17.5419 17.7096L17.7608 18.8039C17.8845 19.4227 17.4112 20 16.7802 20H7.2198C6.58876 20 6.11546 19.4227 6.23922 18.8039L6.4584 17.708C6.48583 17.5708 6.48159 17.4292 6.48042 17.2894C6.47759 16.9509 6.59647 16.2941 7.5 16Z"
      fill="var(--${e.color})"
    />
  </svg> `,"transaction-receive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5.25 9.875L12 16.625L18.75 9.875"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 15.6875V2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 18V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,"transaction-send":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.75 8.75L12 2L5.25 8.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2.9375L12 16.625"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2 18V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,transfer:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14.25 2.25L19.5 7.5L14.25 12.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.697 7.5H4.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.75 21.75L4.5 16.5L9.75 11.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.34375 16.5H19.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,trash:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6 9L6.64154 17.2331C6.76323 18.7948 8.06601 20 9.63247 20H14.3675C15.934 20 17.2368 18.7948 17.3585 17.2331L18 9"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 6H20"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 6H7.75C8.44036 6 9 5.44036 9 4.75V4.75C9 4.05964 9.55964 3.5 10.25 3.5H13.75C14.4404 3.5 15 4.05964 15 4.75V4.75C15 5.44036 15.5596 6 16.25 6H18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"turn-down":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5.99999 13.1715C7.28865 14.4602 8.82837 16 8.82837 16L11.6568 13.1716"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 7L11.8284 7C10.1715 7 8.82837 8.34315 8.82837 10L8.82837 15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"turn-left":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9.82847 5.99999C8.53981 7.28865 7 8.82837 7 8.82837L9.82843 11.6568"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 17V11.8284C16 10.1715 14.6569 8.82837 13 8.82837H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"turn-right":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M13.1715 5.99999C14.4602 7.28865 16 8.82837 16 8.82837L13.1716 11.6568"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 17V11.8284C7 10.1715 8.34315 8.82837 10 8.82837H15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"turn-up":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5.99999 9.82847C7.28865 8.53981 8.82837 7 8.82837 7L11.6568 9.82843"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 16L11.8284 16C10.1715 16 8.82837 14.6569 8.82837 13L8.82837 8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,unlink:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.77 12.884 5.356 11.47a4.5 4.5 0 1 1 6.364-6.364l1.414 1.414m4.596 4.596 1.415 1.414a4.5 4.5 0 1 1-6.364 6.364l-1.415-1.414M16.7 3.722l-.732 2.732m4.56 1.096-2.732.732M3.972 16.45l2.732-.732m1.096 4.56.732-2.732m5.132-6.96-2.828 2.828"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,unlocked:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5 19V11C5 10.4477 5.44772 10 6 10H18C18.5523 10 19 10.4477 19 11V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M13.2375 15.7375C13.9208 15.0541 13.9208 13.9459 13.2375 13.2625C12.5541 12.5792 11.4459 12.5792 10.7625 13.2625C10.0792 13.9459 10.0792 15.0541 10.7625 15.7375C11.4459 16.4208 12.5541 16.4208 13.2375 15.7375Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M6.25 10V10.75H7.75V10H6.25ZM7.75 10V7H6.25V10H7.75ZM11 3.75H13.5V2.25H11V3.75ZM13.5 3.75C15.0188 3.75 16.25 4.98122 16.25 6.5H17.75C17.75 4.15279 15.8472 2.25 13.5 2.25V3.75ZM7.75 7C7.75 5.20507 9.20507 3.75 11 3.75V2.25C8.37665 2.25 6.25 4.37665 6.25 7H7.75Z"
      fill="var(--${e.color})"
    />
    <path
      d="M12 16.5V18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"wallet-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.5 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V18C2.25 19.2426 3.25736 20.25 4.5 20.25H19.5C20.7426 20.25 21.75 19.2426 21.75 18V9C21.75 7.75736 20.7426 6.75 19.5 6.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M19.2825 6.74998V5.34373C19.2824 4.99883 19.2062 4.6582 19.0592 4.34615C18.9123 4.0341 18.6984 3.75832 18.4326 3.53849C18.1668 3.31866 17.8558 3.16019 17.5217 3.0744C17.1877 2.98861 16.8388 2.9776 16.5 3.04217L4.155 5.1492C3.6189 5.25136 3.13526 5.53741 2.78749 5.958C2.43972 6.37859 2.24963 6.90736 2.25 7.4531V9.74998"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M17.25 15C16.9533 15 16.6633 14.912 16.4166 14.7472C16.17 14.5824 15.9777 14.3481 15.8642 14.074C15.7506 13.7999 15.7209 13.4983 15.7788 13.2074C15.8367 12.9164 15.9796 12.6491 16.1893 12.4393C16.3991 12.2296 16.6664 12.0867 16.9574 12.0288C17.2483 11.9709 17.5499 12.0006 17.824 12.1142C18.0981 12.2277 18.3324 12.42 18.4972 12.6666C18.662 12.9133 18.75 13.2033 18.75 13.5C18.75 13.8978 18.592 14.2794 18.3107 14.5607C18.0294 14.842 17.6478 15 17.25 15Z"
      fill="var(--${e.color})"
    />
  </svg> `,"wallet-restore":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.773 8.386H7.59a1.977 1.977 0 0 0-1.977 1.978v7.909c0 1.092.885 1.977 1.977 1.977h13.182a1.977 1.977 0 0 0 1.977-1.977v-7.91a1.977 1.977 0 0 0-1.977-1.977Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.582 8.386V7.151a2.06 2.06 0 0 0-2.446-2.023L7.288 6.98a2.06 2.06 0 0 0-1.674 2.024v2.019"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M18.796 15.636a1.318 1.318 0 1 1 0-2.636 1.318 1.318 0 0 1 0 2.636"
      fill="var(--${e.color})"
    />
    <path
      d="M2.62 5.628 1.23 4.46m1.528 3.267H1M4.515 5.09V3.334"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,"warning-round":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M12 8L12 13"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="16" r="1" fill="var(--${e.color})" />
  </svg> `,"warning-triangle":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.2165 2.875L21.7428 19.375C21.839 19.5417 21.7187 19.75 21.5263 19.75H2.47372C2.28127 19.75 2.16099 19.5417 2.25721 19.375L11.7835 2.875C11.8797 2.70833 12.1203 2.70833 12.2165 2.875Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M12 9L12 14"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle cx="12" cy="17" r="1" fill="var(--${e.color})" />
  </svg> `,"google-color":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="m22.5562 12.2409c0-.9044-.0734-1.5643-.2322-2.24871h-10.3269v4.08181h6.0617c-.1222 1.0144-.7822 2.5421-2.2487 3.5686l-.0206.1367 3.2652 2.5295.2262.0226c2.0776-1.9188 3.2753-4.7419 3.2753-8.0905z"
      fill="#4285f4"
    />
    <path
      d="m11.9988 23c2.9697 0 5.4628-.9778 7.2838-2.6642l-3.4708-2.6888c-.9288.6478-2.1754 1.0999-3.813 1.0999-2.90868 0-5.37735-1.9186-6.25737-4.5706l-.12899.0109-3.39519 2.6276-.0444.1234c1.80873 3.593 5.52399 6.0618 9.82595 6.0618z"
      fill="#34a853"
    />
    <path
      d="m5.74179 14.1771c-.23219-.6844-.36658-1.4177-.36658-2.1754 0-.7578.13439-1.491.35437-2.17542l-.00615-.14576-3.43774-2.66978-.11248.0535c-.74546 1.49101-1.17321 3.16536-1.17321 4.93746 0 1.772.42775 3.4463 1.17321 4.9373z"
      fill="#fbbc05"
    />
    <path
      d="m11.9988 5.25296c2.0653 0 3.4585.89215 4.2529 1.6377l3.1042-3.03089c-1.9064-1.77207-4.3874-2.85977-7.3571-2.85977-4.30196 0-8.01722 2.46867-9.82595 6.06169l3.55637 2.76204c.89223-2.65201 3.3609-4.57077 6.26958-4.57077z"
      fill="#eb4335"
    />
  </svg> `,"eth-logo":e=>t.html`<svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.794 20.543a11.78 11.78 0 0 1-8.525 3.455 11.54 11.54 0 0 1-8.46-3.455 11.5 11.5 0 0 1-3.466-8.475q0-5.173 3.465-8.62a11.55 11.55 0 0 1 8.46-3.446 11.76 11.76 0 0 1 8.526 3.446q3.545 3.447 3.545 8.62a11.38 11.38 0 0 1-3.545 8.475"
      fill="#C8C8C8"
    />
    <path d="m12.341 3.771-4.8 8.18 4.8-2.241z" fill="#8B8B8B" />
    <path d="m12.341 9.71-4.8 2.241 4.8 2.912z" fill="#393939" />
    <path d="M12.34 3.771V9.71l4.796 2.241z" fill="#343434" />
    <path d="M12.34 9.71v5.153l4.796-2.912z" fill="#161616" />
    <path d="m7.541 12.885 4.8 6.947V15.8z" fill="#8B8B8B" />
    <path d="m17.14 12.885-4.8 2.914v4.033z" fill="#343434" />
  </svg> `,"lyx-logo":e=>t.html`<svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14.3403 11.6628L8.00011 15.3197L1.65991 11.6628V4.34986L8.00011 0.692931L14.3403 4.34986V11.6628Z"
      stroke="#ACC2D2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00562 8.00621L9.93645 11.4421L11.8938 7.99763L9.93645 4.57031L8.00562 8.00621Z"
      fill="#BDCEDB"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.10498 8.01136L6.07355 11.4423H9.93735L8.00652 8.00635L4.10498 8.01136Z"
      fill="#ACC2D2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.10498 8.01123C4.29293 8.01123 8.00652 8.00621 8.00652 8.00621L9.93735 4.57031L6.07355 4.57532L4.10498 8.01123Z"
      fill="#DEE7ED"
    />
  </svg> `,"progress-indicator":e=>{let r=Math.random().toString(36).substring(7);return t.html`<svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style=${c({width:`${e.width}px`,height:`${e.height}px`})}
    >
      <g clip-path="url(#clip0_1744_19360)">
        <g filter="url(#filter0_ddd_1744_19360)">
          <circle cx="20" cy="20" r="20" fill="transparent" />
        </g>
        <g filter="url(#filter1_ii_1744_19360)">
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20Z"
            fill="#F8FAFB"
          />
        </g>
      </g>
      <defs>
        <filter
          id="${r}_filter0_ddd_1744_19360"
          x="-42"
          y="-42"
          width="124"
          height="124"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="2"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1744_19360"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.973333 0 0 0 0 0.853333 0 0 0 0 0.826667 0 0 0 0.34 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1744_19360"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-1" dy="-1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1744_19360"
            result="effect2_dropShadow_1744_19360"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_1744_19360"
            result="effect3_dropShadow_1744_19360"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_1744_19360"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_ii_1744_19360"
          x="-2"
          y="-2"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1744_19360"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1744_19360"
            result="effect2_innerShadow_1744_19360"
          />
        </filter>
        <clipPath id="clip0_1744_19360">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs></svg
    ><svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style=${c({width:`${e.width}px`,height:`${e.height}px`})}
      class="absolute animate-spin top-0 left-0"
    >
      <g clip-path="url(#${r}_clip0_1744_19359)">
        <g filter="url(#${r}_filter0_i_1744_19359)">
          <path
            d="M37.5 20C38.8807 20 40.0161 21.1236 39.844 22.4935C39.5295 24.9957 38.7437 27.4237 37.5201 29.646C35.8933 32.6008 33.5456 35.0962 30.6954 36.8999C27.8452 38.7037 24.5851 39.7574 21.2184 39.9629C17.8516 40.1683 14.4876 39.519 11.4392 38.0752C8.39078 36.6314 5.75706 34.4401 3.78299 31.7051C1.80892 28.97 0.558635 25.7802 0.148441 22.4322C-0.261752 19.0842 0.181468 15.6869 1.43687 12.5562C2.38109 10.2015 3.76167 8.05527 5.49841 6.22669C6.44925 5.22556 8.0379 5.39214 8.91267 6.46039V6.46039C9.78744 7.52863 9.61127 9.09217 8.70295 10.132C7.59699 11.3982 6.70777 12.8458 6.07766 14.4171C5.1361 16.7652 4.80369 19.3132 5.11133 21.8242C5.41898 24.3351 6.35669 26.7275 7.83724 28.7788C9.31779 30.8301 11.2931 32.4735 13.5794 33.5564C15.8657 34.6392 18.3887 35.1263 20.9138 34.9721C23.4388 34.818 25.8839 34.0278 28.0216 32.675C30.1592 31.3221 31.92 29.4506 33.1401 27.2345C33.9566 25.7515 34.5132 24.1463 34.7921 22.4885C35.0212 21.1269 36.1193 20 37.5 20V20Z"
            fill="url(#${r}_paint0_linear_1744_19359)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="${r}_filter0_i_1744_19359"
          x="0"
          y="5.5603"
          width="40.8613"
          height="35.4397"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1744_19359"
          />
        </filter>
        <linearGradient
          id="${r}_paint0_linear_1744_19359"
          x1="31"
          y1="24"
          x2="-22"
          y2="-9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8DAD3" />
          <stop offset="1" stop-color="#CC99AE" />
        </linearGradient>
        <clipPath id="${r}_clip0_1744_19359">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>`},"pulse-dot":e=>t.html`<div
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
    class="flex items-center justify-center text-16"
  >
    <div
      class="w-[83.3%] h-[83.3%] rounded-full flex items-center justify-center bg-neutral-90"
    >
      <div
        class="w-[60%] h-[60%] rounded-full animate-pulse-resize bg-green-54"
      ></div>
    </div>
  </div>`,"progress-complete":e=>t.html`<svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_1438_17663)">
      <g filter="url(#filter0_ddd_1438_17663)">
        <circle cx="20" cy="20" r="20" fill="#F8FAFB" />
      </g>
      <g filter="url(#filter1_ii_1438_17663)">
        <path
          d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20Z"
          fill="#F8FAFB"
        />
      </g>
      <g filter="url(#filter2_i_1438_17663)">
        <path
          d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20Z"
          fill="url(#paint0_linear_1438_17663)"
        />
      </g>
      <g filter="url(#filter3_di_1438_17663)">
        <path
          d="M27 15.3381L17.4837 25.1263L14.9216 22.3296L13.6405 20.9313L13 20.2322"
          stroke="url(#paint1_linear_1438_17663)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ddd_1438_17663"
        x="-42"
        y="-42"
        width="124"
        height="124"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="2"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_1438_17663"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="20" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.973333 0 0 0 0 0.853333 0 0 0 0 0.826667 0 0 0 0.34 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1438_17663"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_1438_17663"
          result="effect2_dropShadow_1438_17663"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect2_dropShadow_1438_17663"
          result="effect3_dropShadow_1438_17663"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect3_dropShadow_1438_17663"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_ii_1438_17663"
        x="-2"
        y="-2"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1438_17663"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1438_17663"
          result="effect2_innerShadow_1438_17663"
        />
      </filter>
      <filter
        id="filter2_i_1438_17663"
        x="0"
        y="0"
        width="41"
        height="41"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1438_17663"
        />
      </filter>
      <filter
        id="filter3_di_1438_17663"
        x="10"
        y="13.3381"
        width="20"
        height="15.7882"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.827451 0 0 0 0 0.682353 0 0 0 0 0.705882 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1438_17663"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1438_17663"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="-1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.17 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1438_17663"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1438_17663"
        x1="31"
        y1="24"
        x2="-22"
        y2="-9.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F8DAD3" />
        <stop offset="1" stop-color="#CC99AE" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1438_17663"
        x1="23.85"
        y1="21.211"
        x2="9.56459"
        y2="8.2962"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F8DAD3" />
        <stop offset="1" stop-color="#CC99AE" />
      </linearGradient>
      <clipPath id="clip0_1438_17663">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"complete-filled-fade-in":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
    class="animate-resize-in"
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="var(--green-54)"
      stroke="var(--green-54)"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 12.1429L10.8 15L16 10"
      stroke="var(--neutral-100)"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="opacity-0 animate-fade-in animation-delay-500 animation-fill-forwards"
    />
  </svg> `,"desktop-sharp":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M22.5 2.25H1.5C1.30109 2.25 1.11032 2.32902 0.96967 2.46967C0.829018 2.61032 0.75 2.80109 0.75 3V18C0.75 18.1989 0.829018 18.3897 0.96967 18.5303C1.11032 18.671 1.30109 18.75 1.5 18.75H9.375V20.25H6V21.75H18V20.25H14.625V18.75H22.5C22.6989 18.75 22.8897 18.671 23.0303 18.5303C23.171 18.3897 23.25 18.1989 23.25 18V3C23.25 2.80109 23.171 2.61032 23.0303 2.46967C22.8897 2.32902 22.6989 2.25 22.5 2.25ZM21.5625 3.9375V14.0625H2.4375V3.9375H21.5625ZM11.2561 16.5975C11.2358 16.4422 11.2646 16.2844 11.3385 16.1463C11.4125 16.0082 11.5278 15.8967 11.6683 15.8274C11.8089 15.7582 11.9675 15.7347 12.1221 15.7603C12.2766 15.7858 12.4193 15.8591 12.5301 15.9699C12.6409 16.0807 12.7142 16.2234 12.7397 16.3779C12.7653 16.5325 12.7418 16.6911 12.6726 16.8317C12.6033 16.9722 12.4918 17.0875 12.3537 17.1615C12.2156 17.2354 12.0578 17.2642 11.9025 17.2439C11.7386 17.2225 11.5863 17.1475 11.4694 17.0306C11.3525 16.9137 11.2775 16.7614 11.2561 16.5975Z"
      fill="var(--${e.color})"
    />
  </svg> `,switched:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M7.82847 15.1716C6.53981 16.4603 5 18 5 18L7.82843 20.8284"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.1715 8.82838C17.4602 7.53972 19 6 19 6L16.1716 3.17157"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.1176 12H16C17.6569 12 19 13.3431 19 15V15C19 16.6569 17.6569 18 16 18H6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 6H9C7.34315 6 6 7.34315 6 9V9C6 10.6569 7.34315 12 9 12H13"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"progress-indicator-alt":e=>{let r=Math.random().toString(36).substring(7);return t.html`<svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style=${c({width:`${e.width}px`,height:`${e.height}px`})}
    >
      <g filter="url(#filter0_ii_2356_9)">
        <path
          d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM4.8 32C4.8 47.0221 16.9779 59.2 32 59.2C47.0221 59.2 59.2 47.0221 59.2 32C59.2 16.9779 47.0221 4.8 32 4.8C16.9779 4.8 4.8 16.9779 4.8 32Z"
          fill="#F8FAFB"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_2356_9"
          x="-2"
          y="-2"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.17 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2356_9"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="-2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_2356_9"
            result="effect2_innerShadow_2356_9"
          />
        </filter>
      </defs></svg
    ><svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style=${c({width:`${e.width}px`,height:`${e.height}px`})}
      class="absolute animate-spin top-0 left-0"
    >
      <g clip-path="url(#${r}_clip0_2235_25110)">
        <g filter="url(#${r}_filter0_i_2235_25110)">
          <path
            d="M61.6 32C62.9255 32 64.0094 33.0761 63.91 34.3978C63.5671 38.9614 62.2484 43.4083 60.0322 47.4336C57.4293 52.1613 53.673 56.1538 49.1127 59.0399C44.5523 61.926 39.3362 63.6118 33.9494 63.9406C28.5626 64.2693 23.1801 63.2304 18.3027 60.9203C13.4253 58.6102 9.21129 55.1041 6.05278 50.7281C2.89427 46.3521 0.893816 41.2483 0.237506 35.8915C-0.418804 30.5348 0.290348 25.099 2.299 20.0899C4.00925 15.8249 6.61426 11.9873 9.92785 8.83061C10.8876 7.91635 12.4068 8.0732 13.2466 9.09871V9.09871C14.0863 10.1242 13.9272 11.6292 12.9797 12.5561C10.2862 15.1908 8.163 18.3631 6.75415 21.8764C5.0468 26.1342 4.44402 30.7545 5.00188 35.3078C5.55974 39.8611 7.26013 44.1993 9.94486 47.9189C12.6296 51.6385 16.2115 54.6187 20.3573 56.5823C24.5031 58.5458 29.0782 59.4289 33.657 59.1495C38.2358 58.87 42.6695 57.4371 46.5458 54.9839C50.422 52.5308 53.6149 49.1371 55.8273 45.1186C57.653 41.8027 58.7622 38.1502 59.0942 34.3969C59.211 33.0766 60.2745 32 61.6 32V32Z"
            fill="url(#${r}_paint0_linear_2235_25110)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="${r}_filter0_i_2235_25110"
          x="0"
          y="8.22852"
          width="64.9164"
          height="56.7715"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2235_25110"
          />
        </filter>
        <linearGradient
          id="${r}_paint0_linear_2235_25110"
          x1="49.6"
          y1="38.4"
          x2="-35.2"
          y2="-15.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8DAD3" />
          <stop offset="1" stop-color="#CC99AE" />
        </linearGradient>
        <clipPath id="${r}_clip0_2235_25110">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>`},"cross-filled":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 16.0001L16.0002 7.99995"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8 8L16.0002 16.0002"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"cross-filled-fade-in":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8 16.0001L16.0002 7.99995"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="opacity-0 animate-fade-in animation-delay-500 animation-fill-forwards"
    />
    <path
      d="M8 8L16.0002 16.0002"
      stroke="var(--${e.secondaryColor})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="opacity-0 animate-fade-in animation-delay-500 animation-fill-forwards"
    />
  </svg> `,"transfer-send":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M10.2498 8.05032H15.5803V13.3808"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.1727 8.45796L7.96533 15.6653"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"flag-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3.75 21.75V3.19406C3.75023 3.12846 3.76767 3.06407 3.80057 3.00731C3.83347 2.95056 3.88069 2.90343 3.9375 2.87063C4.30359 2.65594 5.29312 2.25 7.5 2.25C10.5 2.25 14.2969 4.5 16.5 4.5C17.7439 4.49677 18.9746 4.24546 20.1202 3.76078C20.1344 3.75483 20.1499 3.7525 20.1653 3.75399C20.1807 3.75549 20.1955 3.76076 20.2083 3.76934C20.2212 3.77793 20.2317 3.78955 20.239 3.80319C20.2462 3.81682 20.25 3.83205 20.25 3.8475V14.13C20.2499 14.1663 20.2393 14.2018 20.2194 14.2322C20.1995 14.2625 20.1712 14.2865 20.138 14.3011C19.7517 14.4703 18.3905 15 16.5 15C14.25 15 10.5 13.5 7.5 13.5C4.5 13.5 3.75 14.25 3.75 14.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </svg> `,"token-id":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 17.1141L12 22.2531L2.75 17.1141V6.88576L12 1.74686L21.25 6.88576V17.1141Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8.55542 7.5556L8.55542 16.4445"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M11.2222 16.4443V7.55542C11.2222 7.55542 12.5554 7.55563 13.6666 7.55553C14.7777 7.55542 16.5555 9.654 16.5555 11.9998C16.5555 14.3457 14.7777 16.4443 13.6666 16.4445C12.5554 16.4447 11.2222 16.4443 11.2222 16.4443Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
  </svg> `,"edit-doc":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3613_28842)">
      <path
        d="M2 10.1211V19.25C2 19.8467 2.23705 20.419 2.65901 20.841C3.08097 21.2629 3.65326 21.5 4.25 21.5H14.75C15.3467 21.5 15.919 21.2629 16.341 20.841C16.7629 20.419 17 19.8467 17 19.25V4.25C17 3.65326 16.7629 3.08097 16.341 2.65901C15.919 2.23705 15.3467 2 14.75 2H10.1211C9.72341 2.00006 9.34202 2.15804 9.06078 2.43922L2.43922 9.06078C2.15804 9.34202 2.00006 9.72341 2 10.1211Z"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linejoin="round"
      />
      <path
        d="M11 13H5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 16H5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 16H10"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 2.13501V8.00001C9.5 8.39783 9.34196 8.77936 9.06066 9.06067C8.77936 9.34197 8.39782 9.50001 8 9.50001H2.135"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5817 14.0969L23.6322 7.04643C24.0227 6.65591 24.0227 6.02274 23.6322 5.63222L22.3956 4.39561C22.0051 4.00509 21.3719 4.00509 20.9814 4.39561L13.9309 11.4461C13.7915 11.5855 13.6965 11.7629 13.6576 11.956L13.3463 13.504C13.2054 14.2045 13.8233 14.8224 14.5238 14.6815L16.0718 14.3702C16.2649 14.3313 16.4423 14.2363 16.5817 14.0969Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3613_28842">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"code-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M7.5 17.25L1.5 12L7.5 6.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 17.25L22.5 12L16.5 6.75"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"save-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M17.8561 2.68922C17.7168 2.54994 17.5514 2.43946 17.3694 2.3641C17.1874 2.28874 16.9923 2.24997 16.7953 2.25H4.41656C4.13203 2.24994 3.85027 2.30594 3.58738 2.41479C3.32449 2.52365 3.08563 2.68324 2.88443 2.88443C2.68324 3.08563 2.52365 3.32449 2.41479 3.58738C2.30594 3.85027 2.24994 4.13203 2.25 4.41656V19.5834C2.24994 19.868 2.30594 20.1497 2.41479 20.4126C2.52365 20.6755 2.68324 20.9144 2.88443 21.1156C3.08563 21.3168 3.32449 21.4763 3.58738 21.5852C3.85027 21.6941 4.13203 21.7501 4.41656 21.75H19.5834C20.1575 21.7483 20.7076 21.5195 21.1135 21.1135C21.5195 20.7076 21.7483 20.1575 21.75 19.5834V7.20469C21.75 7.00769 21.7113 6.81262 21.6359 6.63061C21.5605 6.4486 21.4501 6.28322 21.3108 6.14391L17.8561 2.68922ZM12 19.5C11.4067 19.5 10.8266 19.3241 10.3333 18.9944C9.83994 18.6648 9.45542 18.1962 9.22836 17.648C9.0013 17.0999 8.94189 16.4967 9.05764 15.9147C9.1734 15.3328 9.45912 14.7982 9.87868 14.3787C10.2982 13.9591 10.8328 13.6734 11.4147 13.5576C11.9967 13.4419 12.5999 13.5013 13.148 13.7284C13.6962 13.9554 14.1648 14.3399 14.4944 14.8333C14.8241 15.3266 15 15.9067 15 16.5C15.0005 16.8941 14.9232 17.2844 14.7726 17.6486C14.6221 18.0128 14.4011 18.3437 14.1224 18.6224C13.8437 18.9011 13.5128 19.1221 13.1486 19.2726C12.7844 19.4232 12.3941 19.5005 12 19.5V19.5ZM14.25 9H5.25C5.05109 9 4.86032 8.92098 4.71967 8.78033C4.57902 8.63968 4.5 8.44891 4.5 8.25V5.25C4.5 5.05109 4.57902 4.86032 4.71967 4.71967C4.86032 4.57902 5.05109 4.5 5.25 4.5H14.25C14.4489 4.5 14.6397 4.57902 14.7803 4.71967C14.921 4.86032 15 5.05109 15 5.25V8.25C15 8.44891 14.921 8.63968 14.7803 8.78033C14.6397 8.92098 14.4489 9 14.25 9Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,scan:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M4 16V18C4 19.1046 4.89543 20 6 20H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 4L18 4C19.1046 4 20 4.89543 20 6L20 8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 20L18 20C19.1046 20 20 19.1046 20 18L20 16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
  </svg> `,"qr-code-scan":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 8V6C4 4.89543 4.89543 4 6 4H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M4 16V18C4 19.1046 4.89543 20 6 20H8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 4L18 4C19.1046 4 20 4.89543 20 6L20 8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M16 20L18 20C19.1046 20 20 19.1046 20 18L20 16"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <mask id="path-5-inside-1_52_1474" fill="var(--${e.secondaryColor})">
      <rect x="7" y="7" width="4" height="4" rx="1" />
    </mask>
    <rect
      x="7"
      y="7"
      width="4"
      height="4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-5-inside-1_52_1474)"
    />
    <mask id="path-6-inside-2_52_1474" fill="var(--${e.secondaryColor})">
      <rect x="7" y="13" width="4" height="4" rx="1" />
    </mask>
    <rect
      x="7"
      y="13"
      width="4"
      height="4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-6-inside-2_52_1474)"
    />
    <rect
      x="13"
      y="13"
      width="1"
      height="1"
      rx="0.5"
      fill="var(--${e.color})"
    />
    <rect
      x="16"
      y="13"
      width="1"
      height="1"
      rx="0.5"
      fill="var(--${e.color})"
    />
    <rect
      x="16"
      y="16"
      width="1"
      height="1"
      rx="0.5"
      fill="var(--${e.color})"
    />
    <rect
      x="13"
      y="16"
      width="1"
      height="1"
      rx="0.5"
      fill="var(--${e.color})"
    />
    <rect
      x="14.5"
      y="14.5"
      width="1"
      height="1"
      rx="0.5"
      fill="var(--${e.color})"
    />
    <mask id="path-12-inside-3_52_1474" fill="var(--${e.secondaryColor})">
      <rect x="13" y="7" width="4" height="4" rx="1" />
    </mask>
    <rect
      x="13"
      y="7"
      width="4"
      height="4"
      rx="1"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-12-inside-3_52_1474)"
    />
  </svg> `,"face-id":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_2189_24953)">
      <path
        d="M1 17.5V19C1 21.2091 2.79086 23 5 23H6.5M1 6.5V5C1 2.79086 2.79086 1 5 1H6.5M17.5 1H19C21.2091 1 23 2.79086 23 5V6.5M23 17.5V19C23 21.2091 21.2091 23 19 23H17.5M36 8.5V11"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17 8.5V10.5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 8.5V10.5"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9V13C12 13.5523 11.5523 14 11 14V14"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 17V17C10.2902 19.0039 13.7098 19.0039 16 17V17"
        stroke="var(--${e.color})"
        stroke-width="${e.strokeWidth}"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2189_24953">
        <rect width="24" height="24" fill="var(--${e.secondaryColor})" />
      </clipPath>
    </defs>
  </svg> `,"profile-file":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M12 2.38501V8.25001C12 8.64783 12.158 9.02936 12.4393 9.31067C12.7206 9.59197 13.1022 9.75001 13.5 9.75001H19.365"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.25 13C13.25 13.6904 12.6904 14.25 12 14.25C11.3096 14.25 10.75 13.6904 10.75 13C10.75 12.3096 11.3096 11.75 12 11.75C12.6904 11.75 13.25 12.3096 13.25 13Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M8.75 18.0667C8.75 17.6026 9.1006 17.1317 9.85273 16.7299C10.5809 16.341 11.46 16.1501 12 16.1501C12.54 16.1501 13.4191 16.341 14.1473 16.7299C14.8994 17.1317 15.25 17.6026 15.25 18.0667V18.4001C15.25 18.5381 15.1381 18.6501 15 18.6501H9C8.86193 18.6501 8.75 18.5381 8.75 18.4001V18.0667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"hand-right-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.25 15V6.75C20.25 6.35218 20.092 5.97064 19.8107 5.68934C19.5294 5.40804 19.1478 5.25 18.75 5.25V5.25C18.3522 5.25 17.9706 5.40804 17.6893 5.68934C17.408 5.97064 17.25 6.35218 17.25 6.75V12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.25 12V3.75C17.25 3.35218 17.092 2.97064 16.8107 2.68934C16.5294 2.40804 16.1478 2.25 15.75 2.25C15.3522 2.25 14.9706 2.40804 14.6893 2.68934C14.408 2.97064 14.25 3.35218 14.25 3.75V11.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.25 11.2969V4.5C11.25 4.10218 11.092 3.72064 10.8107 3.43934C10.5294 3.15804 10.1478 3 9.75 3V3C9.35218 3 8.97064 3.15804 8.68934 3.43934C8.40804 3.72064 8.25 4.10218 8.25 4.5V15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.25 11.25V2.25C14.25 1.85218 14.092 1.47064 13.8107 1.18934C13.5294 0.908035 13.1478 0.75 12.75 0.75C12.3522 0.75 11.9706 0.908035 11.6893 1.18934C11.408 1.47064 11.25 1.85218 11.25 2.25V11.25"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.25 14.9999C20.25 20.503 17.25 23.2499 13.125 23.2499C9 23.2499 7.3261 21.3936 6.375 19.1249L3.9061 12.3749C3.59391 11.5288 3.73547 10.7441 4.4625 10.3311C5.19 9.91771 6.14578 10.1305 6.53953 10.8786L8.25 14.9999"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"extension-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M7.73682 5.84204V6.59204C8.15102 6.59204 8.48681 6.25626 8.48682 5.84206L7.73682 5.84204ZM3 10.5789H2.25C2.25 10.9931 2.58579 11.3289 3 11.3289V10.5789ZM3 16.2631V15.5131C2.58579 15.5131 2.25 15.8489 2.25 16.2631H3ZM7.73682 20.9999V21.7499C8.15103 21.7499 8.48682 21.4141 8.48682 20.9999H7.73682ZM13.421 20.9999H12.671C12.671 21.4141 13.0068 21.7499 13.421 21.7499V20.9999ZM18.1579 16.2633L18.1579 15.5133C17.7437 15.5133 17.4079 15.8491 17.4079 16.2633H18.1579ZM18.1579 10.5791H17.4079C17.4079 10.9933 17.7437 11.3291 18.1579 11.3291L18.1579 10.5791ZM13.421 5.84204L12.671 5.84206C12.671 6.25626 13.0068 6.59204 13.421 6.59204V5.84204ZM5 6.59204H7.73682V5.09204H5V6.59204ZM3.75 7.84204C3.75 7.15168 4.30964 6.59204 5 6.59204V5.09204C3.48122 5.09204 2.25 6.32326 2.25 7.84204H3.75ZM3.75 10.5789V7.84204H2.25V10.5789H3.75ZM3.00006 9.82886H3V11.3289H3.00006V9.82886ZM6.59217 13.421C6.59217 11.4371 4.98393 9.82886 3.00006 9.82886V11.3289C4.1555 11.3289 5.09217 12.2655 5.09217 13.421H6.59217ZM3.00006 17.0131C4.98393 17.0131 6.59217 15.4048 6.59217 13.421H5.09217C5.09217 14.5764 4.1555 15.5131 3.00006 15.5131V17.0131ZM3 17.0131H3.00006V15.5131H3V17.0131ZM3.75 18.9999V16.2631H2.25V18.9999H3.75ZM5 20.2499C4.30964 20.2499 3.75 19.6903 3.75 18.9999H2.25C2.25 20.5187 3.48122 21.7499 5 21.7499V20.2499ZM7.73682 20.2499H5V21.7499H7.73682V20.2499ZM6.98682 20.9998V20.9999H8.48682V20.9998H6.98682ZM10.5789 17.4077C8.59506 17.4077 6.98682 19.016 6.98682 20.9998H8.48682C8.48682 19.8444 9.42348 18.9077 10.5789 18.9077V17.4077ZM14.171 20.9998C14.171 19.016 12.5628 17.4077 10.5789 17.4077V18.9077C11.7344 18.9077 12.671 19.8444 12.671 20.9998H14.171ZM14.171 20.9999V20.9998H12.671V20.9999H14.171ZM16.1579 20.2499H13.421V21.7499H16.1579V20.2499ZM17.4079 18.9999C17.4079 19.6903 16.8483 20.2499 16.1579 20.2499V21.7499C17.6767 21.7499 18.9079 20.5187 18.9079 18.9999H17.4079ZM17.4079 16.2633V18.9999H18.9079V16.2633H17.4079ZM18.1579 17.0133C20.1417 17.0132 21.7499 15.405 21.7499 13.4212H20.2499C20.2499 14.5766 19.3133 15.5133 18.1579 15.5133L18.1579 17.0133ZM21.7499 13.4212C21.7499 11.4374 20.1417 9.82918 18.1579 9.8291L18.1579 11.3291C19.3133 11.3291 20.2499 12.2658 20.2499 13.4212H21.7499ZM17.4079 7.84204V10.5791H18.9079V7.84204H17.4079ZM16.1579 6.59204C16.8483 6.59204 17.4079 7.15169 17.4079 7.84204H18.9079C18.9079 6.32326 17.6767 5.09204 16.1579 5.09204V6.59204ZM13.421 6.59204H16.1579V5.09204H13.421V6.59204ZM14.171 5.84202C14.171 3.8582 12.5628 2.25 10.5789 2.25V3.75C11.7343 3.75 12.671 4.68664 12.671 5.84206L14.171 5.84202ZM10.5789 2.25C8.59508 2.25 6.98686 3.8582 6.98682 5.84202L8.48682 5.84206C8.48684 4.68664 9.4235 3.75 10.5789 3.75V2.25Z"
      fill="var(--${e.color})"
    />
  </svg> `,"lukso-logo":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.8476 4.55363L13.9138 0.552304C12.686 -0.158955 11.1681 -0.158955 9.9403 0.552304L3.00653 4.55363C1.77872 5.26489 1.01978 6.57614 1.01978 7.99469V16.0013C1.01978 17.4199 1.77872 18.7311 3.00653 19.4424L9.9403 23.4477C11.1681 24.1589 12.686 24.1589 13.9138 23.4477L20.8476 19.4424C22.0754 18.7311 22.8343 17.4199 22.8343 16.0013V7.99469C22.8343 6.57614 22.0794 5.26489 20.8476 4.55363ZM17.4304 12.7947L15.3681 16.3669C15.086 16.8596 14.5615 17.1616 13.9933 17.1616H9.86481C9.2966 17.1616 8.77209 16.8596 8.48997 16.3669L6.42375 12.7947C6.14163 12.302 6.14163 11.698 6.42375 11.2053L8.486 7.6331C8.76812 7.14038 9.29262 6.8384 9.86083 6.8384H13.9853C14.5535 6.8384 15.0781 7.14038 15.3602 7.6331L17.4224 11.2053C17.7125 11.698 17.7125 12.302 17.4304 12.7947Z"
      fill="#FE005B"
    />
    <path
      d="M17.4304 12.7947L15.3681 16.3669C15.086 16.8596 14.5615 17.1616 13.9933 17.1616H9.86481C9.2966 17.1616 8.77209 16.8596 8.48997 16.3669L6.42375 12.7947C6.14163 12.302 6.14163 11.698 6.42375 11.2053L8.486 7.63311C8.76812 7.1404 9.29262 6.83841 9.86083 6.83841H13.9853C14.5535 6.83841 15.0781 7.1404 15.3602 7.63311L17.4224 11.2053C17.7125 11.698 17.7125 12.302 17.4304 12.7947Z"
      fill="#FFF1F8"
    />
  </svg> `,"document-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.5 10.3711V19.5C19.5 20.0967 19.2629 20.669 18.841 21.091C18.419 21.5129 17.8467 21.75 17.25 21.75H6.75C6.15326 21.75 5.58097 21.5129 5.15901 21.091C4.73705 20.669 4.5 20.0967 4.5 19.5V4.5C4.5 3.90326 4.73705 3.33097 5.15901 2.90901C5.58097 2.48705 6.15326 2.25 6.75 2.25H11.3789C11.7766 2.25006 12.158 2.40804 12.4392 2.68922L19.0608 9.31078C19.342 9.59202 19.4999 9.97341 19.5 10.3711Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M12 2.625V8.25C12 8.64782 12.158 9.02936 12.4393 9.31066C12.7206 9.59196 13.1022 9.75 13.5 9.75H19.125"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"document-text":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M16.417 22.75h-8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75m-8-20c-2.86 0-4.25 1.39-4.25 4.25v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25z"
      fill="var(--${e.color})"
    />
    <path
      d="M18.917 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75m-6.5 4.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m4 4h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
      fill="var(--${e.color})"
    />
  </svg> `,"headset-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M3.89062 18C3.28125 16.4531 2.25 13.6233 2.25 12C2.25 6.615 6.99984 2.25 12 2.25C17.0002 2.25 21.75 6.615 21.75 12C21.75 13.6233 20.6719 16.5469 20.1094 18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.081 12.6623L4.43928 13.0373C3.02225 13.867 2.95335 16.4315 4.28085 18.7654C5.60835 21.0993 7.83725 22.319 9.25428 21.4898L9.896 21.1148C10.0663 21.0134 10.1901 20.8492 10.2408 20.6575C10.2914 20.4659 10.2649 20.262 10.1669 20.0896L6.09397 12.9375C6.04595 12.8524 5.98154 12.7778 5.90446 12.7179C5.82739 12.6579 5.73918 12.6139 5.64496 12.5883C5.55074 12.5627 5.45237 12.5561 5.35556 12.5688C5.25876 12.5815 5.16543 12.6133 5.081 12.6623V12.6623Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
    />
    <path
      d="M18.9193 12.6623L19.561 13.0373C20.978 13.8665 21.0488 16.4311 19.7194 18.765C18.3901 21.0989 16.163 22.3186 14.746 21.4893L14.1043 21.1143C13.9339 21.0129 13.8102 20.8487 13.7595 20.6571C13.7089 20.4654 13.7354 20.2615 13.8333 20.0892L17.9063 12.9375C17.9543 12.8524 18.0187 12.7778 18.0958 12.7179C18.1729 12.6579 18.2611 12.6139 18.3553 12.5883C18.4495 12.5627 18.5479 12.5561 18.6447 12.5688C18.7415 12.5815 18.8348 12.6133 18.9193 12.6623V12.6623Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
    />
  </svg> `,"cube-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21 16.0018V7.99739C20.9997 7.73541 20.9308 7.47807 20.8001 7.25101C20.6694 7.02394 20.4815 6.83506 20.2552 6.70317L13.1302 2.55661C12.7869 2.35675 12.3968 2.25146 11.9995 2.25146C11.6023 2.25146 11.2122 2.35675 10.8689 2.55661L3.74484 6.70317C3.51848 6.83506 3.33061 7.02394 3.19993 7.25101C3.06925 7.47807 3.00032 7.73541 3 7.99739V16.0018C3.00016 16.2639 3.06901 16.5214 3.1997 16.7487C3.33038 16.9759 3.51834 17.1649 3.74484 17.2969L10.8698 21.4435C11.2132 21.6431 11.6033 21.7482 12.0005 21.7482C12.3976 21.7482 12.7877 21.6431 13.1311 21.4435L20.2561 17.2969C20.4824 17.1648 20.6702 16.9758 20.8007 16.7485C20.9312 16.5213 20.9999 16.2638 21 16.0018Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.23438 7.21826L12 12.3745L20.7656 7.21826"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 21.7495V12.3745"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"film-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.4375 4.5H3.5625C2.83763 4.5 2.25 5.08763 2.25 5.8125V18.1875C2.25 18.9124 2.83763 19.5 3.5625 19.5H20.4375C21.1624 19.5 21.75 18.9124 21.75 18.1875V5.8125C21.75 5.08763 21.1624 4.5 20.4375 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 15.75H19.3125C18.5876 15.75 18 16.3376 18 17.0625V18.1875C18 18.9124 18.5876 19.5 19.3125 19.5H20.4375C21.1624 19.5 21.75 18.9124 21.75 18.1875V17.0625C21.75 16.3376 21.1624 15.75 20.4375 15.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 12H19.3125C18.5876 12 18 12.5876 18 13.3125V14.4375C18 15.1624 18.5876 15.75 19.3125 15.75H20.4375C21.1624 15.75 21.75 15.1624 21.75 14.4375V13.3125C21.75 12.5876 21.1624 12 20.4375 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 8.25H19.3125C18.5876 8.25 18 8.83763 18 9.5625V10.6875C18 11.4124 18.5876 12 19.3125 12H20.4375C21.1624 12 21.75 11.4124 21.75 10.6875V9.5625C21.75 8.83763 21.1624 8.25 20.4375 8.25Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 4.5H19.3125C18.5876 4.5 18 5.08763 18 5.8125V6.9375C18 7.66237 18.5876 8.25 19.3125 8.25H20.4375C21.1624 8.25 21.75 7.66237 21.75 6.9375V5.8125C21.75 5.08763 21.1624 4.5 20.4375 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 15.75H3.5625C2.83763 15.75 2.25 16.3376 2.25 17.0625V18.1875C2.25 18.9124 2.83763 19.5 3.5625 19.5H4.6875C5.41237 19.5 6 18.9124 6 18.1875V17.0625C6 16.3376 5.41237 15.75 4.6875 15.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 12H3.5625C2.83763 12 2.25 12.5876 2.25 13.3125V14.4375C2.25 15.1624 2.83763 15.75 3.5625 15.75H4.6875C5.41237 15.75 6 15.1624 6 14.4375V13.3125C6 12.5876 5.41237 12 4.6875 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 8.25H3.5625C2.83763 8.25 2.25 8.83763 2.25 9.5625V10.6875C2.25 11.4124 2.83763 12 3.5625 12H4.6875C5.41237 12 6 11.4124 6 10.6875V9.5625C6 8.83763 5.41237 8.25 4.6875 8.25Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 4.5H3.5625C2.83763 4.5 2.25 5.08763 2.25 5.8125V6.9375C2.25 7.66237 2.83763 8.25 3.5625 8.25H4.6875C5.41237 8.25 6 7.66237 6 6.9375V5.8125C6 5.08763 5.41237 4.5 4.6875 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M16.6875 4.5H7.3125C6.58763 4.5 6 5.08763 6 5.8125V10.6875C6 11.4124 6.58763 12 7.3125 12H16.6875C17.4124 12 18 11.4124 18 10.6875V5.8125C18 5.08763 17.4124 4.5 16.6875 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M16.6875 12H7.3125C6.58763 12 6 12.5876 6 13.3125V18.1875C6 18.9124 6.58763 19.5 7.3125 19.5H16.6875C17.4124 19.5 18 18.9124 18 18.1875V13.3125C18 12.5876 17.4124 12 16.6875 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
  </svg> `,"video-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" fill="white" />
    <path
      d="M20.4375 4.5H3.5625C2.83763 4.5 2.25 5.08763 2.25 5.8125V18.1875C2.25 18.9124 2.83763 19.5 3.5625 19.5H20.4375C21.1624 19.5 21.75 18.9124 21.75 18.1875V5.8125C21.75 5.08763 21.1624 4.5 20.4375 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 15.75H19.3125C18.5876 15.75 18 16.3376 18 17.0625V18.1875C18 18.9124 18.5876 19.5 19.3125 19.5H20.4375C21.1624 19.5 21.75 18.9124 21.75 18.1875V17.0625C21.75 16.3376 21.1624 15.75 20.4375 15.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 12H19.3125C18.5876 12 18 12.5876 18 13.3125V14.4375C18 15.1624 18.5876 15.75 19.3125 15.75H20.4375C21.1624 15.75 21.75 15.1624 21.75 14.4375V13.3125C21.75 12.5876 21.1624 12 20.4375 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 8.25H19.3125C18.5876 8.25 18 8.83763 18 9.5625V10.6875C18 11.4124 18.5876 12 19.3125 12H20.4375C21.1624 12 21.75 11.4124 21.75 10.6875V9.5625C21.75 8.83763 21.1624 8.25 20.4375 8.25Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M20.4375 4.5H19.3125C18.5876 4.5 18 5.08763 18 5.8125V6.9375C18 7.66237 18.5876 8.25 19.3125 8.25H20.4375C21.1624 8.25 21.75 7.66237 21.75 6.9375V5.8125C21.75 5.08763 21.1624 4.5 20.4375 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 15.75H3.5625C2.83763 15.75 2.25 16.3376 2.25 17.0625V18.1875C2.25 18.9124 2.83763 19.5 3.5625 19.5H4.6875C5.41237 19.5 6 18.9124 6 18.1875V17.0625C6 16.3376 5.41237 15.75 4.6875 15.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 12H3.5625C2.83763 12 2.25 12.5876 2.25 13.3125V14.4375C2.25 15.1624 2.83763 15.75 3.5625 15.75H4.6875C5.41237 15.75 6 15.1624 6 14.4375V13.3125C6 12.5876 5.41237 12 4.6875 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 8.25H3.5625C2.83763 8.25 2.25 8.83763 2.25 9.5625V10.6875C2.25 11.4124 2.83763 12 3.5625 12H4.6875C5.41237 12 6 11.4124 6 10.6875V9.5625C6 8.83763 5.41237 8.25 4.6875 8.25Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M4.6875 4.5H3.5625C2.83763 4.5 2.25 5.08763 2.25 5.8125V6.9375C2.25 7.66237 2.83763 8.25 3.5625 8.25H4.6875C5.41237 8.25 6 7.66237 6 6.9375V5.8125C6 5.08763 5.41237 4.5 4.6875 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M16.6875 4.5H7.3125C6.58763 4.5 6 5.08763 6 5.8125V10.6875C6 11.4124 6.58763 12 7.3125 12H16.6875C17.4124 12 18 11.4124 18 10.6875V5.8125C18 5.08763 17.4124 4.5 16.6875 4.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
    <path
      d="M16.6875 12H7.3125C6.58763 12 6 12.5876 6 13.3125V18.1875C6 18.9124 6.58763 19.5 7.3125 19.5H16.6875C17.4124 19.5 18 18.9124 18 18.1875V13.3125C18 12.5876 17.4124 12 16.6875 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linejoin="round"
    />
  </svg> `,"logo-facebook-mono":w,"logo-x-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.901 1.15302H22.581L14.541 10.343L24 22.846H16.594L10.794 15.262L4.156 22.846H0.474L9.074 13.016L0 1.15402H7.594L12.837 8.08602L18.901 1.15302ZM17.61 20.644H19.649L6.486 3.24002H4.298L17.61 20.644Z"
      fill="var(--${e.color})"
    />
  </svg> `,"logo-instagram-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11839)">
      <path
        d="M7.02984 0.0840168C5.75304 0.144217 4.88114 0.348017 4.11884 0.647417C3.33004 0.954917 2.66134 1.36742 1.99604 2.03512C1.33084 2.70282 0.921037 3.37192 0.615837 4.16212C0.320437 4.92592 0.120237 5.79862 0.0638374 7.07612C0.00743745 8.35362 -0.00506255 8.76432 0.00123745 12.0231C0.00743745 15.2817 0.0218374 15.6902 0.0837374 16.9704C0.144737 18.2469 0.347737 19.1186 0.647237 19.8811C0.955237 20.67 1.36724 21.3384 2.03524 22.0039C2.70314 22.6694 3.37174 23.0782 4.16374 23.3839C4.92694 23.6789 5.79984 23.88 7.07714 23.9359C8.35444 23.9919 8.76554 24.0049 12.0233 23.9986C15.2811 23.9924 15.6913 23.9779 16.9711 23.9172C18.2511 23.8565 19.1181 23.652 19.8809 23.3539C20.6698 23.0453 21.3387 22.6339 22.0037 21.9658C22.6687 21.2976 23.0782 20.628 23.3832 19.8374C23.6789 19.0742 23.8798 18.2014 23.9352 16.925C23.9912 15.6441 24.0044 15.2352 23.9982 11.977C23.9919 8.71872 23.9772 8.31022 23.9165 7.03052C23.8558 5.75082 23.6525 4.88182 23.3532 4.11882C23.0448 3.32992 22.6332 2.66202 21.9656 1.99602C21.2979 1.33002 20.6277 0.920817 19.8375 0.616517C19.0737 0.321017 18.2014 0.119717 16.9241 0.0645168C15.6468 0.00931678 15.2357 -0.00498321 11.9767 0.00141679C8.71774 0.00761679 8.30974 0.0216168 7.02984 0.0840168ZM7.17004 21.7771C6.00004 21.7262 5.36474 21.5318 4.94134 21.3691C4.38074 21.1531 3.98134 20.892 3.55944 20.4741C3.13744 20.0563 2.87834 19.6555 2.65944 19.0961C2.49504 18.6727 2.29704 18.0381 2.24234 16.8681C2.18284 15.6036 2.17034 15.2239 2.16334 12.0201C2.15634 8.81642 2.16864 8.43712 2.22404 7.17212C2.27404 6.00312 2.46964 5.36712 2.63204 4.94392C2.84804 4.38262 3.10824 3.98392 3.52704 3.56232C3.94584 3.14062 4.34544 2.88092 4.90534 2.66202C5.32834 2.49692 5.96284 2.30062 7.13234 2.24492C8.39784 2.18492 8.77704 2.17292 11.9803 2.16592C15.1836 2.15892 15.5638 2.17092 16.8298 2.22672C17.9988 2.27752 18.6351 2.47122 19.0578 2.63472C19.6186 2.85072 20.0178 3.11012 20.4394 3.52972C20.8611 3.94912 21.121 4.34732 21.3399 4.90842C21.5052 5.33012 21.7016 5.96442 21.7568 7.13472C21.817 8.40022 21.8307 8.77972 21.8364 11.9827C21.8422 15.1857 21.8309 15.5661 21.7754 16.8307C21.7244 18.0007 21.5304 18.6362 21.3674 19.0601C21.1514 19.6205 20.8911 20.0201 20.472 20.4415C20.053 20.863 19.6539 21.1226 19.0937 21.3415C18.6713 21.5064 18.036 21.7032 16.8675 21.7589C15.6019 21.8184 15.2227 21.8309 12.0182 21.8379C8.81374 21.8449 8.43554 21.8319 7.17004 21.7771ZM16.9527 5.58642C16.9532 5.87125 17.0381 6.14954 17.1968 6.38609C17.3554 6.62265 17.5807 6.80684 17.844 6.91537C18.1074 7.02391 18.397 7.05191 18.6762 6.99583C18.9555 6.93975 19.2118 6.80212 19.4129 6.60034C19.6139 6.39855 19.7506 6.14169 19.8056 5.86222C19.8606 5.58276 19.8315 5.29325 19.722 5.03032C19.6125 4.76739 19.4275 4.54284 19.1903 4.38508C18.9532 4.22731 18.6746 4.14342 18.3897 4.14402C18.0079 4.14481 17.6421 4.29721 17.3726 4.56769C17.1031 4.83818 16.9521 5.20461 16.9527 5.58642ZM5.83824 12.012C5.84494 15.4152 8.60884 18.1677 12.0112 18.1613C15.4138 18.1548 18.1682 15.3912 18.1618 11.988C18.1553 8.58482 15.3908 5.83152 11.9878 5.83822C8.58484 5.84492 5.83184 8.60922 5.83824 12.012ZM7.99974 12.0077C7.99818 11.2166 8.23124 10.4428 8.66947 9.78412C9.10769 9.12546 9.73138 8.61154 10.4617 8.30735C11.192 8.00315 11.9961 7.92234 12.7723 8.07514C13.5485 8.22794 14.262 8.60749 14.8225 9.16578C15.383 9.72408 15.7654 10.436 15.9213 11.2117C16.0772 11.9873 15.9996 12.7917 15.6983 13.5232C15.397 14.2547 14.8856 14.8804 14.2287 15.3213C13.5717 15.7621 12.7989 15.9982 12.0077 15.9998C11.4824 16.0009 10.962 15.8985 10.4763 15.6985C9.99057 15.4985 9.549 15.2047 9.17681 14.834C8.80462 14.4633 8.50911 14.0229 8.30714 13.5379C8.10518 13.053 8.00072 12.533 7.99974 12.0077Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11839">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-medium-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11840)">
      <path
        d="M13.54 12C13.5453 13.8017 12.8354 15.5319 11.566 16.8107C10.2967 18.0894 8.57177 18.8121 6.77003 18.82C4.96829 18.8121 3.24335 18.0894 1.97402 16.8107C0.704678 15.5319 -0.00528713 13.8017 2.96483e-05 12C-0.00528713 10.1982 0.704678 8.46804 1.97402 7.18932C3.24335 5.91061 4.96829 5.18793 6.77003 5.17999C8.57177 5.18793 10.2967 5.91061 11.566 7.18932C12.8354 8.46804 13.5453 10.1982 13.54 12ZM20.96 12C20.96 15.54 19.45 18.42 17.58 18.42C15.71 18.42 14.19 15.54 14.19 12C14.19 8.45999 15.71 5.57999 17.58 5.57999C19.45 5.57999 20.96 8.45999 20.96 12ZM24 12C24 15.17 23.47 17.75 22.81 17.75C22.15 17.75 21.62 15.17 21.62 12C21.62 8.82999 22.15 6.24999 22.81 6.24999C23.47 6.24999 24 8.82999 24 12Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11840">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-discord-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11841)">
      <path
        d="M20.317 4.36979C18.761 3.65555 17.119 3.14623 15.4319 2.85459C15.4166 2.85173 15.4007 2.85378 15.3867 2.86044C15.3726 2.8671 15.3609 2.87803 15.3534 2.89169C15.1424 3.26699 14.9087 3.75649 14.7451 4.14119C12.9004 3.86499 11.0651 3.86499 9.2583 4.14119C9.0947 3.74789 8.8525 3.26699 8.6406 2.89169C8.63276 2.87835 8.62107 2.86768 8.60706 2.86108C8.59306 2.85448 8.57739 2.85225 8.5621 2.85469C6.87488 3.14566 5.2327 3.65493 3.6769 4.36969C3.66359 4.37538 3.65238 4.38506 3.6448 4.39739C0.533404 9.04579 -0.318996 13.5799 0.099204 18.0578C0.100386 18.0688 0.103757 18.0794 0.109116 18.089C0.114476 18.0986 0.121714 18.1071 0.130404 18.1139C2.1832 19.6215 4.1717 20.5367 6.1233 21.1433C6.13848 21.1478 6.15468 21.1476 6.16972 21.1427C6.18477 21.1377 6.19795 21.1283 6.2075 21.1157C6.6691 20.4853 7.0806 19.8205 7.4335 19.1215C7.43835 19.1119 7.44112 19.1014 7.44163 19.0907C7.44213 19.08 7.44036 19.0693 7.43643 19.0593C7.4325 19.0493 7.4265 19.0403 7.41883 19.0328C7.41115 19.0253 7.40198 19.0195 7.3919 19.0158C6.7391 18.7682 6.1176 18.4663 5.5197 18.1235C5.5088 18.1171 5.49964 18.1081 5.49304 18.0973C5.48643 18.0865 5.48258 18.0743 5.48183 18.0617C5.48108 18.049 5.48345 18.0364 5.48873 18.0249C5.49401 18.0135 5.50204 18.0034 5.5121 17.9958C5.6379 17.9015 5.7638 17.8035 5.8839 17.7044C5.89458 17.6956 5.9075 17.6899 5.92121 17.6881C5.93492 17.6862 5.94887 17.6882 5.9615 17.6939C9.8893 19.4872 14.1415 19.4872 18.0229 17.6939C18.0355 17.6879 18.0496 17.6856 18.0635 17.6873C18.0774 17.6889 18.0906 17.6945 18.1014 17.7034C18.2216 17.8024 18.3474 17.9015 18.4742 17.9958C18.4843 18.0034 18.4924 18.0133 18.4977 18.0247C18.5031 18.0362 18.5055 18.0487 18.5049 18.0613C18.5042 18.074 18.5005 18.0862 18.494 18.097C18.4875 18.1078 18.4784 18.1169 18.4676 18.1234C17.8695 18.4727 17.2429 18.7709 16.5946 19.0148C16.5845 19.0186 16.5754 19.0246 16.5678 19.0322C16.5602 19.0398 16.5542 19.049 16.5504 19.059C16.5466 19.0691 16.5449 19.0799 16.5455 19.0906C16.5461 19.1014 16.549 19.1119 16.5539 19.1215C16.9143 19.8195 17.3258 20.4843 17.7789 21.1147C17.7882 21.1277 17.8013 21.1375 17.8164 21.1426C17.8315 21.1477 17.8478 21.148 17.8631 21.1433C19.8241 20.5366 21.8126 19.6214 23.8654 18.1139C23.8742 18.1074 23.8816 18.0992 23.887 18.0897C23.8924 18.0801 23.8957 18.0696 23.8967 18.0587C24.3971 12.8817 23.0585 8.38479 20.3482 4.39829C20.3416 4.38534 20.3305 4.37529 20.317 4.36979ZM8.02 15.3312C6.8375 15.3312 5.8631 14.2455 5.8631 12.9122C5.8631 11.579 6.8186 10.4933 8.0201 10.4933C9.2309 10.4933 10.1958 11.5885 10.1769 12.9123C10.1769 14.2455 9.2214 15.3312 8.02 15.3312ZM15.9948 15.3312C14.8123 15.3312 13.8379 14.2455 13.8379 12.9122C13.8379 11.579 14.7933 10.4933 15.9948 10.4933C17.2056 10.4933 18.1705 11.5885 18.1516 12.9123C18.1516 14.2455 17.2056 15.3312 15.9948 15.3312Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11841">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-snapchat-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11842)">
      <path
        d="M12.2061 0.792992C13.1961 0.792992 16.5531 1.06899 18.1361 4.61399C18.6651 5.80699 18.5391 7.83299 18.4351 9.46099L18.4321 9.52099C18.4201 9.70099 18.4101 9.86599 18.4021 10.031C18.4771 10.076 18.6051 10.121 18.8031 10.121C19.1031 10.105 19.4621 10.001 19.8361 9.81999C20.0011 9.73199 20.1801 9.71599 20.3001 9.71599C20.4821 9.71599 20.6591 9.74499 20.8091 9.80599C21.2591 9.95499 21.5431 10.285 21.5431 10.644C21.5581 11.093 21.1531 11.483 20.3301 11.812C20.2411 11.841 20.1211 11.887 19.9861 11.931C19.5361 12.066 18.8471 12.291 18.6531 12.741C18.5631 12.965 18.5921 13.265 18.7731 13.609L18.7881 13.624C18.8481 13.76 20.3141 17.099 23.5791 17.638C23.8341 17.682 24.0141 17.908 23.9991 18.147C23.9991 18.222 23.9841 18.296 23.9541 18.372C23.7141 18.941 22.6811 19.36 20.8081 19.643C20.7491 19.734 20.6881 20.018 20.6441 20.213C20.6151 20.392 20.5701 20.573 20.5101 20.766C20.4341 21.037 20.2401 21.171 19.9551 21.171H19.9251C19.7901 21.171 19.6121 21.14 19.3871 21.097C19.0271 21.022 18.6221 20.962 18.1141 20.962C17.8141 20.962 17.5151 20.977 17.2011 21.036C16.6011 21.14 16.0781 21.5 15.4781 21.92C14.6251 22.519 13.6521 23.208 12.1841 23.208C12.1241 23.208 12.0651 23.193 12.0041 23.193H11.8551C10.3871 23.193 9.42812 22.518 8.57612 21.905C7.97712 21.485 7.46912 21.126 6.86912 21.021C6.55512 20.976 6.24012 20.947 5.94112 20.947C5.40112 20.947 4.98312 21.036 4.66912 21.096C4.45812 21.139 4.27812 21.17 4.12912 21.17C3.75512 21.17 3.60612 20.946 3.54612 20.75C3.48512 20.558 3.45612 20.361 3.41112 20.183C3.36512 20.002 3.30612 19.689 3.24512 19.613C1.32712 19.391 0.295116 18.971 0.0561165 18.387C0.0251165 18.324 0.00411648 18.237 0.00111648 18.162C-0.0138835 17.919 0.166116 17.697 0.421116 17.653C3.68512 17.113 5.15112 13.774 5.21212 13.633L5.22812 13.604C5.40812 13.259 5.45212 12.959 5.34712 12.735C5.15212 12.301 4.46312 12.077 4.01512 11.926C3.89412 11.897 3.77512 11.852 3.66912 11.807C2.56212 11.372 2.41212 10.877 2.47212 10.534C2.56212 10.055 3.14612 9.74099 3.64012 9.74099C3.78612 9.74099 3.91012 9.76999 4.02312 9.81499C4.44312 10.009 4.81212 10.115 5.12712 10.115C5.36112 10.115 5.51112 10.055 5.59212 10.01L5.54612 9.44099C5.44812 7.81499 5.32112 5.78999 5.85312 4.60399C7.39212 1.07699 10.7391 0.806992 11.7271 0.806992L12.1461 0.791992L12.2061 0.792992Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11842">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-whatsapp-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11843)">
      <path
        d="M17.4719 14.382C17.1749 14.233 15.7139 13.515 15.4419 13.415C15.1689 13.316 14.9709 13.267 14.7719 13.565C14.5749 13.862 14.0049 14.531 13.8319 14.729C13.6589 14.928 13.4849 14.952 13.1879 14.804C12.8909 14.654 11.9329 14.341 10.7979 13.329C9.91488 12.541 9.31789 11.568 9.14489 11.27C8.97188 10.973 9.12688 10.812 9.27488 10.664C9.40888 10.531 9.57288 10.317 9.72088 10.144C9.86988 9.97001 9.91888 9.84601 10.0189 9.64701C10.1179 9.44901 10.0689 9.27601 9.99389 9.12701C9.91889 8.97801 9.32488 7.51501 9.07788 6.92001C8.83589 6.34101 8.59089 6.42001 8.40889 6.41001C8.23588 6.40201 8.03788 6.40001 7.83888 6.40001C7.64088 6.40001 7.31888 6.47401 7.04688 6.77201C6.77488 7.06901 6.00688 7.78801 6.00688 9.25101C6.00688 10.713 7.07188 12.126 7.21988 12.325C7.36888 12.523 9.31588 15.525 12.2969 16.812C13.0059 17.118 13.5589 17.301 13.9909 17.437C14.7029 17.664 15.3509 17.632 15.8619 17.555C16.4329 17.47 17.6199 16.836 17.8679 16.142C18.1159 15.448 18.1159 14.853 18.0409 14.729C17.9669 14.605 17.7699 14.531 17.4719 14.382ZM12.0499 21.785H12.0459C10.2757 21.7852 8.53796 21.3092 7.01488 20.407L6.65388 20.193L2.91288 21.175L3.91088 17.527L3.67588 17.153C2.68632 15.5773 2.16283 13.7537 2.16588 11.893C2.16688 6.44301 6.60188 2.00901 12.0539 2.00901C14.6939 2.00901 17.1759 3.03901 19.0419 4.90701C19.9626 5.82363 20.6923 6.91374 21.1889 8.11425C21.6855 9.31477 21.939 10.6019 21.9349 11.901C21.9319 17.351 17.4979 21.785 12.0499 21.785ZM20.4629 3.48801C19.3611 2.37893 18.0501 1.49955 16.606 0.900811C15.1618 0.302074 13.6132 -0.00410676 12.0499 1.046e-05C5.49488 1.046e-05 0.159885 5.33501 0.156885 11.892C0.156885 13.988 0.703885 16.034 1.74488 17.837L0.0568848 24L6.36188 22.346C8.10548 23.2959 10.0593 23.7938 12.0449 23.794H12.0499C18.6039 23.794 23.9399 18.459 23.9429 11.901C23.9477 10.3383 23.6426 8.79011 23.0453 7.34604C22.448 5.90198 21.5702 4.59068 20.4629 3.48801Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11843">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-telegram-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11844)">
      <path
        d="M11.944 3.26667e-05C8.77112 0.0148396 5.73324 1.28566 3.4949 3.53449C1.25656 5.78332 -3.4549e-05 8.82711 7.12435e-10 12C7.12441e-10 15.1826 1.26428 18.2349 3.51472 20.4853C5.76515 22.7358 8.8174 24 12 24C15.1826 24 18.2348 22.7358 20.4853 20.4853C22.7357 18.2349 24 15.1826 24 12C24 8.81743 22.7357 5.76519 20.4853 3.51475C18.2348 1.26431 15.1826 3.26667e-05 12 3.26667e-05C11.9813 -1.08889e-05 11.9627 -1.08889e-05 11.944 3.26667e-05ZM16.906 7.22403C17.006 7.22203 17.227 7.24703 17.371 7.36403C17.4667 7.44713 17.5277 7.56311 17.542 7.68903C17.558 7.78203 17.578 7.99503 17.562 8.16103C17.382 10.059 16.6 14.663 16.202 16.788C16.034 17.688 15.703 17.989 15.382 18.018C14.686 18.083 14.157 17.558 13.482 17.116C12.426 16.423 11.829 15.992 10.804 15.316C9.619 14.536 10.387 14.106 11.062 13.406C11.239 13.222 14.309 10.429 14.369 10.176C14.376 10.144 14.383 10.026 14.313 9.96403C14.243 9.90203 14.139 9.92303 14.064 9.94003C13.958 9.96403 12.271 11.08 9.003 13.285C8.523 13.615 8.09 13.775 7.701 13.765C7.273 13.757 6.449 13.524 5.836 13.325C5.084 13.08 4.487 12.951 4.539 12.536C4.566 12.32 4.864 12.099 5.432 11.873C8.93 10.349 11.262 9.34403 12.43 8.85903C15.762 7.47303 16.455 7.23203 16.906 7.22403Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11844">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-linkedin-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11845)">
      <path
        d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11845">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-github-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_3223_11846)">
      <path
        d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_3223_11846">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,"logo-universal-page-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" fill="url(#pattern0_3223_11875)" />
    <defs>
      <pattern
        id="pattern0_3223_11875"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlink:href="#image0_3223_11875" transform="scale(0.015625)" />
      </pattern>
      <image
        id="image0_3223_11875"
        width="64"
        height="64"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAADDZJREFUeF7NGwuQG2X5+3aT6yW7m0vbvC5XpaKDg8CogwpKoRUQoYxCp1BgahF5DZQCHauAVKgI8p6pIkiFEagIODAVedYHglZEqsKIgCAWFezdZXPnXU12L0ey+3/uF7M3e3fJJdm9XvhnOte7/P/3+r//ewfh3bGkaDR6HCI+TkQWAAj+h4iCiKo/3b/V+8l7AKALES8xTfPedljCdjbvrb3z58/vKZfLzxLRgYwDsT2yiAiI6GlZltcZhvFajc4wABAA2LWfdclvD9PekYCsKMqFALCZGWmXeSaJiMqIeLb39nt7e9dUKpVuy7Ie2rNnz55GpHdcAJFIZJEsyy8TUdynAIiI7kXES03TzDGjixYtipTL5ccR8TAiOjKfz/++kRZ0WgChaDR6GyKeG0C5crIsn1UoFJ50YaTT6fWO6l+BiAsQ8QEhxHpd1/P1cHRUAJFI5BOI+Dz60fv/c8MGc7Npml8HgDL/oa+vb5FlWQ8T0cc89uQEXdcfrxnQSXLopAC6FUXZDgDL/N4+Eb0IAOeNjY390TV8mUzmOiJaR0TzPALYKcvyqoGBgben4uqYABRFWQ0AP/LLPACUnHe9yTTNm1wY2Wx2SaVS+QEi7ldHqS7Sdf37rqa4ZzoiAE3TFtq2vRMR3x9AANtt2143Pj7+D4aRTCZVSZJuJ6IvNHClg5IkHTU4OPi61yB2RACqqn6LiL7GLt+nAEYBYL1pmj/0GL7TiOhmAMjOYFJuDYfDl+zevZu1p7r8EuCTbgBN0z4ohGC3NN8nECGEuK+7u/vC0dHR/zKMdDqdIqJ7AOC4BrfvorKdgOkIr1ucawFIiqI8AAArAUD2IwAi+ie7TdM0n3IvMZVKfdmx8FciYqwZTCL6hWVZJ4+MjBTmXAMURTkWALYBQLQZoQ0+H3cu/HbTNJnh6spkMgcQ0d0A8PEJtUbk6LAhCkQ8JZfLPTjXAohFo9HtiHgoAEg+BfACIp5hGMYrfD6bzUYty9qEiF9xYbrvfyYBCCFeQ8RP5/N5fc6eQCQSuViSpOsBoNsn86yy13jdXjqdPoqI7kDEfduF6WSQV+bz+aubCUCNRqOnAcDidhFM2c/JyjkcqAWA8xQRnT42NjZYu/2Ebds3AsCXfMIcEUIcPZMAJFVVlxHRowCg+EQyK8eIaEiSpIsMw/ixCzCdTp+GiN8hoqRfJIi4qqEAYrHYAtu22c8e7xfBLJ3jeH+baZp801X/HY/H94lEIlts2z7WbxqBiG9IktRQA8KKopwMAFxd8WuwZoV/SZLesixrValU+kMNoJxMJi9ge4KIkZmMXRMCVuu6fn9dDYhEIn2SJP0SAPafFS78A+Eb3+J1e319fR8ul8v3yrJ8kF/muXpERCcMDQ0Z9QQwT1VVdivX+EXgn9/JJ4noFSJaXiqV/s2fLFiwIBYOhy91EprLWfV90sfR4NJ8Pv8c5wTTBKCq6ocA4BkA4PBytnjxA6cohNhYKpW+6x5OJBLLZFlmQ5j2A7Aa+CBuUVV1/a5du96pFwjNUxTlDgA43S+CWTrHkv+taZqfB4BqvJ9KpZjpGxExCG15WZaPGBgYeMPNCL0a4Lq9xwKEqrPEP3AR81TTNH/uAkylUislSbrHyfjUAEi4NPY9AKi4MLwCiESj0WcQ8ZAACAIfJaIKIrLb45uuEprJZDgQY4+0pN1n6Sm0/ikUCq3o7+/f7SXSFQA3Js5ERK6YdNTtCSH0cDi8pFAo7GJCFy9e3D0+Pn42EW12DHOoXQm7AkPEE3VdZ+3mJsrEqgpA07QEEb3kxNXZqQg8ANrF7Wf/O1zUGBsb4yJndXG2J4T4GSIu8gNQkiQQQjyEiBfkcrmhqTBYAKgoyk1CiA38IR/wLp+1ej+08pk3otHoweyf+Zd4PB7v7u7eSETsln0tp/LE1p4zv+fr9QZQVdUDiYirqn6zNF+EuYc8Ah63bfuc8fHxiUJpNps9zLZtDsgi3v3u/1sJgyVJutbpEF0/PDxcrEco3/6DRHQct1dcDRBi0jMJxGCzw6xxjBsRn6u5varhq5W5ONU9oR7zLQrhTT6fy+X+OlNniKXrqzzVjLk2P+cmplusDGUymROJiIOeILSdo+v6Vq/bq2cD2qRz729PJBK9oVBoGxF9MgC2nUKINUNDQ3+fCQYbwY66PQ9x/ASrz5Br/ES0IRwObxJCNCvaNOKP3/Exuq4/PWN7PBaLLRdCcMFjauDf8HdEbHlvjboZ9/MAhGMA+03T/LPLTTqd5jIXG8C2y10eiTxWqVTWjoyMTAp+vBJjI3gdIl7WolEJoJFNj+7mFNfTyw+nUqlTEfEuPwGQi8227dXDw8NcAebCyrSFPJ1h2zb359/TlMR6APynpZOgIWJFCHGbYRgcj1TdUCKRyIZCobuI6LN+aOMzRPSqE+StaGQLqoFQPB4/3bIsbioGsbh+afSeGyWiww3DeNXzFI4GgEcCJmgbw+HwZm9LbELja//pUhRlhyRJgROhgKGzjYhPFgoFLsdV8/W+vr6FlUrlKg5l/UoYEYucBvf397801dZNJEPxeHypZVlPImJHIkKPDeJCCDc/fuL+rbe392AhxBNBCiFEtLVSqVzs9hOnagD/Ho7FYluJiPsAHVsc3gohXgiFQke7BpE7QEIIHnq41k9g5IbMQohj8vn8r7wZodfHcl6wPyI+G6BzO1uCM7kmWSwWuZNUXYlEYr9QKHSfO/rSKiJvMse8EdFK77zQ1CCjKxaLXeEMK06ko60i2gv73rQs68hSqeSOtWAqlVqDiFzRCdKo4fCYm6kcek+fD6iNrf3O8b/v3QtMtQOSjeDWYrF4vquyCxcu7JNl+duIeFI7gKbsfRsRl+ZyuX/VFQCPnGqaxuWoO+e4FlCPpxwRnWIYxg73w0wms7zWDk/5EQLzFAqFbh4YGODgz64bZ3OFCAAe5WSklZzbDyEtnuE54Se6uro4mqvm81wk4RwhFAqtD5C2lyRJWjI4OPhio0QjpGkaDzM81KlCiSsgSZJGuVpVLBb53VZXOp0+lN2aLMv7BRDCY7qun9ww06qFyDx11VG3yAwT0XO2bZ9SKpXcpKYrmUxukGX5G45r7GpRm6ZtY48wU6qJsVjsEH5vRDS/NrLuFxfH9kFmAwwulhqGcZVLQDKZ/IAkSXcGGbQEgHOb5drdqqp+ittyiFh1Gz4XC+CrAMDjMX7zjVeFEKtN0+Rwtrqy2exZtSGJBe3QxYZQCPFipVKZcUCiHZhN92qadngtqfE7HsezwPcUi8W1rg/nuiEAcO9wVVMCahu4BmlZFsiyvDyXy21vpgGtwm1pn6ZpnNuvCZDf70bE8wqFAucFrkH8nBMo3goALcUttWTtgXw+fwaPzc6pAHp6eva1bXsHIvq1B1xA3oaI5xeLxWGWQG1E9joAWNfSLQDwlOkRjgfglHt6e7xFIL63aZp2uVOH/GYAW7CHiC4zDIPbeNWVSCQOliTpbqeneFALhG3Udf2GhqFwCwACbeHZIyL6jRNjHOB3VJeIfs1PoVgs/q1GjJxKpTY6ZfVLEbHhECYR/cWyrOO9NcI5fQKu5FRVXYmIHGT5wk9E3D+43jAM1iRXC3plWeYx3KWNbsiZODkpn88/3CgdDnSzbR6ep2naTwGAa32+hAAA/IbPLRaLPOriGsSznFyGawaT8oTaOM3DTiB1dqFQGPHS6hd5m/xO3x6Pxz+CiDsty/IbyVlEtMUwDJ4ZGqvZAk2WZe4ErXAxsssLh8PjzrNZpus690Cnt8cDc+MPABdjb+EvPfg7Xj3F7W7WAtam6kqlUp+pzTm8z03kbNu+hsfqdF3nQsuk1TENYCoURckg4ktOkaNuatvKJBgiPlipVDZ484R0On0LAJzJZT5n1OZ1WZZXDAwMsMGcNvXVUQGwEFRVXYuItwXQAm6rXzQ2NsZ5QXXV8gQ2dtz6/2I+n7+/YWMkAOJZOcqBTKlU2iHL8kdt265+c7TdQgwRca1vrWmaL9eIwmQyebUTG+xTLpc3jo6OTvu2mEt8xzWAvUBPT8+RRMTT4FW6fPQWePhxk2EYXEStJm3cVZJl2dJ1/T/u3+rd2LtBAExXJBaL3SWE4F6gHwEwjLdY3Q3D4CCLF/PWdNLz3SIA9gj7VCoV/hL1RBNz6rzSTG+u9kXJR2oCaHnE5X9VfS+HlpcIywAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg> `,database:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12 8C16.9706 8 21 6.65685 21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5C3 6.65685 7.02944 8 12 8Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 5V19C3 19.7956 3.94821 20.5587 5.63604 21.1213C7.32387 21.6839 9.61305 22 12 22C14.3869 22 16.6761 21.6839 18.364 21.1213C20.0518 20.5587 21 19.7956 21 19V5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 12C3 12.7956 3.94821 13.5587 5.63604 14.1213C7.32387 14.6839 9.61305 15 12 15C14.3869 15 16.6761 14.6839 18.364 14.1213C20.0518 13.5587 21 12.7956 21 12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,"empty-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg>`,"profile-remove":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.75 10.875H1.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"logo-youtube-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M23.498 6.18598C23.3624 5.67526 23.095 5.20912 22.7226 4.83425C22.3502 4.45937 21.8858 4.18892 21.376 4.04998C19.505 3.54498 12 3.54498 12 3.54498C12 3.54498 4.495 3.54498 2.623 4.04998C2.11341 4.18917 1.64929 4.45972 1.27708 4.83456C0.904861 5.20941 0.637591 5.67542 0.502 6.18598C0 8.06998 0 12 0 12C0 12 0 15.93 0.502 17.814C0.637586 18.3247 0.904975 18.7908 1.27739 19.1657C1.64981 19.5406 2.11418 19.811 2.624 19.95C4.495 20.455 12 20.455 12 20.455C12 20.455 19.505 20.455 21.377 19.95C21.8869 19.8111 22.3513 19.5407 22.7237 19.1658C23.0961 18.7909 23.3635 18.3248 23.499 17.814C24 15.93 24 12 24 12C24 12 24 8.06998 23.498 6.18598ZM9.545 15.568V8.43198L15.818 12L9.545 15.568Z"
      fill="var(--${e.color})"
    />
  </svg> `,"add-grid":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <mask id="path-1-inside-1_5249_57947" fill="white">
      <rect x="2" y="2" width="8.57143" height="8.57143" rx="1.42857" />
    </mask>
    <rect
      x="2"
      y="2"
      width="8.57143"
      height="8.57143"
      rx="1.42857"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-1-inside-1_5249_57947)"
    />
    <mask id="path-2-inside-2_5249_57947" fill="white">
      <rect x="2" y="13.4286" width="8.57143" height="8.57143" rx="1.42857" />
    </mask>
    <rect
      x="2"
      y="13.4286"
      width="8.57143"
      height="8.57143"
      rx="1.42857"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-2-inside-2_5249_57947)"
    />
    <path
      d="M13.9051 6.88188H21.5242C21.8508 6.88188 22.1204 6.61228 22.1204 6.2857C22.1204 5.95912 21.8508 5.68952 21.5242 5.68952H13.9051C13.5786 5.68952 13.309 5.95912 13.309 6.2857C13.309 6.61228 13.5786 6.88188 13.9051 6.88188Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="0.23997"
    />
    <path
      d="M17.1193 10.0952C17.1193 10.4218 17.3889 10.6914 17.7154 10.6914C18.042 10.6914 18.3116 10.4218 18.3116 10.0952V2.47619C18.3116 2.14961 18.042 1.88001 17.7154 1.88001C17.3889 1.88001 17.1193 2.14961 17.1193 2.47619V10.0952Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="0.23997"
    />
    <mask id="path-5-inside-3_5249_57947" fill="white">
      <rect
        x="13.4282"
        y="13.4286"
        width="8.57143"
        height="8.57143"
        rx="1.42857"
      />
    </mask>
    <rect
      x="13.4282"
      y="13.4286"
      width="8.57143"
      height="8.57143"
      rx="1.42857"
      stroke="var(--${e.color})"
      stroke-width="3"
      mask="url(#path-5-inside-3_5249_57947)"
    />
  </svg> `,gallery:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.66998 18.9501L7.59998 15.6401C8.38998 15.1101 9.52998 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"logo-elfsight-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_5303_13118)">
      <rect
        x="0.0622559"
        y="-0.09375"
        width="24"
        height="24"
        rx="12"
        fill="var(--${e.color})"
      />
      <g clip-path="url(#clip1_5303_13118)">
        <path
          d="M13.998 14.9839C13.9978 14.921 13.9972 14.5429 13.9972 13.7051C13.9972 12.5923 13.9972 11.1642 13.9972 11.1642L13.9967 11.1649C13.9967 11.1587 13.9972 11.1527 13.9972 11.1465C13.9972 10.2865 13.4644 9.53017 12.6585 9.09167L12.6589 9.0912L12.625 9.0738C12.5987 9.05991 12.5722 9.0462 12.5454 9.03301L3.532 4.41238L3.53186 4.41261C3.46735 4.37491 3.39264 4.35297 3.31273 4.35297C3.07087 4.35297 2.87476 4.55076 2.87476 4.79492C2.87476 4.9203 2.92673 5.03328 3.00982 5.11375L3.00968 5.11393C3.00968 5.11393 3.0123 5.11618 3.01618 5.11959C3.02427 5.12713 3.03255 5.13447 3.04121 5.14139C3.39306 5.44801 6.66883 8.30203 8.69737 10.0489C9.72813 10.9367 9.83012 11.6848 9.83012 12.3283C9.83012 12.3288 9.83058 12.3287 9.83068 12.3291C9.83886 13.1881 10.4143 13.9351 11.2633 14.3287L11.2606 14.3319L13.3545 15.3851L13.3546 15.385C13.416 15.418 13.486 15.4368 13.5604 15.4368C13.8024 15.4368 13.9985 15.239 13.9985 14.9949C13.9985 14.9912 13.9981 14.9876 13.998 14.9839Z"
          fill="white"
        />
        <path
          d="M11.9004 20.5532C7.19154 20.3887 3.4944 16.4242 3.65884 11.7154C3.66675 11.4885 3.67803 11.2642 3.70441 11.0425C3.71784 10.9297 3.89393 10.0746 4.66238 10.1766C5.23846 10.253 5.42077 10.757 5.3782 11.1411C5.37001 11.2149 5.35331 11.4102 5.35331 11.4102C5.34274 11.5305 5.33525 11.6517 5.33095 11.7738C5.19869 15.5606 8.17196 18.7489 11.9587 18.8811C15.7453 19.0134 18.9337 16.0402 19.066 12.2535C19.1982 8.46656 16.2249 5.27827 12.4384 5.14602C12.0094 5.13105 11.588 5.15622 11.178 5.21769C11.178 5.21769 10.1874 5.38171 9.96673 4.71277C9.75322 4.06548 10.252 3.69103 10.5897 3.62081C11.2056 3.50287 11.844 3.45113 12.4967 3.47396C17.2054 3.6384 20.9025 7.6029 20.7381 12.3119C20.5737 17.0206 16.609 20.7176 11.9004 20.5532ZM33.8447 13.1204C33.6188 13.3123 33.3275 13.4079 32.9706 13.4079H28.1983C28.2193 14.0193 28.4396 14.5139 28.8598 14.892C29.2797 15.2704 29.8932 15.5061 30.5127 15.5061C31.0272 15.5061 31.5606 15.3429 32.2064 15.0165C32.8521 14.6901 32.8761 14.6697 32.9315 14.6394C33.342 14.4154 33.609 14.554 33.7658 14.8068C34.0784 15.3109 33.9835 15.7133 33.775 15.9259C33.3713 16.3374 32.8761 16.6181 32.2355 16.858C31.6313 17.0842 31.0984 17.1843 30.4598 17.1843C29.2133 17.1843 28.2913 16.7491 27.5058 15.8788C26.7621 15.0502 26.3905 14.0089 26.3905 12.7551C26.3905 11.543 26.77 10.5095 27.5294 9.65474C28.2886 8.79988 29.1819 8.37262 30.397 8.37262C31.4651 8.37262 32.3319 8.76381 33.0914 9.54593C33.8506 10.3283 34.1835 11.253 34.1835 12.32C34.1834 12.6619 34.0705 12.9288 33.8447 13.1204ZM31.8649 10.5949C31.5245 10.2013 30.9727 9.95761 30.3969 9.95761C29.8208 9.95761 29.243 10.2013 28.8502 10.5949C28.4575 10.9888 28.24 11.4757 28.1983 12.0558H32.4068C32.3858 11.4757 32.2052 10.9888 31.8649 10.5949ZM36.7373 17.1222C36.0721 17.1222 35.8334 17.1139 35.8334 16.2551V5.82119C35.8334 4.96249 36.0721 4.90729 36.7373 4.90729C37.4022 4.90729 37.6413 4.9572 37.6413 5.80561V16.2551C37.6413 17.1139 37.4022 17.1222 36.7373 17.1222ZM42.9695 6.6317C42.9322 6.6317 42.4731 6.63193 42.4344 6.63193C42.2773 6.63193 42.1568 6.69948 42.073 6.83398C41.9891 6.96872 41.9474 7.54377 41.9474 8.49687C42.4815 8.49687 42.8842 8.47615 43.0623 8.52784C43.4393 8.64194 43.5343 8.94753 43.5343 9.35159C43.5343 9.75565 43.4861 10.0616 43.1091 10.1755C42.9309 10.2275 42.4815 10.2064 41.9474 10.2064V16.2689C41.9474 17.1081 41.7408 17.1222 41.0707 17.1222C40.4319 17.1222 40.1708 17.1185 40.1708 16.2689V10.2064H39.6385C39.0435 10.2064 38.82 9.92819 38.82 9.35159C38.82 8.59572 39.2112 8.49757 39.5814 8.49757C39.649 8.49757 40.0949 8.49687 40.1708 8.49687C40.1708 6.90481 40.244 6.40962 40.3908 6.02619C40.6839 5.28019 41.1828 4.90729 42.2614 4.90729C42.3157 4.90729 42.7863 4.90729 42.8372 4.90729C43.3991 4.90729 43.5809 5.20389 43.5809 5.77735C43.5811 6.1402 43.5582 6.6317 42.9695 6.6317ZM48.4665 10.2211C48.023 10.0865 47.7864 10.0352 47.3665 10.0352C47.094 10.0352 46.718 10.0975 46.5192 10.2218C46.2782 10.3565 46.1579 10.5534 46.1579 10.8123C46.1579 11.061 46.3303 11.2903 46.6449 11.4652C47.1667 11.7555 47.6065 11.9712 48.154 12.2269C48.8836 12.5675 49.318 12.9015 49.5685 13.1283C50.0688 13.5811 50.1966 14.2485 50.1966 14.714C50.1966 15.4842 50.0326 16.1747 49.3312 16.672C48.7027 17.1176 48.1359 17.2 47.2561 17.2C46.1753 17.2 45.0698 16.8505 44.4119 16.1854C44.1107 15.8809 44.1117 15.6084 44.2859 15.2254C44.4685 14.8238 44.716 14.743 45.0408 14.8543C45.2659 14.9314 45.6428 15.1219 46.0074 15.2972C46.6302 15.5967 47.4099 15.7059 47.9176 15.4601C48.1488 15.3482 48.295 15.1407 48.295 14.7761C48.295 14.3336 48.0272 14.0404 47.3047 13.7191C46.1316 13.2116 45.6538 12.8591 45.4968 12.7554C44.7742 12.2789 44.4128 11.6312 44.4128 10.9059C44.4128 10.1186 44.7322 9.48656 45.3711 9.00989C45.9469 8.5852 46.6487 8.37271 47.4761 8.37271C48.0416 8.37271 48.5443 8.49697 49.1575 8.77677C50.0921 9.20315 50.0453 9.63977 49.9455 9.98891C49.7814 10.5629 49.4293 10.5209 49.2064 10.4539C49.2064 10.4539 48.9655 10.3726 48.4665 10.2211ZM53.4021 7.27917C53.2085 7.475 52.9724 7.57277 52.6937 7.57277C52.4147 7.57277 52.1762 7.47495 51.9784 7.27917C51.7804 7.08343 51.6815 6.8475 51.6815 6.57149C51.6815 6.2958 51.7804 6.06207 51.9784 5.87059C52.1762 5.67929 52.4147 5.58358 52.6937 5.58358C52.9635 5.58358 53.1973 5.68159 53.3954 5.87733C53.5932 6.07316 53.6922 6.30454 53.6922 6.57149C53.6922 6.8475 53.5955 7.08343 53.4021 7.27917ZM52.6407 8.49687C53.3057 8.49687 53.5446 8.5415 53.5446 9.37933V16.271C53.5446 17.1193 53.3057 17.1222 52.6407 17.1222C51.9755 17.1222 51.7367 17.1193 51.7367 16.271V9.39482C51.7367 8.54693 51.9755 8.49687 52.6407 8.49687ZM62.5651 17.5923C62.3766 18.5855 61.9624 19.3358 61.2296 19.8428C60.5486 20.3187 59.6981 20.5567 58.5751 20.5567C57.5227 20.5567 56.7453 20.3146 56.0125 19.8307C55.5515 19.5218 55.3008 19.2644 55.3681 18.8893C55.4112 18.6484 55.5253 18.4085 55.6427 18.2711C55.8229 18.06 56.1427 18.0917 56.2786 18.1483C56.3885 18.194 56.6304 18.3069 57.0808 18.5304C57.7091 18.8457 58.1866 18.9097 58.794 18.9097C60.2287 18.9097 60.993 17.966 60.993 16.2657V15.9409C60.993 15.9409 60.3764 17.1221 58.8241 17.1221C57.7034 17.1221 56.8444 16.6569 56.1533 15.7259C55.5248 14.888 55.2106 13.9005 55.2106 12.7628C55.2106 11.5839 55.5352 10.5808 56.1846 9.75317C56.8967 8.84316 57.7405 8.38801 58.903 8.38801C59.7799 8.38801 60.5112 8.74037 60.993 9.44487C60.993 8.62599 61.3082 8.49682 61.8422 8.49682C62.4896 8.49682 62.7066 8.6572 62.7066 9.75397V15.8694C62.7066 16.511 62.6594 17.0853 62.5651 17.5923ZM60.6141 11.0301C60.2568 10.4605 59.7099 10.1754 58.9741 10.1754C58.3433 10.1754 57.8023 10.4655 57.445 11.0456C57.1294 11.5535 56.9717 12.1336 56.9717 12.7862C56.9717 13.4599 57.1242 14.04 57.429 14.5269C57.7864 15.0968 58.3379 15.3816 58.9898 15.3816C59.652 15.3816 60.1726 15.1228 60.5511 14.6046C60.8873 14.1488 61.0557 13.5842 61.0557 12.9105C61.0558 12.1335 60.9085 11.5068 60.6141 11.0301ZM70.7449 17.1222C70.0798 17.1222 69.841 17.1196 69.841 16.2718V12.0438C69.841 10.4506 69.2535 10.0589 68.4021 10.0589C67.9553 10.0589 67.4952 10.1699 67.0422 10.6327C66.7327 10.9487 66.4329 11.4337 66.4329 12.0127V16.2718C66.4329 17.1196 66.191 17.1222 65.521 17.1222C64.8612 17.1222 64.6249 17.1196 64.6249 16.2023V5.70311C64.6249 4.91519 64.8612 4.90729 65.521 4.90729C66.191 4.90729 66.4329 4.91482 66.4329 5.77169C66.4329 7.95943 66.4329 9.24984 66.4329 9.34485C66.9071 8.75478 67.7988 8.38043 68.7727 8.38043C69.757 8.38043 70.3345 8.71694 70.8791 9.29611C71.3921 9.86484 71.6489 10.6872 71.6489 11.6697V16.271C71.6489 17.1193 71.4098 17.1222 70.7449 17.1222ZM76.9125 10.1755C76.7343 10.2272 76.2849 10.2063 75.7508 10.2063C75.7508 11.3217 75.7506 14.8378 75.7506 14.9966C75.7506 15.3668 75.9403 15.3974 76.0973 15.3974C76.1367 15.3974 76.6893 15.3995 76.7261 15.3995C77.3352 15.3995 77.3844 15.9032 77.3844 16.252C77.3844 16.8451 77.1808 17.1215 76.7035 17.1215C76.6782 17.1215 75.9506 17.1222 75.9245 17.1222C74.8458 17.1222 73.9742 16.561 73.9742 15.0252C73.9742 14.5171 73.9742 11.5557 73.9742 10.2063C73.568 10.2063 73.4553 10.2011 73.2378 10.2011C72.8864 10.2011 72.6232 10.0061 72.6232 9.35159C72.6232 8.86388 72.7193 8.49687 73.3482 8.49687H73.9742V5.74502C73.9742 4.89536 74.2 4.89171 74.8389 4.89171C75.509 4.89171 75.7508 4.89021 75.7508 5.72945V8.49692C76.2849 8.49692 76.7343 8.47582 76.9124 8.52775C77.2895 8.64171 77.3844 8.94753 77.3844 9.35164C77.3844 9.75575 77.2895 10.0614 76.9125 10.1755Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_5303_13118">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_5303_13118">
        <rect
          width="74.4997"
          height="17.0881"
          fill="white"
          transform="translate(2.87476 3.46875)"
        />
      </clipPath>
    </defs>
  </svg> `,"maximize-vertical":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.9994 3.51473L12.0005 20.4853"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.828 6.34296L11.9994 3.51472L9.17114 6.34332"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.17188 17.657L12.0005 20.4853L14.8287 17.6567"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"minimize-vertical":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.3238 3.77781V8.62654"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.49183 7.01028L12.3203 9.83871L15.1487 7.01028"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.3313 16.0754V20.9241"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.1484 17.6917L12.32 14.8633L9.49158 17.6917"
      stroke="var(--${e.color})"
      stroke-width="1.3125"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,chart:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M2 22H22"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.75 4V22H14.25V4C14.25 2.9 13.8 2 12.45 2H11.55C10.2 2 9.75 2.9 9.75 4Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 10V22H7V10C7 8.9 6.6 8 5.4 8H4.6C3.4 8 3 8.9 3 10Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 15V22H21V15C21 13.9 20.6 13 19.4 13H18.6C17.4 13 17 13.9 17 15Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,people:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9702 14.44C18.3402 14.67 19.8502 14.43 20.9102 13.72C22.3202 12.78 22.3202 11.24 20.9102 10.3C19.8402 9.59004 18.3102 9.35003 16.9402 9.59003"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"document-code":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 13L8 15L10 17"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 13L16 15L14 17"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"logo-warpcast-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_57_21396)">
      <mask
        id="mask0_57_21396"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M0 0H23.9926V23.9926H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_57_21396)">
        <path
          d="M18.0523 23.9926H5.94021C2.66478 23.9926 0 21.328 0 18.0524V5.94043C0 2.66492 2.66478 0.00012207 5.94021 0.00012207H18.0523C21.3278 0.00012207 23.9926 2.66492 23.9926 5.94043V18.0524C23.9926 21.328 21.3278 23.9926 18.0523 23.9926Z"
          fill="var(--${e.color})"
        />
        <path
          d="M15.7431 7.59302L14.5601 12.036L13.3732 7.59302H10.6419L9.4436 12.0687L8.24928 7.59302H5.13837L8.02911 17.4164H10.713L11.9963 12.8548L13.2796 17.4164H15.9693L18.8537 7.59302H15.7431Z"
          fill="white"
        />
      </g>
    </g>
    <path
      d="M742.847 306.712C742.847 311.868 742.17 316.607 740.816 320.929C739.462 325.251 737.486 329.238 734.887 332.89H729.265C730.278 331.536 731.221 329.874 732.097 327.905C732.972 325.935 733.738 323.781 734.394 321.442C735.051 319.089 735.564 316.655 735.933 314.138C736.302 311.622 736.487 309.146 736.487 306.712C736.487 303.47 736.166 300.181 735.523 296.843C734.88 293.506 734.011 290.408 732.917 287.55C731.823 284.691 730.606 282.359 729.265 280.554H734.887C737.486 284.205 739.462 288.192 740.816 292.514C742.17 296.836 742.847 301.569 742.847 306.712Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M722.798 282.133V324.15H716.664V282.133H722.798Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M692.942 324.848C690.945 324.848 689.14 324.478 687.526 323.74C685.912 322.988 684.633 321.9 683.689 320.478C682.759 319.055 682.294 317.311 682.294 315.246C682.294 313.468 682.636 312.005 683.32 310.856C684.004 309.707 684.927 308.797 686.09 308.127C687.252 307.457 688.551 306.951 689.988 306.609C691.424 306.267 692.887 306.007 694.378 305.829C696.265 305.611 697.797 305.433 698.974 305.296C700.15 305.146 701.005 304.906 701.538 304.578C702.072 304.25 702.338 303.716 702.338 302.978V302.834C702.338 301.042 701.832 299.654 700.82 298.669C699.822 297.685 698.331 297.192 696.348 297.192C694.282 297.192 692.655 297.65 691.465 298.567C690.288 299.469 689.475 300.475 689.023 301.583L683.258 300.27C683.942 298.355 684.941 296.809 686.254 295.633C687.58 294.443 689.105 293.581 690.829 293.048C692.552 292.501 694.364 292.227 696.265 292.227C697.524 292.227 698.857 292.378 700.266 292.679C701.689 292.966 703.015 293.499 704.246 294.279C705.491 295.058 706.51 296.173 707.303 297.623C708.096 299.059 708.493 300.926 708.493 303.224V324.15H702.502V319.842H702.256C701.86 320.635 701.265 321.415 700.471 322.181C699.678 322.947 698.659 323.583 697.414 324.089C696.17 324.595 694.679 324.848 692.942 324.848ZM694.275 319.924C695.971 319.924 697.421 319.589 698.625 318.919C699.842 318.248 700.765 317.373 701.394 316.293C702.037 315.198 702.359 314.029 702.359 312.784V308.722C702.14 308.941 701.716 309.146 701.087 309.338C700.471 309.515 699.767 309.673 698.974 309.809C698.18 309.933 697.408 310.049 696.655 310.158C695.903 310.254 695.274 310.336 694.768 310.404C693.578 310.555 692.491 310.808 691.506 311.164C690.535 311.519 689.755 312.032 689.167 312.702C688.592 313.359 688.305 314.234 688.305 315.328C688.305 316.846 688.866 317.995 689.988 318.775C691.109 319.541 692.538 319.924 694.275 319.924Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M669.384 324.15V292.638H675.519V324.15H669.384ZM672.482 287.775C671.415 287.775 670.499 287.42 669.733 286.708C668.981 285.984 668.605 285.122 668.605 284.123C668.605 283.111 668.981 282.25 669.733 281.538C670.499 280.814 671.415 280.451 672.482 280.451C673.549 280.451 674.459 280.814 675.211 281.538C675.977 282.25 676.36 283.111 676.36 284.123C676.36 285.122 675.977 285.984 675.211 286.708C674.459 287.42 673.549 287.775 672.482 287.775Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M649.879 324.786C646.829 324.786 644.203 324.095 642.001 322.714C639.812 321.319 638.13 319.397 636.954 316.949C635.777 314.501 635.189 311.697 635.189 308.537C635.189 305.337 635.791 302.513 636.995 300.064C638.198 297.602 639.894 295.681 642.083 294.299C644.271 292.918 646.849 292.227 649.817 292.227C652.211 292.227 654.344 292.672 656.218 293.561C658.092 294.436 659.603 295.667 660.752 297.254C661.915 298.84 662.606 300.694 662.824 302.814H656.854C656.526 301.336 655.774 300.064 654.597 298.998C653.435 297.931 651.876 297.397 649.92 297.397C648.21 297.397 646.712 297.849 645.427 298.751C644.155 299.64 643.163 300.912 642.452 302.567C641.741 304.209 641.385 306.151 641.385 308.394C641.385 310.692 641.734 312.675 642.431 314.343C643.129 316.012 644.114 317.305 645.386 318.221C646.671 319.137 648.183 319.596 649.92 319.596C651.082 319.596 652.136 319.384 653.079 318.96C654.037 318.522 654.837 317.9 655.48 317.093C656.136 316.286 656.594 315.315 656.854 314.179H662.824C662.606 316.217 661.942 318.036 660.834 319.637C659.726 321.237 658.242 322.495 656.382 323.412C654.536 324.328 652.368 324.786 649.879 324.786Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M622.218 324.15V292.638H628.352V324.15H622.218ZM625.316 287.775C624.249 287.775 623.333 287.42 622.567 286.708C621.815 285.984 621.438 285.122 621.438 284.123C621.438 283.111 621.815 282.25 622.567 281.538C623.333 280.814 624.249 280.451 625.316 280.451C626.383 280.451 627.292 280.814 628.045 281.538C628.811 282.25 629.194 283.111 629.194 284.123C629.194 285.122 628.811 285.984 628.045 286.708C627.292 287.42 626.383 287.775 625.316 287.775Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M615.889 292.638V297.561H598.081V292.638H615.889ZM602.964 324.15V288.986C602.964 287.016 603.395 285.382 604.256 284.082C605.118 282.769 606.26 281.791 607.682 281.149C609.105 280.492 610.65 280.164 612.319 280.164C613.55 280.164 614.603 280.266 615.479 280.472C616.354 280.663 617.004 280.841 617.428 281.005L615.991 285.97C615.704 285.888 615.335 285.792 614.884 285.683C614.432 285.559 613.885 285.498 613.242 285.498C611.751 285.498 610.685 285.867 610.042 286.606C609.413 287.344 609.098 288.411 609.098 289.806V324.15H602.964Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M594.562 292.638V297.561H576.755V292.638H594.562ZM581.637 324.15V288.986C581.637 287.016 582.068 285.382 582.93 284.082C583.792 282.769 584.934 281.791 586.356 281.149C587.779 280.492 589.324 280.164 590.993 280.164C592.224 280.164 593.277 280.266 594.152 280.472C595.027 280.663 595.677 280.841 596.101 281.005L594.665 285.97C594.378 285.888 594.009 285.792 593.557 285.683C593.106 285.559 592.559 285.498 591.916 285.498C590.425 285.498 589.358 285.867 588.715 286.606C588.086 287.344 587.772 288.411 587.772 289.806V324.15H581.637Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M558.029 324.786C555.074 324.786 552.496 324.109 550.294 322.755C548.092 321.401 546.382 319.507 545.165 317.072C543.948 314.638 543.339 311.793 543.339 308.537C543.339 305.269 543.948 302.41 545.165 299.962C546.382 297.514 548.092 295.612 550.294 294.258C552.496 292.904 555.074 292.227 558.029 292.227C560.983 292.227 563.561 292.904 565.763 294.258C567.965 295.612 569.675 297.514 570.892 299.962C572.109 302.41 572.718 305.269 572.718 308.537C572.718 311.793 572.109 314.638 570.892 317.072C569.675 319.507 567.965 321.401 565.763 322.755C563.561 324.109 560.983 324.786 558.029 324.786ZM558.049 319.637C559.964 319.637 561.55 319.131 562.809 318.118C564.067 317.106 564.997 315.759 565.599 314.077C566.214 312.394 566.522 310.541 566.522 308.517C566.522 306.506 566.214 304.66 565.599 302.978C564.997 301.282 564.067 299.921 562.809 298.895C561.55 297.869 559.964 297.356 558.049 297.356C556.121 297.356 554.52 297.869 553.248 298.895C551.99 299.921 551.053 301.282 550.438 302.978C549.836 304.66 549.535 306.506 549.535 308.517C549.535 310.541 549.836 312.394 550.438 314.077C551.053 315.759 551.99 317.106 553.248 318.118C554.52 319.131 556.121 319.637 558.049 319.637Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M516.361 305.44V324.15H510.226V292.638H516.114V297.767H516.504C517.229 296.098 518.364 294.758 519.91 293.745C521.469 292.733 523.432 292.227 525.798 292.227C527.945 292.227 529.826 292.679 531.44 293.581C533.054 294.47 534.305 295.797 535.194 297.561C536.083 299.326 536.528 301.507 536.528 304.106V324.15H530.394V304.845C530.394 302.56 529.799 300.776 528.609 299.49C527.419 298.191 525.784 297.541 523.705 297.541C522.283 297.541 521.018 297.849 519.91 298.464C518.816 299.08 517.947 299.982 517.304 301.172C516.675 302.348 516.361 303.771 516.361 305.44Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M495.142 282.133H501.502V309.768C501.502 312.709 500.811 315.315 499.43 317.585C498.048 319.842 496.106 321.62 493.603 322.919C491.1 324.205 488.166 324.848 484.802 324.848C481.451 324.848 478.524 324.205 476.021 322.919C473.518 321.62 471.576 319.842 470.194 317.585C468.813 315.315 468.122 312.709 468.122 309.768V282.133H474.462V309.256C474.462 311.157 474.879 312.846 475.713 314.323C476.561 315.8 477.758 316.963 479.304 317.811C480.849 318.645 482.682 319.062 484.802 319.062C486.935 319.062 488.775 318.645 490.321 317.811C491.88 316.963 493.07 315.8 493.89 314.323C494.725 312.846 495.142 311.157 495.142 309.256V282.133Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M447.581 303.142C447.581 297.999 448.258 293.267 449.612 288.945C450.966 284.623 452.942 280.636 455.541 276.984H461.162C460.15 278.338 459.206 280 458.331 281.969C457.456 283.939 456.69 286.1 456.033 288.452C455.377 290.791 454.864 293.219 454.495 295.735C454.125 298.238 453.941 300.707 453.941 303.142C453.941 306.397 454.262 309.693 454.905 313.03C455.548 316.368 456.416 319.466 457.51 322.324C458.605 325.183 459.822 327.515 461.162 329.32H455.541C452.942 325.668 450.966 321.681 449.612 317.359C448.258 313.037 447.581 308.298 447.581 303.142Z"
      fill="white"
      fill-opacity="0.25"
    />
    <path
      d="M740.683 191.617V204.747H702.728V191.617H740.683ZM711.345 176.517H728.824V235.275C728.824 236.889 729.071 238.147 729.563 239.05C730.055 239.925 730.739 240.541 731.615 240.896C732.517 241.252 733.557 241.43 734.733 241.43C735.554 241.43 736.374 241.361 737.195 241.224C738.016 241.06 738.645 240.937 739.082 240.855L741.832 253.862C740.956 254.136 739.725 254.45 738.139 254.806C736.552 255.189 734.624 255.422 732.353 255.504C728.14 255.668 724.448 255.107 721.274 253.821C718.129 252.536 715.68 250.539 713.93 247.831C712.179 245.122 711.317 241.703 711.345 237.573V176.517Z"
      fill="white"
    />
    <path
      d="M675.678 254.642V191.617H693.157V254.642H675.678ZM684.459 183.492C681.86 183.492 679.63 182.631 677.77 180.907C675.938 179.157 675.021 177.064 675.021 174.629C675.021 172.222 675.938 170.157 677.77 168.434C679.63 166.683 681.86 165.808 684.459 165.808C687.057 165.808 689.273 166.683 691.106 168.434C692.966 170.157 693.896 172.222 693.896 174.629C693.896 177.064 692.966 179.157 691.106 180.907C689.273 182.631 687.057 183.492 684.459 183.492Z"
      fill="white"
    />
    <path
      d="M592.393 254.642V170.608H610.16V207.66H611.268L641.508 170.608H662.804L631.62 208.235L663.173 254.642H641.919L618.9 220.093L610.16 230.761V254.642H592.393Z"
      fill="white"
    />
    <path d="M551.033 170.608V254.642H533.266V170.608H551.033Z" fill="white" />
    <path
      d="M500.881 170.608H518.648V225.181C518.648 231.308 517.185 236.67 514.258 241.265C511.358 245.861 507.296 249.444 502.071 252.016C496.846 254.56 490.76 255.832 483.812 255.832C476.836 255.832 470.736 254.56 465.512 252.016C460.287 249.444 456.225 245.861 453.325 241.265C450.426 236.67 448.976 231.308 448.976 225.181V170.608H466.743V223.663C466.743 226.863 467.44 229.708 468.835 232.197C470.258 234.687 472.255 236.642 474.826 238.065C477.397 239.487 480.393 240.199 483.812 240.199C487.259 240.199 490.254 239.487 492.798 238.065C495.369 236.642 497.352 234.687 498.748 232.197C500.17 229.708 500.881 226.863 500.881 223.663V170.608Z"
      fill="white"
    />
    <path
      d="M982.269 52.6002V65.7305H944.314V52.6002H982.269ZM952.931 37.5004H970.411V96.2583C970.411 97.8722 970.657 99.1305 971.149 100.033C971.642 100.909 972.325 101.524 973.201 101.88C974.103 102.235 975.143 102.413 976.319 102.413C977.14 102.413 977.96 102.345 978.781 102.208C979.602 102.044 980.231 101.921 980.669 101.839L983.418 114.846C982.542 115.119 981.311 115.434 979.725 115.79C978.138 116.172 976.21 116.405 973.939 116.487C969.727 116.651 966.034 116.09 962.861 114.805C959.715 113.519 957.267 111.522 955.516 108.814C953.765 106.106 952.904 102.687 952.931 98.5561V37.5004Z"
      fill="white"
    />
    <path
      d="M936.303 70.5722L920.3 71.557C920.027 70.1893 919.439 68.9583 918.536 67.8641C917.633 66.7426 916.443 65.8536 914.966 65.197C913.516 64.5132 911.779 64.1712 909.755 64.1712C907.047 64.1712 904.763 64.7457 902.903 65.8946C901.043 67.0161 900.113 68.5206 900.113 70.4081C900.113 71.9126 900.714 73.1846 901.918 74.2241C903.122 75.2636 905.187 76.0979 908.114 76.727L919.521 79.0248C925.648 80.2831 930.216 82.3074 933.225 85.0976C936.234 87.8877 937.739 91.5533 937.739 96.0941C937.739 100.225 936.522 103.849 934.087 106.968C931.68 110.086 928.37 112.521 924.157 114.271C919.972 115.995 915.144 116.856 909.673 116.856C901.33 116.856 894.683 115.119 889.731 111.645C884.808 108.144 881.922 103.384 881.074 97.3661L898.266 96.4634C898.786 99.0074 900.044 100.95 902.041 102.29C904.038 103.603 906.596 104.26 909.714 104.26C912.778 104.26 915.24 103.671 917.1 102.495C918.987 101.292 919.945 99.746 919.972 97.8585C919.945 96.272 919.275 94.9726 917.961 93.9605C916.648 92.921 914.624 92.1277 911.889 91.5806L900.974 89.4059C894.819 88.175 890.238 86.0413 887.229 83.0049C884.247 79.9686 882.756 76.0979 882.756 71.3929C882.756 67.3444 883.85 63.8567 886.039 60.9297C888.254 58.0028 891.359 55.746 895.353 54.1594C899.374 52.5729 904.079 51.7796 909.468 51.7796C917.428 51.7796 923.692 53.4619 928.261 56.8265C932.856 60.1911 935.537 64.773 936.303 70.5722Z"
      fill="white"
    />
    <path
      d="M834.81 116.815C830.789 116.815 827.205 116.118 824.06 114.723C820.914 113.3 818.425 111.208 816.592 108.445C814.786 105.655 813.884 102.181 813.884 98.0227C813.884 94.5213 814.527 91.5806 815.812 89.2008C817.098 86.8209 818.849 84.9061 821.064 83.4563C823.28 82.0065 825.797 80.9123 828.614 80.1737C831.459 79.4352 834.441 78.9154 837.559 78.6145C841.225 78.2315 844.179 77.8759 846.422 77.5477C848.665 77.1921 850.293 76.6723 851.305 75.9885C852.317 75.3046 852.823 74.2925 852.823 72.9521V72.7059C852.823 70.1072 852.003 68.0966 850.361 66.6742C848.747 65.2517 846.449 64.5405 843.468 64.5405C840.322 64.5405 837.819 65.2381 835.959 66.6332C834.099 68.0009 832.868 69.7242 832.266 71.8032L816.099 70.4902C816.92 66.6605 818.534 63.3506 820.941 60.5604C823.348 57.7429 826.453 55.5819 830.256 54.0774C834.085 52.5455 838.517 51.7796 843.55 51.7796C847.051 51.7796 850.402 52.1899 853.603 53.0105C856.831 53.8312 859.689 55.1032 862.178 56.8265C864.695 58.5499 866.678 60.7656 868.128 63.4737C869.578 66.1545 870.303 69.3686 870.303 73.1162V115.625H853.726V106.886H853.233C852.221 108.855 850.867 110.592 849.171 112.097C847.475 113.574 845.437 114.736 843.058 115.584C840.678 116.405 837.929 116.815 834.81 116.815ZM839.816 104.752C842.387 104.752 844.658 104.246 846.627 103.234C848.597 102.194 850.142 100.799 851.264 99.0485C852.385 97.2978 852.946 95.3145 852.946 93.0988V86.4106C852.399 86.7662 851.647 87.0945 850.689 87.3954C849.759 87.6689 848.706 87.9288 847.53 88.175C846.354 88.3938 845.177 88.599 844.001 88.7905C842.825 88.9546 841.758 89.105 840.801 89.2418C838.749 89.5427 836.957 90.0214 835.426 90.6779C833.894 91.3344 832.704 92.2235 831.856 93.345C831.008 94.4392 830.584 95.8069 830.584 97.4482C830.584 99.8281 831.445 101.647 833.169 102.905C834.919 104.136 837.135 104.752 839.816 104.752Z"
      fill="white"
    />
    <path
      d="M777.499 116.856C771.043 116.856 765.49 115.489 760.84 112.753C756.217 109.99 752.661 106.161 750.171 101.264C747.709 96.3677 746.478 90.7326 746.478 84.359C746.478 77.9033 747.723 72.2409 750.212 67.3717C752.729 62.4753 756.299 58.6593 760.922 55.9238C765.545 53.161 771.043 51.7796 777.417 51.7796C782.915 51.7796 787.729 52.778 791.86 54.7749C795.99 56.7718 799.259 59.5757 801.667 63.1865C804.074 66.7973 805.4 71.0373 805.647 75.9064H789.152C788.687 72.7606 787.456 70.2303 785.459 68.3155C783.489 66.3733 780.904 65.4022 777.704 65.4022C774.996 65.4022 772.629 66.1408 770.605 67.6179C768.608 69.0677 767.049 71.1877 765.928 73.9779C764.806 76.7681 764.245 80.1464 764.245 84.1128C764.245 88.1339 764.792 91.5533 765.887 94.3708C767.008 97.1883 768.581 99.3357 770.605 100.813C772.629 102.29 774.996 103.029 777.704 103.029C779.701 103.029 781.492 102.618 783.079 101.798C784.693 100.977 786.02 99.787 787.059 98.2278C788.126 96.6412 788.823 94.7401 789.152 92.5244H805.647C805.373 97.3388 804.06 101.579 801.708 105.244C799.382 108.882 796.168 111.727 792.065 113.779C787.962 115.831 783.106 116.856 777.499 116.856Z"
      fill="white"
    />
    <path
      d="M675.903 139.26V52.6002H693.137V63.1865H693.916C694.682 61.4905 695.79 59.7671 697.24 58.0164C698.717 56.2384 700.632 54.7612 702.984 53.585C705.364 52.3814 708.319 51.7796 711.847 51.7796C716.443 51.7796 720.683 52.9832 724.567 55.3904C728.452 57.7702 731.556 61.3674 733.882 66.1818C736.207 70.9689 737.369 76.9732 737.369 84.1949C737.369 91.225 736.234 97.161 733.964 102.003C731.721 106.817 728.657 110.469 724.772 112.958C720.915 115.42 716.593 116.651 711.806 116.651C708.414 116.651 705.528 116.09 703.149 114.969C700.796 113.847 698.868 112.439 697.363 110.743C695.859 109.019 694.71 107.282 693.916 105.532H693.383V139.26H675.903ZM693.014 84.1128C693.014 87.8604 693.533 91.1293 694.573 93.9195C695.612 96.7096 697.117 98.8843 699.086 100.444C701.056 101.975 703.45 102.741 706.267 102.741C709.112 102.741 711.519 101.962 713.489 100.403C715.458 98.8159 716.949 96.6276 717.961 93.8374C719.001 91.0199 719.52 87.7783 719.52 84.1128C719.52 80.4746 719.014 77.2741 718.002 74.5113C716.99 71.7485 715.499 69.5875 713.53 68.0282C711.56 66.469 709.139 65.6894 706.267 65.6894C703.422 65.6894 701.015 66.4417 699.045 67.9462C697.103 69.4507 695.612 71.5844 694.573 74.3472C693.533 77.11 693.014 80.3652 693.014 84.1128Z"
      fill="white"
    />
    <path
      d="M628.624 115.625V52.6002H645.57V63.5968H646.227C647.376 59.6851 649.304 56.7308 652.012 54.7339C654.721 52.7096 657.839 51.6975 661.368 51.6975C662.243 51.6975 663.187 51.7522 664.199 51.8616C665.211 51.9711 666.1 52.1215 666.866 52.313V67.8231C666.045 67.5769 664.91 67.3581 663.46 67.1666C662.011 66.9751 660.684 66.8794 659.48 66.8794C656.909 66.8794 654.611 67.4401 652.587 68.5617C650.59 69.6559 649.003 71.1877 647.827 73.1573C646.678 75.1268 646.104 77.3972 646.104 79.9686V115.625H628.624Z"
      fill="white"
    />
    <path
      d="M579.57 116.815C575.549 116.815 571.966 116.118 568.82 114.723C565.674 113.3 563.185 111.208 561.352 108.445C559.547 105.655 558.644 102.181 558.644 98.0227C558.644 94.5213 559.287 91.5806 560.573 89.2008C561.858 86.8209 563.609 84.9061 565.825 83.4563C568.04 82.0065 570.557 80.9123 573.375 80.1737C576.219 79.4352 579.201 78.9154 582.32 78.6145C585.985 78.2315 588.939 77.8759 591.182 77.5477C593.426 77.1921 595.053 76.6723 596.065 75.9885C597.077 75.3046 597.583 74.2925 597.583 72.9521V72.7059C597.583 70.1072 596.763 68.0966 595.122 66.6742C593.508 65.2517 591.21 64.5405 588.228 64.5405C585.082 64.5405 582.579 65.2381 580.719 66.6332C578.859 68.0009 577.628 69.7242 577.026 71.8032L560.86 70.4902C561.68 66.6605 563.294 63.3506 565.702 60.5604C568.109 57.7429 571.214 55.5819 575.016 54.0774C578.846 52.5455 583.277 51.7796 588.31 51.7796C591.812 51.7796 595.163 52.1899 598.363 53.0105C601.591 53.8312 604.449 55.1032 606.939 56.8265C609.455 58.5499 611.439 60.7656 612.888 63.4737C614.338 66.1545 615.063 69.3686 615.063 73.1162V115.625H598.486V106.886H597.994C596.982 108.855 595.628 110.592 593.932 112.097C592.236 113.574 590.198 114.736 587.818 115.584C585.438 116.405 582.689 116.815 579.57 116.815ZM584.576 104.752C587.148 104.752 589.418 104.246 591.388 103.234C593.357 102.194 594.903 100.799 596.024 99.0485C597.146 97.2978 597.707 95.3145 597.707 93.0988V86.4106C597.159 86.7662 596.407 87.0945 595.45 87.3954C594.52 87.6689 593.467 87.9288 592.29 88.175C591.114 88.3938 589.938 88.599 588.762 88.7905C587.585 88.9546 586.519 89.105 585.561 89.2418C583.509 89.5427 581.718 90.0214 580.186 90.6779C578.654 91.3344 577.464 92.2235 576.616 93.345C575.768 94.4392 575.344 95.8069 575.344 97.4482C575.344 99.8281 576.206 101.647 577.929 102.905C579.68 104.136 581.896 104.752 584.576 104.752Z"
      fill="white"
    />
    <path
      d="M467.892 115.625L443.847 31.5918H463.255L477.165 89.9804H477.862L493.208 31.5918H509.826L525.131 90.1035H525.87L539.78 31.5918H559.188L535.143 115.625H517.827L501.825 60.6835H501.168L485.207 115.625H467.892Z"
      fill="white"
    />
    <defs>
      <clipPath id="clip0_57_21396">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg> `,parachute:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <mask
      id="mask0_7790_250"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="1"
      y="1"
      width="22"
      height="22"
    >
      <path d="M23 1H1V23H23V1Z" fill="white" />
    </mask>
    <g mask="url(#mask0_7790_250)">
      <mask
        id="mask1_7790_250"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="22"
        height="22"
      >
        <path d="M1 1H23V23H1V1Z" fill="white" />
      </mask>
      <g mask="url(#mask1_7790_250)">
        <path
          d="M8.77734 20.5266C8.77734 21.5391 9.59816 22.36 10.6107 22.36H13.3893C14.4018 22.36 15.2227 21.5391 15.2227 20.5266V17.748C15.2227 16.7355 14.4018 15.9146 13.3893 15.9146H10.6107C9.59816 15.9146 8.77734 16.7355 8.77734 17.748V20.5266Z"
          stroke="var(--${e.color})"
          stroke-width="1.375"
          stroke-miterlimit="10"
        />
        <path
          d="M11.1716 14.1659C11.5027 14.8649 12.4973 14.8649 12.8284 14.1659L14.7047 10.2053C14.7628 10.0826 14.7932 9.94792 14.7921 9.81218C14.7555 5.28018 13.5194 1.64009 12 1.64009C10.4806 1.64009 9.24446 5.28018 9.20787 9.81218C9.20677 9.94792 9.23718 10.0826 9.29529 10.2053L11.1716 14.1659Z"
          stroke="var(--${e.color})"
          stroke-width="1.28906"
          stroke-miterlimit="10"
        />
        <path
          d="M3.62109 10.019C5.16488 8.4752 7.66325 8.4752 9.20703 10.019C10.7508 8.4752 13.2492 8.4752 14.793 10.019C16.3368 8.4752 18.8351 8.4752 20.3789 10.019"
          stroke="var(--${e.color})"
          stroke-width="1.28906"
          stroke-miterlimit="10"
        />
        <path
          d="M11.4725 15.5435C11.7889 15.7661 12.2111 15.7661 12.5275 15.5435L19.9897 10.2928C20.2337 10.1212 20.3823 9.84101 20.3656 9.54314C20.1189 5.13698 16.4679 1.64009 12 1.64009C7.53218 1.64009 3.88107 5.13698 3.63438 9.54314C3.6177 9.84101 3.76628 10.1212 4.01026 10.2928L11.4725 15.5435Z"
          stroke="var(--${e.color})"
          stroke-width="1.28906"
          stroke-miterlimit="10"
        />
      </g>
    </g>
  </svg> `,"bitcoin-convert":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M23 15.97C23 19.84 19.87 22.97 16 22.97L17.05 21.22"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1 7.96997C1 4.09997 4.13 0.969971 8 0.969971L6.95 2.71997"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.62 13.07H9.43C10.05 13.07 10.56 13.63 10.56 14.2C10.56 14.82 10.06 15.33 9.43 15.33H6.62V13.07Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.62 15.33H9.84C10.55 15.33 11.13 15.83 11.13 16.46C11.13 17.08 10.55 17.59 9.84 17.59H6.62V15.33Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.85 15.33C14.85 18.74 12.09 21.5 8.67998 21.5C5.26998 21.5 2.50998 18.74 2.50998 15.33C2.50998 11.92 5.26998 9.15997 8.67998 9.15997C8.83998 9.15997 8.98998 9.16999 9.15998 9.17999C12.19 9.40999 14.61 11.83 14.84 14.86C14.84 15.01 14.85 15.16 14.85 15.33Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 8.66998C21.5 12.08 18.74 14.84 15.33 14.84H14.84C14.61 11.81 12.19 9.38997 9.16 9.15997V8.66998C9.16 5.25998 11.92 2.5 15.33 2.5C18.74 2.5 21.5 5.25998 21.5 8.66998Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,nft:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.0799 8.58003V15.42C21.0799 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47991 18.15C3.50991 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50991 6.41999 4.47991 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.0799 7.45003 21.0799 8.58003Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.71804 9.90909V15H8.67401L6.64808 12.0618H6.61577V15H5.3853V9.90909H6.44425L8.4478 12.8423H8.49006V9.90909H9.71804ZM10.4917 15V9.90909H13.9669V10.9084H11.7222V11.9524H13.7456V12.9542H11.7222V15H10.4917ZM14.4199 10.9084V9.90909H18.7228V10.9084H17.1792V15H15.9661V10.9084H14.4199Z"
      fill="var(--${e.color})"
    />
  </svg> `,fingerprint:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M16.5001 12.9V13.8C16.5001 16.293 15.9025 18.7005 14.7766 20.8614L14.5723 21.2394L13 20.3628C14.044 18.4908 14.629 16.3938 14.6938 14.2104L14.7001 13.8V12.9H16.5001ZM11.1001 10.2H12.9001V13.8L12.8956 14.1411C12.8276 16.605 11.9796 18.9838 10.4737 20.9352L10.2658 21.1962L8.87081 20.0586C10.2446 18.3809 11.0263 16.2967 11.0947 14.1294L11.1001 13.8V10.2ZM12.0001 6.60001C13.1936 6.60001 14.3382 7.07411 15.1821 7.91803C16.026 8.76194 16.5001 9.90653 16.5001 11.1H14.7001C14.7001 10.3839 14.4156 9.69717 13.9093 9.19082C13.4029 8.68447 12.7162 8.40001 12.0001 8.40001C11.284 8.40001 10.5973 8.68447 10.0909 9.19082C9.58457 9.69717 9.30011 10.3839 9.30011 11.1V13.8C9.30011 15.8115 8.56211 17.7096 7.25621 19.1793L7.06541 19.3863L5.76221 18.1443C6.81517 17.0427 7.43103 15.5953 7.49471 14.0727L7.50011 13.8V11.1C7.50011 9.90653 7.97421 8.76194 8.81813 7.91803C9.66204 7.07411 10.8066 6.60001 12.0001 6.60001ZM12.0001 3.00001C14.1484 3.00001 16.2086 3.8534 17.7277 5.37244C19.2467 6.89149 20.1001 8.95176 20.1001 11.1V13.8C20.1001 15.3282 19.9183 16.833 19.5628 18.291L19.4377 18.7761L17.7007 18.3027C18.0535 17.0094 18.2524 15.6729 18.2929 14.3112L18.3001 13.8V11.1C18.3001 9.93079 17.9747 8.78463 17.3604 7.78981C16.7461 6.79499 15.867 5.99076 14.8216 5.46712C13.7762 4.94348 12.6057 4.7211 11.4411 4.82485C10.2764 4.92861 9.16369 5.35441 8.22731 6.05461L6.94481 4.77121C8.37894 3.62216 10.1624 2.99728 12.0001 3.00001ZM5.67131 6.04471L6.95471 7.32721C6.18281 8.35611 5.74606 9.59754 5.70371 10.8831L5.70011 11.1L5.70371 12.9C5.70371 13.908 5.46611 14.8827 5.01791 15.7593L4.87751 16.0203L3.31421 15.1275C3.65621 14.529 3.85601 13.8612 3.89561 13.1628L3.90371 12.9V11.1C3.89837 9.26251 4.52214 7.47853 5.67131 6.04471Z"
      fill="var(--${e.color})"
    />
  </svg> `,hammer:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M14.9999 12L6.62694 20.373C6.22911 20.7708 5.68954 20.9943 5.12694 20.9943C4.56433 20.9943 4.02476 20.7708 3.62694 20.373C3.22911 19.9752 3.00562 19.4356 3.00562 18.873C3.00562 18.3104 3.22911 17.7708 3.62694 17.373L11.9999 9"
      stroke="var(--${e.color})"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18 15L22 11"
      stroke="var(--${e.color})"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 11.5L19.586 9.58599C19.2109 9.21101 19.0001 8.70238 19 8.17199V6.99999L16.74 4.73999C15.6245 3.62518 14.115 2.99435 12.538 2.98399L9 2.95999L9.92 3.77999C10.5735 4.35938 11.0967 5.07069 11.4552 5.86704C11.8137 6.66338 11.9994 7.52666 12 8.39999V9.99999L14 12H15.172C15.7024 12.0001 16.211 12.2109 16.586 12.586L18.5 14.5"
      stroke="var(--${e.color})"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"hand-heart":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.30019 9.9C6.53889 9.9 6.76781 9.99482 6.93659 10.1636C7.10537 10.3324 7.20019 10.5613 7.20019 10.8C8.61422 10.7979 9.98748 11.2736 11.0972 12.15H13.0502C14.249 12.15 15.3272 12.6711 16.0679 13.4991L18.9002 13.5C19.7509 13.4998 20.5843 13.7407 21.3037 14.1948C22.023 14.649 22.5989 15.2978 22.9646 16.0659C20.8361 18.8748 17.39 20.7 13.5002 20.7C10.9892 20.7 8.86519 20.1573 7.14619 19.2078C7.08323 19.3816 6.96821 19.5317 6.81681 19.6376C6.66541 19.7436 6.485 19.8003 6.30019 19.8H3.6002C3.3615 19.8 3.13258 19.7052 2.9638 19.5364C2.79502 19.3676 2.7002 19.1387 2.7002 18.9V10.8C2.7002 10.5613 2.79502 10.3324 2.9638 10.1636C3.13258 9.99482 3.3615 9.9 3.6002 9.9H6.30019ZM7.20109 12.6L7.20019 17.1189L7.24069 17.1486C8.85619 18.2826 10.9604 18.9 13.5002 18.9C16.2038 18.9 18.7193 17.8596 20.5517 16.083L20.6714 15.9633L20.5634 15.8733C20.1384 15.5405 19.6233 15.3429 19.0847 15.3063L18.9002 15.3L16.9994 15.2991C17.0651 15.5889 17.1002 15.8904 17.1002 16.2V17.1H9.00019V15.3L15.1112 15.2991L15.0806 15.2289C14.9081 14.8685 14.6428 14.5605 14.3119 14.3365C13.981 14.1126 13.5965 13.9807 13.1978 13.9545L13.0502 13.95H10.4132C9.99498 13.5223 9.49544 13.1825 8.94396 12.9506C8.39249 12.7188 7.79932 12.5996 7.20109 12.6ZM5.4002 11.7H4.5002V18H5.4002V11.7ZM14.0816 5.0175L14.4002 5.337L14.7188 5.0184C14.9274 4.808 15.1756 4.64088 15.4489 4.52663C15.7223 4.41238 16.0156 4.35325 16.3119 4.35264C16.6082 4.35204 16.9017 4.40996 17.1756 4.52309C17.4494 4.63622 17.6982 4.80233 17.9077 5.01187C18.1172 5.22142 18.2832 5.47028 18.3963 5.74417C18.5094 6.01806 18.5672 6.31158 18.5665 6.60788C18.5658 6.90418 18.5066 7.19743 18.3923 7.47079C18.278 7.74415 18.1108 7.99223 17.9003 8.2008L14.4002 11.7L10.8992 8.199C10.6888 7.99038 10.5217 7.74224 10.4074 7.46885C10.2932 7.19546 10.234 6.9022 10.2334 6.60589C10.2328 6.30959 10.2908 6.01609 10.4039 5.74223C10.517 5.46838 10.6831 5.21956 10.8927 5.01007C11.1022 4.80058 11.3511 4.63455 11.625 4.5215C11.8989 4.40844 12.1924 4.3506 12.4887 4.35129C12.785 4.35198 13.0782 4.41119 13.3516 4.52552C13.6249 4.63985 13.873 4.80704 14.0816 5.0175ZM12.1736 6.291C12.099 6.36518 12.0528 6.46315 12.0429 6.56788C12.033 6.67262 12.0602 6.7775 12.1196 6.8643L12.1718 6.9264L14.4002 9.153L16.6286 6.9264C16.7031 6.85194 16.7492 6.75369 16.7587 6.64876C16.7683 6.54383 16.7407 6.43888 16.6808 6.3522L16.6286 6.2892C16.554 6.2148 16.4557 6.16891 16.3508 6.15953C16.2459 6.15016 16.141 6.17789 16.0544 6.2379L15.9914 6.2901L14.3993 7.8813L12.809 6.2883L12.7478 6.2379C12.6611 6.17801 12.5562 6.15043 12.4512 6.15996C12.3463 6.1695 12.2481 6.21646 12.1736 6.291Z"
      fill="var(--${e.color})"
    />
  </svg> `,earth:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.54 15H17C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17V21.54"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 3.34V5C7 5.79565 7.31607 6.55871 7.87868 7.12132C8.44129 7.68393 9.20435 8 10 8C10.5304 8 11.0391 8.21071 11.4142 8.58578C11.7893 8.96086 12 9.46956 12 10C12 11.1 12.9 12 14 12C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10C16 8.9 16.9 8 18 8H21.17"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 21.95V18C11 17.4696 10.7893 16.9609 10.4143 16.5858C10.0392 16.2107 9.53048 16 9.00005 16C8.46962 16 7.96091 15.7893 7.58584 15.4142C7.21076 15.0391 7.00005 14.5304 7.00005 14V13C7.00005 12.4696 6.78934 11.9609 6.41426 11.5858C6.03919 11.2107 5.53048 11 5.00005 11H2.05005"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"logo-soundcloud-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_4854_15417)">
      <path
        d="M23.999 14.165C23.947 15.961 22.387 17.334 20.599 17.334H12.419C12.239 17.3327 12.0668 17.26 11.9403 17.132C11.8138 17.004 11.7432 16.831 11.744 16.651V7.86197C11.7363 7.70957 11.7756 7.5585 11.8564 7.42906C11.9372 7.29963 12.0557 7.19804 12.196 7.13797C12.196 7.13797 12.946 6.62497 14.529 6.62497C15.5014 6.62154 16.4564 6.88251 17.292 7.37997C17.9423 7.7597 18.5066 8.27047 18.949 8.87988C19.3914 9.48929 19.7023 10.184 19.862 10.92C20.144 10.84 20.436 10.799 20.73 10.8C21.614 10.8 22.46 11.158 23.077 11.792C23.694 12.426 24.025 13.282 23.999 14.165ZM10.721 8.42097C10.968 11.401 11.148 14.118 10.721 17.093C10.721 17.1633 10.693 17.2307 10.6434 17.2804C10.5937 17.3301 10.5263 17.358 10.456 17.358C10.3857 17.358 10.3183 17.3301 10.2686 17.2804C10.2189 17.2307 10.191 17.1633 10.191 17.093C9.79597 14.147 9.97097 11.375 10.191 8.42097C10.191 8.35069 10.2189 8.28329 10.2686 8.23359C10.3183 8.18389 10.3857 8.15597 10.456 8.15597C10.5263 8.15597 10.5937 8.18389 10.6434 8.23359C10.693 8.28329 10.721 8.35069 10.721 8.42097ZM9.07197 9.44797C9.35697 12.107 9.44197 14.434 9.06597 17.103C9.05785 17.1702 9.02538 17.2321 8.97471 17.277C8.92405 17.3219 8.85868 17.3467 8.79097 17.3467C8.72326 17.3467 8.65789 17.3219 8.60722 17.277C8.55655 17.2321 8.52409 17.1702 8.51597 17.103C8.18497 14.473 8.25997 12.083 8.51597 9.44797C8.51597 9.37424 8.54526 9.30353 8.59739 9.2514C8.64953 9.19926 8.72024 9.16997 8.79397 9.16997C8.8677 9.16997 8.93841 9.19926 8.99054 9.2514C9.04268 9.30353 9.07197 9.37424 9.07197 9.44797ZM7.40897 9.19097C7.67897 11.917 7.79897 14.362 7.40897 17.095C7.40897 17.1655 7.38094 17.2332 7.33106 17.2831C7.28117 17.3329 7.21352 17.361 7.14297 17.361C7.07242 17.361 7.00476 17.3329 6.95488 17.2831C6.90499 17.2332 6.87697 17.1655 6.87697 17.095C6.49697 14.405 6.61997 11.885 6.87697 9.19097C6.87697 9.12042 6.90499 9.05277 6.95488 9.00288C7.00476 8.953 7.07242 8.92497 7.14297 8.92497C7.21352 8.92497 7.28117 8.953 7.33106 9.00288C7.38094 9.05277 7.40897 9.12042 7.40897 9.19097ZM5.76197 9.96097C6.08694 12.3324 6.08424 14.7373 5.75397 17.108C5.74813 17.1758 5.71706 17.239 5.66688 17.2851C5.6167 17.3311 5.55107 17.3567 5.48297 17.3567C5.41486 17.3567 5.34924 17.3311 5.29906 17.2851C5.24888 17.239 5.2178 17.1758 5.21197 17.108C4.90618 14.7355 4.90618 12.3335 5.21197 9.96097C5.21197 9.88804 5.24094 9.81809 5.29251 9.76652C5.34409 9.71495 5.41403 9.68597 5.48697 9.68597C5.5599 9.68597 5.62985 9.71495 5.68142 9.76652C5.73299 9.81809 5.76197 9.88804 5.76197 9.96097ZM4.09197 11.73C4.51297 13.595 4.31997 15.23 4.06297 17.118C4.06297 17.1861 4.03589 17.2515 3.98769 17.2997C3.9395 17.3479 3.87413 17.375 3.80597 17.375C3.73781 17.375 3.67244 17.3479 3.62424 17.2997C3.57605 17.2515 3.54897 17.1861 3.54897 17.118C3.33897 15.26 3.15097 13.569 3.54897 11.729C3.55317 11.6598 3.5836 11.5949 3.63405 11.5474C3.68451 11.4999 3.75118 11.4735 3.82047 11.4735C3.88975 11.4735 3.95643 11.4999 4.00688 11.5474C4.05734 11.5949 4.08777 11.6608 4.09197 11.73ZM2.43697 11.457C2.82497 13.354 2.69697 14.965 2.42697 16.869C2.40097 17.149 1.91297 17.152 1.88697 16.869C1.64297 14.991 1.53997 13.329 1.87697 11.457C1.88683 11.3898 1.92055 11.3283 1.97196 11.2839C2.02336 11.2395 2.08903 11.2151 2.15697 11.2151C2.2249 11.2151 2.29057 11.2395 2.34198 11.2839C2.39339 11.3283 2.4271 11.3898 2.43697 11.457ZM0.768968 12.368C1.16897 13.636 1.02597 14.66 0.742968 15.94C0.742968 16.0081 0.715891 16.0735 0.667695 16.1217C0.619498 16.1699 0.554129 16.197 0.485968 16.197C0.417808 16.197 0.352439 16.1699 0.304242 16.1217C0.256045 16.0735 0.228968 16.0081 0.228968 15.94C-0.0120318 14.678 -0.125032 13.628 0.205968 12.368C0.213168 12.2983 0.24593 12.2338 0.297924 12.1869C0.349918 12.14 0.41745 12.1141 0.487468 12.1141C0.557486 12.1141 0.625019 12.14 0.677012 12.1869C0.729006 12.2338 0.761769 12.2983 0.768968 12.368Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_4854_15417">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`,"logo-spotify-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_4854_15418)">
      <path
        d="M12 0C5.4 0 0 5.4 0 12C0 18.6 5.4 24 12 24C18.6 24 24 18.6 24 12C24 5.4 18.66 0 12 0ZM17.521 17.34C17.281 17.699 16.861 17.82 16.5 17.58C13.68 15.84 10.14 15.479 5.939 16.439C5.521 16.561 5.16 16.26 5.04 15.9C4.92 15.479 5.22 15.12 5.58 15C10.14 13.979 14.1 14.4 17.22 16.32C17.64 16.5 17.699 16.979 17.521 17.34ZM18.961 14.04C18.66 14.46 18.12 14.64 17.699 14.34C14.46 12.36 9.54 11.76 5.76 12.96C5.281 13.08 4.74 12.84 4.62 12.36C4.5 11.88 4.74 11.339 5.22 11.219C9.6 9.9 15 10.561 18.72 12.84C19.081 13.021 19.26 13.62 18.961 14.04ZM19.081 10.68C15.24 8.4 8.82 8.16 5.16 9.301C4.56 9.48 3.96 9.12 3.78 8.58C3.6 7.979 3.96 7.38 4.5 7.199C8.76 5.939 15.78 6.179 20.221 8.82C20.76 9.12 20.94 9.84 20.64 10.38C20.341 10.801 19.62 10.979 19.081 10.68Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_4854_15418">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`,"logo-google-calendar-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g clip-path="url(#clip0_4854_15416)">
      <path
        d="M18.316 5.684H24V18.316H18.316V5.684ZM5.684 24H18.316V18.316H5.684V24ZM18.316 5.684V2.64155e-07H1.895C1.64611 -0.000131181 1.39963 0.0487947 1.16966 0.143981C0.939688 0.239167 0.730733 0.378747 0.55474 0.55474C0.378747 0.730733 0.239167 0.939688 0.143981 1.16966C0.0487947 1.39963 -0.000131181 1.64611 2.64155e-07 1.895V18.316H5.684V5.684H18.316ZM11.109 11.934V11.869C11.381 11.725 11.609 11.52 11.796 11.252C11.983 10.984 12.075 10.657 12.075 10.27C12.075 9.891 11.976 9.55 11.775 9.245C11.5676 8.93588 11.28 8.68905 10.943 8.531C10.5689 8.35491 10.1594 8.26699 9.746 8.274C9.146 8.274 8.652 8.43 8.265 8.741C7.879 9.052 7.615 9.412 7.472 9.819L8.557 10.271C8.643 10.022 8.781 9.81 8.97 9.638C9.159 9.466 9.415 9.381 9.737 9.381C10.067 9.381 10.339 9.469 10.553 9.645C10.6578 9.72891 10.7415 9.83619 10.7975 9.95827C10.8534 10.0803 10.8799 10.2138 10.875 10.348C10.875 10.678 10.755 10.937 10.515 11.126C10.275 11.316 9.98 11.41 9.629 11.41H9.062V12.495H9.695C10.102 12.495 10.443 12.604 10.715 12.822C10.987 13.04 11.122 13.321 11.122 13.665C11.122 14.001 10.993 14.279 10.735 14.497C10.477 14.715 10.17 14.824 9.811 14.824C9.46 14.824 9.16 14.721 8.914 14.513C8.666 14.305 8.492 14.011 8.393 13.632L7.297 14.084C7.475 14.7 7.802 15.166 8.274 15.485C8.746 15.804 9.258 15.963 9.812 15.962C10.2599 15.9683 10.703 15.8686 11.105 15.671C11.487 15.478 11.789 15.213 12.007 14.877C12.225 14.541 12.334 14.157 12.334 13.728C12.334 13.299 12.219 12.931 11.99 12.623C11.7652 12.3167 11.4604 12.0783 11.109 11.934ZM13.202 10.003L13.804 10.916L15 10.045V15.789H16.187V8.446H15.36L13.202 10.003ZM22.105 2.64155e-07H18.816V5.184H24V1.895C24.0001 1.64611 23.9512 1.39963 23.856 1.16966C23.7608 0.939688 23.6213 0.730733 23.4453 0.55474C23.2693 0.378747 23.0603 0.239167 22.8303 0.143981C22.6004 0.0487947 22.3539 -0.000131181 22.105 2.64155e-07ZM18.816 23.5L23.5 18.816H18.816V23.5ZM2.64155e-07 22.105C2.64155e-07 23.152 0.848 24 1.895 24H5.184V18.816H2.64155e-07V22.105Z"
        fill="var(--${e.color})"
      />
    </g>
    <defs>
      <clipPath id="clip0_4854_15416">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>`,"logo-substack-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M22.539 8.242H1.45996V5.406H22.54V8.242H22.539ZM1.45996 10.812V24L12 18.11L22.54 24V10.812H1.45996ZM22.54 0H1.45996V2.836H22.54V0Z"
      fill="var(--${e.color})"
    />
  </svg>`,"logo-x-round":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
      fill="var(--${e.color})"
    />
    <path
      d="M16.2156 5.4375H18.4236L13.5996 10.9515L19.275 18.4533H14.8314L11.3514 13.9029L7.3686 18.4533H5.1594L10.3194 12.5553L4.875 5.4381H9.4314L12.5772 9.5973L16.2156 5.4375ZM15.441 17.1321H16.6644L8.7666 6.6897H7.4538L15.441 17.1321Z"
      fill="white"
    />
  </svg> `,"logo-farcaster":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="#855DCD" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.45884 19.4798H4.22042V18.9072C4.22042 18.6437 4.43408 18.43 4.69761 18.43H4.79304V17.8574C4.79304 17.5939 5.00667 17.3803 5.2702 17.3803V8.8866H4.74532L4.125 6.78704H6.89259V4.6875H17.2949V6.78704H20.0625L19.4422 8.8866H18.9173V17.3803C19.1808 17.3803 19.3945 17.5939 19.3945 17.8574V18.43H19.4899C19.7534 18.43 19.9671 18.6437 19.9671 18.9072V19.4798H14.7345V18.9072C14.7345 18.6437 14.9482 18.43 15.2117 18.43H15.3072V17.8574C15.3072 17.5994 15.512 17.3891 15.768 17.3805V12.704C15.5992 10.8313 14.0104 9.36376 12.0937 9.36376C10.1771 9.36376 8.58831 10.8313 8.41954 12.704V17.3804C8.67822 17.3859 8.88622 17.5974 8.88622 17.8574V18.1437V18.43H8.98165C9.24518 18.43 9.45884 18.6437 9.45884 18.9072V19.4798Z"
      fill="white"
    />
  </svg> `,"logo-linkedin":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="#0078B5" />
    <path
      d="M5.83397 9.75642H8.45389V18.1879H5.83397V9.75642ZM7.14491 5.56534C7.98273 5.56534 8.66285 6.24545 8.66285 7.08525C8.66285 7.92504 7.98273 8.60515 7.14491 8.60515C6.30512 8.60515 5.625 7.92504 5.625 7.08525C5.62303 6.24742 6.30315 5.56534 7.14491 5.56534Z"
      fill="white"
    />
    <path
      d="M10.098 9.7564H12.6115V10.9077H12.6469C12.9959 10.2453 13.8495 9.54547 15.1269 9.54547C17.7803 9.54547 18.2712 11.2921 18.2712 13.5611V18.1879H15.6513V14.0894C15.6513 13.1097 15.6335 11.8539 14.2891 11.8539C12.9249 11.8539 12.7159 12.9184 12.7159 14.0185V18.1898H10.098V9.7564Z"
      fill="white"
    />
  </svg> `,"profile-restore-no-setup":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.5 7.5L15.5 4.49998"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 4.5L15.5 7.50002"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.84377 10.6109L2.26123 9.28296"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 13H2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6 10V8"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75C16.3472 1.75 18.25 3.65279 18.25 6Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.75 18.6667C4.75 16.8725 6.09998 15.4016 8.10179 14.3324C10.0797 13.2759 12.4587 12.75 14 12.75C15.5413 12.75 17.9203 13.2759 19.8982 14.3324C21.9 15.4016 23.25 16.8725 23.25 18.6667V21.25H4.75V18.6667Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,share:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 6L12 2L8 6"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 2V15"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"logo-facebook-round":w,"logo-farcaster-round":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="var(--${e.color})" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.45884 19.4798H4.22042V18.9072C4.22042 18.6437 4.43408 18.43 4.69761 18.43H4.79304V17.8574C4.79304 17.5939 5.00667 17.3803 5.2702 17.3803V8.8866H4.74532L4.125 6.78704H6.89259V4.6875H17.2949V6.78704H20.0625L19.4422 8.8866H18.9173V17.3803C19.1808 17.3803 19.3945 17.5939 19.3945 17.8574V18.43H19.4899C19.7534 18.43 19.9671 18.6437 19.9671 18.9072V19.4798H14.7345V18.9072C14.7345 18.6437 14.9482 18.43 15.2117 18.43H15.3072V17.8574C15.3072 17.5994 15.512 17.3891 15.768 17.3805V12.704C15.5992 10.8313 14.0104 9.36376 12.0937 9.36376C10.1771 9.36376 8.58831 10.8313 8.41954 12.704V17.3804C8.67822 17.3859 8.88622 17.5974 8.88622 17.8574V18.1437V18.43H8.98165C9.24518 18.43 9.45884 18.6437 9.45884 18.9072V19.4798Z"
      fill="white"
    />
  </svg> `,"logo-linkedin-round":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" rx="12" fill="var(--${e.color})" />
    <path
      d="M5.83397 9.75642H8.45389V18.1879H5.83397V9.75642ZM7.14491 5.56534C7.98273 5.56534 8.66285 6.24545 8.66285 7.08525C8.66285 7.92504 7.98273 8.60515 7.14491 8.60515C6.30512 8.60515 5.625 7.92504 5.625 7.08525C5.62303 6.24742 6.30315 5.56534 7.14491 5.56534Z"
      fill="white"
    />
    <path
      d="M10.098 9.7564H12.6115V10.9077H12.6469C12.9959 10.2453 13.8495 9.54547 15.1269 9.54547C17.7803 9.54547 18.2712 11.2921 18.2712 13.5611V18.1879H15.6513V14.0894C15.6513 13.1097 15.6335 11.8539 14.2891 11.8539C12.9249 11.8539 12.7159 12.9184 12.7159 14.0185V18.1898H10.098V9.7564Z"
      fill="white"
    />
  </svg> `,"arrow-long-down":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M8.99999 16.1715C10.2887 17.4602 11.8284 19 11.8284 19L14.6568 16.1716"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.8284 6.00003L11.8284 18"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,gas:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M2.6167 5C2.6167 4.30964 3.17634 3.75 3.8667 3.75H12.5334C13.2237 3.75 13.7834 4.30964 13.7834 5V21.25H2.6167V5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.40015 18.2H12.0001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.40015 15.6667H12.0001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M4.40015 13.1333H12.0001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M14.5334 14.9507V14.9507C15.9763 14.9507 17.1459 16.1204 17.1459 17.5632V18.2396C17.1459 19.6168 18.2624 20.7333 19.6397 20.7333V20.7333C21.017 20.7333 22.1334 19.6168 22.1334 18.2396V9.72406C22.1334 8.51878 21.59 7.37776 20.6541 6.61823L16.1959 3"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <circle
      cx="19.6"
      cy="9.33332"
      r="1.78333"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,minus:e=>t.html`<svg width="24" height="24" viewBox="0 0 24 24" style=${c({width:`${e.width}px`,height:`${e.height}px`})} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.417 12.75h-12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75" fill="var(--${e.color})"></svg>`,"minus-filled":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z"
      fill="var(--${e.color})"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path d="M18 12H6" stroke="white" stroke-linecap="round" />
  </svg> `,category:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,flash:e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M6.0901 13.2799H9.1801V20.4799C9.1801 22.1599 10.0901 22.4999 11.2001 21.2399L18.7701 12.6399C19.7001 11.5899 19.3101 10.7199 17.9001 10.7199H14.8101V3.5199C14.8101 1.8399 13.9001 1.4999 12.7901 2.7599L5.2201 11.3599C4.3001 12.4199 4.6901 13.2799 6.0901 13.2799Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"user-circle-add":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.4599 13.73C13.0118 13.73 14.2699 12.4719 14.2699 10.92C14.2699 9.36806 13.0118 8.10999 11.4599 8.10999C9.90798 8.10999 8.6499 9.36806 8.6499 10.92C8.6499 12.4719 9.90798 13.73 11.4599 13.73Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.65 20.2C16.65 17.87 14.33 15.97 11.46 15.97C8.59002 15.97 6.27002 17.86 6.27002 20.2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 12.5C21 17.75 16.75 22 11.5 22C6.25 22 2 17.75 2 12.5C2 7.25 6.25 3 11.5 3C12.81 3 14.06 3.25999 15.2 3.73999C15.07 4.13999 15 4.56 15 5C15 5.75 15.21 6.46 15.58 7.06C15.78 7.4 16.04 7.70997 16.34 7.96997C17.04 8.60997 17.97 9 19 9C19.44 9 19.86 8.92998 20.25 8.78998C20.73 9.92998 21 11.19 21 12.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23 5C23 5.32 22.96 5.62999 22.88 5.92999C22.79 6.32999 22.63 6.72 22.42 7.06C21.94 7.87 21.17 8.49998 20.25 8.78998C19.86 8.92998 19.44 9 19 9C17.97 9 17.04 8.60997 16.34 7.96997C16.04 7.70997 15.78 7.4 15.58 7.06C15.21 6.46 15 5.75 15 5C15 4.56 15.07 4.13999 15.2 3.73999C15.39 3.15999 15.71 2.64002 16.13 2.21002C16.86 1.46002 17.88 1 19 1C20.18 1 21.25 1.51002 21.97 2.33002C22.61 3.04002 23 3.98 23 5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.49 4.97998H17.51"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 3.52002V6.51001"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"profile-circle":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"play-linear":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"stop-linear":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"medal-star":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19 9C19 10.45 18.57 11.78 17.83 12.89C16.75 14.49 15.04 15.62 13.05 15.91C12.71 15.97 12.36 16 12 16C11.64 16 11.29 15.97 10.95 15.91C8.96 15.62 7.25 14.49 6.17 12.89C5.43 11.78 5 10.45 5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M21.2501 18.4699L19.6001 18.8599C19.2301 18.9499 18.9401 19.2299 18.8601 19.5999L18.5101 21.0699C18.3201 21.8699 17.3001 22.1099 16.7701 21.4799L12.0001 15.9999L7.23008 21.4899C6.70008 22.1199 5.68008 21.8799 5.49008 21.0799L5.14008 19.6099C5.05008 19.2399 4.76008 18.9499 4.40008 18.8699L2.75008 18.4799C1.99008 18.2999 1.72008 17.3499 2.27008 16.7999L6.17008 12.8999C7.25008 14.4999 8.96008 15.6299 10.9501 15.9199C11.2901 15.9799 11.6401 16.0099 12.0001 16.0099C12.3601 16.0099 12.7101 15.9799 13.0501 15.9199C15.0401 15.6299 16.7501 14.4999 17.8301 12.8999L21.7301 16.7999C22.2801 17.3399 22.0101 18.2899 21.2501 18.4699Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M12.58 5.98L13.17 7.15999C13.25 7.31999 13.46 7.48 13.65 7.51L14.72 7.68999C15.4 7.79999 15.56 8.3 15.07 8.79L14.24 9.61998C14.1 9.75998 14.02 10.03 14.07 10.23L14.31 11.26C14.5 12.07 14.07 12.39 13.35 11.96L12.35 11.37C12.17 11.26 11.87 11.26 11.69 11.37L10.69 11.96C9.96997 12.38 9.53997 12.07 9.72997 11.26L9.96997 10.23C10.01 10.04 9.93997 9.75998 9.79997 9.61998L8.96997 8.79C8.47997 8.3 8.63997 7.80999 9.31997 7.68999L10.39 7.51C10.57 7.48 10.78 7.31999 10.86 7.15999L11.45 5.98C11.74 5.34 12.26 5.34 12.58 5.98Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"edit-linear":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M14.9099 4.15002C15.5799 6.54002 17.4499 8.41002 19.8499 9.09002"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"image-linear":e=>t.html`<svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M21.7632 16.96L18.6332 9.65001C17.5732 7.17001 15.6232 7.07001 14.3132 9.43001L12.4232 12.84C11.4632 14.57 9.67318 14.72 8.43318 13.17L8.21318 12.89C6.92318 11.27 5.10318 11.47 4.17318 13.32L2.45318 16.77C1.24318 19.17 2.99318 22 5.67318 22H18.4332C21.0332 22 22.7832 19.35 21.7632 16.96Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <path
      d="M7.05322 8C8.71008 8 10.0532 6.65685 10.0532 5C10.0532 3.34315 8.71008 2 7.05322 2C5.39637 2 4.05322 3.34315 4.05322 5C4.05322 6.65685 5.39637 8 7.05322 8Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,hexagon:e=>t.html`<svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M20.25 7.44043V16.5586L12 21.1416L3.75 16.5586V7.44043L12 2.85742L20.25 7.44043Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"row-vertical":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.86 22 8.27V4.23C22 2.64 21.4 2 19.9 2Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg> `,"logo-tiktok-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M17.0725 0H13.0278V16.3478C13.0278 18.2957 11.4722 19.8957 9.53626 19.8957C7.60034 19.8957 6.04469 18.2957 6.04469 16.3478C6.04469 14.4348 7.56577 12.8695 9.43257 12.8V8.69567C5.31872 8.7652 2 12.1391 2 16.3478C2 20.5913 5.38786 24 9.57085 24C13.7538 24 17.1416 20.5565 17.1416 16.3478V7.9652C18.6627 9.07827 20.5295 9.73913 22.5 9.77393V5.66957C19.4579 5.56522 17.0725 3.06087 17.0725 0Z"
      fill="var(--${e.color})"
    />
  </svg> `,"profile-following":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="24" height="24" fill="white" />
    <path
      d="M1.5 12.1607L3.3375 13.875L6.75 10.875"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 1.75C16.3472 1.75 18.25 3.65279 18.25 6C18.25 8.34721 16.3472 10.25 14 10.25C11.6528 10.25 9.75 8.34721 9.75 6C9.75 3.65279 11.6528 1.75 14 1.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
    <path
      d="M14 12.75C15.5413 12.75 17.9206 13.2756 19.8984 14.332C21.9002 15.4013 23.25 16.8728 23.25 18.667V21.25H4.75V18.667C4.75 16.8728 6.09977 15.4013 8.10156 14.332C10.0794 13.2756 12.4587 12.75 14 12.75Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `,"logo-common-ground-mono":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M15.9609 2.21057C16.1074 2.26094 16.254 2.31131 16.4049 2.36321C18.9313 3.31702 20.9682 5.29071 22.1773 7.68694C23.2264 10.0905 23.5301 13.0247 22.6214 15.5315C21.4254 18.4684 19.4747 20.4139 16.668 21.8259C14.8956 22.5613 13.1614 22.5471 11.2778 22.5313C10.985 22.5305 10.6922 22.5298 10.3994 22.5294C9.63437 22.5277 8.86939 22.5234 8.10439 22.5184C7.32151 22.5139 6.53863 22.5118 5.75574 22.5096C4.22378 22.5049 2.69185 22.4973 1.15991 22.4879C1.37904 21.9256 1.6315 21.4157 1.93292 20.8922C2.02478 20.731 2.11665 20.5698 2.2113 20.4037C2.40475 20.0661 2.59862 19.7289 2.79294 19.3919C2.88461 19.2306 2.97629 19.0694 3.07074 18.9033C3.1549 18.7569 3.23905 18.6105 3.32575 18.4596C3.52109 18.0618 3.63074 17.7471 3.67608 17.3076C3.51588 16.9063 3.51588 16.9063 3.26905 16.5028C2.07195 14.2172 2.00481 11.4415 2.74177 8.99128C3.33991 7.18586 4.2641 5.88625 5.60021 4.57873C5.70496 4.46921 5.8097 4.3597 5.91762 4.24686C8.45528 1.75288 12.653 1.0182 15.9609 2.21057ZM12.8527 3.39465C12.8527 9.15816 12.8527 14.9217 12.8527 20.8598C15.0414 20.5472 16.485 20.2687 18.1811 18.9357C18.3337 18.8258 18.4863 18.7159 18.6436 18.6027C19.578 17.7089 20.367 16.5894 20.8452 15.3835C20.8893 15.2778 20.9334 15.1721 20.9788 15.0632C21.7406 12.8516 21.462 10.2141 20.4914 8.13386C19.3726 5.9522 17.5286 4.51175 15.2041 3.73403C14.4211 3.51591 13.6748 3.47686 12.8527 3.39465ZM5.15618 11.0912C5.05849 11.2377 4.96081 11.3842 4.86016 11.5352C5.06365 11.7634 5.06365 11.7634 5.30419 11.9792C5.40188 11.9792 5.42556 11.9052 5.52621 11.9052C5.52621 11.8075 5.60021 11.7839 5.60021 11.6832C5.6855 11.6422 5.77078 11.6012 5.85865 11.5589C6.28929 11.3372 6.6884 11.0759 7.09477 10.8131C7.82507 10.3827 8.62705 10.4127 9.44847 10.4991C9.78353 10.6262 10.0692 10.7727 10.373 10.9617C10.6725 11.1352 10.6725 11.1352 11.2246 11.0912C11.2734 10.8958 11.3223 10.7004 11.3726 10.4991C11.1634 10.378 10.9536 10.258 10.7436 10.1384C10.6268 10.0714 10.51 10.0044 10.3897 9.93542C8.58401 9.02359 6.55214 9.80812 5.15618 11.0912Z"
      fill="#22333F"
    />
    <path
      d="M20.4939 10.7673C20.6619 10.923 20.829 11.0797 20.9935 11.2391C20.8816 11.7995 20.6788 12.039 20.2534 12.4232C19.8261 12.2295 19.5251 12.018 19.1896 11.6924C18.3979 11.0052 17.5812 10.7408 16.5347 10.8043C16.0322 10.8722 15.6711 10.993 15.2396 11.2576C14.777 11.5351 14.777 11.5351 14.444 11.5351C14.1018 11.3396 13.9401 11.1336 13.741 10.7951C13.741 10.6486 13.741 10.502 13.741 10.3511C16.1658 8.93364 18.2511 8.82361 20.4939 10.7673Z"
      fill="var(--${e.color})"
    />
    <path
      d="M17.145 19.0838C17.441 19.2318 17.441 19.2318 17.441 19.2318L17.145 19.0838Z"
      fill="black"
    />
    <path
      d="M17.7371 18.6398C18.0331 18.7878 18.0331 18.7878 18.0331 18.7878L17.7371 18.6398Z"
      fill="black"
    />
    <path
      d="M18.625 11.5352C18.921 11.6832 18.921 11.6832 18.921 11.6832L18.625 11.5352Z"
      fill="black"
    />
    <path
      d="M18.1812 11.2391C18.4772 11.3871 18.4772 11.3871 18.4772 11.3871L18.1812 11.2391Z"
      fill="black"
    />
    <path
      d="M17.885 11.0911C18.181 11.2391 18.181 11.2391 18.181 11.2391L17.885 11.0911Z"
      fill="black"
    />
    <path
      d="M6.19214 10.7952C6.48816 10.9432 6.48816 10.9432 6.48816 10.9432L6.19214 10.7952Z"
      fill="black"
    />
    <path
      d="M6.63647 10.499C6.93249 10.647 6.93249 10.647 6.93249 10.647L6.63647 10.499Z"
      fill="black"
    />
    <path
      d="M17.145 5.02271C17.441 5.17072 17.441 5.17072 17.441 5.17072L17.145 5.02271Z"
      fill="black"
    />
    <path
      d="M18.0332 2.95062C18.3292 3.09863 18.3292 3.09863 18.3292 3.09863L18.0332 2.95062Z"
      fill="black"
    />
    <path
      d="M7.08032 2.95062C7.37634 3.09863 7.37634 3.09863 7.37634 3.09863L7.08032 2.95062Z"
      fill="black"
    />
  </svg> `,"logo-hyperlane-mono":e=>t.html`<svg
    width="540"
    height="494"
    viewBox="0 0 540 494"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M319.652 0h100.467c13.707 0 25.97 7.96 30.755 19.96l88.184 221.188a7.2 7.2 0 0 1 .023 5.295l-.494 1.271-.005.012-87.813 225.798c-4.715 12.122-17.043 20.192-30.846 20.192H319.471c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.85C309.989 5.298 313.952 0 319.652 0M57.393 0H157.86c13.707 0 25.97 7.96 30.754 19.96l88.185 221.188a7.2 7.2 0 0 1 .023 5.295l-.495 1.271-.005.012-87.813 225.798c-4.714 12.122-17.042 20.192-30.845 20.192H57.212c-5.65 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.85C47.73 5.298 51.693 0 57.393 0"
      fill="#000"
    />
    <path d="M387.826 194H246v107h141.826L411 245.971z" fill="#000" />
    <path
      d="M270.652 0h100.467c13.707 0 25.97 7.96 30.755 19.96l88.184 221.188a7.2 7.2 0 0 1 .023 5.295l-.494 1.271-.005.012-87.813 225.798c-4.715 12.122-17.043 20.192-30.846 20.192H270.471c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.85C260.989 5.298 264.952 0 270.652 0M8.393 0H108.86c13.707 0 25.97 7.96 30.754 19.96l88.185 221.188a7.2 7.2 0 0 1 .023 5.295l-.495 1.271-.005.012-87.813 225.798c-4.714 12.122-17.042 20.192-30.845 20.192H8.212c-5.65 0-9.609-5.21-7.747-10.193l90.547-242.375L.687 10.298C-1.27 5.298 2.693 0 8.393 0"
      fill="#000"
    />
    <path
      d="M338.826 194H197v107h141.826L362 245.971z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      fill="#000"
    />
  </svg>`,"logo-hyperlane":e=>t.html`<svg
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <defs>
      <clipPath id="rounded">
        <rect width="1000" height="1000" rx="500" ry="500" />
      </clipPath>
    </defs>
    <g clip-path="url(#rounded)">
      <path fill="#2362C0" d="M0 0h1000v1000H0z" />
      <path
        d="M495.652 253h100.467c13.707 0 25.97 7.959 30.755 19.961l88.184 221.187a7.2 7.2 0 0 1 .023 5.295l-.494 1.271-.005.012-87.813 225.798c-4.715 12.122-17.043 20.192-30.846 20.192H495.471c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.849c-1.957-5.002 2.006-10.299 7.706-10.299m-262.259 0H333.86c13.707 0 25.97 7.959 30.754 19.961l88.185 221.187a7.2 7.2 0 0 1 .023 5.295l-.495 1.271-.005.012-87.813 225.798c-4.714 12.122-17.042 20.192-30.845 20.192H233.212c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.849c-1.957-5.002 2.006-10.299 7.706-10.299"
        fill="#D631B9"
      />
      <path d="M563.826 447H422v107h141.826L587 498.971z" fill="#D631B9" />
      <path
        d="M553.652 253h100.467c13.707 0 25.97 7.959 30.755 19.961l88.184 221.187a7.2 7.2 0 0 1 .023 5.295l-.494 1.271-.005.012-87.813 225.798c-4.715 12.122-17.043 20.192-30.846 20.192H553.471c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.849c-1.957-5.002 2.006-10.299 7.706-10.299m-262.259 0H391.86c13.707 0 25.97 7.959 30.754 19.961l88.185 221.187a7.2 7.2 0 0 1 .023 5.295l-.495 1.271-.005.012-87.813 225.798c-4.714 12.122-17.042 20.192-30.845 20.192H291.212c-5.649 0-9.609-5.21-7.747-10.193l90.547-242.375-90.325-230.849c-1.957-5.002 2.006-10.299 7.706-10.299"
        fill="#fff"
      />
      <path d="M621.826 447H480v107h141.826L645 498.971z" fill="#fff" />
    </g>
  </svg>`,"token-create":e=>t.html` <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M19.5 4.175h4.348m-2.174 2.173V2"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
    />
    <path
      d="M20.083 8.79a8.696 8.696 0 1 1-15.43-1.443 8.696 8.696 0 0 1 12-2.694"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m13.068 9.084.305.621c.153.305.534.588.872.654l.414.065c1.243.207 1.537 1.122.643 2.027l-.381.38c-.25.262-.392.764-.316 1.112l.054.229c.338 1.503-.457 2.08-1.765 1.297l-.284-.164c-.337-.196-.882-.196-1.22 0l-.284.164c-1.318.795-2.114.207-1.765-1.297l.054-.229c.077-.348-.065-.85-.316-1.111l-.381-.381c-.894-.905-.6-1.82.643-2.027l.414-.065c.327-.055.72-.349.872-.654l.305-.621c.589-1.188 1.548-1.188 2.136 0"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>`,"addcontroller-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_1810_22228)">
      <rect width="80" height="80" rx="24" fill="#F69E82" />
      <g opacity="0.5" filter="url(#filter1_i_1810_22228)">
        <path
          d="M35.1429 39.1429C39.8768 39.1429 43.7143 35.3053 43.7143 30.5714C43.7143 25.8376 39.8768 22 35.1429 22C30.409 22 26.5715 25.8376 26.5715 30.5714C26.5715 35.3053 30.409 39.1429 35.1429 39.1429Z"
          fill="#F56F45"
        />
        <path
          d="M35.1429 40.8571C29.4214 40.8571 18 44.6856 18 52.2856V54.9999C18 56.6568 19.3431 57.9999 21 57.9999H49.2858C50.9426 57.9999 52.2858 56.6568 52.2858 54.9999V52.2856C52.2858 44.6856 40.8643 40.8571 35.1429 40.8571Z"
          fill="#F56F45"
        />
      </g>
      <g filter="url(#filter2_bi_1810_22228)">
        <path
          d="M44.1429 39.1429C48.8768 39.1429 52.7143 35.3053 52.7143 30.5714C52.7143 25.8376 48.8768 22 44.1429 22C39.409 22 35.5715 25.8376 35.5715 30.5714C35.5715 35.3053 39.409 39.1429 44.1429 39.1429Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M52.4643 30.5714C52.4643 35.1672 48.7387 38.8929 44.1429 38.8929C39.5471 38.8929 35.8215 35.1672 35.8215 30.5714C35.8215 25.9756 39.5471 22.25 44.1429 22.25C48.7387 22.25 52.4643 25.9756 52.4643 30.5714Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
        <path
          d="M44.1429 40.8571C38.4214 40.8571 27 44.6856 27 52.2856V54.9999C27 56.6568 28.3431 57.9999 30 57.9999H58.2858C59.9426 57.9999 61.2858 56.6568 61.2858 54.9999V52.2856C61.2858 44.6856 49.8643 40.8571 44.1429 40.8571Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M27.25 52.2856C27.25 48.6265 30.0001 45.8346 33.5437 43.9419C37.0792 42.0534 41.3247 41.1071 44.1429 41.1071C46.9611 41.1071 51.2065 42.0534 54.7421 43.9419C58.2856 45.8346 61.0358 48.6265 61.0358 52.2856V54.9999C61.0358 56.5187 59.8045 57.7499 58.2858 57.7499H30C28.4812 57.7499 27.25 56.5187 27.25 54.9999V52.2856Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_1810_22228"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.925 0 0 0 0 0.498118 0 0 0 0 0.362292 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1810_22228"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1810_22228"
          result="effect2_innerShadow_1810_22228"
        />
      </filter>
      <filter
        id="filter1_i_1810_22228"
        x="18"
        y="22"
        width="37.2858"
        height="37.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3" dy="2" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.914306 0 0 0 0 0.258052 0 0 0 0 0.0523611 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1810_22228"
        />
      </filter>
      <filter
        id="filter2_bi_1810_22228"
        x="21"
        y="16"
        width="46.2858"
        height="47.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1810_22228"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1810_22228"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1810_22228"
        />
      </filter>
    </defs>
  </svg>`,"addcontroller-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g opacity="0.5" filter="url(#filter0_i_2501_33146)">
      <path
        d="M35.1429 39.1429C39.8768 39.1429 43.7143 35.3053 43.7143 30.5714C43.7143 25.8376 39.8768 22 35.1429 22C30.409 22 26.5715 25.8376 26.5715 30.5714C26.5715 35.3053 30.409 39.1429 35.1429 39.1429Z"
        fill="#CBD2D8"
      />
      <path
        d="M35.1429 40.8571C29.4214 40.8571 18 44.6856 18 52.2856V54.9999C18 56.6568 19.3431 57.9999 21 57.9999H49.2858C50.9426 57.9999 52.2858 56.6568 52.2858 54.9999V52.2856C52.2858 44.6856 40.8643 40.8571 35.1429 40.8571Z"
        fill="#CBD2D8"
      />
    </g>
    <g filter="url(#filter1_bi_2501_33146)">
      <path
        d="M44.1429 39.1429C48.8768 39.1429 52.7143 35.3053 52.7143 30.5714C52.7143 25.8376 48.8768 22 44.1429 22C39.409 22 35.5715 25.8376 35.5715 30.5714C35.5715 35.3053 39.409 39.1429 44.1429 39.1429Z"
        fill="white"
        fill-opacity="0.6"
      />
      <path
        d="M51.9643 30.5714C51.9643 34.8911 48.4626 38.3929 44.1429 38.3929C39.8232 38.3929 36.3215 34.8911 36.3215 30.5714C36.3215 26.2518 39.8232 22.75 44.1429 22.75C48.4626 22.75 51.9643 26.2518 51.9643 30.5714Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="1.5"
      />
      <path
        d="M44.1429 40.8571C38.4214 40.8571 27 44.6856 27 52.2856V54.9999C27 56.6568 28.3431 57.9999 30 57.9999H58.2858C59.9426 57.9999 61.2858 56.6568 61.2858 54.9999V52.2856C61.2858 44.6856 49.8643 40.8571 44.1429 40.8571Z"
        fill="white"
        fill-opacity="0.6"
      />
      <path
        d="M27.75 52.2856C27.75 48.9081 30.2897 46.2468 33.7793 44.3829C37.2448 42.5318 41.4096 41.6071 44.1429 41.6071C46.8761 41.6071 51.0409 42.5318 54.5065 44.3829C57.996 46.2468 60.5358 48.9081 60.5358 52.2856V54.9999C60.5358 56.2426 59.5284 57.2499 58.2858 57.2499H30C28.7574 57.2499 27.75 56.2426 27.75 54.9999V52.2856Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="1.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_2501_33146"
        x="18"
        y="22"
        width="37.2858"
        height="37.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3" dy="2" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.702857 0 0 0 0 0.742857 0 0 0 0 0.777143 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_2501_33146"
        />
      </filter>
      <filter
        id="filter1_bi_2501_33146"
        x="21"
        y="16"
        width="46.2858"
        height="47.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2501_33146"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2501_33146"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2501_33146"
        />
      </filter>
    </defs>
  </svg>`,"addextensions-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_3043_25388)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66 21C66 17.134 62.866 14 59 14H21C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28H59C62.866 28 66 24.866 66 21ZM66 59C66 55.134 62.866 52 59 52H21C17.134 52 14 55.134 14 59C14 62.866 17.134 66 21 66H59C62.866 66 66 62.866 66 59Z"
        fill="url(#paint0_radial_3043_25388)"
      />
      <g filter="url(#filter1_b_3043_25388)">
        <rect
          x="32"
          y="32"
          width="16"
          height="16"
          rx="8"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="32.5"
          y="32.5"
          width="15"
          height="15"
          rx="7.5"
          stroke="white"
          stroke-opacity="0.7"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_3043_25388"
        x="-2"
        y="-2"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_3043_25388"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_3043_25388"
          result="effect2_innerShadow_3043_25388"
        />
      </filter>
      <filter
        id="filter1_b_3043_25388"
        x="28"
        y="28"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25388"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25388"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_3043_25388"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 40) scale(37 44.8269)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
    </defs>
  </svg>`,"addextensions-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M66 21C66 17.134 62.866 14 59 14H21C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28H59C62.866 28 66 24.866 66 21ZM66 59C66 55.134 62.866 52 59 52H21C17.134 52 14 55.134 14 59C14 62.866 17.134 66 21 66H59C62.866 66 66 62.866 66 59Z"
      fill="#EBEFF2"
    />
    <g filter="url(#filter0_b_3043_25501)">
      <rect x="32" y="32" width="16" height="16" rx="8" fill="white" />
      <rect
        x="32.5"
        y="32.5"
        width="15"
        height="15"
        rx="7.5"
        stroke="white"
        stroke-opacity="0.7"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_3043_25501"
        x="24"
        y="24"
        width="32"
        height="32"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25501"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25501"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"adduniversalreceiverdelegate-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_3044_25536)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <path
        d="M58 31.347C58 21.5132 52.2951 18.0097 47.5998 16.3081C43.823 14.9423 39.9971 15.0006 39.9971 15.0006C39.9971 15.0006 36.2081 14.9315 32.4013 16.3081C27.7003 18.0122 22.0011 21.5033 22.0011 31.347C21.9986 35.0826 22.0011 52 22.0011 52H58C58 52 58 35.0663 58 31.347Z"
        fill="url(#paint0_radial_3044_25536)"
      />
      <g filter="url(#filter1_b_3044_25536)">
        <rect
          x="30.8641"
          y="43.1396"
          width="18.3042"
          height="18.3042"
          rx="9.15211"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="31.4361"
          y="43.7117"
          width="17.1602"
          height="17.1602"
          rx="8.58011"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="1.14401"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_3044_25536"
        x="-2"
        y="-2"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_3044_25536"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_3044_25536"
          result="effect2_innerShadow_3044_25536"
        />
      </filter>
      <filter
        id="filter1_b_3044_25536"
        x="26.8641"
        y="39.1396"
        width="26.3042"
        height="26.3042"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3044_25536"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3044_25536"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_3044_25536"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 33.5) scale(25.6154 31.8961)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
    </defs>
  </svg>`,"adduniversalreceiverdelegate-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      d="M58 31.347C58 21.5132 52.2951 18.0097 47.5998 16.3081C43.823 14.9423 39.9971 15.0006 39.9971 15.0006C39.9971 15.0006 36.2081 14.9315 32.4013 16.3081C27.7003 18.0122 22.0011 21.5033 22.0011 31.347C21.9986 35.0826 22.0011 52 22.0011 52H58C58 52 58 35.0663 58 31.347Z"
      fill="#EBEFF2"
    />
    <g filter="url(#filter0_b_3044_25542)">
      <rect
        x="30.8641"
        y="43.1396"
        width="18.3042"
        height="18.3042"
        rx="9.15211"
        fill="#FCFCFC"
      />
      <rect
        x="31.4361"
        y="43.7117"
        width="17.1602"
        height="17.1602"
        rx="8.58011"
        stroke="white"
        stroke-width="1.14401"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_3044_25542"
        x="21.712"
        y="33.9875"
        width="36.6084"
        height="36.6084"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.57606" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3044_25542"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3044_25542"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"call-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_6_1492)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <rect x="12" y="34" width="35" height="13" rx="4" fill="#FDBE3F" />
      <g filter="url(#filter1_b_6_1492)">
        <path
          d="M67.004 38.4286C68.0211 39.2293 68.0211 40.7707 67.004 41.5714L39.2372 63.4321C37.9252 64.465 36 63.5305 36 61.8607L36 18.1393C36 16.4695 37.9252 15.535 39.2372 16.5679L67.004 38.4286Z"
          fill="white"
          fill-opacity="0.7"
        />
        <path
          d="M66.8494 38.625C67.7393 39.3257 67.7393 40.6743 66.8494 41.375L39.0825 63.2357C37.9346 64.1395 36.25 63.3218 36.25 61.8607L36.25 18.1393C36.25 16.6782 37.9346 15.8605 39.0825 16.7643L66.8494 38.625Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_6_1492"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1492"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_6_1492"
          result="effect2_innerShadow_6_1492"
        />
      </filter>
      <filter
        id="filter1_b_6_1492"
        x="32"
        y="12.1355"
        width="39.7668"
        height="55.7289"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1492"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1492"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"call-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <rect x="12" y="34" width="35" height="13" rx="4" fill="#CBD2D8" />
    <g filter="url(#filter0_b_6_1510)">
      <path
        d="M67.004 38.4286C68.0211 39.2293 68.0211 40.7707 67.004 41.5714L39.2372 63.4321C37.9252 64.465 36 63.5305 36 61.8607L36 18.1393C36 16.4695 37.9252 15.535 39.2372 16.5679L67.004 38.4286Z"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        d="M66.8494 38.625C67.7393 39.3257 67.7393 40.6743 66.8494 41.375L39.0825 63.2357C37.9346 64.1395 36.25 63.3218 36.25 61.8607L36.25 18.1393C36.25 16.6782 37.9346 15.8605 39.0825 16.7643L66.8494 38.625Z"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_6_1510"
        x="32"
        y="12.1355"
        width="39.7668"
        height="55.7289"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1510"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1510"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"changeextensions-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_3043_25488)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66 21C66 17.134 62.866 14 59 14H21C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28H59C62.866 28 66 24.866 66 21ZM66 59C66 55.134 62.866 52 59 52H21C17.134 52 14 55.134 14 59C14 62.866 17.134 66 21 66H59C62.866 66 66 62.866 66 59Z"
        fill="url(#paint0_radial_3043_25488)"
      />
      <g filter="url(#filter1_b_3043_25488)">
        <rect
          x="14"
          y="32"
          width="32"
          height="16"
          rx="8"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="14.5"
          y="32.5"
          width="31"
          height="15"
          rx="7.5"
          stroke="white"
          stroke-opacity="0.7"
        />
      </g>
      <g filter="url(#filter2_b_3043_25488)">
        <rect
          x="50"
          y="32"
          width="16"
          height="16"
          rx="8"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="50.5"
          y="32.5"
          width="15"
          height="15"
          rx="7.5"
          stroke="white"
          stroke-opacity="0.7"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_3043_25488"
        x="-2"
        y="-2"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_3043_25488"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_3043_25488"
          result="effect2_innerShadow_3043_25488"
        />
      </filter>
      <filter
        id="filter1_b_3043_25488"
        x="10"
        y="28"
        width="40"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25488"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25488"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_3043_25488"
        x="46"
        y="28"
        width="24"
        height="24"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25488"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25488"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_3043_25488"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 40) scale(37 44.8269)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
    </defs>
  </svg>`,"changeextensions-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M66 21C66 17.134 62.866 14 59 14H21C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28H59C62.866 28 66 24.866 66 21ZM66 59C66 55.134 62.866 52 59 52H21C17.134 52 14 55.134 14 59C14 62.866 17.134 66 21 66H59C62.866 66 66 62.866 66 59Z"
      fill="#EBEFF2"
    />
    <g filter="url(#filter0_b_3043_25514)">
      <rect x="14" y="32" width="32" height="16" rx="8" fill="white" />
      <rect
        x="14.5"
        y="32.5"
        width="31"
        height="15"
        rx="7.5"
        stroke="white"
        stroke-opacity="0.7"
      />
    </g>
    <g filter="url(#filter1_b_3043_25514)">
      <rect x="50" y="32" width="16" height="16" rx="8" fill="white" />
      <rect
        x="50.5"
        y="32.5"
        width="15"
        height="15"
        rx="7.5"
        stroke="white"
        stroke-opacity="0.7"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_3043_25514"
        x="6"
        y="24"
        width="48"
        height="32"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25514"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25514"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_3043_25514"
        x="42"
        y="24"
        width="32"
        height="32"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3043_25514"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3043_25514"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"changeowner-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_6_1549)">
      <rect width="80" height="80" rx="24" fill="#F69E82" />
      <g filter="url(#filter1_i_6_1549)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M65.5 39.5C65.5 25.1406 53.8594 13.5 39.5 13.5C25.1406 13.5 13.5 25.1406 13.5 39.5H25.5C25.5 31.768 31.768 25.5 39.5 25.5C47.232 25.5 53.5 31.768 53.5 39.5H65.5Z"
          fill="url(#paint0_radial_6_1549)"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5002 39.5C13.5002 53.8594 25.1407 65.5 39.5002 65.5C53.8596 65.5 65.5002 53.8594 65.5002 39.5L53.5002 39.5C53.5002 47.232 47.2321 53.5 39.5002 53.5C31.7682 53.5 25.5002 47.232 25.5002 39.5L13.5002 39.5Z"
        fill="url(#paint1_linear_6_1549)"
      />
      <g filter="url(#filter2_b_6_1549)">
        <rect
          x="52"
          y="32.5"
          width="14"
          height="14"
          rx="7"
          fill="white"
          fill-opacity="0.7"
        />
        <rect
          x="52.25"
          y="32.75"
          width="13.5"
          height="13.5"
          rx="6.75"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
      <g filter="url(#filter3_b_6_1549)">
        <rect x="13.5" y="35" width="12" height="8" rx="2" fill="#F56F45" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_6_1549"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.925 0 0 0 0 0.498118 0 0 0 0 0.362292 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1549"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_6_1549"
          result="effect2_innerShadow_6_1549"
        />
      </filter>
      <filter
        id="filter1_i_6_1549"
        x="13.5"
        y="13.5"
        width="53"
        height="27"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1549"
        />
      </filter>
      <filter
        id="filter2_b_6_1549"
        x="48"
        y="28.5"
        width="22"
        height="22"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1549"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1549"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_6_1549"
        x="10.5"
        y="32"
        width="18"
        height="14"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1549"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1549"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_6_1549"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(82 39.5) rotate(180) scale(73.5 333.001)"
      >
        <stop stop-color="white" />
        <stop offset="0.762031" stop-color="white" stop-opacity="0.237969" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_6_1549"
        x1="17.9849"
        y1="40"
        x2="33.7335"
        y2="75.8002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F2663A" />
        <stop offset="1" stop-color="#F3734B" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,"changeowner-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_i_6_1589)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M65.5 39.5C65.5 25.1406 53.8594 13.5 39.5 13.5C25.1406 13.5 13.5 25.1406 13.5 39.5H25.5C25.5 31.768 31.768 25.5 39.5 25.5C47.232 25.5 53.5 31.768 53.5 39.5H65.5Z"
        fill="url(#paint0_radial_6_1589)"
      />
    </g>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.5002 39.5C13.5002 53.8594 25.1407 65.5 39.5002 65.5C53.8596 65.5 65.5002 53.8594 65.5002 39.5L53.5002 39.5C53.5002 47.232 47.2321 53.5 39.5002 53.5C31.7682 53.5 25.5002 47.232 25.5002 39.5L13.5002 39.5Z"
      fill="url(#paint1_linear_6_1589)"
    />
    <rect x="52" y="32.5" width="14" height="14" rx="7" fill="white" />
    <g filter="url(#filter1_b_6_1589)">
      <rect x="13.5" y="35" width="12" height="8" rx="2" fill="#C6CED4" />
    </g>
    <defs>
      <filter
        id="filter0_i_6_1589"
        x="13.5"
        y="13.5"
        width="53"
        height="27"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1589"
        />
      </filter>
      <filter
        id="filter1_b_6_1589"
        x="10.5"
        y="32"
        width="18"
        height="14"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1589"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1589"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_6_1589"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(82 39.5) rotate(180) scale(73.5 333.001)"
      >
        <stop stop-color="white" />
        <stop offset="0.762031" stop-color="white" stop-opacity="0.237969" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_6_1589"
        x1="17.9849"
        y1="40"
        x2="33.7335"
        y2="75.8002"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#C3CBD1" />
        <stop offset="1" stop-color="#D5DBE1" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,"changepermissions-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="40" height="40" rx="12" fill="#F69E82" />
    <g id="Group 207" transform="translate(8, 8)">
      <g id="Rectangle 125" filter="url(#filter0_bi_771_327)">
        <rect width="24" height="24" rx="8" fill="white" fill-opacity="0.3" />
      </g>
      <g id="Group 205">
        <g id="Rectangle 124" filter="url(#filter1_b_771_327)">
          <rect x="4" y="6" width="14" height="2.5" rx="1.25" fill="#EB7F5D" />
        </g>
        <g id="Ellipse 31" filter="url(#filter2_b_771_327)">
          <circle
            cx="17.25"
            cy="7.25"
            r="3.25"
            fill="white"
            fill-opacity="0.7"
          />
          <circle
            cx="17.25"
            cy="7.25"
            r="3"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="0.5"
          />
        </g>
      </g>
      <g id="Group 206">
        <g id="Rectangle 124_2" filter="url(#filter3_b_771_327)">
          <rect x="6" y="15" width="14" height="2.5" rx="1.25" fill="#EB7F5D" />
        </g>
        <g id="Ellipse 31_2" filter="url(#filter4_b_771_327)">
          <circle
            cx="6.75"
            cy="16.25"
            r="3.25"
            fill="white"
            fill-opacity="0.7"
          />
          <circle
            cx="6.75"
            cy="16.25"
            r="3"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="0.5"
          />
        </g>
      </g>
    </g>
  </svg>`,"changepermissions-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="40" height="40" rx="12" fill="#E1E7EB" />
    <g id="Group 207" transform="translate(8, 8)">
      <g id="Rectangle 125" filter="url(#filter0_bi_780_544)">
        <rect width="24" height="24" rx="8" fill="white" fill-opacity="0.3" />
      </g>
      <g id="Group 205">
        <g id="Rectangle 124" filter="url(#filter1_b_780_544)">
          <rect x="4" y="6" width="14" height="2.5" rx="1.25" fill="#C3CBD1" />
        </g>
        <g id="Ellipse 31" filter="url(#filter2_b_780_544)">
          <circle cx="17.25" cy="7.25" r="3.25" fill="white" />
          <circle
            cx="17.25"
            cy="7.25"
            r="3"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="0.5"
          />
        </g>
      </g>
      <g id="Group 206">
        <g id="Rectangle 124_2" filter="url(#filter3_b_780_544)">
          <rect x="6" y="15" width="14" height="2.5" rx="1.25" fill="#C3CBD1" />
        </g>
        <g id="Ellipse 31_2" filter="url(#filter4_b_780_544)">
          <circle cx="6.75" cy="16.25" r="3.25" fill="white" />
          <circle
            cx="6.75"
            cy="16.25"
            r="3"
            stroke="white"
            stroke-opacity="0.7"
            stroke-width="0.5"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_bi_780_544"
        x="-8"
        y="-8"
        width="40"
        height="40"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_780_544"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_780_544"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_780_544"
        />
      </filter>
      <filter
        id="filter1_b_780_544"
        x="1"
        y="3"
        width="20"
        height="8.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_780_544"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_780_544"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_780_544"
        x="13"
        y="3"
        width="8.5"
        height="8.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_780_544"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_780_544"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_780_544"
        x="3"
        y="12"
        width="20"
        height="8.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_780_544"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_780_544"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_b_780_544"
        x="2.5"
        y="12"
        width="8.5"
        height="8.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_780_544"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_780_544"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"changeuniversalreceiverdelegate-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_3044_25567)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <path
        d="M58 31.347C58 21.5132 52.2951 18.0097 47.5998 16.3081C43.823 14.9423 39.9971 15.0006 39.9971 15.0006C39.9971 15.0006 36.2081 14.9315 32.4013 16.3081C27.7003 18.0122 22.0011 21.5033 22.0011 31.347C21.9986 35.0826 22.0011 52 22.0011 52H58C58 52 58 35.0663 58 31.347Z"
        fill="url(#paint0_radial_3044_25567)"
      />
      <g filter="url(#filter1_b_3044_25567)">
        <rect
          x="31"
          y="24"
          width="18"
          height="37"
          rx="9"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="31.572"
          y="24.572"
          width="16.856"
          height="35.856"
          rx="8.42799"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="1.14401"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_3044_25567"
        x="-2"
        y="-2"
        width="84"
        height="84"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_3044_25567"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_3044_25567"
          result="effect2_innerShadow_3044_25567"
        />
      </filter>
      <filter
        id="filter1_b_3044_25567"
        x="27"
        y="20"
        width="26"
        height="45"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3044_25567"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3044_25567"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_3044_25567"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(40 33.5) scale(25.6154 31.8961)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
    </defs>
  </svg>`,"changeuniversalreceiverdelegate-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      d="M58 31.347C58 21.5132 52.2951 18.0097 47.5998 16.3081C43.823 14.9423 39.9971 15.0006 39.9971 15.0006C39.9971 15.0006 36.2081 14.9315 32.4013 16.3081C27.7003 18.0122 22.0011 21.5033 22.0011 31.347C21.9986 35.0826 22.0011 52 22.0011 52H58C58 52 58 35.0663 58 31.347Z"
      fill="#EBEFF2"
    />
    <g filter="url(#filter0_b_3044_25572)">
      <rect x="31" y="24" width="18" height="37" rx="9" fill="#FCFCFC" />
      <rect
        x="31.572"
        y="24.572"
        width="16.856"
        height="35.856"
        rx="8.42799"
        stroke="white"
        stroke-width="1.14401"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_3044_25572"
        x="21.8479"
        y="14.8479"
        width="36.3042"
        height="55.3042"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.57606" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_3044_25572"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_3044_25572"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"decrypt-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_i_2543_33293)">
      <rect width="80" height="80" rx="24" fill="#98BEE1" />
      <g filter="url(#filter1_bi_2543_33293)">
        <path
          d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M39.375 42.125H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.25 49.25H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.375 49.25H37"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g filter="url(#filter2_d_2543_33293)">
        <path
          d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
          fill="white"
          fill-opacity="0.4"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M47 46.25V38.25C47 37.6977 47.4477 37.25 48 37.25H60C60.5523 37.25 61 37.6977 61 38.25V46.25C61 47.3546 60.1046 48.25 59 48.25H49C47.8954 48.25 47 47.3546 47 46.25Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.7071 41.0429C55.0976 41.4333 55.0976 42.0667 54.7071 42.4571C54.3167 42.8476 53.6833 42.8476 53.2929 42.4571C52.9024 42.0667 52.9024 41.4333 53.2929 41.0429C53.6833 40.6524 54.3167 40.6524 54.7071 41.0429Z"
        fill="#6393B8"
      />
      <path
        d="M48.5 37.25V37.75H49.5V37.25H48.5ZM58.5 33.75C58.5 34.0261 58.7239 34.25 59 34.25C59.2761 34.25 59.5 34.0261 59.5 33.75H58.5ZM49.5 37.25V34.25H48.5V37.25H49.5ZM53 30.75H55.5V29.75H53V30.75ZM55.5 30.75C57.1569 30.75 58.5 32.0931 58.5 33.75H59.5C59.5 31.5409 57.7091 29.75 55.5 29.75V30.75ZM49.5 34.25C49.5 32.317 51.067 30.75 53 30.75V29.75C50.5147 29.75 48.5 31.7647 48.5 34.25H49.5Z"
        fill="white"
      />
      <path
        d="M54 42L54 45"
        stroke="#6393B8"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_2543_33293"
        x="-1"
        y="-1"
        width="81"
        height="81"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.548958 0 0 0 0 0.705665 0 0 0 0 0.85 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_2543_33293"
        />
      </filter>
      <filter
        id="filter1_bi_2543_33293"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2543_33293"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2543_33293"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2543_33293"
        />
      </filter>
      <filter
        id="filter2_d_2543_33293"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.388235 0 0 0 0 0.576471 0 0 0 0 0.721569 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2543_33293"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2543_33293"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"decrypt-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_bi_2542_32817)">
      <path
        d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
        fill="white"
        fill-opacity="0.3"
      />
    </g>
    <path
      d="M39.375 42.125H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.25 49.25H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.375 49.25H37"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g filter="url(#filter1_d_2542_32817)">
      <path
        d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
        fill="white"
        fill-opacity="0.4"
        shape-rendering="crispEdges"
      />
    </g>
    <path
      d="M47 46.25V38.25C47 37.6977 47.4477 37.25 48 37.25H60C60.5523 37.25 61 37.6977 61 38.25V46.25C61 47.3546 60.1046 48.25 59 48.25H49C47.8954 48.25 47 47.3546 47 46.25Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M54.7071 41.0429C55.0976 41.4333 55.0976 42.0667 54.7071 42.4571C54.3167 42.8476 53.6833 42.8476 53.2929 42.4571C52.9024 42.0667 52.9024 41.4333 53.2929 41.0429C53.6833 40.6524 54.3167 40.6524 54.7071 41.0429Z"
      fill="#CBD2D8"
    />
    <path
      d="M48.5 37.25V37.75H49.5V37.25H48.5ZM58.5 33.75C58.5 34.0261 58.7239 34.25 59 34.25C59.2761 34.25 59.5 34.0261 59.5 33.75H58.5ZM49.5 37.25V34.25H48.5V37.25H49.5ZM53 30.75H55.5V29.75H53V30.75ZM55.5 30.75C57.1569 30.75 58.5 32.0931 58.5 33.75H59.5C59.5 31.5409 57.7091 29.75 55.5 29.75V30.75ZM49.5 34.25C49.5 32.317 51.067 30.75 53 30.75V29.75C50.5147 29.75 48.5 31.7647 48.5 34.25H49.5Z"
      fill="white"
    />
    <path
      d="M54 42L54 45"
      stroke="#CBD2D8"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_bi_2542_32817"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2542_32817"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2542_32817"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2542_32817"
        />
      </filter>
      <filter
        id="filter1_d_2542_32817"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.796078 0 0 0 0 0.823529 0 0 0 0 0.847059 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2542_32817"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2542_32817"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"delegatecall-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_1810_22228)">
      <rect width="80" height="80" rx="24" fill="#F69E82" />
      <g opacity="0.5" filter="url(#filter1_i_1810_22228)">
        <path
          d="M35.1429 39.1429C39.8768 39.1429 43.7143 35.3053 43.7143 30.5714C43.7143 25.8376 39.8768 22 35.1429 22C30.409 22 26.5715 25.8376 26.5715 30.5714C26.5715 35.3053 30.409 39.1429 35.1429 39.1429Z"
          fill="#F56F45"
        />
        <path
          d="M35.1429 40.8571C29.4214 40.8571 18 44.6856 18 52.2856V54.9999C18 56.6568 19.3431 57.9999 21 57.9999H49.2858C50.9426 57.9999 52.2858 56.6568 52.2858 54.9999V52.2856C52.2858 44.6856 40.8643 40.8571 35.1429 40.8571Z"
          fill="#F56F45"
        />
      </g>
      <g filter="url(#filter2_bi_1810_22228)">
        <path
          d="M44.1429 39.1429C48.8768 39.1429 52.7143 35.3053 52.7143 30.5714C52.7143 25.8376 48.8768 22 44.1429 22C39.409 22 35.5715 25.8376 35.5715 30.5714C35.5715 35.3053 39.409 39.1429 44.1429 39.1429Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M52.4643 30.5714C52.4643 35.1672 48.7387 38.8929 44.1429 38.8929C39.5471 38.8929 35.8215 35.1672 35.8215 30.5714C35.8215 25.9756 39.5471 22.25 44.1429 22.25C48.7387 22.25 52.4643 25.9756 52.4643 30.5714Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
        <path
          d="M44.1429 40.8571C38.4214 40.8571 27 44.6856 27 52.2856V54.9999C27 56.6568 28.3431 57.9999 30 57.9999H58.2858C59.9426 57.9999 61.2858 56.6568 61.2858 54.9999V52.2856C61.2858 44.6856 49.8643 40.8571 44.1429 40.8571Z"
          fill="white"
          fill-opacity="0.6"
        />
        <path
          d="M27.25 52.2856C27.25 48.6265 30.0001 45.8346 33.5437 43.9419C37.0792 42.0534 41.3247 41.1071 44.1429 41.1071C46.9611 41.1071 51.2065 42.0534 54.7421 43.9419C58.2856 45.8346 61.0358 48.6265 61.0358 52.2856V54.9999C61.0358 56.5187 59.8045 57.7499 58.2858 57.7499H30C28.4812 57.7499 27.25 56.5187 27.25 54.9999V52.2856Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_1810_22228"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.925 0 0 0 0 0.498118 0 0 0 0 0.362292 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1810_22228"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1810_22228"
          result="effect2_innerShadow_1810_22228"
        />
      </filter>
      <filter
        id="filter1_i_1810_22228"
        x="18"
        y="22"
        width="37.2858"
        height="37.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3" dy="2" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.914306 0 0 0 0 0.258052 0 0 0 0 0.0523611 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1810_22228"
        />
      </filter>
      <filter
        id="filter2_bi_1810_22228"
        x="21"
        y="16"
        width="46.2858"
        height="47.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1810_22228"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1810_22228"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_1810_22228"
        />
      </filter>
    </defs>
  </svg>`,"delegatecall-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g opacity="0.5" filter="url(#filter0_i_2501_33146)">
      <path
        d="M35.1429 39.1429C39.8768 39.1429 43.7143 35.3053 43.7143 30.5714C43.7143 25.8376 39.8768 22 35.1429 22C30.409 22 26.5715 25.8376 26.5715 30.5714C26.5715 35.3053 30.409 39.1429 35.1429 39.1429Z"
        fill="#CBD2D8"
      />
      <path
        d="M35.1429 40.8571C29.4214 40.8571 18 44.6856 18 52.2856V54.9999C18 56.6568 19.3431 57.9999 21 57.9999H49.2858C50.9426 57.9999 52.2858 56.6568 52.2858 54.9999V52.2856C52.2858 44.6856 40.8643 40.8571 35.1429 40.8571Z"
        fill="#CBD2D8"
      />
    </g>
    <g filter="url(#filter1_bi_2501_33146)">
      <path
        d="M44.1429 39.1429C48.8768 39.1429 52.7143 35.3053 52.7143 30.5714C52.7143 25.8376 48.8768 22 44.1429 22C39.409 22 35.5715 25.8376 35.5715 30.5714C35.5715 35.3053 39.409 39.1429 44.1429 39.1429Z"
        fill="white"
        fill-opacity="0.6"
      />
      <path
        d="M51.9643 30.5714C51.9643 34.8911 48.4626 38.3929 44.1429 38.3929C39.8232 38.3929 36.3215 34.8911 36.3215 30.5714C36.3215 26.2518 39.8232 22.75 44.1429 22.75C48.4626 22.75 51.9643 26.2518 51.9643 30.5714Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="1.5"
      />
      <path
        d="M44.1429 40.8571C38.4214 40.8571 27 44.6856 27 52.2856V54.9999C27 56.6568 28.3431 57.9999 30 57.9999H58.2858C59.9426 57.9999 61.2858 56.6568 61.2858 54.9999V52.2856C61.2858 44.6856 49.8643 40.8571 44.1429 40.8571Z"
        fill="white"
        fill-opacity="0.6"
      />
      <path
        d="M27.75 52.2856C27.75 48.9081 30.2897 46.2468 33.7793 44.3829C37.2448 42.5318 41.4096 41.6071 44.1429 41.6071C46.8761 41.6071 51.0409 42.5318 54.5065 44.3829C57.996 46.2468 60.5358 48.9081 60.5358 52.2856V54.9999C60.5358 56.2426 59.5284 57.2499 58.2858 57.2499H30C28.7574 57.2499 27.75 56.2426 27.75 54.9999V52.2856Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="1.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_2501_33146"
        x="18"
        y="22"
        width="37.2858"
        height="37.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="3" dy="2" />
        <feGaussianBlur stdDeviation="4.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.702857 0 0 0 0 0.742857 0 0 0 0 0.777143 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_2501_33146"
        />
      </filter>
      <filter
        id="filter1_bi_2501_33146"
        x="21"
        y="16"
        width="46.2858"
        height="47.9999"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="3" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2501_33146"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2501_33146"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2501_33146"
        />
      </filter>
    </defs>
  </svg>`,"deploy-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_6_1514)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <path
        d="M20 22C20 20.8954 20.8954 20 22 20H31.8382C33.62 20 34.5124 22.1543 33.2525 23.4142L23.4142 33.2525C22.1543 34.5124 20 33.62 20 31.8382V22Z"
        fill="#FDBE3F"
      />
      <path
        d="M58 20C59.1046 20 60 20.8954 60 22L60 31.8382C60 33.62 57.8457 34.5124 56.5858 33.2525L46.7475 23.4142C45.4876 22.1543 46.38 20 48.1618 20L58 20Z"
        fill="#FDBE3F"
      />
      <path
        d="M60 58C60 59.1046 59.1046 60 58 60L48.1618 60C46.38 60 45.4876 57.8457 46.7475 56.5858L56.5858 46.7475C57.8457 45.4876 60 46.38 60 48.1618L60 58Z"
        fill="#FDBE3F"
      />
      <path
        d="M22 60C20.8954 60 20 59.1046 20 58L20 48.1618C20 46.38 22.1543 45.4876 23.4142 46.7475L33.2525 56.5858C34.5124 57.8457 33.62 60 31.8382 60L22 60Z"
        fill="#FDBE3F"
      />
      <rect
        x="30"
        y="30"
        width="20"
        height="20"
        rx="4"
        fill="white"
        fill-opacity="0.7"
      />
      <rect
        x="30.25"
        y="30.25"
        width="19.5"
        height="19.5"
        rx="3.75"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_ii_6_1514"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1514"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_6_1514"
          result="effect2_innerShadow_6_1514"
        />
      </filter>
    </defs>
  </svg>`,"deploy-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      d="M20 22C20 20.8954 20.8954 20 22 20H31.8382C33.62 20 34.5124 22.1543 33.2525 23.4142L23.4142 33.2525C22.1543 34.5124 20 33.62 20 31.8382V22Z"
      fill="#CBD2D8"
    />
    <path
      d="M58 20C59.1046 20 60 20.8954 60 22L60 31.8382C60 33.62 57.8457 34.5124 56.5858 33.2525L46.7475 23.4142C45.4876 22.1543 46.38 20 48.1618 20L58 20Z"
      fill="#CBD2D8"
    />
    <path
      d="M60 58C60 59.1046 59.1046 60 58 60L48.1618 60C46.38 60 45.4876 57.8457 46.7475 56.5858L56.5858 46.7475C57.8457 45.4876 60 46.38 60 48.1618L60 58Z"
      fill="#CBD2D8"
    />
    <path
      d="M22 60C20.8954 60 20 59.1046 20 58L20 48.1618C20 46.38 22.1543 45.4876 23.4142 46.7475L33.2525 56.5858C34.5124 57.8457 33.62 60 31.8382 60L22 60Z"
      fill="#CBD2D8"
    />
    <rect x="30" y="30" width="20" height="20" rx="4" fill="white" />
  </svg>`,"editpermissions-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_6_1600)">
      <rect width="80" height="80" rx="24" fill="#F69E82" />
      <g filter="url(#filter1_bi_6_1600)">
        <rect
          x="16"
          y="16"
          width="48"
          height="48"
          rx="8"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <g filter="url(#filter2_b_6_1600)">
        <rect x="24" y="28" width="28" height="5" rx="2.5" fill="#EB7F5D" />
      </g>
      <g filter="url(#filter3_b_6_1600)">
        <circle cx="50.5" cy="30.5" r="6.5" fill="white" fill-opacity="0.7" />
        <circle
          cx="50.5"
          cy="30.5"
          r="6.25"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
      <g filter="url(#filter4_b_6_1600)">
        <rect x="28" y="46" width="28" height="5" rx="2.5" fill="#EB7F5D" />
      </g>
      <g filter="url(#filter5_b_6_1600)">
        <circle cx="29.5" cy="48.5" r="6.5" fill="white" fill-opacity="0.7" />
        <circle
          cx="29.5"
          cy="48.5"
          r="6.25"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_6_1600"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.925 0 0 0 0 0.498118 0 0 0 0 0.362292 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1600"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_6_1600"
          result="effect2_innerShadow_6_1600"
        />
      </filter>
      <filter
        id="filter1_bi_6_1600"
        x="8"
        y="8"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1600"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1600"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_6_1600"
        />
      </filter>
      <filter
        id="filter2_b_6_1600"
        x="21"
        y="25"
        width="34"
        height="11"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1600"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1600"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_6_1600"
        x="43"
        y="23"
        width="15"
        height="15"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1600"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1600"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_b_6_1600"
        x="25"
        y="43"
        width="34"
        height="11"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1600"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1600"
          result="shape"
        />
      </filter>
      <filter
        id="filter5_b_6_1600"
        x="22"
        y="41"
        width="15"
        height="15"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1600"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1600"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"editpermissions-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_bi_6_1634)">
      <rect
        x="16"
        y="16"
        width="48"
        height="48"
        rx="8"
        fill="white"
        fill-opacity="0.3"
      />
    </g>
    <g filter="url(#filter1_b_6_1634)">
      <rect x="24" y="28" width="28" height="5" rx="2.5" fill="#C3CBD1" />
    </g>
    <g filter="url(#filter2_b_6_1634)">
      <circle cx="50.5" cy="30.5" r="6.5" fill="white" />
      <circle
        cx="50.5"
        cy="30.5"
        r="6.25"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <g filter="url(#filter3_b_6_1634)">
      <rect x="28" y="46" width="28" height="5" rx="2.5" fill="#C3CBD1" />
    </g>
    <g filter="url(#filter4_b_6_1634)">
      <circle cx="29.5" cy="48.5" r="6.5" fill="white" />
      <circle
        cx="29.5"
        cy="48.5"
        r="6.25"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_bi_6_1634"
        x="8"
        y="8"
        width="64"
        height="64"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1634"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_6_1634"
        />
      </filter>
      <filter
        id="filter1_b_6_1634"
        x="21"
        y="25"
        width="34"
        height="11"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1634"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_6_1634"
        x="43"
        y="23"
        width="15"
        height="15"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1634"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_6_1634"
        x="25"
        y="43"
        width="34"
        height="11"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1634"
          result="shape"
        />
      </filter>
      <filter
        id="filter4_b_6_1634"
        x="22"
        y="41"
        width="15"
        height="15"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="0.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1634"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1634"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"encrypt-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_i_2543_33280)">
      <rect width="80" height="80" rx="24" fill="#98BEE1" />
      <g filter="url(#filter1_bi_2543_33280)">
        <path
          d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M39.375 42.125H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.25 49.25H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.375 49.25H37"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g filter="url(#filter2_d_2543_33280)">
        <path
          d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
          fill="white"
          fill-opacity="0.4"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M47 46.25V38.25C47 37.6977 47.4477 37.25 48 37.25H60C60.5523 37.25 61 37.6977 61 38.25V46.25C61 47.3546 60.1046 48.25 59 48.25H49C47.8954 48.25 47 47.3546 47 46.25Z"
        fill="white"
        stroke="white"
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M54.7071 41.0429C55.0976 41.4333 55.0976 42.0667 54.7071 42.4571C54.3167 42.8476 53.6833 42.8476 53.2929 42.4571C52.9024 42.0667 52.9024 41.4333 53.2929 41.0429C53.6833 40.6524 54.3167 40.6524 54.7071 41.0429Z"
        fill="#6393B8"
      />
      <path
        d="M49 37.25V34.25C49 32.0409 50.7909 30.25 53 30.25H55C57.2091 30.25 59 32.0411 59 34.2503C59 35.5089 59 36.7111 59 37.25"
        stroke="white"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <path
        d="M54 42L54 45"
        stroke="#6393B8"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_2543_33280"
        x="-1"
        y="-1"
        width="81"
        height="81"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.548958 0 0 0 0 0.705665 0 0 0 0 0.85 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_2543_33280"
        />
      </filter>
      <filter
        id="filter1_bi_2543_33280"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2543_33280"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2543_33280"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2543_33280"
        />
      </filter>
      <filter
        id="filter2_d_2543_33280"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.388235 0 0 0 0 0.576471 0 0 0 0 0.721569 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2543_33280"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2543_33280"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"encrypt-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_bi_2542_32351)">
      <path
        d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
        fill="white"
        fill-opacity="0.3"
      />
    </g>
    <path
      d="M39.375 42.125H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.25 49.25H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.375 49.25H37"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g filter="url(#filter1_d_2542_32351)">
      <path
        d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
        fill="white"
        fill-opacity="0.4"
        shape-rendering="crispEdges"
      />
    </g>
    <path
      d="M47 46.25V38.25C47 37.6977 47.4477 37.25 48 37.25H60C60.5523 37.25 61 37.6977 61 38.25V46.25C61 47.3546 60.1046 48.25 59 48.25H49C47.8954 48.25 47 47.3546 47 46.25Z"
      fill="white"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M54.7071 41.0429C55.0976 41.4333 55.0976 42.0667 54.7071 42.4571C54.3167 42.8476 53.6833 42.8476 53.2929 42.4571C52.9024 42.0667 52.9024 41.4333 53.2929 41.0429C53.6833 40.6524 54.3167 40.6524 54.7071 41.0429Z"
      fill="#CBD2D8"
    />
    <path
      d="M49 37.25V34.25C49 32.0409 50.7909 30.25 53 30.25H55C57.2091 30.25 59 32.0411 59 34.2503C59 35.5089 59 36.7111 59 37.25"
      stroke="white"
      stroke-linecap="square"
      stroke-linejoin="round"
    />
    <path
      d="M54 42L54 45"
      stroke="#CBD2D8"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_bi_2542_32351"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2542_32351"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2542_32351"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2542_32351"
        />
      </filter>
      <filter
        id="filter1_d_2542_32351"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.796078 0 0 0 0 0.823529 0 0 0 0 0.847059 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2542_32351"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2542_32351"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"execute-relay-call-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_1009_927)">
      <rect width="40" height="40" rx="8" fill="#FAD276" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 9C12.7091 9 14.5 10.7909 14.5 13V22.0085C14.5 22.5561 14.9439 23 15.4915 23C16.0391 23 16.4831 22.5561 16.4831 22.0085V17.5085C16.4831 12.8094 20.2924 9 24.9915 9C29.6906 9 33.5 12.8094 33.5 17.5085V27C33.5 29.2091 31.7091 31 29.5 31C27.2909 31 25.5 29.2091 25.5 27V17.5085C25.5 17.2277 25.2723 17 24.9915 17C24.7107 17 24.4831 17.2277 24.4831 17.5085V22.0085C24.4831 26.9744 20.4574 31 15.4915 31C10.5256 31 6.5 26.9744 6.5 22.0085V13C6.5 10.7909 8.29086 9 10.5 9Z"
        fill="url(#paint0_radial_1009_927)"
      />
      <g filter="url(#filter1_b_1009_927)">
        <rect
          x="6.5"
          y="8.5"
          width="8"
          height="8"
          rx="4"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="7"
          y="9"
          width="7"
          height="7"
          rx="3.5"
          stroke="white"
          stroke-opacity="0.7"
        />
      </g>
      <g filter="url(#filter2_b_1009_927)">
        <rect
          x="25.5"
          y="23.5"
          width="8"
          height="8"
          rx="4"
          fill="#FCFCFC"
          fill-opacity="0.6"
        />
        <rect
          x="26"
          y="24"
          width="7"
          height="7"
          rx="3.5"
          stroke="white"
          stroke-opacity="0.7"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_1009_927"
        x="-2"
        y="-2"
        width="44"
        height="44"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-2" dy="-2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1009_927"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1009_927"
          result="effect2_innerShadow_1009_927"
        />
      </filter>
      <filter
        id="filter1_b_1009_927"
        x="2.5"
        y="4.5"
        width="16"
        height="16"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1009_927"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1009_927"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_1009_927"
        x="21.5"
        y="19.5"
        width="16"
        height="16"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1009_927"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1009_927"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1009_927"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20 20) scale(19.2115 18.9652)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
    </defs>
  </svg>`,"execute-relay-call-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="40" height="40" rx="8" fill="#E1E7EB" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 9C12.7091 9 14.5 10.7909 14.5 13V22.0085C14.5 22.5561 14.9439 23 15.4915 23C16.0391 23 16.4831 22.5561 16.4831 22.0085V17.5085C16.4831 12.8094 20.2924 9 24.9915 9C29.6906 9 33.5 12.8094 33.5 17.5085V27C33.5 29.2091 31.7091 31 29.5 31C27.2909 31 25.5 29.2091 25.5 27V17.5085C25.5 17.2277 25.2723 17 24.9915 17C24.7107 17 24.4831 17.2277 24.4831 17.5085V22.0085C24.4831 26.9744 20.4574 31 15.4915 31C10.5256 31 6.5 26.9744 6.5 22.0085V13C6.5 10.7909 8.29086 9 10.5 9Z"
      fill="#EBEFF2"
    />
    <g filter="url(#filter0_b_1009_1021)">
      <rect
        x="6.5"
        y="8.5"
        width="8"
        height="8"
        rx="4"
        fill="#FCFCFC"
        fill-opacity="0.6"
      />
      <rect
        x="7"
        y="9"
        width="7"
        height="7"
        rx="3.5"
        stroke="white"
        stroke-opacity="0.7"
      />
    </g>
    <g filter="url(#filter1_b_1009_1021)">
      <rect
        x="25.5"
        y="23.5"
        width="8"
        height="8"
        rx="4"
        fill="#FCFCFC"
        fill-opacity="0.6"
      />
      <rect
        x="26"
        y="24"
        width="7"
        height="7"
        rx="3.5"
        stroke="white"
        stroke-opacity="0.7"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_1009_1021"
        x="2.5"
        y="4.5"
        width="16"
        height="16"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1009_1021"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1009_1021"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_1009_1021"
        x="21.5"
        y="19.5"
        width="16"
        height="16"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1009_1021"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1009_1021"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"reentrancy-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_1877_22696)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <g filter="url(#filter1_i_1877_22696)">
        <path
          d="M62 43C63.1045 43 64.0086 43.897 63.9167 44.9978C63.5791 49.0401 62.221 52.9428 59.9552 56.3337C57.3181 60.2805 53.5698 63.3566 49.1844 65.1731C44.799 66.9896 39.9734 67.4649 35.3178 66.5388C30.6623 65.6128 26.3859 63.327 23.0294 59.9706L31.5147 51.4853C33.1929 53.1635 35.3311 54.3064 37.6589 54.7694C39.9867 55.2324 42.3995 54.9948 44.5922 54.0866C46.7849 53.1783 48.659 51.6402 49.9776 49.6668C50.9239 48.2506 51.5536 46.6557 51.8337 44.9908C52.017 43.9015 52.8954 43 54 43H62Z"
          fill="url(#paint0_radial_1877_22696)"
        />
      </g>
      <g filter="url(#filter2_b_1877_22696)">
        <path
          d="M14.0051 44.2143C13.863 42.94 14.94 41.863 16.2144 42.0051L34.4055 44.0329C36.0718 44.2187 36.7837 46.2493 35.5981 47.4348L19.4349 63.5981C18.2493 64.7837 16.2187 64.0718 16.033 62.4054L14.0051 44.2143Z"
          fill="white"
          fill-opacity="0.7"
        />
        <path
          d="M14.2536 44.1866C14.1293 43.0716 15.0716 42.1292 16.1867 42.2535L34.3778 44.2814C35.8358 44.444 36.4587 46.2207 35.4213 47.2581L19.2581 63.4213C18.2207 64.4587 16.444 63.8358 16.2814 62.3778L14.2536 44.1866Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
      <g filter="url(#filter3_i_1877_22696)">
        <path
          d="M17 37.8406C15.8955 37.8406 14.9914 36.9435 15.0833 35.8428C15.4209 31.8004 16.779 27.8978 19.0448 24.5069C21.6819 20.5601 25.4302 17.484 29.8156 15.6675C34.201 13.851 39.0266 13.3757 43.6822 14.3017C48.3377 15.2278 52.6141 17.5136 55.9706 20.87L47.4853 29.3553C45.8071 27.6771 43.6689 26.5342 41.3411 26.0712C39.0133 25.6081 36.6005 25.8458 34.4078 26.754C32.2151 27.6623 30.341 29.2003 29.0224 31.1737C28.0761 32.59 27.4464 34.1848 27.1663 35.8498C26.983 36.9391 26.1046 37.8406 25 37.8406H17Z"
          fill="url(#paint1_radial_1877_22696)"
        />
      </g>
      <g filter="url(#filter4_b_1877_22696)">
        <path
          d="M64.9949 36.6262C65.137 37.9006 64.06 38.9776 62.7856 38.8355L44.5945 36.8076C42.9282 36.6219 42.2163 34.5913 43.4019 33.4057L59.5651 17.2425C60.7507 16.0569 62.7813 16.7688 62.967 18.4351L64.9949 36.6262Z"
          fill="white"
          fill-opacity="0.7"
        />
        <path
          d="M64.7464 36.6539C64.8707 37.769 63.9284 38.7114 62.8133 38.587L44.6222 36.5592C43.1642 36.3966 42.5413 34.6199 43.5787 33.5825L59.7419 17.4193C60.7793 16.3819 62.556 17.0048 62.7186 18.4628L64.7464 36.6539Z"
          stroke="white"
          stroke-opacity="0.7"
          stroke-width="0.5"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_ii_1877_22696"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1877_22696"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1877_22696"
          result="effect2_innerShadow_1877_22696"
        />
      </filter>
      <filter
        id="filter1_i_1877_22696"
        x="22.0294"
        y="42"
        width="41.8937"
        height="25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1877_22696"
        />
      </filter>
      <filter
        id="filter2_b_1877_22696"
        x="9.99249"
        y="37.9924"
        width="30.194"
        height="30.194"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1877_22696"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1877_22696"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_i_1877_22696"
        x="15.0768"
        y="13.8406"
        width="41.8937"
        height="25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1877_22696"
        />
      </filter>
      <filter
        id="filter4_b_1877_22696"
        x="38.8135"
        y="12.6542"
        width="30.194"
        height="30.194"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1877_22696"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1877_22696"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1877_22696"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(25.5 55) scale(46 78.5269)"
      >
        <stop stop-color="#F9AE3F" />
        <stop offset="1" stop-color="#FBCB63" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_1877_22696"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(88.5 13.9999) rotate(-179.891) scale(84.0002 143.397)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>`,"reentrancy-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_i_1877_22711)">
      <path
        d="M62 43C63.1045 43 64.0086 43.897 63.9167 44.9978C63.5791 49.0401 62.221 52.9428 59.9552 56.3337C57.3181 60.2805 53.5698 63.3566 49.1844 65.1731C44.799 66.9896 39.9734 67.4649 35.3178 66.5388C30.6623 65.6128 26.3859 63.327 23.0294 59.9706L31.5147 51.4853C33.1929 53.1635 35.3311 54.3064 37.6589 54.7694C39.9867 55.2324 42.3995 54.9948 44.5922 54.0866C46.7849 53.1783 48.659 51.6402 49.9776 49.6668C50.9239 48.2506 51.5536 46.6557 51.8337 44.9908C52.017 43.9015 52.8954 43 54 43H62Z"
        fill="url(#paint0_radial_1877_22711)"
      />
    </g>
    <g filter="url(#filter1_b_1877_22711)">
      <path
        d="M14.0051 44.2143C13.863 42.94 14.94 41.863 16.2144 42.0051L34.4055 44.0329C36.0718 44.2187 36.7837 46.2493 35.5981 47.4348L19.4349 63.5981C18.2493 64.7837 16.2187 64.0718 16.033 62.4054L14.0051 44.2143Z"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        d="M14.2536 44.1866C14.1293 43.0716 15.0716 42.1292 16.1867 42.2535L34.3778 44.2814C35.8358 44.444 36.4587 46.2207 35.4213 47.2581L19.2581 63.4213C18.2207 64.4587 16.444 63.8358 16.2814 62.3778L14.2536 44.1866Z"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <g filter="url(#filter2_i_1877_22711)">
      <path
        d="M17 37.8406C15.8955 37.8406 14.9914 36.9435 15.0833 35.8428C15.4209 31.8004 16.779 27.8978 19.0448 24.5069C21.6819 20.5601 25.4302 17.484 29.8156 15.6675C34.201 13.851 39.0266 13.3757 43.6822 14.3017C48.3377 15.2278 52.6141 17.5136 55.9706 20.87L47.4853 29.3553C45.8071 27.6771 43.6689 26.5342 41.3411 26.0712C39.0133 25.6081 36.6005 25.8458 34.4078 26.754C32.2151 27.6623 30.341 29.2003 29.0224 31.1737C28.0761 32.59 27.4464 34.1848 27.1663 35.8498C26.983 36.9391 26.1046 37.8406 25 37.8406H17Z"
        fill="url(#paint1_radial_1877_22711)"
      />
    </g>
    <g filter="url(#filter3_b_1877_22711)">
      <path
        d="M64.9949 36.6262C65.137 37.9006 64.06 38.9776 62.7856 38.8355L44.5945 36.8076C42.9282 36.6219 42.2163 34.5913 43.4019 33.4057L59.5651 17.2425C60.7507 16.0569 62.7813 16.7688 62.967 18.4351L64.9949 36.6262Z"
        fill="white"
        fill-opacity="0.7"
      />
      <path
        d="M64.7464 36.6539C64.8707 37.769 63.9284 38.7114 62.8133 38.587L44.6222 36.5592C43.1642 36.3966 42.5413 34.6199 43.5787 33.5825L59.7419 17.4193C60.7793 16.3819 62.556 17.0048 62.7186 18.4628L64.7464 36.6539Z"
        stroke="white"
        stroke-opacity="0.7"
        stroke-width="0.5"
      />
    </g>
    <defs>
      <filter
        id="filter0_i_1877_22711"
        x="22.0294"
        y="42"
        width="41.8937"
        height="25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1877_22711"
        />
      </filter>
      <filter
        id="filter1_b_1877_22711"
        x="9.99249"
        y="37.9924"
        width="30.194"
        height="30.194"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1877_22711"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1877_22711"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_i_1877_22711"
        x="15.0768"
        y="13.8406"
        width="41.8937"
        height="25"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1877_22711"
        />
      </filter>
      <filter
        id="filter3_b_1877_22711"
        x="38.8135"
        y="12.6542"
        width="30.194"
        height="30.194"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1877_22711"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1877_22711"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1877_22711"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(25.5 55) scale(46 78.5269)"
      >
        <stop stop-color="#EFF2F4" />
        <stop offset="1" stop-color="#E8ECEF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_1877_22711"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(88.5 13.9999) rotate(-179.891) scale(84.0002 143.397)"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>`,"setdata-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_i_6_1348)">
      <rect width="80" height="80" rx="24" fill="#98BEE1" />
      <g filter="url(#filter1_b_6_1348)">
        <rect
          width="80"
          height="80"
          rx="24"
          fill="#98BEE1"
          fill-opacity="0.5"
        />
      </g>
      <path
        d="M38.8561 43.4899C39.875 43.0328 41.0386 43.0223 42.0656 43.4612L67.8448 54.478C68.6031 54.802 68.5626 55.8904 67.7823 56.1572L41.708 65.0715C40.8941 65.3497 40.0122 65.3582 39.1931 65.0957L13.1454 56.747C12.3596 56.4952 12.2988 55.4067 13.0517 55.0689L38.8561 43.4899Z"
        fill="#6393B8"
      />
      <g filter="url(#filter2_b_6_1348)">
        <path
          d="M39.4522 29.4608C39.949 29.2533 40.5084 29.2548 41.004 29.465L67.8259 40.8405C68.5871 41.1634 68.5467 42.2557 67.7636 42.5214L41.5045 51.4309C40.677 51.7116 39.7803 51.7137 38.9516 51.4368L12.2742 42.5225C11.4857 42.2591 11.4454 41.1589 12.2125 40.8385L39.4522 29.4608Z"
          fill="#DFE6F0"
          fill-opacity="0.5"
        />
      </g>
      <g filter="url(#filter3_b_6_1348)">
        <path
          d="M39.4522 15.8244C39.949 15.617 40.5084 15.6185 41.004 15.8287L67.8259 27.2042C68.5871 27.527 68.5467 28.6194 67.7637 28.885L41.5045 37.7945C40.677 38.0753 39.7803 38.0773 38.9516 37.8004L12.2742 28.8862C11.4857 28.6227 11.4454 27.5225 12.2125 27.2021L39.4522 15.8244Z"
          fill="white"
          fill-opacity="0.8"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_i_6_1348"
        x="-1"
        y="-1"
        width="81"
        height="81"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.548958 0 0 0 0 0.705665 0 0 0 0 0.85 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1348"
        />
      </filter>
      <filter
        id="filter1_b_6_1348"
        x="-12"
        y="-12"
        width="104"
        height="104"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1348"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1348"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_6_1348"
        x="3.6594"
        y="21.3063"
        width="72.7151"
        height="38.3367"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1348"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1348"
          result="shape"
        />
      </filter>
      <filter
        id="filter3_b_6_1348"
        x="9.6594"
        y="13.6699"
        width="60.7151"
        height="26.3367"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1348"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1348"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"setdata-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <path
      d="M38.8561 43.4899C39.875 43.0328 41.0386 43.0223 42.0656 43.4612L67.8448 54.478C68.6031 54.802 68.5626 55.8904 67.7823 56.1572L41.708 65.0715C40.8941 65.3497 40.0122 65.3582 39.1931 65.0957L13.1454 56.747C12.3596 56.4952 12.2988 55.4067 13.0517 55.0689L38.8561 43.4899Z"
      fill="#C3CBD1"
    />
    <g filter="url(#filter0_b_6_1368)">
      <path
        d="M39.4522 29.4608C39.949 29.2533 40.5084 29.2548 41.004 29.465L67.8259 40.8405C68.5871 41.1634 68.5467 42.2557 67.7636 42.5214L41.5045 51.4309C40.677 51.7116 39.7803 51.7137 38.9516 51.4368L12.2742 42.5225C11.4857 42.2591 11.4454 41.1589 12.2125 40.8385L39.4522 29.4608Z"
        fill="#DADFE6"
        fill-opacity="0.5"
      />
    </g>
    <g filter="url(#filter1_b_6_1368)">
      <path
        d="M39.4522 15.8244C39.949 15.617 40.5084 15.6185 41.004 15.8287L67.8259 27.2042C68.5871 27.527 68.5467 28.6194 67.7637 28.885L41.5045 37.7945C40.677 38.0753 39.7803 38.0773 38.9516 37.8004L12.2742 28.8862C11.4857 28.6227 11.4454 27.5225 12.2125 27.2021L39.4522 15.8244Z"
        fill="white"
        fill-opacity="0.8"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_6_1368"
        x="3.6594"
        y="21.3063"
        width="72.7151"
        height="38.3367"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1368"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1368"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_6_1368"
        x="9.6594"
        y="13.6699"
        width="60.7151"
        height="26.3367"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="1" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6_1368"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6_1368"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"sign-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_i_2543_33265)">
      <rect width="80" height="80" rx="24" fill="#98BEE1" />
      <g filter="url(#filter1_bi_2543_33265)">
        <path
          d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
          fill="white"
          fill-opacity="0.3"
        />
      </g>
      <path
        d="M39.375 42.125H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.25 49.25H25.125"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.375 49.25H37"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g filter="url(#filter2_d_2543_33265)">
        <path
          d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
          fill="white"
          fill-opacity="0.4"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M50.8312 46.9215L63.1804 34.9707C63.5773 34.5866 63.5773 33.9639 63.1804 33.5799L60.1998 30.6954C59.8029 30.3113 59.1594 30.3113 58.7626 30.6954L46.4134 42.6462C46.2718 42.7832 46.1752 42.9577 46.1357 43.1477L45.0839 48.2081L50.313 47.1903C50.5093 47.1521 50.6896 47.0586 50.8312 46.9215Z"
        fill="white"
        stroke="white"
        stroke-width="0.5"
        stroke-linecap="round"
      />
      <path d="M56 33L61 38" stroke="#6393B8" />
    </g>
    <defs>
      <filter
        id="filter0_i_2543_33265"
        x="-1"
        y="-1"
        width="81"
        height="81"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.548958 0 0 0 0 0.705665 0 0 0 0 0.85 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_2543_33265"
        />
      </filter>
      <filter
        id="filter1_bi_2543_33265"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2543_33265"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2543_33265"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2543_33265"
        />
      </filter>
      <filter
        id="filter2_d_2543_33265"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.388235 0 0 0 0 0.576471 0 0 0 0 0.721569 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2543_33265"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2543_33265"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"sign-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <g filter="url(#filter0_bi_2542_32327)">
      <path
        d="M18 35.2876V56.9688C18 58.386 18.563 59.7452 19.5651 60.7474C20.5673 61.7495 21.9265 62.3125 23.3438 62.3125H48.2812C49.6985 62.3125 51.0577 61.7495 52.0599 60.7474C53.062 59.7452 53.625 58.386 53.625 56.9688V21.3438C53.625 19.9265 53.062 18.5673 52.0599 17.5651C51.0577 16.563 49.6985 16 48.2812 16H37.2876C36.3431 16.0001 35.4373 16.3754 34.7694 17.0431L19.0431 32.7694C18.3754 33.4373 18.0001 34.3431 18 35.2876Z"
        fill="white"
        fill-opacity="0.3"
      />
    </g>
    <path
      d="M39.375 42.125H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M32.25 49.25H25.125"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.375 49.25H37"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g filter="url(#filter1_d_2542_32327)">
      <path
        d="M35.8125 16.3207V30.2501C35.8125 31.1949 35.4372 32.101 34.7691 32.7691C34.101 33.4372 33.1948 33.8126 32.25 33.8126H18.3206"
        fill="white"
        fill-opacity="0.4"
        shape-rendering="crispEdges"
      />
    </g>
    <path
      d="M50.8312 46.9215L63.1804 34.9707C63.5773 34.5866 63.5773 33.9639 63.1804 33.5799L60.1998 30.6954C59.8029 30.3113 59.1594 30.3113 58.7626 30.6954L46.4134 42.6462C46.2718 42.7832 46.1752 42.9577 46.1357 43.1477L45.0839 48.2081L50.313 47.1903C50.5093 47.1521 50.6896 47.0586 50.8312 46.9215Z"
      fill="white"
      stroke="white"
      stroke-width="0.5"
      stroke-linecap="round"
    />
    <path d="M56 33L61 38" stroke="#CBD2D8" />
    <defs>
      <filter
        id="filter0_bi_2542_32327"
        x="10"
        y="8"
        width="51.625"
        height="62.3125"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2542_32327"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2542_32327"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect2_innerShadow_2542_32327"
        />
      </filter>
      <filter
        id="filter1_d_2542_32327"
        x="13.3206"
        y="11.3207"
        width="29.4919"
        height="29.4918"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.796078 0 0 0 0 0.823529 0 0 0 0 0.847059 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2542_32327"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2542_32327"
          result="shape"
        />
      </filter>
    </defs>
  </svg>`,"transaction-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" />
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#DEE7ED" />
    <g filter="url(#filter0_ii_960_256)">
      <rect width="40" height="40" rx="8" fill="#FAD276" />
      <rect
        x="7"
        y="23.5"
        width="25.0714"
        height="8"
        rx="4"
        fill="url(#paint0_linear_960_256)"
      />
      <circle cx="28.6428" cy="27.5" r="4" fill="#F9AE3F" />
      <rect
        x="7"
        y="9"
        width="26"
        height="8"
        rx="4"
        fill="url(#paint1_linear_960_256)"
      />
      <circle cx="11" cy="13" r="4" fill="white" fill-opacity="0.7" />
    </g>
    <defs>
      <filter
        id="filter0_ii_960_256"
        x="-1"
        y="-1"
        width="42"
        height="42"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_960_256"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_960_256"
          result="effect2_innerShadow_960_256"
        />
      </filter>
      <linearGradient
        id="paint0_linear_960_256"
        x1="28.75"
        y1="28.25"
        x2="7"
        y2="27.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FDBE3F" />
        <stop offset="1" stop-color="#FDBE3F" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_960_256"
        x1="-2.25"
        y1="13"
        x2="33"
        y2="13"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,"transfer-activated":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <g filter="url(#filter0_ii_6_1450)">
      <rect width="80" height="80" rx="24" fill="#FAD276" />
      <rect
        x="14"
        y="47"
        width="50.1429"
        height="16"
        rx="8"
        fill="url(#paint0_linear_6_1450)"
      />
      <circle cx="57.2857" cy="55" r="8" fill="#F9AE3F" />
      <rect
        x="14"
        y="18"
        width="52"
        height="16"
        rx="8"
        fill="url(#paint1_linear_6_1450)"
      />
      <circle cx="22" cy="26" r="8" fill="white" fill-opacity="0.7" />
    </g>
    <defs>
      <filter
        id="filter0_ii_6_1450"
        x="-1"
        y="-1"
        width="82"
        height="82"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-1" dy="-1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.970833 0 0 0 0 0.791867 0 0 0 0 0.380243 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_6_1450"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_6_1450"
          result="effect2_innerShadow_6_1450"
        />
      </filter>
      <linearGradient
        id="paint0_linear_6_1450"
        x1="57.5"
        y1="56.5"
        x2="14"
        y2="55"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FDBE3F" />
        <stop offset="1" stop-color="#FDBE3F" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6_1450"
        x1="-4.5"
        y1="26"
        x2="66"
        y2="26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,"transfer-inactive":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <rect width="80" height="80" rx="24" fill="#E1E7EB" />
    <rect
      x="14"
      y="47"
      width="50.1429"
      height="16"
      rx="8"
      fill="url(#paint0_linear_6_1483)"
    />
    <circle cx="57.2857" cy="55" r="8" fill="#CBD2D8" />
    <rect
      x="14"
      y="18"
      width="52"
      height="16"
      rx="8"
      fill="url(#paint1_linear_6_1483)"
    />
    <circle cx="22" cy="26" r="8" fill="white" />
    <defs>
      <linearGradient
        id="paint0_linear_6_1483"
        x1="79.5"
        y1="55"
        x2="59.9982"
        y2="84.9507"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#C3CBD1" />
        <stop offset="1" stop-color="#D5DBE1" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6_1483"
        x1="-4.5"
        y1="26"
        x2="66"
        y2="26"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>`,"logo-hyperlane-outline":e=>t.html`<svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style=${c({width:`${e.width}px`,height:`${e.height}px`})}
  >
    <path
      d="M11.6599 9.92537L9.33681 4.40796C9.23272 4.16075 8.99062 4 8.72239 4H4.4361C3.97741 4 3.65575 4.45245 3.80643 4.88568L6.12804 11.5603C6.15253 11.6307 6.16504 11.7047 6.16504 11.7793V11.8791C6.16504 11.9591 6.15066 12.0383 6.12259 12.1132L3.50282 19.0993C3.33938 19.5351 3.66157 20 4.12704 20H8.38906C8.65728 20 8.89939 19.8392 9.00348 19.592L11.3266 14.0746C11.4307 13.8274 11.6728 13.6667 11.941 13.6667H13.209C13.6728 13.6667 13.9949 14.1286 13.8345 14.5638L12.1622 19.1029C12.0019 19.5381 12.324 20 12.7878 20H17.0539C17.3231 20 17.5658 19.8382 17.6693 19.5897L20.7804 12.1231C20.8143 12.0418 20.8317 11.9547 20.8317 11.8667V11.7925C20.8317 11.7093 20.8162 11.6269 20.7859 11.5495L17.9975 4.42373C17.8975 4.16817 17.6511 4 17.3767 4H12.7878C12.324 4 12.0019 4.4619 12.1622 4.89714L13.8345 9.4362C13.9949 9.87143 13.6728 10.3333 13.209 10.3333H12.2744C12.0061 10.3333 11.764 10.1726 11.6599 9.92537Z"
      stroke="var(--${e.color})"
      stroke-width="${e.strokeWidth}"
    />
  </svg> `},v="neutral-20",m="medium",C=class extends(0,s.TailwindStyledElement)(l){constructor(){super(...arguments),this.name=void 0,this.size=m,this.color=v,this.secondaryColor=void 0,this.pack=void 0,this.variant=void 0,this.svgContent="",this.lastAttemptedKey="",this.failedLoadAttempt=!1,this.sizes={"x-small":{width:12,height:12,strokeWidth:2.5},small:{width:16,height:16,strokeWidth:2},medium:{width:24,height:24,strokeWidth:1.5},large:{width:32,height:32,strokeWidth:1.5},"x-large":{width:40,height:40,strokeWidth:1.5},"2x-large":{width:64,height:64,strokeWidth:1.5}},this.svgModules=Object.assign({"./vuesax/bold/add-circle.svg":()=>e.A(458702).then(e=>e.default),"./vuesax/bold/add-square.svg":()=>e.A(900782).then(e=>e.default),"./vuesax/bold/add.svg":()=>e.A(317855).then(e=>e.default),"./vuesax/bold/attach-square.svg":()=>e.A(709039).then(e=>e.default),"./vuesax/bold/buy-crypto.svg":()=>e.A(184739).then(e=>e.default),"./vuesax/bold/close-circle.svg":()=>e.A(375714).then(e=>e.default),"./vuesax/bold/close-square.svg":()=>e.A(284284).then(e=>e.default),"./vuesax/bold/cloud.svg":()=>e.A(548602).then(e=>e.default),"./vuesax/bold/danger.svg":()=>e.A(887368).then(e=>e.default),"./vuesax/bold/element-3.svg":()=>e.A(241650).then(e=>e.default),"./vuesax/bold/eye-slash.svg":()=>e.A(254234).then(e=>e.default),"./vuesax/bold/eye.svg":()=>e.A(368634).then(e=>e.default),"./vuesax/bold/flash.svg":()=>e.A(135543).then(e=>e.default),"./vuesax/bold/gallery.svg":()=>e.A(483439).then(e=>e.default),"./vuesax/bold/grid-1.svg":()=>e.A(499741).then(e=>e.default),"./vuesax/bold/grid-2.svg":()=>e.A(594404).then(e=>e.default),"./vuesax/bold/grid-3.svg":()=>e.A(195105).then(e=>e.default),"./vuesax/bold/grid-edit.svg":()=>e.A(292737).then(e=>e.default),"./vuesax/bold/info-circle.svg":()=>e.A(368452).then(e=>e.default),"./vuesax/bold/information.svg":()=>e.A(974761).then(e=>e.default),"./vuesax/bold/link.svg":()=>e.A(392247).then(e=>e.default),"./vuesax/bold/minus-cirlce.svg":()=>e.A(786056).then(e=>e.default),"./vuesax/bold/minus-square.svg":()=>e.A(880053).then(e=>e.default),"./vuesax/bold/minus.svg":()=>e.A(348494).then(e=>e.default),"./vuesax/bold/moon.svg":()=>e.A(378675).then(e=>e.default),"./vuesax/bold/row-vertical.svg":()=>e.A(235288).then(e=>e.default),"./vuesax/bold/smallcaps.svg":()=>e.A(115298).then(e=>e.default),"./vuesax/bold/sun.svg":()=>e.A(780239).then(e=>e.default),"./vuesax/bold/task.svg":()=>e.A(120269).then(e=>e.default),"./vuesax/bold/text-bold.svg":()=>e.A(275953).then(e=>e.default),"./vuesax/bold/text-italic.svg":()=>e.A(239864).then(e=>e.default),"./vuesax/bold/textalign-center.svg":()=>e.A(386399).then(e=>e.default),"./vuesax/bold/textalign-justifycenter.svg":()=>e.A(937089).then(e=>e.default),"./vuesax/bold/textalign-left.svg":()=>e.A(31109).then(e=>e.default),"./vuesax/bold/textalign-right.svg":()=>e.A(942256).then(e=>e.default),"./vuesax/bold/tick-circle.svg":()=>e.A(59098).then(e=>e.default),"./vuesax/bold/tick-square.svg":()=>e.A(938255).then(e=>e.default),"./vuesax/bold/verify.svg":()=>e.A(796529).then(e=>e.default),"./vuesax/bold/warning-2.svg":()=>e.A(241758).then(e=>e.default),"./vuesax/broken/add-circle.svg":()=>e.A(49992).then(e=>e.default),"./vuesax/broken/add-square.svg":()=>e.A(969360).then(e=>e.default),"./vuesax/broken/add.svg":()=>e.A(393901).then(e=>e.default),"./vuesax/broken/attach-square.svg":()=>e.A(293816).then(e=>e.default),"./vuesax/broken/buy-crypto.svg":()=>e.A(756500).then(e=>e.default),"./vuesax/broken/close-circle.svg":()=>e.A(423366).then(e=>e.default),"./vuesax/broken/close-square.svg":()=>e.A(45300).then(e=>e.default),"./vuesax/broken/cloud.svg":()=>e.A(291497).then(e=>e.default),"./vuesax/broken/danger.svg":()=>e.A(319283).then(e=>e.default),"./vuesax/broken/element-3.svg":()=>e.A(667157).then(e=>e.default),"./vuesax/broken/eye-slash.svg":()=>e.A(863474).then(e=>e.default),"./vuesax/broken/eye.svg":()=>e.A(382673).then(e=>e.default),"./vuesax/broken/flash.svg":()=>e.A(117997).then(e=>e.default),"./vuesax/broken/gallery.svg":()=>e.A(212093).then(e=>e.default),"./vuesax/broken/grid-1.svg":()=>e.A(744883).then(e=>e.default),"./vuesax/broken/grid-2.svg":()=>e.A(209949).then(e=>e.default),"./vuesax/broken/grid-3.svg":()=>e.A(568427).then(e=>e.default),"./vuesax/broken/grid-edit.svg":()=>e.A(290274).then(e=>e.default),"./vuesax/broken/info-circle.svg":()=>e.A(428360).then(e=>e.default),"./vuesax/broken/information.svg":()=>e.A(594349).then(e=>e.default),"./vuesax/broken/link.svg":()=>e.A(608473).then(e=>e.default),"./vuesax/broken/minus-cirlce.svg":()=>e.A(531402).then(e=>e.default),"./vuesax/broken/minus-square.svg":()=>e.A(599102).then(e=>e.default),"./vuesax/broken/minus.svg":()=>e.A(811616).then(e=>e.default),"./vuesax/broken/moon.svg":()=>e.A(396153).then(e=>e.default),"./vuesax/broken/row-vertical.svg":()=>e.A(164920).then(e=>e.default),"./vuesax/broken/smallcaps.svg":()=>e.A(462082).then(e=>e.default),"./vuesax/broken/sun.svg":()=>e.A(455646).then(e=>e.default),"./vuesax/broken/task.svg":()=>e.A(848653).then(e=>e.default),"./vuesax/broken/text-bold.svg":()=>e.A(92439).then(e=>e.default),"./vuesax/broken/text-italic.svg":()=>e.A(582005).then(e=>e.default),"./vuesax/broken/textalign-center.svg":()=>e.A(829556).then(e=>e.default),"./vuesax/broken/textalign-justifycenter.svg":()=>e.A(813782).then(e=>e.default),"./vuesax/broken/textalign-left.svg":()=>e.A(822420).then(e=>e.default),"./vuesax/broken/textalign-right.svg":()=>e.A(346242).then(e=>e.default),"./vuesax/broken/tick-circle.svg":()=>e.A(616456).then(e=>e.default),"./vuesax/broken/tick-square.svg":()=>e.A(469253).then(e=>e.default),"./vuesax/broken/verify.svg":()=>e.A(164553).then(e=>e.default),"./vuesax/broken/warning-2.svg":()=>e.A(832148).then(e=>e.default),"./vuesax/bulk/add-circle.svg":()=>e.A(733224).then(e=>e.default),"./vuesax/bulk/add-square.svg":()=>e.A(769768).then(e=>e.default),"./vuesax/bulk/add.svg":()=>e.A(528406).then(e=>e.default),"./vuesax/bulk/attach-square.svg":()=>e.A(91404).then(e=>e.default),"./vuesax/bulk/buy-crypto.svg":()=>e.A(100860).then(e=>e.default),"./vuesax/bulk/close-circle.svg":()=>e.A(416678).then(e=>e.default),"./vuesax/bulk/close-square.svg":()=>e.A(40654).then(e=>e.default),"./vuesax/bulk/cloud.svg":()=>e.A(835574).then(e=>e.default),"./vuesax/bulk/danger.svg":()=>e.A(472109).then(e=>e.default),"./vuesax/bulk/element-3.svg":()=>e.A(236821).then(e=>e.default),"./vuesax/bulk/eye-slash.svg":()=>e.A(920580).then(e=>e.default),"./vuesax/bulk/flash.svg":()=>e.A(732391).then(e=>e.default),"./vuesax/bulk/frame.svg":()=>e.A(604811).then(e=>e.default),"./vuesax/bulk/gallery.svg":()=>e.A(48562).then(e=>e.default),"./vuesax/bulk/grid-1.svg":()=>e.A(68651).then(e=>e.default),"./vuesax/bulk/grid-2.svg":()=>e.A(285554).then(e=>e.default),"./vuesax/bulk/grid-3.svg":()=>e.A(874129).then(e=>e.default),"./vuesax/bulk/grid-edit.svg":()=>e.A(142252).then(e=>e.default),"./vuesax/bulk/info-circle.svg":()=>e.A(347483).then(e=>e.default),"./vuesax/bulk/information.svg":()=>e.A(465273).then(e=>e.default),"./vuesax/bulk/link.svg":()=>e.A(417365).then(e=>e.default),"./vuesax/bulk/minus-cirlce.svg":()=>e.A(774152).then(e=>e.default),"./vuesax/bulk/minus-square.svg":()=>e.A(231636).then(e=>e.default),"./vuesax/bulk/minus.svg":()=>e.A(993722).then(e=>e.default),"./vuesax/bulk/moon.svg":()=>e.A(404749).then(e=>e.default),"./vuesax/bulk/row-vertical.svg":()=>e.A(52555).then(e=>e.default),"./vuesax/bulk/smallcaps.svg":()=>e.A(482582).then(e=>e.default),"./vuesax/bulk/sun.svg":()=>e.A(119329).then(e=>e.default),"./vuesax/bulk/task.svg":()=>e.A(180543).then(e=>e.default),"./vuesax/bulk/text-bold.svg":()=>e.A(151346).then(e=>e.default),"./vuesax/bulk/text-italic.svg":()=>e.A(606342).then(e=>e.default),"./vuesax/bulk/textalign-center.svg":()=>e.A(978792).then(e=>e.default),"./vuesax/bulk/textalign-justifycenter.svg":()=>e.A(96461).then(e=>e.default),"./vuesax/bulk/textalign-left.svg":()=>e.A(22636).then(e=>e.default),"./vuesax/bulk/textalign-right.svg":()=>e.A(985184).then(e=>e.default),"./vuesax/bulk/tick-circle.svg":()=>e.A(818552).then(e=>e.default),"./vuesax/bulk/tick-square.svg":()=>e.A(350911).then(e=>e.default),"./vuesax/bulk/verify.svg":()=>e.A(31043).then(e=>e.default),"./vuesax/bulk/warning-2.svg":()=>e.A(391014).then(e=>e.default),"./vuesax/linear/add-circle.svg":()=>e.A(539990).then(e=>e.default),"./vuesax/linear/add-square.svg":()=>e.A(787535).then(e=>e.default),"./vuesax/linear/add.svg":()=>e.A(981975).then(e=>e.default),"./vuesax/linear/attach-square.svg":()=>e.A(130777).then(e=>e.default),"./vuesax/linear/buy-crypto.svg":()=>e.A(81013).then(e=>e.default),"./vuesax/linear/close-circle.svg":()=>e.A(881859).then(e=>e.default),"./vuesax/linear/close-square.svg":()=>e.A(123884).then(e=>e.default),"./vuesax/linear/cloud.svg":()=>e.A(285605).then(e=>e.default),"./vuesax/linear/danger.svg":()=>e.A(232075).then(e=>e.default),"./vuesax/linear/element-3.svg":()=>e.A(717997).then(e=>e.default),"./vuesax/linear/eye-slash.svg":()=>e.A(905143).then(e=>e.default),"./vuesax/linear/eye.svg":()=>e.A(975047).then(e=>e.default),"./vuesax/linear/flash.svg":()=>e.A(820947).then(e=>e.default),"./vuesax/linear/gallery.svg":()=>e.A(791205).then(e=>e.default),"./vuesax/linear/grid-1.svg":()=>e.A(69816).then(e=>e.default),"./vuesax/linear/grid-2.svg":()=>e.A(327723).then(e=>e.default),"./vuesax/linear/grid-3.svg":()=>e.A(867637).then(e=>e.default),"./vuesax/linear/grid-edit.svg":()=>e.A(414429).then(e=>e.default),"./vuesax/linear/info-circle.svg":()=>e.A(684111).then(e=>e.default),"./vuesax/linear/information.svg":()=>e.A(223929).then(e=>e.default),"./vuesax/linear/link.svg":()=>e.A(882489).then(e=>e.default),"./vuesax/linear/minus-cirlce.svg":()=>e.A(106496).then(e=>e.default),"./vuesax/linear/minus-square.svg":()=>e.A(705087).then(e=>e.default),"./vuesax/linear/minus.svg":()=>e.A(655988).then(e=>e.default),"./vuesax/linear/moon.svg":()=>e.A(530802).then(e=>e.default),"./vuesax/linear/row-vertical.svg":()=>e.A(402797).then(e=>e.default),"./vuesax/linear/smallcaps.svg":()=>e.A(571831).then(e=>e.default),"./vuesax/linear/sun.svg":()=>e.A(551483).then(e=>e.default),"./vuesax/linear/task.svg":()=>e.A(958918).then(e=>e.default),"./vuesax/linear/text-bold.svg":()=>e.A(709449).then(e=>e.default),"./vuesax/linear/text-italic.svg":()=>e.A(635077).then(e=>e.default),"./vuesax/linear/textalign-center.svg":()=>e.A(178952).then(e=>e.default),"./vuesax/linear/textalign-justifycenter.svg":()=>e.A(464237).then(e=>e.default),"./vuesax/linear/textalign-left.svg":()=>e.A(225210).then(e=>e.default),"./vuesax/linear/textalign-right.svg":()=>e.A(421705).then(e=>e.default),"./vuesax/linear/tick-circle.svg":()=>e.A(128707).then(e=>e.default),"./vuesax/linear/tick-square.svg":()=>e.A(21449).then(e=>e.default),"./vuesax/linear/verify.svg":()=>e.A(500732).then(e=>e.default),"./vuesax/linear/warning-2.svg":()=>e.A(42295).then(e=>e.default),"./vuesax/outline/add-circle.svg":()=>e.A(599638).then(e=>e.default),"./vuesax/outline/add-square.svg":()=>e.A(586497).then(e=>e.default),"./vuesax/outline/add.svg":()=>e.A(572375).then(e=>e.default),"./vuesax/outline/attach-square.svg":()=>e.A(690162).then(e=>e.default),"./vuesax/outline/buy-crypto.svg":()=>e.A(119627).then(e=>e.default),"./vuesax/outline/close-circle.svg":()=>e.A(661174).then(e=>e.default),"./vuesax/outline/close-square.svg":()=>e.A(953164).then(e=>e.default),"./vuesax/outline/cloud.svg":()=>e.A(946853).then(e=>e.default),"./vuesax/outline/danger.svg":()=>e.A(868327).then(e=>e.default),"./vuesax/outline/element-3.svg":()=>e.A(252172).then(e=>e.default),"./vuesax/outline/eye-slash.svg":()=>e.A(119902).then(e=>e.default),"./vuesax/outline/eye.svg":()=>e.A(584290).then(e=>e.default),"./vuesax/outline/flash.svg":()=>e.A(265084).then(e=>e.default),"./vuesax/outline/gallery.svg":()=>e.A(904984).then(e=>e.default),"./vuesax/outline/grid-1.svg":()=>e.A(26421).then(e=>e.default),"./vuesax/outline/grid-2.svg":()=>e.A(138488).then(e=>e.default),"./vuesax/outline/grid-3.svg":()=>e.A(33491).then(e=>e.default),"./vuesax/outline/grid-edit.svg":()=>e.A(516427).then(e=>e.default),"./vuesax/outline/info-circle.svg":()=>e.A(919932).then(e=>e.default),"./vuesax/outline/information.svg":()=>e.A(803442).then(e=>e.default),"./vuesax/outline/link.svg":()=>e.A(717215).then(e=>e.default),"./vuesax/outline/minus-cirlce.svg":()=>e.A(112716).then(e=>e.default),"./vuesax/outline/minus-square.svg":()=>e.A(891809).then(e=>e.default),"./vuesax/outline/minus.svg":()=>e.A(929514).then(e=>e.default),"./vuesax/outline/moon.svg":()=>e.A(754005).then(e=>e.default),"./vuesax/outline/row-vertical.svg":()=>e.A(351429).then(e=>e.default),"./vuesax/outline/smallcaps.svg":()=>e.A(402999).then(e=>e.default),"./vuesax/outline/sun.svg":()=>e.A(153193).then(e=>e.default),"./vuesax/outline/task.svg":()=>e.A(504335).then(e=>e.default),"./vuesax/outline/text-bold.svg":()=>e.A(445135).then(e=>e.default),"./vuesax/outline/text-italic.svg":()=>e.A(764542).then(e=>e.default),"./vuesax/outline/textalign-center.svg":()=>e.A(367437).then(e=>e.default),"./vuesax/outline/textalign-justifycenter.svg":()=>e.A(628210).then(e=>e.default),"./vuesax/outline/textalign-left.svg":()=>e.A(632911).then(e=>e.default),"./vuesax/outline/textalign-right.svg":()=>e.A(44994).then(e=>e.default),"./vuesax/outline/tick-circle.svg":()=>e.A(429450).then(e=>e.default),"./vuesax/outline/tick-square.svg":()=>e.A(834744).then(e=>e.default),"./vuesax/outline/verify.svg":()=>e.A(89196).then(e=>e.default),"./vuesax/outline/warning-2.svg":()=>e.A(492159).then(e=>e.default),"./vuesax/twotone/add-circle.svg":()=>e.A(245001).then(e=>e.default),"./vuesax/twotone/add-square.svg":()=>e.A(289253).then(e=>e.default),"./vuesax/twotone/add.svg":()=>e.A(555584).then(e=>e.default),"./vuesax/twotone/attach-square.svg":()=>e.A(571277).then(e=>e.default),"./vuesax/twotone/buy-crypto.svg":()=>e.A(802249).then(e=>e.default),"./vuesax/twotone/close-circle.svg":()=>e.A(506443).then(e=>e.default),"./vuesax/twotone/close-square.svg":()=>e.A(896240).then(e=>e.default),"./vuesax/twotone/cloud.svg":()=>e.A(293464).then(e=>e.default),"./vuesax/twotone/danger.svg":()=>e.A(529787).then(e=>e.default),"./vuesax/twotone/element-3.svg":()=>e.A(463501).then(e=>e.default),"./vuesax/twotone/eye-slash.svg":()=>e.A(265721).then(e=>e.default),"./vuesax/twotone/eye.svg":()=>e.A(174586).then(e=>e.default),"./vuesax/twotone/flash.svg":()=>e.A(586741).then(e=>e.default),"./vuesax/twotone/gallery.svg":()=>e.A(121749).then(e=>e.default),"./vuesax/twotone/grid-1.svg":()=>e.A(530923).then(e=>e.default),"./vuesax/twotone/grid-2.svg":()=>e.A(853009).then(e=>e.default),"./vuesax/twotone/grid-3.svg":()=>e.A(783123).then(e=>e.default),"./vuesax/twotone/grid-edit.svg":()=>e.A(943669).then(e=>e.default),"./vuesax/twotone/info-circle.svg":()=>e.A(747120).then(e=>e.default),"./vuesax/twotone/information.svg":()=>e.A(878662).then(e=>e.default),"./vuesax/twotone/link.svg":()=>e.A(284295).then(e=>e.default),"./vuesax/twotone/minus-cirlce.svg":()=>e.A(632647).then(e=>e.default),"./vuesax/twotone/minus-square.svg":()=>e.A(190327).then(e=>e.default),"./vuesax/twotone/minus.svg":()=>e.A(605536).then(e=>e.default),"./vuesax/twotone/moon.svg":()=>e.A(664680).then(e=>e.default),"./vuesax/twotone/row-vertical.svg":()=>e.A(53358).then(e=>e.default),"./vuesax/twotone/smallcaps.svg":()=>e.A(47536).then(e=>e.default),"./vuesax/twotone/sun.svg":()=>e.A(528152).then(e=>e.default),"./vuesax/twotone/task.svg":()=>e.A(630318).then(e=>e.default),"./vuesax/twotone/text-bold.svg":()=>e.A(156706).then(e=>e.default),"./vuesax/twotone/text-italic.svg":()=>e.A(111814).then(e=>e.default),"./vuesax/twotone/textalign-center.svg":()=>e.A(966992).then(e=>e.default),"./vuesax/twotone/textalign-justifycenter.svg":()=>e.A(395945).then(e=>e.default),"./vuesax/twotone/textalign-left.svg":()=>e.A(67194).then(e=>e.default),"./vuesax/twotone/textalign-right.svg":()=>e.A(723781).then(e=>e.default),"./vuesax/twotone/tick-circle.svg":()=>e.A(500802).then(e=>e.default),"./vuesax/twotone/tick-square.svg":()=>e.A(137357).then(e=>e.default),"./vuesax/twotone/verify.svg":()=>e.A(332527).then(e=>e.default),"./vuesax/twotone/warning-2.svg":()=>e.A(72990).then(e=>e.default)})}async loadSvg(e,t,r){try{let n=`./${e}/${t}/${r}.svg`,o=this.svgModules[n];if(o)return await o();throw Error(`SVG module not found: ${n}`)}catch(n){return console.warn(`Failed to load SVG: ${e}/${t}/${r}.svg`,n),""}}processVuesaxSvg(e){if(!e)return"";let t=this.sizes[this.size];if(!t)return e;let r=e.replace(/width\s*=\s*["'][^"']*["']/g,`width="${t.width}"`).replace(/height\s*=\s*["'][^"']*["']/g,`height="${t.height}"`).replace(/stroke-width\s*=\s*["'][^"']*["']/g,`stroke-width="${t.strokeWidth}"`),n=`width: ${t.width}px; height: ${t.height}px; display: block;`;return r=r.includes("style=")?r.replace(/style\s*=\s*["']([^"']*)["']/g,`style="${n} $1"`):r.replace(/<svg([^>]*)>/,`<svg$1 style="${n}">`),this.color&&((r=r.replace(/#0C0507/g,`var(--${this.color})`)).includes("<style>")||(r=r.replace(/<svg([^>]*)>/,`<svg$1><style>* { color: var(--${this.color}); }</style>`))),this.secondaryColor&&!r.includes("<style>")&&(r=r.replace(/<svg([^>]*)>/,`<svg$1><style>.secondary { color: var(--${this.secondaryColor}); }</style>`)),r}willUpdate(e){super.willUpdate(e),"vuesax"!==this.pack||this.variant||(this.variant="linear")}async updated(e){if(super.updated(e),void 0===this.pack&&this.variant&&(this.variant=void 0),"vuesax"===this.pack){if(e.has("name")||e.has("pack")||e.has("variant")){let e=`${this.pack}/${this.variant}/${this.name}`;this.lastAttemptedKey=e,this.failedLoadAttempt=!1;let t=await this.loadSvg(this.pack,this.variant,this.name);this.svgContent=t,t||(this.failedLoadAttempt=!0),this.requestUpdate()}this.svgContent&&(e.has("color")||e.has("secondaryColor")||e.has("size"))&&this.requestUpdate()}}wrapColor(e,t){return`${t}, var(--${e})`}render(){this.color||(this.color=v),this.size||(this.size=m);let e=this.sizes[this.size];if(!e)return console.warn(`Size ${this.size} not found`),t.html``;let r=this.wrapColor(this.color,"lukso-icon-color"),n=this.secondaryColor?this.wrapColor(this.secondaryColor,"lukso-icon-secondary-color"):void 0;if("vuesax"===this.pack){if(!this.svgContent)return this.failedLoadAttempt?t.html`<!-- Failed to load SVG. -->`:(this.loadSvg(this.pack,this.variant,this.name).then(e=>{this.svgContent=e,e||(this.failedLoadAttempt=!0),this.requestUpdate()}),t.html`<!-- Loading SVG... -->`);let e=this.processVuesaxSvg(this.svgContent);return e?t.html`${i(e)}`:t.html`<!-- SVG not found -->`}if(!this.pack){let o=x[this.name];return o?t.html`
        ${o({width:e.width,height:e.height,color:r,strokeWidth:e.strokeWidth,secondaryColor:n})}
      `:(console.warn(`Icon ${this.name} not found`),t.html``)}return console.warn(`Icon pack ${this.pack} not found. `),t.html``}};u([(0,r.property)({type:String,reflect:!0})],C.prototype,"name",2),u([(0,r.property)({type:String,reflect:!0})],C.prototype,"size",2),u([(0,r.property)({type:String,reflect:!0})],C.prototype,"color",2),u([(0,r.property)({type:String,attribute:"secondary-color",reflect:!0})],C.prototype,"secondaryColor",2),u([(0,r.property)({type:String,reflect:!0})],C.prototype,"pack",2),u([(0,r.property)({type:String,reflect:!0})],C.prototype,"variant",2),u([(0,r.property)({type:String})],C.prototype,"svgContent",2),C=u([(0,a.safeCustomElement)("lukso-icon")],C),e.s(["LuksoIcon",()=>C],708874)},453373,e=>{"use strict";e.s(["default",()=>":host {\n  display: flex;\n}\n"])},123287,648722,e=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,n,o,i=/^\s+/,a=/\s+$/;function s(e,r){if(r=r||{},(e=e||"")instanceof s)return e;if(!(this instanceof s))return new s(e,r);var n,o,l,h,d,p,c,w,g,f,u,x,v,m,C,k,b,y,$,L,H=(o={r:0,g:0,b:0},l=1,h=null,d=null,p=null,c=!1,w=!1,"string"==typeof(n=e)&&(n=function(e){e=e.replace(i,"").replace(a,"").toLowerCase();var t,r=!1;if(_[e])e=_[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=E.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=E.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=E.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=E.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=E.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=E.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=E.hex8.exec(e))?{r:A(t[1]),g:A(t[2]),b:A(t[3]),a:A(t[4])/255,format:r?"name":"hex8"}:(t=E.hex6.exec(e))?{r:A(t[1]),g:A(t[2]),b:A(t[3]),format:r?"name":"hex"}:(t=E.hex4.exec(e))?{r:A(t[1]+""+t[1]),g:A(t[2]+""+t[2]),b:A(t[3]+""+t[3]),a:A(t[4]+""+t[4])/255,format:r?"name":"hex8"}:!!(t=E.hex3.exec(e))&&{r:A(t[1]+""+t[1]),g:A(t[2]+""+t[2]),b:A(t[3]+""+t[3]),format:r?"name":"hex"}}(n)),"object"==t(n)&&(F(n.r)&&F(n.g)&&F(n.b)?(g=n.r,f=n.g,u=n.b,o={r:255*B(g,255),g:255*B(f,255),b:255*B(u,255)},c=!0,w="%"===String(n.r).substr(-1)?"prgb":"rgb"):F(n.h)&&F(n.s)&&F(n.v)?(h=S(n.s),d=S(n.v),x=n.h,v=h,m=d,x=6*B(x,360),v=B(v,100),m=B(m,100),C=Math.floor(x),k=x-C,b=m*(1-v),y=m*(1-k*v),$=m*(1-(1-k)*v),o={r:255*[m,y,b,b,$,m][L=C%6],g:255*[$,m,m,y,b,b][L],b:255*[b,b,$,m,m,y][L]},c=!0,w="hsv"):F(n.h)&&F(n.s)&&F(n.l)&&(h=S(n.s),p=S(n.l),o=function(e,t,r){var n,o,i;function a(e,t,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?e+(t-e)*6*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=B(e,360),t=B(t,100),r=B(r,100),0===t)n=o=i=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;n=a(l,s,e+1/3),o=a(l,s,e),i=a(l,s,e-1/3)}return{r:255*n,g:255*o,b:255*i}}(n.h,h,p),c=!0,w="hsl"),n.hasOwnProperty("a")&&(l=n.a)),l=M(l),{ok:c,format:n.format||w,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l});this._originalInput=e,this._r=H.r,this._g=H.g,this._b=H.b,this._a=H.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||H.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=H.ok}function l(e,t,r){e=B(e,255);var n,o,i=Math.max(e,t=B(t,255),r=B(r,255)),a=Math.min(e,t,r),s=(i+a)/2;if(i==a)n=o=0;else{var l=i-a;switch(o=s>.5?l/(2-i-a):l/(i+a),i){case e:n=(t-r)/l+6*(t<r);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4}n/=6}return{h:n,s:o,l:s}}function h(e,t,r){e=B(e,255);var n,o=Math.max(e,t=B(t,255),r=B(r,255)),i=Math.min(e,t,r),a=o-i;if(o==i)n=0;else{switch(o){case e:n=(t-r)/a+6*(t<r);break;case t:n=(r-e)/a+2;break;case r:n=(e-t)/a+4}n/=6}return{h:n,s:0===o?0:a/o,v:o}}function d(e,t,r,n){var o=[H(Math.round(e).toString(16)),H(Math.round(t).toString(16)),H(Math.round(r).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function p(e,t,r,n){return[H(V(n)),H(Math.round(e).toString(16)),H(Math.round(t).toString(16)),H(Math.round(r).toString(16))].join("")}function c(e,t){t=0===t?0:t||10;var r=s(e).toHsl();return r.s-=t/100,r.s=L(r.s),s(r)}function w(e,t){t=0===t?0:t||10;var r=s(e).toHsl();return r.s+=t/100,r.s=L(r.s),s(r)}function g(e){return s(e).desaturate(100)}function f(e,t){t=0===t?0:t||10;var r=s(e).toHsl();return r.l+=t/100,r.l=L(r.l),s(r)}function u(e,t){t=0===t?0:t||10;var r=s(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-(t/100*255)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-(t/100*255)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-(t/100*255)))),s(r)}function x(e,t){t=0===t?0:t||10;var r=s(e).toHsl();return r.l-=t/100,r.l=L(r.l),s(r)}function v(e,t){var r=s(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,s(r)}function m(e){var t=s(e).toHsl();return t.h=(t.h+180)%360,s(t)}function C(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var r=s(e).toHsl(),n=[s(e)],o=360/t,i=1;i<t;i++)n.push(s({h:(r.h+i*o)%360,s:r.s,l:r.l}));return n}function k(e){var t=s(e).toHsl(),r=t.h;return[s(e),s({h:(r+72)%360,s:t.s,l:t.l}),s({h:(r+216)%360,s:t.s,l:t.l})]}function b(e,t,r){t=t||6,r=r||30;var n=s(e).toHsl(),o=360/r,i=[s(e)];for(n.h=(n.h-(o*t>>1)+720)%360;--t;)n.h=(n.h+o)%360,i.push(s(n));return i}function y(e,t){t=t||6;for(var r=s(e).toHsv(),n=r.h,o=r.s,i=r.v,a=[],l=1/t;t--;)a.push(s({h:n,s:o,v:i})),i=(i+l)%1;return a}s.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((r=n.b/255)<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=M(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=h(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=h(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=l(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=l(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return d(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,r,n,o,i,a;return t=this._r,r=this._g,n=this._b,o=this._a,i=e,a=[H(Math.round(t).toString(16)),H(Math.round(r).toString(16)),H(Math.round(n).toString(16)),H(V(o))],i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*B(this._r,255))+"%",g:Math.round(100*B(this._g,255))+"%",b:Math.round(100*B(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*B(this._r,255))+"%, "+Math.round(100*B(this._g,255))+"%, "+Math.round(100*B(this._b,255))+"%)":"rgba("+Math.round(100*B(this._r,255))+"%, "+Math.round(100*B(this._g,255))+"%, "+Math.round(100*B(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&($[d(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+p(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var o=s(e);r="#"+p(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return!t&&n&&("hex"===e||"hex6"===e||"hex3"===e||"hex4"===e||"hex8"===e||"name"===e)?"name"===e&&0===this._a?this.toName():this.toRgbString():("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return s(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(f,arguments)},brighten:function(){return this._applyModification(u,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(w,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(b,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(y,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(C,[3])},tetrad:function(){return this._applyCombination(C,[4])}},s.fromRatio=function(e,r){if("object"==t(e)){var n={};for(var o in e)e.hasOwnProperty(o)&&("a"===o?n[o]=e[o]:n[o]=S(e[o]));e=n}return s(e,r)},s.equals=function(e,t){return!!e&&!!t&&s(e).toRgbString()==s(t).toRgbString()},s.random=function(){return s.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},s.mix=function(e,t,r){r=0===r?0:r||50;var n=s(e).toRgb(),o=s(t).toRgb(),i=r/100;return s({r:(o.r-n.r)*i+n.r,g:(o.g-n.g)*i+n.g,b:(o.b-n.b)*i+n.b,a:(o.a-n.a)*i+n.a})},s.readability=function(e,t){var r=s(e),n=s(t);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},s.isReadable=function(e,t,r){var n,o,i,a,l,h=s.readability(e,t);switch(l=!1,(o=((n=(n=r)||{level:"AA",size:"small"}).level||"AA").toUpperCase(),i=(n.size||"small").toLowerCase(),"AA"!==o&&"AAA"!==o&&(o="AA"),"small"!==i&&"large"!==i&&(i="small"),a={level:o,size:i}).level+a.size){case"AAsmall":case"AAAlarge":l=h>=4.5;break;case"AAlarge":l=h>=3;break;case"AAAsmall":l=h>=7}return l},s.mostReadable=function(e,t,r){var n,o,i,a,l=null,h=0;o=(r=r||{}).includeFallbackColors,i=r.level,a=r.size;for(var d=0;d<t.length;d++)(n=s.readability(e,t[d]))>h&&(h=n,l=s(t[d]));return s.isReadable(e,l,{level:i,size:a})||!o?l:(r.includeFallbackColors=!1,s.mostReadable(e,["#fff","#000"],r))};var _=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$=s.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(_);function M(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function B(e,t){"string"==typeof(r=e)&&-1!=r.indexOf(".")&&1===parseFloat(r)&&(e="100%");var r,n,o="string"==typeof(n=e)&&-1!=n.indexOf("%");return(e=Math.min(t,Math.max(0,parseFloat(e))),o&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t))?1:e%t/parseFloat(t)}function L(e){return Math.min(1,Math.max(0,e))}function A(e){return parseInt(e,16)}function H(e){return 1==e.length?"0"+e:""+e}function S(e){return e<=1&&(e=100*e+"%"),e}function V(e){return Math.round(255*parseFloat(e)).toString(16)}var E=(n="[\\s|\\(]+("+(r="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",o="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",{CSS_UNIT:new RegExp(r),rgb:RegExp("rgb"+n),rgba:RegExp("rgba"+o),hsl:RegExp("hsl"+n),hsla:RegExp("hsla"+o),hsv:RegExp("hsv"+n),hsva:RegExp("hsva"+o),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function F(e){return!!E.CSS_UNIT.exec(e)}e.s(["default",()=>s],123287);var Z=e.i(919056),G=e.i(207670);let I=(e,t,r)=>{let n={};for(let o=0;o<r.length;o++){let i=r[o];n[i]=s({h:e,s:t,l:i}).toHexString()}return n},j={neutral:I(206,30,[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,97,98,100]),honey:I(42,93,[72,75,82,85,92]),coral:I(14,87,[65,74,75,84,85,94]),warm:I(25,100,[77,87,97]),"sea-salt":I(180,17,[57,67,88]),cloud:I(200,38,[43,75,88]),ocean:I(209,38,[38,75,88]),sky:I(209,64,[64,75,85]),lukso:I(335,33,[50,60,70,80,90]),yellow:I(36,100,[25,55,65,75,85,95]),green:I(135,57,[45,54,63,75,85,95]),blue:I(216,96,[40,50,60,75,85,95]),red:I(0,75,[55,65,75,85,95]),purple:I(230,24,[94,82,63,58,51,41,31,18,15]),pink:I(11,73,[97,96,95,94,93,92,91,90]),measure:I(327,82,[50,70,80,97]),grey:I(0,0,[80,75,70,65,60,55,50,45,40,35,30,25,20,15,10]),"gradient-1":{start:"#D39B9D",end:"#9071D1"},"gradient-2":{start:"#F8DAD3",end:"#CC99AE"},"gradient-3":{start:s({h:230,s:20,l:28}).toHexString(),end:s({h:230,s:24,l:51}).toHexString()}},T=(e,t,r)=>Object.keys(e).slice(t,r).reduce((t,r)=>(t[r]=e[r],t),{});T(j.neutral,0,8),T(j.neutral,8,16),T(j.neutral,16,Object.keys(j.neutral).length),T(j.grey,0,8),T(j.grey,8,Object.keys(j.grey).length);let W=(0,Z.extendTailwindMerge)({extend:{theme:{color:Object.entries(j).reduce((e,t)=>{let r=Object.keys(t[1]).map(e=>`${t[0]}-${e}`);return e.concat(r)},[])},classGroups:{shadow:[{shadow:["button-medium-hover-primary","button-medium-hover-secondary","button-medium-press-primary","button-medium-press-secondary","button-small-hover-primary","button-small-hover-secondary","button-small-press-primary","button-small-press-secondary","1xl","2xl","3xl","neutral-drop-shadow","neutral-drop-shadow-1xl","neutral-drop-shadow-2xl","neutral-drop-shadow-3xl","pink-drop-shadow","pink-drop-shadow-1xl","pink-drop-shadow-2xl","pink-drop-shadow-3xl","neutral-inner-shadow","neutral-inner-shadow-top","neutral-inner-shadow-1xl","neutral-inner-shadow-2xl","neutral-inner-shadow-3xl","neutral-above-shadow","neutral-above-shadow-1xl","neutral-above-shadow-2xl","neutral-above-shadow-3xl","pink-above-shadow","pink-above-shadow-1xl","pink-above-shadow-2xl","pink-above-shadow-3xl","wizard-step","wizard-line","neutral-shadow-round","neutral-shadow-round-1xl","neutral-shadow-round-2xl","neutral-shadow-round-3xl"].map(e=>`${e}`)}],"font-size":[{text:Object.keys({6:"6px",8:"8px",10:"10px",12:"12px",13:"13px",14:"14px",16:"16px",17:"17px",20:"20px",21:"21px",24:"24px",26:"26px",32:"32px",40:"40px",44:"44px",48:"48px"})}],"font-weight":[{font:Object.keys({100:"100",200:"200",300:"300",400:"400",500:"500",600:"600",700:"700",800:"800",900:"900"})}],rounded:[{rounded:Object.keys({0:"0",2:"2px",4:"4px",6:"6px",8:"8px",10:"10px",12:"12px",14:"14px",16:"16px",24:"24px"})}],scale:[{scale:Object.keys({98:".98"})}],h:[{h:Object.keys({78:"78px"})}],leading:[{leading:Object.keys({10:"10px",12:"12px",14:"14px",15:"15px",17:"17px",19:"19px",20:"20px",22:"22px",24:"24px",26:"26px",28:"28px",31:"31px",32:"32px",38:"38px",40:"40px",48:"48px",58:"58px"})}]}}}),O=(...e)=>W((0,G.clsx)(e));e.s(["cn",()=>O],648722)},627422,e=>{"use strict";e.i(812207);var t=e.i(654479);e.i(374576);var r=e.i(120119),n=e.i(56350),o=e.i(600100),i=e.i(579078),a=e.i(453373);e.i(708874),e.i(123287);var s=e.i(648722),l=Object.defineProperty,h=Object.getOwnPropertyDescriptor,d=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?h(t,r):t,a=e.length-1;a>=0;a--)(o=e[a])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&l(t,r,i),i};let p=null,c={dotsOptions:{color:"#243542",type:"rounded"},backgroundOptions:{color:"#f8fafb"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{margin:5}},w=class extends(0,i.TailwindStyledElement)(a.default){constructor(){super(...arguments),this.value="",this.size=280,this.image=void 0,this.options={},this.customClass=void 0,this.isLoading=!0,this.qrCodeInstance=null}updated(e){super.updated(e),e.has("value")&&this.value&&this.generateQrCode().catch(e=>{console.error("Failed to generate QR code:",e),this.isLoading=!1})}async generateQrCode(){let t=this.shadowRoot?.querySelector(".qr-code-container");if(t){if(this.isLoading=!0,!p)try{p=(await e.A(969579)).default}catch(e){console.error("qr-code-styling not available:",e),this.isLoading=!1;return}this.qrCodeInstance&&(this.qrCodeInstance=null),this.qrCodeInstance=new p({...c,...this.options,width:this.size,height:this.size,type:"svg",data:this.value,image:this.image||void 0}),t.innerHTML="",this.qrCodeInstance.append(t),this.isLoading=!1}}render(){return t.html`
      <div
        class="${(0,s.cn)(`relative flex items-center justify-center ${this.customClass}`)}"
      >
        <div
          class="qr-code-container flex items-center justify-center"
          style="min-height: ${this.size}px; min-width: ${this.size}px"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          ${this.isLoading?t.html`<div
                class="flex items-center justify-center"
                style="min-height: ${this.size}px"
              >
                <lukso-icon
                  name="progress-indicator-alt"
                  size="x-large"
                ></lukso-icon>
              </div>`:t.html`<slot></slot>`}
        </div>
      </div>
    `}};d([(0,r.property)({type:String,reflect:!0})],w.prototype,"value",2),d([(0,r.property)({type:Number,reflect:!0})],w.prototype,"size",2),d([(0,r.property)({type:String,reflect:!0})],w.prototype,"image",2),d([(0,r.property)({type:Object})],w.prototype,"options",2),d([(0,r.property)({type:String,attribute:"custom-class",reflect:!0})],w.prototype,"customClass",2),d([(0,n.state)()],w.prototype,"isLoading",2),w=d([(0,o.safeCustomElement)("lukso-qr-code")],w),e.s(["LuksoQrCode",()=>w])}]);