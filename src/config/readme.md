相关配置文件

文章列表 articleList

```js
{
  id: String,           // art加时间加2位编号 如：art2018100101
  title: String,        // 标题
  date: String,         // 发布日期
  description: String,  // 描述信息，在研究页显示
  content: String       // 具体文章内容，需提供html 模板会解析转义
}
```

招聘信息 jobs

```js
{
  id: String,
  job: String,
  href: String,
  require1: Array,
  require2: Array
  // 例如: 有特殊格式需求的 可以直接写 html 会转义解析
  // require1: [
  //   '参与产品需求讨论、计划评审，理解产品设计与功能范围；',
  //   '根据需求及产品设计编写、维护测试用例；',
  //   '负责自动化测试脚本开发与维护；',
  //   '负责具体的测试工作，提交测试BUG，进行BUG跟踪和回归测试。',
  //   'WINDOWS：<p>1.	2年以上WINDOWS平台驱动研发经验；</p><p>2.	熟悉WINDOWS内核，有关WINDOWS平台安全产品研发经验者优先；</p><p>3.	精通C/C++研发，熟悉WDM/WDK以及原理；</p><p>4.	熟练使用windbg等调试工具。</p>',
  // ]
}
```
