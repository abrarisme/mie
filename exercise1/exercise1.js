function start_exercise(){var a=oCanvas.create({canvas:"#canvas",background:"#222",fps:60}),i=a.display.rectangle({x:10,y:10,width:100,height:85,fill:"white"}),d=a.display.rectangle({x:10,y:110,width:360,height:350,fill:"white"}),t=a.display.rectangle({x:120,y:10,width:250,height:85,fill:"white"}),s=a.display.text({x:15,y:10,font:"bold 14px sans-serif",text:"Firing Rate",fill:"#ffff"}),e=a.display.text({x:65,y:30,font:"bold 18px sans-serif",text:"11",fill:"#ffff",base:11}),l=a.display.text({x:30,y:10,font:"bold 14px sans-serif",text:"Spot Size",fill:"#ffff"}),r=a.display.ellipse({x:25,y:50,radius:8,fill:"#0aa"}),u=a.display.ellipse({x:60,y:50,radius:15,fill:"#0aa"}),x=a.display.ellipse({x:110,y:50,radius:25,fill:"#0aa"}),n=(a.display.rectangle({x:160,y:20,width:75,height:25,fill:"black"}),a.display.rectangle({x:160,y:18,width:75,height:23,fill:"black"})),f=a.display.rectangle({x:160,y:53,width:75,height:23,fill:"black"}),h=a.display.text({x:7,y:7,font:"bold 12px sans-serif",text:"SPOT OFF",fill:"white"}),y=a.display.text({x:14,y:7,font:"bold 12px sans-serif",text:"NEW RF",fill:"white"}),p=a.display.ellipse({x:177,y:135,radius:50,fill:"#0aa",last:2*x.radius}),c=a.display.ellipse({x:100,y:100,radius:50,fill:"red"}),o=a.display.ellipse({x:100,y:100,radius:30,fill:"green"}),b=a.display.text({x:125,y:10,font:"bold 14px sans-serif",text:"ON-Center Cell",fill:"black"});r.bind("click tap",function(){p.radius=2*this.radius,p.last=p.radius,a.redraw()}),u.bind("click tap",function(){p.radius=2*this.radius,p.last=p.radius,a.redraw()}),x.bind("click tap",function(){p.radius=2*this.radius,p.last=p.radius,a.redraw()}),n.bind("click tap",function(){"SPOT OFF"==h.text?(h.text="SPOT ON",p.radius=0):(h.text="SPOT OFF",p.radius=p.last),a.redraw()}),f.bind("click tap",function(){var i=Math.random()<.5?50:30;c.radius=i,o.radius=50==c.radius?30:16;var d=250*Math.random(),t=250*Math.random();c.x=d+c.radius,c.y=t+c.radius,o.x=d+c.radius,o.y=t+c.radius,a.redraw()}),a.addChild(i),a.addChild(d),a.addChild(t),i.addChild(s),i.addChild(e),t.addChild(l),t.addChild(r),t.addChild(u),t.addChild(x),t.addChild(n),t.addChild(f),n.addChild(h),f.addChild(y),d.addChild(b),d.addChild(c),d.addChild(o),d.addChild(p),setInterval(function(){rate=e.base,rate_updated=Math.floor(Math.random()*(rate+1-(rate-1)+1))+(rate-1),e.text=rate_updated.toString(),a.redraw()},1e3),p.dragAndDrop({move:function(){var a=p.x-c.x,i=p.y-c.y,d=Math.sqrt(a*a+i*i),t=p.x-o.x,s=p.y-o.y,l=Math.sqrt(s*t+s*s);50==p.radius?d<p.radius+.7*c.radius&&d>p.radius+-.3*c.radius?(e.text="1",e.base=2):(e.text="11",e.base=11):30==p.radius?30==c.radius?d<p.radius+.7*c.radius&&d>p.radius+-.3*c.radius?(e.text="1",e.base=2):(e.text="11",e.base=11):d<p.radius+.7*c.radius&&d>p.radius+-.3*c.radius?(e.text="1",e.base=2):l+1.4*o.radius<p.radius+o.radius?(e.text="85",e.base=85):(e.text="11",e.base=11):30==c.radius?d<p.radius+.7*c.radius&&d>p.radius+-.3*c.radius?(e.text="1",e.base=2):l+1.4*o.radius<p.radius+o.radius?(e.text="85",e.base=85):(e.text="11",e.base=11):d<p.radius+.7*c.radius&&d>o.radius?(e.text="1",e.base=2):d<o.radius?(e.text="23",e.base=23):(e.text="11",e.base=11)}})}