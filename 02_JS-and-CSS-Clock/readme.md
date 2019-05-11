# **02 - JS + CSS Clock**

## **主題**
畫面上呈現一個時鐘  

>Demo : [JS + CSS Clock](https://des86532.github.io/javascript-30/02_JS-and-CSS-Clock/index.html)

## **步驟**
#### Step1. 新增變數
先各自抓到秒針時針分針的CSS
#### Step2. 建立function
1. 一個變數用來儲存現在的時間
2. 三個變數分別儲存現在時間的秒、分、時
3. 三個變數分別儲存秒的角度、分的角度、時的角度
4. 根據各自的角度變化
#### Step3. 新增setInterval
1. setInterval(function, milliseconds, param1, param2, ...)  
這邊用每秒更新一次
#### Step4.  呼叫function

## **JavaScript語法&備註**
### **符號**:
' 單引號  quote
" 雙引號  double quote
` 撇號    apostrophe　

單引號以及雙引號的作用完全相同，單引號不可放在單引號內，雙引號不可放在雙引號內，單可以放在雙內，雙可以放在單內

參考範例：https://stackoverflow.com/questions/33679732/difference-if-there-is-any-between-and-in-javascript?lq=1
參考範例：https://pjchender.blogspot.com/2017/01/javascript-es6-template-literalstagged.html

### **CSS**:
```
<div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>
```    
    
要設定 second-hand的CSS，也只需要在style標籤下.second-hand{} 就可以

### **template literals**
模板文字，同樣屬於第一次看到的東西，  
利用`` ` `` - 反引號(back-tick)或稱重音符(grave accent)來組合字串，  
在範圍內可利用`${}`加上變數操作

例如原本的字串+變數組合寫法：
```javascript
let str = '<div data-key="' + key + '">' +
         '<button>click me</button>' +
         '</div>';
```
改用template string來做只要
```javascript
let str = `<div data-key="${key}">
         <button>click me</button>
         </div>`;
```
用`` ` ``包住字串，利用`${}`來包變數  
這樣可以很輕鬆的組出易於閱讀的組合字串！  
不用像以前還要注意單雙引號與+的配合了~
>參閱：[MDN-Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


