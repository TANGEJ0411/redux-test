# 基本名詞介紹

## store :

- 儲存全域變數

## action :

- 內會帶有 type 代表是 action 的名字
- 改變 state 的行為

## reducer :

- 帶有兩個參數(初始值, action)
- 根據不同的 action 執行改變 state 的 fn

## dispatch :

- 傳送 action 給 reducer

# 實際操作步驟起手式

## 第一步 安裝 React Redux、Redux Toolkit、redux-thunk

npm install react-redux @reduxjs/toolkit redux-thunk

## 第二步 建立資料夾和檔案方便統整

### 在 src 內建立 redux 資料夾統一管理所有 redux 邏輯

### 在其中建立一個 store.js 用於儲存所有 reducer(state)

### 建立一個 reducers 資料夾 裡面放所有 reducer 的邏輯

## 第三步 使用 Provider 將 store 傳遞至底下子元件中

## 第四步 在 redux 下建立一個 action.js 針對不同 State 建立 Action

# saga async fetch data (api)

## 第一步 定義saga

## 第二步 建立 reducer 去 dispatch fetch回來的資料

## 第三步 設定 action 和 action type

## 第四步 store 裡放入 middleware
