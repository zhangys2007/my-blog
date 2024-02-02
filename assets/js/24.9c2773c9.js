(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{739:function(e,r,n){"use strict";n.r(r);var t=n(5),a=Object(t.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("在iOS应用开发中，用户交互是提供优秀用户体验的关键。UIGestureRecognizer是UIKit框架中的一个强大工具，它可以识别并响应用户的各种手势操作。")]),e._v(" "),n("h2",{attrs:{id:"_1-什么是uigesturerecognizer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是uigesturerecognizer"}},[e._v("#")]),e._v(" 1.什么是UIGestureRecognizer")]),e._v(" "),n("p",[e._v("UIGestureRecognizer是UIKit框架中的一个基类，用于识别并响应用户的手势操作。它提供了一系列具体的手势子类，如UITapGestureRecognizer、UIPanGestureRecognizer、UISwipeGestureRecognizer等，每个子类专门用于识别不同类型的手势。")]),e._v(" "),n("h2",{attrs:{id:"_2-常见的手势子类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的手势子类"}},[e._v("#")]),e._v(" 2.常见的手势子类")]),e._v(" "),n("p",[e._v("UIGestureRecognizer框架提供了多种手势子类，每种子类都可以用于特定的手势识别。以下是一些常见的手势子类及其应用场景：")]),e._v(" "),n("ul",[n("li",[e._v("UITapGestureRecognizer\n用于识别点击手势，适用于单击、双击等操作。常用于实现点击图片放大、按钮点击等交互效果。")]),e._v(" "),n("li",[e._v("UIPanGestureRecognizer\n用于识别平移手势，适用于拖拽、移动等操作。常用于实现拖拽视图、调整元素位置等功能。")]),e._v(" "),n("li",[e._v("UISwipeGestureRecognizer\n用于识别滑动手势，适用于快速滑动屏幕的操作。常用于实现滑动删除、切换页面等功能。")]),e._v(" "),n("li",[e._v("UILongPressGestureRecognizer\n用于识别长按手势，适用于长时间按住屏幕的操作。常用于实现弹出菜单、拖拽排序等功能。")]),e._v(" "),n("li",[e._v("UIRotationGestureRecognizer\n用于识别旋转手势，适用于两指旋转操作。常用于实现旋转视图、调整元素角度等功能。")])]),e._v(" "),n("h2",{attrs:{id:"_3-使用uigesturerecognizer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用uigesturerecognizer"}},[e._v("#")]),e._v(" 3.使用UIGestureRecognizer")]),e._v(" "),n("p",[e._v("要使用UIGestureRecognizer，您需要以下几个步骤：")]),e._v(" "),n("p",[e._v('创建一个具体的手势子类实例，例如UITapGestureRecognizer。\n打开Main.storyboard，拖拽一个UIView或其他UI元素到界面上，作为您要添加手势的视图。\n在Attributes Inspector中，展开"Gesture Recognizers"，点击"+"按钮添加一个Tap Gesture Recognizer。\nCtrl+拖拽手势到相应的视图控制器代码中，创建一个@IBAction方法。')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import UIKit\nclass ViewController: UIViewController {\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n\n    @objc func handleTap(_ sender: UITapGestureRecognizer) {\n        if sender.state == .ended {\n            // 在此处添加处理点击操作的代码\n        }\n    }\n}\n")])])]),n("h2",{attrs:{id:"_4-响应点击事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-响应点击事件"}},[e._v("#")]),e._v(" 4.响应点击事件")]),e._v(" "),n("p",[e._v("当用户轻触目标UI元素时，UITapGestureRecognizer将触发您预先指定的处理方法。在上述示例中，我们在handleTap方法中处理点击事件。需要注意的是，我们通过检查sender.state来确保仅在手势结束时执行操作。")]),e._v(" "),n("h2",{attrs:{id:"_5-手势识别参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-手势识别参数"}},[e._v("#")]),e._v(" 5.手势识别参数")]),e._v(" "),n("p",[e._v("UITapGestureRecognizer提供了一些属性，允许您对手势的识别进行进一步的配置：")]),e._v(" "),n("p",[e._v("numberOfTapsRequired：设置需要的点击次数，默认为1，您可以设置为2来实现双击手势。\nnumberOfTouchesRequired：设置需要的手指数，默认为1。")]),e._v(" "),n("p",[e._v("这些属性允许您根据需要定制手势的响应方式。")]),e._v(" "),n("h2",{attrs:{id:"_6-不同种类的uitapgesturerecognizer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-不同种类的uitapgesturerecognizer"}},[e._v("#")]),e._v(" 6.不同种类的UITapGestureRecognizer")]),e._v(" "),n("p",[e._v("UITapGestureRecognizer支持不同种类的点击手势，让您能够更灵活地满足用户需求：\n单击手势")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("let singleTapGesture = UITapGestureRecognizer(target: self, action: #selector(handleSingleTap(_:)))\nsingleTapGesture.numberOfTapsRequired = 1\nview.addGestureRecognizer(singleTapGesture)\n")])])]),n("p",[e._v("双击手势")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("let doubleTapGesture = UITapGestureRecognizer(target: self, action: #selector(handleDoubleTap(_:))) doubleTapGesture.numberOfTapsRequired = 2 view.addGestureRecognizer(doubleTapGesture)\n")])])]),n("p",[e._v("多次点击手势")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("let multipleTapGesture = UITapGestureRecognizer(target: self, action: #selector(handleMultipleTap(_:)))\nmultipleTapGesture.numberOfTapsRequired = 3\nview.addGestureRecognizer(multipleTapGesture)\n")])])]),n("h2",{attrs:{id:"_7-其他常见的手势子类及应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-其他常见的手势子类及应用场景"}},[e._v("#")]),e._v(" 7.其他常见的手势子类及应用场景")]),e._v(" "),n("ul",[n("li",[e._v("UIPanGestureRecognizer")])]),e._v(" "),n("p",[e._v("UIPanGestureRecognizer用于识别平移手势，适用于拖拽、移动等操作。常用于实现拖拽视图、调整元素位置等功能。\n示例：拖拽视图")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import UIKit\nclass ViewController: UIViewController {\n    @IBOutlet weak var draggableView: UIView!\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n    @objc func handlePan(_ sender: UIPanGestureRecognizer) {\n        let translation = sender.translation(in: self.view)\n        draggableView.center = CGPoint(x: draggableView.center.x + translation.x, y: draggableView.center.y + translation.y)\n        sender.setTranslation(.zero, in: self.view)\n    }\n}\n")])])]),n("ul",[n("li",[e._v("UISwipeGestureRecognizer")])]),e._v(" "),n("p",[e._v("UISwipeGestureRecognizer用于识别滑动手势，适用于快速滑动屏幕的操作。常用于实现滑动删除、切换页面等功能。\n示例：切换图片")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('import UIKit\nclass ViewController: UIViewController {\n    @IBOutlet weak var imageView: UIImageView!\n    let images = [UIImage(named: "image1"), UIImage(named: "image2"), UIImage(named: "image3")]\n    var currentIndex = 0\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        let swipeRightGesture = UISwipeGestureRecognizer(target: self, action: #selector(handleSwipeRight(_:)))\n        swipeRightGesture.direction = .right\n        imageView.addGestureRecognizer(swipeRightGesture)\n        imageView.isUserInteractionEnabled = true\n    }\n    @objc func handleSwipeLeft(_ sender: UISwipeGestureRecognizer) {\n        currentIndex = (currentIndex + 1) % images.count\n        imageView.image = images[currentIndex]\n    }\n    @objc func handleSwipeRight(_ sender: UISwipeGestureRecognizer) {\n        currentIndex = (currentIndex - 1 + images.count) % images.count\n        imageView.image = images[currentIndex]\n    }\n}\n')])])]),n("ul",[n("li",[e._v("UILongPressGestureRecognizer")])]),e._v(" "),n("p",[e._v("UILongPressGestureRecognizer用于识别长按手势，适用于长时间按住屏幕的操作。常用于实现弹出菜单、拖拽排序等功能。\n示例：弹出菜单")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import UIKit\n\nclass ViewController: UIViewController {\n    @IBOutlet weak var longPressView: UIView!   \n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n    @objc func handleLongPress(_ sender: UILongPressGestureRecognizer) {\n        if sender.state == .began {\n            // 显示弹出菜单\n        }\n    }\n}\n")])])]),n("ul",[n("li",[e._v("UIRotationGestureRecognizer")])]),e._v(" "),n("p",[e._v("UIRotationGestureRecognizer用于识别旋转手势，适用于两指旋转操作。常用于实现旋转视图、调整元素角度等功能。\n示例：旋转视图")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("import UIKit\nclass ViewController: UIViewController {\n    @IBOutlet weak var rotatableView: UIView!\n    override func viewDidLoad() {\n        super.viewDidLoad()\n    }\n    @objc func handleRotation(_ sender: UIRotationGestureRecognizer) {\n        rotatableView.transform = rotatableView.transform.rotated(by: sender.rotation)\n        sender.rotation = 0\n    }\n}\n")])])]),n("ul",[n("li",[e._v("多手势的处理")])]),e._v(" "),n("p",[e._v("有时候，您可能需要处理多个手势的同时触发。在这种情况下，可以使用require(toFail:)方法来设置手势之间的优先级关系。例如，您可以使一个手势在另一个手势失败时才被触发。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("let panGesture = UIPanGestureRecognizer(target: self, action: #selector(handlePan(_:)))\nlet swipeGesture = UISwipeGestureRecognizer(target: self, action: #selector(handleSwipe(_:)))\n// 设置 swipeGesture 依赖于 panGesture 失败时才触发\nswipeGesture.require(toFail: panGesture)\n\nview.addGestureRecognizer(panGesture)\nview.addGestureRecognizer(swipeGesture)\n")])])]),n("h1",{attrs:{id:"end"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[e._v("#")]),e._v(" END")])])}),[],!1,null,null,null);r.default=a.exports}}]);