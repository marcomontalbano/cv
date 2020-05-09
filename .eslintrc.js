module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
        indent: ['error', 4],
        semi: ['error', 'always'],
        'react/jsx-indent-props': ['error', 4],
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:react/recommended',
            ],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: 'tsconfig.json',
            },
            settings: {
                react: {
                    pragma: 'h',
                    version: 'detect',
                },
            },
        },
    ],
};
