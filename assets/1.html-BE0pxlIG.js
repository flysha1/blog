import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as e}from"./app-wuU-nyN7.js";const l={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[n(`<h1 id="编译阶段" tabindex="-1"><a class="header-anchor" href="#编译阶段"><span>编译阶段</span></a></h1><h2 id="编译原理" tabindex="-1"><a class="header-anchor" href="#编译原理"><span>编译原理</span></a></h2><p>JavaScript 是一门编译语言。与传统的编译语言不同的是，JavaScript 不是提前编译的，编译结果也不能在分布式系统中进行移植。 在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为 <strong>编译</strong>。</p><ol><li>分词 / 词法分析</li><li>解析 / 语法分析</li><li>代码生成</li></ol><h3 id="分词和词法分析" tabindex="-1"><a class="header-anchor" href="#分词和词法分析"><span>分词和词法分析</span></a></h3><p><strong>词法分析</strong>（Tokenizing / Lexing） 这个过程会将由字符组成的字符串分解成有意义的代码块（对编程语言来说），这些代码块被称为 <strong>词法单元</strong>（Token）。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这段程序通常会被分解成为下列词法单元：<code>const</code>、<code>a</code>、<code>=</code>、<code>2</code>、<code>;</code>。</p><p>空格是否会被当作词法单元，取决于空格在这门语言中是否具有意义。</p><p>分词（Tokenizing）和词法分析（Lexing）之间的主要差异在于词法单元的识别是通过有状态还是无状态的方式进行的。简单来说，如果词法单元生成器在判断 <code>a</code> 是一个独立的词法单元还是其他词法单元的一部分时，调用的是 <strong>有状态的解析规则</strong>，那么这个过程就被称为 <strong>词法分析</strong>。</p><h3 id="解析和语法分析" tabindex="-1"><a class="header-anchor" href="#解析和语法分析"><span>解析和语法分析</span></a></h3><p><strong>语法分析</strong>（Parsing） 这个过程是将词法单元流转换成一个 由元素逐级嵌套所组成 的代表了程序语法结构的树。这个树被称为 抽象语法树（Abstract Syntax Tree，AST 在各大框架及 Babel 中我们都会看到它的身影）。</p><h3 id="代码生成" tabindex="-1"><a class="header-anchor" href="#代码生成"><span>代码生成</span></a></h3><p>将 AST 转换为可执行代码的过程被称为 <strong>代码生成</strong>。这个过程与语言、目标平台等息息相关。 抛开具体细节，简单来说就是有某种方法可以将 <code>var a = 2</code>; 的 AST 转化为一组 <strong>机器指令</strong>：创建一个叫做 <code>a</code> 的变量（包括 <strong>分配内存</strong> 等），并将一个值存储在变量 <code>a</code> 中。</p><p>通过上述三个阶段，浏览器已经可以运行我们得到的 <strong>可执行代码</strong>，这三个阶段还有一个合称叫 <strong>编译阶段</strong>。我们把之后对可执行代码的执行称为 <strong>运行阶段</strong>。</p><h2 id="编译过程" tabindex="-1"><a class="header-anchor" href="#编译过程"><span>编译过程</span></a></h2><p>编译过程中的关键角色：</p><ul><li><strong>引擎</strong>：从头到尾负责整个 JavaScript 程序的编译及执行过程</li><li><strong>编译器</strong>：负责语法分析及代码生成等步骤</li><li><strong>作用域</strong>：负责收集并维护由所有声明的标识符（变量）组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限</li></ul><h3 id="编译过程详解" tabindex="-1"><a class="header-anchor" href="#编译过程详解"><span>编译过程详解</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>通过以上论述可以得知，编译器首先会将这段代码分解成词法单元，然后将词法单元解构成一个树结构（AST），但是当编译器开始进行代码生成时，它对这段代码的处理方式会和预期的情况有所不同。</p><p>当我们看到这行代码，用伪代码与别人进行概括时，可能会表述为：为一个变量分配内存，并将其命名为变量 <code>a</code>，然后将值 <code>2</code> 保存到这个变量（内存）中。</p><p>然而，这并不完全正确。</p><p>事实上编译器会进行如下操作：</p><ol><li><p>执行流遇到 <code>const a</code>，编译器会询问作用域是否已经有一个该名称的变量存在于同一个作用域的集合中。如果是，编译器会忽略该声明，继续进行编译；否则它会要求作用域在当前作用域的集合中声明一个新的变量，并命名为<code>a</code>。</p></li><li><p>接下来编译器会为引擎生成运行所需的代码，这些代码被用来处理 <code>a = 2</code> 这个赋值操作。引擎运行时会首先询问作用域，在当前的作用域集合中，是否存在一个叫作 a 的变量，如果是，引擎就会使用这个变量；如果否，引擎就会继续查找该变量。</p></li></ol><p>总结起来就是：</p><ul><li><p>编译器在作用域声明变量（如果没有）</p></li><li><p>引擎在运行这些代码时查找该变量，如果作用域中有该变量则进行赋值</p></li></ul><p>在上面的第二步中，引擎执行运行时所需的代码时，会通过查找变量 <code>a</code> 来判断它是否已经声明过。查找的过程由作用域进行协助，但是引擎执行怎么查找，会影响最终的查找结果。</p><p>还是 <code>const a = 2;</code> 这个例子，引擎会为变量 <code>a</code> 进行 LHS 查询。当然还有一种 RHS 查询。</p><blockquote><p>那么 LHS 和 RHS 查询是什么呢？</p></blockquote><p>这里的 L 代表左侧，R 代表右侧。通俗且不严谨的解释 LHS 和 RHS 的含义就是：<strong>当变量出现在赋值操作的左侧时进行 LHS 查询，出现在右侧时进行 RHS 查询。</strong></p><p>那么描述的更准确的一点，RHS 查询与简单的查找某个变量的值毫无二致，而 LHS 查询则是试图找到变量的容器本身，从而可以对其赋值。</p><p>从这个角度说，RHS 并不是真正意义上的&quot;赋值操作的右侧&quot;，更准确的说是&quot;非左侧&quot;。所以，我们可以将 RHS 理解成 Retrieve his source value（取到它的源值），这意味着，&quot;得到某某的值&quot;。</p><p>那我们来看一段代码深入理解一下 LHS 与 RHS。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>console.log(a)</code> 中，变量 <code>a</code> 的引用是一个 RHS 引用，因为我们是取到 <code>a</code> 的值。并将这个值传递给 <code>console.log()</code> 方法 相比之下，例如： <code>a = 2</code> ，调用 <code>foo(2)</code> 时，隐式的进行了赋值操作。这里对 <code>a</code> 的引用就是 LHS 引用，因为我们实际上不关心当前的值时什么，只要想把 <code>= 2</code> 这个赋值操作找到一个目标。 LHS 和 RHS 的含义是 <strong>赋值操作的左侧或右侧</strong> 并不一定意味着就是 <code>=</code> 赋值操作符的左侧或右侧。</p><p>赋值操作还有其他几种形式，因此在概念上最好将其理解 <strong>赋值操作的目标是谁</strong>（LHS） 以及 <strong>谁是赋值操作的源头</strong>（RHS）。</p><p>当然上面的程序并不只有一个 LHS 和 RHS 引用：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 这里隐式的进行了对形参 a 的 LHS 引用。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 这里对 log() 方法进行了 RHS 引用，询问 console 对象上是否有 log() 方法。</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 对 log(a) 方法内的 a 进行 RHS 引用，取到 a 的值。</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  // 2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// 此处调用 foo() 方法，需要调用对 foo 的 RHS 引用。意味着&quot;去找foo这个值，并把它给我&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是：我们经常会将函数声明 <code>function foo(a) {...}</code> 转化为普通的变量赋值（函数表达式） <code>var foo = function(a) {…}</code>，这样去理解的话，这个函数是 LHS 查询。但是有一个细微的差别，编译器可以在代码生成的同时处理声明和值的定义，比如引擎执行代码时，并不会有线程专门用来将一个函数值&quot;分配给&quot; <code>foo</code>，因此，将函数声明理解成前面讨论的 LHS 查询和赋值的形式并不合适。</p><blockquote><p>💡 综上所述，作用域是一套 标识符的查询规则（注意这里的用词是规则），JavaScript 编译引擎执行时根据查找的目的进行 LHS 与 RHS 查询。这套查询规则确定标识符在何处（当前作用域、上层作用域或全局作用域）以及如何查找（LHS、RHS）。</p></blockquote>`,41)]))}const r=s(l,[["render",t],["__file","1.html.vue"]]),p=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/1.html","title":"编译阶段","lang":"zh-CN","frontmatter":{"order":1,"date":"2018-01-01T00:00:00.000Z","category":["前端技术"],"tag":["JavaScript"]},"headers":[{"level":2,"title":"编译原理","slug":"编译原理","link":"#编译原理","children":[{"level":3,"title":"分词和词法分析","slug":"分词和词法分析","link":"#分词和词法分析","children":[]},{"level":3,"title":"解析和语法分析","slug":"解析和语法分析","link":"#解析和语法分析","children":[]},{"level":3,"title":"代码生成","slug":"代码生成","link":"#代码生成","children":[]}]},{"level":2,"title":"编译过程","slug":"编译过程","link":"#编译过程","children":[{"level":3,"title":"编译过程详解","slug":"编译过程详解","link":"#编译过程详解","children":[]}]}],"git":{"createdTime":1727331628000,"updatedTime":1727331628000,"contributors":[{"name":"liyanxin","email":"liyanxin@conforx.com","commits":1}]},"readingTime":{"minutes":6.61,"words":1983},"filePathRelative":"前端技术/JavaScript/核心模块/编译阶段/1.md","localizedDate":"2018年1月1日","excerpt":"\\n<h2>编译原理</h2>\\n<p>JavaScript 是一门编译语言。与传统的编译语言不同的是，JavaScript 不是提前编译的，编译结果也不能在分布式系统中进行移植。\\n在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为 <strong>编译</strong>。</p>\\n<ol>\\n<li>分词 / 词法分析</li>\\n<li>解析 / 语法分析</li>\\n<li>代码生成</li>\\n</ol>\\n<h3>分词和词法分析</h3>\\n<p><strong>词法分析</strong>（Tokenizing / Lexing） 这个过程会将由字符组成的字符串分解成有意义的代码块（对编程语言来说），这些代码块被称为 <strong>词法单元</strong>（Token）。</p>"}');export{r as comp,p as data};