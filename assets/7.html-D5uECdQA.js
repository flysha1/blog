import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as a,o as n}from"./app-wuU-nyN7.js";const l={};function t(p,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h1 id="_7-事件流" tabindex="-1"><a class="header-anchor" href="#_7-事件流"><span>7. 事件流</span></a></h1><p>事件流分为三个阶段：<strong>捕获阶段</strong>、<strong>目标阶段</strong>、<strong>冒泡阶段</strong>。</p><p>过程如下：</p><ul><li><p><strong>捕获阶段</strong> ：事件从最外层的节点，也就是文档对象开始，逐级向下传播，直到事件的目标节点上。</p></li><li><p><strong>目标阶段</strong>：事件到达目标节点，触发目标节点上的事件处理函数。</p></li><li><p><strong>冒泡阶段</strong>：事件从目标节点开始，逐级向上传播，直到到达最外层节点（文档对象）</p></li></ul><h2 id="事件冒泡和捕获的区别" tabindex="-1"><a class="header-anchor" href="#事件冒泡和捕获的区别"><span>事件冒泡和捕获的区别？</span></a></h2><p>事件冒泡和事件捕获是两种不同的事件传播方式，<strong>默认是冒泡</strong>，它们的区别在于传播方向不同：</p><ul><li><p><strong>事件冒泡</strong>是从自下而上，从子元素冒泡到父元素，执行父元素上的事件处理。</p></li><li><p><strong>事件捕获</strong>是事件从文档的根元素开始，逐级向下传播到较为具体的元素（即从父元素到子元素）。</p></li></ul><h2 id="如何阻止事件冒泡" tabindex="-1"><a class="header-anchor" href="#如何阻止事件冒泡"><span>如何阻止事件冒泡</span></a></h2><ul><li><p>普通浏览器：<code>event.stopPropagation()</code></p></li><li><p>IE浏览器：<code>event.cancelBubble = true</code></p></li></ul><h2 id="对事件委托的理解" tabindex="-1"><a class="header-anchor" href="#对事件委托的理解"><span>对事件委托的理解</span></a></h2><p>利用浏览器事件冒泡机制。事件在冒泡的过程中会传到父节点，并且父节点可以通过事件对象获取到目标节点，可以吧子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件</p><h2 id="对浏览器事件循环的理解" tabindex="-1"><a class="header-anchor" href="#对浏览器事件循环的理解"><span>对浏览器事件循环的理解</span></a></h2><p>事件循环是一种机制，它会不断的轮询任务队列，并将队列中的任务依此执行。</p><p><code>JavaScript</code> 的任务分为两种同步和异步：</p><ul><li><p><strong>同步任务</strong>：在主线程上排队执行的任务，只有一个任务执行完毕，才能执行下一个任务，</p></li><li><p><strong>异步任务</strong>：不进入主线程，而是放在任务队列中，若有多个异步任务则需要在任务队列中排队等待，任务队列类似于缓冲区，任务下一步会被移到执行栈然后主线程执行调用栈的任务。</p></li></ul><p>因为js是单线程，在执行代码的时候将所有函数压入执行栈中。同步任务会按照后进先出的原则依次执行。遇到异步任务时，将其放入任务队列中。当前执行栈里事件执行完毕后，就会从任务队列中取出对应异步任务的回调函数放入执行栈中继续执行。</p><p>宏观任务(MacroTask|Task)、微观任务(MicorTask)：</p><ul><li><p><strong>宏任务</strong>：<code>script</code>全部代码、<code>setTimeout</code>、<code>setInterval</code>、<code>I/O</code>、UI渲染</p></li><li><p><strong>微任务</strong>：<code>Promise.then</code>、<code>Process.nexTick</code>(Node独有)、<code>MutationObserver</code></p></li></ul><p>任务队列中的任务分为宏任务和微任务，当执行栈清空后，会先检查任务队列中是否有微任务，如果有就按照先进先出的原则，压入执行栈中执行。微任务中产生了新的微任务不会推迟到下一个循环中，而是在当前循环中继续执行。 当执行这一轮的微任务完毕后，开启下一轮循环，执行任务队列中的宏任务。</p><p><strong>注意</strong>：一次 <code>Eventloop</code> 循环会处理一个宏任务和所有这次循环中产生的微任务。</p><p><strong>执行顺序</strong></p><ul><li><p>执行宏任务中的同步代码，遇到宏任务或微任务，分别放入对应的任务队列，等待执行。</p></li><li><p>当所有同步任务执行完毕后，执行栈为空，首先执行微任务队列中的任务</p></li><li><p>微任务执行完毕后，检查这次执行中是否产生新的微任务，如果存在，重复执行步骤，直到微任务执行完毕。</p></li><li><p>开始下一轮 <code>Event Loop</code> ，执行宏任务中的代码</p></li></ul><h2 id="node-js的事件循环" tabindex="-1"><a class="header-anchor" href="#node-js的事件循环"><span>Node.js的事件循环</span></a></h2><p>Node事件循环分为6个阶段，每进入一个阶段，都会去对应的回调队列中取出函数执行。</p><ol><li><p><strong>Timers</strong> 阶段：执行timer（setTimeout、setInterval）的回调，由poll阶段控制；</p></li><li><p><strong>I/O callbacks</strong> 阶段：系统调用相关的回调</p></li><li><p><strong>idle prepare</strong> 阶段：Nodejs内部执行，可以忽略</p></li><li><p><strong>poll</strong> 阶段：轮询。在该阶段如果没有timer的话，会出现一下情况：</p><ul><li><p>poll队列不为空，会遍历回调队列并同步执行，直到队列为空或者达到系统限制；</p></li><li><p>poll队列对空，会出现以下两种情况：</p><ul><li><p>如果有 setImmediate 回调需要执行，poll 阶段会停止并且进入到 check 阶段执行回调；</p></li><li><p>如果没有 setImmediate 回调需要执行，就会等待回调被天加到队列中，然后立即执行。</p></li><li><p>如果设置里有timer，并且 poll 队列为空，就会判断是否有 timer 超时，如果有就回到 timers 阶段执行回调。</p></li></ul></li></ul></li><li><p><strong>check</strong> 阶段：执行 setImmediate 回调</p></li><li><p><strong>colse callbacks</strong> 阶段：执行一些关闭回调，比如socket.on(&#39;close&#39;, ...)等。</p></li></ol><h3 id="process-nexttick" tabindex="-1"><a class="header-anchor" href="#process-nexttick"><span>process.nextTick</span></a></h3><p>它会在轮询的各个阶段结束时，进入到下一个阶段之前立即执行。</p><h3 id="setimmediate-和-settimeout" tabindex="-1"><a class="header-anchor" href="#setimmediate-和-settimeout"><span>setImmediate 和 setTimeout</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;setTimeout&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setImmediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;setImmediate&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种情况下，定时器的执行顺序是随机的。</p><p>如果把这两个函数放入一个 <code>I/O</code> 循环内调用，<code>setImmediate</code> 总是被优先调用</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> fs</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;fs&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">fs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">readFile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">__filename</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;timeout&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    setImmediate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;immediate&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// immediate</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// timeout</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node和浏览器事件循环机制的区别" tabindex="-1"><a class="header-anchor" href="#node和浏览器事件循环机制的区别"><span>Node和浏览器事件循环机制的区别</span></a></h2><ul><li><p>浏览器事件循环会在宏任务结束后，检查微任务。而Node的微任务是在两个阶段之间执行。</p></li><li><p>浏览器的 <code>process.nextTick</code> 和其他微任务优先级一样，而node中要高于其他优先级。</p></li></ul>`,34)]))}const k=i(l,[["render",t],["__file","7.html.vue"]]),d=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/7.html","title":"7. 事件流","lang":"zh-CN","frontmatter":{"date":"2018-01-01T00:00:00.000Z","category":["前端技术"],"tag":["浏览器","面经"]},"headers":[{"level":2,"title":"事件冒泡和捕获的区别？","slug":"事件冒泡和捕获的区别","link":"#事件冒泡和捕获的区别","children":[]},{"level":2,"title":"如何阻止事件冒泡","slug":"如何阻止事件冒泡","link":"#如何阻止事件冒泡","children":[]},{"level":2,"title":"对事件委托的理解","slug":"对事件委托的理解","link":"#对事件委托的理解","children":[]},{"level":2,"title":"对浏览器事件循环的理解","slug":"对浏览器事件循环的理解","link":"#对浏览器事件循环的理解","children":[]},{"level":2,"title":"Node.js的事件循环","slug":"node-js的事件循环","link":"#node-js的事件循环","children":[{"level":3,"title":"process.nextTick","slug":"process-nexttick","link":"#process-nexttick","children":[]},{"level":3,"title":"setImmediate 和 setTimeout","slug":"setimmediate-和-settimeout","link":"#setimmediate-和-settimeout","children":[]}]},{"level":2,"title":"Node和浏览器事件循环机制的区别","slug":"node和浏览器事件循环机制的区别","link":"#node和浏览器事件循环机制的区别","children":[]}],"git":{"createdTime":1727331628000,"updatedTime":1727331628000,"contributors":[{"name":"liyanxin","email":"liyanxin@conforx.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1416},"filePathRelative":"前端技术/面试相关/浏览器/7.md","localizedDate":"2018年1月1日","excerpt":"\\n<p>事件流分为三个阶段：<strong>捕获阶段</strong>、<strong>目标阶段</strong>、<strong>冒泡阶段</strong>。</p>\\n<p>过程如下：</p>\\n<ul>\\n<li>\\n<p><strong>捕获阶段</strong> ：事件从最外层的节点，也就是文档对象开始，逐级向下传播，直到事件的目标节点上。</p>\\n</li>\\n<li>\\n<p><strong>目标阶段</strong>：事件到达目标节点，触发目标节点上的事件处理函数。</p>\\n</li>\\n<li>\\n<p><strong>冒泡阶段</strong>：事件从目标节点开始，逐级向上传播，直到到达最外层节点（文档对象）</p>\\n</li>\\n</ul>"}');export{k as comp,d as data};
