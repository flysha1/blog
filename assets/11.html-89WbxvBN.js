import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as t,c as p,a as n,e as o,d as c,b as i}from"./app-gpsbbifa.js";const l={},u=n("h1",{id:"_11-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_11-反转链表"},[n("span",null,"11. 反转链表")])],-1),r={href:"https://leetcode.cn/problems/reverse-linked-list/description/",target:"_blank",rel:"noopener noreferrer"},d=n("strong",null,"题目",-1),k=i(`<ul><li>示例1：</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg" alt="示例1" tabindex="0" loading="lazy"><figcaption>示例1</figcaption></figure><p>输入：head = [1,2,3,4,5]</p><p>输出：[5,4,3,2,1]</p><ul><li>示例2：</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg" alt="示例2" tabindex="0" loading="lazy"><figcaption>示例2</figcaption></figure><p>输入：head = [1,2]</p><p>输出：[2,1]</p><ul><li>示例 3：</li></ul><p>输入：head = []</p><p>输出：[]</p><p>方法一：双指针</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：递归</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token keyword">const</span> temp <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
    pre <span class="token operator">=</span> head
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span>pre<span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverseList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function v(m,b){const s=e("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[d,o("：给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。"),c(s)])]),k])}const y=a(l,[["render",v],["__file","11.html.vue"]]);export{y as default};
