import { h } from 'preact';

import App from './components/App';

import './style.scss';

type PreRenderData = {
    CLI_DATA: {
        preRenderData: {
            url: string;
            data: NetlifyCMSContent;
        };
    };
};

const Root = ({
    CLI_DATA: {
        preRenderData: { url, data },
    },
}: PreRenderData): h.JSX.Element => <App url={url} data={data} />;

export default Root;
