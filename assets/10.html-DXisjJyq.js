import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as t}from"./app-D4J0K0JA.js";const l={},n=t(`<h1 id="_10-路径总和" tabindex="-1"><a class="header-anchor" href="#_10-路径总和"><span>10. 路径总和</span></a></h1><p><a href="https://leetcode.cn/problems/permutations/description/" target="_blank" rel="noopener noreferrer"><strong>题目</strong>：给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。</a></p><p><em><strong>叶子节点</strong></em> 是指没有子节点的节点。</p><ul><li>示例1：</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg" alt="示例1" tabindex="0" loading="lazy"><figcaption>示例1</figcaption></figure><p>输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22</p><p>输出：true</p><p>解释：等于目标和的根节点到叶节点路径如上图所示。</p><ul><li>示例 2：</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="示例2" tabindex="0" loading="lazy"><figcaption>示例2</figcaption></figure><p>输入：root = [1,2,3], targetSum = 5</p><p>输出：false</p><p>解释：树中存在两条根节点到叶子节点的路径： (1 --&gt; 2): 和为 3 (1 --&gt; 3): 和为 4 不存在 sum = 5 的根节点到叶子节点的路径。</p><ul><li>示例 3：</li></ul><p>输入：root = [], targetSum = 0</p><p>输出：false</p><p>解释：由于树是空的，所以不存在根节点到叶子节点的路径。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {TreeNode}</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> root</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">param</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {number}</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> targetSum</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">return</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> {boolean}</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hasPathSum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">sum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">root</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) { </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 遍历到null节点</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">left</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">right</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) { </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 遍历到叶子节点</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;                  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 如果满足这个就返回true。否则返回false</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hasPathSum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">left</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">||</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> hasPathSum</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">right</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">sum</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> root</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">val</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),h=[n];function k(e,p){return a(),s("div",null,h)}const g=i(l,[["render",k],["__file","10.html.vue"]]),o=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/10.html","title":"10. 路径总和","lang":"zh-CN","frontmatter":{"date":"2018-02-01T00:00:00.000Z","category":["前端技术","面经"],"tag":["算法","递归","DFS"]},"headers":[],"git":{"createdTime":1709624313000,"updatedTime":1709624313000,"contributors":[{"name":"flysha1","email":"2903229312@qq.com","commits":1}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"前端技术/面试相关/算法/10.md","localizedDate":"2018年2月1日","excerpt":"\\n<p><a href=\\"https://leetcode.cn/problems/permutations/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>题目</strong>：给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。</a></p>\\n<p><em><strong>叶子节点</strong></em> 是指没有子节点的节点。</p>"}');export{g as comp,o as data};
