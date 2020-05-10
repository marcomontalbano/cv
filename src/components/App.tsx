import { h } from 'preact';
import ItemsWithCompany from './ItemsWithCompany';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <ItemsWithCompany items={data.experiences} title="Work Experiences" />
    </div>
);

export default App;
