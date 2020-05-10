import { h } from 'preact';
import WorkExperiences from './WorkExperiences';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div className="container">
        <WorkExperiences experiences={data.experiences} />
    </div>
);

export default App;
