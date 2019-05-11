# **06 - Type Ahead**

## **主題**
利用`fetch()`來取回json檔案，並透過`filter()`及`RegExp()`等語法來製作搜尋即時顯示關聯效果！  
 
>Demo: [Type Ahead](https://des86532.github.io/javascript-30/06_Type-Ahead/index.html)
 
## **步驟**
#### Step1
預設已經有建立了一個城市的.json清單，  
先建立一個空的陣列`cities`並透過fetch來取得json資料存進去。

#### Step2
建立`function findMatches(wordToMatch, cities)`  
裡面建立了一個`RegExp`用於match來進行字串比對

#### Step3
建立`displayMatches()`並用`addEventListener`來監測輸入框的`change`&`keyup`，  
每次鍵盤輸入時都會觸發`displeyMatches()`來處理比對，  
將比對結果用map來return 組合的HTML的`<li>`資料，  

## **Javascript語法&備註**
### **fetch()**
//fetch透過 url 會回傳一個包含 response 的 promise,回傳的 response 需要透過 json()
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data))  //json()後可對資料再作處理 

參閱：[MDN-fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)

### **RegExp()**
我有做紀錄的就是參數後面`g`代表全部, `i`代表不分大小寫..
參閱:[MDN-RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
參閱:[正規表達式練習](https://regex101.com/)

#### **.join()**
將陣列資料用參數內的字串連接轉為一個字串(限定陣列才能用)，  
範例中上了`join('')`來避免map回傳的陣列有`,`產生。

#### **.replace()**
第一個參數必須用上RegExp,第二個參數為取代後的字符串
參閱:[MDN-replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## **CSS語法&備註**
### **nth-child()**
範例中利用`nth-child(odd)`與`nth-child(even)`來抓li的奇偶數
參閱：[MDN-:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)



