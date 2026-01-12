# IntelliJ IDEA 个性化设置笔记

> 记录一些常用且必要的 IDEA 使用优化配置

---

## 一、界面与字体设置

### 设置左侧字体（Project / Structure 侧边栏）

---

## 二、代码整理与格式化

### 1️⃣ 自动清理无用 import  
路径：  
`Settings → Editor → General → Auto Import`

勾选：
- Optimize imports on the fly
- Add unambiguous imports on the fly

---

### 2️⃣ 禁止单行折叠（禁用单行代码折叠）
路径：  
`Settings → Editor → Code Folding`

取消勾选：
- One-line methods
- Simple properties
- Other single-line foldings

---

### 3️⃣ 防止 import *  
路径：  
`Settings → Editor → Code Style → Java → Imports`

设置：
- Class count to use import with '*'：**999**
- Names count to use static import with '*'：**999**

---

## 三、注释模板设置

---

### 📌 类注释模板
```java
/**
 * @author yang.lu
 */

