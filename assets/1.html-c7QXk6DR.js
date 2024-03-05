const e=JSON.parse(`{"key":"v-a51a5dfa","path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/js/1.html","title":"1. ES6的常用语法","lang":"zh-CN","frontmatter":{"date":"2018-02-01T00:00:00.000Z","category":["前端技术","面经"],"tag":["js"]},"headers":[{"level":2,"title":"1. let 和 const","slug":"_1-let-和-const","link":"#_1-let-和-const","children":[]},{"level":2,"title":"2. 函数默认参数","slug":"_2-函数默认参数","link":"#_2-函数默认参数","children":[]},{"level":2,"title":"3. 扩展运算符","slug":"_3-扩展运算符","link":"#_3-扩展运算符","children":[]},{"level":2,"title":"4. 模版字符串","slug":"_4-模版字符串","link":"#_4-模版字符串","children":[]},{"level":2,"title":"5. Object.keys","slug":"_5-object-keys","link":"#_5-object-keys","children":[]},{"level":2,"title":"6. 箭头函数","slug":"_6-箭头函数","link":"#_6-箭头函数","children":[]},{"level":2,"title":"7. Array.prototype.forEach","slug":"_7-array-prototype-foreach","link":"#_7-array-prototype-foreach","children":[]},{"level":2,"title":"8. Array.prototype.map","slug":"_8-array-prototype-map","link":"#_8-array-prototype-map","children":[]},{"level":2,"title":"9. Array.prototype.filter","slug":"_9-array-prototype-filter","link":"#_9-array-prototype-filter","children":[]},{"level":2,"title":"10. Array.prototype.some","slug":"_10-array-prototype-some","link":"#_10-array-prototype-some","children":[]},{"level":2,"title":"11. Array.prototype.every","slug":"_11-array-prototype-every","link":"#_11-array-prototype-every","children":[]},{"level":2,"title":"12. Array.prototype.reduce","slug":"_12-array-prototype-reduce","link":"#_12-array-prototype-reduce","children":[]},{"level":2,"title":"13. 对象属性同名简写","slug":"_13-对象属性同名简写","link":"#_13-对象属性同名简写","children":[]},{"level":2,"title":"14. 解构赋值","slug":"_14-解构赋值","link":"#_14-解构赋值","children":[]},{"level":2,"title":"15. find和findIndex","slug":"_15-find和findindex","link":"#_15-find和findindex","children":[]},{"level":2,"title":"16. for of 和 for in","slug":"_16-for-of-和-for-in","link":"#_16-for-of-和-for-in","children":[]},{"level":2,"title":"17. Set和Map","slug":"_17-set和map","link":"#_17-set和map","children":[]},{"level":2,"title":"18. Promise","slug":"_18-promise","link":"#_18-promise","children":[]},{"level":2,"title":"19. class","slug":"_19-class","link":"#_19-class","children":[]}],"git":{"createdTime":1709624313000,"updatedTime":1709624313000,"contributors":[{"name":"flysha1","email":"2903229312@qq.com","commits":1}]},"readingTime":{"minutes":4.83,"words":1449},"filePathRelative":"前端技术/面试相关/js/1.md","localizedDate":"2018年2月1日","excerpt":"<h1>1. ES6的常用语法</h1>\\n<h2>1. let 和 const</h2>\\n<pre><code>* var有变量提升，有初始化提升，值可变\\n* let有变量提升，没有初始化提升，值可变\\n* const有变量提升，没有初始化提升，值不可变，但如果是定义对象，则属性可变\\n</code></pre>\\n<p>let和const存在暂时性死区</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'张三'</span>\\n\\n<span class=\\"token keyword\\">function</span> <span class=\\"token function\\">fn</span> <span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  console<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span>name<span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">let</span> name <span class=\\"token operator\\">=</span> <span class=\\"token string\\">'zhang3'</span>\\n<span class=\\"token punctuation\\">}</span>\\n<span class=\\"token function\\">fn</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// Cannot access 'name' before initialization</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{e as data};
