import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o,c as p,d as t,w as e,b as u,a as n,e as s}from"./app-0VnwGaek.js";const i={},k=u(`<h1 id="_1-bfc和浮动清除" tabindex="-1"><a class="header-anchor" href="#_1-bfc和浮动清除"><span>1. BFC和浮动清除</span></a></h1><h2 id="_1-什么是bfc" tabindex="-1"><a class="header-anchor" href="#_1-什么是bfc"><span>1. 什么是BFC</span></a></h2><p>&quot;BFC容器&quot;通常是指&quot;块级格式化上下文容器&quot;（Block Formatting Context Container）。块级格式化上下文（BFC）是在CSS中用来管理和控制元素在页面上布局和排列的一种机制。BFC容器是一种具有特定规则的HTML元素或CSS属性，它们会创建一个独立的上下文，影响其内部元素的布局和排列方式。BFC容器是CSS布局中的一个重要概念，可以帮助开发人员更精确地控制元素的布局和排列</p><p>BFC的作用：</p><ol><li><p>清除浮动：BFC容器可以用来清除浮动元素的影响，确保父元素包含浮动子元素的高度，从而避免出现高度塌陷问题。这是BFC最常见的应用之一，特别是在创建多列布局或类似网格的布局时非常有用。</p></li><li><p>防止外边距重叠：在同一个BFC容器内的相邻块级元素的外边距不会发生重叠，这有助于更精确地控制元素之间的间距。这对于垂直外边距塌陷问题的解决非常有帮助。</p></li></ol><p>如何创建BFC：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token property">float</span><span class="token punctuation">:</span> right || left<span class="token punctuation">;</span>
<span class="token property">position</span><span class="token punctuation">:</span> absolute || fixed<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> flex || inline-flex || inline-block || table-cell<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden || auto || overly || scroll<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-浮动和清除浮动" tabindex="-1"><a class="header-anchor" href="#_2-浮动和清除浮动"><span>2.浮动和清除浮动</span></a></h2>`,8),r=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),d=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #ccc"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".parent::after"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" block"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"clear"),n("span",{class:"token punctuation"},":"),s(" both"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".child"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" aqua"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-html line-numbers-mode","data-ext":"html","data-title":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("parent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("child"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-css line-numbers-mode","data-ext":"css","data-title":"css"},[n("pre",{class:"language-css"},[n("code",null,[n("span",{class:"token selector"},".parent"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" #ccc"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(`flex
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".child"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),s(" left"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 100px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),s(" aqua"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(g,h){const a=l("CodeDemo");return o(),p("div",null,[k,t(a,{id:"code-demo-31",type:"normal",title:"1.%E5%9C%A8%E5%8F%97%E6%B5%AE%E5%8A%A8%E5%BD%B1%E5%93%8D%E7%9A%84%E7%88%B6%E5%85%83%E7%B4%A0%E5%AE%B9%E5%99%A8%E7%9A%84%E4%BC%AA%E5%85%83%E7%B4%A0%E4%B8%8A%E8%BF%9B%E8%A1%8C%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8",code:"eJytjssOwiAQRX+F4MKN8bHFx5ewGQdaiAgVqI80/XenLU3qXjYkZ87MvR03+e644CdlnwwdpHSWvIGofZb8Ij2j9zNDY52i0WlH9C/C/PMNx5Soy3bKZ920fAW81TG0Xgm2QsSj9L30RRICqqxjUTH4PEC2XpM1EGVT4+Aj2NUFvBWITkMkFLIpx8ZOc2DlAtANp6tcFl5WZSPYYb9v3gUZbWtD1pItm8KjhYLvEGvrB3U0KY/3X8/peTc="},{default:e(()=>[r,d]),_:1}),t(a,{id:"code-demo-35",type:"normal",title:"2.%E5%AF%B9%E5%8F%97%E6%B5%AE%E5%8A%A8%E5%BD%B1%E5%93%8D%E7%9A%84%E7%88%B6%E5%85%83%E7%B4%A0%E5%AE%B9%E5%99%A8%E8%AE%BE%E7%BD%AEBFC",code:"eJytjs0OgjAQhF+lWa9G8VrRJ+ll3RbauBSkRTGEd7fyk+DdvWzyzczODmBjxSAh1+4piDGEi4IGW+OjgqvyIs2PRtaxTlJ+TPQvhnXDHiiE9Mth7hfDHL4h3cu27ryWYkdE5xlrFxrGtyzY9MqPyh+mw2uq4BqjFGyKuAReTkcrxSnLmn5B1rjSJteWbevw0eGCK2xL57/WyZn6YPwAtAJl+w=="},{default:e(()=>[m,v]),_:1})])}const A=c(i,[["render",b],["__file","1.html.vue"]]);export{A as default};
