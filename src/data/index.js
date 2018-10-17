const app = [
    {
        name: 'Restek',
        link: 'restek',
        repo: {
            name: 'aws',
            url: 'private'
        }
    }, 
    {
        name: 'Dispatch Response',
        link: 'dispatch-response',
        repo: {
            name: 'github',
            url: 'https://github.com/DispatchResponse'
        }
    }, 
    {
        name: 'Geogopher',
        link: 'geogopher',
        repo: {
            name: 'github',
            url: 'https://github.com/Geogopher'
        }
    }, 
    {
        name: 'Nick Freeman Design',
        link: 'nick-freeman-design',
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/'
        }
    }, 
    {
        name: 'Jukeboxers',
        link: 'jukeboxers',
        repo: {
            name: 'github',
            url: 'https://github.com/Jukeboxers'
        }
    }, 
    {
        name: 'HTML5 Color Game',
        link: 'html-5-color-game',
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/html5-color-game'
        }
    }, 
    {
        name: 'Serverless Demo',
        link: 'serverless-demo',
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
        title: 'Full Stack Engineer',
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
        data: ['javascript (ES 5/6/7+)', 'JSX', 'python', 'sql', 'css/html', 'sass/scss' ]
    },
    {
        name: 'libraries',
        data: ['redux', 'jQuery', 'underscore', 'semantic ui', 'material ui', 'styled-components', 'bootstrap 3/4', 'pandas', 'numpy', 'beautifulsoup', 'nlp']
    },
    {
        name: 'front-end frameworks',
        data: ['react', 'angular', 'backbone']
    },
    {
        name: 'back-end frameworks',
        data: ['node', 'express', 'aws']
    },
    {
        name: 'databases',
        data: ['mySQL', 'postgres', 'sqlite', 'mongodb', 'sequelize orm', 'bookshelf orm', 'mongoose orm']
    },
    {
        name: 'deployment/task-runners',
        data: ['aws', 'travis', 'grunt', 'gulp', 'firebase', 'google cloud']
    }
]

const ed = [
    {
        institution: 'Hack Reactor @ Galvanize',
        credential: 'Advanced Software Engineering Immersive',
        location: 'San Francisco, CA',
        date: '2018'
    },
    {
        institution: 'University of the Pacific',
        credential: 'BA International Affairs and Commerce, Russian Studies',
        location: 'Stockton, CA',
        date: '2012'
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