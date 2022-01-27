import { h } from 'preact';
import ItemsWithCompany from './ItemsWithCompany';
import Profile from './Profile';
import Section from './Section';
import Skill from './Skill';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

function sortDescByStartDate<T extends { startDate: string }>(items: T[]): T[] {
    return items.sort((a, b) => parseFloat(b.startDate) - parseFloat(a.startDate));
}

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <Profile profile={data.profile} />
        <ItemsWithCompany items={sortDescByStartDate(data.experiences)} title="Work Experiences" />
        <ItemsWithCompany items={sortDescByStartDate(data.courses)} title="Courses" />
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
