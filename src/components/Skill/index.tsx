import { h, Fragment } from 'preact';
import Section from '../Section';
import Languages from './Languages';
import Markdown from '../Markdown';

type Props = {
    skill: Skill;
};

const Skill = ({ skill }: Props): h.JSX.Element => (
    <Fragment>
        <Section sidebarHasTitle sidebar="Personal Skills" />
        <Section sidebar="Native language">{skill.nativeLanguage.join(', ')}</Section>
        <Languages languages={skill.languages} />
        <Section sidebar="Driving licence">{skill.drivingLicense.join(', ')}</Section>
        <Section sidebar="Skills">
            <Markdown markdown={skill.skills} />
        </Section>
    </Fragment>
);

export default Skill;
