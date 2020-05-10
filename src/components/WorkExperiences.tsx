import { h, Fragment } from 'preact';
import Markdown from './Markdown';

type Props = {
    experiences: ExperiencesItem[];
};

const renderExperience = (experience: ExperiencesItem): h.JSX.Element | false =>
    experience.visible && (
        <div id={experience.id}>
            <div>{experience.title}</div>
            <div>{experience.company.name}</div>
            <div>
                <Markdown markdown={experience.description} />
            </div>
        </div>
    );

const WorkExperiences = ({ experiences }: Props): h.JSX.Element => (
    <Fragment>{experiences.map((experience) => renderExperience(experience))}</Fragment>
);

export default WorkExperiences;
