import { h } from 'preact';

type Props = {
    sidebarHasTitle?: boolean;
    sidebar?: h.JSX.Element | string;
    children?: h.JSX.Element | h.JSX.Element[];
};

const Section = ({ sidebarHasTitle = false, sidebar, children }: Props): h.JSX.Element => {
    const sidebarClassNames = ['sidebar', sidebarHasTitle && 'title'].join(' ');

    return (
        <div className="section">
            <div className={sidebarClassNames}>{sidebar}</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default Section;
