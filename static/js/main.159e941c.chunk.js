(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(n,e,t){n.exports=t(34)},34:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(12),c=t.n(o),i=t(18),u=t(3),l=t(4),m=t(6),b=t(5),s=t(13),p=t(1),f=t(2);function d(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 20px;\n  & input {\n    margin: 10px 0;\n    border: 1px solid #cccccc; \n    border-radius: 3px; \n    background: #ffffff;\n    outline: none; \n    color: #cccccc; \n    padding: 5px;\n    font-size: 18px;\n  }\n"]);return d=function(){return n},n}function h(){var n=Object(p.a)(["\n  margin-top: 10px;\n  font-weight: 700;\n  color: white;\n  text-decoration: none;\n  padding: 0.8em 1em calc(0.8em + 3px);\n  border-radius: 3px;\n  background: rgb(64, 199, 129);\n  box-shadow: 0 -3px rgb(53, 167, 110) inset;\n  transition: 0.2s;\n  font-size: 20px;\n  cursor: pointer;\n  &:hover {\n    background: rgb(33, 147, 90);\n    box-shadow: 0 3px rgb(33, 147, 90) inset;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(p.a)(["\ndisplay: flex;\nflex-direction: column;\nwidth: 300px;\n"]);return v=function(){return n},n}var g=f.b.form(v());g.Button=f.b.button(h()),g.Label=f.b.label(d());var x=g,E=function(n){Object(m.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.onChangeHandler=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.SubmitHandler=function(e){e.preventDefault();var t=n.props.onSubmit,a=n.state;t(a.name,a.number),n.setState({name:"",number:""})},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return r.a.createElement(x,{onSubmit:this.SubmitHandler},r.a.createElement(x.Label,null,"Name",r.a.createElement("input",{type:"text",placeholder:"Enter a contact name",name:"name",onChange:this.onChangeHandler,value:e})),r.a.createElement(x.Label,null,"Number",r.a.createElement("input",{type:"number",placeholder:"Enter the number",onChange:this.onChangeHandler,name:"number",value:t})),r.a.createElement(x.Button,{type:"submit"},"Add contact"))}}]),t}(a.Component),j=t(17),y=t.n(j);function O(){var n=Object(p.a)(["\nfont-size: 20px;\n"]);return O=function(){return n},n}function C(){var n=Object(p.a)(["\n  margin: 10px 0;\n  border: 1px solid #cccccc;\n  border-radius: 3px;\n  background: #ffffff;\n  outline: none;\n  color: #cccccc;\n  padding: 5px;\n  font-size: 18px;\n  width: 100%;\n"]);return C=function(){return n},n}var k=f.b.input(C());k.Label=f.b.p(O());var S=k,w=function(n){Object(m.a)(t,n);var e=Object(b.a)(t);function t(){return Object(u.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var n=this.props.contactSearch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(S.Label,null,"Find contacts by name"),r.a.createElement(S,{onChange:function(e){return n(e.target.value)},placeholder:"Enter name"})))}}]),t}(a.Component);function z(){var n=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 5px inset rgba(28, 110, 164, 0.57);\n  border-radius: 10px;\n  padding: 15px;\n  margin-top: 10px;\n  & p {\n    font-size: 20px;\n  }\n  & button {\n    background-color: #555555;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n    border-radius: 10px;\n    cursor: pointer;\n    transition: 0.2s;\n    &:hover {\n      background-color: #444444;\n    }\n  }\n"]);return z=function(){return n},n}function H(){var n=Object(p.a)(["\nmargin-top: 20px;\n"]);return H=function(){return n},n}var L=f.b.ul(H());L.Item=f.b.li(z());var R=L;var A=function(n){var e=n.contacts,t=n.onRemoveContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,e.map((function(n){return r.a.createElement(R.Item,{key:n.id},r.a.createElement("p",null,n.name,": ",n.number),r.a.createElement("button",{type:"button",onClick:function(){return t(n.id)}},"Delete"))}))))},B=function(n){Object(m.a)(t,n);var e=Object(b.a)(t);function t(){return Object(u.a)(this,t),e.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var n=this.props,e=n.contacts,t=n.contactSearch,a=n.onRemoveContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("h2",null,"Contacts"),r.a.createElement(w,{contactSearch:t}),r.a.createElement(A,{contacts:e,onRemoveContact:a})))}}]),t}(a.Component);function F(){var n=Object(p.a)(["\nwidth: 768px;\nmargin: 0 auto;\n"]);return F=function(){return n},n}var N=f.b.div(F()),I=function(n){Object(m.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.checkContact=function(e){return n.state.contacts.some((function(n){return n.name===e}))},n.onRemoveContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.onSubmitHandler=function(e,t){console.log(e),n.setState((function(a){return n.checkContact(e)?alert("".concat(e," is already in contacts.")):{contacts:[].concat(Object(i.a)(a.contacts),[{name:e,number:t,id:y.a.generate()}])}}))},n.contactSearch=function(e){n.setState({filter:e})},n.filterByName=function(){var e=n.state,t=e.contacts,a=e.filter;return t.filter((function(n){return n.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{onSubmit:this.onSubmitHandler}),r.a.createElement(B,{contacts:this.filterByName(),contactSearch:this.contactSearch,onRemoveContact:this.onRemoveContact}))}}]),t}(a.Component);function D(){var n=Object(p.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nh2 {\n  margin: 20px 0;\n  font-size: 24px;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  padding-bottom: 20px;\n}\nli {\n    list-style-type: none;\n}\n"]);return D=function(){return n},n}var J=Object(f.a)(D());c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null),r.a.createElement(I,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.159e941c.chunk.js.map