# IntelliJ IDEA 配置

## 1. 自动导包 (Auto Import)
![- 自动导包: ✅ (可选)](http://qiniu.kicent.cn/idea/自动导包-52f237125a74f1ea74771ff5a7c9ac8b.png)

## 2. 禁止单行折叠 (Code Folding)
![- 禁止单行折叠: ✅ (可选)](http://qiniu.kicent.cn/idea/禁止单行折叠-8d4cfcfe01d305e71585b16f18cebd82.png)

## 3. 禁止通配符导入`import *`
![- 防止Import*: ✅ (可选)](http://qiniu.kicent.cn/idea/防止Import--718fd048b63e45b0c5a032a99c13b9f2.png)

## 4. 类注释模板
![- 类注释模版*: ✅ (可选)](http://qiniu.kicent.cn/idea/类注释模版-e0a367241bd3bce6eaf48ee0090eae3c.png)

```java
/**
 * @author yang.lu
 */
```
| 变量名 | 中文翻译和解释 | 效果示例 |
|---|---|---|
| `${PACKAGE_NAME}` | 包名 | `com.example.service` |
| `${USER}` | 用户名 | `yang.lu` |
| `${DATE}` | 系统日期 | `2024-01-15` |
| `${TIME}` | 系统时间 | `14:30` |
| `${YEAR}` | 年份 | `2024` |
| `${MONTH}` | 月份(数字) | `01` |
| `${MONTH_NAME_SHORT}` | 月份(英文缩写) | `Jan` |
| `${MONTH_NAME_FULL}` | 月份(英文全称) | `January` |
| `${DAY}` | 日期 | `15` |
| `${DAY_NAME_SHORT}` | 星期(英文缩写) | `Mon` |
| `${DAY_NAME_FULL}` | 星期(英文全称) | `Monday` |
| `${HOUR}` | 小时(24小时制) | `14` |
| `${MINUTE}` | 分钟 | `30` |
| `${PROJECT_NAME}` | 项目名 | `MyProject` |
| `${NAME}` | 类名/文件名 | `UserService` |
| `${NAME_LOWER_CASE}` | 小写类名 | `userservice` |
| `${NAME_UPPER_CASE}` | 大写类名 | `USERSERVICE` |
| `${NAME_CAMEL_CASE}` | 驼峰类名 | `userService` |
| `${ORGANIZATION_NAME}` | 组织/公司名 | `MyCompany` |
| `${DESCRIPTION}` | 描述(需手动输入) | `用户服务类` |

## 5. 方法注释
![- 方法释模版*: ✅ (可选)](http://qiniu.kicent.cn/idea/方法注释-29670bea08c844830d686de3510747b9.png)


1. 点击 `+` → `Template Group`，新建Group名为：`Customize`
2. 点击 `+` → `Live Template`，新建模版（在新建的Grip下点击）
2. **Abbreviation**：填入 `*` 
3. **Template text**（直接复制下面内容）：
```
*
 * $params$
 * @return $return$
 * @author yang.lu
 */
```
5. **变量配置**

| Name | Expression | 	Default value | 	Skip if defined |
|---|---|---|---|
| `params` | groovyScript("...脚本见下方...") |  |✅ |
| `return` | 	methodReturnType() |  |  |

params脚本:
```groovy
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+=' * @param ' + params[i] + ((i < params.size() - 1) ? '\\n' : '')}; return result", methodParameters())
```
6. Applicable in：选择 Java