import { get as getRequest } from 'requester';
import * as Handlebars from 'handlebars';

export function load(templateName) {
  return getRequest(`templates/${templateName}.handlebars`).then((template) => {
    const compiledTemplate = Handlebars.compile(template);
    return Promise.resolve(compiledTemplate);
  });
}
