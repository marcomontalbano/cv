import { h, Fragment } from 'preact';
import { format } from 'date-fns';
import Section from './Section';
import Markdown from './Markdown';

type Props = {
    experiences: ExperiencesItem[];
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

const renderExperience = (experience: ExperiencesItem): h.JSX.Element | false =>
    experience.visible && (
        <Section sidebar={renderDate(experience.startDate, experience.endDate)}>
            <div className="title">{experience.title}</div>
            <div>{renderCompany(experience.company)}</div>
            <div>
                <Markdown markdown={experience.description} />
            </div>
        </Section>
    );

const WorkExperiences = ({ experiences }: Props): h.JSX.Element => (
    <Fragment>
        <Section sidebarHasTitle sidebar="Work Experiences" />
        {experiences.map((experience) => renderExperience(experience))}
    </Fragment>
);

export default WorkExperiences;
