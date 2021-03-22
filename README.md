# TEMPLATE-LIBRARY

## 技术栈

- React
- React-router
- Antd4.x
- Less
- Vite

## 规范

- Typescript

## 目录结构

```

TEMPLATE-LIBRARY
    ├── public                            // 静态资源文件夹，用于存放图片等静态资源，使用路径以 / 开头
    ├── src  
    │   ├── packages                      // 全局自定义组件包目录   
    │       ├── demo                      // 组件样例目录
    │           ├── index.tsx             // 组件主体文件
    │           ├── index.less            // 组件主体样式
    │       ├── index.less                // 全局组件样式导出
    │       ├── index.tsx                 // 全局组件导出      
    │   ├── site                          // 展示站点目录
    │       ...
    ...

```

## 开发及部署

```cmd
npm install && npm run dev
```

```cmd
npm run build
```
