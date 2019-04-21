// 把code写到#code和style标签里
function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    let n = 0 
    let id = setInterval(()=>{//id是为了结束时销毁
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        styleTag.innerHTML = prefix +  code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
         if(n >= code.length){
           window.clearInterval(id)
           fn && fn.call()
         }
       },0)
    }
function writeMarkdown(markdown,fn) {
    let domPaper = document.querySelector('#paper>.content')           
    let n = 0 
    let id = setInterval(()=>{
n += 1
    domPaper.innerHTML = markdown.substring(0,n)
    domPaper.scrollTop = domPaper.scrollHeight
    if(n >= markdown.length){
    window.clearInterval(id)
    fn && fn.call()
    }
},10)
}


var result = `/* 
 * 面试官你好，我是XXX
 * 只用文字作做我介绍太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

 *{
 transition:all 1s;
 }

 html{
 background:#rgb(222,222,222);
 font-size:16px;
 }

 #code{
 border: 1px solid red;
 padding: 16px;
 }

 /* 我需要一点代码高亮 */

 .token.selector{
     color: #690;
 }
 .token.property{
     color: #905;
 }
 .token.function{
     color: #DD4A68;
 }

 /* 加点3D效果 */

  #code {
    transform:rotate(360deg);
  }
  
 /* 不玩了,我来介绍一下我自己吧 */  
 /* 我需要一张白纸 */ 
#code{
    position: fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position: fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display: flex;
    justify-content: center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    height:100%;
    width:100%;
}
`
var result2 = `


/*
* 接下来把Markdown变成HTML - marked.js
*/
`
var md =`
# 自我介绍

我叫XXX
1996年2月出生
XXX学校毕业
软件工程专业
希望应聘前端开发岗位

# 技能介绍
熟悉 JavaScript CSS

# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板

# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
`
var result3= `


/*
* 接下来把Markdown变成HTML - marked.js
*/
`

writeCode('',result, ()=>{
    createPaper( () =>{
        writeCode(result,result2)
        writeCode(result, result2, ()=>{
            writeMarkdown(md)
        })
    })
}) // 定闹钟 :50 毫秒钟后开始写第一行代码
       
       

       function createPaper(fn){
           var paper = document.createElement('div')
           paper.id = 'paper'
           var content = document.createElement('pre')
           content.className = 'content'
           paper.appendChild(content)
           document.body.appendChild(paper)
           fn.call()
       }

