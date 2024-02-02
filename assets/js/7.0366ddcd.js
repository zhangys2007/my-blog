(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{717:function(t,a,e){t.exports=e.p+"assets/img/2020100101.0dd25f0f.png"},718:function(t,a,e){t.exports=e.p+"assets/img/2020100102.3494cb9f.jpg"},719:function(t,a,e){t.exports=e.p+"assets/img/2020100103.96c7bb7b.jpg"},720:function(t,a,e){t.exports=e.p+"assets/img/2020100104.6c9d4326.jpg"},721:function(t,a,e){t.exports=e.p+"assets/img/2020100105.5ffd6e58.jpg"},722:function(t,a,e){t.exports=e.p+"assets/img/2020100106.613542d2.jpg"},723:function(t,a,e){t.exports=e.p+"assets/img/2020100107.9c6a1408.jpg"},724:function(t,a,e){t.exports=e.p+"assets/img/2020100108.96f96571.jpg"},747:function(t,a,e){"use strict";e.r(a);var n=e(5),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("RouterLink",{attrs:{to:"/handbook/iOS/2020/设计模式/20200701/20200701.html"}},[t._v("命令模式、中介者模式以及组合模式")])],1),t._v(" "),n("p",[t._v("单例在不同的语言中实现方式可能不一定完全相同，但其宗旨应该是一样的:单例类在整个程序运行期间有且仅有一个实例；所以,在开发过程中，根据需求合理使用单例类；")]),t._v(" "),n("h2",{attrs:{id:"单例的优缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例的优缺点"}},[t._v("#")]),t._v(" 单例的优缺点")]),t._v(" "),n("h3",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),n("ul",[n("li",[t._v("一个类只被实例化一次，提供了对唯一实例的受控访问")]),t._v(" "),n("li",[t._v("节省系统资源")]),t._v(" "),n("li",[t._v("允许可变数目的实例")])]),t._v(" "),n("p",[t._v("因为其上面的特点,对于项目中的个别场景的传值,存储状态等等更加方便")]),t._v(" "),n("h3",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),n("ul",[n("li",[t._v("一个类只有一个对象，可能造成责任过重，在一定程度上违背了单一职责原则")]),t._v(" "),n("li",[t._v("由于单例模式中没有抽象层，因此单例类的扩展有很大困难")]),t._v(" "),n("li",[t._v("滥用单例将带来一些负面问题，如：为了节省资源将数据库连接池对象设计为单例类，可能会导致共享连接池对象的程序过多而出现连接池溢出；如果实例化的对象长时间不被利用，系统会认为是垃圾而被回收，这将导致对象状态的丢失")]),t._v(" "),n("li",[t._v("单例实例一旦创建,对象指针是保存在静态区的,那么在堆区分配空间只有在应用程序终止后才会被释放")])]),t._v(" "),n("h2",{attrs:{id:"单例的实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例的实现"}},[t._v("#")]),t._v(" 单例的实现")]),t._v(" "),n("h3",{attrs:{id:"objective-c"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective-c"}},[t._v("#")]),t._v(" Objective-C")]),t._v(" "),n("h4",{attrs:{id:"第一种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一种方式"}},[t._v("#")]),t._v(" 第一种方式")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("创建单例类")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  + (instancetype)shareInstance { \n      static AppManager *instance = nil ; \n      static dispatch_once_t onceToken; \n      dispatch_once(&onceToken, ^{ \n          if (instance == nil) { \n              instance = [[AppManager alloc] init]; \n          } \n      }); \n      return instance; \n  }\n")])])])]),t._v(" "),n("li",[n("p",[t._v("防止alloc，init，new引起的错误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  // 防止外部调用alloc 或者 new\n  + (instancetype)allocWithZone:(struct _NSZone *)zone {\n      return [AppManager shareInstance];\n  }\n")])])])]),t._v(" "),n("li",[n("p",[t._v("防止NSCopying引起的错误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  // 防止外部调用copy\n  - (id)copyWithZone:(nullable NSZone *)zone {\n      return [AppManager shareInstance];\n  }\n")])])])]),t._v(" "),n("li",[n("p",[t._v("防止mutableCopy引起的错误")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("  // 防止外部调用mutableCopy\n  - (id)mutableCopyWithZone:(nullable NSZone *)zone {\n      return [AppManager shareInstance];\n  }\n")])])])])]),t._v(" "),n("h4",{attrs:{id:"第二种方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二种方式"}},[t._v("#")]),t._v(" 第二种方式")]),t._v(" "),n("p",[t._v("创建之后，我们直接禁止外部使用init，new等操作;\n我们在单例的.h文件中添加一下代码：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    - (instancetype)init NS_UNAVAILABLE;\n    + (instancetype)new NS_UNAVAILABLE;\n    - (id)copy NS_UNAVAILABLE; // 没有遵循协议可以不写\n    - (id)mutableCopy NS_UNAVAILABLE; // 没有遵循协议可以不写\n")])])]),n("h3",{attrs:{id:"swift"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#swift"}},[t._v("#")]),t._v(" Swift")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("    class AppManager: NSObject {\n        static let sharedInstance = AppManager()\n        // 私有化构造方法，防止其他对象使用这个类的默认方法‘()’来进行初始化\n        private override init() {}\n    }\n")])])]),n("h3",{attrs:{id:"注意事项"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),n("ul",[n("li",[t._v("单例必须是唯一的，所以它才被称为单例。在一个应用程序的生命周期里，有且只有一个实例存在。单例的存在给我们提供了一个唯一的全局状态。比如NSNotificaton,Application,NSuserDefault都是单例.")]),t._v(" "),n("li",[t._v("为了保持一个单例的唯一性，单例的构造器必须是私有的。这防止其他对象也能创建出单例类的实例。")]),t._v(" "),n("li",[t._v("为了确保单例在应用程序的整个生命周期是唯一的，它就必须是线程安全的。简单来说，如果你写单例的方式是错误的，就有可能会有两个线程尝试在同一时间初始化同一个单例，这样就有潜在的风险得到两个不同额单例。这就意味着我们需要用到GCD的dispatch_once来确保初始化单例的代码在运行时只执行一次。")])]),t._v(" "),n("p",[t._v("那么为什么用Swift创建的单例没有看到dispatch_once呢？\n根据官方文档中的说明：")]),t._v(" "),n("img",{attrs:{src:e(717),width:"100%"}}),t._v(" "),n("p",[t._v("全局变量的延迟构造器(也适用于结构和枚举的静态成员)在第一次访问全局变量时运行，并作为dispatch_once启动，以确保初始化是原子的。这使得在代码中使用dispatch_once有了一个很酷的方法:只要声明一个带有初始化式的全局变量并将其标记为private即可。")]),t._v(" "),n("h2",{attrs:{id:"单例dispatch-once的底层原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例dispatch-once的底层原理"}},[t._v("#")]),t._v(" 单例dispatch_once的底层原理")]),t._v(" "),n("p",[t._v("我们经常写单例的实现时，经常会这么写：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("+ (instancetype)shareInstance {\n    static XXXXX *instance = nil ;\n    static dispatch_once_t onceToken;\n    dispatch_once(&onceToken, ^{\n        if (instance == nil) {\n            instance = [[XXXXX alloc] init];\n        }\n    });\n    return instance;\n}\n")])])]),n("p",[t._v("那么dispatch_once是如何实现的呢？我们来看一下：")]),t._v(" "),n("img",{attrs:{src:e(718),width:"100%"}}),t._v(" "),n("p",[t._v("我们发现dispatch_once就是通过dispatch_once_f这个函数来实现单例类的；")]),t._v(" "),n("ul",[n("li",[t._v("val就是&onceToken，也就是全局静态变量;(作为条件控制来使用)")]),t._v(" "),n("li",[t._v("block是要执行的任务；")]),t._v(" "),n("li",[t._v("_dispatch_Block_invoke(block)是对任务的封装；")])]),t._v(" "),n("p",[t._v("接下来，我们来看一下dispatch_once_f的具体实现:")]),t._v(" "),n("img",{attrs:{src:e(719),width:"100%"}}),t._v(" "),n("ul",[n("li",[t._v("dispatch_once_gate_t：将val封装成一个开关，进行强制类型转换为l；")]),t._v(" "),n("li",[t._v("_dispatch_once_gate_tryenter(l)：我们第一次创建时，将会执行至此；")])]),t._v(" "),n("p",[t._v("进入_dispatch_once_gate_tryenter函数内部：")]),t._v(" "),n("img",{attrs:{src:e(720),width:"100%"}}),t._v(" "),n("ul",[n("li",[t._v("os_atomic_cmpxchg进行原子操作，进行锁的处理，说明其实有线程控制的;")]),t._v(" "),n("li",[t._v("_dispatch_lock_value_for_self当前队列中的线程空间的锁，防止多线程（单例类的线程安全问题）；")])]),t._v(" "),n("p",[t._v("接下来进入_dispatch_once_callout函数：")]),t._v(" "),n("img",{attrs:{src:e(721),width:"100%"}}),t._v(" "),n("ul",[n("li",[t._v("函数_dispatch_client_callout进行任务ctxt的执行；")]),t._v(" "),n("li",[t._v("_dispatch_once_gate_broadcast：任务执行完毕之后进行广播；")])]),t._v(" "),n("img",{attrs:{src:e(722),width:"100%"}}),t._v(" "),n("p",[t._v("两个宏定义，会有一个执行；我们针对_dispatch_once_mark_done分析一下：")]),t._v(" "),n("img",{attrs:{src:e(723),width:"100%"}}),t._v(" "),n("p",[t._v("将dog设置dgo_once为DLOCK_ONCE_DONE;\n然后在dispatch_once_f的实现中：")]),t._v(" "),n("img",{attrs:{src:e(724),width:"100%"}}),t._v(" "),n("p",[t._v("第二次进来时，判断dgo_once为DLOCK_ONCE_DONE的话直接return；\n如果没有设置DLOCK_ONCE_DONE，并且_dispatch_once_gate_tryenter被上锁，那么将会执行_dispatch_once_wait(l)，进行无限期等待，等待开锁.")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/handbook/iOS/2020/设计模式/20201201/20201201.html"}},[t._v("代理模式")])],1)])}),[],!1,null,null,null);a.default=s.exports}}]);