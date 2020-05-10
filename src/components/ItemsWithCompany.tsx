import { h, Fragment } from 'preact';
import { format } from 'date-fns';
import Section from './Section';
import Markdown from './Markdown';

type Props = {
    items: ExperiencesItem[];
    title?: string;
};

const formatDate = (date: string): string => format(new Date(date), 'MMMM yyyy');

const renderDate = (startDate: string, endDate: string): h.JSX.Element => {
    const formattedStartDate = startDate && formatDate(startDate);
    const formattedEndDate = endDate ? formatDate(endDate) : 'present day';

    if (formattedStartDate === formattedEndDate) {
        return <Fragment>{formattedStartDate}</Fragment>;
    }

    return (
        <Fragment>
            <div>{formattedStartDate}</div>
            <div>{formattedEndDate}</div>
        </Fragment>
    );
};

const renderCompany = ({ name, address }: CompaniesItem): string => (address ? `${name}, ${address}` : name);

const renderItem = (item: ExperiencesItem): h.JSX.Element | false =>
    item.visible && (
        <Section sidebar={renderDate(item.startDate, item.endDate)}>
            <div className="title">{item.title}</div>
            <div>{renderCompany(item.company)}</div>
            <div>
                <Markdown markdown={item.description} />
            </div>
        </Section>
    );

const ItemsWithCompany = ({ items, title = '' }: Props): h.JSX.Element => (
    <Fragment>
        <Section sidebarHasTitle sidebar={title} />
        {items.map((item) => renderItem(item))}
    </Fragment>
);

export default ItemsWithCompany;
