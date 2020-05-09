import { h } from 'preact';

type Props = {
    url: string;
    data: NetlifyCMSContent;
};

const App = ({ data }: Props): h.JSX.Element => (
    <div>
        <h1>Hello, World!</h1>
        {data.companies.map((company) => (
            <div key={company.id}>{company.name}</div>
        ))}
    </div>
);

export default App;
