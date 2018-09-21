<template>
  <div class="about-module m-intro">
    <div class="intro-box">
      <div class="tab-menu">
        <div :class="['menu-item', this.select === '渗透测试' ? 'active' : '']" @click="selectTab('渗透测试')"><div class="text">渗透测试 <span>></span></div></div>
        <div :class="['menu-item', this.select === '代码审计' ? 'active' : '']" @click="selectTab('代码审计')"><div class="text">代码审计 <span>></span></div></div>
        <div :class="['menu-item', this.select === '恶意代码分析' ? 'active' : '']" @click="selectTab('恶意代码分析')"><div class="text">恶意代码分析 <span>></span></div></div>
        <div :class="['menu-item', this.select === '安全加固' ? 'active' : '']" @click="selectTab('安全加固')"><div class="text">安全加固 <span>></span></div></div>
        <div :class="['menu-item', this.select === '风险评估' ? 'active' : '']" @click="selectTab('风险评估')"><div class="text">风险评估 <span>></span></div></div>
        <div :class="['menu-item', this.select === '分级保护咨询' ? 'active' : '']" @click="selectTab('分级保护咨询')"><div class="text">分级保护咨询 <span>></span></div></div>
        <div :class="['menu-item', this.select === '等级保护咨询' ? 'active' : '']" @click="selectTab('等级保护咨询')"><div class="text">等级保护咨询 <span>></span></div></div>
        <div :class="['menu-item', this.select === '应急响应' ? 'active' : '']" @click="selectTab('应急响应')"><div class="text">应急响应 <span>></span></div></div>
        <div :class="['menu-item', this.select === '安全值守' ? 'active' : '']" @click="selectTab('安全值守')"><div class="text">安全值守 <span>></span></div></div>
        <div :class="['menu-item', this.select === '安全培训' ? 'active' : '']" @click="selectTab('安全培训')"><div class="text">安全培训 <span>></span></div></div>
        <div :class="['menu-item', this.select === '信息安全通告' ? 'active' : '']" @click="selectTab('信息安全通告')"><div class="text">信息安全通告 <span>></span></div></div>
      </div>
      <div :class="['tab-content', 'con-stcs', this.select === '渗透测试' ? 'active' : '']">
        <p class="desc">一种利用模拟黑客攻击的方式，来评估计算机网络系统安全性能的方法。</p>
        <div class="layout-box">
          <ul class="left">
            <li>SQL注入检测项</li>
            <li>弱口令检测项</li>
            <li>XSS跨站脚本攻击检测项</li>
            <li>CSRF攻击检测项</li>
            <li>SSRF攻击检测项</li>
            <li>命令执行检测项</li>
            <li>(敏感)文件下载检测项</li>
            <li>文件包含检测项</li>
          </ul>
          <ul class="right">
            <li>文件上传检测</li>
            <li>网页编辑器检测项</li>
            <li>常规中间件检测项</li>
            <li>业务逻辑检测项</li>
            <li>XML外部实体攻击检测项</li>
            <li>webshell后门检测项</li>
            <li> 敏感信息泄露检测项</li>
            <li>数据传输方式检测项</li>
          </ul>
        </div>
        <div class="img-wrapper">
          <img src="/img/service/ser-cont.jpg" alt="">
        </div>
      </div>
      <div :class="['tab-content', 'con-dmsj', this.select === '代码审计' ? 'active' : '']">
        <p class="desc">对已完成的程序或系统进行安全性审核，挖掘程序或系统潜在的漏洞，给出相应的修复意见。</p>
        <div class="layout-box">
          <div class="left">
            <p><b>百盒测试：</b></p>
            <ul>
              <li>前后台分离的运行架构检测项</li>
              <li>认证会话与应用平台的结合检测项</li>
              <li>SQL语句的编写规范检测项</li>
              <li>WEB服务的权限配置检测项</li>
              <li>对抗爬虫引擎的处理措施检测项</li>
            </ul>
          </div>
          <div class="right">
            <p><b>黑盒测试：</b></p>
            <ul>
              <li>SQL注入检测项</li>
              <li>XSS跨站脚本攻击检测项</li>
              <li> CSRF攻击检测项</li>
              <li> SSRF攻击检测项</li>
              <li>代码执行检测项</li>
              <li>文件上传检测项</li>
              <li>(敏感)文件下载检测项</li>
              <li>文件包含检测项</li>
              <li>目录权限检测项</li>
              <li>业务逻辑检测项</li>
              <li>XML外部实体攻击检测项</li>
              <li>敏感信息泄露检测项</li>
              <li>数据传输方式检测项</li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="['tab-content', 'con-eydmfx', this.select === '恶意代码分析' ? 'active' : '']">
        <dl>
          <dt>主机层面恶意代码分析：</dt>
          <dd>针对主机系统层面开展病毒木马检测、特种木马检测、恶意行为检测、系统安全状态检测、违规策略检测等，对检测结果做深度分析。</dd>
          <dt>底层硬件恶意代码分析：</dt>
          <dd>针对主机以及服务器的底层硬件展开恶意代码的检测分析，包含针对硬盘MBR区域的检测、针对BIOS区域检测。</dd>
          <dt>网络层面恶意代码分析：</dt>
          <dd>对来往的数据包进行截获、并且分析，从而发现木马的行为，实现网络层面的恶意代码检测分析。</dd>
        </dl>
      </div>
      <div :class="['tab-content', 'con-aqjg', this.select === '安全加固' ? 'active' : '']">
        <dl class="common-dl">
          <dt><b>安全加固：</b></dt>
          <dd>安全加固服务，是指根据安全加固列表，逐一对指定目标的安全漏洞、安全配置进行修复、配置的全过程。加固项目包括但不限于系统补丁、防火墙、防病毒、危险服务、共享、自动播放、密码安全等。</dd>
          <dd>安全加固服务是保证设备和系统安全运行的关键防护措施之一，通常情况下，操作系统、数据库、中间件、网络设备、安全设备、应用系统，都需要进行安全加固。</dd>
        </dl>

        <dl class="dl2">
          <dt><b>服务特点：</b></dt>
          <dd>
            <div class="sub-title">依托前期评估结果，有针对性的加固</div>
            <p>安全加固不是一个完全独立的工作，需要依托前期进行的风险评估找出的安全漏洞，才能进行有针对性的加固，即需要先确认有什么问题，才能进行加固。</p>
          </dd>
          <dd>
            <div class="sub-title">加固类型全面</div>
            <p>针对操作系统、网络设备、安全设备，我们可以进行直接安全加固；针对数据库、中间件、应用系统，我们提出加固方法，指导系统管理员、系统开发人员完成加固。</p>
          </dd>
          <dd>
            <div class="sub-title">加固列表覆盖面广</div>
            <p>安全加固是根据事先制定好的加固列表进行，我们的安全加固列表，加固项覆盖面广，且加固项经过验证，可以有效确保加固效果。</p>
          </dd>
          <dd>
            <div class="sub-title">事后进行加固验证，确保安全到位</div>
            <p>安全加固完成后，我们会对设备和系统运行进行监控，确保安全加固不影响其正常运行。同时，对加固后的设备和系统进行漏洞检测，对加固进行有效证验证，确保安全加固效果到位。</p>
          </dd>
        </dl>
      </div>
      <div :class="['tab-content', 'con-fxpg', this.select === '风险评估' ? 'active' : '']">
        <p class="desc">风险评估是对待评估对象的信息系统的影响、威胁和脆弱性进行全方位评估，归纳并总结该系统所面临的安全风险，为后续的安全规划和建设提供决策依据。</p>
        <dl>
          <dt><b>风险评估服务包括以下主要内容：</b></dt>
          <dd>组建风险评估小组，成员包括外部评估专家、组织的信息安全负责人、IT代表、业务部门代表、管理层代表等；</dd>
          <dd>按照组织的业务运作流程来识别需要保护的信息资产，并根据估价原则对信息资产进行估价；</dd>
          <dd>弱点识别及评估，包括技术性弱点和非技术性弱点；</dd>
          <dd>对可能存在的各项威胁进行识别和评估；</dd>
          <dd>利用既定的风险评估方法，结合资产、弱点和威胁三个要素，对已识别的风险进行评估，划分风险等级；</dd>
          <dd>识别并评估当前风险控制措施的有效性；</dd>
          <dd>建议风险处理措施和优先顺序。</dd>
        </dl>
      </div>
      <div :class="['tab-content', 'con-fjbhzx', this.select === '分级保护咨询' ? 'active' : '']">
        <p><b>分级保护咨询：</b></p>
        <p class="ti2">
          根据分级保护要求和系统安全现状，构建整体安全体系架构，提供完整生命周期内的安全体系建设咨询和整体方案设计，并完成产品安装部署、管理策略设计、安全加固整改等集成实施工作。
        </p>
      </div>
      <div :class="['tab-content', 'con-fjbhzx', this.select === '等级保护咨询' ? 'active' : '']">
        <p><b>等级保护咨询：</b></p>
        <p class="ti2">
          安全评估：在安全风险管理基础上，利用风险评估方法，全面掌握企业系统安全现状和安全需求，为企业等级保护安全规划提供安全建设决策依据。
        </p>
        <p class="ti2">
          安全规划：依据国家等级保护政策，为企业制定等级保护信息安全规划，构建等级化信息安全保障体系。
        </p>
        <p class="ti2">
          安全建设：协助企业完成信息系统等级保护信息安全集成建设，如：安全措施选择、部署和配置等安全集成工作。
        </p>
        <p class="ti2">
          安全测评：依据企业信息系统定级备案的安全级别，遵循等级保护测评标准，检测企业信息系统安全防护是否达到了国家等级保护要求，并提出信息安全建设整改指导建议。
        </p>
        <div class="img-wrapper">
          <img src="/img/service/ser_dengbao.jpg" alt="">
        </div>
      </div>
      <div :class="['tab-content', 'con-yjxy', this.select === '应急响应' ? 'active' : '']">
        <p class="ti2 mb-15">应急响应服务是为满足企业发生安全事件、需要紧急解决问题的情况下提供的一项安全服务。当企业发生黑客入侵、系统崩溃或其它影响业务正常运行的安全事件时，网思科平安全专家会在第一时间赶到事件现场， 使企业的网络信息系统在最短时间内恢复正常工作，帮助企业查找入侵来源，给出入侵事故过程报告，同时给出解决方案与防范报告，为亚企业挽回或减少经济损失。</p>
        <dl>
          <dt class="mb-10"><b>应急响应服务主要解决以下问题：</b></dt>
          <dd class="ti2">及时解决安全故障，修复系统，使企业网络和信息服务恢复正常运行，尽可能挽回或减少损失； 对安全故障发生的系统作安全检查和清理，保证信息系统安全；</dd>
          <dd class="ti2">弥补安全故障发生系统上的安全漏洞，加强安全保护措施，防止类似事件的再次发生； 收集由于安全故障造成的入侵记录、破坏情况、直接损失情况等证据；</dd>
          <dd class="ti2">获得服务结果报告，内容包括在应急响应服务中的所遇到的安全问题、安全事故处理过程、处理结果。 针对在应急响应服务的所遇到的安全问题、安全事故处理过程、处理结果，48小时汇总形成应急响应服务结果报告，提交给企业。我们承诺针对企业的应急响应：在半小时内响应，在2小时内到达现场，并在4小时候内使安全事件的事态得到控制，给出相应的解决方案。</dd>
        </dl>
        <p class="mb-20"><b>我们的应急响应服务主要对如下安全事件做出响应：</b></p>
        <div class="layout-box">
          <ul class="left">
            <li>计算机病毒事件</li>
            <li>蠕虫病毒事件</li>
            <li>特洛伊木马事件</li>
            <li>网页内嵌恶意代码事件</li>
            <li>拒绝服务攻击事件</li>
            <li>后门攻击事件</li>
          </ul>
          <ul class="right">
            <li>漏洞攻击事件</li>
            <li>网络扫描窃听事件</li>
            <li>信息篡改事件</li>
            <li>信息假冒事件</li>
            <li>信息窃取事件</li>
          </ul>
        </div>
      </div>
      <div :class="['tab-content', 'con-aqzs', this.select === '安全值守' ? 'active' : '']">
        <dl>
          <dt class="mb-10"><b>现场职守：</b></dt>
          <dd>应对客户需求，通过定期上门对客户的网络安全设备、应用系统、网络通信进行巡检。尽早发现潜在的安全隐患，并根据当前的状态和存在的问题，给出整改的建议。确保应用系统、网络安全设备正常运转。</dd>
          <dt class="mb-10"><b>远程值守：</b></dt>
          <dd>通过在线咨询、邮件、电话等方式，7＊24小时实时的对客户当前的网络安全设备，应用系统，网络通信等进行远程监控与值守，在客户网络发生重要的安全事件时主动发出预警通知，并提供专业的防护建议或解决方案。</dd>
        </dl>
      </div>
      <div :class="['tab-content', 'con-aqpx', this.select === '安全培训' ? 'active' : '']">
        <dl>
          <dt class="mb-10"><b>针对特定行业的培训：</b></dt>
          <dd>培训对象：运营商、金融、能源、电力、烟草、医疗、教育等行业信息科技部门负责人、安全主管，安全技术负责人等。</dd>
          <dd>培训目标：解析与当前安全形势相匹配的行业安全解决方案，协助客户切实改善风险管理水平，抑制安全事件发生，提升客户安全和风险治理水准；掌握信息安全现状，基于行业常见业务场景了解信息安全风险管理手段，并具备一定威胁和脆弱性消除能力。</dd>
          <dd>课程范围：行业整体安全形势、行业建设整体思路、行业安全建设实例分析、行业关注的技术与研究。</dd>
          <dt class="mb-10"><b>安全管理培训：</b></dt>
          <dd>培训对象：涉及到安全规划、安全建设方案，从事信息安全工作的各行业初、中级安全技术、管理与运维人员。</dd>
          <dd>培训目标：提升参培人员的安全意识、安全管理知识水平、安全管理操作能力，增广信息安全的视野，提高本职工作中信息安全管理各项工作的实际操作水平。</dd>
          <dd>课程范围：信息安全标准、等级保护建设、信息安全评估、安全管理体系</dd>
          <dt class="mb-10"><b>安全技术培训：</b></dt>
          <dd>培训对象：各企业和机构技术管理人员、技术骨干和从事安全技术工作的新晋员工。</dd>
          <dd>培训目标：理论讲解、讲师演示，结合学员实际操练，加强学员对安全的技术的认识，能够进行基本的安全加固、渗透测试和攻防演练等，在攻与防的对立统一中寻求突破。</dd>
          <dd>课程范围：检查与加固、渗透测试、应急响应、代码审计、手机和移动应用、逆向分析、漏洞挖掘等。</dd>
        </dl>
      </div>
      <div :class="['tab-content', 'con-xxaqtg', this.select === '信息安全通告' ? 'active' : '']">
        <dl>
          <dt class="mb-10"><b>短信预警：</b></dt>
          <dd>重要安全漏洞、重大病毒短信通报，确保及时防范。</dd>
          <dt class="mb-10"><b>邮件预警：</b></dt>
          <dd>内容包括病毒威胁与最新漏洞、需重点关注的病毒与被挂马网站、业内新闻与安全动态、产品使用技巧与信息安全技术等内容。</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: '渗透测试'
    }
  },
  methods: {
    selectTab(name) {
      this.select = name
    }
  }
}
</script>

