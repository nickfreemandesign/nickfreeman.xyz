const app = [
    {
        name: 'Restek',
        appLink: 'restek',
        title: 'Emergency Response and Analytics for Firefighters',
        description: 'Restek provides real time responder information during an emergency event. Unlike traditional emergency response and firefighter performance software, Restek captures critical data points relevant to first responders during an emergency response which drives performance, eliminates manual entry, and prioritizes safety through situational awareness.',
        technologies: {
            frontEnd: ['react', 'webpack', 'jest', 'styled-components', 'reach router', 'workbox'],
            backEnd: ['express', 'node', 'mocha', 'sequelize', 'postgres'],
            deployment: ['docker', 'aws fargate', 'aws ecr', 'aws code pipeline']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/resteksoftware'
        }
    }, 
    {
        name: 'Dispatch Response',
        appLink: 'dispatch-response',
        title: 'Mobile dispatch application to receive dispatch feed in real time',
        description: 'Dispatch Response is a lightweight solution for first responders to receive emergency dispatches via SMS by subscribing to dispatch feeds relevant to them',
        technologies: {
            frontEnd: ['react', 'webpack', 'enzyme', 'styled-components', 'react-router'],
            backEnd: ['express', 'node', 'mocha', 'sequelize', 'postgres'],
            deployment: ['aws code deploy', 'aws code pipeline', 'aws ec2']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/dispatchresponse'
        }
    }, 
    {
        name: 'Geogopher',
        appLink: 'geogopher',
        title: 'Immersive map games to learn about the world while having fun',
        description: 'Geogopher was designed and created out of a need to learn about the world while tapping into the power of Google Maps. With three game modes– "Countdown", "Random Select", and "GeoClick", Geogopher is designed to accomodate any learning style',
        technologies: {
            frontEnd: ['react', 'redux','webpack', 'jest', 'sass/scss', 'react-router', 'semantic-ui'],
            backEnd: ['express', 'node', 'sequelize', 'postgres'],
            deployment: ['travis ci', 'aws']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/geogopher'
        }
    }, 
    {
        name: 'Nick Freeman Design',
        appLink: 'nick-freeman-design',
        title: 'Design, Media and Web Services',
        description: 'Graphic design and stuff serving the portland area',
        technologies: {
            frontEnd: ['react', 'webpack', 'sass/scss', 'react-router', 'material-ui'],
            backEnd: ['express', 'node', 'sequelize', 'postgres', 'google drive api', 'shutterstock api'],
            deployment: ['aws lambda', 'netlify', 'aws s3']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/'
        }
    }, 
    {
        name: 'Jukeboxers',
        appLink: 'jukeboxers',
        title: 'Putting democracy in music selection',
        description: 'Graphic design and stuff serving the portland area',
        technologies: {
            frontEnd: ['react', 'webpack', 'sass/scss'],
            backEnd: ['express', 'node', 'twilio', 'mongodb', 'spotify api'],
            deployment: ['heroku']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/jukeboxers'
        }
    }, 
    {
        name: 'HTML5 Color Game',
        appLink: 'html-5-color-game',
        title: 'a tribute to the obnoxious html5 color names',
        description: 'Graphic design and stuff serving the portland area',
        technologies: {
            frontEnd: ['backbone'],
            backEnd: ['express', 'node', 'bookshelf', 'knex', 'sqlite3'],
            deployment: ['firebase']
        },
        repo: {
            name: 'github',
            url: 'https://github.com/nickfreemandesign/html5-color-game'
        }
    }, 
    {
        name: 'Serverless Demo',
        appLink: 'serverless-demo',
        title: 'demo for setting up a serverless application',
        description: 'i set this up to demonstatrate how to set up a serverless application',
        technologies: {
            frontEnd: ['react', 'webpack', 'styled-components'],
            backEnd: ['aws lambda'],
            deployment: ['aws s3']
        },
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