
- [Linkis成熟度模型](maturity.md) 
- [毕业历史项目部分汇总](project-hisotry.md)

## 相关链接 

- 成功毕业指南  https://incubator.apache.org/guides/graduation.html 

- 毕业清单    https://incubator.apache.org/guides/graduation.html#graduation_check_list

- 创建一个开放和多元化的社区  https://incubator.apache.org/guides/graduation.html#creating_an_open_and_diverse_community

- 成熟度模型  http://community.apache.org/apache-way/apache-project-maturity-model.html

- 商标的使用  https://www.apache.org/foundation/marks/guide 需要注意怎么使用Apache Linkis和Linkis 

- APACHE 项目网站品牌政策 https://www.apache.org/foundation/marks/pmcs.html

- 商标QA问题  https://www.apache.org/foundation/marks/faq/#guide

- 商标站点列表 https://www.apache.org/foundation/marks/resources

- Linkis的名字申请Jira https://issues.apache.org/jira/projects/PODLINGNAMESEARCH/issues/PODLINGNAMESEARCH-192?filter=allissues

- Podling 名称搜索指南 https://incubator.apache.org/guides/names.html 

- 基础设施建设相关  https://infra.apache.org/ 

- 提交者的常见问题 https://infra.apache.org/committers.html#mail  committer 

- 贡献者CLA协议相关  https://www.apache.org/licenses/contributor-agreements.html 

- 孵化和毕业项目信息  https://incubator.apache.org/projects/#graduated

-  孵化器主页  https://incubator.apache.org/ 有相关的视频分享和ppt


## Linkis相关的链接 
- linkis-logo  https://svn.apache.org/repos/asf/comdev/project-logos/originals/
- 项目列表 https://projects.apache.org/project.html?incubator-linkis
- 维护IP Clearance https://svn.apache.org/repos/asf/incubator/public/trunk/content/ip-clearance/
- Board Reports https://whimsy.apache.org/board/minutes/Linkis.html
- Linkis的名字申请jira  https://issues.apache.org/jira/projects/PODLINGNAMESEARCH/issues/PODLINGNAMESEARCH-192?filter=allissues 
- 项目状态文件  https://incubator.apache.org/projects/linkis.html
- 官网合法性检查 https://whimsy.apache.org/pods/project/linkis
- ppmc 邮件等信息查看 https://whimsy.apache.org/roster/ppmc/linkis
- project 文件  https://svn.apache.org/repos/asf/incubator/public/trunk/content/projects/linkis.xml 
- podling 文件 https://svn.apache.org/repos/asf/incubator/public/trunk/content/podlings/linkis.yml
- clutch  https://incubator.apache.org/clutch/linkis.html




- 查看某段时间内的提交用户  
https://github.com/apache/incubator-linkis/graphs/contributors?from=2021-08-02&to=2022-07-21&type=c

- 查看某段时间内 closed的pr 
`\[Filters] is:pr is:closed closed:>2021-08-02 `
https://github.com/apache/incubator-linkis/pulls?q=is%3Apr+is%3Aclosed+closed%3A%3E2021-08-02


- 查看某段时间内  close的issue 
`\[Filters] is:pr is:closed closed:>2021-08-02 `
https://github.com/apache/incubator-linkis/issues?q=is%3Aissue+is%3Aclosed+closed%3A%3E2021-08-02


