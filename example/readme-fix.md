* 如需要手动检查所有代码的问题 ,可以打开命令行, 输入 eslint .
* 如需要自动修复一些不规范的代码问题 ,例如 没有分号的问题,可以 输入 eslint . --fix

有的时候为了兼容旧文件 启用禁用规则
对某个文件禁用规则
```
/*eslint-disable*/
	content
/*eslint-enable*/
```
对某规则禁用
```
/* eslint-disable no-unused-vars*/
	temppate = 1,
/* eslint-enable no-unused-vars*/
```
