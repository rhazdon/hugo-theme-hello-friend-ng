/* PrismJS 1.24.1
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+bash+csv+docker+git+http+hpkp+hsts+java+javadoc+javadoclike+javastacktrace+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+powershell+puppet+python+regex+typescript+typoscript+wasm+yaml */
var _self =
		'undefined' != typeof window
			? window
			: 'undefined' != typeof WorkerGlobalScope &&
			  self instanceof WorkerGlobalScope
			? self
			: {},
	Prism = (function (u) {
		var c = /\blang(?:uage)?-([\w-]+)\b/i,
			n = 0,
			e = {},
			M = {
				manual: u.Prism && u.Prism.manual,
				disableWorkerMessageHandler:
					u.Prism && u.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof W
							? new W(n.type, e(n.content), n.alias)
							: Array.isArray(n)
							? n.map(e)
							: n
									.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/\u00a0/g, ' ');
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1);
					},
					objId: function (e) {
						return (
							e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
						);
					},
					clone: function t(e, r) {
						var a, n;
						switch (((r = r || {}), M.util.type(e))) {
							case 'Object':
								if (((n = M.util.objId(e)), r[n])) return r[n];
								for (var i in ((a = {}), (r[n] = a), e))
									e.hasOwnProperty(i) && (a[i] = t(e[i], r));
								return a;
							case 'Array':
								return (
									(n = M.util.objId(e)),
									r[n]
										? r[n]
										: ((a = []),
										  (r[n] = a),
										  e.forEach(function (e, n) {
												a[n] = t(e, r);
										  }),
										  a)
								);
							default:
								return e;
						}
					},
					getLanguage: function (e) {
						for (; e && !c.test(e.className); ) e = e.parentElement;
						return e
							? (e.className.match(c) || [, 'none'])[1].toLowerCase()
							: 'none';
					},
					currentScript: function () {
						if ('undefined' == typeof document) return null;
						if ('currentScript' in document) return document.currentScript;
						try {
							throw new Error();
						} catch (e) {
							var n = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) ||
								[])[1];
							if (n) {
								var t = document.getElementsByTagName('script');
								for (var r in t) if (t[r].src == n) return t[r];
							}
							return null;
						}
					},
					isActive: function (e, n, t) {
						for (var r = 'no-' + n; e; ) {
							var a = e.classList;
							if (a.contains(n)) return !0;
							if (a.contains(r)) return !1;
							e = e.parentElement;
						}
						return !!t;
					},
				},
				languages: {
					plain: e,
					plaintext: e,
					text: e,
					txt: e,
					extend: function (e, n) {
						var t = M.util.clone(M.languages[e]);
						for (var r in n) t[r] = n[r];
						return t;
					},
					insertBefore: function (t, e, n, r) {
						var a = (r = r || M.languages)[t],
							i = {};
						for (var l in a)
							if (a.hasOwnProperty(l)) {
								if (l == e)
									for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o]);
								n.hasOwnProperty(l) || (i[l] = a[l]);
							}
						var s = r[t];
						return (
							(r[t] = i),
							M.languages.DFS(M.languages, function (e, n) {
								n === s && e != t && (this[e] = i);
							}),
							i
						);
					},
					DFS: function e(n, t, r, a) {
						a = a || {};
						var i = M.util.objId;
						for (var l in n)
							if (n.hasOwnProperty(l)) {
								t.call(n, l, n[l], r || l);
								var o = n[l],
									s = M.util.type(o);
								'Object' !== s || a[i(o)]
									? 'Array' !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a))
									: ((a[i(o)] = !0), e(o, t, null, a));
							}
					},
				},
				plugins: {},
				highlightAll: function (e, n) {
					M.highlightAllUnder(document, e, n);
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
					};
					M.hooks.run('before-highlightall', r),
						(r.elements = Array.prototype.slice.apply(
							r.container.querySelectorAll(r.selector)
						)),
						M.hooks.run('before-all-elements-highlight', r);
					for (var a, i = 0; (a = r.elements[i++]); )
						M.highlightElement(a, !0 === n, r.callback);
				},
				highlightElement: function (e, n, t) {
					var r = M.util.getLanguage(e),
						a = M.languages[r];
					e.className =
						e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r;
					var i = e.parentElement;
					i &&
						'pre' === i.nodeName.toLowerCase() &&
						(i.className =
							i.className.replace(c, '').replace(/\s+/g, ' ') +
							' language-' +
							r);
					var l = { element: e, language: r, grammar: a, code: e.textContent };
					function o(e) {
						(l.highlightedCode = e),
							M.hooks.run('before-insert', l),
							(l.element.innerHTML = l.highlightedCode),
							M.hooks.run('after-highlight', l),
							M.hooks.run('complete', l),
							t && t.call(l.element);
					}
					if (
						(M.hooks.run('before-sanity-check', l),
						(i = l.element.parentElement) &&
							'pre' === i.nodeName.toLowerCase() &&
							!i.hasAttribute('tabindex') &&
							i.setAttribute('tabindex', '0'),
						!l.code)
					)
						return M.hooks.run('complete', l), void (t && t.call(l.element));
					if ((M.hooks.run('before-highlight', l), l.grammar))
						if (n && u.Worker) {
							var s = new Worker(M.filename);
							(s.onmessage = function (e) {
								o(e.data);
							}),
								s.postMessage(
									JSON.stringify({
										language: l.language,
										code: l.code,
										immediateClose: !0,
									})
								);
						} else o(M.highlight(l.code, l.grammar, l.language));
					else o(M.util.encode(l.code));
				},
				highlight: function (e, n, t) {
					var r = { code: e, grammar: n, language: t };
					return (
						M.hooks.run('before-tokenize', r),
						(r.tokens = M.tokenize(r.code, r.grammar)),
						M.hooks.run('after-tokenize', r),
						W.stringify(M.util.encode(r.tokens), r.language)
					);
				},
				tokenize: function (e, n) {
					var t = n.rest;
					if (t) {
						for (var r in t) n[r] = t[r];
						delete n.rest;
					}
					var a = new i();
					return (
						I(a, a.head, e),
						(function e(n, t, r, a, i, l) {
							for (var o in r)
								if (r.hasOwnProperty(o) && r[o]) {
									var s = r[o];
									s = Array.isArray(s) ? s : [s];
									for (var u = 0; u < s.length; ++u) {
										if (l && l.cause == o + ',' + u) return;
										var c = s[u],
											g = c.inside,
											f = !!c.lookbehind,
											h = !!c.greedy,
											d = c.alias;
										if (h && !c.pattern.global) {
											var p = c.pattern.toString().match(/[imsuy]*$/)[0];
											c.pattern = RegExp(c.pattern.source, p + 'g');
										}
										for (
											var v = c.pattern || c, m = a.next, y = i;
											m !== t.tail && !(l && y >= l.reach);
											y += m.value.length, m = m.next
										) {
											var b = m.value;
											if (t.length > n.length) return;
											if (!(b instanceof W)) {
												var k,
													x = 1;
												if (h) {
													if (!(k = z(v, y, n, f))) break;
													var w = k.index,
														A = k.index + k[0].length,
														P = y;
													for (P += m.value.length; P <= w; )
														(m = m.next), (P += m.value.length);
													if (
														((P -= m.value.length),
														(y = P),
														m.value instanceof W)
													)
														continue;
													for (
														var E = m;
														E !== t.tail &&
														(P < A || 'string' == typeof E.value);
														E = E.next
													)
														x++, (P += E.value.length);
													x--, (b = n.slice(y, P)), (k.index -= y);
												} else if (!(k = z(v, 0, b, f))) continue;
												var w = k.index,
													S = k[0],
													O = b.slice(0, w),
													L = b.slice(w + S.length),
													N = y + b.length;
												l && N > l.reach && (l.reach = N);
												var j = m.prev;
												O && ((j = I(t, j, O)), (y += O.length)), q(t, j, x);
												var C = new W(o, g ? M.tokenize(S, g) : S, d, S);
												if (((m = I(t, j, C)), L && I(t, m, L), 1 < x)) {
													var _ = { cause: o + ',' + u, reach: N };
													e(n, t, r, m.prev, y, _),
														l && _.reach > l.reach && (l.reach = _.reach);
												}
											}
										}
									}
								}
						})(e, a, n, a.head, 0),
						(function (e) {
							var n = [],
								t = e.head.next;
							for (; t !== e.tail; ) n.push(t.value), (t = t.next);
							return n;
						})(a)
					);
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = M.hooks.all;
						(t[e] = t[e] || []), t[e].push(n);
					},
					run: function (e, n) {
						var t = M.hooks.all[e];
						if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n);
					},
				},
				Token: W,
			};
		function W(e, n, t, r) {
			(this.type = e),
				(this.content = n),
				(this.alias = t),
				(this.length = 0 | (r || '').length);
		}
		function z(e, n, t, r) {
			e.lastIndex = n;
			var a = e.exec(t);
			if (a && r && a[1]) {
				var i = a[1].length;
				(a.index += i), (a[0] = a[0].slice(i));
			}
			return a;
		}
		function i() {
			var e = { value: null, prev: null, next: null },
				n = { value: null, prev: e, next: null };
			(e.next = n), (this.head = e), (this.tail = n), (this.length = 0);
		}
		function I(e, n, t) {
			var r = n.next,
				a = { value: t, prev: n, next: r };
			return (n.next = a), (r.prev = a), e.length++, a;
		}
		function q(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next;
			((n.next = r).prev = n), (e.length -= a);
		}
		if (
			((u.Prism = M),
			(W.stringify = function n(e, t) {
				if ('string' == typeof e) return e;
				if (Array.isArray(e)) {
					var r = '';
					return (
						e.forEach(function (e) {
							r += n(e, t);
						}),
						r
					);
				}
				var a = {
						type: e.type,
						content: n(e.content, t),
						tag: 'span',
						classes: ['token', e.type],
						attributes: {},
						language: t,
					},
					i = e.alias;
				i &&
					(Array.isArray(i)
						? Array.prototype.push.apply(a.classes, i)
						: a.classes.push(i)),
					M.hooks.run('wrap', a);
				var l = '';
				for (var o in a.attributes)
					l +=
						' ' +
						o +
						'="' +
						(a.attributes[o] || '').replace(/"/g, '&quot;') +
						'"';
				return (
					'<' +
					a.tag +
					' class="' +
					a.classes.join(' ') +
					'"' +
					l +
					'>' +
					a.content +
					'</' +
					a.tag +
					'>'
				);
			}),
			!u.document)
		)
			return (
				u.addEventListener &&
					(M.disableWorkerMessageHandler ||
						u.addEventListener(
							'message',
							function (e) {
								var n = JSON.parse(e.data),
									t = n.language,
									r = n.code,
									a = n.immediateClose;
								u.postMessage(M.highlight(r, M.languages[t], t)),
									a && u.close();
							},
							!1
						)),
				M
			);
		var t = M.util.currentScript();
		function r() {
			M.manual || M.highlightAll();
		}
		if (
			(t &&
				((M.filename = t.src),
				t.hasAttribute('data-manual') && (M.manual = !0)),
			!M.manual)
		) {
			var a = document.readyState;
			'loading' === a || ('interactive' === a && t && t.defer)
				? document.addEventListener('DOMContentLoaded', r)
				: window.requestAnimationFrame
				? window.requestAnimationFrame(r)
				: window.setTimeout(r, 16);
		}
		return M;
	})(_self);