<style lang="stylus">
.ti2
  text-indent 2em
.mb-10
  margin-bottom 10px
.mb-15
  margin-bottom 15px
.mb-20
  margin-bottom 20px
.mb-30
  margin-bottom 30px
</style>

<style lang="stylus" scoped>
.intro-box
  max-width 1100px
  display flex
  justify-content center
  margin 50px auto
  padding 0 50px
  .tab-menu
    width 240px
    margin 40px auto
    padding 10px 0px 20px 0px
    border 1px solid #eee
    border-radius 4px
    box-shadow 0px 4px 6px rgba(0, 0, 0, 0.15)

    .menu-item
      font-size 14px
      font-weight 300
      position relative
      height 40px
      line-height 40px
      margin-top 10px
      overflow hidden
      width 90%
      padding-left 30px
      margin-left 5%
      cursor pointer
      .text
        text-shadow 0px -40px 0px rgba(0, 0, 0, 1)
        transition all 0.75s
        transform translateY(100%) translateZ(0)
        transition-delay all 0.25s

      &::after
        content  ''
        position absolute
        width 80%
        border-bottom 1px solid rgba(0, 120, 250, 0.5)
        bottom 50%
        left -100%
        transition-delay all 0.5s
        transition all 0.5s

    .menu-item:hover::after,
    .menu-item.active::after
      left 100%


    .menu-item:hover .text,
    .menu-item.active .text
      text-shadow 0px -40px 0px rgba(255, 255, 255, 0)
      transform translateY(0%) translateZ(0) scale(1.1)
      color #0077fb

  .tab-content
    width calc(100% - 270px)
    padding 50px 10% 20px
    font-size 14px
    display none
    &.active
      display block
    .desc
      margin-bottom 20px
    .img-wrapper
      margin-top 50px
      text-align center
      img
        max-width 100%
    dt
    margin-bottom 15px
    dd
      margin-bottom 10px
      line-height 1.5
    li
      margin-bottom 15px

