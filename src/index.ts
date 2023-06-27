import { writeFileSync } from 'fs';
import { cwd } from 'process';
import { CSSTemplate } from './templates/css.template';
import { HTMLPageTemplate } from './templates/html_page.template';
import { MarkdownParser } from '@nitonodev/aeromd';
export class GenerateHTMLPage {
	constructor(public markdown: string) {}
	generateStyles = () => {
		writeFileSync(cwd() + '\\md-theme.css', CSSTemplate);
		return CSSTemplate;
	};

	generateHTMLPage = () => {
		const parsedMarkdown = new MarkdownParser(this.markdown).parse();
		this.generateStyles();
		const HTMLPage = HTMLPageTemplate({
			parsedMarkdown: parsedMarkdown
		});
		writeFileSync(cwd() + '\\md.html', HTMLPage);
		return HTMLPage;
	};
}

console.log(new GenerateHTMLPage('# Hello world').generateHTMLPage());
