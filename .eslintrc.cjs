module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
        indent: ['error', 4],
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
            rules: {
                'react/react-in-jsx-scope': 'off'
            },
            settings: {
                react: {
                    pragma: 'h',
                    version: 'detect',
                },
            },
        },
        {
            files: ['vite.config.ts'],
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
                project: 'tsconfig.node.json',
            },
            settings: {
                react: {
                    pragma: 'h',
                    version: 'detect',
                },
            },
        },
        {
            files: ['./prerender-urls.ts'],
            parserOptions: {
                project: 'tsconfig.prerender-urls.json',
            },
        },
    ],
};
