const n=JSON.parse(`{"key":"v-51a26e08","path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/JavaScript/4.html","title":"4. 改变this指向的方法有哪些","lang":"zh-CN","frontmatter":{"date":"2018-02-01T00:00:00.000Z","category":["前端技术","面经"],"tag":["JavaScript"]},"headers":[{"level":2,"title":"1. call","slug":"_1-call","link":"#_1-call","children":[]},{"level":2,"title":"2. apply","slug":"_2-apply","link":"#_2-apply","children":[]},{"level":2,"title":"3. bind","slug":"_3-bind","link":"#_3-bind","children":[]}],"git":{"createdTime":1710143481000,"updatedTime":1710143481000,"contributors":[{"name":"flysha1","email":"2903229312@qq.com","commits":1}]},"readingTime":{"minutes":4.51,"words":1353},"filePathRelative":"前端技术/面试相关/JavaScript/4.md","localizedDate":"2018年2月1日","excerpt":"<h1>4. 改变this指向的方法有哪些</h1>\\n<p>call、bind、apply方法</p>\\n<h2>1. call</h2>\\n<ul>\\n<li>使用方法</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">function</span> <span class=\\"token function\\">person</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a<span class=\\"token punctuation\\">,</span>b<span class=\\"token punctuation\\">,</span>c</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token function\\">person</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// 1.直接调用，this指向window</span>\\n           <span class=\\"token comment\\">// 打印  window</span>\\n           <span class=\\"token comment\\">// 打印  undefined,undefined</span>\\n           \\n<span class=\\"token keyword\\">const</span> obj <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">{</span><span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"owl\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">18</span><span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">person</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token punctuation\\">)</span>                 <span class=\\"token comment\\">// 2.传入指定的this值</span>\\n                                 <span class=\\"token comment\\">// 打印 {name: 'owl', age: 18}</span>\\n                                 <span class=\\"token comment\\">// owl 18</span>\\n\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">person</span><span class=\\"token punctuation\\">(</span><span class=\\"token parameter\\">a<span class=\\"token punctuation\\">,</span>b<span class=\\"token punctuation\\">,</span>c</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>a<span class=\\"token punctuation\\">,</span>b<span class=\\"token punctuation\\">,</span>c<span class=\\"token punctuation\\">)</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">,</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">person</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">call</span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>          <span class=\\"token comment\\">// 3.给person函数传入指定的this值和实参值</span>\\n                                <span class=\\"token comment\\">// 打印 1 2 3</span>\\n                                <span class=\\"token comment\\">// {name: 'owl', age: 18}</span>\\n                                <span class=\\"token comment\\">// owl 18</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
