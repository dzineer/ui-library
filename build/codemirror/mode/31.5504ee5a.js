webpackJsonp([14,19,33],{1001:function(t,e,n){!function(t){t(n(942),n(960),n(948))}(function(t){"use strict";var e=/^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;t.defineMode("gfm",function(n,i){var r=0,a={startState:function(){return{code:!1,codeBlock:!1,ateSpace:!1}},copyState:function(t){return{code:t.code,codeBlock:t.codeBlock,ateSpace:t.ateSpace}},token:function(t,n){if(n.combineTokens=null,n.codeBlock)return t.match(/^```+/)?(n.codeBlock=!1,null):(t.skipToEnd(),null);if(t.sol()&&(n.code=!1),t.sol()&&t.match(/^```+/))return t.skipToEnd(),n.codeBlock=!0,null;if("`"===t.peek()){t.next();var a=t.pos;t.eatWhile("`");var o=1+t.pos-a;return n.code?o===r&&(n.code=!1):(r=o,n.code=!0),null}if(n.code)return t.next(),null;if(t.eatSpace())return n.ateSpace=!0,null;if((t.sol()||n.ateSpace)&&(n.ateSpace=!1,!1!==i.gitHubSpice)){if(t.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))return n.combineTokens=!0,"link";if(t.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))return n.combineTokens=!0,"link"}return t.match(e)&&"]("!=t.string.slice(t.start-2,t.start)&&(0==t.start||/\W/.test(t.string.charAt(t.start-1)))?(n.combineTokens=!0,"link"):(t.next(),null)},blankLine:function blankLine(t){return t.code=!1,null}},o={taskLists:!0,strikethrough:!0,emoji:!0};for(var l in i)o[l]=i[l];return o.name="markdown",t.overlayMode(t.getMode(n,o),a)},"markdown"),t.defineMIME("text/x-gfm","gfm")})},944:function(t,e,n){!function(t){t(n(942))}(function(t){"use strict";var e={autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},implicitlyClosed:{dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0},allowUnquoted:!0,allowMissing:!0,caseFold:!0},n={autoSelfClosers:{},implicitlyClosed:{},contextGrabbers:{},doNotIndent:{},allowUnquoted:!1,allowMissing:!1,caseFold:!1};t.defineMode("xml",function(i,r){function inText(t,e){function chain(n){return e.tokenize=n,n(t,e)}var n=t.next();if("<"==n)return t.eat("!")?t.eat("[")?t.match("CDATA[")?chain(inBlock("atom","]]>")):null:t.match("--")?chain(inBlock("comment","--\x3e")):t.match("DOCTYPE",!0,!0)?(t.eatWhile(/[\w\._\-]/),chain(doctype(1))):null:t.eat("?")?(t.eatWhile(/[\w\._\-]/),e.tokenize=inBlock("meta","?>"),"meta"):(c=t.eat("/")?"closeTag":"openTag",e.tokenize=inTag,"tag bracket");if("&"==n){return(t.eat("#")?t.eat("x")?t.eatWhile(/[a-fA-F\d]/)&&t.eat(";"):t.eatWhile(/[\d]/)&&t.eat(";"):t.eatWhile(/[\w\.\-:]/)&&t.eat(";"))?"atom":"error"}return t.eatWhile(/[^&<]/),null}function inTag(t,e){var n=t.next();if(">"==n||"/"==n&&t.eat(">"))return e.tokenize=inText,c=">"==n?"endTag":"selfcloseTag","tag bracket";if("="==n)return c="equals",null;if("<"==n){e.tokenize=inText,e.state=baseState,e.tagName=e.tagStart=null;var i=e.tokenize(t,e);return i?i+" tag error":"tag error"}return/[\'\"]/.test(n)?(e.tokenize=inAttribute(n),e.stringStartCol=t.column(),e.tokenize(t,e)):(t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),"word")}function inAttribute(t){var e=function(e,n){for(;!e.eol();)if(e.next()==t){n.tokenize=inTag;break}return"string"};return e.isInAttribute=!0,e}function inBlock(t,e){return function(n,i){for(;!n.eol();){if(n.match(e)){i.tokenize=inText;break}n.next()}return t}}function doctype(t){return function(e,n){for(var i;null!=(i=e.next());){if("<"==i)return n.tokenize=doctype(t+1),n.tokenize(e,n);if(">"==i){if(1==t){n.tokenize=inText;break}return n.tokenize=doctype(t-1),n.tokenize(e,n)}}return"meta"}}function Context(t,e,n){this.prev=t.context,this.tagName=e,this.indent=t.indented,this.startOfLine=n,(o.doNotIndent.hasOwnProperty(e)||t.context&&t.context.noIndent)&&(this.noIndent=!0)}function popContext(t){t.context&&(t.context=t.context.prev)}function maybePopContext(t,e){for(var n;;){if(!t.context)return;if(n=t.context.tagName,!o.contextGrabbers.hasOwnProperty(n)||!o.contextGrabbers[n].hasOwnProperty(e))return;popContext(t)}}function baseState(t,e,n){return"openTag"==t?(n.tagStart=e.column(),tagNameState):"closeTag"==t?closeTagNameState:baseState}function tagNameState(t,e,n){return"word"==t?(n.tagName=e.current(),u="tag",attrState):(u="error",tagNameState)}function closeTagNameState(t,e,n){if("word"==t){var i=e.current();return n.context&&n.context.tagName!=i&&o.implicitlyClosed.hasOwnProperty(n.context.tagName)&&popContext(n),n.context&&n.context.tagName==i||!1===o.matchClosing?(u="tag",closeState):(u="tag error",closeStateErr)}return u="error",closeStateErr}function closeState(t,e,n){return"endTag"!=t?(u="error",closeState):(popContext(n),baseState)}function closeStateErr(t,e,n){return u="error",closeState(t,e,n)}function attrState(t,e,n){if("word"==t)return u="attribute",attrEqState;if("endTag"==t||"selfcloseTag"==t){var i=n.tagName,r=n.tagStart;return n.tagName=n.tagStart=null,"selfcloseTag"==t||o.autoSelfClosers.hasOwnProperty(i)?maybePopContext(n,i):(maybePopContext(n,i),n.context=new Context(n,i,r==n.indented)),baseState}return u="error",attrState}function attrEqState(t,e,n){return"equals"==t?attrValueState:(o.allowMissing||(u="error"),attrState(t,e,n))}function attrValueState(t,e,n){return"string"==t?attrContinuedState:"word"==t&&o.allowUnquoted?(u="string",attrState):(u="error",attrState(t,e,n))}function attrContinuedState(t,e,n){return"string"==t?attrContinuedState:attrState(t,e,n)}var a=i.indentUnit,o={},l=r.htmlMode?e:n;for(var s in l)o[s]=l[s];for(var s in r)o[s]=r[s];var c,u;return inText.isInText=!0,{startState:function(t){var e={tokenize:inText,state:baseState,indented:t||0,tagName:null,tagStart:null,context:null};return null!=t&&(e.baseIndent=t),e},token:function(t,e){if(!e.tagName&&t.sol()&&(e.indented=t.indentation()),t.eatSpace())return null;c=null;var n=e.tokenize(t,e);return(n||c)&&"comment"!=n&&(u=null,e.state=e.state(c||n,t,e),u&&(n="error"==u?n+" error":u)),n},indent:function(e,n,i){var r=e.context;if(e.tokenize.isInAttribute)return e.tagStart==e.indented?e.stringStartCol+1:e.indented+a;if(r&&r.noIndent)return t.Pass;if(e.tokenize!=inTag&&e.tokenize!=inText)return i?i.match(/^(\s*)/)[0].length:0;if(e.tagName)return!1!==o.multilineTagIndentPastTag?e.tagStart+e.tagName.length+2:e.tagStart+a*(o.multilineTagIndentFactor||1);if(o.alignCDATA&&/<!\[CDATA\[/.test(n))return 0;var l=n&&/^<(\/)?([\w_:\.-]*)/.exec(n);if(l&&l[1])for(;r;){if(r.tagName==l[2]){r=r.prev;break}if(!o.implicitlyClosed.hasOwnProperty(r.tagName))break;r=r.prev}else if(l)for(;r;){var s=o.contextGrabbers[r.tagName];if(!s||!s.hasOwnProperty(l[2]))break;r=r.prev}for(;r&&r.prev&&!r.startOfLine;)r=r.prev;return r?r.indent+a:e.baseIndent||0},electricInput:/<\/[\s\w:]+>$/,blockCommentStart:"\x3c!--",blockCommentEnd:"--\x3e",configuration:o.htmlMode?"html":"xml",helperType:o.htmlMode?"html":"xml",skipAttribute:function(t){t.state==attrValueState&&(t.state=attrState)}}}),t.defineMIME("text/xml","xml"),t.defineMIME("application/xml","xml"),t.mimeModes.hasOwnProperty("text/html")||t.defineMIME("text/html",{name:"xml",htmlMode:!0})})},948:function(t,e,n){!function(t){t(n(942))}(function(t){"use strict";t.overlayMode=function(e,n,i){return{startState:function(){return{base:t.startState(e),overlay:t.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(i){return{base:t.copyState(e,i.base),overlay:t.copyState(n,i.overlay),basePos:i.basePos,baseCur:null,overlayPos:i.overlayPos,overlayCur:null}},token:function(t,r){return(t!=r.streamSeen||Math.min(r.basePos,r.overlayPos)<t.start)&&(r.streamSeen=t,r.basePos=r.overlayPos=t.start),t.start==r.basePos&&(r.baseCur=e.token(t,r.base),r.basePos=t.pos),t.start==r.overlayPos&&(t.pos=t.start,r.overlayCur=n.token(t,r.overlay),r.overlayPos=t.pos),t.pos=Math.min(r.basePos,r.overlayPos),null==r.overlayCur?r.baseCur:null!=r.baseCur&&r.overlay.combineTokens||i&&null==r.overlay.combineTokens?r.baseCur+" "+r.overlayCur:r.overlayCur},indent:e.indent&&function(t,n){return e.indent(t.base,n)},electricChars:e.electricChars,innerMode:function(t){return{state:t.base,mode:e}},blankLine:function(t){var r,a;return e.blankLine&&(r=e.blankLine(t.base)),n.blankLine&&(a=n.blankLine(t.overlay)),null==a?r:i&&null!=r?r+" "+a:a}}}})},960:function(t,e,n){!function(t){t(n(942),n(944),n(952))}(function(t){"use strict";t.defineMode("markdown",function(e,n){function getMode(n){if(t.findModeByName){var i=t.findModeByName(n);i&&(n=i.mime||i.mimes[0])}var r=t.getMode(e,n);return"null"==r.name?null:r}function switchInline(t,e,n){return e.f=e.inline=n,n(t,e)}function switchBlock(t,e,n){return e.f=e.block=n,n(t,e)}function lineIsEmpty(t){return!t||!/\S/.test(t.string)}function blankLine(t){return t.linkTitle=!1,t.em=!1,t.strong=!1,t.strikethrough=!1,t.quote=0,t.indentedCode=!1,t.f==htmlBlock&&(t.f=inlineNormal,t.block=blockNormal),t.trailingSpace=0,t.trailingSpaceNewLine=!1,t.prevLine=t.thisLine,t.thisLine={stream:null},null}function blockNormal(e,i){var r=e.column()===i.indentation,o=lineIsEmpty(i.prevLine.stream),g=i.indentedCode,f=i.prevLine.hr,p=!1!==i.list,k=(i.listStack[i.listStack.length-1]||0)+3;i.indentedCode=!1;var x=i.indentation;if(null===i.indentationDiff&&(i.indentationDiff=i.indentation,p)){for(i.list=null;x<i.listStack[i.listStack.length-1];)i.listStack.pop(),i.listStack.length?i.indentation=i.listStack[i.listStack.length-1]:i.list=!1;!1!==i.list&&(i.indentationDiff=x-i.listStack[i.listStack.length-1])}var S=!(o||f||i.prevLine.header||p&&g||i.prevLine.fencedCodeEnd),v=(!1===i.list||f||o)&&i.indentation<=k&&e.match(l),b=null;if(i.indentationDiff>=4&&(g||i.prevLine.fencedCodeEnd||i.prevLine.header||o))return e.skipToEnd(),i.indentedCode=!0,a.code;if(e.eatSpace())return null;if(r&&i.indentation<=k&&(b=e.match(u))&&b[1].length<=6)return i.quote=0,i.header=b[1].length,i.thisLine.header=!0,n.highlightFormatting&&(i.formatting="header"),i.f=i.inline,getType(i);if(i.indentation<=k&&e.eat(">"))return i.quote=r?1:i.quote+1,n.highlightFormatting&&(i.formatting="quote"),e.eatSpace(),getType(i);if(!v&&!i.setext&&r&&i.indentation<=k&&(b=e.match(s))){var y=b[1]?"ol":"ul";return i.indentation=x+e.current().length,i.list=!0,i.quote=0,i.listStack.push(i.indentation),n.taskLists&&e.match(c,!1)&&(i.taskList=!0),i.f=i.inline,n.highlightFormatting&&(i.formatting=["list","list-"+y]),getType(i)}return r&&i.indentation<=k&&(b=e.match(h,!0))?(i.quote=0,i.fencedEndRE=new RegExp(b[1]+"+ *$"),i.localMode=n.fencedCodeBlockHighlighting&&getMode(b[2]),i.localMode&&(i.localState=t.startState(i.localMode)),i.f=i.block=local,n.highlightFormatting&&(i.formatting="code-block"),i.code=-1,getType(i)):i.setext||!(S&&p||i.quote||!1!==i.list||i.code||v||d.test(e.string))&&(b=e.lookAhead(1))&&(b=b.match(m))?(i.setext?(i.header=i.setext,i.setext=0,e.skipToEnd(),n.highlightFormatting&&(i.formatting="header")):(i.header="="==b[0].charAt(0)?1:2,i.setext=i.header),i.thisLine.header=!0,i.f=i.inline,getType(i)):v?(e.skipToEnd(),i.hr=!0,i.thisLine.hr=!0,a.hr):"["===e.peek()?switchInline(e,i,footnoteLink):switchInline(e,i,i.inline)}function htmlBlock(e,n){var a=i.token(e,n.htmlState);if(!r){var o=t.innerMode(i,n.htmlState);("xml"==o.mode.name&&null===o.state.tagStart&&!o.state.context&&o.state.tokenize.isInText||n.md_inside&&e.current().indexOf(">")>-1)&&(n.f=inlineNormal,n.block=blockNormal,n.htmlState=null)}return a}function local(t,e){var i=e.listStack[e.listStack.length-1]||0,r=e.indentation<i,o=i+3;if(e.fencedEndRE&&e.indentation<=o&&(r||t.match(e.fencedEndRE))){n.highlightFormatting&&(e.formatting="code-block");var l;return r||(l=getType(e)),e.localMode=e.localState=null,e.block=blockNormal,e.f=inlineNormal,e.fencedEndRE=null,e.code=0,e.thisLine.fencedCodeEnd=!0,r?switchBlock(t,e,e.block):l}return e.localMode?e.localMode.token(t,e.localState):(t.skipToEnd(),a.code)}function getType(t){var e=[];if(t.formatting){e.push(a.formatting),"string"==typeof t.formatting&&(t.formatting=[t.formatting]);for(var i=0;i<t.formatting.length;i++)e.push(a.formatting+"-"+t.formatting[i]),"header"===t.formatting[i]&&e.push(a.formatting+"-"+t.formatting[i]+"-"+t.header),"quote"===t.formatting[i]&&(!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(a.formatting+"-"+t.formatting[i]+"-"+t.quote):e.push("error"))}if(t.taskOpen)return e.push("meta"),e.length?e.join(" "):null;if(t.taskClosed)return e.push("property"),e.length?e.join(" "):null;if(t.linkHref?e.push(a.linkHref,"url"):(t.strong&&e.push(a.strong),t.em&&e.push(a.em),t.strikethrough&&e.push(a.strikethrough),t.emoji&&e.push(a.emoji),t.linkText&&e.push(a.linkText),t.code&&e.push(a.code),t.image&&e.push(a.image),t.imageAltText&&e.push(a.imageAltText,"link"),t.imageMarker&&e.push(a.imageMarker)),t.header&&e.push(a.header,a.header+"-"+t.header),t.quote&&(e.push(a.quote),!n.maxBlockquoteDepth||n.maxBlockquoteDepth>=t.quote?e.push(a.quote+"-"+t.quote):e.push(a.quote+"-"+n.maxBlockquoteDepth)),!1!==t.list){var r=(t.listStack.length-1)%3;r?1===r?e.push(a.list2):e.push(a.list3):e.push(a.list1)}return t.trailingSpaceNewLine?e.push("trailing-space-new-line"):t.trailingSpace&&e.push("trailing-space-"+(t.trailingSpace%2?"a":"b")),e.length?e.join(" "):null}function handleText(t,e){if(t.match(g,!0))return getType(e)}function inlineNormal(e,r){var o=r.text(e,r);if(void 0!==o)return o;if(r.list)return r.list=null,getType(r);if(r.taskList)return" "===e.match(c,!0)[1]?r.taskOpen=!0:r.taskClosed=!0,n.highlightFormatting&&(r.formatting="task"),r.taskList=!1,getType(r);if(r.taskOpen=!1,r.taskClosed=!1,r.header&&e.match(/^#+$/,!0))return n.highlightFormatting&&(r.formatting="header"),getType(r);var l=e.next();if(r.linkTitle){r.linkTitle=!1;var s=l;"("===l&&(s=")");var u="^\\s*(?:[^"+(s=(s+"").replace(/([.?*+^\[\]\\(){}|-])/g,"\\$1"))+"\\\\]+|\\\\\\\\|\\\\.)"+s;if(e.match(new RegExp(u),!0))return a.linkHref}if("`"===l){var m=r.formatting;n.highlightFormatting&&(r.formatting="code"),e.eatWhile("`");var g=e.current().length;if(0!=r.code||r.quote&&1!=g){if(g==r.code){L=getType(r);return r.code=0,L}return r.formatting=m,getType(r)}return r.code=g,getType(r)}if(r.code)return getType(r);if("\\"===l&&(e.next(),n.highlightFormatting)){var h=getType(r),d=a.formatting+"-escape";return h?h+" "+d:d}if("!"===l&&e.match(/\[[^\]]*\] ?(?:\(|\[)/,!1))return r.imageMarker=!0,r.image=!0,n.highlightFormatting&&(r.formatting="image"),getType(r);if("["===l&&r.imageMarker&&e.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/,!1))return r.imageMarker=!1,r.imageAltText=!0,n.highlightFormatting&&(r.formatting="image"),getType(r);if("]"===l&&r.imageAltText){n.highlightFormatting&&(r.formatting="image");h=getType(r);return r.imageAltText=!1,r.image=!1,r.inline=r.f=linkHref,h}if("["===l&&!r.image)return r.linkText=!0,n.highlightFormatting&&(r.formatting="link"),getType(r);if("]"===l&&r.linkText){n.highlightFormatting&&(r.formatting="link");h=getType(r);return r.linkText=!1,r.inline=r.f=e.match(/\(.*?\)| ?\[.*?\]/,!1)?linkHref:inlineNormal,h}if("<"===l&&e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=linkInline,n.highlightFormatting&&(r.formatting="link"),(h=getType(r))?h+=" ":h="",h+a.linkInline;if("<"===l&&e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/,!1))return r.f=r.inline=linkInline,n.highlightFormatting&&(r.formatting="link"),(h=getType(r))?h+=" ":h="",h+a.linkEmail;if(n.xml&&"<"===l&&e.match(/^(!--|[a-z]+(?:\s+[a-z_:.\-]+(?:\s*=\s*[^ >]+)?)*\s*>)/i,!1)){var p=e.string.indexOf(">",e.pos);if(-1!=p){var k=e.string.substring(e.start,p);/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(k)&&(r.md_inside=!0)}return e.backUp(1),r.htmlState=t.startState(i),switchBlock(e,r,htmlBlock)}if(n.xml&&"<"===l&&e.match(/^\/\w*?>/))return r.md_inside=!1,"tag";if("*"===l||"_"===l){for(var x=1,S=1==e.pos?" ":e.string.charAt(e.pos-2);x<3&&e.eat(l);)x++;var v=e.peek()||" ",b=!/\s/.test(v)&&(!f.test(v)||/\s/.test(S)||f.test(S)),y=!/\s/.test(S)&&(!f.test(S)||/\s/.test(v)||f.test(v)),T=null,w=null;if(x%2&&(r.em||!b||"*"!==l&&y&&!f.test(S)?r.em!=l||!y||"*"!==l&&b&&!f.test(v)||(T=!1):T=!0),x>1&&(r.strong||!b||"*"!==l&&y&&!f.test(S)?r.strong!=l||!y||"*"!==l&&b&&!f.test(v)||(w=!1):w=!0),null!=w||null!=T){n.highlightFormatting&&(r.formatting=null==T?"strong":null==w?"em":"strong em"),!0===T&&(r.em=l),!0===w&&(r.strong=l);L=getType(r);return!1===T&&(r.em=!1),!1===w&&(r.strong=!1),L}}else if(" "===l&&(e.eat("*")||e.eat("_"))){if(" "===e.peek())return getType(r);e.backUp(1)}if(n.strikethrough)if("~"===l&&e.eatWhile(l)){if(r.strikethrough){n.highlightFormatting&&(r.formatting="strikethrough");var L=getType(r);return r.strikethrough=!1,L}if(e.match(/^[^\s]/,!1))return r.strikethrough=!0,n.highlightFormatting&&(r.formatting="strikethrough"),getType(r)}else if(" "===l&&e.match(/^~~/,!0)){if(" "===e.peek())return getType(r);e.backUp(2)}if(n.emoji&&":"===l&&e.match(/^[a-z_\d+-]+:/)){r.emoji=!0,n.highlightFormatting&&(r.formatting="emoji");var C=getType(r);return r.emoji=!1,C}return" "===l&&(e.match(/ +$/,!1)?r.trailingSpace++:r.trailingSpace&&(r.trailingSpaceNewLine=!0)),getType(r)}function linkInline(t,e){if(">"===t.next()){e.f=e.inline=inlineNormal,n.highlightFormatting&&(e.formatting="link");var i=getType(e);return i?i+=" ":i="",i+a.linkInline}return t.match(/^[^>]+/,!0),a.linkInline}function linkHref(t,e){if(t.eatSpace())return null;var i=t.next();return"("===i||"["===i?(e.f=e.inline=getLinkHrefInside("("===i?")":"]"),n.highlightFormatting&&(e.formatting="link-string"),e.linkHref=!0,getType(e)):"error"}function getLinkHrefInside(t){return function(e,i){if(e.next()===t){i.f=i.inline=inlineNormal,n.highlightFormatting&&(i.formatting="link-string");var r=getType(i);return i.linkHref=!1,r}return e.match(p[t]),i.linkHref=!0,getType(i)}}function footnoteLink(t,e){return t.match(/^([^\]\\]|\\.)*\]:/,!1)?(e.f=footnoteLinkInside,t.next(),n.highlightFormatting&&(e.formatting="link"),e.linkText=!0,getType(e)):switchInline(t,e,inlineNormal)}function footnoteLinkInside(t,e){if(t.match(/^\]:/,!0)){e.f=e.inline=footnoteUrl,n.highlightFormatting&&(e.formatting="link");var i=getType(e);return e.linkText=!1,i}return t.match(/^([^\]\\]|\\.)+/,!0),a.linkText}function footnoteUrl(t,e){return t.eatSpace()?null:(t.match(/^[^\s]+/,!0),void 0===t.peek()?e.linkTitle=!0:t.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/,!0),e.f=e.inline=inlineNormal,a.linkHref+" url")}var i=t.getMode(e,"text/html"),r="null"==i.name;void 0===n.highlightFormatting&&(n.highlightFormatting=!1),void 0===n.maxBlockquoteDepth&&(n.maxBlockquoteDepth=0),void 0===n.taskLists&&(n.taskLists=!1),void 0===n.strikethrough&&(n.strikethrough=!1),void 0===n.emoji&&(n.emoji=!1),void 0===n.fencedCodeBlockHighlighting&&(n.fencedCodeBlockHighlighting=!0),void 0===n.xml&&(n.xml=!0),void 0===n.tokenTypeOverrides&&(n.tokenTypeOverrides={});var a={header:"header",code:"comment",quote:"quote",list1:"variable-2",list2:"variable-3",list3:"keyword",hr:"hr",image:"image",imageAltText:"image-alt-text",imageMarker:"image-marker",formatting:"formatting",linkInline:"link",linkEmail:"link",linkText:"link",linkHref:"string",em:"em",strong:"strong",strikethrough:"strikethrough",emoji:"builtin"};for(var o in a)a.hasOwnProperty(o)&&n.tokenTypeOverrides[o]&&(a[o]=n.tokenTypeOverrides[o]);var l=/^([*\-_])(?:\s*\1){2,}\s*$/,s=/^(?:[*\-+]|^[0-9]+([.)]))\s+/,c=/^\[(x| )\](?=\s)/i,u=n.allowAtxHeaderWithoutSpace?/^(#+)/:/^(#+)(?: |$)/,m=/^ *(?:\={1,}|-{1,})\s*$/,g=/^[^#!\[\]*_\\<>` "'(~:]+/,h=/^(~~~+|```+)[ \t]*([\w+#-]*)[^\n`]*$/,d=/^\s*\[[^\]]+?\]:\s*\S+(\s*\S*\s*)?$/,f=/[!\"#$%&\'()*+,\-\.\/:;<=>?@\[\\\]^_`{|}~—]/,p={")":/^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,"]":/^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/},k={startState:function(){return{f:blockNormal,prevLine:{stream:null},thisLine:{stream:null},block:blockNormal,htmlState:null,indentation:0,inline:inlineNormal,text:handleText,formatting:!1,linkText:!1,linkHref:!1,linkTitle:!1,code:0,em:!1,strong:!1,header:0,setext:0,hr:!1,taskList:!1,list:!1,listStack:[],quote:0,trailingSpace:0,trailingSpaceNewLine:!1,strikethrough:!1,emoji:!1,fencedEndRE:null}},copyState:function(e){return{f:e.f,prevLine:e.prevLine,thisLine:e.thisLine,block:e.block,htmlState:e.htmlState&&t.copyState(i,e.htmlState),indentation:e.indentation,localMode:e.localMode,localState:e.localMode?t.copyState(e.localMode,e.localState):null,inline:e.inline,text:e.text,formatting:!1,linkText:e.linkText,linkTitle:e.linkTitle,code:e.code,em:e.em,strong:e.strong,strikethrough:e.strikethrough,emoji:e.emoji,header:e.header,setext:e.setext,hr:e.hr,taskList:e.taskList,list:e.list,listStack:e.listStack.slice(0),quote:e.quote,indentedCode:e.indentedCode,trailingSpace:e.trailingSpace,trailingSpaceNewLine:e.trailingSpaceNewLine,md_inside:e.md_inside,fencedEndRE:e.fencedEndRE}},token:function(t,e){if(e.formatting=!1,t!=e.thisLine.stream){if(e.header=0,e.hr=!1,t.match(/^\s*$/,!0))return blankLine(e),null;if(e.prevLine=e.thisLine,e.thisLine={stream:t},e.taskList=!1,e.trailingSpace=0,e.trailingSpaceNewLine=!1,!e.localState&&(e.f=e.block,e.f!=htmlBlock)){var n=t.match(/^\s*/,!0)[0].replace(/\t/g,"    ").length;if(e.indentation=n,e.indentationDiff=null,n>0)return null}}return e.f(t,e)},innerMode:function(t){return t.block==htmlBlock?{state:t.htmlState,mode:i}:t.localState?{state:t.localState,mode:t.localMode}:{state:t,mode:k}},indent:function(e,n,r){return e.block==htmlBlock&&i.indent?i.indent(e.htmlState,n,r):e.localState&&e.localMode.indent?e.localMode.indent(e.localState,n,r):t.Pass},blankLine:blankLine,getType:getType,closeBrackets:"()[]{}''\"\"``",fold:"markdown"};return k},"xml"),t.defineMIME("text/x-markdown","markdown")})}});