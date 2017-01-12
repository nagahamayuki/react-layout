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

### react-router コミット  
routerを設置。

```
<Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Mains} />
    <Route path="a" component={Content} />
  </Route>
</Router>
```
通常のパスではAppを表示して、デフォルトでMains。path(paramater)がaの時にはContentコンポーネントを表示。

```
<Link to="a"><MenuItem>Menu Item</MenuItem></Link>
<Link to="b"><MenuItem>Menu Item 2</MenuItem></Link>
```

このようにしてリンクを貼ることができる。ページの切り替え。
ちなみに子要素を表示するなら  
`{this.props.children}`  
が必要で、親要素の値を子要素にpropsで渡したいときは、

```
{this.props.children && React.cloneElement(this.props.children, {
  drawerState: String(this.state.drawerState)
})}
```

このようにして値を子要素のpropsに渡す。
