Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.timeOnSite")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"timeOnSite",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3711"})},3711)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.sessionPageViews")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"sessionPageViews",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3709"})},3709)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.lastExitPage")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"lastExitPage",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10658"})},10658)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(v){try{var d=Bootstrapper.data.calculateData;return d?d("data.articleType",function($name,$value,$all,$get,$set,$data,$session,$lastSession,$time,$url,$top,$max,$record,$avg,$first){var t=$data("WT.Z_Primary")||$data("WT.z_cg_type"),f;if(t!=""){f=t.replace(/\s/g,"_");var at=parseInt($get("_data.ART:"+
f))||0;$set("_data.ART:"+f,++at);$set("data.topArticleType",$max("_data.ART:"));$set("data.top3ArticleTypes",$top("_data.ART:").split(",").slice(0,3).join(","));return t}}):""}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"articleType",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10667"})},10667)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.top3ArticleTypes")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"top3ArticleTypes",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10671"})},10671)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.visit")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"visit",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3706"})},3706)},-1,-1);
Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions},721935,290116);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.visitorGroup")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"visitorGroup",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3708"})},3708)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.uuid")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"UUID",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10659"})},10659)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"daysSinceLastVisit",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3707"})},3707)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.averageTimeOnSite")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"averageTimeOnSite",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10656"})},10656)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.averageArticleViews")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"averageArticleViews",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10685"})},10685)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.firstArticleOfSession")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"firstArticleOfSession",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10686"})},10686)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(v){try{var d=Bootstrapper.data.calculateData;return d?d("data.sessionArticleViews",function($name,$value,$all,$get,$set,$data,$session,$lastSession,$time,$url,$top,$max,$record,$avg,$first){var v=$value||0,l=$get("_data.articleStamp")||"",a=$data("citation_title","meta"),r="",f="",
t=$get("_data.engagementTrend")||"";if(l!=$session){if(t!=""&&l!=""){r=$get("data.topArticleType").replace(/\s/g,"_");$set("_data.engagementTrend",t+"|"+v+"|"+r+"|"+($get("_data.ART:"+r)||0))}$set("data.articlesLastSession",v);$record("_data.articleViews",v);$set("data.averageArticleViews",$avg($get("_data.articleViews"))||0);$set("data.firstArticleOfSession","");$set("data.lastArticleOfSession","")}if($data("citation_doi","meta")!=""&&a!=""){f=a.replace(/\_/g," ")+"|"+$url;if($get("data.firstArticleOfSession")==
"")$set("data.firstArticleOfSession",f);$set("data.lastArticleOfSession",f);$record("data.recentArticles",f,5)}if(l!=$session){$set("_data.articleStamp",$session);return a==""?0:1}else return a==""?v:++v}):""}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"sessionArticleViews",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"7326"})},7326)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(v){try{var d=Bootstrapper.data.calculateData;return d?d("data.top5Subjects",function($name,$value,$all,$get,$set,$data,$session,$lastSession,$time,$url,$top,$max,$record,$avg,$first){if($data("citation_doi","meta")!=""){var k=$data("keywords","meta"),l;if(k!=""){k=k.split(",");l=k.length;
for(i=0;i<l;i++)$record("_data.recentSubjects",k[i],50)}return $top("_data.recentSubjects").split(",").splice(0,5).join(",")}return $value}):""}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"top5Subjects",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10678"})},10678)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.articlesLastSession")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"articlesLastSession",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10684"})},10684)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.averagePageViews")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"averagePageViews",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10655"})},10655)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.visitorType")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",trigger:Bootstrapper.data.bottomOfBodyTrigger,dataDefName:"visitorType",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10660"})},
10660)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.lastArticleOfSession")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"lastArticleOfSession",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10687"})},10687)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.totalPageViews")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"totalPageViews",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"3710"})},3710)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.landingPage")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"landingPage",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10657"})},10657)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.topArticleType")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"topArticleType",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10670"})},10670)},-1,-1);
Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.registerDataDefinition(function(){Bootstrapper.data.define({extract:function(){try{return Bootstrapper.data.local.utils.get("data.last5Articles")}catch(e){return"unsupported"}},transform:function(v){return v},load:"page",dataDefName:"last5Articles",collection:"CalculatedAttributes",source:"Manage",priv:"false"},{id:"10688"})},10688)},-1,-1);