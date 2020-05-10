import mock from 'mock-fs';

import { getContent } from './netlify-cms';

describe('netlify-cms', () => {
    beforeEach(() => {
        mock({
            '/contentPath/companies': {
                'company-1.json': JSON.stringify({ id: '1', name: 'Company 1' }),
                'company-2.json': JSON.stringify({ id: '2', name: 'Company 2' }),
            },
            '/contentPath/experiences': {
                'experience-1.json': JSON.stringify({ id: '1', name: 'Experience 1', companyId: '2' }),
                'experience-2.json': JSON.stringify({ id: '2', name: 'Experience 2', companyId: ['1', '2'] }),
            },
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('getContent should read json files from the given path and resolve the linked collections', () => {
        const content = getContent('/contentPath');

        expect(content).toStrictEqual({
            companies: [
                { id: '1', name: 'Company 1' },
                { id: '2', name: 'Company 2' },
            ],
            experiences: [
                { id: '1', name: 'Experience 1', company: { id: '2', name: 'Company 2' } },
                {
                    id: '2',
                    name: 'Experience 2',
                    companies: [
                        { id: '1', name: 'Company 1' },
                        { id: '2', name: 'Company 2' },
                    ],
                },
            ],
        });
    });
});
