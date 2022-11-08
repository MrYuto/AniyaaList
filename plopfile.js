/**
 * @param {import('plop').NodePlopAPI} plop
 */
export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        name: 'componentName',
        message: 'Component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{componentName}}/index.tsx',
        templateFile: './plop-templates/component.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{componentName}}/style.scss',
        template: `.{{componentName}} {

        }`
      },
    ],
  });
}
