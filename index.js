const _0x4fd444=_0x2dd7;(function(_0x18e8d3,_0x32cdaf){const _0x531d74=_0x2dd7,_0x2c89da=_0x18e8d3();while(!![]){try{const _0x3eef40=parseInt(_0x531d74(0x1f4))/0x1*(-parseInt(_0x531d74(0x20a))/0x2)+parseInt(_0x531d74(0x1fb))/0x3*(-parseInt(_0x531d74(0x20c))/0x4)+parseInt(_0x531d74(0x1f2))/0x5+parseInt(_0x531d74(0x20f))/0x6*(-parseInt(_0x531d74(0x229))/0x7)+parseInt(_0x531d74(0x221))/0x8+-parseInt(_0x531d74(0x22f))/0x9+parseInt(_0x531d74(0x1fd))/0xa;if(_0x3eef40===_0x32cdaf)break;else _0x2c89da['push'](_0x2c89da['shift']());}catch(_0x30e7e0){_0x2c89da['push'](_0x2c89da['shift']());}}}(_0x1b65,0xc69bc));const sessionName=_0x4fd444(0x22b),{default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidDecode,fetchLatestBaileysVersion,downloadContentFromMessage,makeCacheableSignalKeyStore,makeInMemoryStore,getContentType,PHONENUMBER_MCC,getAggregateVotesInPollMessage}=require(_0x4fd444(0x1e7)),owner=_0x4fd444(0x21a),pino=require(_0x4fd444(0x1f3)),fs=require('fs'),qrcode=require(_0x4fd444(0x218)),chalk=require('chalk'),{say}=require(_0x4fd444(0x1f1)),NodeCache=require(_0x4fd444(0x232)),readline=require(_0x4fd444(0x206)),usePairingCode=!![],useMobile=![],useStore=![],MAIN_LOGGER=pino({'timestamp':()=>_0x4fd444(0x217)+new Date()[_0x4fd444(0x222)]()+'\x22'}),logger=MAIN_LOGGER[_0x4fd444(0x1e9)]({});logger['level']=_0x4fd444(0x1f7);const store=useStore?makeInMemoryStore({'logger':logger}):undefined;store?.[_0x4fd444(0x212)](_0x4fd444(0x201)),setInterval(()=>{const _0x2464ef=_0x4fd444;store?.[_0x2464ef(0x211)](_0x2464ef(0x201));},0x2710*0x6);const msgRetryCounterCache=new NodeCache(),rl=readline[_0x4fd444(0x215)]({'input':process['stdin'],'output':process[_0x4fd444(0x208)]}),question=_0xef0684=>new Promise(_0x159f52=>rl[_0x4fd444(0x1f6)](_0xef0684,_0x159f52)),P=require(_0x4fd444(0x1f3))({'level':_0x4fd444(0x22c)}),stores=makeInMemoryStore({'logger':pino()['child']({'level':'silent','stream':_0x4fd444(0x200)})}),{smsg,await,sleep,getBuffer}=require('./function'),color=(_0xd02b2f,_0x3a62c8)=>{const _0x5d7b64=_0x4fd444;return!_0x3a62c8?chalk[_0x5d7b64(0x205)](_0xd02b2f):chalk['keyword'](_0x3a62c8)(_0xd02b2f);};function _0x2dd7(_0xd1a8ae,_0x5b051e){const _0x1b6565=_0x1b65();return _0x2dd7=function(_0x2dd7e7,_0xbcea7a){_0x2dd7e7=_0x2dd7e7-0x1e7;let _0xac13ac=_0x1b6565[_0x2dd7e7];return _0xac13ac;},_0x2dd7(_0xd1a8ae,_0x5b051e);}function _0x1b65(){const _0x50ed47=['./session/creds.json','254114018035','Pairing\x20code:\x20','loadMessage','reason:','authState','serializeM','Dreaded\x20has\x20been\x20linked\x20to\x20your\x20WhatsApp\x20account!\x20Do\x20not\x20share\x20the\x20document\x20above\x20with\x20anyone.\x20\x0a\x0aUpload\x20it\x20to\x20your\x20github\x20fork\x20in\x20the\x20dreaded1\x20folder\x20before\x20deploy!\x20If\x20already\x20uploaded\x20you\x20can\x20ignore\x20this\x20message.','1647016KorDuw','toJSON','Something\x20went\x20wrong','statusCode','blue','Bot\x20is\x20disconnected','delete','rejectionHandled','14TPXlaK','Copy\x20the\x20above\x20pairing\x20code\x20and\x20use\x20it\x20to\x20link\x20the\x20bot\x20using\x20phone\x20number','session','silent','registered','set','10471797LUHYOR','Caught\x20exception:\x20','connecting','node-cache','message','user','@whiskeysockets/baileys','sendMessage','child','@s.whatsapp.net','catch','Please\x20enter\x20the\x20mobile\x20phone\x20number\x20of\x20the\x20whatsapp\x20account\x20you\x20want\x20to\x20link\x20the\x20bot:\x0a','error','You\x20successfully\x20connected\x20to\x20the\x20WebSocket.','redBright','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','cfonts','4444590asMtpc','pino','1DrDbsm','chrome\x20(linux)','question','trace','exit','remoteJid','using\x20WA\x20v','1284Fqtutp',',\x20isLatest:\x20','31575500vgJtkP','connection.update','close','store','./session','autosw','log','creds.update','green','readline','undefined','stdout','loggedOut','2445812csNUvb','creds','7004hBdLWK','Unhandled\x20Rejection\x20at:','readFileSync','908934HMDiGm','Connecting...','writeToFile','readFromFile','requestPairingCode','mokaya','createInterface','application/json',',\x22time\x22:\x22','qrcode-terminal'];_0x1b65=function(){return _0x50ed47;};return _0x1b65();}async function startDreaded(){const _0x531be5=_0x4fd444,{state:_0x318132,saveCreds:_0x59f333}=await useMultiFileAuthState(sessionName);let {version:_0x4fdd57,isLatest:_0x45ad9f}=await fetchLatestBaileysVersion();console['log'](chalk['redBright'](_0x531be5(0x1fa)+_0x4fdd57['join']('.')+_0x531be5(0x1fc)+_0x45ad9f));const _0x135028=makeWASocket({'version':_0x4fdd57,'logger':P,'printQRInTerminal':!usePairingCode,'mobile':useMobile,'browser':[_0x531be5(0x1f5),'',''],'auth':{'creds':_0x318132[_0x531be5(0x20b)],'keys':makeCacheableSignalKeyStore(_0x318132['keys'],P)},'msgRetryCounterCache':msgRetryCounterCache,'getMessage':async _0x45f326=>{const _0x27486f=_0x531be5;if(store){const _0x4ab907=await store[_0x27486f(0x21c)](_0x45f326[_0x27486f(0x1f9)],_0x45f326['id']);return _0x4ab907[_0x27486f(0x233)]||undefined;}}});store?.['bind'](_0x135028['ev']);if(usePairingCode&&!_0x135028[_0x531be5(0x21e)]['creds'][_0x531be5(0x22d)]){if(useMobile)throw new Error(_0x531be5(0x1f0));const _0xeaf2e1=await question(_0x531be5(0x1ec)),_0x2dd186=await _0x135028[_0x531be5(0x213)](_0xeaf2e1);console[_0x531be5(0x203)](_0x531be5(0x21b)+_0x2dd186),console[_0x531be5(0x203)](chalk['green'](_0x531be5(0x22a)));}const _0x102ba4=new Map();process['on']('unhandledRejection',(_0x265692,_0x9c83a6)=>{const _0x3c0441=_0x531be5;_0x102ba4[_0x3c0441(0x22e)](_0x9c83a6,_0x265692),console['log'](_0x3c0441(0x20d),_0x9c83a6,_0x3c0441(0x21d),_0x265692);}),process['on'](_0x531be5(0x228),_0xcf5d4=>{const _0x3deb38=_0x531be5;_0x102ba4[_0x3deb38(0x227)](_0xcf5d4);}),process['on'](_0x531be5(0x223),function(_0x341570){const _0x26e2ae=_0x531be5;console[_0x26e2ae(0x203)](_0x26e2ae(0x230),_0x341570);}),_0x135028[_0x531be5(0x202)]=!![],_0x135028[_0x531be5(0x214)]=owner+_0x531be5(0x1ea),_0x135028[_0x531be5(0x21f)]=_0x2504fa=>smsg(_0x135028,_0x2504fa,store),_0x135028['ev']['on'](_0x531be5(0x1fe),async _0x242be4=>{const _0x253985=_0x531be5,{connection:_0x5f5d72,lastDisconnect:_0x95eb14,qr:_0x495931}=_0x242be4;_0x95eb14==_0x253985(0x207)&&askForOTP();if(_0x5f5d72===_0x253985(0x231))console['log'](chalk[_0x253985(0x225)](_0x253985(0x210))),console[_0x253985(0x203)]('[DREADED]\x20Bot\x20is\x20linked\x20to\x20WebSocket.');else{if(_0x5f5d72==='open'){console[_0x253985(0x203)](chalk[_0x253985(0x205)](_0x253985(0x1ee))),await _0x135028['sendMessage'](_0x135028[_0x253985(0x214)],{'text':'I\x20am\x20connected\x20to\x20the\x20WebSocket\x20using\x20Dreaded\x20Bot!'});let _0x21be9f=await fs[_0x253985(0x20e)](_0x253985(0x219));await _0x135028['sendMessage'](_0x135028[_0x253985(0x234)]['id'],{'document':_0x21be9f,'fileName':'creds.json','mimetype':_0x253985(0x216)}),_0x135028[_0x253985(0x1e8)](_0x135028[_0x253985(0x234)]['id'],{'text':_0x253985(0x220)});}else _0x5f5d72===_0x253985(0x1ff)&&(_0x95eb14[_0x253985(0x1ed)]['output'][_0x253985(0x224)]==DisconnectReason[_0x253985(0x209)]?(console[_0x253985(0x203)](chalk[_0x253985(0x1ef)]('Disconnected!\x20Check\x20if\x20account\x20is\x20active\x20and\x20retry')),_0x135028[_0x253985(0x1e8)](_0x135028[_0x253985(0x214)],{'text':_0x253985(0x226)}),process[_0x253985(0x1f8)](0x0)):startDreaded()[_0x253985(0x1eb)](()=>startDreaded()));}}),_0x135028['ev']['on'](_0x531be5(0x204),_0x59f333);}startDreaded();
