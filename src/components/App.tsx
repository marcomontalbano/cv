import { h } from 'preact';
import sortBy from 'lodash/sortBy';
import ItemsWithCompany from './ItemsWithCompany';
import Profile from './Profile';
import Section from './Section';
import Skill from './Skill';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const sort = <T,>(items: T[]): T[] => sortBy(items, 'startDate').reverse();

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <Profile profile={data.profile} />
        <ItemsWithCompany items={sort(data.experiences)} title="Work Experiences" />
        <ItemsWithCompany items={sort(data.courses)} title="Courses" />
        <Skill skill={data.skill} />
        <Section>
            <div style={{ marginTop: '50px' }}>
                In compliance with the GDPR and the Italian Legislative Decree no. 196 dated 30/06/2003, I hereby
                authorize you to use and process my personal details contained in this document
            </div>
        </Section>
    </div>
);

export default App;
