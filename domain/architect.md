# 架构设计

主体采用 Clean Architecture。

```plantuml
package "entities circle" as el{
class Entities
}
package "usecases circle" as ul{
class Usecases
}
package adaptors as "adaptor circle"{
class DB
class Serialize
class AppServer
class VOs
}
el <--> ul
ul <--> adaptors
```

借用 DDD 常见模式。Aggregate\Repository\Factory 等术语也遵照 DDD 约定。
App 是个单例，主要职责是完成 Ioc，对各种部件进行装配。

```plantuml


App --> Repository
App--> Factory

Factory ..> Aggregate

Repository ..> Aggregate



```
```plantuml


Repository <|-- Projects
Repository <|-- Accounts
Repository <|-- Records

Aggregate <|-- Record
Aggregate <|-- Project
Aggregate <|-- Account



```

View 是主要 use case 的承载部件。对数据的观察逻辑（本领域的核心能力）由这些组件承担。View 对记录进行筛选和处理，形成时间线，供展示和分析。

```plantuml
Views ..> View
View ..>"数据来源于" Record
View <|-- ProjectView
ProjectView --> Project

TimeLine --> Point
View ..>"生成" TimeLine
```
