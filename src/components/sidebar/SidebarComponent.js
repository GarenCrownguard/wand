import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
// import links from 'resources/links';
import links from 'resources/links';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets,
    IconSoon
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
        // width: 110,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(links.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 87, paddingBottom: 112.39 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={links.dashboard}
                title='Dashboard'
                icon={IconSubscription}
                onClick={() => onClick(links.dashboard)}
            />
            <MenuItem
                id={links.account}
                title='Account'
                icon={IconOverview}
                onClick={() => onClick(links.account)}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={links.swap}
                title='Swap'
                icon={IconTickets}
                onClick={() => onClick(links.swap)}
            />
            <MenuItem
                id={links.bridge}
                title='Bridge'
                icon={IconIdeas}
                onClick={() => onClick(links.bridge)}
                soonIcon={IconSoon}
            />
            <MenuItem
                id={links.lending}
                title='Lending'
                icon={IconContacts}
                onClick={() => onClick(links.lending)}
                soonIcon={IconSoon}
            />
            <div className={classes.separator}></div>
            <MenuItem
                id={links.treasuries}
                title='Treasuries'
                icon={IconAgents}
                onClick={() => onClick(links.treasuries)}
            />
            <MenuItem
                id={links.governance}
                title='Governance'
                icon={IconArticles}
                onClick={() => onClick(links.governance)}
            />
            <MenuItem
                id={links.vote}
                title='Vote'
                icon={IconSubscription}
                onClick={() => onClick(links.vote)}
            />
            <MenuItem
                id={links.docs}
                title='Docs'
                icon={IconSettings}
                onClick={() => onClick(links.docs)}
            />

            <MenuItem id='logout' title='Socials' icon={IconLogout} onClick={logout} />
        </Menu>
    );
}

export default SidebarComponent;
