import { h } from 'preact';
import { render } from '@testing-library/preact';
import ItemsWithCompany from './ItemsWithCompany';

import experiences from './__mocks__/experiences';

describe('ItemsWithCompany', () => {
    it('should render a list of items', () => {
        const { queryByText, getAllByText } = render(<ItemsWithCompany items={experiences.asList} />);
        expect(getAllByText('John Doe SpA, Binasco, Milan (Italy)').length).toEqual(2);
        expect(queryByText('present day')).toBeNull();
        expect(queryByText('May 2016')).not.toBeNull();
        expect(queryByText('June 2016')).not.toBeNull();
        expect(queryByText('September 2017')).not.toBeNull();
        expect(queryByText('October 2017')).not.toBeNull();
    });

    it('should not render the item if not visible', () => {
        const { queryByText, getAllByText } = render(<ItemsWithCompany items={experiences.withoutVisibleFalse} />);
        expect(getAllByText('John Doe SpA, Binasco, Milan (Italy)').length).toEqual(1);
        expect(queryByText('present day')).toBeNull();
        expect(queryByText('May 2016')).toBeNull();
        expect(queryByText('June 2016')).toBeNull();
        expect(queryByText('September 2017')).not.toBeNull();
        expect(queryByText('October 2017')).not.toBeNull();
    });

    it('should not render the endDate if equal to startDate render a list of items', () => {
        const { queryByText, getAllByText } = render(<ItemsWithCompany items={experiences.withSameMonth} />);
        expect(getAllByText('John Doe SpA, Binasco, Milan (Italy)').length).toEqual(1);
        expect(queryByText('June 2016')).not.toBeNull();
    });

    it('should not render the address if not present', () => {
        const { getAllByText } = render(<ItemsWithCompany items={experiences.withoutAddress} />);
        expect(getAllByText('John Doe SpA').length).toEqual(1);
    });

    it('should render "present day" if the endDate is not present', () => {
        const { queryByText } = render(<ItemsWithCompany items={experiences.withoutEndDate} />);
        expect(queryByText('June 2016')).not.toBeNull();
        expect(queryByText('present day')).not.toBeNull();
    });

    it('should render the sidebar title', () => {
        const { queryByText } = render(<ItemsWithCompany items={[]} title="This is the title!" />);
        expect(
            queryByText('This is the title!', {
                selector: '.sidebar.title',
            })
        ).not.toBeNull();
    });
});
