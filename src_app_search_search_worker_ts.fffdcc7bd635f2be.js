(()=>{var G={3197:(x,b,w)=>{var T,D;!function(){var e,t=function(e){var r=new t.Builder;return r.pipeline.add(t.trimmer,t.stopWordFilter,t.stemmer),r.searchPipeline.add(t.stemmer),e.call(r,r),r.build()};t.version="2.3.9",t.utils={},t.utils.warn=(e=this,function(r){e.console&&console.warn&&console.warn(r)}),t.utils.asString=function(e){return null==e?"":e.toString()},t.utils.clone=function(e){if(null==e)return e;for(var r=Object.create(null),i=Object.keys(e),n=0;n<i.length;n++){var s=i[n],o=e[s];if(Array.isArray(o))r[s]=o.slice();else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects");r[s]=o}}return r},t.FieldRef=function(e,r,i){this.docRef=e,this.fieldName=r,this._stringValue=i},t.FieldRef.joiner="/",t.FieldRef.fromString=function(e){var r=e.indexOf(t.FieldRef.joiner);if(-1===r)throw"malformed field ref string";var i=e.slice(0,r),n=e.slice(r+1);return new t.FieldRef(n,i,e)},t.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+t.FieldRef.joiner+this.docRef),this._stringValue},t.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var r=0;r<this.length;r++)this.elements[e[r]]=!0}else this.length=0},t.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},t.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},t.Set.prototype.contains=function(e){return!!this.elements[e]},t.Set.prototype.intersect=function(e){var r,i,n,s=[];if(e===t.Set.complete)return this;if(e===t.Set.empty)return e;this.length<e.length?(r=this,i=e):(r=e,i=this),n=Object.keys(r.elements);for(var o=0;o<n.length;o++){var a=n[o];a in i.elements&&s.push(a)}return new t.Set(s)},t.Set.prototype.union=function(e){return e===t.Set.complete?t.Set.complete:e===t.Set.empty?this:new t.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},t.idf=function(e,r){var i=0;for(var n in e)"_index"!=n&&(i+=Object.keys(e[n]).length);return Math.log(1+Math.abs((r-i+.5)/(i+.5)))},t.Token=function(e,r){this.str=e||"",this.metadata=r||{}},t.Token.prototype.toString=function(){return this.str},t.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},t.Token.prototype.clone=function(e){return new t.Token((e=e||function(r){return r})(this.str,this.metadata),this.metadata)},t.tokenizer=function(e,r){if(null==e||null==e)return[];if(Array.isArray(e))return e.map(function(v){return new t.Token(t.utils.asString(v).toLowerCase(),t.utils.clone(r))});for(var i=e.toString().toLowerCase(),n=i.length,s=[],o=0,a=0;o<=n;o++){var u=o-a;if(i.charAt(o).match(t.tokenizer.separator)||o==n){if(u>0){var h=t.utils.clone(r)||{};h.position=[a,u],h.index=s.length,s.push(new t.Token(i.slice(a,o),h))}a=o+1}}return s},t.tokenizer.separator=/[\s\-]+/,t.Pipeline=function(){this._stack=[]},t.Pipeline.registeredFunctions=Object.create(null),t.Pipeline.registerFunction=function(e,r){r in this.registeredFunctions&&t.utils.warn("Overwriting existing registered function: "+r),e.label=r,t.Pipeline.registeredFunctions[e.label]=e},t.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},t.Pipeline.load=function(e){var r=new t.Pipeline;return e.forEach(function(i){var n=t.Pipeline.registeredFunctions[i];if(!n)throw new Error("Cannot load unregistered function: "+i);r.add(n)}),r},t.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach(function(r){t.Pipeline.warnIfFunctionNotRegistered(r),this._stack.push(r)},this)},t.Pipeline.prototype.after=function(e,r){t.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");this._stack.splice(i+=1,0,r)},t.Pipeline.prototype.before=function(e,r){t.Pipeline.warnIfFunctionNotRegistered(r);var i=this._stack.indexOf(e);if(-1==i)throw new Error("Cannot find existingFn");this._stack.splice(i,0,r)},t.Pipeline.prototype.remove=function(e){var r=this._stack.indexOf(e);-1!=r&&this._stack.splice(r,1)},t.Pipeline.prototype.run=function(e){for(var r=this._stack.length,i=0;i<r;i++){for(var n=this._stack[i],s=[],o=0;o<e.length;o++){var a=n(e[o],o,e);if(null!=a&&""!==a)if(Array.isArray(a))for(var l=0;l<a.length;l++)s.push(a[l]);else s.push(a)}e=s}return e},t.Pipeline.prototype.runString=function(e,r){var i=new t.Token(e,r);return this.run([i]).map(function(n){return n.toString()})},t.Pipeline.prototype.reset=function(){this._stack=[]},t.Pipeline.prototype.toJSON=function(){return this._stack.map(function(e){return t.Pipeline.warnIfFunctionNotRegistered(e),e.label})},t.Vector=function(e){this._magnitude=0,this.elements=e||[]},t.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var r=0,i=this.elements.length/2,n=i-r,s=Math.floor(n/2),o=this.elements[2*s];n>1&&(o<e&&(r=s),o>e&&(i=s),o!=e);)n=i-r,s=r+Math.floor(n/2),o=this.elements[2*s];return o==e||o>e?2*s:o<e?2*(s+1):void 0},t.Vector.prototype.insert=function(e,r){this.upsert(e,r,function(){throw"duplicate index"})},t.Vector.prototype.upsert=function(e,r,i){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=i(this.elements[n+1],r):this.elements.splice(n,0,e,r)},t.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,r=this.elements.length,i=1;i<r;i+=2){var n=this.elements[i];e+=n*n}return this._magnitude=Math.sqrt(e)},t.Vector.prototype.dot=function(e){for(var r=0,i=this.elements,n=e.elements,s=i.length,o=n.length,a=0,l=0,u=0,h=0;u<s&&h<o;)(a=i[u])<(l=n[h])?u+=2:a>l?h+=2:a==l&&(r+=i[u+1]*n[h+1],u+=2,h+=2);return r},t.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},t.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),r=1,i=0;r<this.elements.length;r+=2,i++)e[i]=this.elements[r];return e},t.Vector.prototype.toJSON=function(){return this.elements},t.stemmer=function(){var e={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},r={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[aeiouy]",s="[^aeiou][^aeiouy]*",v=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),L=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),m=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),S=/^(.+?)(ss|i)es$/,p=/^(.+?)([^s])s$/,y=/^(.+?)eed$/,k=/^(.+?)(ed|ing)$/,E=/.$/,I=/(at|bl|iz)$/,A=new RegExp("([^aeiouylsz])\\1$"),z=new RegExp("^"+s+n+"[^aeiouwxy]$"),V=/^(.+?[^aeiou])y$/,$=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,W=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,B=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,q=/^(.+?)(s|t)(ion)$/,R=/^(.+?)e$/,U=/ll$/,H=new RegExp("^"+s+n+"[^aeiouwxy]$"),M=function(c){var g,C,P,d,Q,F,N;if(c.length<3)return c;if("y"==(P=c.substr(0,1))&&(c=P.toUpperCase()+c.substr(1)),Q=p,(d=S).test(c)?c=c.replace(d,"$1$2"):Q.test(c)&&(c=c.replace(Q,"$1$2")),Q=k,(d=y).test(c)){var _=d.exec(c);(d=v).test(_[1])&&(c=c.replace(d=E,""))}else if(Q.test(c)){_=Q.exec(c);(Q=m).test(g=_[1])&&(F=A,N=z,(Q=I).test(c=g)?c+="e":F.test(c)?c=c.replace(d=E,""):N.test(c)&&(c+="e"))}return(d=V).test(c)&&(c=(g=(_=d.exec(c))[1])+"i"),(d=$).test(c)&&(C=(_=d.exec(c))[2],(d=v).test(g=_[1])&&(c=g+e[C])),(d=W).test(c)&&(C=(_=d.exec(c))[2],(d=v).test(g=_[1])&&(c=g+r[C])),Q=q,(d=B).test(c)?(_=d.exec(c),(d=f).test(g=_[1])&&(c=g)):Q.test(c)&&(_=Q.exec(c),(Q=f).test(g=_[1]+_[2])&&(c=g)),(d=R).test(c)&&(_=d.exec(c),Q=L,F=H,((d=f).test(g=_[1])||Q.test(g)&&!F.test(g))&&(c=g)),Q=f,(d=U).test(c)&&Q.test(c)&&(c=c.replace(d=E,"")),"y"==P&&(c=P.toLowerCase()+c.substr(1)),c};return function(j){return j.update(M)}}(),t.Pipeline.registerFunction(t.stemmer,"stemmer"),t.generateStopWordFilter=function(e){var r=e.reduce(function(i,n){return i[n]=n,i},{});return function(i){if(i&&r[i.toString()]!==i.toString())return i}},t.stopWordFilter=t.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),t.Pipeline.registerFunction(t.stopWordFilter,"stopWordFilter"),t.trimmer=function(e){return e.update(function(r){return r.replace(/^\W+/,"").replace(/\W+$/,"")})},t.Pipeline.registerFunction(t.trimmer,"trimmer"),t.TokenSet=function(){this.final=!1,this.edges={},this.id=t.TokenSet._nextId,t.TokenSet._nextId+=1},t.TokenSet._nextId=1,t.TokenSet.fromArray=function(e){for(var r=new t.TokenSet.Builder,i=0,n=e.length;i<n;i++)r.insert(e[i]);return r.finish(),r.root},t.TokenSet.fromClause=function(e){return"editDistance"in e?t.TokenSet.fromFuzzyString(e.term,e.editDistance):t.TokenSet.fromString(e.term)},t.TokenSet.fromFuzzyString=function(e,r){for(var i=new t.TokenSet,n=[{node:i,editsRemaining:r,str:e}];n.length;){var s=n.pop();if(s.str.length>0){var a,o=s.str.charAt(0);o in s.node.edges?a=s.node.edges[o]:(a=new t.TokenSet,s.node.edges[o]=a),1==s.str.length&&(a.final=!0),n.push({node:a,editsRemaining:s.editsRemaining,str:s.str.slice(1)})}if(0!=s.editsRemaining){if("*"in s.node.edges)var l=s.node.edges["*"];else l=new t.TokenSet,s.node.edges["*"]=l;if(0==s.str.length&&(l.final=!0),n.push({node:l,editsRemaining:s.editsRemaining-1,str:s.str}),s.str.length>1&&n.push({node:s.node,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)}),1==s.str.length&&(s.node.final=!0),s.str.length>=1){if("*"in s.node.edges)var u=s.node.edges["*"];else u=new t.TokenSet,s.node.edges["*"]=u;1==s.str.length&&(u.final=!0),n.push({node:u,editsRemaining:s.editsRemaining-1,str:s.str.slice(1)})}if(s.str.length>1){var f,h=s.str.charAt(0),v=s.str.charAt(1);v in s.node.edges?f=s.node.edges[v]:(f=new t.TokenSet,s.node.edges[v]=f),1==s.str.length&&(f.final=!0),n.push({node:f,editsRemaining:s.editsRemaining-1,str:h+s.str.slice(2)})}}}return i},t.TokenSet.fromString=function(e){for(var r=new t.TokenSet,i=r,n=0,s=e.length;n<s;n++){var o=e[n],a=n==s-1;if("*"==o)r.edges[o]=r,r.final=a;else{var l=new t.TokenSet;l.final=a,r.edges[o]=l,r=l}}return i},t.TokenSet.prototype.toArray=function(){for(var e=[],r=[{prefix:"",node:this}];r.length;){var i=r.pop(),n=Object.keys(i.node.edges),s=n.length;i.node.final&&(i.prefix.charAt(0),e.push(i.prefix));for(var o=0;o<s;o++){var a=n[o];r.push({prefix:i.prefix.concat(a),node:i.node.edges[a]})}}return e},t.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",r=Object.keys(this.edges).sort(),i=r.length,n=0;n<i;n++){var s=r[n];e=e+s+this.edges[s].id}return e},t.TokenSet.prototype.intersect=function(e){for(var r=new t.TokenSet,i=void 0,n=[{qNode:e,output:r,node:this}];n.length;){i=n.pop();for(var s=Object.keys(i.qNode.edges),o=s.length,a=Object.keys(i.node.edges),l=a.length,u=0;u<o;u++)for(var h=s[u],v=0;v<l;v++){var f=a[v];if(f==h||"*"==h){var L=i.node.edges[f],m=i.qNode.edges[h],S=L.final&&m.final,p=void 0;f in i.output.edges?(p=i.output.edges[f]).final=p.final||S:((p=new t.TokenSet).final=S,i.output.edges[f]=p),n.push({qNode:m,output:p,node:L})}}}return r},t.TokenSet.Builder=function(){this.previousWord="",this.root=new t.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},t.TokenSet.Builder.prototype.insert=function(e){var r,i=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)i++;for(this.minimize(i),r=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=i;n<e.length;n++){var s=new t.TokenSet,o=e[n];r.edges[o]=s,this.uncheckedNodes.push({parent:r,char:o,child:s}),r=s}r.final=!0,this.previousWord=e},t.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},t.TokenSet.Builder.prototype.minimize=function(e){for(var r=this.uncheckedNodes.length-1;r>=e;r--){var i=this.uncheckedNodes[r],n=i.child.toString();n in this.minimizedNodes?i.parent.edges[i.char]=this.minimizedNodes[n]:(i.child._str=n,this.minimizedNodes[n]=i.child),this.uncheckedNodes.pop()}},t.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},t.Index.prototype.search=function(e){return this.query(function(r){new t.QueryParser(e,r).parse()})},t.Index.prototype.query=function(e){for(var r=new t.Query(this.fields),i=Object.create(null),n=Object.create(null),s=Object.create(null),o=Object.create(null),a=Object.create(null),l=0;l<this.fields.length;l++)n[this.fields[l]]=new t.Vector;for(e.call(r,r),l=0;l<r.clauses.length;l++){var h,u=r.clauses[l],v=t.Set.empty;h=u.usePipeline?this.pipeline.runString(u.term,{fields:u.fields}):[u.term];for(var f=0;f<h.length;f++){u.term=h[f];var m=t.TokenSet.fromClause(u),S=this.tokenSet.intersect(m).toArray();if(0===S.length&&u.presence===t.Query.presence.REQUIRED){for(var p=0;p<u.fields.length;p++)o[y=u.fields[p]]=t.Set.empty;break}for(var k=0;k<S.length;k++){var E=S[k],I=this.invertedIndex[E],A=I._index;for(p=0;p<u.fields.length;p++){var z=I[y=u.fields[p]],V=Object.keys(z),$=E+"/"+y,W=new t.Set(V);if(u.presence==t.Query.presence.REQUIRED&&(v=v.union(W),void 0===o[y]&&(o[y]=t.Set.complete)),u.presence!=t.Query.presence.PROHIBITED){if(n[y].upsert(A,u.boost,function(K,Z){return K+Z}),!s[$]){for(var B=0;B<V.length;B++){var H,q=V[B],R=new t.FieldRef(q,y),U=z[q];void 0===(H=i[R])?i[R]=new t.MatchData(E,y,U):H.add(E,y,U)}s[$]=!0}}else void 0===a[y]&&(a[y]=t.Set.empty),a[y]=a[y].union(W)}}}if(u.presence===t.Query.presence.REQUIRED)for(p=0;p<u.fields.length;p++)o[y=u.fields[p]]=o[y].intersect(v)}var M=t.Set.complete,j=t.Set.empty;for(l=0;l<this.fields.length;l++){var y;o[y=this.fields[l]]&&(M=M.intersect(o[y])),a[y]&&(j=j.union(a[y]))}var c=Object.keys(i),g=[],C=Object.create(null);if(r.isNegated())for(c=Object.keys(this.fieldVectors),l=0;l<c.length;l++){var P=t.FieldRef.fromString(R=c[l]);i[R]=new t.MatchData}for(l=0;l<c.length;l++){var d=(P=t.FieldRef.fromString(c[l])).docRef;if(M.contains(d)&&!j.contains(d)){var N,F=n[P.fieldName].similarity(this.fieldVectors[P]);if(void 0!==(N=C[d]))N.score+=F,N.matchData.combine(i[P]);else{var _={ref:d,score:F,matchData:i[P]};C[d]=_,g.push(_)}}}return g.sort(function(X,Y){return Y.score-X.score})},t.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map(function(i){return[i,this.invertedIndex[i]]},this),r=Object.keys(this.fieldVectors).map(function(i){return[i,this.fieldVectors[i].toJSON()]},this);return{version:t.version,fields:this.fields,fieldVectors:r,invertedIndex:e,pipeline:this.pipeline.toJSON()}},t.Index.load=function(e){var r={},i={},n=e.fieldVectors,s=Object.create(null),o=e.invertedIndex,a=new t.TokenSet.Builder,l=t.Pipeline.load(e.pipeline);e.version!=t.version&&t.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+t.version+"' does not match serialized index '"+e.version+"'");for(var u=0;u<n.length;u++)i[(h=n[u])[0]]=new t.Vector(h[1]);for(u=0;u<o.length;u++){var h,L=(h=o[u])[0],m=h[1];a.insert(L),s[L]=m}return a.finish(),r.fields=e.fields,r.fieldVectors=i,r.invertedIndex=s,r.tokenSet=a.root,r.pipeline=l,new t.Index(r)},t.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=t.tokenizer,this.pipeline=new t.Pipeline,this.searchPipeline=new t.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},t.Builder.prototype.ref=function(e){this._ref=e},t.Builder.prototype.field=function(e,r){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'");this._fields[e]=r||{}},t.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},t.Builder.prototype.k1=function(e){this._k1=e},t.Builder.prototype.add=function(e,r){var i=e[this._ref],n=Object.keys(this._fields);this._documents[i]=r||{},this.documentCount+=1;for(var s=0;s<n.length;s++){var o=n[s],a=this._fields[o].extractor,l=a?a(e):e[o],u=this.tokenizer(l,{fields:[o]}),h=this.pipeline.run(u),v=new t.FieldRef(i,o),f=Object.create(null);this.fieldTermFrequencies[v]=f,this.fieldLengths[v]=0,this.fieldLengths[v]+=h.length;for(var L=0;L<h.length;L++){var m=h[L];if(null==f[m]&&(f[m]=0),f[m]+=1,null==this.invertedIndex[m]){var S=Object.create(null);S._index=this.termIndex,this.termIndex+=1;for(var p=0;p<n.length;p++)S[n[p]]=Object.create(null);this.invertedIndex[m]=S}null==this.invertedIndex[m][o][i]&&(this.invertedIndex[m][o][i]=Object.create(null));for(var y=0;y<this.metadataWhitelist.length;y++){var k=this.metadataWhitelist[y],E=m.metadata[k];null==this.invertedIndex[m][o][i][k]&&(this.invertedIndex[m][o][i][k]=[]),this.invertedIndex[m][o][i][k].push(E)}}}},t.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),r=e.length,i={},n={},s=0;s<r;s++){var o=t.FieldRef.fromString(e[s]),a=o.fieldName;n[a]||(n[a]=0),n[a]+=1,i[a]||(i[a]=0),i[a]+=this.fieldLengths[o]}var l=Object.keys(this._fields);for(s=0;s<l.length;s++){var u=l[s];i[u]=i[u]/n[u]}this.averageFieldLength=i},t.Builder.prototype.createFieldVectors=function(){for(var e={},r=Object.keys(this.fieldTermFrequencies),i=r.length,n=Object.create(null),s=0;s<i;s++){for(var o=t.FieldRef.fromString(r[s]),a=o.fieldName,l=this.fieldLengths[o],u=new t.Vector,h=this.fieldTermFrequencies[o],v=Object.keys(h),f=v.length,L=this._fields[a].boost||1,m=this._documents[o.docRef].boost||1,S=0;S<f;S++){var E,I,A,p=v[S],y=h[p],k=this.invertedIndex[p]._index;void 0===n[p]?(E=t.idf(this.invertedIndex[p],this.documentCount),n[p]=E):E=n[p],I=E*((this._k1+1)*y)/(this._k1*(1-this._b+this._b*(l/this.averageFieldLength[a]))+y),I*=L,I*=m,A=Math.round(1e3*I)/1e3,u.insert(k,A)}e[o]=u}this.fieldVectors=e},t.Builder.prototype.createTokenSet=function(){this.tokenSet=t.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},t.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new t.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},t.Builder.prototype.use=function(e){var r=Array.prototype.slice.call(arguments,1);r.unshift(this),e.apply(this,r)},t.MatchData=function(e,r,i){for(var n=Object.create(null),s=Object.keys(i||{}),o=0;o<s.length;o++){var a=s[o];n[a]=i[a].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][r]=n)},t.MatchData.prototype.combine=function(e){for(var r=Object.keys(e.metadata),i=0;i<r.length;i++){var n=r[i],s=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var o=0;o<s.length;o++){var a=s[o],l=Object.keys(e.metadata[n][a]);null==this.metadata[n][a]&&(this.metadata[n][a]=Object.create(null));for(var u=0;u<l.length;u++){var h=l[u];this.metadata[n][a][h]=null==this.metadata[n][a][h]?e.metadata[n][a][h]:this.metadata[n][a][h].concat(e.metadata[n][a][h])}}}},t.MatchData.prototype.add=function(e,r,i){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][r]=i);if(r in this.metadata[e])for(var n=Object.keys(i),s=0;s<n.length;s++){var o=n[s];this.metadata[e][r][o]=o in this.metadata[e][r]?this.metadata[e][r][o].concat(i[o]):i[o]}else this.metadata[e][r]=i},t.Query=function(e){this.clauses=[],this.allFields=e},t.Query.wildcard=new String("*"),t.Query.wildcard.NONE=0,t.Query.wildcard.LEADING=1,t.Query.wildcard.TRAILING=2,t.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},t.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=t.Query.wildcard.NONE),e.wildcard&t.Query.wildcard.LEADING&&e.term.charAt(0)!=t.Query.wildcard&&(e.term="*"+e.term),e.wildcard&t.Query.wildcard.TRAILING&&e.term.slice(-1)!=t.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=t.Query.presence.OPTIONAL),this.clauses.push(e),this},t.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=t.Query.presence.PROHIBITED)return!1;return!0},t.Query.prototype.term=function(e,r){if(Array.isArray(e))return e.forEach(function(n){this.term(n,t.utils.clone(r))},this),this;var i=r||{};return i.term=e.toString(),this.clause(i),this},t.QueryParseError=function(e,r,i){this.name="QueryParseError",this.message=e,this.start=r,this.end=i},t.QueryParseError.prototype=new Error,t.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},t.QueryLexer.prototype.run=function(){for(var e=t.QueryLexer.lexText;e;)e=e(this)},t.QueryLexer.prototype.sliceString=function(){for(var e=[],r=this.start,i=this.pos,n=0;n<this.escapeCharPositions.length;n++)e.push(this.str.slice(r,i=this.escapeCharPositions[n])),r=i+1;return e.push(this.str.slice(r,this.pos)),this.escapeCharPositions.length=0,e.join("")},t.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},t.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},t.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return t.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},t.QueryLexer.prototype.width=function(){return this.pos-this.start},t.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},t.QueryLexer.prototype.backup=function(){this.pos-=1},t.QueryLexer.prototype.acceptDigitRun=function(){var e,r;do{r=(e=this.next()).charCodeAt(0)}while(r>47&&r<58);e!=t.QueryLexer.EOS&&this.backup()},t.QueryLexer.prototype.more=function(){return this.pos<this.length},t.QueryLexer.EOS="EOS",t.QueryLexer.FIELD="FIELD",t.QueryLexer.TERM="TERM",t.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",t.QueryLexer.BOOST="BOOST",t.QueryLexer.PRESENCE="PRESENCE",t.QueryLexer.lexField=function(e){return e.backup(),e.emit(t.QueryLexer.FIELD),e.ignore(),t.QueryLexer.lexText},t.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(t.QueryLexer.TERM)),e.ignore(),e.more())return t.QueryLexer.lexText},t.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.EDIT_DISTANCE),t.QueryLexer.lexText},t.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(t.QueryLexer.BOOST),t.QueryLexer.lexText},t.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(t.QueryLexer.TERM)},t.QueryLexer.termSeparator=t.tokenizer.separator,t.QueryLexer.lexText=function(e){for(;;){var r=e.next();if(r==t.QueryLexer.EOS)return t.QueryLexer.lexEOS;if(92!=r.charCodeAt(0)){if(":"==r)return t.QueryLexer.lexField;if("~"==r)return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexEditDistance;if("^"==r)return e.backup(),e.width()>0&&e.emit(t.QueryLexer.TERM),t.QueryLexer.lexBoost;if("+"==r&&1===e.width()||"-"==r&&1===e.width())return e.emit(t.QueryLexer.PRESENCE),t.QueryLexer.lexText;if(r.match(t.QueryLexer.termSeparator))return t.QueryLexer.lexTerm}else e.escapeCharacter()}},t.QueryParser=function(e,r){this.lexer=new t.QueryLexer(e),this.query=r,this.currentClause={},this.lexemeIdx=0},t.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=t.QueryParser.parseClause;e;)e=e(this);return this.query},t.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},t.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},t.QueryParser.prototype.nextClause=function(){this.query.clause(this.currentClause),this.currentClause={}},t.QueryParser.parseClause=function(e){var r=e.peekLexeme();if(null!=r)switch(r.type){case t.QueryLexer.PRESENCE:return t.QueryParser.parsePresence;case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:var i="expected either a field or a term, found "+r.type;throw r.str.length>=1&&(i+=" with value '"+r.str+"'"),new t.QueryParseError(i,r.start,r.end)}},t.QueryParser.parsePresence=function(e){var r=e.consumeLexeme();if(null!=r){switch(r.str){case"-":e.currentClause.presence=t.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=t.Query.presence.REQUIRED;break;default:throw new t.QueryParseError("unrecognised presence operator'"+r.str+"'",r.start,r.end)}var n=e.peekLexeme();if(null==n)throw new t.QueryParseError("expecting term or field, found nothing",r.start,r.end);switch(n.type){case t.QueryLexer.FIELD:return t.QueryParser.parseField;case t.QueryLexer.TERM:return t.QueryParser.parseTerm;default:throw new t.QueryParseError("expecting term or field, found '"+n.type+"'",n.start,n.end)}}},t.QueryParser.parseField=function(e){var r=e.consumeLexeme();if(null!=r){if(-1==e.query.allFields.indexOf(r.str)){var i=e.query.allFields.map(function(o){return"'"+o+"'"}).join(", ");throw new t.QueryParseError("unrecognised field '"+r.str+"', possible fields: "+i,r.start,r.end)}e.currentClause.fields=[r.str];var s=e.peekLexeme();if(null==s)throw new t.QueryParseError("expecting term, found nothing",r.start,r.end);if(s.type===t.QueryLexer.TERM)return t.QueryParser.parseTerm;throw new t.QueryParseError("expecting term, found '"+s.type+"'",s.start,s.end)}},t.QueryParser.parseTerm=function(e){var r=e.consumeLexeme();if(null!=r){e.currentClause.term=r.str.toLowerCase(),-1!=r.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var i=e.peekLexeme();if(null==i)return void e.nextClause();switch(i.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+i.type+"'",i.start,i.end)}}},t.QueryParser.parseEditDistance=function(e){var r=e.consumeLexeme();if(null!=r){var i=parseInt(r.str,10);if(isNaN(i))throw new t.QueryParseError("edit distance must be numeric",r.start,r.end);e.currentClause.editDistance=i;var s=e.peekLexeme();if(null==s)return void e.nextClause();switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+s.type+"'",s.start,s.end)}}},t.QueryParser.parseBoost=function(e){var r=e.consumeLexeme();if(null!=r){var i=parseInt(r.str,10);if(isNaN(i))throw new t.QueryParseError("boost must be numeric",r.start,r.end);e.currentClause.boost=i;var s=e.peekLexeme();if(null==s)return void e.nextClause();switch(s.type){case t.QueryLexer.TERM:return e.nextClause(),t.QueryParser.parseTerm;case t.QueryLexer.FIELD:return e.nextClause(),t.QueryParser.parseField;case t.QueryLexer.EDIT_DISTANCE:return t.QueryParser.parseEditDistance;case t.QueryLexer.BOOST:return t.QueryParser.parseBoost;case t.QueryLexer.PRESENCE:return e.nextClause(),t.QueryParser.parsePresence;default:throw new t.QueryParseError("Unexpected lexeme type '"+s.type+"'",s.start,s.end)}}},void 0!==(D="function"==typeof(T=function(){return t})?T.call(b,w,b,x):T)&&(x.exports=D)}()}},J={};function O(x){var b=J[x];if(void 0!==b)return b.exports;var w=J[x]={exports:{}};return G[x](w,w.exports,O),w.exports}O.n=x=>{var b=x&&x.__esModule?()=>x.default:()=>x;return O.d(b,{a:b}),b},O.d=(x,b)=>{for(var w in b)O.o(b,w)&&!O.o(x,w)&&Object.defineProperty(x,w,{enumerable:!0,get:b[w]})},O.o=(x,b)=>Object.prototype.hasOwnProperty.call(x,b),(()=>{"use strict";var x=O(3197);let T;const D={};function o(a){a=function s(a){return a.split("").map(l=>{const u=l.charCodeAt(0);return u>127?"_"+u.toString(16):l}).join("")}(a.replace(/^["']|['"]$/g,""));try{if(a.length){const l=a.replace(/\S+/g,"+$&");let u=T.search(l);if(0===u.length&&(u=T.search(a)),0===u.length){const h="title:*"+a.split(" ",1)[0]+"*";u=T.search(a+" "+h)}return u.map(h=>D[h.ref])}}catch(l){console.error(l)}return[]}addEventListener("message",function e(a){const l=a.data.type,u=a.data.id,h=a.data.payload;switch(l){case"load-index":!function r(a,l){const u=new XMLHttpRequest;u.onload=function(){l(JSON.parse(this.responseText))},u.open("GET",a),u.send()}("/generated/docs/app/search-data.json",v=>{T=function t(a){return x.QueryLexer.termSeparator=x.tokenizer.separator=/\s+/,x(function(){this.pipeline.remove(x.stemmer),this.ref("path"),this.field("topics",{boost:15}),this.field("title",{boost:10}),this.field("headings",{boost:5}),this.field("members",{boost:4}),this.field("keywords",{boost:2}),a(this)})}(function i({dictionary:a,pages:l}){const u=a.split(" ");return h=>{l.forEach(v=>{const f=function n(a,l){return{...a,headings:a.headings?.map(u=>l[u]).join(" ")??"",keywords:a.keywords?.map(u=>l[u]).join(" ")??"",members:a.members?.map(u=>l[u]).join(" ")??""}}(v,u);h.add(f),D[f.path]=f})}}(v)),postMessage({type:l,id:u,payload:!0})});break;case"query-index":postMessage({type:l,id:u,payload:{query:h,results:o(h)}});break;default:postMessage({type:l,id:u,payload:{error:"invalid message type"}})}})})()})();
//# sourceMappingURL=src_app_search_search_worker_ts.fffdcc7bd635f2be.js.map
