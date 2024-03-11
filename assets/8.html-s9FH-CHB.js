import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,b as o}from"./app-gpsbbifa.js";const c={},d=o('<h1 id="_8-输入url到显示页面的全过程" tabindex="-1"><a class="header-anchor" href="#_8-输入url到显示页面的全过程"><span>8. 输入URL到显示页面的全过程</span></a></h1><ol><li>在浏览器地址栏输入URL</li><li>浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤 <ul><li>如果资源未缓存，发起新请求</li><li>如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。</li><li>检验新鲜通常有两个HTTP头进行控制 <code>Expires</code> 和 <code>Cache-Control</code>： <ul><li>HTTP1.0提供 <code>Expires</code>，值为⼀个绝对时间表示缓存新鲜日期</li><li>HTTP1.1增加了 <code>Cache-Control: max-age=time</code>，值为以秒为单位的最⼤新鲜时间</li></ul></li></ul></li><li>浏览器解析URL获取协议，主机，端口，path</li><li>浏览器组装⼀个HTTP（GET）请求报文</li><li>浏览器获取主机 ip 地址，过程如下： <ul><li>浏览器缓存</li><li>本机缓存</li><li>hosts文件</li><li>路由器缓存</li><li>ISP DNS缓存</li><li>DNS递归查询（可能存在负载均衡导致每次IP不⼀样）</li></ul></li><li>打开⼀个 <code>socket</code> 与目标IP地址，端口建立TCP链接（三次握手）</li><li>TCP链接建立后发送HTTP请求</li><li>服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序</li><li>服务器检查HTTP请求头是否包含缓存验证信息，如果验证缓存新鲜，返回304等对应状态码</li><li>处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作</li><li>服务器将响应报文通过TCP连接发送回浏览器</li><li>浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手</li><li>浏览器检查响应状态码：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同</li><li>如果资源可缓存，进行缓存</li><li>对响应进行解码（例如gzip压缩）</li></ol><p><em><strong>根据资源类型决定如何处理</strong></em>（假设资源为HTML文档）,解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严 格的先后顺序，以下分别解释：</p><ol start="16"><li><p>构建DOM树：</p><ul><li>Tokenizing：根据HTML规范将字符流解析为标记</li><li>Lexing：词法分析将标记转换为对象并定义属性和规则</li><li>DOM construction：根据HTML标记关系将对象组成DOM树</li></ul></li><li><p>解析过程中遇到图片、样式表、js文件，启动下载</p></li><li><p>构建CSSOM树：</p><ul><li>Tokenizing：字符流转换为标记流</li><li>Node：根据标记创建节点</li><li>CSSOM：节点创建CSSOM树</li></ul></li><li><p>根据DOM树和CSSOM树构建渲染树 :</p></li></ol><ul><li>从DOM树的根节点遍历所有可见节点，不可见节点包括： <ul><li>script , meta 这样本身 不可见的标签。</li><li>被css隐藏的节点，如 display: none</li></ul></li><li>对每⼀个可见节点，找到恰当的CSSOM规则并应用</li><li>发布可视节点的内容和计算样式</li></ul><ol start="20"><li>js解析如下：</li></ol><ul><li><p>浏览器创建 <code>Document</code> 对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时 <code>document.readystate</code> 为 <code>loading</code></p></li><li><p>HTML解析器遇到没有 <code>async</code> 和 <code>defer</code> 的 <code>script</code> 时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用 <code>document.write()</code> 把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作 <code>script</code> 和他们之前的文档内容</p></li><li><p>当解析器遇到设置了 <code>async</code> 属性的 <code>script</code> 时，开始下载脚本并继续解析文档。脚本会在它 下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用 <code>document.write()</code>，它们可以访问自己 <code>script</code> 和之前的文档元素</p></li><li><p>当文档完成解析，<code>document.readState</code> 变成 <code>interactive</code></p></li><li><p>所有defer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用 <code>document.write()</code></p></li><li><p>浏览器在 <code>Document</code> 对象上触发 <code>DOMContentLoaded</code> 事件</p></li><li><p>此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入 并且所有异步脚本完成载入和执行，<code>document.readState</code>变为<code>complete</code>，window触发 load事件</p></li></ul><ol start="21"><li>显示页面（HTML解析过程中会逐步显示页面）</li></ol>',8),t=[d];function n(s,p){return i(),e("div",null,t)}const T=l(c,[["render",n],["__file","8.html.vue"]]);export{T as default};
