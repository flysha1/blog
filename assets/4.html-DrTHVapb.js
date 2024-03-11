import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as a,b as e}from"./app-gpsbbifa.js";const s={},n=e('<h1 id="_4-css选择器的权重和优先级" tabindex="-1"><a class="header-anchor" href="#_4-css选择器的权重和优先级"><span>4. CSS选择器的权重和优先级</span></a></h1><h2 id="选择器权重" tabindex="-1"><a class="header-anchor" href="#选择器权重"><span>选择器权重</span></a></h2><p>当多个样式规则应用于同一个元素时，浏览器需要决定哪个样式规则应该被优先应用。这就是选择器权重的概念</p><ul><li>ID选择器: 权重为100</li><li>类选择器: 权重为10</li><li>属性选择器: 权重为10</li><li>伪类选择器: 权重为10</li><li>标签选择器: 权重为1</li><li>伪元素选择器: 权重为1</li><li>兄弟选择器: 权重为0</li><li>子选择器: 权重为0</li><li>后代选择器: 权重为0</li><li>通配符选择器: 权重为0</li></ul><h2 id="优先级规则" tabindex="-1"><a class="header-anchor" href="#优先级规则"><span>优先级规则</span></a></h2><ol><li><p>!important具有最高优先级，将覆盖其他规则的样式。</p></li><li><p>内联样式具有第二高的优先级，将覆盖外部和嵌入样式表中的所有选择器。</p></li><li><p>ID选择器具有第三高的优先级，将覆盖类选择器、伪类选择器和属性选择器的样式。</p></li><li><p>类选择器、伪类选择器和属性选择器具有中等优先级，将覆盖标签选择器和伪元素选择器的样式。</p></li><li><p>标签选择器和伪元素选择器具有最低优先级，将被其他选择器的样式所覆盖。</p></li></ol>',6),t=[n];function c(o,p){return l(),a("div",null,t)}const _=i(s,[["render",c],["__file","4.html.vue"]]);export{_ as default};
