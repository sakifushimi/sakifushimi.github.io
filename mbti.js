function askName(){
  var name = prompt("请输入你的姓名");
  alert("你好，" + name + "，欢迎来到赛博算命简易版！不到一分钟的时间，获得属于你的人格分析报告，来试试看！");
}
function getresult(){
var ei = null
var obj1 = document.getElementsByName("ei");
    for(var i=0; i<obj1.length; i ++){
        if(obj1[i].checked){
            ei = (obj1[i].value);
        }
    }
    var sn = null
    var obj2 = document.getElementsByName("sn");
        for(var i=0; i<obj2.length; i ++){
            if(obj2[i].checked){
                sn = (obj2[i].value);
            }
        }
        var tf = null
        var obj3 = document.getElementsByName("tf");
            for(var i=0; i<obj3.length; i ++){
                if(obj3[i].checked){
                    tf = (obj3[i].value);
                }
            }
            var jp = null
            var obj4 = document.getElementsByName("jp");
                for(var i=0; i<obj4.length; i ++){
                    if(obj4[i].checked){
                        jp = (obj4[i].value);
                    }
                }
  var mbti = ei + sn + tf + jp;
  var mbtiDetails = [
    {title:"istj",occu:"物流师"},
    {title:"istp",occu:"鉴赏家"},
    {title:"estp",occu:"企业家"},
    {title:"estj",occu:"总经理"},
    {title:"isfj",occu:"守卫者"},
    {title:"isfp",occu:"探险家"},
    {title:"esfp",occu:"表演者"},
    {title:"esfj",occu:"执政官"},
    {title:"infj",occu:"提倡者"},
    {title:"infp",occu:"调停者"},
    {title:"enfp",occu:"竞选者"},
    {title:"enfj",occu:"主人公"},
    {title:"intj",occu:"建筑师"},
    {title:"intp",occu:"逻辑学家"},
    {title:"entp",occu:"辩论家"},
    {title:"entj",occu:"指挥官"}
  ];
  var occupation = null;
  for (i=0; i<mbtiDetails.length; i++){
    if (mbtiDetails[i].title === mbti){
    occupation=(mbtiDetails[i].occu);
  }
  }
  alert("你的人格属性为"+mbti+"，"+occupation+"型人格");
}