时间周期点 
![img](https://incubator.apache.org/images/graduation-timeline.png)

[毕业清单](https://incubator.apache.org/guides/graduation.html#graduation_check_list)
以下是提供概述的简短清单，不能替代阅读以下内容。

- 准备工作
    - 完成（并签署）状态文件中记录的任务
    - 确保项目名称和产品名称的合适名称
    - 展示创建 Apache 版本的能力  
    - 展示社区准备 
    - 确保导师和IPMC没有遗留问题
- 决定最终目的(顶级项目/子项目)
- 准备一份决议 （仅限顶级候选人）。
- 目标项目的子项目接受投票（仅限子项目候选人）
- 孵化器 PMC (IPMC) :
    - 对于顶级候选人，这是推荐投票
    - 对于子项目候选人，这是毕业批准投票
- 最终移交
- 考虑毕业后的任务


### 1. 当前的季度的report，阶段是否需要调整？  
看之前的毕业项目的report，有在再毕业最后一次才调整的为 Nearing graduation 
```html
 Initial setup
 Working towards first release
 Community building
 Nearing graduation
 Other:
```

 
### 2. 梳理文档等名称使用问题 

符合商标规范 https://www.apache.org/foundation/marks/guide
官网/仓库等主要位置用全名 Apache Linkis

- 整理出使用指引文档 
- 包括DSS生态中使用Linkis 也需要调整 
- 后续公众号推文等也需要注意 
 


### 3. 描述是否需要精简  
之前毕业的项目，提到了关于项目描述需要简洁明了  
```html
Linkis builds a computation middleware layer to decouple the upper applications and the underlying data engines, 
provides standardized interfaces (REST, JDBC, WebSocket etc.) to easily connect to various underlying engines (Spark, Presto, Flink, etc.), 
while enables cross engine context sharing, unified job& engine governance and orchestration.
```

Linkis 描述是否还需要精简(WebSocket/JDBC 接口 是否移除 ?)

### 4. Linkis 名字的合法性  
https://incubator.apache.org/guides/names.html 
足够独特的名称:该名称需要足够独特以避免与已经存在的软件混淆。为了使社区能够保护其在质量和开放性方面的声誉，其名称需要足够独特以具有作为商标的潜力。

https://issues.apache.org/jira/projects/PODLINGNAMESEARCH/issues/PODLINGNAMESEARCH-192?filter=allissues 
当时提到webank正在申请商标，毕业前需要转给ASF。现在申请商标被驳回，继续在当时的Jira下跟近反馈下？
重新按合法性检查 再做一次


### 5. cwiki的创建 confluence 
https://cwiki.apache.org/confluence/display/ 的创建   
有必要创建  主要同步下 记录双周例会/LKIP/ 发布流程/成熟度模型 
参考 doris https://cwiki.apache.org/confluence/display/DORIS/Home 

### 6. jira问题跟踪 
 
部分项目也未创建 如 Shenyu DolphinScheduler  
目前不一定需要
https://issues.apache.org/jira/projects/INLONG/summary


### 7. 开放和多元化的社区

如果取贡献者前30%数据，按提交数: 30人中 10人非微众 

多外部核心贡献者的提升  

```html
社区的开放性不仅仅以贡献者的数量来衡量。在邮件列表上进行公开和尊重的讨论至关重要。
必须学习在不破坏个人关系的情况下解决技术冲突的方法。学习有效地使用邮件列表非常重要。
如果可以做到这一点，那么您就证明了您是一个活跃、活跃和成功的社区。未来看起来很光明。

当项目不高度依赖任何单个贡献者（至少有 3 个合法独立的提交者并且没有对项目成功至关重要的单个公司或实体）时，
该项目被认为具有多元化的社区。基本上，这意味着当一个项目主要由一家公司的贡献者组成时，
这表明不够多样化。您可以通过向您的项目接纳更多与单个实体无关的外部贡献者来缓解此要求。
```

### 8. 前端贡献者 

目前社区除了 陆小龙 暂时无其它贡献人员 

### 9. 成熟度模型 需关注事项 

|  **ID** | **描述** | **状态** |
| -------- | ----- | ---------- |
| **LC50** |该项目清楚地定义并记录了项目产生的所有内容的版权所有权。 | |
| **CO70** |该项目力求及时回答用户的问题。 | |
| **CS30** |当讨论不足时，该项目使用记录在案的投票规则来建立共识。 | |
| **CS40** |在 Apache 项目中，否决仅对代码提交有效。根据 CS30 中定义的 Apache 投票规则，行使否决权的人必须通过技术解释来证明其合理性。 | **是** 除了代码提交之外，Apache Linkis 社区尚未使用否决权。 |
| **CS50** |所有“重要”的讨论都是在项目的主要沟通渠道上以书面形式异步进行的。影响项目的线下、面对面或私人讨论也记录在该频道上。 | 记录双周例会/LKIP/ 发布流程/ |
| **IN10** |该项目独立于任何公司或组织的影响。 |  |
| **IN20** |贡献者以他们自己的身份行事，而不是作为公司或组织的代表。 | |

### 10. linkis的 Board Reports 只被记录的4次？ 

有部分未收录显示？

https://whimsy.apache.org/board/minutes/Linkis.html


### 11. 和mentor导师咨询了解是否可以毕业 
当前存在的问题，会被挑战的点和社区需要重点关注是事项等
 
### 12. 待讨论问题 
- linkis 的 readme 中提及到WDS生态是否合规   https://github.com/apache/incubator-linkis 
- linkis 和 DSS 的关系 ？

- 邮件列表的使用，issue的使用
-  我们使用腾讯doc记录是否与Apache Way不太符合，太低的用户QA门槛,无法沉淀和过滤掉有效用户

尝试使用比较积极的方式引导用户使用邮件，仅限Linkis部分？

当前邮件发送的每日社区讨论 也主要是微众rita和andy再负责，是否需要更多的社区者参与进来 

- 引导政策？
    - 如用邮件问题 1天內回复跟进 
    - 如只是提issue 1~2天回复跟进 
    - 如果时QA文档 时效 1周
 










