

### 账户与计划

如果项目和账户是一个量级的，那么账户之间的关系可能不是树形。
但计划跟账户可能存在总和的关系，比如我工资收入（作为一个项目）跟工资卡的关系。

我一个旅行项目跟工资卡的关系，旅行项目（计划）的金额是在工资卡里面的。但我要随时关注这两个分别有多少钱。

**结果**

（上面的问题已解答。👆）

Project与Account没有直接关系。由“钱财”进行间接对应。比如所有project的数目总和是否应该等于所有“账户”？ 如果这样，账户就没有虚拟的了，虚拟账户的职责由project来承担了。

工资卡的例子，工资项目与工资卡关系不大，只不过项目有个“存钱处”是工资卡。

```mermaid

flowchart TB
    A[Account] --*--> R[Record]
    P["Project?"] --*--> R[Record] ---> Value
```

```mermaid
flowchart TB
    A[Account] --- B[物理] ---比如一个银行卡
    A --- d[默认账户/总账户]
    A --- X["存疑，可能也有虚拟账户？"]

    P[Project] --- C[逻辑]
    C --- p["比如一个计划"]
    P --- 总项目/整个生活
```


### 记录的多种形式

对应于用户的输入形式，也就是用户记录时所具备的信息/知识。
Project和Account都有一个最大默认值，类似于universal。所以输入时不需要清楚。这个是产品价值观确定的。
Adjust是对输入的调整。但不会覆盖输入。

```mermaid
    flowchart TB
    R[Record] --- SeqRecord
    R --- PointRecord

    AM[Amount] --->V
    AM --- DiffAmount

    AM --- SumAmount

    V[Value] --- ExtraValue
    V--- NEValue

    R ---> AM

```

### 调整
Adjust是对输入的调整。但不会覆盖输入。
//TODO 可能每种record都有对应的调整。包括每种金额，每种值。

```mermaid
    flowchart TB
A[Adjust] --- 归类
A --- 信息更明确
A --- 预测更精准
A --- F["反思？"]

A --应用于--> Record
```

### View
view就是一些Record（及其调整）的集合，由此计算的币值时间轴。

```mermaid
flowchart TB
    subgraph a
        View --"（查找）"--> Record
    end
    subgraph b
        BV[View] --time--> Value
    end

    a -- 计算 --> b
```
##### view的use case
view的最重要case就是：我的钱够不够(用于xxx)。就是ProjectView。这是产品价值观的规定。
TODO， 但这个问题往往不是单一的project，我的钱够不够是指我的钱够不够用于一切（已计划）的。那么应该是从UniversalProject来看？
“总的来看，我的钱是负数么？/会变成负数么？”

```mermaid
flowchart TB
    View --- ProjectView
    View --- AccountView
    View --- AnyOtherView
```
