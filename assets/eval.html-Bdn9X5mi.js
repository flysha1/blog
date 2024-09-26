import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as l}from"./app-wuU-nyN7.js";const n={};function t(d,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h1 id="eval" tabindex="-1"><a class="header-anchor" href="#eval"><span>eval</span></a></h1><p><code>eval()</code> 函数用于计算并执行以字符串表示的 JavaScript 代码。<code>eval()</code> 函数使 JavaScript 可以动态执行 JavaScript 源代码。</p><p><code>eval()</code> 函数属于 <code>Global</code> 对象，所有主流浏览器均支持该函数。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>[!warning] 参数 <code>code</code> 必须是原始字符串，不能是 <code>String</code> 对象形式。如果参数 <code>code</code> 不是原始字符串，则 <code>eval()</code> 函数不会执行代码，并且将其不作任何改变地返回。</p></blockquote><p>如果参数 <code>code</code> 中的 JavaScript 代码不合法，将会引发异常。</p><p><code>eval()</code> 函数的返回值是任意类型，其返回值由参数 <code>code</code> 中具体的 JavaScript 代码决定。</p><h2 id="说明" tabindex="-1"><a class="header-anchor" href="#说明"><span>说明</span></a></h2><ul><li>传递给 <code>eval()</code> 函数的代码执行时所在的上下文和调用 <code>eval()</code> 函数时的上下文一样（也就是说，作用域不变）。</li><li>请自行确认 <code>code</code> 代码的来源是可信的，否则使用 <code>eval()</code> 函数存在一定的安全隐患。</li></ul><h3 id="永远不要使用-eval" tabindex="-1"><a class="header-anchor" href="#永远不要使用-eval"><span>永远不要使用 eval！</span></a></h3><p><code>eval()</code> 是一个危险的函数，它使用与调用者相同的权限执行代码。如果你用 <code>eval()</code> 运行的字符串代码被恶意方（不怀好意的人）修改，你最终可能会在你的网页/扩展程序的权限下，在用户计算机上运行恶意代码。更重要的是，第三方代码可以看到某一个 <code>eval()</code> 被调用时的作用域，这也有可能导致一些不同方式的攻击。相似的 <code>Function</code> 就不容易被攻击。</p><p><code>eval()</code> 通常比其他替代方法更慢，因为它必须调用 JS 解释器，而许多其他结构则可被现代 JS 引擎进行优化。</p><p>此外，现代 JavaScript 解释器将 JavaScript 转换为机器代码。这意味着任何变量命名的概念都会被删除。因此，任意一个 <code>eval</code> 的使用都会强制浏览器进行冗长的变量名称查找，以确定变量在机器代码中的位置并设置其值。另外，新内容将会通过 <code>eval()</code> 引进给变量，比如更改该变量的类型，因此会强制浏览器重新执行所有已经生成的机器代码以进行补偿。但是（谢天谢地）存在一个非常好的 <code>eval</code> 替代方法：只需使用 <code>window.Function</code>。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  y</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 39</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">  z</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;42&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;x + y + 1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 42</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">eval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">z</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 42</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 改用更安全的写法 </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;return x + y + 1&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const p=s(n,[["render",t],["__file","eval.html.vue"]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1-%E5%87%BD%E6%95%B0%E5%B1%9E%E6%80%A7/eval.html","title":"eval","lang":"zh-CN","frontmatter":{"order":1,"date":"2018-01-03T00:00:00.000Z","category":["前端技术"],"tag":["JavaScript"]},"headers":[{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[{"level":3,"title":"永远不要使用 eval！","slug":"永远不要使用-eval","link":"#永远不要使用-eval","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1727331628000,"updatedTime":1727331628000,"contributors":[{"name":"liyanxin","email":"liyanxin@conforx.com","commits":1}]},"readingTime":{"minutes":2.1,"words":629},"filePathRelative":"前端技术/JavaScript/内置对象/全局对象-函数属性/eval.md","localizedDate":"2018年1月3日","excerpt":"\\n<p><code>eval()</code> 函数用于计算并执行以字符串表示的 JavaScript 代码。<code>eval()</code> 函数使 JavaScript 可以动态执行 JavaScript 源代码。</p>\\n<p><code>eval()</code> 函数属于 <code>Global</code> 对象，所有主流浏览器均支持该函数。</p>\\n<h2>语法</h2>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">eval</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">code</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{p as comp,r as data};