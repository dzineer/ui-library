webpackJsonp([80],{984:function(e,t,n){!function(e){e(n(906))}(function(e){"use strict";function words(e){for(var t={},n=e.split(" "),o=0;o<n.length;++o)t[n[o]]=!0;return t}e.defineMode("modelica",function(t,n){function tokenLineComment(e,t){return e.skipToEnd(),t.tokenize=null,"comment"}function tokenBlockComment(e,t){for(var n,o=!1;n=e.next();){if(o&&"/"==n){t.tokenize=null;break}o="*"==n}return"comment"}function tokenString(e,t){for(var n,o=!1;null!=(n=e.next());){if('"'==n&&!o){t.tokenize=null,t.sol=!1;break}o=!o&&"\\"==n}return"string"}function tokenIdent(e,t){for(e.eatWhile(u);e.eat(u)||e.eat(c););var n=e.current();return!t.sol||"package"!=n&&"model"!=n&&"when"!=n&&"connector"!=n?t.sol&&"end"==n&&t.level>0&&t.level--:t.level++,t.tokenize=null,t.sol=!1,r.propertyIsEnumerable(n)?"keyword":i.propertyIsEnumerable(n)?"builtin":a.propertyIsEnumerable(n)?"atom":"variable"}function tokenQIdent(e,t){for(;e.eat(/[^']/););return t.tokenize=null,t.sol=!1,e.eat("'")?"variable":"error"}function tokenUnsignedNuber(e,t){return e.eatWhile(u),e.eat(".")&&e.eatWhile(u),(e.eat("e")||e.eat("E"))&&(e.eat("-")||e.eat("+"),e.eatWhile(u)),t.tokenize=null,t.sol=!1,"number"}var o=t.indentUnit,r=n.keywords||{},i=n.builtin||{},a=n.atoms||{},l=/[;=\(:\),{}.*<>+\-\/^\[\]]/,s=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,u=/[0-9]/,c=/[_a-zA-Z]/;return{startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(e,t){if(null!=t.tokenize)return t.tokenize(e,t);if(e.sol()&&(t.sol=!0),e.eatSpace())return t.tokenize=null,null;var n=e.next();if("/"==n&&e.eat("/"))t.tokenize=tokenLineComment;else if("/"==n&&e.eat("*"))t.tokenize=tokenBlockComment;else{if(s.test(n+e.peek()))return e.next(),t.tokenize=null,"operator";if(l.test(n))return t.tokenize=null,"operator";if(c.test(n))t.tokenize=tokenIdent;else if("'"==n&&e.peek()&&"'"!=e.peek())t.tokenize=tokenQIdent;else if('"'==n)t.tokenize=tokenString;else{if(!u.test(n))return t.tokenize=null,"error";t.tokenize=tokenUnsignedNuber}}return t.tokenize(e,t)},indent:function(t,n){if(null!=t.tokenize)return e.Pass;var r=t.level;return/(algorithm)/.test(n)&&r--,/(equation)/.test(n)&&r--,/(initial algorithm)/.test(n)&&r--,/(initial equation)/.test(n)&&r--,/(end)/.test(n)&&r--,r>0?o*r:0},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}});!function def(t,n){function add(e){if(e)for(var t in e)e.hasOwnProperty(t)&&o.push(t)}"string"==typeof t&&(t=[t]);var o=[];add(n.keywords),add(n.builtin),add(n.atoms),o.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],o));for(var r=0;r<t.length;++r)e.defineMIME(t[r],n)}(["text/x-modelica"],{name:"modelica",keywords:words("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"),builtin:words("abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh"),atoms:words("Real Boolean Integer String")})})}});