'undefined' != typeof module && module.exports && (module.exports = Prism),
	'undefined' != typeof global && (global.Prism = Prism);
(Prism.languages.markup = {
	comment: /<!--(?:(?!<!--)[\s\S])*?-->/,
	prolog: /<\?[\s\S]+?\?>/,
	doctype: {
		pattern:
			/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null,
			},
			string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
			punctuation: /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			name: /[^\s<>'"]+/,
		},
	},
	cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
	tag: {
		pattern:
			/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
				},
			},
			punctuation: /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ },
			},
		},
	},
	entity: [
		{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
		/&#x?[\da-f]{1,8};/i,
	],
}),
	(Prism.languages.markup.tag.inside['attr-value'].inside.entity =
		Prism.languages.markup.entity),
	(Prism.languages.markup.doctype.inside['internal-subset'].inside =
		Prism.languages.markup),
	Prism.hooks.add('wrap', function (a) {
		'entity' === a.type &&
			(a.attributes.title = a.content.replace(/&amp;/, '&'));
	}),
	Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
		value: function (a, e) {
			var s = {};
			(s['language-' + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e],
			}),
				(s.cdata = /^<!\[CDATA\[|\]\]>$/i);
			var t = {
				'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
			};
			t['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] };
			var n = {};
			(n[a] = {
				pattern: RegExp(
					'(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
						/__/g,
						function () {
							return a;
						}
					),
					'i'
				),
				lookbehind: !0,
				greedy: !0,
				inside: t,
			}),
				Prism.languages.insertBefore('markup', 'cdata', n);
		},
	}),
	Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
		value: function (a, e) {
			Prism.languages.markup.tag.inside['special-attr'].push({
				pattern: RegExp(
					'(^|["\'\\s])(?:' +
						a +
						')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))',
					'i'
				),
				lookbehind: !0,
				inside: {
					'attr-name': /^[^\s=]+/,
					'attr-value': {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: !0,
								alias: [e, 'language-' + e],
								inside: Prism.languages[e],
							},
							punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
						},
					},
				},
			});
		},
	}),
	(Prism.languages.html = Prism.languages.markup),
	(Prism.languages.mathml = Prism.languages.markup),
	(Prism.languages.svg = Prism.languages.markup),
	(Prism.languages.xml = Prism.languages.extend('markup', {})),
	(Prism.languages.ssml = Prism.languages.xml),
	(Prism.languages.atom = Prism.languages.xml),
	(Prism.languages.rss = Prism.languages.xml);
