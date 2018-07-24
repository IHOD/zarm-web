webpackJsonp([30],{154:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e(65),i=e.n(o),r=e(66),m=e.n(r),p=e(67),u=e.n(p),c=e(68),v=e.n(c),s=e(69),d=e.n(s),g=e(269),a=(e(303),e(272),function(n){function t(){return m()(this,t),v()(this,(t.__proto__||i()(t)).apply(this,arguments))}return d()(t,n),u()(t,[{key:"document",value:function(){return e(495)}}]),t}(g.a));t.default=a},495:function(n,t){n.exports="## Popover 气泡卡片\n\n点击/鼠标移入元素，弹出气泡式的卡片。\n\n### 基本用法\n\n最简单的使用方式。\n\n::: demo\n```js\n  render() {\n    return (\n      <div>\n        <Popover content={() => '这是一个Popover' }>\n          <Button theme=\"info\">Click</Button>\n        </Popover>\n      </div>\n    );\n  }\n```\n:::\n\n### 不同方位\n\n可自定义方位。\n\n::: demo 通过`direction`属性设置方位。\n```js\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 8 }}>\n        {\n          ['left', 'leftTop',  'leftBottom', 'right', 'rightTop', 'rightBottom'].map(item => {\n            return (\n              <Popover key={item} content={() => '这是一个' + item + '的Popover' } direction={item}>\n                <Button theme=\"info\" style={{marginRight: 10}}>{item}</Button>\n              </Popover>\n            );\n          })\n        }\n        </div>\n        {\n          ['top', 'topLeft',  'topRight', 'bottom', 'bottomLeft', 'bottomRight'].map(item => {\n            return (\n              <Popover key={item} content={() => '这是一个' + item + '的Popover' } direction={item}>\n                <Button theme=\"warning\" style={{marginRight: 10}}>{item}</Button>\n              </Popover>\n            );\n          }) \n        }\n      </div>\n    );\n  }\n```\n:::\n\n### 不同触发方式\n\n可以设置触发的方式。\n\n::: demo 通过设置`trigger`属性设置触发方式，默认`click`。\n```js\n  render() {\n    return (\n      <div>\n        <Popover trigger=\"hover\" content={() => '这是一个Popover' } direction=\"top\">\n          <Button theme=\"info\">Hover</Button>\n        </Popover>\n      </div>\n    );\n  }\n```\n:::\n\n\n### Attributes\n| 参数      | 说明          | 类型      | 可选值                           | 默认值  |\n|---------- |-------------- |---------- |--------------------------------  |-------- |\n| content | 需要展示的内容 | string/function/element | — | '' |\n| direction | 展示方位 | string | topLeft, top, topRight... | bottomRight |\n| className | 弹窗类名 | string | — | '' |\n| trigger | 触发方式 | string | hover/click | click |\n| mask | 是否有蒙层 | boolean | - | false |\n| radius | 是否圆角 | boolean | - | false |\n\n\n### Events\n| 事件名称 | 说明 | 回调参数 |\n|---------- |-------- |---------- |\n| onMaskClick | 点击蒙层时候触发的事件 | — |"}});