(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{709:function(n,e,r){n.exports=r.p+"assets/img/20200101.72df3d81.jpg"},741:function(n,e,r){"use strict";r.r(e);var t=r(5),a=Object(t.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("软件开发的设计模式开始")]),n._v(" "),t("h2",{attrs:{id:"什么是简单工厂"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是简单工厂"}},[n._v("#")]),n._v(" 什么是简单工厂？")]),n._v(" "),t("p",[n._v("简单工厂模式（Simple Factory Pattern）是一种创建型设计模式，它提供了一种简单的方法来创建对象，而不需要直接暴露对象的创建逻辑给客户端。")]),n._v(" "),t("h2",{attrs:{id:"uml-类图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uml-类图"}},[n._v("#")]),n._v(" UML 类图")]),n._v(" "),t("p",[n._v("以计算器为例子，拥有加减乘除功能，画出类图：")]),n._v(" "),t("img",{attrs:{src:r(709),width:"80%"}}),n._v(" "),t("h2",{attrs:{id:"具体示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体示例"}},[n._v("#")]),n._v(" 具体示例")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v('// 运算符接口\nprotocol Operation {\n    var numberA: Double { set get }\n    var numberB: Double { setget }\n    func calculate() -> Double\n}\n\n// 加法运算类\nstruct OperationAdd: Operation {\n    var numberA: Double = 0.0\n    var numberB: Double = 0.0\n    func calculate() -> Double {\n        return numberA + numberB\n    }\n}\n\n// 减法运算类\nstruct OperationSub: Operation {\n    var numberA: Double = 0.0\n    var numberB: Double = 0.0\n    func calculate() -> Double {\n        return numberA - numberB\n    }\n}\n\n// 乘法运算类\nstruct OperationMul: Operation {\n    var numberA: Double = 0.0\n    var numberB: Double = 0.0\n    func calculate() -> Double {\n        return numberA * numberB\n    }\n}\n\n// 除法运算类\nstruct OperationDiv: Operation {\n    var numberA: Double = 0.0\n    var numberB: Double = 0.0\n    func calculate() -> Double {\n        if numberB != 0 {\n            return numberA / numberB\n        }\n    return 0\n    }\n}\n\n// 简单工厂类\nclass OperationFactory {\n    static func createOperate(_ operate: String) -> Operation? {\n        switch operate {\n            case "+":\n                return OperationAdd()\n            case "-":\n                return OperationSub()\n            case** "*":\n                return OperationMul()\n            case "/":\n            return OperationDiv()\n            default: return nil\n        }\n    }\n}\n\n// 客户端调用\n// 加法运算\nvar addOperation = OperationFactory.createOperate("+")\naddOperation?.numberA = 1\naddOperation?.numberB = 2\naddOperation?.calculate()\n\n// 减法运算\nvar subOperation = OperationFactory.createOperate("-")\nsubOperation?.numberA = 1\nsubOperation?.numberB = 2\nsubOperation?.calculate()\n\n// 乘法运算\nvar mulOperation = OperationFactory.createOperate("*")\nmulOperation?.numberA = 1\nmulOperation?.numberB = 2\nmulOperation?.calculate()\n\n// 除法运算\nvar divOperation = OperationFactory.createOperate("/")\ndivOperation?.numberA = 1\ndivOperation?.numberB = 2\ndivOperation?.calculate()\n')])])]),t("h2",{attrs:{id:"简单工厂方法总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂方法总结"}},[n._v("#")]),n._v(" 简单工厂方法总结")]),n._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[n._v("#")]),n._v(" 优点:")]),n._v(" "),t("ul",[t("li",[n._v("将对象的创建逻辑集中在工厂类中，降低了客户端的复杂度。")]),n._v(" "),t("li",[n._v("隐藏了创建对象的细节，客户端只需要关心需要创建何种对象，无需关心对象是如何创建的。")]),n._v(" "),t("li",[n._v("可以通过修改工厂类来轻松添加新的产品类")])]),n._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[n._v("#")]),n._v(" 缺点：")]),n._v(" "),t("ul",[t("li",[n._v("如果产品的类太多，会导致工厂类中的代码变得很复杂，难以维护。")]),n._v(" "),t("li",[n._v("添加新产品时，需要修改工厂类，也就是会在OperationFactory类中新增case语句，这违背了开闭原则。")])]),n._v(" "),t("p",[n._v("总体而言，简单工厂模式适用于创建对象的逻辑相对简单，且产品类的数量较少的场景。对于更复杂的对象创建和对象之间的依赖关系，可以考虑使用其他创建型设计模式，如工厂方法模式或抽象工厂模式。")]),n._v(" "),t("p",[t("RouterLink",{attrs:{to:"/handbook/iOS/2020/设计模式/20200201/20200201.html"}},[n._v("工厂方法")])],1)])}),[],!1,null,null,null);e.default=a.exports}}]);