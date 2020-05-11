import { h } from 'preact';
import ItemsWithCompany from './ItemsWithCompany';
import Profile from './Profile';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <Profile profile={data.profile} />
        <ItemsWithCompany items={data.experiences} title="Work Experiences" />
        <ItemsWithCompany items={data.courses} title="Courses" />
    </div>
);

export default App;
