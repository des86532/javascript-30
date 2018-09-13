# 10 - Hold Shift and Check Checkboxes

## **主題**
介紹如何使用Shift + 左鍵來完成連續區間選取，  
在這篇的探索中，我增加了連續區間取消選取及部分問題的改善。

## **步驟**
### Step1. 基本設定
用`querySelectorAll('input')`來把HTML中的inputs選起來，  
並設置一個變數`let lastcheck;`作為稍後勾選位置的紀錄使用。

### Step2. 觸發設定
inputs`forEach`來加入`addEventListener('click', checking)`。

### Step3. checking
在這個function裡面，建立了一個區域變數`let between = false`來當作選取區間的標記，  
並在每次觸發時檢查是否”有按著shift點擊”`if(e.shiftKey && this.checked)`，  
若有的話則再跑一次`forEach`來透過`between`對每個checkbox進行區間標記，  
把屬於區間內的checkbox勾起來，並記錄此次點擊的位置。

#### 程式備註
````javascript
//選取所有的checkbox
const inputs = document.querySelectorAll('input')
let lastcheck;

function checking(e) {
  let between = false
  // 有+shift按鍵的 和 這個有沒有被打勾
  if(e.shiftKey && this.checked) {
    //全部找一遍 遇到第一個打勾的(input === this) 就把between變成true
    //遇到最後一個打勾的那個 因為中間的between = true 所以把最後一個變成 between = false
    inputs.forEach(input => {
      if(input === this || input === lastcheck) {
        between = !between
      }
      //把中間between = true 的 全部打勾
      if(between) {
        input.checked = true
      }
    })
  }
  //要儲存最後一個打勾的是哪一個
  lastcheck = this
}
// 為每個checkbox加上click事件
inputs.forEach(input => {
  input.addEventListener('click', checking)
})
````
