export class Skills {
    id: number;
    html: number;
    css: number;
    javascript: number;
    node: number;
    github: number;
    ingles: number;
    selfLearning: number;
    timeManagement: number;
    teamWork: number;

    constructor(html: number, css: number, javascript: number, node: number, github: number, ingles: number, selfLearning: number, timeManagement: number, teamWork: number){
        this.html = html;
        this.css = css;
        this.javascript = javascript;
        this.node = node;
        this.github = github;
        this.ingles = ingles;
        this.selfLearning = selfLearning;
        this.timeManagement = timeManagement;
        this.teamWork = teamWork;
    }
}
