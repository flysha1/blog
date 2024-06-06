import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as t,c as o,a as n,e,d as c,b as l}from"./app-U6uxE2hr.js";const r={},u=n("h1",{id:"_3-字符串相加",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-字符串相加"},[n("span",null,"3. 字符串相加")])],-1),i={href:"https://leetcode.cn/problems/add-strings/description/",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"题目",-1),d=l(`<p><strong>注意</strong>：你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。</p><ul><li><p>示例 1：</p><p>输入：num1 = &quot;11&quot;, num2 = &quot;123&quot;</p><p>输出：&quot;134&quot;</p></li><li><p>示例 2：</p><p>输入：num1 = &quot;456&quot;, num2 = &quot;77&quot;</p><p>输出：&quot;533&quot;</p></li><li><p>示例 3：</p><p>输入：num1 = &quot;0&quot;, num2 = &quot;0&quot;</p><p>输出：&quot;0&quot;</p></li></ul><p><strong>解答</strong>:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> num1<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> num2<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> add <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">const</span> ans <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> add <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> x <span class="token operator">=</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token keyword">const</span> y <span class="token operator">=</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">?</span> num2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token number">0</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> x <span class="token operator">+</span> y <span class="token operator">+</span> add
        ans<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span>
        add <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>res <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
        i <span class="token operator">-=</span> <span class="token number">1</span>
        j <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ans<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(v,b){const s=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[n("a",i,[k,e("：给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。"),c(s)])]),d])}const f=a(r,[["render",m],["__file","3.html.vue"]]);export{f as default};
