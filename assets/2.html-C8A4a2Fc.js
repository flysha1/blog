import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as i,o as s}from"./app-wuU-nyN7.js";const a={};function l(n,t){return s(),e("div",null,t[0]||(t[0]=[i(`<h1 id="选择符与优先级" tabindex="-1"><a class="header-anchor" href="#选择符与优先级"><span>选择符与优先级</span></a></h1><h2 id="选择符" tabindex="-1"><a class="header-anchor" href="#选择符"><span>选择符</span></a></h2><p>选择符分为五类：</p><ul><li>元素选择符 Element Selectors</li><li>关系选择符 Relationship Selectors</li><li>属性选择符 Attribute Selectors</li><li>伪类选择符 Pseudo-Classes Selectors</li><li>伪元素选择符 Pseudo-Element Selectors</li></ul><h3 id="_1-元素选择符" tabindex="-1"><a class="header-anchor" href="#_1-元素选择符"><span>1. 元素选择符</span></a></h3><table><thead><tr><th>选择符</th><th>选择符名称</th><th>描述</th></tr></thead><tbody><tr><td><code>*</code></td><td>通配选择符</td><td>所有元素对象</td></tr><tr><td><code>E</code></td><td>类型选择符</td><td>以文档语言对象类型作为选择符</td></tr><tr><td><code>E#id</code></td><td>ID 选择符</td><td>以唯一标识符 ID 属性的 E 元素作为选择符</td></tr><tr><td><code>E.class</code></td><td>类选择符</td><td>以 <code>class</code> 属性的 E 元素作为选择符</td></tr></tbody></table><h3 id="_2-关系选择符" tabindex="-1"><a class="header-anchor" href="#_2-关系选择符"><span>2. 关系选择符</span></a></h3><table><thead><tr><th>选择符</th><th>选择符名称</th><th>描述</th><th>CSS3</th></tr></thead><tbody><tr><td><code>E F</code></td><td>包含选择符</td><td>选择所有被 E 元素包含的 F 元素（能命中所有后代元素）</td><td></td></tr><tr><td><code>E&gt;F</code></td><td>子选择符</td><td>选择所有作为 E 元素的子元素 F（只能命中子元素）</td><td></td></tr><tr><td><code>E+F</code></td><td>相邻选择符</td><td>选择紧贴在 E 元素之后 F 元素</td><td></td></tr><tr><td><code>E~F</code></td><td>兄弟选择符</td><td>选择 E 元素所有兄弟元素 F</td><td>✅</td></tr></tbody></table><h3 id="_3-属性选择符" tabindex="-1"><a class="header-anchor" href="#_3-属性选择符"><span>3. 属性选择符</span></a></h3><table><thead><tr><th>选择符</th><th>描述</th><th>CSS3</th></tr></thead><tbody><tr><td><code>E[att]</code></td><td>选择具有 <code>att</code> 属性的 E 元素。</td><td></td></tr><tr><td><code>E[att=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值等于 <code>val</code> 的 E 元素。</td><td></td></tr><tr><td><code>E[att~=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值为一用空格分隔的字词列表，其中一个等于 <code>val</code> 的 E 元素。</td><td></td></tr><tr><td><code>E[att^=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值为以 <code>val</code> 开头的字符串的 E 元素。</td><td>✅</td></tr><tr><td><code>E[att$=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值为以 <code>val</code> 结尾的字符串的 E 元素。</td><td>✅</td></tr><tr><td><code>E[att*=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值为包含 <code>val</code> 的字符串的 E 元素。</td><td>✅</td></tr><tr><td><code>E[att|=&#39;val&#39;]</code></td><td>选择具有 <code>att</code> 属性且属性值为以 <code>val</code> 开头并用连接符 <code>-</code> 分隔的字符串的 E 元素，如果属性值仅为 <code>val</code>，也将被选择。</td><td></td></tr></tbody></table><p><code>css .div { /* 表示存在 class 属性并且以 title 开头的元素 */ [class^=&#39;title&#39;] { margin-bottom: 8px; } } </code></p><h3 id="_4-伪类选择符" tabindex="-1"><a class="header-anchor" href="#_4-伪类选择符"><span>4. 伪类选择符</span></a></h3><p>伪类就是一个选择处于特定状态的元素的选择器，比如某个 <code>className</code> 的第一个元素，某个被 <code>hover</code> 的元素等等。我们可以理解成一个特定的 CSS 类，但与普通的类不一样，它只有处于 DOM 树无法描述的状态下才能为元素添加样式，所以将其称为 <strong>伪类</strong>。</p><table><thead><tr><th>选择符</th><th>描述</th><th>CSS3</th></tr></thead><tbody><tr><td><code>E:link</code></td><td>设置超链接 <code>&lt;a&gt;</code> 在未被访问前的样式。</td><td></td></tr><tr><td><code>E:visited</code></td><td>设置超链接 <code>&lt;a&gt;</code> 在其链接地址已被访问过时的样式。</td><td></td></tr><tr><td><code>E:hover</code></td><td>设置元素在其鼠标悬停时的样式。</td><td></td></tr><tr><td><code>E:active</code></td><td>设置元素在被用户激活（在鼠标点击与释放之间发生的事件）时的样式。</td><td></td></tr><tr><td><code>E:focus</code></td><td>设置元素在成为输入焦点（该元素的 <code>onfocus</code> 事件发生）时的样式。</td><td></td></tr><tr><td><code>E:lang(fr)</code></td><td>匹配使用特殊语言的 E 元素。</td><td></td></tr><tr><td><code>E:not(s)</code></td><td>匹配不含有 s 选择符的元素 E。</td><td>✅</td></tr><tr><td><code>E:root</code></td><td>匹配 E 元素在文档的根元素。</td><td>✅</td></tr><tr><td><code>E:first-child</code></td><td>匹配父元素的第一个子元素 E。</td><td></td></tr><tr><td><code>E:last-child</code></td><td>匹配父元素的最后一个子元素 E。</td><td>✅</td></tr><tr><td><code>E:only-child</code></td><td>匹配父元素仅有的一个子元素 E。</td><td>✅</td></tr><tr><td><code>E:nth-child(n)</code></td><td>匹配父元素的第 n 个子元素 E。</td><td>✅</td></tr><tr><td><code>E:nth-last-child(n)</code></td><td>匹配父元素的倒数第 n 个子元素 E。</td><td>✅</td></tr><tr><td><code>E:first-of-type</code></td><td>匹配父元素下第一个类型为 E 的子元素。</td><td>✅</td></tr><tr><td><code>E:last-of-type</code></td><td>匹配父元素下的所有 E 子元素中的倒数第一个。</td><td>✅</td></tr><tr><td><code>E:only-of-type</code></td><td>匹配父元素的所有子元素中唯一的那个子元素 E。</td><td>✅</td></tr><tr><td><code>E:nth-of-type(n)</code></td><td>匹配父元素的第 n 个子元素 E。</td><td>✅</td></tr><tr><td><code>E:nth-last-of-type(n)</code></td><td>匹配父元素的倒数第 n 个子元素 E。</td><td>✅</td></tr><tr><td><code>E:empty</code></td><td>匹配没有任何子元素（包括 Text 节点）的元素 E。</td><td>✅</td></tr><tr><td><code>E:checked</code></td><td>匹配用户界面上处于选中状态的元素 E。</td><td>✅</td></tr><tr><td><code>E:enabled</code></td><td>匹配用户界面上处于可用状态的元素 E。</td><td>✅</td></tr><tr><td><code>E:disabled</code></td><td>匹配用户界面上处于禁用状态的元素 E。</td><td>✅</td></tr><tr><td><code>E:target</code></td><td>匹配相关 URL 指向的 E 元素。</td><td>✅</td></tr></tbody></table><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* li 最后一个元素不添加边框 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:not</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">(</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:last-child</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-bottom: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> black</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">/* 与第一个 li 相连兄弟 */</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">li</span><span style="--shiki-light:#986801;--shiki-dark:#56B6C2;">:first-child</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ~</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> li</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border-left: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> #</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">666</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-伪元素选择符" tabindex="-1"><a class="header-anchor" href="#_5-伪元素选择符"><span>5. 伪元素选择符</span></a></h3><p>伪元素和伪类很像，但是伪元素类似于增添一个新的 DOM 节点到 DOM 树中，而不是改变元素的状态。注意了，这里是类似，而不是真的增加一个节点，这也是其被称为伪元素的原因（实质上，元素被创建在文档流外）。</p><table><thead><tr><th>选择符</th><th>描述</th><th>CSS3</th></tr></thead><tbody><tr><td><code>E:first-letter / E::first-letter</code></td><td>设置元素内的第一个字符的样式。</td><td></td></tr><tr><td><code>E:first-first-line / E::first-line</code></td><td>设置元素内的第一行的样式。</td><td></td></tr><tr><td><code>E:before / E::before</code></td><td>设置在元素前（依据对象树的逻辑结构）发生的内容。用来和 <code>content</code> 属性一起使用。</td><td></td></tr><tr><td><code>E:after / E::after</code></td><td>设置在元素后（依据对象树的逻辑结构）发生的内容。用来和 <code>content</code> 属性一起使用。</td><td></td></tr><tr><td><code>E::placeholder</code></td><td>设置元素文字占位符的样式。</td><td></td></tr><tr><td><code>E::selection</code></td><td>设置元素被选择时的颜色。</td><td></td></tr></tbody></table><blockquote><p>[!tip] CSS3 将伪元素选择符（Pseudo-Element Selectors）前面的单个冒号（<code>:</code>）修改为双冒号（<code>::</code>）用以区别伪类选择符（Pseudo-Classes Selectors），但以前的写法仍然有效。</p></blockquote><h1 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h1><p>浏览器通过<strong>优先级</strong>（也称为特殊性）来判断哪一些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类选择器组成的匹配规则。</p><h2 id="优先级顺序" tabindex="-1"><a class="header-anchor" href="#优先级顺序"><span>优先级顺序</span></a></h2><p>选择符优先级：</p><ol><li>!important</li><li>行内样式</li><li>ID 选择符</li><li>类选择符</li><li>标签选择符 | 伪类选择符 | 属性选择符</li><li>伪元素选择符</li><li>通配选择符 | 关系选择符 | 否定伪类</li></ol><table><thead><tr><th>选择符</th><th>权重值</th></tr></thead><tbody><tr><td>行内样式</td><td>[1,0,0,0] A</td></tr><tr><td>ID 选择符</td><td>[0,1,0,0] B</td></tr><tr><td>类选择符、伪类选择符和属性选择符</td><td>[0,0,1,0] C</td></tr><tr><td>标签选择符和伪类对象选择符</td><td>[0,0,0,1] D</td></tr><tr><td>通配符、关系选择符和否定选择符</td><td>[0,0,0,0] E</td></tr><tr><td>继承样式</td><td>无权重值</td></tr></tbody></table><h3 id="权重值比较规则" tabindex="-1"><a class="header-anchor" href="#权重值比较规则"><span>权重值比较规则</span></a></h3><ul><li>CSS 优先级是根据由每种选择符类型构成的级连字符串计算而成的，它不是一个对应相应匹配表达式的权重值；</li><li>[1,0,0,0] &gt; [0,99,99,99] <em><strong>从左往右逐个等级比较，前一个等级相等才往后比较</strong></em>；</li><li>无论是行内样式、内联样式表和外链样式表，都是按照这个规则来进行比较。而不是简单的 行内样式 &gt; 内联样式表 &gt; 外链样式表。之所以有这样的错觉，是因为确实行间样式为第一等的权重，所以它的权重是最高的。而内联样式可能一般写在了外链样式引用了之后，所以覆盖掉了之前的；</li><li>当 CSS 选择器权重相同，则最后的声明的 CSS 选择器覆盖靠前的 CSS；</li><li>相同 CSS 表达式，在 DOM 结构中的距离是不会对元素优先级计算产生影响的。</li></ul><h3 id="important" tabindex="-1"><a class="header-anchor" href="#important"><span>!important</span></a></h3><p>当在一个样式生命中使用 <code>!import</code> 规则时，此声明将覆盖任何其他声明。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>使用 <code>!important</code> 是一个坏习惯，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找 BUG 变得更加困难了。当两条相互冲突的带有 <code>!important</code> 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。</p></div><div class="hint-container important"><p class="hint-container-title">经验法则</p><ul><li>一定要优先考虑使用样式规则的优先级来解决问题而不是 <code>!important</code></li><li>只有在需要覆盖全站或外链 CSS 的特定页面中使用 <code>!important</code></li><li>永远不要再全站范围的 CSS 上使用 <code>!import</code></li><li>永远不要在你的插件中使用 <code>!import</code></li></ul></div>`,31)]))}const c=d(a,[["render",l],["__file","2.html.vue"]]),h=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/css/2.html","title":"选择符与优先级","lang":"zh-CN","frontmatter":{"date":"2017-12-01T00:00:00.000Z","order":2,"category":["前端技术"],"tag":["CSS"]},"headers":[{"level":2,"title":"选择符","slug":"选择符","link":"#选择符","children":[{"level":3,"title":"1. 元素选择符","slug":"_1-元素选择符","link":"#_1-元素选择符","children":[]},{"level":3,"title":"2. 关系选择符","slug":"_2-关系选择符","link":"#_2-关系选择符","children":[]},{"level":3,"title":"3. 属性选择符","slug":"_3-属性选择符","link":"#_3-属性选择符","children":[]},{"level":3,"title":"4. 伪类选择符","slug":"_4-伪类选择符","link":"#_4-伪类选择符","children":[]},{"level":3,"title":"5. 伪元素选择符","slug":"_5-伪元素选择符","link":"#_5-伪元素选择符","children":[]}]},{"level":2,"title":"优先级顺序","slug":"优先级顺序","link":"#优先级顺序","children":[{"level":3,"title":"权重值比较规则","slug":"权重值比较规则","link":"#权重值比较规则","children":[]},{"level":3,"title":"!important","slug":"important","link":"#important","children":[]}]}],"git":{"createdTime":1727331628000,"updatedTime":1727331628000,"contributors":[{"name":"liyanxin","email":"liyanxin@conforx.com","commits":1}]},"readingTime":{"minutes":6.88,"words":2064},"filePathRelative":"前端技术/css/2.md","localizedDate":"2017年12月1日","excerpt":"\\n<h2>选择符</h2>\\n<p>选择符分为五类：</p>\\n<ul>\\n<li>元素选择符 Element Selectors</li>\\n<li>关系选择符 Relationship Selectors</li>\\n<li>属性选择符 Attribute Selectors</li>\\n<li>伪类选择符 Pseudo-Classes Selectors</li>\\n<li>伪元素选择符 Pseudo-Element Selectors</li>\\n</ul>\\n<h3>1. 元素选择符</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>选择符</th>\\n<th>选择符名称</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>*</code></td>\\n<td>通配选择符</td>\\n<td>所有元素对象</td>\\n</tr>\\n<tr>\\n<td><code>E</code></td>\\n<td>类型选择符</td>\\n<td>以文档语言对象类型作为选择符</td>\\n</tr>\\n<tr>\\n<td><code>E#id</code></td>\\n<td>ID 选择符</td>\\n<td>以唯一标识符 ID 属性的 E 元素作为选择符</td>\\n</tr>\\n<tr>\\n<td><code>E.class</code></td>\\n<td>类选择符</td>\\n<td>以 <code>class</code> 属性的 E 元素作为选择符</td>\\n</tr>\\n</tbody>\\n</table>"}');export{c as comp,h as data};
