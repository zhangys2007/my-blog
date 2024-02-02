(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{711:function(r,a,n){r.exports=n.p+"assets/img/20200401.66400df7.jpg"},743:function(r,a,n){"use strict";n.r(a);var e=n(5),t=Object(e.a)({},(function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("p",[e("RouterLink",{attrs:{to:"/handbook/iOS/2020/设计模式/20200301/20200301.html"}},[r._v("抽象工厂模式")])],1),r._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[r._v("#")]),r._v(" 背景")]),r._v(" "),e("p",[r._v("假设有一个需求：需要生产一辆汽车，汽车需要引擎、车轮、方向盘、车身等，不同品牌的汽车引擎、车轮等各不相同。现在，用户需要一辆宝马汽车，可能代码会这样写：")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v('struct Car {\n    var parts = [String]()\n    mutating func add(part: String) {\n        parts.append(part)\n    }\n}\n\nclass BWMCarBuilder {\n    func build() -> Car {\n        var car = Car()\n        car.add(part: "宝马引擎")\n        car.add(part: "宝马车轮")\n        car.add(part: "宝马方向盘")\n        car.add(part: "宝马车身")\n        return car\n    }\n}\n')])])]),e("p",[r._v("那如果用户需要购买一台奔驰汽车，那我们可以再新建一个BenchiBuilder,来创建汽车:")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v('BenchiBuilder {\n    func build() -> Car {\n        var car = Car()\n        car.add(part: "奔驰引擎")\n        car.add(part: "奔驰车轮")\n        car.add(part: "奔驰方向盘")\n        car.add(part: "奔驰车身")\n        return car\n    }\n}\n')])])]),e("p",[r._v("目前，已经可以得到宝马和奔驰汽车，但是这里面有个问题，可能会存在编程不注意，汽车会少添加一个部分，比如忘记添加引擎或车身等。最好的办法就是，凡是制造汽车，都必须要有引擎、车轮、方向盘及车身。")]),r._v(" "),e("h2",{attrs:{id:"建造者模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建造者模式"}},[r._v("#")]),r._v(" 建造者模式")]),r._v(" "),e("p",[r._v("上述的问题我们可以通过建造者模式来优化。制造汽车的过程是稳定的，都需要引擎、车轮、方向盘及车身，只是具体的制造细节不同。但对于用户来说，只需要告诉制造商，我需要一辆宝马，制造商只需要给一辆宝马就行了，用户不关心制造车的具体过程以及细节。如果需要将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示的意图时，就可以使用‘建造者模式’，又可以叫‘生成器模式’。使用了建造者模式，用户只需要指定建造的类型就可以得到想要的产品，而具体的建造过程和细节不需要知道。")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("建造者模式：将一个复杂对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示。\n")])])]),e("h2",{attrs:{id:"主要角色与关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要角色与关系"}},[r._v("#")]),r._v(" 主要角色与关系")]),r._v(" "),e("ul",[e("li",[r._v("Builder：创建一个Product对象的各个部件指定的抽象接口")]),r._v(" "),e("li",[r._v("ConcreteBuilder：具体建造者，实现了Builder接口，构造和装配各个部件")]),r._v(" "),e("li",[r._v("Director：指挥建造过程")]),r._v(" "),e("li",[r._v("Product：产品角色")])]),r._v(" "),e("h2",{attrs:{id:"uml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uml"}},[r._v("#")]),r._v(" UML")]),r._v(" "),e("img",{attrs:{src:n(711),width:"80%"}}),r._v(" "),e("h2",{attrs:{id:"举例说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#举例说明"}},[r._v("#")]),r._v(" 举例说明")]),r._v(" "),e("p",[r._v("还是以制造汽车为例，下面以建造者模式来改造代码。")]),r._v(" "),e("ol",[e("li",[e("p",[r._v("产品（这里就是汽车）")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v(' struct Car: CustomStringConvertible {\n     var parts = [String]()\n     mutating func add(part: String) {\n         parts.append(part)\n     }\n\n     var description: String {\n         var res = "汽车的组成部件："\n         parts.forEach { part in\n             res += part + "、"\n         }\n         return res\n     }\n }\n')])])])]),r._v(" "),e("li",[e("p",[r._v("抽象建造者（构造一个汽车必须要有引擎、车轮、方向盘、车身）")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v(" protocol Builder {\n     var car: Car { set get }\n     func buildEngine()\n     func buildWheel()\n     func buildSteeringWheel()\n     func buildBody()\n }\n")])])])]),r._v(" "),e("li",[e("p",[r._v("具体建造者（宝马建造者和奔驰建造者，都实现了Builder的接口）")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v(' class BWMBuilder: Builder {\n     var car: Car = Car()\n     func buildEngine() {\n         car.add(part: "宝马引擎")\n     }\n\n     func buildWheel() {\n         car.add(part: "宝马车轮")\n     }\n\n     func buildSteeringWheel() {\n         car.add(part: "宝马方向盘")\n     }\n     \n     func buildBody() {\n         car.add(part: "宝马车身")\n     }\n }\n\n class BenchiBuilder: Builder {\n\n     var car: Car = Car()\n\n     func buildEngine() {\n         car.add(part: "奔驰引擎")\n     }\n         \n         func buildWheel() {\n             car.add(part: "奔驰车轮")\n         }\n             \n         func buildSteeringWheel() {\n             car.add(part: "奔驰方向盘")\n         }\n             \n         func buildBody() {\n             car.add(part: "奔驰车身")\n         }\n\n }\n')])])])])]),r._v(" "),e("h2",{attrs:{id:"指挥者-director"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指挥者-director"}},[r._v("#")]),r._v(" 指挥者（Director）")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("    class Director {\n        func construct(builder: Builder) {\n            builder.buildEngine()\n            builder.buildWheel()\n            builder.buildSteeringWheel()\n            builder.buildBody()\n        }\n    }\n")])])]),e("p",[r._v("假如没有Director这一层,那么外部调用就必须要知道Builder有哪些方法。Director作用：控制建造过程，用来隔离用户与建造过程的关联")]),r._v(" "),e("h2",{attrs:{id:"客户端调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端调用"}},[r._v("#")]),r._v(" 客户端调用")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("    testBuilderClient() {\n        let director = Director()\n        let bwmBuilder = BWMBuilder()\n        director.construct(builder: bwmBuilder)\n        let bwmCar = bwmBuilder.car\n        print(bwmCar) // 汽车的组成部件：宝马引擎、宝马车轮、宝马方向盘、宝马车身、\n        let benchiBuilder = BenchiBuilder()\n        director.construct(builder: benchiBuilder)\n        let benchiCar = benchiBuilder.car\n        print(benchiCar) // 汽车的组成部件：奔驰引擎、奔驰车轮、奔驰方向盘、奔驰车身、\n    }\n")])])]),e("h2",{attrs:{id:"客户端调用-不使用director"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端调用-不使用director"}},[r._v("#")]),r._v(" 客户端调用（不使用Director）")]),r._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[r._v("    func testBuilderClient() {\n        let bmwBuilder = BWMBuilder()\n        bmwBuilder.buildEngine()\n        bmwBuilder.buildWheel()\n        bmwBuilder.buildSteeringWheel()\n        bmwBuilder.buildBody()\n        let bwmCar = bmwBuilder.car\n        print(bwmCar)\n\n        let benchiBuilder = BenchiBuilder()\n        benchiBuilder.buildEngine()\n        benchiBuilder.buildWheel()\n        benchiBuilder.buildSteeringWheel()\n        benchiBuilder.buildBody()\n        let benchiCar = benchiBuilder.car\n        print(benchiCar)\n    }\n")])])]),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[r._v("#")]),r._v(" 总结")]),r._v(" "),e("h3",{attrs:{id:"优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[r._v("#")]),r._v(" 优点：")]),r._v(" "),e("p",[r._v("建造者模式，使得建造代码与表示代码分离，由于隐藏了该产品是如何组装的，所以如果需要改变一个产品的内部表示，只需要再定义一个具体的建造者就可以了。\n将复杂产品的创建步骤分解在不同的方法中，使得创建过程更加清晰，也更方便使用程序来控制创建过程。\n增加新的建造者无需修改原有类的代码，指挥者针对抽象建造者编程，扩展方便，复合‘开闭原则’。")]),r._v(" "),e("h3",{attrs:{id:"缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[r._v("#")]),r._v(" 缺点")]),r._v(" "),e("p",[r._v("建造者模式创建的产品一般都是具有较多的共同点，组成部分都很相似，如果产品的组成部分差距过多，则不适合使用建造者。\n如果产品相当复杂，比如组成部分有很多，则Builder类中就需要抽取更多的代码，以及可能会产生很多具体的Buidler类，使得类文件较多。")]),r._v(" "),e("h2",{attrs:{id:"end"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[r._v("#")]),r._v(" END")]),r._v(" "),e("p",[e("RouterLink",{attrs:{to:"/handbook/iOS/2020/设计模式/20200501/20200501.html"}},[r._v("责任链模式")])],1)])}),[],!1,null,null,null);a.default=t.exports}}]);