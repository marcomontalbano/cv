import { h } from 'preact';
import WorkExperiences from './WorkExperiences';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div>
        <h1>Hello, World!</h1>
        <WorkExperiences experiences={data.experiences} />
    </div>
);

export default App;
