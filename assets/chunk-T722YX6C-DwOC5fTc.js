import{m as o,e as P,Q as L,J as B,g as st,X as W,Z as lt,N as Q,b as T}from"./mermaid.esm.min-WTJq49Wv.js";function X(l,t){t&&l.attr("style",t)}o(X,"applyStyle");function G(l){let t=T(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),s=t.append("xhtml:div"),r=l.label,i=l.isNode?"nodeLabel":"edgeLabel",e=s.append("span");return e.html(r),X(e,l.labelStyle),e.attr("class",i),X(s,l.labelStyle),s.style("display","inline-block"),s.style("white-space","nowrap"),s.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}o(G,"addHtmlLabel");var dt=o((l,t,s,r)=>{let i=l||"";if(typeof i=="object"&&(i=i[0]),P(L().flowchart.htmlLabels)){i=i.replace(/\\n|\n/g,"<br />"),B.debug("vertexText"+i);let e={isNode:r,label:st(W(i)),labelStyle:t.replace("fill:","color:")};return G(e)}else{let e=document.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",t.replace("color:","fill:"));let a=[];typeof i=="string"?a=i.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(i)?a=i:a=[];for(let n of a){let d=document.createElementNS("http://www.w3.org/2000/svg","tspan");d.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),d.setAttribute("dy","1em"),d.setAttribute("x","0"),s?d.setAttribute("class","title-row"):d.setAttribute("class","row"),d.textContent=n.trim(),e.appendChild(d)}return e}},"createLabel"),A=dt,k=o(async(l,t,s,r)=>{let i=L(),e,a=t.useHtmlLabels||P(i.flowchart.htmlLabels);s?e=s:e="node default";let n=l.insert("g").attr("class",e).attr("id",t.domId||t.id),d=n.insert("g").attr("class","label").attr("style",t.labelStyle),c;t.labelText===void 0?c="":c=typeof t.labelText=="string"?t.labelText:t.labelText[0];let h=d.node(),y;t.labelType==="markdown"?y=lt(d,Q(W(c),i),{useHtmlLabels:a,width:t.width||i.flowchart.wrappingWidth,classes:"markdown-node-label"},i):y=h.appendChild(A(Q(W(c),i),t.labelStyle,!1,r));let g=y.getBBox(),x=t.padding/2;if(P(i.flowchart.htmlLabels)){let p=y.children[0],v=T(y),w=p.getElementsByTagName("img");if(w){let _=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...w].map(S=>new Promise(I=>{function C(){if(S.style.display="flex",S.style.flexDirection="column",_){let j=i.fontSize?i.fontSize:window.getComputedStyle(document.body).fontSize,z=parseInt(j,10)*5+"px";S.style.minWidth=z,S.style.maxWidth=z}else S.style.width="100%";I(S)}o(C,"setupImage"),setTimeout(()=>{S.complete&&C()}),S.addEventListener("error",C),S.addEventListener("load",C)})))}g=p.getBoundingClientRect(),v.attr("width",g.width),v.attr("height",g.height)}return a?d.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"):d.attr("transform","translate(0, "+-g.height/2+")"),t.centerLabel&&d.attr("transform","translate("+-g.width/2+", "+-g.height/2+")"),d.insert("rect",":first-child"),{shapeSvg:n,bbox:g,halfPadding:x,label:d}},"labelHelper"),u=o((l,t)=>{let s=t.node().getBBox();l.width=s.width,l.height=s.height},"updateNodeBounds");function E(l,t,s,r){return l.insert("polygon",":first-child").attr("points",r.map(function(i){return i.x+","+i.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+s/2+")")}o(E,"insertPolygonShape");var ht=o(l=>{let t=new Set;for(let s of l)switch(s){case"x":t.add("right"),t.add("left");break;case"y":t.add("up"),t.add("down");break;default:t.add(s);break}return t},"expandAndDeduplicateDirections"),ot=o((l,t,s)=>{let r=ht(l),i=2,e=t.height+2*s.padding,a=e/i,n=t.width+2*a+s.padding,d=s.padding/2;return r.has("right")&&r.has("left")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:a,y:0},{x:n/2,y:2*d},{x:n-a,y:0},{x:n,y:0},{x:n,y:-e/3},{x:n+2*d,y:-e/2},{x:n,y:-2*e/3},{x:n,y:-e},{x:n-a,y:-e},{x:n/2,y:-e-2*d},{x:a,y:-e},{x:0,y:-e},{x:0,y:-2*e/3},{x:-2*d,y:-e/2},{x:0,y:-e/3}]:r.has("right")&&r.has("left")&&r.has("up")?[{x:a,y:0},{x:n-a,y:0},{x:n,y:-e/2},{x:n-a,y:-e},{x:a,y:-e},{x:0,y:-e/2}]:r.has("right")&&r.has("left")&&r.has("down")?[{x:0,y:0},{x:a,y:-e},{x:n-a,y:-e},{x:n,y:0}]:r.has("right")&&r.has("up")&&r.has("down")?[{x:0,y:0},{x:n,y:-a},{x:n,y:-e+a},{x:0,y:-e}]:r.has("left")&&r.has("up")&&r.has("down")?[{x:n,y:0},{x:0,y:-a},{x:0,y:-e+a},{x:n,y:-e}]:r.has("right")&&r.has("left")?[{x:a,y:0},{x:a,y:-d},{x:n-a,y:-d},{x:n-a,y:0},{x:n,y:-e/2},{x:n-a,y:-e},{x:n-a,y:-e+d},{x:a,y:-e+d},{x:a,y:-e},{x:0,y:-e/2}]:r.has("up")&&r.has("down")?[{x:n/2,y:0},{x:0,y:-d},{x:a,y:-d},{x:a,y:-e+d},{x:0,y:-e+d},{x:n/2,y:-e},{x:n,y:-e+d},{x:n-a,y:-e+d},{x:n-a,y:-d},{x:n,y:-d}]:r.has("right")&&r.has("up")?[{x:0,y:0},{x:n,y:-a},{x:0,y:-e}]:r.has("right")&&r.has("down")?[{x:0,y:0},{x:n,y:0},{x:0,y:-e}]:r.has("left")&&r.has("up")?[{x:n,y:0},{x:0,y:-a},{x:n,y:-e}]:r.has("left")&&r.has("down")?[{x:n,y:0},{x:0,y:0},{x:n,y:-e}]:r.has("right")?[{x:a,y:-d},{x:a,y:-d},{x:n-a,y:-d},{x:n-a,y:0},{x:n,y:-e/2},{x:n-a,y:-e},{x:n-a,y:-e+d},{x:a,y:-e+d},{x:a,y:-e+d}]:r.has("left")?[{x:a,y:0},{x:a,y:-d},{x:n-a,y:-d},{x:n-a,y:-e+d},{x:a,y:-e+d},{x:a,y:-e},{x:0,y:-e/2}]:r.has("up")?[{x:a,y:-d},{x:a,y:-e+d},{x:0,y:-e+d},{x:n/2,y:-e},{x:n,y:-e+d},{x:n-a,y:-e+d},{x:n-a,y:-d}]:r.has("down")?[{x:n/2,y:0},{x:0,y:-d},{x:a,y:-d},{x:a,y:-e+d},{x:n-a,y:-e+d},{x:n-a,y:-d},{x:n,y:-d}]:[{x:0,y:0}]},"getArrowPoints");function K(l,t){return l.intersect(t)}o(K,"intersectNode");var ct=K;function tt(l,t,s,r){var i=l.x,e=l.y,a=i-r.x,n=e-r.y,d=Math.sqrt(t*t*n*n+s*s*a*a),c=Math.abs(t*s*a/d);r.x<i&&(c=-c);var h=Math.abs(t*s*n/d);return r.y<e&&(h=-h),{x:i+c,y:e+h}}o(tt,"intersectEllipse");var et=tt;function at(l,t,s){return et(l,t,t,s)}o(at,"intersectCircle");var yt=at;function rt(l,t,s,r){var i,e,a,n,d,c,h,y,g,x,p,v,w,_,S;if(i=t.y-l.y,a=l.x-t.x,d=t.x*l.y-l.x*t.y,g=i*s.x+a*s.y+d,x=i*r.x+a*r.y+d,!(g!==0&&x!==0&&F(g,x))&&(e=r.y-s.y,n=s.x-r.x,c=r.x*s.y-s.x*r.y,h=e*l.x+n*l.y+c,y=e*t.x+n*t.y+c,!(h!==0&&y!==0&&F(h,y))&&(p=i*n-e*a,p!==0)))return v=Math.abs(p/2),w=a*c-n*d,_=w<0?(w-v)/p:(w+v)/p,w=e*d-i*c,S=w<0?(w-v)/p:(w+v)/p,{x:_,y:S}}o(rt,"intersectLine");function F(l,t){return l*t>0}o(F,"sameSign");var xt=rt,gt=it;function it(l,t,s){var r=l.x,i=l.y,e=[],a=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(p){a=Math.min(a,p.x),n=Math.min(n,p.y)}):(a=Math.min(a,t.x),n=Math.min(n,t.y));for(var d=r-l.width/2-a,c=i-l.height/2-n,h=0;h<t.length;h++){var y=t[h],g=t[h<t.length-1?h+1:0],x=xt(l,s,{x:d+y.x,y:c+y.y},{x:d+g.x,y:c+g.y});x&&e.push(x)}return e.length?(e.length>1&&e.sort(function(p,v){var w=p.x-s.x,_=p.y-s.y,S=Math.sqrt(w*w+_*_),I=v.x-s.x,C=v.y-s.y,j=Math.sqrt(I*I+C*C);return S<j?-1:S===j?0:1}),e[0]):l}o(it,"intersectPolygon");var pt=o((l,t)=>{var s=l.x,r=l.y,i=t.x-s,e=t.y-r,a=l.width/2,n=l.height/2,d,c;return Math.abs(e)*a>Math.abs(i)*n?(e<0&&(n=-n),d=e===0?0:n*i/e,c=n):(i<0&&(a=-a),d=a,c=i===0?0:a*e/i),{x:s+d,y:r+c}},"intersectRect"),wt=pt,f={node:ct,circle:yt,ellipse:et,polygon:gt,rect:wt},ft=o(async(l,t)=>{t.useHtmlLabels||L().flowchart.htmlLabels||(t.centerLabel=!0);let{shapeSvg:s,bbox:r,halfPadding:i}=await k(l,t,"node "+t.classes,!0);B.info("Classes = ",t.classes);let e=s.insert("rect",":first-child");return e.attr("rx",t.rx).attr("ry",t.ry).attr("x",-r.width/2-i).attr("y",-r.height/2-i).attr("width",r.width+t.padding).attr("height",r.height+t.padding),u(t,e),t.intersect=function(a){return f.rect(t,a)},s},"note"),ut=ft,U=o(l=>l?" "+l:"","formatClass"),N=o((l,t)=>`${t||"node default"}${U(l.classes)} ${U(l.class)}`,"getClassesFromNode"),Z=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=i+e,n=[{x:a/2,y:0},{x:a,y:-a/2},{x:a/2,y:-a},{x:0,y:-a/2}];B.info("Question main (Circle)");let d=E(s,a,a,n);return d.attr("style",t.style),u(t,d),t.intersect=function(c){return B.warn("Intersect called"),f.polygon(t,n,c)},s},"question"),bt=o((l,t)=>{let s=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),r=28,i=[{x:0,y:r/2},{x:r/2,y:0},{x:0,y:-r/2},{x:-r/2,y:0}];return s.insert("polygon",":first-child").attr("points",i.map(function(e){return e.x+","+e.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(e){return f.circle(t,14,e)},s},"choice"),mt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=4,e=r.height+t.padding,a=e/i,n=r.width+2*a+t.padding,d=[{x:a,y:0},{x:n-a,y:0},{x:n,y:-e/2},{x:n-a,y:-e},{x:a,y:-e},{x:0,y:-e/2}],c=E(s,n,e,d);return c.attr("style",t.style),u(t,c),t.intersect=function(h){return f.polygon(t,d,h)},s},"hexagon"),vt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,void 0,!0),i=2,e=r.height+2*t.padding,a=e/i,n=r.width+2*a+t.padding,d=ot(t.directions,r,t),c=E(s,n,e,d);return c.attr("style",t.style),u(t,c),t.intersect=function(h){return f.polygon(t,d,h)},s},"block_arrow"),St=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:-e/2,y:0},{x:i,y:0},{x:i,y:-e},{x:-e/2,y:-e},{x:0,y:-e/2}];return E(s,i,e,a).attr("style",t.style),t.width=i+e,t.height=e,t.intersect=function(n){return f.polygon(t,a,n)},s},"rect_left_inv_arrow"),Bt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:-2*e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:e/6,y:-e}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"lean_right"),kt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:2*e/6,y:0},{x:i+e/6,y:0},{x:i-2*e/6,y:-e},{x:-e/6,y:-e}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"lean_left"),Ct=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:-2*e/6,y:0},{x:i+2*e/6,y:0},{x:i-e/6,y:-e},{x:e/6,y:-e}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"trapezoid"),_t=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:e/6,y:0},{x:i-e/6,y:0},{x:i+2*e/6,y:-e},{x:-2*e/6,y:-e}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"inv_trapezoid"),Tt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:0,y:0},{x:i+e/2,y:0},{x:i,y:-e/2},{x:i+e/2,y:-e},{x:0,y:-e}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"rect_right_inv_arrow"),Dt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=i/2,a=e/(2.5+i/50),n=r.height+a+t.padding,d="M 0,"+a+" a "+e+","+a+" 0,0,0 "+i+" 0 a "+e+","+a+" 0,0,0 "+-i+" 0 l 0,"+n+" a "+e+","+a+" 0,0,0 "+i+" 0 l 0,"+-n,c=s.attr("label-offset-y",a).insert("path",":first-child").attr("style",t.style).attr("d",d).attr("transform","translate("+-i/2+","+-(n/2+a)+")");return u(t,c),t.intersect=function(h){let y=f.rect(t,h),g=y.x-t.x;if(e!=0&&(Math.abs(g)<t.width/2||Math.abs(g)==t.width/2&&Math.abs(y.y-t.y)>t.height/2-a)){let x=a*a*(1-g*g/(e*e));x!=0&&(x=Math.sqrt(x)),x=a-x,h.y-t.y>0&&(x=-x),y.y+=x}return y},s},"cylinder"),Lt=o(async(l,t)=>{let{shapeSvg:s,bbox:r,halfPadding:i}=await k(l,t,"node "+t.classes+" "+t.class,!0),e=s.insert("rect",":first-child"),a=t.positioned?t.width:r.width+t.padding,n=t.positioned?t.height:r.height+t.padding,d=t.positioned?-a/2:-r.width/2-i,c=t.positioned?-n/2:-r.height/2-i;if(e.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",d).attr("y",c).attr("width",a).attr("height",n),t.props){let h=new Set(Object.keys(t.props));t.props.borders&&(O(e,t.props.borders,a,n),h.delete("borders")),h.forEach(y=>{B.warn(`Unknown node property ${y}`)})}return u(t,e),t.intersect=function(h){return f.rect(t,h)},s},"rect"),Nt=o(async(l,t)=>{let{shapeSvg:s,bbox:r,halfPadding:i}=await k(l,t,"node "+t.classes,!0),e=s.insert("rect",":first-child"),a=t.positioned?t.width:r.width+t.padding,n=t.positioned?t.height:r.height+t.padding,d=t.positioned?-a/2:-r.width/2-i,c=t.positioned?-n/2:-r.height/2-i;if(e.attr("class","basic cluster composite label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",d).attr("y",c).attr("width",a).attr("height",n),t.props){let h=new Set(Object.keys(t.props));t.props.borders&&(O(e,t.props.borders,a,n),h.delete("borders")),h.forEach(y=>{B.warn(`Unknown node property ${y}`)})}return u(t,e),t.intersect=function(h){return f.rect(t,h)},s},"composite"),Et=o(async(l,t)=>{let{shapeSvg:s}=await k(l,t,"label",!0);B.trace("Classes = ",t.class);let r=s.insert("rect",":first-child"),i=0,e=0;if(r.attr("width",i).attr("height",e),s.attr("class","label edgeLabel"),t.props){let a=new Set(Object.keys(t.props));t.props.borders&&(O(r,t.props.borders,i,e),a.delete("borders")),a.forEach(n=>{B.warn(`Unknown node property ${n}`)})}return u(t,r),t.intersect=function(a){return f.rect(t,a)},s},"labelRect");function O(l,t,s,r){let i=[],e=o(n=>{i.push(n,0)},"addBorder"),a=o(n=>{i.push(0,n)},"skipBorder");t.includes("t")?(B.debug("add top border"),e(s)):a(s),t.includes("r")?(B.debug("add right border"),e(r)):a(r),t.includes("b")?(B.debug("add bottom border"),e(s)):a(s),t.includes("l")?(B.debug("add left border"),e(r)):a(r),l.attr("stroke-dasharray",i.join(" "))}o(O,"applyNodePropertyBorders");var It=o((l,t)=>{let s;t.classes?s="node "+t.classes:s="node default";let r=l.insert("g").attr("class",s).attr("id",t.domId||t.id),i=r.insert("rect",":first-child"),e=r.insert("line"),a=r.insert("g").attr("class","label"),n=t.labelText.flat?t.labelText.flat():t.labelText,d="";typeof n=="object"?d=n[0]:d=n,B.info("Label text abc79",d,n,typeof n=="object");let c=a.node().appendChild(A(d,t.labelStyle,!0,!0)),h={width:0,height:0};if(P(L().flowchart.htmlLabels)){let v=c.children[0],w=T(c);h=v.getBoundingClientRect(),w.attr("width",h.width),w.attr("height",h.height)}B.info("Text 2",n);let y=n.slice(1,n.length),g=c.getBBox(),x=a.node().appendChild(A(y.join?y.join("<br/>"):y,t.labelStyle,!0,!0));if(P(L().flowchart.htmlLabels)){let v=x.children[0],w=T(x);h=v.getBoundingClientRect(),w.attr("width",h.width),w.attr("height",h.height)}let p=t.padding/2;return T(x).attr("transform","translate( "+(h.width>g.width?0:(g.width-h.width)/2)+", "+(g.height+p+5)+")"),T(c).attr("transform","translate( "+(h.width<g.width?0:-(g.width-h.width)/2)+", 0)"),h=a.node().getBBox(),a.attr("transform","translate("+-h.width/2+", "+(-h.height/2-p+3)+")"),i.attr("class","outer title-state").attr("x",-h.width/2-p).attr("y",-h.height/2-p).attr("width",h.width+t.padding).attr("height",h.height+t.padding),e.attr("class","divider").attr("x1",-h.width/2-p).attr("x2",h.width/2+p).attr("y1",-h.height/2-p+g.height+p).attr("y2",-h.height/2-p+g.height+p),u(t,i),t.intersect=function(v){return f.rect(t,v)},r},"rectWithTitle"),Mt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.height+t.padding,e=r.width+i/4+t.padding,a=s.insert("rect",":first-child").attr("style",t.style).attr("rx",i/2).attr("ry",i/2).attr("x",-e/2).attr("y",-i/2).attr("width",e).attr("height",i);return u(t,a),t.intersect=function(n){return f.rect(t,n)},s},"stadium"),Pt=o(async(l,t)=>{let{shapeSvg:s,bbox:r,halfPadding:i}=await k(l,t,N(t,void 0),!0),e=s.insert("circle",":first-child");return e.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",r.width/2+i).attr("width",r.width+t.padding).attr("height",r.height+t.padding),B.info("Circle main"),u(t,e),t.intersect=function(a){return B.info("Circle intersect",t,r.width/2+i,a),f.circle(t,r.width/2+i,a)},s},"circle"),jt=o(async(l,t)=>{let{shapeSvg:s,bbox:r,halfPadding:i}=await k(l,t,N(t,void 0),!0),e=5,a=s.insert("g",":first-child"),n=a.insert("circle"),d=a.insert("circle");return a.attr("class",t.class),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",r.width/2+i+e).attr("width",r.width+t.padding+e*2).attr("height",r.height+t.padding+e*2),d.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",r.width/2+i).attr("width",r.width+t.padding).attr("height",r.height+t.padding),B.info("DoubleCircle main"),u(t,n),t.intersect=function(c){return B.info("DoubleCircle intersect",t,r.width/2+i+e,c),f.circle(t,r.width/2+i+e,c)},s},"doublecircle"),Rt=o(async(l,t)=>{let{shapeSvg:s,bbox:r}=await k(l,t,N(t,void 0),!0),i=r.width+t.padding,e=r.height+t.padding,a=[{x:0,y:0},{x:i,y:0},{x:i,y:-e},{x:0,y:-e},{x:0,y:0},{x:-8,y:0},{x:i+8,y:0},{x:i+8,y:-e},{x:-8,y:-e},{x:-8,y:0}],n=E(s,i,e,a);return n.attr("style",t.style),u(t,n),t.intersect=function(d){return f.polygon(t,a,d)},s},"subroutine"),At=o((l,t)=>{let s=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),r=s.insert("circle",":first-child");return r.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),u(t,r),t.intersect=function(i){return f.circle(t,7,i)},s},"start"),V=o((l,t,s)=>{let r=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),i=70,e=10;s==="LR"&&(i=10,e=70);let a=r.append("rect").attr("x",-1*i/2).attr("y",-1*e/2).attr("width",i).attr("height",e).attr("class","fork-join");return u(t,a),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(n){return f.rect(t,n)},r},"forkJoin"),$t=o((l,t)=>{let s=l.insert("g").attr("class","node default").attr("id",t.domId||t.id),r=s.insert("circle",":first-child"),i=s.insert("circle",":first-child");return i.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),r.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),u(t,i),t.intersect=function(e){return f.circle(t,7,e)},s},"end"),zt=o((l,t)=>{var J;let s=t.padding/2,r=4,i=8,e;t.classes?e="node "+t.classes:e="node default";let a=l.insert("g").attr("class",e).attr("id",t.domId||t.id),n=a.insert("rect",":first-child"),d=a.insert("line"),c=a.insert("line"),h=0,y=r,g=a.insert("g").attr("class","label"),x=0,p=(J=t.classData.annotations)==null?void 0:J[0],v=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",w=g.node().appendChild(A(v,t.labelStyle,!0,!0)),_=w.getBBox();if(P(L().flowchart.htmlLabels)){let b=w.children[0],m=T(w);_=b.getBoundingClientRect(),m.attr("width",_.width),m.attr("height",_.height)}t.classData.annotations[0]&&(y+=_.height+r,h+=_.width);let S=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(L().flowchart.htmlLabels?S+="&lt;"+t.classData.type+"&gt;":S+="<"+t.classData.type+">");let I=g.node().appendChild(A(S,t.labelStyle,!0,!0));T(I).attr("class","classTitle");let C=I.getBBox();if(P(L().flowchart.htmlLabels)){let b=I.children[0],m=T(I);C=b.getBoundingClientRect(),m.attr("width",C.width),m.attr("height",C.height)}y+=C.height+r,C.width>h&&(h=C.width);let j=[];t.classData.members.forEach(b=>{let m=b.getDisplayDetails(),R=m.displayText;L().flowchart.htmlLabels&&(R=R.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let M=g.node().appendChild(A(R,m.cssStyle?m.cssStyle:t.labelStyle,!0,!0)),D=M.getBBox();if(P(L().flowchart.htmlLabels)){let q=M.children[0],H=T(M);D=q.getBoundingClientRect(),H.attr("width",D.width),H.attr("height",D.height)}D.width>h&&(h=D.width),y+=D.height+r,j.push(M)}),y+=i;let z=[];if(t.classData.methods.forEach(b=>{let m=b.getDisplayDetails(),R=m.displayText;L().flowchart.htmlLabels&&(R=R.replace(/</g,"&lt;").replace(/>/g,"&gt;"));let M=g.node().appendChild(A(R,m.cssStyle?m.cssStyle:t.labelStyle,!0,!0)),D=M.getBBox();if(P(L().flowchart.htmlLabels)){let q=M.children[0],H=T(M);D=q.getBoundingClientRect(),H.attr("width",D.width),H.attr("height",D.height)}D.width>h&&(h=D.width),y+=D.height+r,z.push(M)}),y+=i,p){let b=(h-_.width)/2;T(w).attr("transform","translate( "+(-1*h/2+b)+", "+-1*y/2+")"),x=_.height+r}let nt=(h-C.width)/2;return T(I).attr("transform","translate( "+(-1*h/2+nt)+", "+(-1*y/2+x)+")"),x+=C.height+r,d.attr("class","divider").attr("x1",-h/2-s).attr("x2",h/2+s).attr("y1",-y/2-s+i+x).attr("y2",-y/2-s+i+x),x+=i,j.forEach(b=>{T(b).attr("transform","translate( "+-h/2+", "+(-1*y/2+x+i/2)+")");let m=b==null?void 0:b.getBBox();x+=((m==null?void 0:m.height)??0)+r}),x+=i,c.attr("class","divider").attr("x1",-h/2-s).attr("x2",h/2+s).attr("y1",-y/2-s+i+x).attr("y2",-y/2-s+i+x),x+=i,z.forEach(b=>{T(b).attr("transform","translate( "+-h/2+", "+(-1*y/2+x)+")");let m=b==null?void 0:b.getBBox();x+=((m==null?void 0:m.height)??0)+r}),n.attr("style",t.style).attr("class","outer title-state").attr("x",-h/2-s).attr("y",-(y/2)-s).attr("width",h+t.padding).attr("height",y+t.padding),u(t,n),t.intersect=function(b){return f.rect(t,b)},a},"class_box"),Y={rhombus:Z,composite:Nt,question:Z,rect:Lt,labelRect:Et,rectWithTitle:It,choice:bt,circle:Pt,doublecircle:jt,stadium:Mt,hexagon:mt,block_arrow:vt,rect_left_inv_arrow:St,lean_right:Bt,lean_left:kt,trapezoid:Ct,inv_trapezoid:_t,rect_right_inv_arrow:Tt,cylinder:Dt,start:At,end:$t,note:ut,subroutine:Rt,fork:V,join:V,class_box:zt},$={},Ot=o(async(l,t,s)=>{let r,i;if(t.link){let e;L().securityLevel==="sandbox"?e="_top":t.linkTarget&&(e=t.linkTarget||"_blank"),r=l.insert("svg:a").attr("xlink:href",t.link).attr("target",e),i=await Y[t.shape](r,t,s)}else i=await Y[t.shape](l,t,s),r=i;return t.tooltip&&i.attr("title",t.tooltip),t.class&&i.attr("class","node default "+t.class),$[t.id]=r,t.haveCallback&&$[t.id].attr("class",$[t.id].attr("class")+" clickable"),r},"insertNode"),qt=o((l,t)=>{$[t.id]=l},"setNodeElem"),Wt=o(()=>{$={}},"clear"),Xt=o(l=>{let t=$[l.id];B.trace("Transforming node",l.diff,l,"translate("+(l.x-l.width/2-5)+", "+l.width/2+")");let s=8,r=l.diff||0;return l.clusterNode?t.attr("transform","translate("+(l.x+r-l.width/2)+", "+(l.y-l.height/2-s)+")"):t.attr("transform","translate("+l.x+", "+l.y+")"),r},"positionNode");export{Xt as $,Wt as O,Ot as R,A as _,wt as e,u as w,qt as z};