!(function (s) {
	var e =
		/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	(s.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				rule: /^@[\w-]+/,
				'selector-function-argument': {
					pattern:
						/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: !0,
					alias: 'selector',
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0,
				},
			},
		},
		url: {
			pattern: RegExp(
				'\\burl\\((?:' + e.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
				'i'
			),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
			},
		},
		selector: {
			pattern: RegExp(
				'(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
					e.source +
					')*(?=\\s*\\{)'
			),
			lookbehind: !0,
		},
		string: { pattern: e, greedy: !0 },
		property: {
			pattern:
				/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: !0,
		},
		important: /!important\b/i,
		function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
		punctuation: /[(){};:,]/,
	}),
		(s.languages.css.atrule.inside.rest = s.languages.css);
	var t = s.languages.markup;
	t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
})(Prism);
Prism.languages.clike = {
	comment: [
		{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
	],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	'class-name': {
		pattern:
			/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword:
		/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\b\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/,
};
(Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern:
				/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
			lookbehind: !0,
		},
	],
	keyword: [
		{ pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
		{
			pattern:
				/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0,
		},
	],
	function:
		/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	number:
		/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	operator:
		/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
	(Prism.languages.javascript['class-name'][0].pattern =
		/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
	Prism.languages.insertBefore('javascript', 'keyword', {
		regex: {
			pattern:
				/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				'regex-source': {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: 'language-regex',
					inside: Prism.languages.regex,
				},
				'regex-delimiter': /^\/|\/$/,
				'regex-flags': /^[a-z]+$/,
			},
		},
		'function-variable': {
			pattern:
				/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: 'function',
		},
		parameter: [
			{
				pattern:
					/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern:
					/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
	}),
	Prism.languages.insertBefore('javascript', 'string', {
		hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
		'template-string': {
			pattern:
				/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: !0,
			inside: {
				'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
				interpolation: {
					pattern:
						/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: !0,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation',
						},
						rest: Prism.languages.javascript,
					},
				},
				string: /[\s\S]+/,
			},
		},
	}),
	Prism.languages.markup &&
		(Prism.languages.markup.tag.addInlined('script', 'javascript'),
		Prism.languages.markup.tag.addAttribute(
			'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
			'javascript'
		)),
	(Prism.languages.js = Prism.languages.javascript);
!(function (e) {
	var t =
			'\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
		n = {
			pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
			lookbehind: !0,
			alias: 'punctuation',
			inside: null,
		},
		a = {
			bash: n,
			environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
			variable: [
				{
					pattern: /\$?\(\([\s\S]+?\)\)/,
					greedy: !0,
					inside: {
						variable: [
							{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
							/^\$\(\(/,
						],
						number:
							/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
						operator:
							/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
						punctuation: /\(\(?|\)\)?|,|;/,
					},
				},
				{
					pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
					greedy: !0,
					inside: { variable: /^\$\(|^`|\)$|`$/ },
				},
				{
					pattern: /\$\{[^}]+\}/,
					greedy: !0,
					inside: {
						operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
						punctuation: /[\[\]]/,
						environment: {
							pattern: RegExp('(\\{)' + t),
							lookbehind: !0,
							alias: 'constant',
						},
					},
				},
				/\$(?:\w+|[#?*!@$])/,
			],
			entity:
				/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
		};
	(e.languages.bash = {
		shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
		comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
		'function-name': [
			{
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: !0,
				alias: 'function',
			},
			{ pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
		],
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: !0,
		},
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
					lookbehind: !0,
					alias: 'constant',
				},
			},
			alias: 'variable',
			lookbehind: !0,
		},
		string: [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: !0,
				greedy: !0,
				inside: { bash: n },
			},
			{
				pattern:
					/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{ pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
			{
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: !0,
				inside: { entity: a.entity },
			},
		],
		environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
		variable: a.variable,
		function: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		keyword: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		builtin: {
			pattern:
				/(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: 'class-name',
		},
		boolean: {
			pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
		operator: {
			pattern:
				/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
	}),
		(n.inside = e.languages.bash);
	for (
		var s = [
				'comment',
				'function-name',
				'for-or-select',
				'assign-left',
				'string',
				'environment',
				'function',
				'keyword',
				'builtin',
				'boolean',
				'file-descriptor',
				'operator',
				'punctuation',
				'number',
			],
			i = a.variable[1].inside,
			o = 0;
		o < s.length;
		o++
	)
		i[s[o]] = e.languages.bash[s[o]];
	e.languages.shell = e.languages.bash;
})(Prism);
Prism.languages.csv = {
	value: /[^\r\n,"]+|"(?:[^"]|"")*"(?!")/,
	punctuation: /,/,
};
!(function (e) {
	var r = '(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)'.replace(
			/<SP_BS>/g,
			function () {
				return '\\\\[\r\n](?:\\s|\\\\[\r\n]|#.*(?!.))*(?![\\s#]|\\\\[\r\n])';
			}
		),
		n =
			'"(?:[^"\\\\\r\n]|\\\\(?:\r\n|[^]))*"|\'(?:[^\'\\\\\r\n]|\\\\(?:\r\n|[^]))*\'',
		t = '--[\\w-]+=(?:<STR>|(?!["\'])(?:[^\\s\\\\]|\\\\.)+)'.replace(
			/<STR>/g,
			function () {
				return n;
			}
		),
		o = { pattern: RegExp(n), greedy: !0 },
		i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
	function a(e, n) {
		return (
			(e = e
				.replace(/<OPT>/g, function () {
					return t;
				})
				.replace(/<SP>/g, function () {
					return r;
				})),
			RegExp(e, n)
		);
	}
	(e.languages.docker = {
		instruction: {
			pattern:
				/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
			lookbehind: !0,
			greedy: !0,
			inside: {
				options: {
					pattern: a('(^(?:ONBUILD<SP>)?\\w+<SP>)<OPT>(?:<SP><OPT>)*', 'i'),
					lookbehind: !0,
					greedy: !0,
					inside: {
						property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 },
						string: [
							o,
							{ pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0 },
						],
						operator: /\\$/m,
						punctuation: /=/,
					},
				},
				keyword: [
					{
						pattern: a(
							'(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\\b',
							'i'
						),
						lookbehind: !0,
						greedy: !0,
					},
					{
						pattern: a(
							'(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\\\]+<SP>)AS',
							'i'
						),
						lookbehind: !0,
						greedy: !0,
					},
					{ pattern: a('(^ONBUILD<SP>)\\w+', 'i'), lookbehind: !0, greedy: !0 },
					{ pattern: /^\w+/, greedy: !0 },
				],
				comment: i,
				string: o,
				variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
				operator: /\\$/m,
			},
		},
		comment: i,
	}),
		(e.languages.dockerfile = e.languages.docker);
})(Prism);
Prism.languages.git = {
	comment: /^#.*/m,
	deleted: /^[-–].*/m,
	inserted: /^\+.*/m,
	string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
	command: { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/m } },
	coord: /^@@.*@@$/m,
	'commit-sha1': /^commit \w{40}$/m,
};
!(function (t) {
	t.languages.http = {
		'request-line': {
			pattern:
				/^(?:GET|HEAD|POST|PUT|DELETE|CONNECT|OPTIONS|TRACE|PATCH|PRI|SEARCH)\s(?:https?:\/\/|\/)\S*\sHTTP\/[0-9.]+/m,
			inside: {
				method: { pattern: /^[A-Z]+\b/, alias: 'property' },
				'request-target': {
					pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
					lookbehind: !0,
					alias: 'url',
					inside: t.languages.uri,
				},
				'http-version': {
					pattern: /^(\s)HTTP\/[0-9.]+/,
					lookbehind: !0,
					alias: 'property',
				},
			},
		},
		'response-status': {
			pattern: /^HTTP\/[0-9.]+ \d+ .+/m,
			inside: {
				'http-version': { pattern: /^HTTP\/[0-9.]+/, alias: 'property' },
				'status-code': {
					pattern: /^(\s)\d+(?=\s)/,
					lookbehind: !0,
					alias: 'number',
				},
				'reason-phrase': {
					pattern: /^(\s).+/,
					lookbehind: !0,
					alias: 'string',
				},
			},
		},
		'header-name': { pattern: /^[\w-]+:(?=.)/m, alias: 'keyword' },
	};
	var a,
		e,
		s,
		n = t.languages,
		r = {
			'application/javascript': n.javascript,
			'application/json': n.json || n.javascript,
			'application/xml': n.xml,
			'text/xml': n.xml,
			'text/html': n.html,
			'text/css': n.css,
		},
		i = { 'application/json': !0, 'application/xml': !0 };
	for (var p in r)
		if (r[p]) {
			a = a || {};
			var o = i[p]
				? (void 0,
				  (s = (e = p).replace(/^[a-z]+\//, '')),
				  '(?:' + e + '|\\w+/(?:[\\w.-]+\\+)+' + s + '(?![+\\w.-]))')
				: p;
			a[p.replace(/\//g, '-')] = {
				pattern: RegExp(
					'(content-type:\\s*' +
						o +
						'(?:(?:\\r\\n?|\\n).+)*)(?:\\r?\\n|\\r){2}[\\s\\S]*',
					'i'
				),
				lookbehind: !0,
				inside: r[p],
			};
		}
	a && t.languages.insertBefore('http', 'header-name', a);
})(Prism);
Prism.languages.hpkp = {
	directive: {
		pattern:
			/\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
		alias: 'keyword',
	},
	safe: { pattern: /\b\d{7,}\b/, alias: 'selector' },
	unsafe: { pattern: /\b\d{1,6}\b/, alias: 'function' },
};
Prism.languages.hsts = {
	directive: {
		pattern: /\b(?:max-age=|includeSubDomains|preload)/,
		alias: 'keyword',
	},
	safe: { pattern: /\b\d{8,}\b/, alias: 'selector' },
	unsafe: { pattern: /\b\d{1,7}\b/, alias: 'function' },
};
!(function (e) {
	var t =
			/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,
		n = '(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*',
		a = {
			pattern: RegExp(n + '[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b'),
			lookbehind: !0,
			inside: {
				namespace: {
					pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
					inside: { punctuation: /\./ },
				},
				punctuation: /\./,
			},
		};
	(e.languages.java = e.languages.extend('clike', {
		'class-name': [
			a,
			{
				pattern: RegExp(n + '[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])'),
				lookbehind: !0,
				inside: a.inside,
			},
		],
		keyword: t,
		function: [
			e.languages.clike.function,
			{ pattern: /(::\s*)[a-z_]\w*/, lookbehind: !0 },
		],
		number:
			/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		operator: {
			pattern:
				/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: !0,
		},
	})),
		e.languages.insertBefore('java', 'string', {
			'triple-quoted-string': {
				pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
				greedy: !0,
				alias: 'string',
			},
		}),
		e.languages.insertBefore('java', 'class-name', {
			annotation: {
				pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
				lookbehind: !0,
				alias: 'punctuation',
			},
			generics: {
				pattern:
					/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
				inside: {
					'class-name': a,
					keyword: t,
					punctuation: /[<>(),.:]/,
					operator: /[?&|]/,
				},
			},
			namespace: {
				pattern: RegExp(
					'(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?'.replace(
						/<keyword>/g,
						function () {
							return t.source;
						}
					)
				),
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
		});
})(Prism);
!(function (p) {
	var a = (p.languages.javadoclike = {
		parameter: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
			lookbehind: !0,
		},
		keyword: {
			pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
			lookbehind: !0,
		},
		punctuation: /[{}]/,
	});
	Object.defineProperty(a, 'addSupport', {
		value: function (a, e) {
			'string' == typeof a && (a = [a]),
				a.forEach(function (a) {
					!(function (a, e) {
						var n = 'doc-comment',
							t = p.languages[a];
						if (t) {
							var r = t[n];
							if (!r) {
								var o = {
									'doc-comment': {
										pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
										lookbehind: !0,
										alias: 'comment',
									},
								};
								r = (t = p.languages.insertBefore(a, 'comment', o))[n];
							}
							if (
								(r instanceof RegExp && (r = t[n] = { pattern: r }),
								Array.isArray(r))
							)
								for (var i = 0, s = r.length; i < s; i++)
									r[i] instanceof RegExp && (r[i] = { pattern: r[i] }), e(r[i]);
							else e(r);
						}
					})(a, function (a) {
						a.inside || (a.inside = {}), (a.inside.rest = e);
					});
				});
		},
	}),
		a.addSupport(['java', 'javascript', 'php'], a);
})(Prism);
!(function (a) {
	var e = /(^(?:[\t ]*(?:\*\s*)*))[^*\s].*$/m,
		n =
			'(?:\\b[a-zA-Z]\\w+\\s*\\.\\s*)*\\b[A-Z]\\w*(?:\\s*<mem>)?|<mem>'.replace(
				/<mem>/g,
				function () {
					return '#\\s*\\w+(?:\\s*\\([^()]*\\))?';
				}
			);
	(a.languages.javadoc = a.languages.extend('javadoclike', {})),
		a.languages.insertBefore('javadoc', 'keyword', {
			reference: {
				pattern: RegExp(
					'(@(?:exception|throws|see|link|linkplain|value)\\s+(?:\\*\\s*)?)(?:' +
						n +
						')'
				),
				lookbehind: !0,
				inside: {
					function: { pattern: /(#\s*)\w+(?=\s*\()/, lookbehind: !0 },
					field: { pattern: /(#\s*)\w+/, lookbehind: !0 },
					namespace: {
						pattern: /\b(?:[a-z]\w*\s*\.\s*)+/,
						inside: { punctuation: /\./ },
					},
					'class-name': /\b[A-Z]\w*/,
					keyword: a.languages.java.keyword,
					punctuation: /[#()[\],.]/,
				},
			},
			'class-name': {
				pattern: /(@param\s+)<[A-Z]\w*>/,
				lookbehind: !0,
				inside: { punctuation: /[.<>]/ },
			},
			'code-section': [
				{
					pattern:
						/(\{@code\s+(?!\s))(?:[^\s{}]|\s+(?![\s}])|\{(?:[^{}]|\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})*\})+(?=\s*\})/,
					lookbehind: !0,
					inside: {
						code: {
							pattern: e,
							lookbehind: !0,
							inside: a.languages.java,
							alias: 'language-java',
						},
					},
				},
				{
					pattern:
						/(<(code|pre|tt)>(?!<code>)\s*)\S(?:\S|\s+\S)*?(?=\s*<\/\2>)/,
					lookbehind: !0,
					inside: {
						line: {
							pattern: e,
							lookbehind: !0,
							inside: {
								tag: a.languages.markup.tag,
								entity: a.languages.markup.entity,
								code: {
									pattern: /.+/,
									inside: a.languages.java,
									alias: 'language-java',
								},
							},
						},
					},
				},
			],
			tag: a.languages.markup.tag,
			entity: a.languages.markup.entity,
		}),
		a.languages.javadoclike.addSupport('java', a.languages.javadoc);
})(Prism);
Prism.languages.javastacktrace = {
	summary: {
		pattern:
			/^[\t ]*(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,
		inside: {
			keyword: {
				pattern: /^(\s*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,
				lookbehind: !0,
			},
			string: { pattern: /^(\s*)"[^"]*"/, lookbehind: !0 },
			exceptions: {
				pattern: /^(:?\s*)[\w$.]+(?=:|$)/,
				lookbehind: !0,
				inside: {
					'class-name': /[\w$]+(?=$|:)/,
					namespace: /[a-z]\w*/,
					punctuation: /[.:]/,
				},
			},
			message: { pattern: /(:\s*)\S.*/, lookbehind: !0, alias: 'string' },
			punctuation: /:/,
		},
	},
	'stack-frame': {
		pattern: /^[\t ]*at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,
		inside: {
			keyword: { pattern: /^(\s*)at(?= )/, lookbehind: !0 },
			source: [
				{
					pattern: /(\()\w+\.\w+:\d+(?=\))/,
					lookbehind: !0,
					inside: {
						file: /^\w+\.\w+/,
						punctuation: /:/,
						'line-number': { pattern: /\d+/, alias: 'number' },
					},
				},
				{
					pattern: /(\()[^()]*(?=\))/,
					lookbehind: !0,
					inside: { keyword: /^(?:Unknown Source|Native Method)$/ },
				},
			],
			'class-name': /[\w$]+(?=\.(?:<init>|[\w$]+)\()/,
			function: /(?:<init>|[\w$]+)(?=\()/,
			'class-loader': {
				pattern: /(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,
				lookbehind: !0,
				alias: 'namespace',
				inside: { punctuation: /\./ },
			},
			module: {
				pattern: /([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,
				lookbehind: !0,
				inside: {
					version: { pattern: /(@)[\s\S]+/, lookbehind: !0, alias: 'number' },
					punctuation: /[@.]/,
				},
			},
			namespace: { pattern: /(?:[a-z]\w*\.)+/, inside: { punctuation: /\./ } },
			punctuation: /[()/.]/,
		},
	},
	more: {
		pattern: /^[\t ]*\.{3} \d+ [a-z]+(?: [a-z]+)*/m,
		inside: {
			punctuation: /\.{3}/,
			number: /\d+/,
			keyword: /\b[a-z]+(?: [a-z]+)*\b/,
		},
	},
};
!(function (e) {
	(e.languages.typescript = e.languages.extend('javascript', {
		'class-name': {
			pattern:
				/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: !0,
			greedy: !0,
			inside: null,
		},
		builtin:
			/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
	})),
		e.languages.typescript.keyword.push(
			/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
			/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
			/\btype\b(?=\s*(?:[\{*]|$))/
		),
		delete e.languages.typescript.parameter;
	var s = e.languages.extend('typescript', {});
	delete s['class-name'],
		(e.languages.typescript['class-name'].inside = s),
		e.languages.insertBefore('typescript', 'function', {
			decorator: {
				pattern: /@[$\w\xA0-\uFFFF]+/,
				inside: {
					at: { pattern: /^@/, alias: 'operator' },
					function: /^[\s\S]+/,
				},
			},
			'generic-function': {
				pattern:
					/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
				greedy: !0,
				inside: {
					function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
					generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: s },
				},
			},
		}),
		(e.languages.ts = e.languages.typescript);
})(Prism);
!(function (e) {
	var a = e.languages.javascript,
		n = '\\{(?:[^{}]|\\{(?:[^{}]|\\{[^{}]*\\})*\\})+\\}',
		t = '(@(?:param|arg|argument|property)\\s+(?:' + n + '\\s+)?)';
	(e.languages.jsdoc = e.languages.extend('javadoclike', {
		parameter: {
			pattern: RegExp(t + '(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?=\\s|$)'),
			lookbehind: !0,
			inside: { punctuation: /\./ },
		},
	})),
		e.languages.insertBefore('jsdoc', 'keyword', {
			'optional-parameter': {
				pattern: RegExp(
					t + '\\[(?:(?!\\s)[$\\w\\xA0-\\uFFFF.])+(?:=[^[\\]]+)?\\](?=\\s|$)'
				),
				lookbehind: !0,
				inside: {
					parameter: {
						pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
						lookbehind: !0,
						inside: { punctuation: /\./ },
					},
					code: {
						pattern: /(=)[\s\S]*(?=\]$)/,
						lookbehind: !0,
						inside: a,
						alias: 'language-javascript',
					},
					punctuation: /[=[\]]/,
				},
			},
			'class-name': [
				{
					pattern: RegExp(
						'(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\\s+(?:<TYPE>\\s+)?)[A-Z]\\w*(?:\\.[A-Z]\\w*)*'.replace(
							/<TYPE>/g,
							function () {
								return n;
							}
						)
					),
					lookbehind: !0,
					inside: { punctuation: /\./ },
				},
				{
					pattern: RegExp('(@[a-z]+\\s+)' + n),
					lookbehind: !0,
					inside: {
						string: a.string,
						number: a.number,
						boolean: a.boolean,
						keyword: e.languages.typescript.keyword,
						operator: /=>|\.\.\.|[&|?:*]/,
						punctuation: /[.,;=<>{}()[\]]/,
					},
				},
			],
			example: {
				pattern:
					/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
				lookbehind: !0,
				inside: {
					code: {
						pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
						lookbehind: !0,
						inside: a,
						alias: 'language-javascript',
					},
				},
			},
		}),
		e.languages.javadoclike.addSupport('javascript', e.languages.jsdoc);
})(Prism);
!(function (a) {
	function e(a, e) {
		return RegExp(
			a.replace(/<ID>/g, function () {
				return '(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*';
			}),
			e
		);
	}
	a.languages.insertBefore('javascript', 'function-variable', {
		'method-variable': {
			pattern: RegExp(
				'(\\.\\s*)' + a.languages.javascript['function-variable'].pattern.source
			),
			lookbehind: !0,
			alias: ['function-variable', 'method', 'function', 'property-access'],
		},
	}),
		a.languages.insertBefore('javascript', 'function', {
			method: {
				pattern: RegExp('(\\.\\s*)' + a.languages.javascript.function.source),
				lookbehind: !0,
				alias: ['function', 'property-access'],
			},
		}),
		a.languages.insertBefore('javascript', 'constant', {
			'known-class-name': [
				{
					pattern:
						/\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
					alias: 'class-name',
				},
				{ pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
			],
		}),
		a.languages.insertBefore('javascript', 'keyword', {
			imports: {
				pattern: e(
					'(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)'
				),
				lookbehind: !0,
				inside: a.languages.javascript,
			},
			exports: {
				pattern: e(
					'(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})'
				),
				lookbehind: !0,
				inside: a.languages.javascript,
			},
		}),
		a.languages.javascript.keyword.unshift(
			{ pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
			{
				pattern:
					/\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
				alias: 'control-flow',
			},
			{ pattern: /\bnull\b/, alias: ['null', 'nil'] },
			{ pattern: /\bundefined\b/, alias: 'nil' }
		),
		a.languages.insertBefore('javascript', 'operator', {
			spread: { pattern: /\.{3}/, alias: 'operator' },
			arrow: { pattern: /=>/, alias: 'operator' },
		}),
		a.languages.insertBefore('javascript', 'punctuation', {
			'property-access': { pattern: e('(\\.\\s*)#?<ID>'), lookbehind: !0 },
			'maybe-class-name': {
				pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
				lookbehind: !0,
			},
			dom: {
				pattern:
					/\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
				alias: 'variable',
			},
			console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
		});
	for (
		var t = [
				'function',
				'function-variable',
				'method',
				'method-variable',
				'property-access',
			],
			r = 0;
		r < t.length;
		r++
	) {
		var n = t[r],
			s = a.languages.javascript[n];
		'RegExp' === a.util.type(s) &&
			(s = a.languages.javascript[n] = { pattern: s });
		var o = s.inside || {};
		(s.inside = o)['maybe-class-name'] = /^[A-Z][\s\S]*/;
	}
})(Prism);
(Prism.languages.json = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: !0,
		greedy: !0,
	},
	comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:true|false)\b/,
	null: { pattern: /\bnull\b/, alias: 'keyword' },
}),
	(Prism.languages.webmanifest = Prism.languages.json);
!(function (n) {
	var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
	n.languages.json5 = n.languages.extend('json', {
		property: [
			{ pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 },
			{
				pattern:
					/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
				alias: 'unquoted',
			},
		],
		string: { pattern: e, greedy: !0 },
		number:
			/[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
	});
})(Prism);
(Prism.languages.jsonp = Prism.languages.extend('json', {
	punctuation: /[{}[\]();,.]/,
})),
	Prism.languages.insertBefore('jsonp', 'punctuation', {
		function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/,
	});
Prism.languages.jsstacktrace = {
	'error-message': { pattern: /^\S.*/m, alias: 'string' },
	'stack-frame': {
		pattern: /(^[ \t]+)at[ \t].*/m,
		lookbehind: !0,
		inside: {
			'not-my-code': {
				pattern:
					/^at[ \t]+(?!\s)(?:node\.js|<unknown>|.*(?:node_modules|\(<anonymous>\)|\(<unknown>|<anonymous>$|\(internal\/|\(node\.js)).*/m,
				alias: 'comment',
			},
			filename: {
				pattern: /(\bat\s+(?!\s)|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
				lookbehind: !0,
				alias: 'url',
			},
			function: {
				pattern:
					/(at\s+(?:new\s+)?)(?!\s)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
				lookbehind: !0,
				inside: { punctuation: /\./ },
			},
			punctuation: /[()]/,
			keyword: /\b(?:at|new)\b/,
			alias: {
				pattern: /\[(?:as\s+)?(?!\s)[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
				alias: 'variable',
			},
			'line-number': {
				pattern: /:[0-9]+(?::[0-9]+)?\b/,
				alias: 'number',
				inside: { punctuation: /:/ },
			},
		},
	},
};
!(function (u) {
	var e = u.languages.javascript['template-string'],
		n = e.pattern.source,
		a = e.inside.interpolation,
		i = a.inside['interpolation-punctuation'],
		r = a.pattern.source;
	function t(e, t) {
		if (u.languages[e])
			return {
				pattern: RegExp('((?:' + t + ')\\s*)' + n),
				lookbehind: !0,
				greedy: !0,
				inside: {
					'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
					'embedded-code': { pattern: /[\s\S]+/, alias: e },
				},
			};
	}
	function s(e, t, n) {
		var r = { code: e, grammar: t, language: n };
		return (
			u.hooks.run('before-tokenize', r),
			(r.tokens = u.tokenize(r.code, r.grammar)),
			u.hooks.run('after-tokenize', r),
			r.tokens
		);
	}
	function d(e) {
		var t = {};
		t['interpolation-punctuation'] = i;
		var n = u.tokenize(e, t);
		if (3 === n.length) {
			var r = [1, 1];
			r.push.apply(r, s(n[1], u.languages.javascript, 'javascript')),
				n.splice.apply(n, r);
		}
		return new u.Token('interpolation', n, a.alias, e);
	}
	function c(a, e, i) {
		var t = u.tokenize(a, {
				interpolation: { pattern: RegExp(r), lookbehind: !0 },
			}),
			f = 0,
			y = {},
			n = s(
				t
					.map(function (e) {
						if ('string' == typeof e) return e;
						for (
							var t, n = e.content;
							-1 !==
							a.indexOf(
								((r = f++), (t = '___' + i.toUpperCase() + '_' + r + '___'))
							);

						);
						return (y[t] = n), t;
						var r;
					})
					.join(''),
				e,
				i
			),
			v = Object.keys(y);
		return (
			(f = 0),
			(function e(t) {
				for (var n = 0; n < t.length; n++) {
					if (f >= v.length) return;
					var r = t[n];
					if ('string' == typeof r || 'string' == typeof r.content) {
						var a = v[f],
							i = 'string' == typeof r ? r : r.content,
							s = i.indexOf(a);
						if (-1 !== s) {
							++f;
							var o = i.substring(0, s),
								p = d(y[a]),
								l = i.substring(s + a.length),
								g = [];
							if ((o && g.push(o), g.push(p), l)) {
								var u = [l];
								e(u), g.push.apply(g, u);
							}
							'string' == typeof r
								? (t.splice.apply(t, [n, 1].concat(g)), (n += g.length - 1))
								: (r.content = g);
						}
					} else {
						var c = r.content;
						Array.isArray(c) ? e(c) : e([c]);
					}
				}
			})(n),
			new u.Token(i, n, 'language-' + i, a)
		);
	}
	u.languages.javascript['template-string'] = [
		t(
			'css',
			'\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)'
		),
		t('html', '\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?='),
		t('svg', '\\bsvg'),
		t('markdown', '\\b(?:md|markdown)'),
		t('graphql', '\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)'),
		t('sql', '\\bsql'),
		e,
	].filter(Boolean);
	var o = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
	function f(e) {
		return 'string' == typeof e
			? e
			: Array.isArray(e)
			? e.map(f).join('')
			: f(e.content);
	}
	u.hooks.add('after-tokenize', function (e) {
		e.language in o &&
			!(function e(t) {
				for (var n = 0, r = t.length; n < r; n++) {
					var a = t[n];
					if ('string' != typeof a) {
						var i = a.content;
						if (Array.isArray(i))
							if ('template-string' === a.type) {
								var s = i[1];
								if (
									3 === i.length &&
									'string' != typeof s &&
									'embedded-code' === s.type
								) {
									var o = f(s),
										p = s.alias,
										l = Array.isArray(p) ? p[0] : p,
										g = u.languages[l];
									if (!g) continue;
									i[1] = c(o, g, l);
								}
							} else e(i);
						else 'string' != typeof i && e([i]);
					}
				}
			})(e.tokens);
	});
})(Prism);
!(function (e) {
	var i = (Prism.languages.powershell = {
			comment: [
				{ pattern: /(^|[^`])<#[\s\S]*?#>/, lookbehind: !0 },
				{ pattern: /(^|[^`])#.*/, lookbehind: !0 },
			],
			string: [
				{
					pattern: /"(?:`[\s\S]|[^`"])*"/,
					greedy: !0,
					inside: {
						function: {
							pattern: /(^|[^`])\$\((?:\$\([^\r\n()]*\)|(?!\$\()[^\r\n)])*\)/,
							lookbehind: !0,
							inside: {},
						},
					},
				},
				{ pattern: /'(?:[^']|'')*'/, greedy: !0 },
			],
			namespace: /\[[a-z](?:\[(?:\[[^\]]*\]|[^\[\]])*\]|[^\[\]])*\]/i,
			boolean: /\$(?:true|false)\b/i,
			variable: /\$\w+\b/,
			function: [
				/\b(?:Add|Approve|Assert|Backup|Block|Checkpoint|Clear|Close|Compare|Complete|Compress|Confirm|Connect|Convert|ConvertFrom|ConvertTo|Copy|Debug|Deny|Disable|Disconnect|Dismount|Edit|Enable|Enter|Exit|Expand|Export|Find|ForEach|Format|Get|Grant|Group|Hide|Import|Initialize|Install|Invoke|Join|Limit|Lock|Measure|Merge|Move|New|Open|Optimize|Out|Ping|Pop|Protect|Publish|Push|Read|Receive|Redo|Register|Remove|Rename|Repair|Request|Reset|Resize|Resolve|Restart|Restore|Resume|Revoke|Save|Search|Select|Send|Set|Show|Skip|Sort|Split|Start|Step|Stop|Submit|Suspend|Switch|Sync|Tee|Test|Trace|Unblock|Undo|Uninstall|Unlock|Unprotect|Unpublish|Unregister|Update|Use|Wait|Watch|Where|Write)-[a-z]+\b/i,
				/\b(?:ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i,
			],
			keyword:
				/\b(?:Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
			operator: {
				pattern:
					/(\W?)(?:!|-(?:eq|ne|gt|ge|lt|le|sh[lr]|not|b?(?:and|x?or)|(?:Not)?(?:Like|Match|Contains|In)|Replace|Join|is(?:Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
				lookbehind: !0,
			},
			punctuation: /[|{}[\];(),.]/,
		}),
		r = i.string[0].inside;
	(r.boolean = i.boolean), (r.variable = i.variable), (r.function.inside = i);
})();
!(function (e) {
	e.languages.puppet = {
		heredoc: [
			{
				pattern:
					/(@\("([^"\r\n\/):]+)"(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
				lookbehind: !0,
				alias: 'string',
				inside: { punctuation: /(?=\S).*\S(?= *$)/ },
			},
			{
				pattern:
					/(@\(([^"\r\n\/):]+)(?:\/[nrts$uL]*)?\).*(?:\r?\n|\r))(?:.*(?:\r?\n|\r(?!\n)))*?[ \t]*(?:\|[ \t]*)?(?:-[ \t]*)?\2/,
				lookbehind: !0,
				greedy: !0,
				alias: 'string',
				inside: { punctuation: /(?=\S).*\S(?= *$)/ },
			},
			{
				pattern: /@\("?(?:[^"\r\n\/):]+)"?(?:\/[nrts$uL]*)?\)/,
				alias: 'string',
				inside: { punctuation: { pattern: /(\().+?(?=\))/, lookbehind: !0 } },
			},
		],
		'multiline-comment': {
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: !0,
			greedy: !0,
			alias: 'comment',
		},
		regex: {
			pattern:
				/((?:\bnode\s+|[~=\(\[\{,]\s*|[=+]>\s*|^\s*))\/(?:[^\/\\]|\\[\s\S])+\/(?:[imx]+\b|\B)/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				'extended-regex': {
					pattern: /^\/(?:[^\/\\]|\\[\s\S])+\/[im]*x[im]*$/,
					inside: { comment: /#.*/ },
				},
			},
		},
		comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
		string: {
			pattern:
				/(["'])(?:\$\{(?:[^'"}]|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}|\$(?!\{)|(?!\1)[^\\$]|\\[\s\S])*\1/,
			greedy: !0,
			inside: { 'double-quoted': { pattern: /^"[\s\S]*"$/, inside: {} } },
		},
		variable: {
			pattern: /\$(?:::)?\w+(?:::\w+)*/,
			inside: { punctuation: /::/ },
		},
		'attr-name': /(?:\b\w+|\*)(?=\s*=>)/,
		function: [
			{ pattern: /(\.)(?!\d)\w+/, lookbehind: !0 },
			/\b(?:contain|debug|err|fail|include|info|notice|realize|require|tag|warning)\b|\b(?!\d)\w+(?=\()/,
		],
		number: /\b(?:0x[a-f\d]+|\d+(?:\.\d+)?(?:e-?\d+)?)\b/i,
		boolean: /\b(?:true|false)\b/,
		keyword:
			/\b(?:application|attr|case|class|consumes|default|define|else|elsif|function|if|import|inherits|node|private|produces|type|undef|unless)\b/,
		datatype: {
			pattern:
				/\b(?:Any|Array|Boolean|Callable|Catalogentry|Class|Collection|Data|Default|Enum|Float|Hash|Integer|NotUndef|Numeric|Optional|Pattern|Regexp|Resource|Runtime|Scalar|String|Struct|Tuple|Type|Undef|Variant)\b/,
			alias: 'symbol',
		},
		operator:
			/=[=~>]?|![=~]?|<(?:<\|?|[=~|-])?|>[>=]?|->?|~>|\|>?>?|[*\/%+?]|\b(?:and|in|or)\b/,
		punctuation: /[\[\]{}().,;]|:+/,
	};
	var n = [
		{
			pattern:
				/(^|[^\\])\$\{(?:[^'"{}]|\{[^}]*\}|(["'])(?:(?!\2)[^\\]|\\[\s\S])*\2)+\}/,
			lookbehind: !0,
			inside: {
				'short-variable': {
					pattern: /(^\$\{)(?!\w+\()(?:::)?\w+(?:::\w+)*/,
					lookbehind: !0,
					alias: 'variable',
					inside: { punctuation: /::/ },
				},
				delimiter: { pattern: /^\$/, alias: 'variable' },
				rest: e.languages.puppet,
			},
		},
		{
			pattern: /(^|[^\\])\$(?:::)?\w+(?:::\w+)*/,
			lookbehind: !0,
			alias: 'variable',
			inside: { punctuation: /::/ },
		},
	];
	(e.languages.puppet.heredoc[0].inside.interpolation = n),
		(e.languages.puppet.string.inside['double-quoted'].inside.interpolation =
			n);
})(Prism);
(Prism.languages.python = {
	comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
	'string-interpolation': {
		pattern:
			/(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: !0,
		inside: {
			interpolation: {
				pattern:
					/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: !0,
				inside: {
					'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation',
					},
					rest: null,
				},
			},
			string: /[\s\S]+/,
		},
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
		greedy: !0,
		alias: 'string',
	},
	string: {
		pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: !0,
	},
	function: {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: !0,
	},
	'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
	decorator: {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/im,
		lookbehind: !0,
		alias: ['annotation', 'punctuation'],
		inside: { punctuation: /\./ },
	},
	keyword:
		/\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	builtin:
		/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	boolean: /\b(?:True|False|None)\b/,
	number:
		/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?\b/i,
	operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	punctuation: /[{}[\];(),.:]/,
}),
	(Prism.languages.python[
		'string-interpolation'
	].inside.interpolation.inside.rest = Prism.languages.python),
	(Prism.languages.py = Prism.languages.python);
!(function (a) {
	var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' },
		n =
			/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,
		t = '(?:[^\\\\-]|' + n.source + ')',
		s = RegExp(t + '-' + t),
		i = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: 'variable' };
	a.languages.regex = {
		charset: {
			pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
			lookbehind: !0,
			inside: {
				'charset-negation': {
					pattern: /(^\[)\^/,
					lookbehind: !0,
					alias: 'operator',
				},
				'charset-punctuation': { pattern: /^\[|\]$/, alias: 'punctuation' },
				range: {
					pattern: s,
					inside: {
						escape: n,
						'range-punctuation': { pattern: /-/, alias: 'operator' },
					},
				},
				'special-escape': e,
				charclass: { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
				escape: n,
			},
		},
		'special-escape': e,
		charclass: { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
		backreference: [
			{ pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
			{
				pattern: /\\k<[^<>']+>/,
				alias: 'keyword',
				inside: { 'group-name': i },
			},
		],
		anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
		escape: n,
		group: [
			{
				pattern:
					/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
				alias: 'punctuation',
				inside: { 'group-name': i },
			},
			{ pattern: /\)/, alias: 'punctuation' },
		],
		quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: 'number' },
		alternation: { pattern: /\|/, alias: 'keyword' },
	};
})(Prism);
!(function (E) {
	var n =
		/\b(?:ACT|ACTIFSUB|CARRAY|CASE|CLEARGIF|COA|COA_INT|CONSTANTS|CONTENT|CUR|EDITPANEL|EFFECT|EXT|FILE|FLUIDTEMPLATE|FORM|FRAME|FRAMESET|GIFBUILDER|GMENU|GMENU_FOLDOUT|GMENU_LAYERS|GP|HMENU|HRULER|HTML|IENV|IFSUB|IMAGE|IMGMENU|IMGMENUITEM|IMGTEXT|IMG_RESOURCE|INCLUDE_TYPOSCRIPT|JSMENU|JSMENUITEM|LLL|LOAD_REGISTER|NO|PAGE|RECORDS|RESTORE_REGISTER|TEMPLATE|TEXT|TMENU|TMENUITEM|TMENU_LAYERS|USER|USER_INT|_GIFBUILDER|global|globalString|globalVar)\b/;
	(E.languages.typoscript = {
		comment: [
			{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
			{
				pattern: /(^|[^\\:= \t]|(?:^|[^= \t])[ \t]+)\/\/.*/,
				lookbehind: !0,
				greedy: !0,
			},
			{ pattern: /(^|[^"'])#.*/, lookbehind: !0, greedy: !0 },
		],
		function: [
			{
				pattern:
					/<INCLUDE_TYPOSCRIPT:\s*source\s*=\s*(?:"[^"\r\n]*"|'[^'\r\n]*')\s*>/,
				inside: {
					string: {
						pattern: /"[^"\r\n]*"|'[^'\r\n]*'/,
						inside: { keyword: n },
					},
					keyword: { pattern: /INCLUDE_TYPOSCRIPT/ },
				},
			},
			{
				pattern: /@import\s*(?:"[^"\r\n]*"|'[^'\r\n]*')/,
				inside: { string: /"[^"\r\n]*"|'[^'\r\n]*'/ },
			},
		],
		string: {
			pattern: /^([^=]*=[< ]?)(?:(?!\]\n).)*/,
			lookbehind: !0,
			inside: {
				function: /\{\$.*\}/,
				keyword: n,
				number: /^[0-9]+$/,
				punctuation: /[,|:]/,
			},
		},
		keyword: n,
		number: { pattern: /\b[0-9]+\s*[.{=]/, inside: { operator: /[.{=]/ } },
		tag: { pattern: /\.?[-\w\\]+\.?/, inside: { punctuation: /\./ } },
		punctuation: /[{}[\];(),.:|]/,
		operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	}),
		(E.languages.tsconfig = E.languages.typoscript);
})(Prism);
Prism.languages.wasm = {
	comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
	string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
	keyword: [
		{ pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
		{
			pattern:
				/\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
			inside: { punctuation: /\./ },
		},
		/\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
	],
	variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/i,
	number:
		/[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
	punctuation: /[()]/,
};
!(function (e) {
	var n = /[*&][^\s[\]{},]+/,
		r =
			/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
		t =
			'(?:' +
			r.source +
			'(?:[ \t]+' +
			n.source +
			')?|' +
			n.source +
			'(?:[ \t]+' +
			r.source +
			')?)',
		a =
			'(?:[^\\s\\x00-\\x08\\x0e-\\x1f!"#%&\'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*'.replace(
				/<PLAIN>/g,
				function () {
					return '[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]';
				}
			),
		d = '"(?:[^"\\\\\r\n]|\\\\.)*"|\'(?:[^\'\\\\\r\n]|\\\\.)*\'';
	function o(e, n) {
		n = (n || '').replace(/m/g, '') + 'm';
		var r =
			'([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))'
				.replace(/<<prop>>/g, function () {
					return t;
				})
				.replace(/<<value>>/g, function () {
					return e;
				});
		return RegExp(r, n);
	}
	(e.languages.yaml = {
		scalar: {
			pattern: RegExp(
				'([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)'.replace(
					/<<prop>>/g,
					function () {
						return t;
					}
				)
			),
			lookbehind: !0,
			alias: 'string',
		},
		comment: /#.*/,
		key: {
			pattern: RegExp(
				'((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)'
					.replace(/<<prop>>/g, function () {
						return t;
					})
					.replace(/<<key>>/g, function () {
						return '(?:' + a + '|' + d + ')';
					})
			),
			lookbehind: !0,
			greedy: !0,
			alias: 'atrule',
		},
		directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
		datetime: {
			pattern: o(
				'\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?'
			),
			lookbehind: !0,
			alias: 'number',
		},
		boolean: {
			pattern: o('true|false', 'i'),
			lookbehind: !0,
			alias: 'important',
		},
		null: { pattern: o('null|~', 'i'), lookbehind: !0, alias: 'important' },
		string: { pattern: o(d), lookbehind: !0, greedy: !0 },
		number: {
			pattern: o(
				'[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)',
				'i'
			),
			lookbehind: !0,
		},
		tag: r,
		important: n,
		punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
	}),
		(e.languages.yml = e.languages.yaml);
})(Prism);
