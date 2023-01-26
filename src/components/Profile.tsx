import { h, Fragment } from 'preact';
import { format } from 'date-fns';

import Section from './Section';

type Props = {
    profile: Profile;
};

type Picture = {
    src: string;
    alt: string;
};

const formatDate = (date: string): string => format(new Date(date), 'dd MMMM yyyy');

const Picture = ({ src, alt }: Picture): h.JSX.Element => <img height="100" src={`.${src}`} alt={alt} />;

const Profile = ({ profile }: Props): h.JSX.Element => (
    <Fragment>
        <Section sidebar={<Picture src={profile.picture} alt={profile.fullname} />}>
            <h1>{profile.fullname}</h1>
            <div>
                <span className="color-palette-1 with-margin-right">Address</span> {profile.address}
            </div>
            <div>
                <span className="color-palette-1 with-margin-right">Email</span> {profile.email}
            </div>
            <div>
                <span className="color-palette-1 with-margin-right">Web</span> {profile.web}
            </div>
            <div>
                <span className="color-palette-1 with-margin-right">Date of birth</span> {formatDate(profile.born_date)}
            </div>
            <div>
                <span className="color-palette-1 with-margin-right">Nationality</span> {profile.nationality}
            </div>
        </Section>
        <Section sidebarHasTitle sidebar="position">
            <big>{profile.position}</big>
        </Section>
    </Fragment>
);

export default Profile;
