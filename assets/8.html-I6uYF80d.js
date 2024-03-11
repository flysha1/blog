import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as p,c as o,a as n,e,d as c,b as u}from"./app-gpsbbifa.js";const i={},l=n("h1",{id:"_8-全排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-全排列"},[n("span",null,"8. 全排列")])],-1),k={href:"https://leetcode.cn/problems/permutations/description/",target:"_blank",rel:"noopener noreferrer"},r=n("strong",null,"题目",-1),d=u(`<div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">backtracking</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> used</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span>length <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>n<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 同支</span>
            <span class="token function">backtracking</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> k<span class="token punctuation">,</span> used<span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function v(m,b){const s=t("ExternalLinkIcon");return p(),o("div",null,[l,n("p",null,[n("a",k,[r,e("：给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。"),c(s)])]),d])}const h=a(i,[["render",v],["__file","8.html.vue"]]);export{h as default};
