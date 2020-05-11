import { h } from 'preact';
import ItemsWithCompany from './ItemsWithCompany';
import Profile from './Profile';
import Section from './Section';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <Profile profile={data.profile} />
        <ItemsWithCompany items={data.experiences} title="Work Experiences" />
        <ItemsWithCompany items={data.courses} title="Courses" />
        <Section>
            <div style={{ marginTop: '50px' }}>
                In compliance with the GDPR and the Italian Legislative Decree no. 196 dated 30/06/2003, I hereby
                authorize you to use and process my personal details contained in this document
            </div>
        </Section>
    </div>
);

export default App;
