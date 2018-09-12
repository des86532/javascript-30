# 09 - Dev Tools Domination

## **主題**
介紹chrome的開發工具，各種`console.`的用法：）  

>Demo: [Dev Tools Domination](https://neilworlds.com/javascript-30/09_Dev-Tools-Domination/index.html)

## DOM BREAK ON .. 
介紹了DOM的中斷點模式，分別有三種觸發模式可選（可複選）
### 1. subtree modifications: 當子元素點發生變化時
### 2. arrtibute modifications: 當元素發生變化時
### 3. node removal: 當元素被移除時
使用方法為如圖，對選取的元素按下`右鍵 > Break on...` 即可。  



## CONSOLE.THINGS
介紹各種console用法

### 1. console.log()
就是我們常用的那個log啦XD  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.19.37.png)

### 2. console.log('%s', value)
可將字串中的%s顯示為指定的參數  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.19.44.png)

### 3. console.log('%c', font-style)
可將字串顯示為參數中帶入的css樣式（font系列的style)  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.19.52.png)

### 4. console.warning()
顯示為警告圖示  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.00.png)

### 5. console.error()
顯示為錯誤圖示  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.10.png)

### 6. console.info()
顯示為資訊圖示
>！當我在測試時，並沒有出現資訊
![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.15.png)

### 7. console.assert()
可以拿來測試判斷是否為真，若為false則回傳對應的錯誤訊息。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.21.png)

### 8. console.clear()
清除console的所有訊息。
>補充：Mac上清除的快捷鍵為`⌘(Command)+K`、Windows快捷鍵則為`CTRL+L`

### 9. console.dir()
可以顯示選取物件的所有屬性，  
我寫的這個範例中，`console.log(p)`只能返回p本身的function內容，  
若使用`console.dir(p)`則可以印出p本身及其所擁有的屬性（注意屬性第一行run）。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.53.png)

### 10.console.groupCollapsed() & console.groupEnd()
可以把輸出資訊透過group包起來。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.20.59.png)

### 11. console.count()
用來累加出現次數。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.32.46.png)

### 12.console.time() & console.timeEnd()
可以用來計算區域內執行的時間，我寫的範例是計算取回json資料的時間。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.35.52.png)

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.36.02.png)

### 13.console.table()
可以把資料整理成table格式方便瀏覽。  

![image](https://neilworlds.com/wp-content/uploads/2018/09/螢幕快照-2018-09-13-上午1.35.39.png)


## **其他**
還有很多可以透過開發工具來協助的，
例如監測整個網頁的讀取速度可以透過`Network`這個頁籤來查看，
也可以設置模擬各種網路速度、或是離線狀態等..

非常推薦觀看六角學院的免費課程，可以透過影片了解更多開發工具的操作範例。
>推薦：[六角學院-Chrome 網頁除錯功能大解密(免費)](https://www.udemy.com/chrome-devtools/)
>參閱：[Google Dev Tool API](https://developers.google.com/web/tools/chrome-devtools/)
