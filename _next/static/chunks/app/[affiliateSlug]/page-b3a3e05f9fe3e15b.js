(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{2414:(e,t,i)=>{Promise.resolve().then(i.bind(i,9314)),Promise.resolve().then(i.bind(i,494)),Promise.resolve().then(i.bind(i,6008)),Promise.resolve().then(i.bind(i,3302)),Promise.resolve().then(i.bind(i,4226)),Promise.resolve().then(i.bind(i,1714)),Promise.resolve().then(i.bind(i,7731)),Promise.resolve().then(i.bind(i,6897)),Promise.resolve().then(i.bind(i,1849)),Promise.resolve().then(i.bind(i,8593))},8824:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var A=i(6579),r=i(6343);function n({smoothType:e="both",smoothLevel:t=200,...i}){let n=[],a=A.u.create({pin:!0,...i,onRefresh:(...e)=>{for(let e of n)e.scrollTrigger?.refresh();i.onRefresh?.(...e)}});return"fixed"===i.pinType||0===t||r.os.delayedCall(0,()=>{let A=i.pin?.parentElement??i.trigger?.parentElement??null;("in"===e||"both"===e)&&n.push(r.os.fromTo(A,{y:0},{immediateRender:!1,y:t/4,ease:"power1.in",scrollTrigger:{start:()=>a.start-t,end:()=>a.start,scrub:!0}}),r.os.fromTo(A,{y:t/4},{immediateRender:!1,y:0,ease:"power1.out",scrollTrigger:{start:()=>a.start,end:()=>a.start+t,scrub:!0}})),("out"===e||"both"===e)&&n.push(r.os.fromTo(A,{y:0},{immediateRender:!1,y:-t/4,ease:"power1.in",scrollTrigger:{start:()=>a.end-t,end:()=>a.end,scrub:!0}}),r.os.fromTo(A,{y:-t/4},{immediateRender:!1,y:0,ease:"power1.out",scrollTrigger:{start:()=>a.end,end:()=>a.end+t,scrub:!0}}))}),a}},6128:(e,t,i)=>{"use strict";i.d(t,{W9:()=>h,bJ:()=>d,qM:()=>g});var A=i(6016),r=i(7638),n=i(4612),a=i(4691),l=i(8990),o=i(5782),s=i(7692);let c=(()=>{if(!l.Bd)return;let e=document.createElement("div");return e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",e.style.height="100vh",e.style.visibility="hidden",document.body.append(e),e})();function d(e){return(c?.clientHeight??0)/100*e}function h(e){return function(e,t){let i,r,a;let l=(0,A.c)(8),[s,c]=(0,n.useState)(),{screenContextReady:d}=(0,n.use)(o.cH);return l[0]!==t||l[1]!==e?(i=()=>c(e(t)),l[0]=t,l[1]=e,l[2]=i):i=l[2],(0,o.VB)("resize",i),l[3]!==t||l[4]!==e||l[5]!==d?(r=()=>{d&&(0,n.startTransition)(()=>c(e(t)))},a=[e,t,d],l[3]=t,l[4]=e,l[5]=d,l[6]=r,l[7]=a):(r=l[6],a=l[7]),(0,n.useEffect)(r,a),s}(d,e)}let p=()=>{let{innerWidth:e}=window;return e<=a.ik?"mobile":e<=a.g8?"tablet":e<=a.gR?"desktop":"fullWidth"};function g(e){var t;let i=(t=function(e){let t=p(),i=a.ol;return("mobile"===t?i=a.E5:"tablet"===t&&(i=a.KF),l.Bd)?e/(i/100):0}(e),l.Bd?t*(window.innerWidth/100):0),A=Number.parseFloat((e/a.ol*100).toFixed(3))/100*a.gR;return r.A.scaleFully?i:(0,s.x)(A,i,i,i)}},4226:(e,t,i)=>{"use strict";i.d(t,{default:()=>B});var A,r,n=i(2104),a=i(4316),l=i(7336),o=i(4612),s=i(2811),c=i(1438);let d={src:"/public/imgs/HeroBG.jpg",height:2116,width:3200,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADQAQCdASoIAAUAAkA4JZgCdAEf/tJogAD+T1QsYcUeoPJS+juqMC4Uriyc7Zifp72ORiK5vq3hXE/Kgy9bKD346cYgAA==",blurWidth:8,blurHeight:5},h={src:"/public/imgs/HeroBGM.jpg",height:1704,width:786,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAAAwAABwAAQUxQSCEAAAAA2dnZ2dnZ2dnZ2dnZydnZ1YzZ2XPZ2dnZ2dnZ2dnZ2dkAVlA4IEAAAACQAgCdASoEAAgAAkA4JagCdLoBJgLf/A9FCpmZQAD+/SKYUOvn8DUoDCPhC+9nGMMbrLOYfEd462CmX05nrIAA",blurWidth:4,blurHeight:8},p={src:"/public/imgs/patch-left.687721d1.webp",height:1752,width:1320,blurDataURL:"data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAwAgCdASoGAAgAAkA4JbACdLoAAx9Md6MYjAD+fq2KHn4JJc55heLrtSsb9x2z/uOENgUy/WqX/KXZNskbg6U5tNw286aH/B5UpYaxm+NNnegAAAA=",blurWidth:6,blurHeight:8},g={src:"/public/imgs/patch-right.c6d10d67.webp",height:1752,width:1309,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAABwAgCdASoGAAgAAkA4JbACdLoB+AEsAAoS784AAPKnHvSTGXJdZiCNNNVHUzjSJ1QgFufxgPf/8XIq6PNNb4JCaqr4I/+CYdYbB6ScRDB4EAAA",blurWidth:6,blurHeight:8};var u=i(6072),x=i(452),m=i(7950),b=i(9881);function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}var f=i(6016);function v(){return(v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}let y=(0,l.I4)(e=>o.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 4 4"},e),r||(r=o.createElement("circle",{cx:2,cy:2,r:2,fill:"#E7DDCC"}))),{...(0,l.vi)((0,l.AH)`
		width: 4px;
		height: 4px;
	`)}),H=(0,l.I4)("span",{...(0,l.vi)((0,l.AH)`
		${s.Ay.k2};
		color: ${u.A.beige100};
	`)}),I=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		align-items: center;
		gap: 7px;
	`)});var j=i(3710),C=i(418),Q=i(7692),E=i(6808),P=i(8990);function B(){let e=(0,o.useRef)(null),t=(0,o.useRef)(null),i=(0,o.useRef)(null),A=(0,o.useRef)(null),r=(0,o.useRef)(null),l=(0,o.useRef)(null),s=(0,o.useRef)(!1),c=(0,C.l5)(),u=(0,Q.Q)(!1,!1,!0,!0),m=(0,Q.Q)(d,d,d,h);b.w.addEventListener("end",()=>{a.Ay.set(e.current,{display:"flex"}),a.Ay.to(e.current,{scale:1,duration:1,y:0,opacity:1,ease:"power2.inOut"})});let w=(e,t,i)=>{if(!t||!s.current)return;let A=t.getBoundingClientRect(),r=(e.clientX-A.left)/A.width,n=(e.clientY-A.top)/A.height,l=Math.max(-20,Math.min(20,-1*(r-.5)*40)),o=Math.max(-20,Math.min(20,-1*(n-.5)*40));a.Ay.to(i,{x:l,y:o,xPercent:-50,yPercent:-50,transformOrigin:"center",duration:.2,ease:"none"})},f=e=>{a.Ay.to(e,{x:0,y:0,opacity:1,scale:1.1,transformOrigin:"center",xPercent:-50,yPercent:-50,duration:.3,ease:"none",onComplete:()=>{s.current=!0}})},v=e=>{a.Ay.to(e,{x:0,y:0,opacity:0,scale:1,xPercent:-50,yPercent:-50,duration:.3,ease:"none",onComplete:()=>{s.current=!1}})};return(0,j.s)(()=>{if(!A.current||!P.Bd)return;let r=a.Ay.timeline({scrollTrigger:{trigger:A.current,start:"top top",end:"bottom bottom",scrub:1,pin:t.current,pinType:c}});r.to(i.current,{height:0},0),r.to(e.current,{yPercent:(0,Q.x)(-20,-20,-20,-10)},0)},[c],{recreateOnResize:!0}),(0,n.jsx)(D,{ref:A,children:(0,n.jsx)(M,{ref:t,children:(0,n.jsx)(k,{ref:i,children:(0,n.jsxs)(U,{ref:e,children:[(0,n.jsx)($,{loading:"eager",src:m,alt:"Hero Image"}),(0,n.jsx)(L,{}),(0,n.jsx)(F,{children:(0,n.jsx)(R,{children:"Adventure Calls."})}),(0,n.jsxs)(K,{children:[(0,n.jsxs)(S,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(W,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(X,{}),(0,n.jsxs)(z,{children:[u?(0,n.jsx)(V,{children:"MEET THE BIG FIVE"}):(0,n.jsx)(O,{}),(0,n.jsx)(J,{children:"Start Planning Your Tailor-made Retreat."})]})]}),(0,n.jsxs)(_,{onMouseMove:e=>w(e,r.current,r.current),onMouseLeave:()=>v(r.current),onMouseEnter:()=>f(r.current),children:[(0,n.jsx)(V,{children:"MEET THE BIG FIVE"}),(0,n.jsx)(q,{}),(0,n.jsx)(N,{ref:r,src:p,alt:"Patch Left"}),(0,n.jsx)(W,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(X,{})]}),(0,n.jsxs)(_,{onMouseMove:e=>w(e,l.current,l.current),onMouseLeave:()=>v(l.current),onMouseEnter:()=>f(l.current),children:[(0,n.jsx)(V,{children:"All Natural Methodology"}),(0,n.jsx)(q,{}),(0,n.jsx)(N,{ref:l,src:g,alt:"Patch Right"}),(0,n.jsx)(W,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(X,{})]}),(0,n.jsxs)(S,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(W,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(X,{}),(0,n.jsx)(G,{}),(0,n.jsxs)(Y,{children:[(0,n.jsx)(O,{}),(0,n.jsx)(T,{children:"Feel better in minutes with Safari World’s all-natural pain relief patches. Effective, reusable, and powered by your body's own energy."}),(0,n.jsx)(x.A,{href:E.A.shop,colorVariant:"brownTrans",children:"Discover Safari World"})]})]})]})]})})})})}let D=(0,l.I4)("section",{...(0,l.vi)((0,l.AH)`
		position: absolute;
		overflow-y: clip;
		z-index: 1;
		width: 100%;
		height: 200vh;
	`)}),k=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		background-color: ${u.A.beige500};
		position: absolute;
		top: 0;
		left: 0;
		overflow: clip;
		height: 100vh;
		width: 100%;
	`)}),U=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		flex-direction: column;
		justify-content: flex-end;
		transform: scale(0.7);
		translate: 0 300px;
		opacity: 0;
	`),...(0,l.ZQ)((0,l.AH)`
		gap: 218px;
		height: 100dvh;
	`),...(0,l.PK)((0,l.AH)`
		height: 100dvh;
	`)}),M=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		top: 0;
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: clip;
	`)}),R=(0,l.I4)("h1",{...(0,l.vi)((0,l.AH)`
			${s.Ay.custom.h1Hero};
			width: 1551px;
			color: ${u.A.beige100};
			text-align: center;
			white-space: nowrap;
			padding: 42px 8px;
			margin: 0 auto;
		`,{scaleFully:!0}),...(0,l.ZQ)((0,l.AH)`
		${s.Ay.custom.h1HeroT};
		width: 976px;
		white-space: unset;
		padding: 0;
	`),...(0,l.PK)((0,l.AH)`
		${s.Ay.custom.h1HeroM};
		width: 345px;
		color: ${u.A.beige100};
		white-space: unset;
		padding: 0;
	`)}),F=(0,l.I4)("div",{...(0,l.PK)((0,l.AH)`
		display: flex;
		flex-direction: column;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		width: 100%;
		padding-top: 79px;
	`)}),$=(0,l.I4)(c.Ay,{...(0,l.vi)((0,l.AH)`
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		z-index: -1;
	`)}),K=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: grid;
		width: 100%;
		height: 531px;
		grid-template-columns: repeat(4, 1fr);
	`),...(0,l.ZQ)((0,l.AH)`
		grid-template-columns: repeat(2, 1fr);
	`),...(0,l.PK)((0,l.AH)`
		height: 362px;
		grid-template-columns: unset;
		grid-template-rows: repeat(2, 1fr);
	`)}),S=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		position: relative;
	`)}),N=(0,l.I4)(c.Ay,{...(0,l.vi)((0,l.AH)`
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		z-index: -1;
		transform-origin: center;
		opacity: 0;
	`)}),_=(0,l.I4)(S,{...(0,l.vi)((0,l.AH)`
		overflow: clip;
	`),...(0,l.ZQ)((0,l.AH)`
		display: none;
	`),...(0,l.PK)((0,l.AH)`
		display: none;
	`)}),W=(0,l.I4)("div",{...(0,l.WC)((0,l.AH)`
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: #ded7ca21;
	`)}),Z=(0,l.I4)(W,{...(0,l.WC)((0,l.AH)`
		position: absolute;
		top: unset;
		bottom: 0;
	`)}),X=(0,l.I4)("div",{...(0,l.WC)((0,l.AH)`
		position: absolute;
		width: 1px;
		height: calc(100% - 1px);
		background: #ded7ca21;
		top: 1px;
	`)}),G=(0,l.I4)(X,{...(0,l.WC)((0,l.AH)`
		left: unset;
		right: 0;
	`)}),L=(0,l.I4)(W,{...(0,l.WC)((0,l.AH)`
		position: relative;
		top: unset;
		left: unset;
	`),...(0,l.ZQ)((0,l.AH)`
		display: none;
	`),...(0,l.PK)((0,l.AH)`
		display: none;
	`)}),T=(0,l.I4)("p",{...(0,l.vi)((0,l.AH)`
		${s.Ay.bodyS};
		color: ${u.A.beige100};
		text-align: right;
		width: 340px;
	`),...(0,l.ZQ)((0,l.AH)`
		${s.Ay.bodyL};
	`),...(0,l.PK)((0,l.AH)`
		${s.Ay.bodyXS};
		text-align: left;
	`)}),Y=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			gap: 24px;
			padding: 24px;
		`,{scaleFully:!0}),...(0,l.PK)((0,l.AH)`
		width: 100%;
		align-items: flex-start;
	`)}),O=(0,l.I4)(m.A,{...(0,l.vi)((0,l.AH)`
		width: 24px;
		height: 24px;
	`),...(0,l.PK)((0,l.AH)`
		display: none;
	`)}),z=(0,l.I4)(Y,{...(0,l.vi)((0,l.AH)`
		align-items: flex-start;
	`),...(0,l.PK)((0,l.AH)`
		gap: 16px;
		width: 100%;
	`)}),J=(0,l.I4)("p",{...(0,l.vi)((0,l.AH)`
		${s.Ay.h7};
		color: ${u.A.beige100};
		text-align: left;
		width: 262px;
	`),...(0,l.PK)((0,l.AH)`
		width: 271px;
		${s.Ay.bodyXL};
	`)}),V=(0,l.I4)(function(e){let t,i,A;let r=(0,f.c)(6),{children:a,className:l}=e;return r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,n.jsx)(y,{}),r[0]=t):t=r[0],r[1]!==a?(i=(0,n.jsx)(H,{children:a}),r[1]=a,r[2]=i):i=r[2],r[3]!==l||r[4]!==i?(A=(0,n.jsxs)(I,{className:l,children:[t,i]}),r[3]=l,r[4]=i,r[5]=A):A=r[5],A},{...(0,l.vi)((0,l.AH)`
		position: relative;
		z-index: 3;
		top: 12px;
		left: 24px;
	`),...(0,l.PK)((0,l.AH)`
		left: 0;
		top: 0;
	`)}),q=(0,l.I4)(e=>o.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},e),A||(A=o.createElement("path",{fill:"#DED7CA",fillOpacity:.4,d:"M0 0H16V16L0 0Z"}))),{...(0,l.vi)((0,l.AH)`
			position: absolute;
			top: 2px;
			right: 2px;
			width: 16px;
			height: 16px;
		`,{scaleFully:!0})})},1714:(e,t,i)=>{"use strict";i.d(t,{default:()=>D});var A,r,n,a=i(2104),l=i(7336),o=i(5996),s=i(7950),c=i(6072),d=i(2811),h=i(1438);let p={src:"/public/imgs/background.042700a4.jpg",height:2160,width:3200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACIBN//xAAaEAACAgMAAAAAAAAAAAAAAAACEQEDAAQh/9oACAEBAAE/ANFFZUa7BQs//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEx/9oACAECAQE/AHT/xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AIsP/9k=",blurWidth:8,blurHeight:5};var g=i(4612),u=i(4316),x=i(418),m=i(8824),b=i(3710);function w(){return(w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}let f={src:"/public/imgs/panelOne.fe79dd24.jpg",height:2160,width:1066,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oADAMBAAIQAxAAAACoDkP/xAAeEAAABAcAAAAAAAAAAAAAAAAAAgQFEhMUIyRCQ//aAAgBAQABPwBuclEKqpVkPlHlW+Wo/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAMUYf/aAAgBAgEBPwChmH//xAAXEQADAQAAAAAAAAAAAAAAAAAAAxRh/9oACAEDAQE/AJ16f//Z",blurWidth:4,blurHeight:8},v={src:"/public/imgs/panelTwo.ec8e3c0e.jpg",height:2160,width:1068,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAAAqgFL/8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIDBBEA/9oACAEBAAE/AKlelUWZMCM88kjBxpJc7u9//8QAFREBAQAAAAAAAAAAAAAAAAAAADH/2gAIAQIBAT8Ar//EABYRAQEBAAAAAAAAAAAAAAAAAAEhAP/aAAgBAwEBPwAkN//Z",blurWidth:4,blurHeight:8},y={src:"/public/imgs/panelThree.b5135805.jpg",height:2160,width:1066,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAAAnAU//8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDBBEAEmH/2gAIAQEAAT8AXFvbsbY2HV1ZlL0qdnR85//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPwCI/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAES/9oACAEDAQE/AKZ//9k=",blurWidth:4,blurHeight:8},H={src:"/public/imgs/right-arrow.acf8149f.png",height:414,width:1188,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEU7MSQtLS04MCU2NiQzMzM4MiU5MCWpiKJeAAAAB3RSTlNQBV4cCnmXJpFKXwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABlJREFUeJxjYAQBFiZmBghgZWMAizAyMQMAAeMAJZPm61YAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},I={src:"/public/imgs/right-arrow-tablet.51621ebd.png",height:414,width:516,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEU4MCZMaXE5MCVISCdOOhU5MSWxdXxdAAAABnRSTlN0AI0DBur15TQZAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJElEQVR4nGNgZmZhZGBiZGZgBAEmJkYGCGBlQjAgUgyMDDDFAAcuAEOKaM9AAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6};var j=i(452),C=i(5782),Q=i(7692),E=i(6128),P=i(6808);let B=["menstrual cramps","back pain","sciatic nerve","joint pain","headaches","shoulder pain","arthritic nerves","knee pain","hip pain"];function D(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),i=(0,g.useRef)(null),A=(0,g.useRef)(null),r=(0,g.useRef)(null),n=(0,g.useRef)(null),l=(0,g.useRef)(null),o=(0,g.useRef)(null),s=(0,g.useRef)(null),c=(0,g.useRef)(null),d=(0,Q.Q)(1.5,1.5,1,.95),h=(0,x.l5)(),{tablet:w,mobile:D}=(0,g.useContext)(C.cH),L=(0,Q.Q)(H,H,I,I),el=(0,E.W9)(200);return(0,b.s)(()=>{if(!e.current||!t.current)return;let a=(0,m.A)({trigger:e.current,pinType:h,pin:t.current,start:"top top",end:`+=${el}px`}),d=u.Ay.timeline({scrollTrigger:{start:()=>a.start,end:()=>a.end,scrub:1.5},defaults:{ease:"power3.inOut",duration:3}});d.to(i.current,{borderRadius:"0",duration:2,ease:"linear"},0),i.current?.style.removeProperty("transform"),d.to(i.current,{width:"100vw",height:"100vh",x:0,y:0,immediateRender:!0},0),d.to(r.current,{y:0,x:0,xPercent:0,yPercent:0},0),d.to(A.current,{opacity:1,duration:2,ease:"power2.out",yPercent:-125},2.5),d.to(s.current,{opacity:0,duration:1.25,ease:"linear"},2.75),d.to([n.current,l.current,o.current],{y:0,x:0,stagger:.5,ease:"power2.inOut"},4.5),d.to([A.current,i.current],{y:D?void 0:"-=200",x:D?"+=100":void 0,opacity:0,ease:"power1.in"},5.5),d.to(n.current,{xPercent:D?void 0:200},9),d.to(l.current,{xPercent:D?void 0:100,yPercent:D?-100:void 0},9),d.to(o.current,{xPercent:D?void 0:50,yPercent:D?-200:void 0},9),d.to(c.current,{opacity:1,y:0,duration:4,ease:"power2.out"},11)},[h,D,el],{recreateOnResize:!0}),(0,a.jsxs)(k,{ref:e,children:[(0,a.jsxs)(M,{ref:t,children:[(0,a.jsx)("div",{ref:s,children:(0,a.jsx)(R,{disableDrag:!0,scrollVelocity:(0,g.useCallback)(e=>.007*Math.abs(e),[]),marqueeSpeed:d,children:(0,a.jsxs)(F,{children:[(0,a.jsx)($,{children:"Pain Management"}),(0,a.jsx)(K,{})]})},(0,g.use)(C.cH).innerWidth)}),(0,a.jsx)(Z,{ref:i,children:(0,a.jsx)(X,{ref:r,src:p,alt:"Side profile of a woman with long red hair in a ponytail, wearing a white sports bra and leaning forward in a contemplative pose outdoors."})}),(0,a.jsxs)(S,{ref:A,children:[(0,a.jsx)(N,{children:"A drug free"}),(0,a.jsx)(_,{}),(0,a.jsx)(N,{children:"solution"}),(0,a.jsx)(N,{children:"created and"}),(0,a.jsx)(N,{children:"crafted for"}),(0,a.jsx)(N,{children:"anyone"}),(0,a.jsx)(W,{}),(0,a.jsx)(N,{children:"and"}),(0,a.jsx)(N,{children:"every use case."})]}),(0,a.jsxs)(G,{children:[(0,a.jsx)(T,{ref:n,src:f,alt:"A person with dark hair tied in a bun viewed from behind, gently touching their shoulder with manicured white nails.",objectPosition:w?"65% 50%":"center"}),(0,a.jsx)(Y,{ref:l,src:v,alt:"A close-up of a person's neck and shoulder with their hand resting lightly on the collarbone.",objectPosition:w?"10% 50%":"center"}),(0,a.jsx)(O,{ref:o,src:y,alt:"A person wearing a ribbed white tank top and shorts, with hands resting on their hips against a neutral background.",objectPosition:w?"30% 50%":"center"})]}),(0,a.jsxs)(z,{ref:c,children:[(0,a.jsxs)(J,{children:[(0,a.jsx)(V,{children:"Safari World isn’t picky"}),(0,a.jsx)(q,{children:"Simply place the patch a bit above where you're feeling pain or directly on the area in question and wait to feel relief."})]}),(0,a.jsxs)(ee,{children:[(0,a.jsx)(ea,{src:L,alt:"",objectFit:"contain"}),(0,a.jsxs)(et,{children:[(0,a.jsxs)(eA,{children:[(0,a.jsx)(en,{}),(0,a.jsx)(er,{children:"Use it where you need it"})]}),B.map((e,t)=>(0,a.jsx)(ei,{children:e},`useCase-${t+1}`))]})]}),(0,a.jsx)(j.A,{colorVariant:"blue",href:P.A.shop,children:"Shop Safari World Patches"})]})]}),(0,a.jsx)(U,{})]})}let k=(0,l.I4)("section",{...(0,l.vi)((0,l.AH)`
		background-color: ${c.A.beige200};
		width: 100vw;
		padding-bottom: 200vh;
		overflow: clip;
		display: grid;
		place-items: start;

		> * {
			grid-area: 1/1/2/2;
		}
	`)}),U=(0,l.I4)("div",{...(0,l.PK)((0,l.AH)`
		height: calc(calc(100lvh / 3) + 645px);
	`)}),M=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100lvh;
	`)}),R=(0,l.I4)(o.B,{...(0,l.WC)((0,l.AH)`
		border-top: 1px solid ${c.A.beige300};
		border-bottom: 1px solid ${c.A.beige300};
	`),...(0,l.PK)((0,l.AH)`
		margin-bottom: 150px;
	`)}),F=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 40px;
		padding: 32px 0;
	`)}),$=(0,l.I4)("h1",{...(0,l.vi)((0,l.AH)`
		${d.Ay.h1};
		text-transform: uppercase;
		color: ${c.A.coreBrown};
		padding-left: 40px;
	`),...(0,l.PK)((0,l.AH)`
		${d.Ay.h4};
	`)}),K=(0,l.I4)(s.A,{...(0,l.vi)((0,l.AH)`
		width: 149px;
		height: 149px;

		path {
			fill: ${c.A.coreBrown};
		}
	`),...(0,l.PK)((0,l.AH)`
		width: 110px;
		height: 110px;
	`)}),S=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		width: 924px;
		color: ${c.A.beige100};
		transform: translateY(125%);
		opacity: 0;
		position: absolute;
		text-align: center;
		display: flex;
		flex-wrap: wrap;
		align-items: end;
		justify-content: center;
		gap: 26px 0;
	`),...(0,l.PK)((0,l.AH)`
		width: 100%;
	`)}),N=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: inline-block;
		${d.Ay.h5};

		div + & {
			margin-left: 13px;
		}
	`),...(0,l.PK)((0,l.AH)`
		${d.Ay.h7};
	`)}),_=(0,l.I4)(s.A,{...(0,l.vi)((0,l.AH)`
		width: 72px;
		height: 72px;
		display: inline-block;
		margin: 0 14px;

		path {
			fill: ${c.A.yellow300};
		}
	`),...(0,l.PK)((0,l.AH)`
		width: 32px;
		height: 32px;
	`)}),W=(0,l.I4)(e=>g.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 129 58"},e),A||(A=g.createElement("circle",{cx:29.5,cy:28.726,r:27.214,stroke:"#F3B202",strokeDasharray:"6.05 6.05",strokeWidth:3.024})),r||(r=g.createElement("circle",{cx:64.5,cy:28.726,r:27.214,stroke:"#E0E7D2",strokeDasharray:"12.1 12.1",strokeWidth:3.024})),n||(n=g.createElement("circle",{cx:99.5,cy:28.726,r:26.836,stroke:"#E79101",strokeWidth:3.78}))),{...(0,l.vi)((0,l.AH)`
		display: inline-block;
		margin: 0 16px;
		width: 129px;
		height: 58px;
	`),...(0,l.PK)((0,l.AH)`
		width: 71px;
		height: 32px;
	`)}),Z=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		overflow: hidden;
		position: absolute;
		width: 100px;
		height: 100px;
		border-radius: 200px;
	`),...(0,l.ZQ)((0,l.AH)`
		translate: -162px;
	`),...(0,l.PK)((0,l.AH)`
		width: 50px;
		height: 50px;
		translate: -106px -75px;
	`)}),X=(0,l.I4)(h.Ay,{...(0,l.vi)((0,l.AH)`
		width: 100vw;
		height: 100vh;
		max-width: unset;
		max-height: unset;
		transform: translate(-50%, -20%);
	`)}),G=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		width: 100vw;
		position: absolute;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	`),...(0,l.PK)((0,l.AH)`
		grid-template-columns: 1fr;
	`)}),L=(0,l.I4)(h.Ay,{...(0,l.vi)((0,l.AH)`
		position: relative;
		width: 100%;
		height: 100vh;
		transform: translateY(100lvh);
	`),...(0,l.PK)((0,l.AH)`
		height: calc(100lvh / 3);
		transform: translateX(-100vw);
	`)}),T=(0,l.I4)(L,{...(0,l.vi)((0,l.AH)`
		z-index: 3;
	`)}),Y=(0,l.I4)(L,{...(0,l.vi)((0,l.AH)`
		z-index: 2;
	`)}),O=(0,l.I4)(L,{...(0,l.vi)((0,l.AH)`
		z-index: 1;
	`)}),z=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 128px 0 48px 48px;
		position: absolute;
		width: 100vw;
		min-height: 100vh;
		opacity: 0;
		transform: translateY(100px);
		align-self: start;
	`),...(0,l.ZQ)((0,l.AH)`
		padding: 128px 0 48px 24px;
	`),...(0,l.PK)((0,l.AH)`
		padding: calc(calc(100lvh / 3) + 23px) 24px 24px;
	`)}),J=(0,l.I4)("div",{...(0,l.WC)((0,l.AH)`
		border-bottom: 1px solid ${c.A.beige300};
	`),...(0,l.vi)((0,l.AH)`
		display: flex;
		flex-direction: column;
		gap: 30px;
		padding-bottom: 24px;
		width: 952px;
	`),...(0,l.ZQ)((0,l.AH)`
		gap: 60px;
		width: 602px;
	`),...(0,l.PK)((0,l.AH)`
		width: 100%;
	`)}),V=(0,l.I4)("h1",{...(0,l.vi)((0,l.AH)`
		${d.Ay.h3};
		color: ${c.A.coreBrown};
	`),...(0,l.ZQ)((0,l.AH)`
		width: 480px;
	`),...(0,l.PK)((0,l.AH)`
		width: 216px;
		${d.Ay.h6}
	`)}),q=(0,l.I4)("p",{...(0,l.vi)((0,l.AH)`
		${d.Ay.bodyS};
		color: ${c.A.coreBrown};
		width: 363px;
	`),...(0,l.ZQ)((0,l.AH)`
		${d.Ay.bodyL};
		width: 319px;
	`),...(0,l.PK)((0,l.AH)`
		width: 319px;
	`)}),ee=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		gap: 60px;
		margin-top: 12px;
	`),...(0,l.ZQ)((0,l.AH)`
		margin-top: 0;
		gap: 45px;
	`),...(0,l.PK)((0,l.AH)`
		margin-top: 40px;
		gap: 24px;
		margin-bottom: 40px;
	`)}),et=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		flex-direction: column;
		gap: 14px;
	`)}),ei=(0,l.I4)("p",{...(0,l.vi)((0,l.AH)`
		${d.Ay.k2};
		color: ${c.A.coreBrown};
	`)}),eA=(0,l.I4)("div",{...(0,l.vi)((0,l.AH)`
		display: flex;
		gap: 12px;
		align-items: center;
		margin-bottom: 14px;
	`),...(0,l.PK)((0,l.AH)`
		gap: 6px;
	`)}),er=(0,l.I4)("p",{...(0,l.vi)((0,l.AH)`
		${d.Ay.sh1};
		text-transform: none;
		color: ${c.A.coreBrown};
	`),...(0,l.PK)((0,l.AH)`
		${d.Ay.sh3};
	`)}),en=(0,l.I4)(s.A,{...(0,l.vi)((0,l.AH)`
		width: 35px;
		height: 35px;

		path {
			fill: ${c.A.coreBrown};
		}
	`),...(0,l.PK)((0,l.AH)`
		width: 18px;
		height: 18px;
	`)}),ea=(0,l.I4)(h.Ay,{...(0,l.vi)((0,l.AH)`
		width: 576px;
		height: 201px;
		margin-top: 50px;
	`),...(0,l.ZQ)((0,l.AH)`
		width: 250px;
		margin-top: 35px;
	`),...(0,l.PK)((0,l.AH)`
		width: 113px;
		height: auto;
		margin-bottom: 50px;
	`)})},7731:(e,t,i)=>{"use strict";i.d(t,{default:()=>f});var A=i(2104),r=i(6016),n=i(8011);let a={src:"/public/imgs/background-mobile.5fe12084.jpg",height:1704,width:786,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACeAN//xAAaEAACAgMAAAAAAAAAAAAAAAABAgMRACEx/9oACAEBAAE/AIXqNAWvXc//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8Apn//xAAWEQADAAAAAAAAAAAAAAAAAAAAAhL/2gAIAQMBAT8AlT//2Q==",blurWidth:4,blurHeight:8},l={src:"/public/imgs/background-tablet.4a08630d.jpg",height:2732,width:2048,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACcAr//xAAdEAAABQUAAAAAAAAAAAAAAAAAAQIEERIhIzFx/9oACAEBAAE/AG6sd9SdPB//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8A0l//xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQMBAT8AwN//2Q==",blurWidth:6,blurHeight:8},o={src:"/public/imgs/background.ccdc4950.jpg",height:2160,width:3200,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oADAMBAAIQAxAAAACWAP8A/8QAGxAAAgEFAAAAAAAAAAAAAAAAAQIiAAQREoH/2gAIAQEAAT8Atsbu4Enme1//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8ArP/EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AEL/2Q==",blurWidth:8,blurHeight:5};var s=i(418),c=i(8824),d=i(1438),h=i(7336),p=i(3710),g=i(6072),u=i(2811),x=i(4316),m=i(4894),b=i(7692),w=i(4612);function f(){let e,t,i,d,h,g,u,m;let f=(0,r.c)(11),E=(0,w.useRef)(null),P=(0,w.useRef)(null),B=(0,w.useRef)(null),D=(0,w.useRef)(null),k=(0,w.useRef)(null),U=(0,w.useRef)(null),M=(0,b.Q)(o,o,l,a),R=(0,s.l5)();return f[0]!==R?(e=()=>{if(!E.current||!P.current)return;let e=y,t=v,i=(0,c.A)({trigger:E.current,start:"top top",end:"bottom top",pin:P.current,pinType:R}),A=x.Ay.timeline({scrollTrigger:{start:()=>i.start,end:"bottom bottom",trigger:E.current,scrub:!0},defaults:{ease:"linear",duration:1}});A.to(U.current,{yPercent:-10,duration:3.5},0),A.add(e(B.current),1),A.add(t(B.current),1.5),A.add(e(D.current),2),A.add(t(D.current),2.5),A.add(e(k.current),3),A.add(t(k.current),3.5)},t=[R],f[0]=R,f[1]=e,f[2]=t):(e=f[1],t=f[2]),f[3]===Symbol.for("react.memo_cache_sentinel")?(i={scope:E},f[3]=i):i=f[3],(0,p.s)(e,t,i),f[4]!==M?(d=(0,A.jsx)(j,{ref:U,src:M,alt:"man with Safari World patch on shoulder"}),f[4]=M,f[5]=d):d=f[5],f[6]===Symbol.for("react.memo_cache_sentinel")?(h=(0,A.jsxs)(C,{ref:B,children:[(0,A.jsx)(n.A,{icon:"circle",color:"beige100",children:"100% All Natural Methodology"}),(0,A.jsx)(Q,{children:"Safari World is a simple patch that uses science instead of ingredients."})]}),f[6]=h):h=f[6],f[7]===Symbol.for("react.memo_cache_sentinel")?(g=(0,A.jsxs)(C,{ref:D,children:[(0,A.jsx)(n.A,{icon:"circle",color:"beige100",children:"reusable for many use cases"}),(0,A.jsx)(Q,{children:"We’ve created a reusable patch to relieve all sorts of pain in the body."})]}),f[7]=g):g=f[7],f[8]===Symbol.for("react.memo_cache_sentinel")?(u=(0,A.jsxs)(C,{ref:k,children:[(0,A.jsx)(n.A,{icon:"circle",color:"beige100",children:"100% guaranteed"}),(0,A.jsx)(Q,{children:"Our patch works, and we guarantee your confidence in it."})]}),f[8]=u):u=f[8],f[9]!==d?(m=(0,A.jsx)(H,{ref:E,children:(0,A.jsxs)(I,{ref:P,children:[d,h,g,u]})}),f[9]=d,f[10]=m):m=f[10],m}function v(e){return x.Ay.to(e,{yPercent:"-=150",opacity:0,ease:"M0,0 C0.535,0.098 0.924,0.862 1,1",duration:.55})}function y(e){return x.Ay.fromTo(e,{opacity:0,yPercent:100},{opacity:1,yPercent:0,ease:"M0,0 C0.104,0.204 0.488,0.876 1,1"})}x.Ay.registerPlugin(m.M);let H=(0,h.I4)("section",{...(0,h.vi)((0,h.AH)`
		width: 100vw;
		height: 400vh;
	`)}),I=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		position: relative;
		width: 100%;
		height: 100vh;
	`)}),j=(0,h.I4)(d.Ay,{...(0,h.vi)((0,h.AH)`
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 115%;
		height: 115%;
	`)}),C=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		position: absolute;
		z-index: 2;
		opacity: 0;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 680px;
		display: flex;
		flex-direction: column;
		gap: 31px;
	`),...(0,h.PK)((0,h.AH)`
		width: 345px;
	`)}),Q=(0,h.I4)("p",{...(0,h.vi)((0,h.AH)`
		${u.Ay.h5}
		color: ${g.A.beige100};
	`),...(0,h.PK)((0,h.AH)`
		${u.Ay.h6}
	`)})},6897:(e,t,i)=>{"use strict";i.d(t,{default:()=>G});var A,r,n,a,l,o,s,c,d=i(2104),h=i(6016),p=i(7336),g=i(6072),u=i(2811),x=i(8011),m=i(8824),b=i(3710),w=i(4612),f=i(418),v=i(205),y=i(4316),H=i(7011),I=i(6128),j=i(452),C=i(5782),Q=i(1438);let E={src:"/public/imgs/illustration-1.43f3fe6b.png",height:454,width:454,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEXy6Njx5tbq4NJMaXHw59fq3sz27N3m1cXp38/q4NH37N3/9+bFuqjGu6r03dFkAAAACXRSTlP5sC4A6/TsLjDbYx18AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOUlEQVR4nD3JuQ3AMAwDQJJ6bEnO/usGSeHugIOJEVyGnQN0LHBQhSHQ9Zxq/3B+3FJO96RgojtlLzP1AXIllzttAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},P={src:"/public/imgs/illustration-2.55fda3ef.png",height:555,width:454,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAMFBMVEVMaXHp387z6drp39Dt4NHv5NTayLbWzLz37t7069zo3Mvg0Mj57t798+PYzr63rJtNkHZNAAAADHRSTlMAYdD7XesO/tX71iEU47+7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAANklEQVR4nBXHQRLAIAwDsQ0kUKhN///bDroJYtcOCEtS8qif7sZa55uq+3mftuyEaNUCYLwDfjNSAXYF5mgWAAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8};var B=i(1982);function D(){return(D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}var k=i(5257),U=i(6131),M=i(3616),R=i(3293),F=i(6372),$=i(2586);function K(){return(K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}function S(){return(S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}function N(){return(N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}function W(){return(W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}function Z(){return(Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var A in i)({}).hasOwnProperty.call(i,A)&&(e[A]=i[A])}return e}).apply(null,arguments)}var X=i(6808);function G(){let e,t,i,A,r,n,a,l,o;let s=(0,h.c)(11),c=(0,w.useRef)(null),p=(0,w.useRef)(null),g=(0,w.useRef)(null),u=(0,w.useRef)(null),v=(0,w.useRef)(null),H=(0,f.l5)(),{mobile:Q}=(0,w.useContext)(C.cH);return s[0]!==Q||s[1]!==H?(e=()=>{if(!c.current||!p.current||Q)return;let e=(0,m.A)({trigger:c.current,pin:p.current,start:"top top",end:"bottom bottom",pinType:H,anticipatePin:1}),t=T,i=L,A=y.Ay.timeline({duration:1,defaults:{ease:"power2.inOut"}});A.to(".hiw-line-1",{y:(0,I.qM)(-20)},0),A.to(".hiw-line-2",{y:(0,I.qM)(-40)},0),A.to(".hiw-line-3",{y:(0,I.qM)(-60)},0),A.to(".hiw-line-4",{y:(0,I.qM)(20)},0),A.to(".hiw-line-5",{y:(0,I.qM)(40)},0),A.to(".hiw-line-6",{y:(0,I.qM)(60)},0),A.to([".hiw-line-1",".hiw-line-2",".hiw-line-3",".hiw-line-4",".hiw-line-5",".hiw-line-6"],{y:0},2.5),A.to([".hiw-line-1",".hiw-line-2",".hiw-line-3",".hiw-line-4",".hiw-line-5",".hiw-line-6"],{autoAlpha:0},2.6);let r={ease:"power3.inOut",duration:1.5},n=y.Ay.timeline({duration:1});n.to(".circ-wrap",{rotateY:-45,rotateX:25,scale:1.2,...r},0),n.to(".hiw-circ-4",{...r,opacity:0},0),n.to([".hiw-circ-1"],{...r,opacity:1,translateZ:80},0),n.to(".hiw-circ-3",{...r,translateZ:-80},0),n.to(".leaves",{...r,translateZ:120},0),n.to(".leaves-small",{...r,translateZ:240,scale:1.2},0);let a=y.Ay.timeline({scrollTrigger:{trigger:c.current,start:()=>e.start,end:()=>e.end+(0,I.bJ)(50),scrub:1}});a.add(t(g.current),0),a.add(i("first"),0),a.add(t(u.current,2),1.5),a.add(i("middle"),1.5),a.add(A,1.2),a.add(t(v.current,!1),4),a.add(i("last"),4),a.add(n,3),a.to(".circ-wrap",{rotateY:-360,rotateX:0,duration:1.5,scale:1,ease:"power4.inOut"},"-=0.5"),a.to(".circ-wrap *",{scale:1,translateZ:"*=0.001",duration:1.5,ease:"power4.inOut"},"<")},t=[H,Q],s[0]=Q,s[1]=H,s[2]=e,s[3]=t):(e=s[2],t=s[3]),s[4]===Symbol.for("react.memo_cache_sentinel")?(i={scope:c},s[4]=i):i=s[4],(0,b.s)(e,t,i),s[5]===Symbol.for("react.memo_cache_sentinel")?(A=(0,d.jsx)(Y,{}),s[5]=A):A=s[5],s[6]===Symbol.for("react.memo_cache_sentinel")?(r=(0,d.jsxs)(q,{children:[(0,d.jsx)(x.A,{color:"beige500",children:"How It Works"}),(0,d.jsx)(ee,{children:"100% All Natural"})]}),s[6]=r):r=s[6],s[7]===Symbol.for("react.memo_cache_sentinel")?(n=(0,d.jsxs)(et,{ref:g,children:[(0,d.jsx)(eg,{name:"patchCircle"}),(0,d.jsx)(ep,{children:"All Natural Pain Interception"}),(0,d.jsx)(eu,{}),(0,d.jsx)(er,{children:"When the Safari World Patch is placed between your pain and the brain, patented technology within the patch works to pick up and reroute the pain signal, absorbing the message like a sponge."}),(0,d.jsx)(eI,{src:E,alt:"Safari World patch"})]}),s[7]=n):n=s[7],s[8]===Symbol.for("react.memo_cache_sentinel")?(a=(0,d.jsxs)(ei,{ref:u,children:[(0,d.jsx)(eg,{name:"atomCircle"}),(0,d.jsx)(ep,{children:"Reusable, drug-free, and chemical-free"}),(0,d.jsx)(eu,{}),(0,d.jsx)(er,{children:"The Safari World Patch is a drug-free and chemical-free way to reduce the impact of pain in minutes without batteries, wires, or medications of any kind. By interrupting the pain signal, the patch allows your body to more readily return to a balanced, pain-free state."}),(0,d.jsx)(ej,{src:P,alt:"Safari World patch"})]}),s[8]=a):a=s[8],s[9]===Symbol.for("react.memo_cache_sentinel")?(l=(0,d.jsxs)(eA,{ref:v,children:[(0,d.jsx)(eg,{name:"patentCircle"}),(0,d.jsx)(ep,{children:"Patented technology to quiet pain"}),(0,d.jsx)(eu,{}),(0,d.jsx)(er,{children:"Our patented patch acts as an antenna to divert pain signals, effectively “turning down” the volume on pain signals sent to your brain. Once the energy from your pain signal is rerouted through the patch, it is converted to heat which may cause a warming sensation when the patch is in the right place."}),(0,d.jsx)(eC,{src:B.A,alt:"Safari World patch deconstructed"}),(0,d.jsx)(j.A,{colorVariant:"brown",href:X.A.shop,children:"Shop Safari World Patches"})]}),s[9]=l):l=s[9],s[10]===Symbol.for("react.memo_cache_sentinel")?(o=(0,d.jsxs)(O,{className:"home-how-it-works",ref:c,children:[A,(0,d.jsx)(z,{ref:p,children:(0,d.jsx)(J,{children:(0,d.jsxs)(V,{children:[r,n,a,l,(0,d.jsxs)(en,{className:"circ-wrap",children:[(0,d.jsx)(eb,{}),(0,d.jsx)(ew,{}),(0,d.jsx)(ef,{}),(0,d.jsx)(ev,{}),(0,d.jsx)(ey,{}),(0,d.jsx)(eH,{}),(0,d.jsx)(eh,{className:"leaves-small"}),(0,d.jsx)(ed,{className:"leaves"}),(0,d.jsx)(el,{className:"hiw-circ-1"}),(0,d.jsx)(eo,{className:"hiw-circ-2"}),(0,d.jsx)(es,{className:"hiw-circ-3"}),(0,d.jsx)(ec,{className:"hiw-circ-4"})]})]})})})]}),s[10]=o):o=s[10],o}function L(e){return y.Ay.timeline().to(".hiw-line",{opacity:1,drawSVG:"100% 0%",duration:.01}).to(".hiw-line",{drawSVG:"last"===e?"100% 96%":"100% 100%",duration:"middle"===e?2:1}).to(".hiw-line",{opacity:"last"===e?1:0,duration:.49})}function T(e,t){let i=void 0===t?1:t,A=y.Ay.timeline();return A.set(e,{display:"flex"},0),A.to(e,{opacity:1,duration:.5,ease:"power1.out"},0),i&&(A.to(e,{opacity:0,duration:.5,ease:"power1.in"},i),A.set(e,{display:"none"},i+.5)),A}y.Ay.registerPlugin(H.A);let Y=(0,p.i7)`
  0% {
    stroke: ${g.A.beige200};
  }

  33% {
	stroke: ${g.A.beige500};
  }

  67% {
    stroke: ${g.A.beige200};
  }
