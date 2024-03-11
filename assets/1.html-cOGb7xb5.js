import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o,c,b as s}from"./app-gpsbbifa.js";const d={},r=s('<h1 id="_1-xss和csrf" tabindex="-1"><a class="header-anchor" href="#_1-xss和csrf"><span>1. XSS和CSRF</span></a></h1><h2 id="_1-xss-跨站脚本攻击" tabindex="-1"><a class="header-anchor" href="#_1-xss-跨站脚本攻击"><span>1. XSS（跨站脚本攻击）</span></a></h2><p><code>XSS</code> 攻击指的是跨站脚本攻击，是一种 <strong>代码注入攻击</strong>。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 <code>cookie</code> 等。</p><p><strong>避免方式</strong>：</p><ul><li><p>服务端拼接后返回 HTML 是一种避免 XSS 攻击的常见方法，也就是 SSR（Server-Side Rendering，服务端渲染），这种方式可以在服务端进行输入过滤和转义，从而避免恶意脚本的注入用服务端拼接后返回（不使用服务端渲染）</p></li><li><p>对一些敏感信息进行保护，比如 <code>cookie</code> 使用 <code>http-only</code>，使得脚本无法获取。</p></li><li><p>对用户输入的地方和变量都需要仔细检查长度和对 <code>”&lt;”,”&gt;”,”;”,”’”</code> 等字符做过滤</p></li></ul><h2 id="_2-csrf-跨站请求伪造" tabindex="-1"><a class="header-anchor" href="#_2-csrf-跨站请求伪造"><span>2. CSRF（跨站请求伪造）</span></a></h2><p><code>CSRF</code> 攻击的本质是利用 <code>cookie</code> 会在同源请求中携带发送给服务器的特点，以此来实现用户的冒充。</p><p><strong>避免方式</strong>：</p><ul><li>添加验证码验证</li><li>使用 <code>token</code> 验证</li><li>限制 <code>cookie</code> 不能作为被第三方使用</li><li>进行同源检测</li></ul>',9),a=[r];function i(n,t){return o(),c("div",null,a)}const _=e(d,[["render",i],["__file","1.html.vue"]]);export{_ as default};
