const app = [
    {
        name: 'Restek',
        repo: {
            name: 'aws',
            url: 'private'
        }
    }, 
    {
        name: 'Dispatch Response',
        repo: {
            name: 'github',
            url: 'https://github.com/DispatchResponse'
        }
    }, 
    {
        name: 'Geogopher',
        repo: {
            name: 'github',
            url: 'https://github.com/Geogopher'
        }
    }, 
    {
        name: 'Jukeboxers',
        repo: {
            name: 'github',
            url: 'https://github.com/Jukeboxers'
        }
    }, 
    {
        name: 'HTML5 Color Game',
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/html5-color-game'
        }
    }, 
    {
        name: 'Serverless Demo',
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/serverless-portfolio'
        }
    }
]

const exp = [
    {
        company: 'Restek',
        title: 'Technical Co-Founder',
        location: 'Fairfield, CT',
        duration: 'Jan 2018 - Oct 2018',
        details: []
    },
    {
        company: 'Hack Reactor @ Galvanize',
        title: 'Software Engineering Fellow',
        location: 'San Francisco, CA',
        duration: 'Feb 2018 - Sept 2018',
        details: []
    },
    {
        company: 'Nick Freeman Design',
        title: 'Principal Designer',
        location: 'Portland, OR',
        duration: 'Feb 2017 - Feb 2018',
        details: []
    },
    {
        company: 'Procore',
        title: 'Sales Enablement - Tech and Process',
        location: 'Carpenteria, CA',
        duration: 'Jun 2016 - Dec 2016',
        details: []
    },
    {
        company: 'Procore',
        title: 'Business Development',
        location: 'Carpenteria, CA',
        duration: 'Jan 2016 - Jun 2016',
        details: []
    },
    {
        company: 'Curvature',
        title: 'Services Systems Analyst',
        location: 'Santa Barbara, CA',
        duration: 'Aug 2015 - Dec 2015',
        details: []
    },
    {
        company: 'Kiva',
        title: 'Kiva Zip Development Intern',
        location: 'San Francisco, CA',
        duration: 'Sept 2014 - Feb 2015',
        details: []
    },
    {
        company: 'Tower Air, Inc',
        title: 'Project Manager',
        location: 'Santa Barabara, CA',
        duration: 'Jul 2013 - Jul 2014',
        details: []
    },
    {
        company: 'US Dept of State',
        title: 'Fulbright Scholar (ETA)',
        location: 'Yekaterinburg, Russia',
        duration: 'Sept 2012 - Jun 2013',
        details: []
    },
    {
        company: 'US Dept of Energy',
        title: 'Desk Officer Intern',
        location: 'Washington, D.C.',
        duration: 'May 2011 - Aug 2011',
        details: []
    }

]

const skill = [
    {
        name: 'languages',
        data: ['Javascript (ES5/6/7+, JSX', 'Python', 'SQL', 'CSS/HTML' ]
    },
    {
        name: 'libraries',
        data: ['Redux', 'jQuery', 'Underscore', 'Semantic UI', 'Material UI', 'Styled-Components', 'Bootstrap', 'Pandas', 'NumPy', 'BeautifulSoup', 'NLP']
    },
    {
        name: 'front-end frameworks',
        data: ['React', 'Angular', 'Backbone']
    },
    {
        name: 'back-end frameworks',
        data: ['Node', 'Express', 'AWS']
    },
    {
        name: 'databases',
        data: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Sequelize ORM', 'Bookshelf ORM', 'Mongoose ORM']
    },
    {
        name: 'deployment/automation',
        data: ['AWS', 'Travis', 'CircleCI', 'Grunt', 'Gulp', 'Firebase', 'Google Cloud']
    }

]

const ed = [
    {
        institution: 'Hack Reactor @ Galvanize',
        credential: 'Advanced Software Engineering Immersive'
    },
    {
        institution: 'University of the Pacific',
        credentials: 'BA International Affairs and Commerce, Russian Studies'
    }
]

const gen = [
    {
        name: 'language proficiencies',
        data: ['English', 'Spanish', 'Russian']
    },
    {
        name: 'other software proficiencies',
        data: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro', 'SoundBooth', 'Excel', 'GSuite']
    }
]

module.exports = {
    app: app,
    exp: exp,
    skill: skill,
    ed: ed,
    gen: gen
}