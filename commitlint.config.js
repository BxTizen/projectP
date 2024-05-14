export default {
    ignores: [(commit) => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
        // 信息以空格开头
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [2, 'always'],
        // 信息最大长度
        'header-max-length': [2, 'always', 108],
        // 信息不能未空
        'subject-empty': [2, 'never'],
        // 信息类型不能未空
        'type-empty': [2, 'never'],
        // 提交信息的类型 下文有介绍
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新增
                'fix', //修复bug
                'perf', // 性能
                'style', // 样式
                'docs', //文档
                'test', //测试
                'refactor',
                'build',
                'ci', // ci相关文件执行
                'chore',
                'revert',
                'wip',
                'workflow',
                'types',
                'release',
                'temp'
            ]
        ]
    }
};
