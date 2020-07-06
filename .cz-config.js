module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     新功能开发',
    },
    {
      value: 'fix',
      name: 'fix:      修复 bug.',
    },
    {
      value: 'docs',
      name: 'docs:     项目中相关文档修改请使用此类型, eg: 修改README.md.',
    },
    {
      value: 'style',
      name: 'style:    与代码风格相关的变更, eg: 修正代码风格, ESLint代码格式化.',
    },
    {
      value: 'refactor',
      name: 'refactor: 源代码重构，既不修复 bug 也不增加功能.',
    },
    {
      value: 'perf',
      name: 'perf: 优化相关, 没有添加新功能或修复错误的提交, eg: 提升性能, 用户体验等.',
    },
    {
      value: 'test',
      name: 'test:     增加新测试或者更正当前已有测试.',
    },
    {
      value: 'build',
      name: 'build:    涉及构建工具或构建过程等的变动, eg: 修改webpack配置, 关联包升级等.',
    },
    {
      value: 'ci',
      name: 'ci:       修改项目持续集成流程, eg: Travis, Jenkins, GitLab CI, Circle等.',
    },
    {
      value: 'chore',
      name: 'chore:    杂类, 不属于以上类型的其他类.',
    },
    {
      value: 'revert',
      name: 'revert:   回滚到上一个版本.',
    },
  ],
  messages: {
    type: '请选择您要提交的更改类型:(使用方向键): ',
    scope: '所提交的变更的范围是什么(e.g. component or file name):(可按回车键跳过): ',
    customScope: '所提交的变更的范围是什么(e.g. component or file name):(可按回车键跳过): ',
    subject: '请简明扼要地描述这个变化 (最多 100 字符):\n',
    body: '请详细描述这个变化 [使用 "|" 开启新一行]: (可按回车键跳过)\n',
    breaking: '请列出所有具有破坏性的更改[可选]:\n',
    footer: '列出此更改关闭的所有issue[可选]( E.g.: #31, #34 ):\n',
    confirmCommit: '您确定要继续执行上面的提交吗?',
  },
  subjectLimit: 100,
  allowBreakingChanges: ['feat', 'fix'],
}