`,O=(0,p.I4)("section",{...(0,p.vi)((0,p.AH)`
		position: relative;
		z-index: 1;
		background-color: ${g.A.beige100};
		width: 100vw;
		height: 400vh;
	`),...(0,p.PK)((0,p.AH)`
		height: 2045px;
	`)}),z=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		width: 100%;
		height: 100vh;
		display: grid;
		place-items: center;
	`),...(0,p.PK)((0,p.AH)`
		height: 100%;
	`)}),J=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		padding: 0 48px;
		max-width: 1600px;
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
	`),...(0,p.ZQ)((0,p.AH)`
		padding: 130px 24px;
		place-items: center;
	`),...(0,p.PK)((0,p.AH)`
		padding: 88px 24px 24px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	`)}),V=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		position: relative;
		gap: 175px;
		height: 700px;
	`),...(0,p.ZQ)((0,p.AH)`
		height: 780px;
		gap: 300px;
	`),...(0,p.PK)((0,p.AH)`
		gap: 0;
		height: 100%;
		align-items: center;
	`)}),q=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		display: flex;
		flex-direction: column;
	`),...(0,p.PK)((0,p.AH)`
		margin-bottom: 80px;
	`)}),ee=(0,p.I4)("h2",{...(0,p.vi)((0,p.AH)`
		${u.Ay.h2}
		color: ${g.A.coreBrown};
		margin-top: 23px;
	`),...(0,p.PK)((0,p.AH)`
		${u.Ay.h6}
	`)}),et=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	`),...(0,p.PK)((0,p.AH)`
		align-items: center;
		margin-bottom: 100px;
	`)}),ei=(0,p.I4)(et,{...(0,p.vi)((0,p.AH)`
		display: none;
		opacity: 0;
	`),...(0,p.PK)((0,p.AH)`
		display: flex;
		opacity: 1;
	`)}),eA=(0,p.I4)(et,{...(0,p.vi)((0,p.AH)`
		display: none;
		opacity: 0;
	`),...(0,p.PK)((0,p.AH)`
		display: flex;
		opacity: 1;
	`)}),er=(0,p.I4)("p",{...(0,p.vi)((0,p.AH)`
		${u.Ay.bodyS}
		color: ${g.A.coreBrown};
		width: 361px;
		margin-bottom: 34px;
	`),...(0,p.PK)((0,p.AH)`
		${u.Ay.bodyXS}
		text-align: center;
		width: 100%;
		margin-bottom: 0;
		margin-top: 32px;
	`)}),en=(0,p.I4)("div",{...(0,p.vi)((0,p.AH)`
		position: absolute;
		right: 118px;
		bottom: -40px;
		width: 454px;
		height: 454px;
		transform-style: preserve-3d;
	`),...(0,p.ZQ)((0,p.AH)`
		right: 36px;
		bottom: -30px;
	`),...(0,p.PK)((0,p.AH)`
		display: none;
	`)}),ea=(0,p.AH)`
	top: 0%;
	right: 0;
	position: absolute;
	width: 100%;
	height: 100%;
`,el=(0,p.I4)(k.A,(0,p.vi)((0,p.AH)`
		${ea}
		opacity: 0.5;
		backdrop-filter: blur(12px);
		border-radius: 50%;
		transform: translateZ(1px);
	`)),eo=(0,p.I4)(U.A,(0,p.vi)((0,p.AH)`
		${ea}
		z-index: 2;
	`)),es=(0,p.I4)(M.A,(0,p.vi)((0,p.AH)`
		${ea}
		z-index: 1;
	`)),ec=(0,p.I4)(R.A,{...(0,p.vi)((0,p.AH)`
		${ea}
		z-index: 2;
	`)}),ed=(0,p.I4)(F.A,(0,p.vi)((0,p.AH)`
		position: absolute;
		width: 298px;
		height: 298px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) translateZ(2px);
		z-index: 4;
	`)),eh=(0,p.I4)($.A,(0,p.vi)((0,p.AH)`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) translateZ(2px);
		z-index: 5;
		width: 149px;
		height: 149px;
	`)),ep=(0,p.I4)("span",{...(0,p.vi)((0,p.AH)`
		${u.Ay.k2}
		color: ${g.A.beige600};
		margin-top: 23px;
		margin-bottom: 52px;
	`),...(0,p.PK)((0,p.AH)`
		margin-bottom: 0;
	`)}),eg=(0,p.I4)(v.A,{...(0,p.vi)((0,p.AH)`
		width: 50px;
	`),...(0,p.PK)((0,p.AH)`
		width: 25px;
	`)}),eu=(0,p.I4)(e=>w.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 930 74"},e),A||(A=w.createElement("path",{stroke:"#B7AA94",strokeDasharray:"2 5",d:"M0 1H622.33L929 73"})),r||(r=w.createElement("path",{stroke:"#F9F0E1",strokeWidth:2,d:"M0 1H622.33L929 73",className:"hiw-line"}))),{...(0,p.vi)((0,p.AH)`
		width: 929px;
		position: absolute;
		left: 0;
		top: 400px;
	`),...(0,p.ZQ)((0,p.AH)`
		display: none;
	`),...(0,p.PK)((0,p.AH)`
		display: none;
	`)}),ex=(0,p.AH)`
	position: absolute;
	top: 5px;
	left: 50%;
	transform: translateX(-50%);
`,em=(0,p.AH)`
	position: absolute;
	bottom: 5px;
	right: 50%;
	transform: translateX(50%);
`,eb=(0,p.I4)(e=>w.createElement("svg",K({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 332 66"},e),n||(n=w.createElement("path",{stroke:"#B7AA94",d:"M0.999989 65.6056C44.3331 25.5067 102.305 1.00002 166 1.00003C229.695 1.00004 287.667 25.5068 331 65.6057",className:"hiw-line-1"}))),{...(0,p.vi)((0,p.AH)`
		${ex}
		width: 330px;

		path {
			stroke: ${g.A.beige200};
			animation-name: ${Y};
			animation-duration: 3s;
			animation-iteration-count: infinite;
			animation-delay: 0s;
		}
	`)}),ew=(0,p.I4)(e=>w.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 276 42"},e),a||(a=w.createElement("path",{stroke:"#C9BFAD",d:"M0.999993 40.8898C40.5709 15.6351 87.5763 0.999771 138 0.99978C188.424 0.999789 235.429 15.6352 275 40.8898",className:"hiw-line-2"}))),{...(0,p.vi)((0,p.AH)`
		${ex}
		width: 274px;

		path {
			stroke: ${g.A.beige200};
			animation: ${Y} 3s ease infinite;
			animation-delay: 0.2s;
		}
	`)}),ef=(0,p.I4)(e=>w.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 196 20"},e),l||(l=w.createElement("path",{stroke:"#E7DDCC",d:"M0.999997 19.1659C31.0667 7.43676 63.7816 0.999767 98 0.999773C132.218 0.999779 164.933 7.43679 195 19.166",className:"hiw-line-3"}))),{...(0,p.vi)((0,p.AH)`
		${ex}
		width: 194px;

		path {
			stroke: ${g.A.beige200};
			animation: ${Y} 3s ease infinite;
			animation-delay: 0.4s;
		}
	`)}),ev=(0,p.I4)(e=>w.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 332 67"},e),o||(o=w.createElement("path",{stroke:"#B7AA94",d:"M331 0.999863C287.667 41.0988 229.695 65.6055 166 65.6055C102.305 65.6054 44.3331 41.0987 1.00001 0.999834",className:"hiw-line-4"}))),{...(0,p.vi)((0,p.AH)`
		${em}
		width: 330px;

		path {
			stroke: ${g.A.beige200};
			animation: ${Y} 3s ease infinite;
			animation-delay: 0s;
		}
	`)}),ey=(0,p.I4)(e=>w.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 276 42"},e),s||(s=w.createElement("path",{stroke:"#C9BFAD",d:"M275 0.715694C235.429 25.9703 188.424 40.6057 138 40.6057C87.5763 40.6057 40.5709 25.9703 1 0.71567",className:"hiw-line-5"}))),{...(0,p.vi)((0,p.AH)`
		${em}
		width: 274px;

		path {
			stroke: ${g.A.beige200};
			animation: ${Y} 3s infinite;
			animation-delay: 0.2s;
		}
	`)}),eH=(0,p.I4)(e=>w.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",fill:"none",overflow:"visible",viewBox:"0 0 196 21"},e),c||(c=w.createElement("path",{stroke:"#E7DDCC",d:"M195 1.43955C164.933 13.1687 132.218 19.6057 98 19.6057C63.7816 19.6057 31.0667 13.1687 1 1.43953",className:"hiw-line-6"}))),{...(0,p.vi)((0,p.AH)`
		${em}
		width: 194px;

		path {
			stroke: ${g.A.beige200};
			animation: ${Y} 3s infinite;
			animation-delay: 0.4s;
		}
	`)}),eI=(0,p.I4)(Q.Ay,{...(0,p.vi)((0,p.AH)`
		display: none !important;
	`),...(0,p.PK)((0,p.AH)`
		display: inline-block !important;
		width: 227px;
		height: 227px;
		margin-top: 60px;
	`)}),ej=(0,p.I4)(Q.Ay,{...(0,p.vi)((0,p.AH)`
		display: none !important;
	`),...(0,p.PK)((0,p.AH)`
		margin-top: 60px;
		display: inline-block !important;
		width: 227px;
	`)}),eC=(0,p.I4)(Q.Ay,{...(0,p.vi)((0,p.AH)`
		display: none !important;
	`),...(0,p.PK)((0,p.AH)`
		margin-top: 60px;
		display: inline-block !important;
		width: 267px;
	`)})},1849:(e,t,i)=>{"use strict";i.d(t,{default:()=>$});var A=i(2104),r=i(6016),n=i(7070),a=i(1438),l=i(6808);let o={src:"/public/imgs/box.8114e938.svg",height:24,width:24,blurWidth:0,blurHeight:0},s={src:"/public/imgs/check.a6396a61.svg",height:24,width:24,blurWidth:0,blurHeight:0},c={src:"/public/imgs/clear.567745b1.svg",height:24,width:24,blurWidth:0,blurHeight:0},d={src:"/public/imgs/refresh.78241bb7.svg",height:24,width:24,blurWidth:0,blurHeight:0};var h=i(7336),p=i(2811),g=i(6072),u=i(452),x=i(7199);function m(e){let t,i;let n=(0,r.c)(3);return n[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,A.jsx)(w,{}),n[0]=t):t=n[0],n[1]!==e?(i=(0,A.jsx)(b,{...e,children:t}),n[1]=e,n[2]=i):i=n[2],i}let b=(0,h.I4)(x.bL,{...(0,h.WC)((0,h.AH)`
		background-color: ${g.A.charcoal200};
		position: relative;
		transition: background-color 0.2s;

		:hover {
			cursor: pointer;
			background-color: ${g.A.charcoal300};
		}

		&[data-state="checked"] {
			background-color: ${g.A.blue300};

			:hover {
				background-color: ${g.A.blue400};
			}
		}
	`),...(0,h.vi)((0,h.AH)`
		width: 30px;
		border-radius: 9999px;
		height: 17.5px;
	`)}),w=(0,h.I4)(x.zi,{...(0,h.WC)((0,h.AH)`
		display: block;
		background-color: ${g.A.pureWhite};
		transition: transform 200ms;
	`),...(0,h.vi)((0,h.AH)`
		width: 14px;
		height: 14px;
		border-radius: 9999px;
		will-change: transform;
		transform: translateX(2px);

		&[data-state="checked"] {
			transform: translateX(14.5px);
		}
	`)});var f=i(4612),v=i(5782);function y(e){let t,i,n,a,l,o,s,c,d,h,p,x;let b=(0,r.c)(32),{product:w}=e,y=w?.variants?.[0]?.id,{mobile:U}=(0,f.use)(v.cH),[M,R]=(0,f.useState)("regular"),F=U?309:400,$=U?305:441;b[0]!==w.image_url||b[1]!==F||b[2]!==$?(t=(0,A.jsx)(I,{src:w.image_url,alt:"Classic Patch",width:F,height:$}),b[0]=w.image_url,b[1]=F,b[2]=$,b[3]=t):t=b[3],b[4]!==w.title?(i=(0,A.jsx)(C,{children:(0,A.jsx)(Q,{children:w.title})}),b[4]=w.title,b[5]=i):i=b[5];let K="regular"===M?"unset":"line-through",S="regular"===M?g.A.coreBrown:g.A.charcoal300;b[6]!==K||b[7]!==S?(n={textDecoration:K,color:S},b[6]=K,b[7]=S,b[8]=n):n=b[8];let N=`Originally ${w.display_price}`;b[9]!==w.display_price?(a=w.display_price.split("."),b[9]=w.display_price,b[10]=a):a=b[10];let _=a[0];return b[11]!==_||b[12]!==n||b[13]!==N?(l=(0,A.jsx)(P,{style:n,"aria-label":N,children:_}),b[11]=_,b[12]=n,b[13]=N,b[14]=l):l=b[14],b[15]!==w.subscription_price||b[16]!==M?(o="subscription"===M&&(0,A.jsxs)(B,{"aria-label":`Now ${w.subscription_price}`,children:["$",w.subscription_price?.split(".")[0]]}),b[15]=w.subscription_price,b[16]=M,b[17]=o):o=b[17],b[18]!==l||b[19]!==o?(s=(0,A.jsxs)(E,{children:[l,o]}),b[18]=l,b[19]=o,b[20]=s):s=b[20],b[21]!==y?(c=(0,A.jsx)(u.A,{type:"button","data-fluid-checkout-type":"variant","data-fluid-checkout-group-id":y,"data-variant":y,colorVariant:"blue",isSecondary:!0,children:"Add to Cart"}),b[21]=y,b[22]=c):c=b[22],b[23]===Symbol.for("react.memo_cache_sentinel")?(d=(0,A.jsx)(k,{children:"Monthly subscription"}),b[23]=d):d=b[23],b[24]===Symbol.for("react.memo_cache_sentinel")?(h=(0,A.jsxs)(D,{children:[d,(0,A.jsx)(m,{onCheckedChange:e=>{e?R("subscription"):R("regular")}})]}),b[24]=h):h=b[24],b[25]!==s||b[26]!==c||b[27]!==i?(p=(0,A.jsxs)(j,{children:[i,s,c,h]}),b[25]=s,b[26]=c,b[27]=i,b[28]=p):p=b[28],b[29]!==p||b[30]!==t?(x=(0,A.jsxs)(H,{children:[t,p]}),b[29]=p,b[30]=t,b[31]=x):x=b[31],x}let H=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: flex;
		width: 436px;
		padding: 18px;
		flex-direction: column;
		gap: 18px;
		border-radius: 20px;
		background: ${g.A.pureWhite};
		color: ${g.A.coreBrown};
	`),...(0,h.ZQ)((0,h.AH)`
		width: 476px;
	`),...(0,h.PK)((0,h.AH)`
		width: 345px;
		margin-left: 24px;
	`)}),I=(0,h.I4)(a.Ay,{...(0,h.vi)((0,h.AH)`
		border-radius: 12px;
	`)}),j=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 24px;

		> &:nth-child(1) {
			place-self: start start;
		}

		> &:nth-child(2) {
			place-self: start end;
		}

		> *:nth-child(3) {
			place-self: end start;
		}

		> *:nth-child(4) {
			place-self: end;
		}
	`)}),C=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: flex;
		flex-direction: column;
		gap: 12px;
	`)}),Q=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		${p.Ay.k1};
	`)});(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		${p.Ay.k2};
	`)});let E=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: flex;
		flex-direction: column;
		gap: 16px;
		text-align: end;
		height: 44px;
	`)}),P=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		${p.Ay.sh2};
	`)}),B=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		${p.Ay.sh2};
	`)}),D=(0,h.I4)("label",{...(0,h.vi)((0,h.AH)`
		display: flex;
		align-items: center;
		gap: 9px;
		height: fit-content;
		user-select: none;
	`)}),k=(0,h.I4)("span",{...(0,h.vi)((0,h.AH)`
		${p.Ay.k3};
	`)});var U=i(4691),M=i(5996);let R={src:"/public/imgs/arrow.8f17bbf1.svg",height:20,width:19,blurWidth:0,blurHeight:0};var F=i(2071);function $(e){let t,i,n,a,h,p,g,u,x;let m=(0,r.c)(15),{products:b}=e,{mobile:w}=(0,f.use)(v.cH),[y,H]=(0,f.useState)(0),I=(0,f.useRef)(null);m[0]!==b?(t=b.map(K),m[0]=b,m[1]=t):t=m[1];let j=t;return m[2]===Symbol.for("react.memo_cache_sentinel")?(i=(0,A.jsx)(N,{children:"Our Popular Itineraries"}),m[2]=i):i=m[2],m[3]===Symbol.for("react.memo_cache_sentinel")?(n=(0,A.jsxs)(_,{children:["We stand by our product with a"," ",(0,A.jsx)(F.A,{href:l.A.moneyBackGuarantee,children:"60-day money back guarantee"}),". If you're not happy, we're not happy."]}),m[3]=n):n=m[3],m[4]===Symbol.for("react.memo_cache_sentinel")?(a=(0,A.jsxs)(Z,{children:[(0,A.jsx)(G,{src:s,alt:"Checkmark"}),(0,A.jsx)(X,{children:"Control your delivery date"})]}),m[4]=a):a=m[4],m[5]===Symbol.for("react.memo_cache_sentinel")?(h=(0,A.jsxs)(Z,{children:[(0,A.jsx)(G,{src:o,alt:"Shipping Box"}),(0,A.jsx)(X,{children:"Free U.S. shipping"})]}),m[5]=h):h=m[5],m[6]===Symbol.for("react.memo_cache_sentinel")?(p=(0,A.jsxs)(Z,{children:[(0,A.jsx)(G,{src:c,alt:"Cancel"}),(0,A.jsx)(X,{children:"No Commitment, Pause or Cancel Anytime"})]}),m[6]=p):p=m[6],m[7]===Symbol.for("react.memo_cache_sentinel")?(g=(0,A.jsxs)(W,{children:[a,h,p,(0,A.jsxs)(Z,{children:[(0,A.jsx)(G,{src:d,alt:"Refresh"}),(0,A.jsx)(X,{children:"60-day money back guarantee"})]})]}),m[7]=g):g=m[7],m[8]!==y||m[9]!==w||m[10]!==j||m[11]!==b?(u=w?(0,A.jsxs)("div",{children:[(0,A.jsx)(M.B,{onChange:e=>H(e),loopRef:I,children:j}),(0,A.jsxs)(T,{children:[(0,A.jsx)(Y,{type:"button",onClick:()=>I.current?.toIndex(y-1,{ease:"power2.out",duration:1}),children:(0,A.jsx)(z,{src:R,alt:"next",flipped:!1})}),b.map((e,t)=>(0,A.jsx)(J,{type:"button",onClick:()=>{I.current?.toIndex(t,{ease:"power2.out",duration:1})},active:y%b.length===t,"aria-label":`scroll to product ${t}`,children:null},e.id)),(0,A.jsx)(O,{type:"button",onClick:()=>I.current?.toIndex(y+1,{ease:"power2.out",duration:1}),children:(0,A.jsx)(z,{src:R,alt:"next",flipped:!0})})]})]}):j,m[8]=y,m[9]=w,m[10]=j,m[11]=b,m[12]=u):u=m[12],m[13]!==u?(x=(0,A.jsxs)(S,{children:[i,n,g,(0,A.jsx)(L,{children:u})]}),m[13]=u,m[14]=x):x=m[14],x}function K(e){return(0,A.jsx)(y,{product:e},e.id)}let S=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		padding: 203px calc(50vw - ${U.ol/2}px + 48px) 130px;
		color: ${g.A.coreBrown};
		background-color: ${g.A.beige100};
		width: 100vw;
		overflow: clip;
	`),...(0,h.ZQ)((0,h.AH)`
		padding: 128px 24px;
	`),...(0,h.PK)((0,h.AH)`
		padding: 120px 24px;
	`)}),N=(0,h.I4)("h1",{...(0,h.vi)((0,h.AH)`
		${p.Ay.h3};
	`),...(0,h.PK)((0,h.AH)`
		${p.Ay.h6}
	`)}),_=(0,h.I4)("p",{...(0,h.vi)((0,h.AH)`
		${p.Ay.bodyS};
		margin-top: 50px;
		max-width: 379px;

		a {
			text-decoration: underline;
		}
	`)}),W=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: grid;
		gap: 11px;
		margin-top: 30px;
	`)}),Z=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 12px;
		align-items: center;
	`)}),X=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		${p.Ay.bodyS}
	`)}),G=(0,h.I4)(a.Ay,{...(0,h.vi)((0,h.AH)`
		width: 24px;
		height: 24px;
	`)}),L=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: flex;
		margin-top: 53px;
		flex-wrap: wrap;
		gap: 50px 0;
		justify-content: space-between;
	`),...(0,h.ZQ)((0,h.AH)`
		flex-wrap: wrap;
		justify-content: center;
		gap: 24px;
	`),...(0,h.PK)((0,h.AH)`
		margin: 0 -24px;
	`)}),T=(0,h.I4)("div",{...(0,h.vi)((0,h.AH)`
		display: flex;
		gap: 24px;
		margin-top: 53px;
		padding: 0 24px;
	`)}),Y=(0,h.I4)(n.A,{...(0,h.vi)((0,h.AH)`
		margin-right: auto;
	`)}),O=(0,h.I4)(n.A,{...(0,h.vi)((0,h.AH)`
		margin-left: auto;
	`)}),z=(0,h.I4)(a.Ay,({flipped:e})=>({...(0,h.vi)((0,h.AH)`
		width: 18px;
		height: 18px;
		scale: ${e?-1:1};
	`)})),J=(0,h.I4)(n.A,({active:e})=>({...(0,h.vi)((0,h.AH)`
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background-color: ${e?g.A.beige300:g.A.beige100};
			border: 1.5px solid ${e?g.A.beige600:g.A.beige300};
			transition: 0.2s ease-out;
			transition-property: background-color, border-color;
		`)}))},8593:(e,t,i)=>{"use strict";i.d(t,{Testimonials:()=>y});var A=i(2104),r=i(6016),n=i(7336),a=i(6072),l=i(2811),o=i(1762),s=i(1438);let c={src:"/public/imgs/flower.df7d7774.svg",height:43,width:42,blurWidth:0,blurHeight:0};var d=i(4691),h=i(5782),p=i(4612),g=i(5996);let u={src:"/public/imgs/arrow.f5e30095.svg",height:27,width:26,blurWidth:0,blurHeight:0};var x=i(9468),m=i(6794),b=i(2493),w=i(3367);let f=[{id:1,review:"Amazing Product that WORKS!!! I was pain free on my lower back within minutes. I bought 3 more and sent them to family in pain. That’s how good it performs.",name:"Carol G.",place:"Salt Lake City, Utah",photo:x.A,logo:{src:"/public/imgs/Today.61ddd371.svg",height:48,width:54,blurWidth:0,blurHeight:0}},{id:2,review:"I didn’t believe that this would work but ordered it to try for my son-in-law who has a painful back for years. It worked amazingly!",name:"Sharon A.",place:"Salt Lake City, Utah",photo:m.A,logo:{src:"/public/imgs/BuzzFeed.079b1ba9.svg",height:48,width:124,blurWidth:0,blurHeight:0}},{id:3,review:"Pain elimination within 10 minutes!",name:"RJ H.",place:"Salt Lake City, Utah",photo:b.A,logo:{src:"/public/imgs/TNW.92b1e4bc.svg",height:48,width:70,blurWidth:0,blurHeight:0}},{id:4,review:"About 80% reduction in pain. Went from disabling to uncomfortable. I’m getting my life back.",name:"Louis P.",place:"Salt Lake City, Utah",photo:w.A,logo:{src:"/public/imgs/HuffPost.a1d83c24.svg",height:50,width:125,blurWidth:0,blurHeight:0}}],v=({children:e})=>(0,A.jsx)(A.Fragment,{children:e});function y(){let e,t,i,n,a,l,o,s,d;let g=(0,r.c)(16),{tablet:x}=(0,p.use)(h.cH),m=(0,p.useRef)(null),b=x?D:v;return g[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,A.jsx)(Q,{children:"Hear it from others"}),g[0]=e):e=g[0],g[1]!==x?(t=x&&(0,A.jsx)("button",{type:"button",onClick:()=>m.current?.previous({ease:"power2.out",duration:1}),children:(0,A.jsx)(E,{src:u,alt:"previous",flipped:!1})}),g[1]=x,g[2]=t):t=g[2],g[3]===Symbol.for("react.memo_cache_sentinel")?(i=(0,A.jsx)(P,{src:c,alt:"Safari World"}),g[3]=i):i=g[3],g[4]!==x?(n=x&&(0,A.jsx)("button",{type:"button",onClick:()=>m.current?.next({ease:"power2.out",duration:1}),children:(0,A.jsx)(E,{src:u,alt:"previous",flipped:!0})}),g[4]=x,g[5]=n):n=g[5],g[6]!==t||g[7]!==n?(a=(0,A.jsxs)(C,{children:[e,t,i,n]}),g[6]=t,g[7]=n,g[8]=a):a=g[8],g[9]===Symbol.for("react.memo_cache_sentinel")?(l=f.map(I),g[9]=l):l=g[9],g[10]!==b?(o=(0,A.jsx)(B,{children:(0,A.jsx)(b,{loopRef:m,children:l})}),g[10]=b,g[11]=o):o=g[11],g[12]===Symbol.for("react.memo_cache_sentinel")?(s=(0,A.jsx)(S,{children:f.map(H)}),g[12]=s):s=g[12],g[13]!==a||g[14]!==o?(d=(0,A.jsxs)(j,{children:[a,o,s]}),g[13]=a,g[14]=o,g[15]=d):d=g[15],d}function H(e){return(0,A.jsx)(N,{src:e.logo,alt:"Company logo"},e.id)}function I(e){return(0,A.jsxs)(k,{children:[(0,A.jsx)(U,{src:o.A,alt:"4.5 out of 5 stars"}),(0,A.jsx)(M,{children:e.review}),(0,A.jsxs)(R,{children:[(0,A.jsx)(F,{src:e.photo,alt:e.name}),(0,A.jsxs)($,{children:[(0,A.jsx)(K,{children:e.name}),(0,A.jsx)(K,{children:e.place})]})]})]},e.id)}let j=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		background: ${a.A.beige200};
		color: ${a.A.coreBrown};
		width: 100vw;
		overflow: clip;
	`),...(0,n.PK)((0,n.AH)`
		padding-top: 110px;
	`)}),C=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		display: flex;
		align-items: center;
		padding: 40px calc(50vw - ${d.ol/2}px + 42px);
		border-bottom: 1px solid ${a.A.beige400};
		gap: 24px;
	`),...(0,n.ZQ)((0,n.AH)`
		padding: 40px 42px;
	`),...(0,n.PK)((0,n.AH)`
		padding: 40px 24px;
		gap: 72px;
		align-items: end;
	`)}),Q=(0,n.I4)("h1",{...(0,n.vi)((0,n.AH)`
		${l.Ay.h5};
		color: ${a.A.coreBlack};
		margin-right: auto;
	`),...(0,n.PK)((0,n.AH)`
		${l.Ay.h6}
	`)}),E=(0,n.I4)(s.Ay,({flipped:e})=>({...(0,n.vi)((0,n.AH)`
		width: 24px;
		height: 24px;
		rotate: ${e?"180deg":"0"};
	`)})),P=(0,n.I4)(s.Ay,{...(0,n.vi)((0,n.AH)`
		width: 42px;
		height: 42px;
	`)}),B=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 1fr;
		padding: 0 calc(50vw - ${d.ol/2}px);
	`),...(0,n.PK)((0,n.AH)`
		display: flex;
		flex-direction: column;
	`)}),D=(0,n.I4)(g.B,{...(0,n.vi)((0,n.AH)`
		width: 150vw;
	`)}),k=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		padding: 72px;
		display: grid;
		gap: 27px;
		align-content: start;

		:first-child {
			border-left: 1px solid ${a.A.beige400};
		}

		border-right: 1px solid ${a.A.beige400};
	`),...(0,n.ZQ)((0,n.AH)`
		width: 50vw;

		:first-child {
			border-left: unset;
		}
	`),...(0,n.PK)((0,n.AH)`
		border-right: unset;
		border-top: 1px solid ${a.A.beige400};

		:first-child {
			border-left: unset;
			border-top: unset;
		}
	`)}),U=(0,n.I4)(s.Ay,{...(0,n.vi)((0,n.AH)`
		height: 16px;
		width: auto;
	`)}),M=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		${l.Ay.bodyL};
	`)}),R=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 9px;
		align-items: center;
	`)}),F=(0,n.I4)(s.Ay,{...(0,n.vi)((0,n.AH)`
		width: 38px;
		height: 38px;
		border-radius: 50%;
	`)}),$=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		display: grid;
		gap: 7px;
	`)}),K=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		${l.Ay.bodyXS}
	`)}),S=(0,n.I4)("div",{...(0,n.vi)((0,n.AH)`
		padding: 24px calc(50vw - ${d.ol/2}px + 220px);
		border-top: 1px solid ${a.A.beige400};
		border-bottom: 1px solid ${a.A.beige400};
		display: flex;
		justify-content: space-between;
		align-items: center;
	`),...(0,n.ZQ)((0,n.AH)`
		justify-content: center;
		gap: 150px;
	`),...(0,n.PK)((0,n.AH)`
		padding: 24px;
	`)}),N=(0,n.I4)(s.Ay,{...(0,n.vi)((0,n.AH)`
		height: 48px;
		width: auto;
	`),...(0,n.PK)((0,n.AH)`
		height: 24px;
	`)})},9314:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>A});let A={src:"/public/imgs/productOne.8a92fdf2.webp",height:882,width:800,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBYAAAABJ9D/iAgYSNsm2+5f9yVE9D9LvI8BVlA4IEgAAAAQAgCdASoHAAgAAkA4JZQCdAEWzOY9v5YAAP72fsbgHMYxQAbfkJhIkt+pjs5r/dElMTW6Cc6pDp9bhwBNsZMstzZrE5qQAAA=",blurWidth:7,blurHeight:8}},494:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>A});let A={src:"/public/imgs/productThree.c6ba3955.webp",height:882,width:800,blurDataURL:"data:image/webp;base64,UklGRnwAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBYAAAABJ9D/iAgYSNsm2+5f9yVE9D9LvI8BVlA4IEAAAADwAQCdASoHAAgAAkA4JZwCdAD0p3HMeQAA/vkIZPxhz04ucf5HIAfR1u688huk/Fr2e9TAqtLT++e7PwcRoAAA",blurWidth:7,blurHeight:8}},6008:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>A});let A={src:"/public/imgs/productTwo.f3c9b653.webp",height:882,width:800,blurDataURL:"data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSBYAAAABJ9D/iAgYSNsm2+5f9yVE9D9LvI8BVlA4IEIAAADQAQCdASoHAAgAAkA4JQBOgB6WUlP2AAD++DeLI89axfPQ9Y6E84p7cssg2/FGaYBNKK7w9vi2HE6qUx7xcN6AAAA=",blurWidth:7,blurHeight:8}}},e=>{var t=t=>e(e.s=t);e.O(0,[679,420,461,587,760,901,857,134,70,38,761,474,73,907,358],()=>t(2414)),_N_E=e.O()}]);