import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as c,c as p,a as s,b as n,d as t,w as e,e as l}from"./app-BSfnZ5L-.js";const u={},d=s("h1",{id:"🛖圈地系统使用说明",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#🛖圈地系统使用说明","aria-hidden":"true"},"#"),n(" 🛖圈地系统使用说明")],-1),r={class:"hint-container info"},m=s("p",{class:"hint-container-title"},"提示",-1),k=l(`<h2 id="圈地系统特性" tabindex="-1"><a class="header-anchor" href="#圈地系统特性" aria-hidden="true">#</a> 圈地系统特性</h2><ul><li>支持多种圈地模式（2D/3D圈地）</li><li>圈地全程可视化操作</li><li>圈地系统独有交易市场</li><li>可自由配置领地内权限</li><li>管理员便捷管理领地</li></ul><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token comment">//领地系统性能部分配置</span>
    <span class="token comment">//领地计算索引值基准距离</span>
    <span class="token comment">//为了保证服务器的流畅运行,DISTANSE参数应满足：DISTANSE * DISTANCE 等于或稍稍小于 MAX_SQUARE，否则可能会导致插件包运行超时而引发“hang”报错</span>
    <span class="token string">&quot;DISTANCE&quot;</span> = <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token comment">//领地系统基础配置</span>
    <span class="token comment">//单人最多圈地数量</span>
    <span class="token string">&quot;MAX_LAND_NUM&quot;</span> = <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token comment">//2d/3d领地最大面积(两者均只计算xz平面所占面积)</span>
    <span class="token string">&quot;MAX_SQUARE&quot;</span> = <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token comment">//2d/3d领地最小面积(两者均只计算xz平面所占面积)</span>
    <span class="token string">&quot;MIN_SQUARE&quot;</span> = <span class="token number">100</span><span class="token punctuation">,</span>
    <span class="token comment">//领地价格计算指数</span>
    <span class="token comment">//2d领地单面积价格</span>
    <span class="token string">&quot;PRICE_2D&quot;</span> = <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token comment">//3d领地单块价格</span>
    <span class="token string">&quot;PRICE_3D&quot;</span> = <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token comment">//坐标限制范围</span>
    <span class="token string">&quot;X_RANGE&quot;</span> = <span class="token punctuation">[</span><span class="token number">-100000</span><span class="token punctuation">,</span><span class="token number">100000</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Y_RANGE&quot;</span> = <span class="token punctuation">[</span><span class="token number">-64</span><span class="token punctuation">,</span><span class="token number">256</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Z_RANGE&quot;</span> = <span class="token punctuation">[</span><span class="token number">-100000</span><span class="token punctuation">,</span><span class="token number">100000</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//金币计分板名称</span>
    <span class="token string">&quot;MONEY_SCOREBOARD_NAME&quot;</span> = <span class="token string">&quot;money&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;MONEY_SCOREBOARD_DISPLAY_NAME&quot;</span> = <span class="token string">&quot;金币&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function v(b,_){const a=i("RouterLink");return c(),p("div",null,[d,s("div",r,[m,s("p",null,[n("圈地系统依赖于"),t(a,{to:"/dev/Http-Bot.html"},{default:e(()=>[n("NIAHttpBOT")]),_:1}),n(",在使用圈地系统之前请先阅读"),t(a,{to:"/dev/Http-Bot.html"},{default:e(()=>[n("NIAHttpBOT使用说明")]),_:1}),n("，设置好NIAHttpBOT的配置文件。")])]),k])}const A=o(u,[["render",v],["__file","Land.html.vue"]]);export{A as default};
