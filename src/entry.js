import iCrush from 'icrush';

// 引入启动界面
import App from './App.iCrush';

// 引入基础样式
import '@yelloxing/normalize.css';
import './assts/style.css';

document.getElementById('root').innerHTML = "";

//根对象
window.icrush = new iCrush({

    //挂载点
    el: document.getElementById('root'),

    // 启动iCrush
    render: createElement => createElement(App)
});