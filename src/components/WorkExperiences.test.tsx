import { h } from 'preact';
import { render } from '@testing-library/preact';
import WorkExperiences from './WorkExperiences';

import experiences from './__mocks__/experiences';

describe('WorkExperiences', () => {
    it('should render a list of experiences', () => {
        const { queryByText, getAllByText } = render(<WorkExperiences experiences={experiences.asList} />);
        expect(getAllByText('John Doe SpA, Binasco, Milan (Italy)').length).toEqual(2);
        expect(queryByText('present day')).toBeNull();
        expect(queryByText('May 2016')).toBeDefined();
        expect(queryByText('June 2016')).toBeDefined();
        expect(queryByText('September 2017')).toBeDefined();
        expect(queryByText('October 2017')).toBeDefined();
    });

    it('should not render the endDate if equal to startDate render a list of experiences', () => {
        const { queryByText, getAllByText } = render(<WorkExperiences experiences={experiences.withSameMonth} />);
        expect(getAllByText('John Doe SpA, Binasco, Milan (Italy)').length).toEqual(1);
        expect(queryByText('June 2016')).toBeDefined();
    });

    it('should not render the address if not present', () => {
        const { getAllByText } = render(<WorkExperiences experiences={experiences.withoutAddress} />);
        expect(getAllByText('John Doe SpA').length).toEqual(1);
    });

    it('should render "present day" if the endDate is not present', () => {
        const { queryByText } = render(<WorkExperiences experiences={experiences.withoutEndDate} />);
        expect(queryByText('June 2016')).toBeDefined();
        expect(queryByText('present day')).toBeDefined();
    });
});
