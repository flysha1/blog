import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,b as t}from"./app-U6uxE2hr.js";const p={},e=t(`<h1 id="_2-proxy相关" tabindex="-1"><a class="header-anchor" href="#_2-proxy相关"><span>2. Proxy相关</span></a></h1><h2 id="_1-proxy能够监听到对象中的对象的引用吗" tabindex="-1"><a class="header-anchor" href="#_1-proxy能够监听到对象中的对象的引用吗"><span>1. Proxy能够监听到对象中的对象的引用吗？</span></a></h2><p>Proxy默认只代理一层对象的属性</p><p>想代理多层的解决办法是：在返回的时候，判断是否是一个对象，如果是对象的话，再次用Proxy代理，返回代理对象</p><h2 id="_2-如何让proxy去监听基本数据类型" tabindex="-1"><a class="header-anchor" href="#_2-如何让proxy去监听基本数据类型"><span>2. 如何让proxy去监听基本数据类型</span></a></h2><p>Proxy无法直接监听基本数据类型（如字符串、数字、布尔值等），因为它们是不可变的。Proxy只能在对象级别上进行操作，而不是基本数据类型。</p><p>当我们尝试使用Proxy包装基本数据类型时，会得到一个TypeError错误，因为基本数据类型不具有属性和方法：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Setting property &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; to &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxyValue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// TypeError: Cannot create proxy with a non-object as target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要监听基本数据类型的更改，最好使用其他方式，例如通过触发事件或调用回调函数来通知更改。可以创建一个自定义的数据包装器，将基本数据类型包装在对象中，并在该对象上实现监听逻辑。或者直接给对象属性赋值基本类型，然后给对象添加Proxy以监听其属性的更改。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">ValueWrapper</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>onChange <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">ValueWrapper</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">setValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onChange <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ValueWrapper</span><span class="token punctuation">(</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wrapper<span class="token punctuation">.</span><span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">newValue</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Value changed: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>newValue<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
wrapper<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span><span class="token string">&#39;Hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：Value changed：Hi</span>

<span class="token comment">// 给对象添加Proxy以监听其属性的更改</span>
<span class="token keyword">const</span> obj<span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;Hello&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Setting property &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>property<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39; to &#39;</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> proxyObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span> 
proxyObj<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;Hi&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// 输出：Setting property &#39;value&#39; to &#39;Hi&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","2.html.vue"]]);export{k as default};
