import React, { FC, useEffect } from 'react';
import { ConfigProvider, Layout } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { FooterBar } from '@/packages';

/**
 * 页面布局组件
 */
const DefaultLayout: FC = () => {

  /**
   * 临时内容编写
   * @returns html
   */
  const indexChildren = () => (
    <SplitPane split="vertical" minSize={450}>
      <div>
        11111
      </div>
      <div>
        2222222
      </div>
    </SplitPane>
  );

  useEffect(() => {
    const arr = new Array(100);

    // for倒序（按数组长度遍历，长度即下标）
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log('a', i); // 打印d 99 ~ d 0
    }

    // for正序（与倒序同理）
    for (let i = 0; i <= arr.length - 1; i++) {
      console.log('a', i); // 打印d 0 ~ d 99
    }

    // foreach（按数组下标遍历）
    arr.forEach((_, i) => {
      console.log('b', i); // 无打印
    });

    // for..in（按数组下标遍历）
    for (const c in arr) {
      console.log('c', c); // 无打印
      console.log('c arr', arr[c]); // 无打印
    }

    // for..of（按数组元素遍历）
    for (const d of arr) {
      console.log('d', d); // 打印100次 c undefined
    }
  }, []);

  return (
    <ConfigProvider locale={zhCN}>
      <Layout className="ant-layout">

        <Layout.Content>
          <HashRouter>
            <Switch>
              <Route exact path="/">
                {indexChildren}
              </Route>
            </Switch>
          </HashRouter>
        </Layout.Content>
        <FooterBar />
      </Layout>
    </ConfigProvider>
  );
};

export default DefaultLayout;
