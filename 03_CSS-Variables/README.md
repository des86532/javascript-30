# 03 - CSS Variable

## 主題

用 JavaScript 和 CSS 讓可以即時調整畫面，模糊、放大、調色。

>Demo: [CSS Variable](https://des86532.github.io/javascript-30/03_CSS-Variables/index.html)

## 步驟

1.先抓取input的CSS
2.給每個input添加監聽事件
3.事件發生後，改變property

## 備註
	
1. `:root` 
	
	所以常用於聲明全局 CSS ：
	
	```css
	:root {
	  --color: #fff;
	}
	```
	
	在使用時：
	
	```css
	img {
	  background: var(--base);
	}
	```
	
2. CSS 濾鏡參考 [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

3. style.setproperty

	```style.setProperty('padding', '15px');
	
 	/* 等同於 */
	
	style.padding = '15px';```
	
>參照:[MDN-setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

### **dataset**

用```dataset```可以取出對象的```data-*```屬性，也等同於```getAttribute```

```<div id="test" data-no="123"></div>
document.querySelector('#test').dataset.no // 輸出123
document.querySelector('#test ').getAttribute('data-no'); // 輸出123
```
	
### **如何用 JavaScript 改變 CSS 屬性值？**

在 JavaScript 中 `document.documentElement` 即代表文檔根元素。所以要改變全局的 CSS 變量，可以這樣寫：
	
```js
document.documentElement.style.setProperty('--base', '#fff');
```
