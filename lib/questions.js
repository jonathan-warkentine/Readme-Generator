exports.questions = [
    {
        type: 'input',
        name: 'title',
        message: "Project TITLE?:",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project DESCRIPTION?:'
    },
    {
        type: 'input',
        name: 'installInstr',
        message: "Installation Instructions?:",
    },
    {
        type: 'input',
        name: 'usageInfo',
        message:  "Usage Information?:",
    },
    {
        type: 'input',
        name: 'contrGuidelines',
        message:  "Contribution guidelines:",
    },
    {
        type: 'input',
        name: 'testingInstructions',
        message: 'Test Instructions?:',
    },
    {
        type: 'list',
        name: 'license',
        message:   "Project LICENSE?:",
        choices: ['MIT License', 'Apache 2.0 License', 'GNU GPL v3', "None"],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: "What is your GitHub USERNAME?:",
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email address for questions about this project?:'
    }
];