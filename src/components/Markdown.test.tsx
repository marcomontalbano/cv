import { h } from 'preact';
import { render } from '@testing-library/preact';
import Markdown from './Markdown';

describe('Markdown', () => {
    it('should render a gived markdown as html', () => {
        const { getByText } = render(<Markdown markdown="# Hello World!" />);
        expect(
            getByText('Hello World!', {
                selector: 'h1',
            })
        ).toBeDefined();
    });
});
