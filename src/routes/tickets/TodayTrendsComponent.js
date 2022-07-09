import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import LineChart from 'react-svg-line-chart';

const data = [];

for (let x = 1; x <= 24; x++) {
    data.push({ x: x, y: Math.floor(Math.random() * 100) });
}

// const data = [{x:1,y:12},{x:2,y:22},{x:3,y:112},{x:4,y:2},{x:5,y:312},{x:6,y:12}];

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid '#A4A6B3'}`,
        borderRadius: 4,
        cursor: 'pointer'
    },
    graphContainer: {
        marginTop: 24,
        marginLeft: 0,
        marginRight: 0,
        width: '100%'
    },
    graphSection: {
        padding: 24
    },
    graphSubtitle: {
        ...theme.typography.smallSubtitle,
        color: '#A4A6B3',
        marginTop: 4,
        marginRight: 8
    },
    graphTitle: {
        ...theme.typography.cardTitle,
        color: '#A4A6B3'
    },
    legendTitle: {
        ...theme.typography.smallSubtitle,
        fontWeight: '600',
        color: '#A4A6B3',
        marginLeft: 8
    },
    separator: {
        backgroundColor: '#A4A6B3',
        width: 1,
        minWidth: 1
    },
    statContainer: {
        borderBottom: `1px solid '#A4A6B3'}`,
        padding: '24px 32px 24px 32px',
        height: 'calc(114px - 48px)',
        '&:last-child': {
            border: 'none'
        }
    },
    stats: {
        borderTop: `1px solid '#A4A6B3'`,
        width: '100%'
    },
    statTitle: {
        fontWeight: '600',
        fontSize: 16,
        lineHeight: '22px',
        letterSpacing: '0.3px',
        textAlign: 'center',
        color: '#A4A6B3',
        whiteSpace: 'nowrap',
        marginBottom: 6
    },
    statValue: {
        ...theme.typography.title,
        textAlign: 'center',
        color: '#A4A6B3'
    }
}));

function TodayTrendsComponent() {
    
    const classes = useStyles();

    function renderLegend(color, title) {
        return (
            <Row vertical='center'>
                <div style={{ width: 16, border: '2px solid', borderColor: color }}></div>
                <span className={classes.legendTitle}>{title}</span>
            </Row>
        );
    }

    function renderStat(title, value) {
        return (
            <Column
                flexGrow={1}
                className={classes.statContainer}
                vertical='center'
                horizontal='center'
            >
                <span className={classes.statTitle}>{title}</span>
                <span className={classes.statValue}>{value}</span>
            </Column>
        );
    }

    return (
        <Row
            flexGrow={1}
            className={classes.container}
            horizontal='center'
            breakpoints={{ 1024: 'column' }}
        >
            <Column
                wrap
                flexGrow={7}
                flexBasis='735px'
                className={classes.graphSection}
                breakpoints={{ 1024: { width: 'calc(100% - 48px)', flexBasis: 'auto' } }}
            >
                <Row wrap horizontal='space-between'>
                    <Column>
                        <span className={classes.graphTitle}>Today’s trends</span>
                        <span className={classes.graphSubtitle}>as of 25 May 2019, 09:41 PM</span>
                    </Column>
                    {renderLegend("#3751FF", 'Today')}
                </Row>
                <div className={classes.graphContainer}>
                    <LineChart
                        data={data}
                        viewBoxWidth={500}
                        pointsStrokeColor={"#3751FF"}
                        areaColor={"#3751FF"}
                        areaVisible={true}
                    />
                </div>
            </Column>
            <Column className={classes.separator} breakpoints={{ 1024: { display: 'none' } }}>
                <div />
            </Column>
            <Column flexGrow={3} flexBasis='342px' breakpoints={{ 1024: classes.stats }}>
                {renderStat('Resolved', '449')}
                {renderStat('Received', '426')}
                {renderStat('Average first response time', '33m')}
                {renderStat('Average response time', '3h 8m')}
                {renderStat('Resolution within SLA', '94%')}
            </Column>
        </Row>
    );
}

export default TodayTrendsComponent;
