# react-layouts

SPAにてlayoutを使用します。  
縦横100%にてはみ出さないように。

```
src  
｜  
｜ーapp.js(全体のReactDOM)  
｜  
｜ーcomponents(ここではトップナビとその他)  
　　｜  
　　｜ーAppbar.js(トップナビ)  
　　｜  
　　｜ーMains(それ以下)  
　　　　｜  
　　　　｜ーindex.js(２カラム)  

```

### layout-commit コミット  
最も最小のレイアウト
![2017-01-11 18 52 23](https://cloud.githubusercontent.com/assets/22278305/21843659/20eac508-d82f-11e6-92e4-237372462660.png)

### small-menu-layout コミット  
メニューだけのレイアウト  
![2017-01-11 18 50 53](https://cloud.githubusercontent.com/assets/22278305/21843592/edc8d17e-d82e-11e6-86ee-e9091ad4992e.png)

### dowble-column コミット  
メニューの中にコンテンツがあるレイアウト。2つでも3つでもできる。  
CSSのFlexシステムを採用している
![2017-01-11 22 47 15](https://cloud.githubusercontent.com/assets/22278305/21850857/f3845c02-d84f-11e6-8b95-fcee5c722ed7.png)

### redux-architecture コミット  
このコミットからfluxアーキテクチャのreduxを採用している。  
まずはメニューの開閉をreduxにて実装。

```
/* redux */
//action
const openMenu = {
  type: 'OPEN_MENU'
}

//reducer
const reducer = (state = {openState: true}, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return{
        openState: !state.openState
      }
    default:
      return state;
  }
}

//store
const store = createStore(reducer)
```
