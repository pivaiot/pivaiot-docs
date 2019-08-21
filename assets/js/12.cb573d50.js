(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{46:function(v,_,a){"use strict";a.r(_);var t=a(0),r=Object(t.a)({},function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍","aria-hidden":"true"}},[v._v("#")]),v._v(" 功能介绍")]),v._v(" "),a("p",[v._v("HIoT Cloud 为海量设备上报数据、控制设备提供安全可靠连接保证，IoT 云平台基于设备接入、设备管理、规则引擎、设备影子、OTA、边缘计算、设备端 SDK、云端 API 等功能提供一个完整的从设备到平台到应用的解决方案。")]),v._v(" "),a("h2",{attrs:{id:"设备定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备定义","aria-hidden":"true"}},[v._v("#")]),v._v(" 设备定义")]),v._v(" "),a("p",[v._v("设备定义是对设备的规范化抽象，包括设备的属性、命令、事件，设备定义提供独立的系统主题（Topic），根据这些 Topic 进行功能的交互行为。")]),v._v(" "),a("p",[v._v("通过设备定义，设备和应用程序之间的上行和下行会有统一的数据格式。其中命令支持同步和异步两种方式，方便应用按需下发指令和获取结果。")]),v._v(" "),a("h2",{attrs:{id:"设备接入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备接入","aria-hidden":"true"}},[v._v("#")]),v._v(" 设备接入")]),v._v(" "),a("p",[v._v("提供广泛的设备接入能力，用户可以方便地通过设备端 SDK 接入到 IoT 云平台，并且可以按照 SDK 中的示例代码，快速嵌入自己的业务逻辑实现连接云端的能力。")]),v._v(" "),a("p",[v._v("设备端SDK提供完善的设备接入方案：")]),v._v(" "),a("ul",[a("li",[v._v("提供安全的基于 MQTT 和 MQTT Over TLS 的设备注册、设备连接机制")]),v._v(" "),a("li",[v._v("支持 MQTT 3.1.1 和 5.0")]),v._v(" "),a("li",[v._v("支持 Linux、RTOS、RT-Thread 的移植")]),v._v(" "),a("li",[v._v("支持 OTA")]),v._v(" "),a("li",[v._v("支持设备影子")]),v._v(" "),a("li",[v._v("支持设备定义")])]),v._v(" "),a("h2",{attrs:{id:"设备管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备管理","aria-hidden":"true"}},[v._v("#")]),v._v(" 设备管理")]),v._v(" "),a("p",[v._v("设备管理可以帮助用户了解自己的产品以及设备状态，实时了解设备的激活状态、在线状态。")]),v._v(" "),a("p",[v._v("设备管理提供丰富的管理功能：")]),v._v(" "),a("ul",[a("li",[v._v("产品及设备的添加删除、检索功能")]),v._v(" "),a("li",[v._v("主题的管理，用户可以自定义主题，并可以轻松变更主题的读写权限")]),v._v(" "),a("li",[v._v("OTA 版本及升级管理，了解设备的版本分布状况，按需升级设备")])]),v._v(" "),a("h2",{attrs:{id:"规则引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则引擎","aria-hidden":"true"}},[v._v("#")]),v._v(" 规则引擎")]),v._v(" "),a("p",[v._v("规则引擎可以方便灵活地让设备的消息流转到其他服务，方便业务数据的打通。")]),v._v(" "),a("p",[v._v("目前规则引擎支持以下流转方式：")]),v._v(" "),a("ul",[a("li",[v._v("流转到各类数据库，如 MongoDB、MySQL，帮助用户实现关系或非关系型数据的持久化")]),v._v(" "),a("li",[v._v("流转到 Kafka 消息队列，应对海量数据上传，实现消息生产者与消费者的解耦")]),v._v(" "),a("li",[v._v("M2M 流转到其它 Topic，实现设备之间的互通")]),v._v(" "),a("li",[v._v("流转到用户自己的提供 HTTP 接口的服务")])]),v._v(" "),a("h2",{attrs:{id:"ota"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ota","aria-hidden":"true"}},[v._v("#")]),v._v(" OTA")]),v._v(" "),a("p",[v._v("OTA可以帮助用户管理设备的版本信息，提供可视化的版本分布分析。")]),v._v(" "),a("p",[v._v("用户可以管理不同产品的多个版本，手动或者批量升级指定的设备到指定的版本。")]),v._v(" "),a("h2",{attrs:{id:"设备影子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设备影子","aria-hidden":"true"}},[v._v("#")]),v._v(" 设备影子")]),v._v(" "),a("p",[v._v("设备影子是保存在平台上的对设备状态进行描述的文档。设备影子包含了设备的属性等信息，可以保存设备的当前状态。设备影子是JSON格式的文档，非常适合属性动态添加和删除的场景。")]),v._v(" "),a("p",[v._v("通过设备影子可以完成上层应用和设备之间的上下行数据交互。")]),v._v(" "),a("p",[v._v("设备影子可以让应用在不关心设备在线状态的情况下，下发控制信息到设备影子。即使设备不在线，设备上线后仍然可以获取到下发的控制信息。这将简化应用服务的逻辑，应用无须先确认设备状态再进行指令下发。")]),v._v(" "),a("p",[v._v("设备也可以将自己的状态发送到设备影子，这样应用无需每次都询问设备来获取设备状态，而是通过设备影子直接获取。")])])},[],!1,null,null,null);_.default=r.exports}}]);