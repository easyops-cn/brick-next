"use strict";(globalThis.webpackChunknext_docs=globalThis.webpackChunknext_docs||[]).push([[5305],{4006:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"category","label":"\u5b66\u4e60","items":[{"type":"link","label":"\u5feb\u901f\u5f00\u59cb","href":"/zh/docs/learn/quick-start","docId":"learn/quick-start","unlisted":false},{"type":"link","label":"\u6559\u7a0b","href":"/zh/docs/learn/tutorial","docId":"learn/tutorial","unlisted":false},{"type":"link","label":"\u5b89\u88c5","href":"/zh/docs/learn/installation","docId":"learn/installation","unlisted":false}],"collapsed":false,"collapsible":true},{"type":"category","label":"\u6982\u5ff5","items":[{"type":"link","label":"\u6784\u4ef6\u751f\u547d\u5468\u671f","href":"/zh/docs/concepts/brick-life-cycle","docId":"concepts/brick-life-cycle","unlisted":false},{"type":"link","label":"\u8868\u8fbe\u5f0f","href":"/zh/docs/concepts/expressions","docId":"concepts/expressions","unlisted":false},{"type":"link","label":"\u4e8b\u4ef6","href":"/zh/docs/concepts/events","docId":"concepts/events","unlisted":false},{"type":"link","label":"Context","href":"/zh/docs/concepts/context","docId":"concepts/context","unlisted":false},{"type":"link","label":"Provider \u6784\u4ef6","href":"/zh/docs/concepts/provider-bricks","docId":"concepts/provider-bricks","unlisted":false},{"type":"link","label":"\u6761\u4ef6\u6e32\u67d3","href":"/zh/docs/concepts/conditional-rendering","docId":"concepts/conditional-rendering","unlisted":false},{"type":"link","label":"\u6a21\u677f","href":"/zh/docs/concepts/custom-templates","docId":"concepts/custom-templates","unlisted":false},{"type":"link","label":"\u6a21\u677f\u72b6\u6001\u6570\u636e","href":"/zh/docs/concepts/template-state","docId":"concepts/template-state","unlisted":false},{"type":"link","label":"\u81ea\u5b9a\u4e49\u52a0\u5de5\u51fd\u6570","href":"/zh/docs/concepts/custom-processors","docId":"concepts/custom-processors","unlisted":false},{"type":"link","label":"\u51fd\u6570","href":"/zh/docs/concepts/storyboard-functions","docId":"concepts/storyboard-functions","unlisted":false},{"type":"link","label":"\u63a7\u5236\u8282\u70b9","href":"/zh/docs/concepts/control-nodes","docId":"concepts/control-nodes","unlisted":false},{"type":"link","label":"\u6784\u4ef6\u5d4c\u5957","href":"/zh/docs/concepts/nesting-bricks","docId":"concepts/nesting-bricks","unlisted":false},{"type":"link","label":"\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2","href":"/zh/docs/concepts/history","docId":"concepts/history","unlisted":false},{"type":"link","label":"\u56fd\u9645\u5316","href":"/zh/docs/concepts/i18n","docId":"concepts/i18n","unlisted":false},{"type":"link","label":"\u5360\u4f4d\u7b26","href":"/zh/docs/concepts/placeholders","docId":"concepts/placeholders","unlisted":false},{"type":"link","label":"\u7ba1\u9053","href":"/zh/docs/concepts/pipes","docId":"concepts/pipes","unlisted":false},{"type":"link","label":"\u5a92\u4f53\u67e5\u8be2","href":"/zh/docs/concepts/media-query","docId":"concepts/media-query","unlisted":false}],"collapsed":false,"collapsible":true},{"type":"category","label":"\u9ad8\u7ea7","items":[{"type":"link","label":"\u589e\u91cf\u6e32\u67d3","href":"/zh/docs/advanced/incremental-rendering","docId":"advanced/incremental-rendering","unlisted":false}],"collapsed":false,"collapsible":true}]},"docs":{"advanced/incremental-rendering":{"id":"advanced/incremental-rendering","title":"\u589e\u91cf\u6e32\u67d3","description":"\u589e\u91cf\u6e32\u67d3\u662f\u6307\u52a8\u6001\u66f4\u65b0\u9875\u9762\u4e2d\u7684\u6307\u5b9a\u7684\u90e8\u5206\u5185\u5bb9\uff0c\u540c\u65f6\u4fdd\u7559\u9875\u9762\u5176\u4ed6\u90e8\u5206\u7684 UI \u53ca\u5176\u72b6\u6001\u3002\u589e\u91cf\u6e32\u67d3\u53ef\u4ee5\u8ba9\u7279\u5b9a\u573a\u666f\u4e0b\u7684 UI \u4ea4\u4e92\u66f4\u52a0\u5e73\u6ed1\u987a\u7545\uff0c\u5e76\u51cf\u5c11\u8d44\u6e90\u7684\u91cd\u590d\u52a0\u8f7d\u3002","sidebar":"docsSidebar"},"concepts/brick-life-cycle":{"id":"concepts/brick-life-cycle","title":"\u6784\u4ef6\u751f\u547d\u5468\u671f","description":"\u6784\u4ef6\u5728\u81ea\u8eab\u6e32\u67d3\u548c\u9875\u9762\u6e32\u67d3\u7684\u5404\u4e2a\u65f6\u523b\u53ef\u4ee5\u6267\u884c\u76f8\u5173\u7684\u52a8\u4f5c\uff0c\u5b83\u4eec\u901a\u8fc7 lifeCycle \u5b9a\u4e49\u3002","sidebar":"docsSidebar"},"concepts/conditional-rendering":{"id":"concepts/conditional-rendering","title":"\u6761\u4ef6\u6e32\u67d3","description":"\u6709\u4e9b\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5e0c\u671b Storyboard \u53ef\u4ee5\u6839\u636e\u7279\u6027\u5f00\u5173\u6216\u5176\u5b83\u52a8\u6001\u6570\u636e\u8fdb\u884c\u7279\u5b9a\u914d\u7f6e\uff0c\u4f8b\u5982\u6839\u636e\u7528\u6237\u6743\u9650\u51b3\u5b9a\u4f7f\u7528\u54ea\u4e9b\u6784\u4ef6/\u8def\u7531\u3002","sidebar":"docsSidebar"},"concepts/context":{"id":"concepts/context","title":"Context","description":"\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u5728\u591a\u4e2a\u6784\u4ef6\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u3002\u5728 React \u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4f7f\u7528 Context \u6765\u89e3\u51b3\u8fd9\u6837\u7684\u95ee\u9898\u3002\u5728 Storyboard \u4e2d\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7c7b\u4f3c\u7684\u673a\u5236\u6765\u89e3\u51b3\u7f16\u6392\u65f6\u5904\u7406\u6784\u4ef6\u95f4\u7684\u6570\u636e\u4ea4\u6362\u95ee\u9898\u3002","sidebar":"docsSidebar"},"concepts/control-nodes":{"id":"concepts/control-nodes","title":"\u63a7\u5236\u8282\u70b9","description":"\u8001\u6a21\u677f\uff08NT \u5305\uff09\u5728 Brick Next V3 \u4e0b\u5c06\u653e\u5f03\u652f\u6301\uff08\u56e0\u4e3a\u5b83\u662f\u4e00\u4e2a\u7f16\u6392\u9ed1\u7bb1\uff0cNT \u7684\u5b58\u5728\u4f7f\u5f97 V3 \u5bf9\u52a0\u8f7d\u6027\u80fd\u7684\u4f18\u5316\u65e0\u6cd5\u8fdb\u884c\uff09\uff0c\u56e0\u6b64\u9700\u8981\u66ff\u4ee3\u7684\u65b9\u6848\u3002","sidebar":"docsSidebar"},"concepts/custom-processors":{"id":"concepts/custom-processors","title":"\u81ea\u5b9a\u4e49\u52a0\u5de5\u51fd\u6570","description":"\u80cc\u666f","sidebar":"docsSidebar"},"concepts/custom-templates":{"id":"concepts/custom-templates","title":"\u6a21\u677f","description":"\u80cc\u666f","sidebar":"docsSidebar"},"concepts/events":{"id":"concepts/events","title":"\u4e8b\u4ef6","description":"\u5728 Storyboard \u4e2d\u53ef\u4ee5\u4e3a\u6784\u4ef6\u914d\u7f6e\u4e8b\u4ef6\u7684\u5904\u7406\uff0c\u4f8b\u5982\uff1a","sidebar":"docsSidebar"},"concepts/expressions":{"id":"concepts/expressions","title":"\u8868\u8fbe\u5f0f","description":"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728 Storyboard \u7f16\u6392\u4e2d\u4f7f\u7528 JavaScript \u8868\u8fbe\u5f0f\u3002","sidebar":"docsSidebar"},"concepts/history":{"id":"concepts/history","title":"\u6d4f\u89c8\u5668\u4f1a\u8bdd\u5386\u53f2","description":"\u5728 Brick Next \u4e2d\uff0cHistory \u6982\u5ff5\u4e0d\u540c\u4e8e[\u6d4f\u89c8\u5668\u539f\u751f\u7684 History]\uff0c\u800c\u662f\u6307\u7684\u662f\u4e00\u4e2a[\u7b2c\u4e09\u65b9\u5e93 history]\uff0c\u5b83\u548c\u539f\u751f History \u7684\u80fd\u529b\u7c7b\u4f3c\uff0c\u4f46\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u53e6\u5916\u6211\u4eec\u53c8\u5728\u5b83\u7684\u57fa\u7840\u4e0a\u6269\u5c55\u4e86\u66f4\u591a\u80fd\u529b\u3002","sidebar":"docsSidebar"},"concepts/i18n":{"id":"concepts/i18n","title":"\u56fd\u9645\u5316","description":"Brick Next \u7684\u56fd\u9645\u5316\u57fa\u4e8e i18next \u5b9e\u73b0\u3002","sidebar":"docsSidebar"},"concepts/media-query":{"id":"concepts/media-query","title":"\u5a92\u4f53\u67e5\u8be2","description":"\u901a\u8fc7\u54cd\u5e94\u5f0f\u5e03\u5c40\uff0c\u6211\u4eec\u80fd\u591f\u66f4\u597d\u5730\u9002\u914d\u4e0d\u540c\u5927\u5c0f\u7684\u5c4f\u5e55\uff0c\u800c\u5a92\u4f53\u67e5\u8be2\u5219\u662f\u5b9e\u73b0\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u91cd\u8981\u5de5\u5177\u3002\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u76f8\u5173\u7684\u6c42\u503c\u5360\u4f4d\u7b26\u5168\u5c40\u5bf9\u8c61\u548c\u751f\u547d\u5468\u671f\uff0c\u6765\u5b9e\u73b0\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u7f16\u6392\u3002","sidebar":"docsSidebar"},"concepts/nesting-bricks":{"id":"concepts/nesting-bricks","title":"\u6784\u4ef6\u5d4c\u5957","description":"\u6784\u4ef6\u5373 Custom Elements\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u6784\u4ef6\u5e94\u50cf\u666e\u901a\u7684 HTML \u5143\u7d20\u90a3\u6837\u53bb\u5d4c\u5957\u548c\u7ec4\u5408\u4f7f\u7528\uff1a","sidebar":"docsSidebar"},"concepts/pipes":{"id":"concepts/pipes","title":"\u7ba1\u9053","description":"\u5728 placeholders \u5360\u4f4d\u7b26 \\"${ ... }\\" \u548c \\"@{ ... }\\"\u4e2d\u53ef\u4ee5\u914d\u7f6e\u7ba1\u9053\u5217\u8868\uff0c\u7ba1\u9053\u63d0\u4f9b\u4e86\u8fde\u7eed\u5904\u7406\u6570\u636e\u7684\u80fd\u529b\uff0c\u76f8\u5f53\u4e8e\u7531\u6846\u67b6\u7edf\u4e00\u63d0\u4f9b\u7684\u5168\u5c40\u6570\u636e\u52a0\u5de5\u51fd\u6570\u3002","sidebar":"docsSidebar"},"concepts/placeholders":{"id":"concepts/placeholders","title":"\u5360\u4f4d\u7b26","description":"\u73b0\u5728\u63a8\u8350\u4f7f\u7528 [Expressions \u8868\u8fbe\u5f0f]\u3002","sidebar":"docsSidebar"},"concepts/provider-bricks":{"id":"concepts/provider-bricks","title":"Provider \u6784\u4ef6","description":"Provider \u6784\u4ef6\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u6784\u4ef6\uff0c\u5b83\u4e0d\u63d0\u4f9b\u4efb\u4f55\u754c\u9762\u5c55\u793a\u7684\u80fd\u529b\uff0c\u4ec5\u63d0\u4f9b\u6570\u636e\u83b7\u53d6\u548c\u5904\u7406\u7684\u80fd\u529b\u3002\u914d\u5408 [Context] \u6216 [State] \u53ef\u4ee5\u5b9e\u73b0\u9875\u9762\u4f9d\u8d56\u6570\u636e\u7684\u5b9a\u4e49\uff0c\u914d\u5408 [Events \u4e8b\u4ef6]\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u7684\u6570\u636e\u5904\u7406\u3002","sidebar":"docsSidebar"},"concepts/storyboard-functions":{"id":"concepts/storyboard-functions","title":"\u51fd\u6570","description":"\u80cc\u666f","sidebar":"docsSidebar"},"concepts/template-state":{"id":"concepts/template-state","title":"\u6a21\u677f\u72b6\u6001\u6570\u636e","description":"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u5728\u6a21\u677f\u5185\u8fdb\u884c\u6d88\u8d39\u7c7b\u4f3c [Context \u4e0a\u4e0b\u6587]\u7684\u6570\u636e\uff0c\u4f46\u53c8\u5e0c\u671b\u8fd9\u4e9b\u6570\u636e\u80fd\u63a7\u5236\u5728\u6a21\u677f\u5b9e\u4f8b\u7684\u4f5c\u7528\u57df\u4e0b\uff1a\u6570\u636e\u5c01\u88c5\u5728\u6a21\u677f\u5185\u90e8\u3001\u5916\u90e8\u4e0d\u53ef\u8bbf\u95ee\uff0c\u540c\u65f6\u4e00\u4e2a\u6a21\u677f\u7684\u591a\u4e2a\u5b9e\u4f8b\u4e4b\u95f4\u7684\u6570\u636e\u4e92\u4e0d\u5f71\u54cd\u3002Template State \u6a21\u677f\u72b6\u6001\u6570\u636e\u6b63\u662f\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002","sidebar":"docsSidebar"},"concepts/theme-and-mode":{"id":"concepts/theme-and-mode","title":"\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f","description":"Brick Next \u4ece 2.7.1 \u5f00\u59cb\u652f\u6301\u9875\u9762\u4e3b\u9898\u548c\u6a21\u5f0f\u3002"},"learn/installation":{"id":"learn/installation","title":"\u5b89\u88c5","description":"Brick Next \u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u9010\u6b65\u91c7\u7528\u3002\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\uff0c\u5c3d\u53ef\u80fd\u5c11\u6216\u5c3d\u53ef\u80fd\u591a\u5730\u4f7f\u7528 Brick Next \u6e32\u67d3\u7528\u6237\u754c\u9762\u3002\u65e0\u8bba\u60a8\u662f\u60f3\u4f53\u9a8c Brick Next\uff0c\u8fd8\u662f\u60f3\u5728 HTML \u9875\u9762\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u4f4e\u4ee3\u7801\u80fd\u529b\uff0c\u6216\u8005\u662f\u542f\u52a8\u4e00\u4e2a\u590d\u6742\u7684\u57fa\u4e8e Brick Next \u7684\u5e94\u7528\uff0c\u672c\u8282\u90fd\u5c06\u5e2e\u52a9\u60a8\u5165\u95e8\u3002","sidebar":"docsSidebar"},"learn/quick-start":{"id":"learn/quick-start","title":"\u5feb\u901f\u5f00\u59cb","description":"\u6b22\u8fce\u4f7f\u7528 Brick Next \u6587\u6863\uff01\u672c\u6587\u5c06\u5411\u60a8\u4ecb\u7ecd\u8986\u76d6 80% \u65e5\u5e38\u573a\u666f\u4f1a\u7528\u5230\u7684 Brick Next \u76f8\u5173\u6982\u5ff5\u3002","sidebar":"docsSidebar"},"learn/tutorial":{"id":"learn/tutorial","title":"\u6559\u7a0b","description":"\u672c\u6559\u7a0b\u5c06\u8ba9\u60a8\u642d\u5efa\u4e00\u4e2a\u5c0f\u578b\u7684 My Todos \u5e94\u7528\u3002\u5728\u672c\u6559\u7a0b\u4e2d\u60a8\u5c06\u5b66\u4e60\u5230\u7684\u6280\u672f\u662f\u6784\u5efa\u4efb\u4f55 Brick Next \u5e94\u7528\u7684\u57fa\u7840\uff0c\u5b8c\u5168\u7406\u89e3\u5b83\u5c06\u8ba9\u60a8\u5bf9 Brick Next \u6709\u6df1\u523b\u7684\u7406\u89e3\u3002","sidebar":"docsSidebar"},"learn/tutorial-bak":{"id":"learn/tutorial-bak","title":"Tutorial","description":"<NextExample"}}}}')}}]);