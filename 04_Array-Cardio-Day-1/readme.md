# **04 - Array Cardio Day 1**

## **主題**
作者用了8個範例來介紹關於Array的各種操作。  

>Demo: [Array Cardio Day 1](file:///D:/javascript-30/04_Array-Cardio-Day-1/index-FINISHED.html)

## **步驟**
#### 練習範例內有提供了3組資料：
1. inventors：first(名)、last(姓) 、year(出生日期)、passed(逝世日期)
2. people：逗點分隔的姓名(firstName, lastName)
3. data：在練習8中提供的一組包含重覆資料的陣列

#### 要練習的題目為：
1. 篩選出inventors內出生年在1500~1599間的人
2. 只顯示出inventors內的first和last
3. 依據生日由大至小排序所有的inventors
4. 加總所有inventors的在世時間
5. 依據年齡由大至小排序所有的inventors
6. 列出wiki中巴黎所有包含'de'的路名(在wiki中透過querySelectorAll來選取資料作篩選)
7. 依據lastName排序所有people的資料
8. 分別計算data內每個種類的數量

## **JavaScript語法&備註**
### **1. filter()**
題目：篩選出inventors內出生年在1500~1599間的人  
解答：透過`filter()`對來源做篩選，會將結果為`true`的資料組成陣列回傳
````javascript
 const a = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600))
    console.log(a)
````
箭頭函式後面若只有一個條件，可以省略括號
>參閱：[MDN-Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

### **2. map()**
題目：只顯示出inventors內的first和last
解答：透過`map`來將firstName/lastNam組合返回陣列
````javascript
const b = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
    console.log(b)
````
>參閱：[MDN-Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### **3. sort()**
題目：依據生日由大至小排序所有的inventor  
解答：透過`sort()`來做排序
````javascript
const c = inventors.sort((a,b) => a.year > b.year ? 1:-1)
    console.log(c)
````` 
>參閱：[MDN-Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  


### **4. reduce()**
題目：加總所有inventor的在世時間  
解答：要加總的話，用以前的寫法會寫這樣
````javascript
let totalYears = 0;
for (let i = 0; i < inventors.length; i++) {
    let liveYear = inventors[i].passed - inventors[i].year;
    totalYears += liveYear;
}
````
如果利用`reduce()`搭配箭頭函式如下：
````javascript
const d = inventors.reduce((a,b) => a + b.passed - b.year,0)
    console.log(d)
````
`reduce()：`

reduce((accumulator, currentValue) => return accumulator目前總共 + currentValue下一個值 , 當前需要加入的值)

>參閱：[MDN-Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

### **5. sort()**
題目：依據年齡由大至小排序所有的inventor。  
解答：排序原理同第三題，多了一段計算年齡的部分而已
````javascript
const e = inventors.sort((a,b) => a.passed - a.year > b.passed - b.year ? 1:-1)

    console.log(e)
````

### **6. map() + filter() & includes()**
題目：列出wiki中巴黎所有包含'de'的路名
解答：
````javascript
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));
````
這題先用`querySelectorAll()`來選取對象元件，  
再利用之前[第一個練習](https://github.com/guahsu/JavaScript30/tree/master/01_Java-Script-Drum-Kit)有提到的Array.from將nodeList轉為Array，  
才能對其進行map操作(map是Array的方法，nodeList沒有)，  
同時加上`filter`+`includes`來做文字的篩選，若存在’de’就回傳true加入陣列。
>參閱：[MDN-Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### **7. sort() & split()**
題目：依據lastName排序所有people的資料
解答：
````javascript
const f = people.sort((a,b) => {
      const [aLast, aFirst] = a.split(', ');
      const [bLast, bFirst] = b.split(', ');
      return aLast > bLast ? 1 : -1;
    })

    console.log(f)
````
由於people的資料都是`['Beck, Glenn’]`這樣的逗點字串，  
要取得lastName就必須要使用`split()`來切開，  
滿酷的是因為`split()`會返回陣列，所以宣告了陣列`[aLast, aFirst]`來接值  
接著再利用接到的值來做排序比對。
>參閱：[MDN-String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

### **8. reduce()**
題目：分別計算data內每個種類的數量  
解答：
````javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const g = data.reduce((obj,item) => {
      
      if(obj[item]){      //若沒有此物件及新增，有的話就跳過直接到了line 83 
        obj[item] = 0
      } 

      obj[item] += 1  //不是else
      return obj
    },{})
    console.log(g)
````
這段在看的時候一直看不懂，if(obj[item])如果obj裡面沒有這個物件，即新增一個物件，後面的obj[item] += 1 不是else，是必定會發生

最後面當前需要加入的值，必須加入一個空物件