.con-stcs
  .layout-box
    display flex
    justify-content center
  ul
    width 50%
    margin 0 2.5%
    li
      &::before
        content ''
        width 8px
        height 8px
        background-color #aaa
        border-radius 50%
        display inline-block
        margin-right 15px
        transform translateY(-2px)

.con-dmsj
  p
    margin-bottom 20px
  .layout-box
    display flex
    justify-content center
    .left, .right
      width 50%
      margin 0 2.5%
      ul
        li
          &::before
            content ''
            width 8px
            height 8px
            background-color #aaa
            border-radius 50%
            display inline-block
            margin-right 15px
            transform translateY(-2px)

.con-eydmfx
  dl
    dd
      margin-bottom 20px
      text-indent 2em
      text-align justify

.con-aqjg
  dl
    margin-bottom 30px
  .common-dl
    dd
      text-indent 2em
  .dl2
    dd
      .sub-title
        margin-bottom 5px
        &::before
          content ''
          width 6px
          height 6px
          background-color #777
          border-radius 50%
          display inline-block
          margin-right 8px
          transform translateY(-2px)

.con-fxpg
  .desc
    text-indent 2em
  dd
    &::before
      content ''
      width 6px
      height 6px
      background-color #777
      border-radius 50%
      display inline-block
      margin-right 8px
      transform translateY(-2px)

.con-fjbhzx
  p
    margin-bottom 15px

.con-yjxy
  .layout-box
    display flex
    justify-content center
  ul
    width 50%
    margin 0 2.5%
    li
      &::before
        content ''
        width 8px
        height 8px
        background-color #aaa
        border-radius 50%
        display inline-block
        margin-right 15px
        transform translateY(-2px)

.con-aqzs
  dl
    dd
      margin-bottom 20px
      text-indent 2em
      text-align justify

</style>
