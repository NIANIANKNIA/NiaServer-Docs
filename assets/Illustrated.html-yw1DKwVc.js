import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o,c as g,a as t,d as r,w as d,b as e,e as l}from"./app-Rh3tvdAp.js";const n="/items/sword/dark_sword.png",c="/island/forest.png",h="/island/island1.png",p="/island/bamboo.png",x="/island/catcoffee.png",y="/island/ore.png",u="/island/island2.png",f="/island/hell1.png",b="/island/poorisland.png",_="/island/bottle.png",m={},E=l('<h1 id="📜服务器图鉴" tabindex="-1"><a class="header-anchor" href="#📜服务器图鉴" aria-hidden="true">#</a> 📜服务器图鉴</h1><div class="hint-container warning"><p class="hint-container-title">变动中数据提醒</p><p>以下数据均基于测试服数据，数据仍会出现较大变动，具体请以正式服为准</p></div><blockquote><p>NIA服务器V4.5版本的全新基本设定，你可以在这里查询到任何你想知道的关于服务器的设定！</p></blockquote><h3 id="🚨基本玩法" tabindex="-1"><a class="header-anchor" href="#🚨基本玩法" aria-hidden="true">#</a> 🚨基本玩法</h3><p>服务器主要玩法仍是以原版生存为基础的的扩展玩法</p><h3 id="💵货币系统" tabindex="-1"><a class="header-anchor" href="#💵货币系统" aria-hidden="true">#</a> 💵货币系统</h3><ul><li><p>金币：通过击杀怪物或击败boss获取，用于升级装备武器、打磨宝石、玩家交易</p></li><li><p>魔币：通过挖掘魔石原矿获得（2～5颗）或者通过使用铁匠铺功能的熔炼使用（原版矿物）进行转换获得，用于换取装饰方块和基础物资</p></li></ul><p>服务器所有商品价格/回收价格均基于<strong>基础物价*物价指数</strong></p><p>其中物价指数将每小时更新一次，其中物价指数的生成规则为：</p><p>理论上服务器生成的物价指数分布符合以<code>100</code>为<strong>均值</strong>，<code>20</code>为<strong>方差</strong>的标准正态分布（物价指数将取随机生成后的数据除以100并保留两位小数的处理）</p><p>根据标准正态分布曲线，将有99.74%的数据分布于<code>0.4-1.6</code></p><p>同时为了保障服务器正常运行，所有物价指数最后输出范围被限制在<code>0.2-1.8</code></p><p>即小于<code>0.2</code>物价指数为<code>0.2</code>，大于<code>1.8</code>的物价指数为<code>1.8</code></p><p><strong>注：物价指数仅仅影响金币相关交易，并不影响魔币交易</strong></p><h3 id="材料与升级" tabindex="-1"><a class="header-anchor" href="#材料与升级" aria-hidden="true">#</a> 材料与升级</h3><p>下表中的X代表<code>暗、火、空、岩、灵、雷、水</code>七大元素</p><ul><li><p>x元素矿石：通过在不同的元素空岛上挖掘，使用熔炉烧制获得元素锭</p></li><li><p>x元素锭：用于武器装备升级以及合成注入魔力的元素锭</p></li><li><p>x元素瓶：通过地牢中的宝箱有概率获得用于武器装备升级以及合成注入魔力的元素锭</p></li><li><p>x元素晶体：通过挖掘元素原矿有概率获得或击败怪物、boss、地牢宝箱有概率获得，用于铁匠铺打磨宝石</p></li></ul><p>●x元素宝石：通过铁匠铺打磨获得，用于武器装备升级以及合成注入魔力的元素锭</p><p>●注入魔力的x元素锭：通过合成获得，用于合成武器装备以及升级</p><p>●灵魂残片：通过击杀怪物获得，用于合成灵魂</p><p>●灵魂：用于武器装备升级，和打磨宝石材料</p><h3 id="七大元素" tabindex="-1"><a class="header-anchor" href="#七大元素" aria-hidden="true">#</a> 七大元素</h3><p>在这个世界由<code>暗、火、空、岩、灵、雷、水</code>七大元素构成。</p><h3 id="七大元素剑" tabindex="-1"><a class="header-anchor" href="#七大元素剑" aria-hidden="true">#</a> 七大元素剑</h3><h4 id="暗·剑" tabindex="-1"><a class="header-anchor" href="#暗·剑" aria-hidden="true">#</a> 暗·剑</h4><p>基础攻击力：6</p><p>基础耐久值：1000</p><p>特殊效果：在攻击敌人命中后立即造成一次<strong>额外的2点伤害</strong>，该伤害无视护甲防御值，同时敌人获得<strong>2s失明效果</strong>。</p><h4 id="火·剑" tabindex="-1"><a class="header-anchor" href="#火·剑" aria-hidden="true">#</a> 火·剑</h4><p>基础攻击力：8</p><p>基础耐久值：800</p><p>特殊效果：在攻击敌人命中后给敌人附加<strong>持续之火</strong>效果，在此效果下，<strong>5s</strong>内敌人喝抗火药水、进入水中均无法消除此状态，在此状态下敌人会<strong>持续受到火焰伤害</strong>。</p><h4 id="空·剑" tabindex="-1"><a class="header-anchor" href="#空·剑" aria-hidden="true">#</a> 空·剑</h4><p>基础攻击力：4</p><p>基础耐久值：1200</p><p>特殊效果：在攻击敌人命中后，敌人获得<strong>3s漂浮效果</strong>，同时在装备该武器后获得<strong>速度效果</strong></p><h4 id="岩·剑" tabindex="-1"><a class="header-anchor" href="#岩·剑" aria-hidden="true">#</a> 岩·剑</h4><p>基础攻击力：6</p><p>基础耐久值：2000</p><p>特殊效果：在攻击有护甲装备的敌人命中时，会大大<strong>加速敌方护甲耐久值损耗速度</strong>。</p><h4 id="灵·剑" tabindex="-1"><a class="header-anchor" href="#灵·剑" aria-hidden="true">#</a> 灵·剑</h4><p>基础攻击力：7</p><p>基础耐久值：1000</p><p>特殊效果：在攻击敌人命中后，敌人获得<strong>凋零1秒、缓慢3秒</strong>。</p><h4 id="雷·剑" tabindex="-1"><a class="header-anchor" href="#雷·剑" aria-hidden="true">#</a> 雷·剑</h4><p>基础攻击力：7</p><p>基础耐久值：1500</p><p>特殊效果：在攻击敌人命中后，会在敌人所在位置立刻<strong>产生三道落雷</strong>，同时敌人获得<strong>2s缓慢效果</strong>。</p><h4 id="水·剑" tabindex="-1"><a class="header-anchor" href="#水·剑" aria-hidden="true">#</a> 水·剑</h4><p>基础攻击力：4</p><p>基础耐久值：1800</p><p>特殊效果：在攻击敌人命中后，会立刻<strong>恢复自身生命值2点</strong>，同时<strong>对敌人施加中毒5s的效果</strong>。</p><h3 id="pvp系统" tabindex="-1"><a class="header-anchor" href="#pvp系统" aria-hidden="true">#</a> PVP系统</h3><p>玩家双方可以通过菜单进入pvp系统，双方自行选择pvp模式后，在开始</p><h3 id="测试内容-合成表" tabindex="-1"><a class="header-anchor" href="#测试内容-合成表" aria-hidden="true">#</a> （测试内容）合成表</h3><table><thead><tr><th style="text-align:center;">1</th><th style="text-align:center;">2</th><th style="text-align:center;">3</th><th style="text-align:center;"></th><th style="text-align:center;">合成所得</th></tr></thead><tbody><tr><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;">=&gt;</td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td></tr><tr><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"><img src="'+n+'" alt="island1" loading="lazy"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">过时页面提醒</p><p>下方页面部分内容过时，仅供参考！</p></div><blockquote><p>NIA服务器V4版本的基本设定，你可以在这里查询到任何你想知道的关于服务器的设定！</p></blockquote><h3 id="🧊服务器背景故事设定" tabindex="-1"><a class="header-anchor" href="#🧊服务器背景故事设定" aria-hidden="true">#</a> 🧊服务器背景故事设定</h3><p>敬请期待 <s>其实是没人写</s></p><h3 id="🚨基本玩法-1" tabindex="-1"><a class="header-anchor" href="#🚨基本玩法-1" aria-hidden="true">#</a> 🚨基本玩法</h3>',61),B=t("strong",null,[e("选择符合自己"),t("s",null,"xp"),e("的空岛")],-1),A=t("p",null,"在这里你肯定要运用一些空岛生存技巧，在这里我就不多介绍了",-1),F=t("strong",null,"随机矿场",-1),z=t("p",null,"一些空岛无法获取的资源可以在商店里购买",-1),q=t("strong",null,"能源币",-1),I=t("p",null,"至于获取能源币的方式：",-1),k=t("p",null,"-如果你是肝帝，那么你可以掏空随机矿场，卖矿！（但这里你需要注意的是：矿物回收是有数量限制的）",-1),v=t("p",null,[e("-如果你是懒狗，那么你可以通过 "),t("s",null,"要饭"),e(" 卖其他物品来获取能源币。")],-1),N=t("strong",null,"氧气值",-1),V=t("strong",null,"氧气装备",-1),C=t("strong",null,"点击这里",-1),X=t("strong",null,"物价指数",-1),w=l('<p><s>或许可以借助这个东西赚个差价呢</s></p><p>那么...</p><p><strong>前面的区域，就请你自己探索吧！</strong></p><h3 id="🗻所有空岛类型" tabindex="-1"><a class="header-anchor" href="#🗻所有空岛类型" aria-hidden="true">#</a> 🗻所有空岛类型</h3><h4 id="丛林岛-作者-lonely" tabindex="-1"><a class="header-anchor" href="#丛林岛-作者-lonely" aria-hidden="true">#</a> 丛林岛 作者@lonely</h4><p>丛林风格的空岛，拥有较大的空间以及资源，岛上甚至还有两只羊！是萌新开始空岛生存的不二之选!</p><figure><img src="'+c+'" alt="forest" tabindex="0" loading="lazy"><figcaption>forest</figcaption></figure><h4 id="多种群落岛-作者-lonely" tabindex="-1"><a class="header-anchor" href="#多种群落岛-作者-lonely" aria-hidden="true">#</a> 多种群落岛 作者@lonely</h4><p>多种群落杂糅在一起的一个小岛，空间较为紧凑，同样没有奖励箱，但也是很美观的一个小岛</p><figure><img src="'+h+'" alt="island1" tabindex="0" loading="lazy"><figcaption>island1</figcaption></figure><h4 id="竹游-作者-mituyun" tabindex="-1"><a class="header-anchor" href="#竹游-作者-mituyun" aria-hidden="true">#</a> 竹游 作者@mituyun</h4><p>竹园小岛，遍布竹子，有一个小亭子，溪流，场景十分安详！</p><figure><img src="'+p+'" alt="bamboo" tabindex="0" loading="lazy"><figcaption>bamboo</figcaption></figure><h4 id="猫猫咖啡厅-作者-samcrybut" tabindex="-1"><a class="header-anchor" href="#猫猫咖啡厅-作者-samcrybut" aria-hidden="true">#</a> 猫猫咖啡厅 作者@Samcrybut</h4><p>一个猫猫样式的屋子！猛男生存必备...作者这样说道...</p><figure><img src="'+x+'" alt="catcoffee" tabindex="0" loading="lazy"><figcaption>catcoffee</figcaption></figure><h4 id="矿工最爱-作者-ailazuikeai" tabindex="-1"><a class="header-anchor" href="#矿工最爱-作者-ailazuikeai" aria-hidden="true">#</a> 矿工最爱 作者@AiLaZuiKeAi</h4><p>一个小岛，上面有蜂巢，底下也有一定的矿产！</p><figure><img src="'+y+'" alt="ore" tabindex="0" loading="lazy"><figcaption>ore</figcaption></figure><h4 id="破败-小岛-作者-junfish2722" tabindex="-1"><a class="header-anchor" href="#破败-小岛-作者-junfish2722" aria-hidden="true">#</a> “破败”小岛&quot; 作者@JunFish2722</h4><p>一个“破败的”小岛，布满蜘蛛网，但是有奖励箱子，甚至还有一个村民蛋？</p><figure><img src="'+u+'" alt="island2" tabindex="0" loading="lazy"><figcaption>island2</figcaption></figure><h4 id="地狱小岛-作者-lonely" tabindex="-1"><a class="header-anchor" href="#地狱小岛-作者-lonely" aria-hidden="true">#</a> 地狱小岛 作者@lonely</h4><p>下界风格的小空岛，资源比较匮乏，生存难度较高，适合以下界为主建筑风格的玩家</p><figure><img src="'+f+'" alt="hell1" tabindex="0" loading="lazy"><figcaption>hell1</figcaption></figure><h4 id="石头岛-作者-junfish2722" tabindex="-1"><a class="header-anchor" href="#石头岛-作者-junfish2722" aria-hidden="true">#</a> 石头岛 作者@JunFish2722</h4><p>一个主体由石头构成的岛，资源比较贫瘠，可能在上面生存比较困难吧。</p><figure><img src="'+b+'" alt="poorisland" tabindex="0" loading="lazy"><figcaption>poorisland</figcaption></figure><h4 id="瓶子岛-作者-nianianknia" tabindex="-1"><a class="header-anchor" href="#瓶子岛-作者-nianianknia" aria-hidden="true">#</a> 瓶子岛 作者@NIANIANKNIA</h4><p>一个小小的玻璃瓶里承载了小岛的全部物质~</p><figure><img src="'+_+'" alt="bottle" tabindex="0" loading="lazy"><figcaption>bottle</figcaption></figure><h3 id="💵货币系统-1" tabindex="-1"><a class="header-anchor" href="#💵货币系统-1" aria-hidden="true">#</a> 💵货币系统</h3><p>货币名为能源币，基准为一颗钻石1000货币</p><p>服务器商店回收木头，农作物，石头等物品</p><p>服务器所有商品价格/回收价格均基于<strong>基础物价*物价指数</strong></p><p>其中物价指数将每小时更新一次，其中物价指数的生成规则为：</p><p>理论上服务器生成的物价指数分布符合以<code>100</code>为<strong>均值</strong>，<code>20</code>为<strong>方差</strong>的标准正态分布（物价指数将取随机生成后的数据除以100并保留两位小数的处理）</p><p>根据标准正态分布曲线，将有99.74%的数据分布于<code>0.4-1.6</code></p><p>同时为了保障服务器正常运行，所有物价指数最后输出范围被限制在<code>0.2-1.8</code></p><p><strong>附表：基础物品基础物价表</strong></p><table><thead><tr><th style="text-align:center;">物品名称</th><th style="text-align:center;">售卖价格</th><th style="text-align:center;">回收价格</th><th style="text-align:center;">所属种类</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">钻石</td><td style="text-align:center;">-</td><td style="text-align:center;">1000</td><td style="text-align:center;">矿石</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">敬请期待</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h3 id="🫧氧气值设定" tabindex="-1"><a class="header-anchor" href="#🫧氧气值设定" aria-hidden="true">#</a> 🫧氧气值设定</h3><p>玩家初始拥有“初始呼吸装备”便获得<strong>5000/5000</strong>点氧气值 （前面为如今氧气值，后面的为初始等级氧气值最大容量）</p><p>以下所有数值除非说明否则均以“初始呼吸装备”为准</p><p>当玩家在线时，氧气值将以每分钟<strong>20</strong>点减少</p><p>当<strong>氧气值≥14000</strong>时玩家血量将由<strong>20点变为40点</strong>（评估中功能，暂未上线）</p><p>当<strong>氧气值≥10000</strong>时玩家获得<strong>跳跃提升1</strong>提升（评估中功能，暂未上线）</p><p>当<strong>氧气值≥4800</strong>时玩家获得<strong>力量1</strong>提升</p><p>当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复1</strong>提升</p><p>当<strong>氧气值≤200</strong>时玩家获得<strong>缓慢/虚弱</strong>效果</p><p>当<strong>氧气值归零超过1分钟</strong>获得<strong>失明/挖掘疲劳/反胃</strong>效果</p><p>当<strong>氧气值归零超过4分钟</strong>，玩家<strong>直接死亡</strong>并强制重生至&quot;医院&quot;，在&quot;医院&quot;强制支付<strong>50能源币</strong>进行治疗，并获得<strong>200</strong>氧气值用于生命的基本维持，玩家需在下次氧气值归零前购买足够的氧气用于保命。</p><h3 id="🤖-呼吸装备-设定" tabindex="-1"><a class="header-anchor" href="#🤖-呼吸装备-设定" aria-hidden="true">#</a> 🤖&quot;呼吸装备&quot;设定</h3><p>玩家可以通过升级自己的呼吸装备来获得更高等级的效果</p><table><thead><tr><th style="text-align:center;">装备名称</th><th style="text-align:center;">最大氧气值</th><th style="text-align:center;">每分钟损耗氧气值</th><th style="text-align:center;">升级所消耗能源币</th><th style="text-align:center;">特殊效果</th></tr></thead><tbody><tr><td style="text-align:center;">初级呼吸装备Ⅰ</td><td style="text-align:center;">5000</td><td style="text-align:center;">20</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">初级呼吸装备Ⅱ</td><td style="text-align:center;">5300</td><td style="text-align:center;">19</td><td style="text-align:center;">100</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">初级呼吸装备Ⅲ</td><td style="text-align:center;">5500</td><td style="text-align:center;">18</td><td style="text-align:center;">300</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">中级呼吸装备Ⅰ</td><td style="text-align:center;">5800</td><td style="text-align:center;">18</td><td style="text-align:center;">500</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">中级呼吸装备Ⅱ</td><td style="text-align:center;">6000</td><td style="text-align:center;">17</td><td style="text-align:center;">1000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">中级呼吸装备Ⅲ</td><td style="text-align:center;">6000</td><td style="text-align:center;">16</td><td style="text-align:center;">1200</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">高级呼吸装备Ⅰ</td><td style="text-align:center;">6300</td><td style="text-align:center;">16</td><td style="text-align:center;">1500</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">高级呼吸装备Ⅱ</td><td style="text-align:center;">6500</td><td style="text-align:center;">15</td><td style="text-align:center;">2000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">高级呼吸装备Ⅲ</td><td style="text-align:center;">6500</td><td style="text-align:center;">14</td><td style="text-align:center;">2500</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">X级呼吸装备Ⅰ</td><td style="text-align:center;">7000</td><td style="text-align:center;">13</td><td style="text-align:center;">5000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">X级呼吸装备Ⅱ</td><td style="text-align:center;">8000</td><td style="text-align:center;">13</td><td style="text-align:center;">8000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">X级呼吸装备Ⅲ</td><td style="text-align:center;">9000</td><td style="text-align:center;">12</td><td style="text-align:center;">10000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">X级呼吸装备Ⅳ</td><td style="text-align:center;">10000</td><td style="text-align:center;">11</td><td style="text-align:center;">10000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">X级呼吸装备Ⅴ</td><td style="text-align:center;">15000</td><td style="text-align:center;">10</td><td style="text-align:center;">15000</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">S级呼吸装备Ⅰ</td><td style="text-align:center;">15000</td><td style="text-align:center;">5</td><td style="text-align:center;">20000</td><td style="text-align:center;">当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复2</strong>提升</td></tr><tr><td style="text-align:center;">S级呼吸装备Ⅱ</td><td style="text-align:center;">15000</td><td style="text-align:center;">3</td><td style="text-align:center;">30000</td><td style="text-align:center;">当<strong>氧气值≥3500</strong>时玩家获得<strong>生命恢复3</strong>提升（评估中功能，暂未上线）</td></tr><tr><td style="text-align:center;">S级呼吸装备Ⅲ</td><td style="text-align:center;">15000</td><td style="text-align:center;">2</td><td style="text-align:center;">40000</td><td style="text-align:center;">当<strong>氧气值≥4800</strong>时玩家获得<strong>力量2</strong>提升</td></tr><tr><td style="text-align:center;">V型呼吸装备</td><td style="text-align:center;">15000</td><td style="text-align:center;">1</td><td style="text-align:center;">50000</td><td style="text-align:center;">装备者可获得无限时间的<strong>夜视</strong>效果 （评估中功能，暂未上线）</td></tr></tbody></table><p><strong>注：“特殊效果”一栏如果为“-”，则代表正向增益buff按照氧气值设定中初始设定实行,如果没有特殊说明，默认更高级的装备支持低级装备所有功能，玩家不可以跨级升级。</strong></p><p>当玩家在拥有<strong>X级呼吸装备Ⅰ</strong>之前进入下界，将会获得缓慢、虚弱的效果，同时氧气值消耗速度增加100%</p><p>当玩家在拥有<strong>S级呼吸装备Ⅰ</strong>之前进入末地，将会获得缓慢、虚弱的效果，同时氧气值消耗速度增加200%</p><p>当玩家在拥有<strong>V级呼吸装备</strong>之前，每次死亡将扣除剩余氧气值10%</p><h3 id="🤿如何获得氧气" tabindex="-1"><a class="header-anchor" href="#🤿如何获得氧气" aria-hidden="true">#</a> 🤿如何获得氧气？</h3><p>①从商店购买&quot;氧气制造机&quot;（虚拟的）当玩家在线每分钟按照级别将产生<strong>5/8/10</strong>的氧气值直接至玩家氧气值中直到玩家氧气值满（评估中功能，暂未上线）</p><p>②从商店直接使用货币购买氧气值（1能源币购买10氧气值）</p><p>③接收其他玩家的&quot;有损&quot;转送氧气值（玩家a给玩家b转送氧气，由于过程中损耗，玩家b只能收到<code>50-95%</code>的氧气）</p><p>④敬请期待...</p><h3 id="🥖体力系统" tabindex="-1"><a class="header-anchor" href="#🥖体力系统" aria-hidden="true">#</a> 🥖体力系统</h3><p>玩家不在线时每十分钟回一个体力值，体力值基础最大值<code>160</code>格，玩家在线时每分钟回一格体力值，体力值可以用于进入矿场、刷怪场、跑酷等可以获得矿物、突破素材、货币的场所</p><h3 id="🧩等级系统" tabindex="-1"><a class="header-anchor" href="#🧩等级系统" aria-hidden="true">#</a> 🧩等级系统</h3><p>敬请期待</p><h3 id="💎随机矿场" tabindex="-1"><a class="header-anchor" href="#💎随机矿场" aria-hidden="true">#</a> 💎随机矿场</h3><p>每次进入花费<code>40</code>体力值获取<code>15</code>分钟采矿权（<strong>进入矿场才计算时间，采矿时间在矿场更新前有效</strong>）</p><p>矿场每次更新时间是每天的<code>晚上12点</code></p><p>在矿场更新时所有在矿场玩家将会被强制传出，且当天采矿剩余时间清零，重新计算</p><h3 id="🎃副本系统" tabindex="-1"><a class="header-anchor" href="#🎃副本系统" aria-hidden="true">#</a> 🎃副本系统</h3><p>敬请期待</p><p>*<strong>所有名称、数值均为开发中内容，具体请以游戏正式服为准</strong></p><p>*<strong>本服务器与现实没有任何关系，所有设定均为游戏需要，现实请勿模仿</strong></p>',76);function S(j,L){const a=s("RouterLink");return o(),g("div",null,[E,t("p",null,[r(a,{to:"/play-guide/Illustrated.html#%F0%9F%97%BB%E6%89%80%E6%9C%89%E7%A9%BA%E5%B2%9B%E7%B1%BB%E5%9E%8B"},{default:d(()=>[B]),_:1}),e("，在岛上开始你的生存~")]),A,t("p",null,[e("至于获取资源嘛...了解一下"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%92%8E%E9%9A%8F%E6%9C%BA%E7%9F%BF%E5%9C%BA"},{default:d(()=>[F]),_:1}),e("？")]),z,t("p",null,[e("哦对了，在这个大陆，你需要使用一种叫做"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%92%B5%E8%B4%A7%E5%B8%81%E7%B3%BB%E7%BB%9F"},{default:d(()=>[q]),_:1}),e("的东西来进行交易")]),I,k,v,t("p",null,[e("在获取资源的过程中，你要时刻关注自己的"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%AB%A7%E6%B0%A7%E6%B0%94%E5%80%BC%E8%AE%BE%E5%AE%9A"},{default:d(()=>[N]),_:1})]),t("p",null,[e("使用能源币升级"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%A4%96%E5%91%BC%E5%90%B8%E8%A3%85%E5%A4%87%E8%AE%BE%E5%AE%9A"},{default:d(()=>[V]),_:1}),e("，这会使你氧气容量上限增加，氧气消耗速度也会变慢。")]),t("p",null,[e("如何获取氧气呢？"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%A4%BF%E5%A6%82%E4%BD%95%E8%8E%B7%E5%BE%97%E6%B0%A7%E6%B0%94"},{default:d(()=>[C]),_:1})]),t("p",null,[e("另外，服务器采用了极其先进的正态分布算法来计算"),r(a,{to:"/play-guide/Illustrated.html#%F0%9F%92%B5%E8%B4%A7%E5%B8%81%E7%B3%BB%E7%BB%9F"},{default:d(()=>[X]),_:1})]),w])}const P=i(m,[["render",S],["__file","Illustrated.html.vue"]]);export{P as default};
