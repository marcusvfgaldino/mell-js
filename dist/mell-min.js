const insert={html:null,atribute:null,loc:null,init(t,e,i){this.html=t,this.atribute=document.querySelector(e),this.loc=i,this.make()},make(){local=this.atribute,local.insertAdjacentHTML(this.loc,this.html)}},remove={atribute:null,init(t){this.atribute=document.querySelector(t),this.make()},make(){this.atribute.remove()}},mell={insert:insert,remove:remove};