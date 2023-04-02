import { Model } from "@stackbit/types";

export const Config: Model = {
    name: 'Config',
    type: 'data',
    label: 'Site configuration',
    file: 'data/config.json',
    singleInstance: true,
    readOnly: true,
    fields: [
        { type: 'image', name: 'favicon', label: 'Favicon', default: 'https://assets.stackbit.com/components/images/default/favicon.svg' },
        { type: 'model', name: 'header', label: 'Header configuration', models: ['Header'] },
        {
            type: 'model',
            name: 'footer',
            label: 'Footer configuration',
            models: ['Footer'],
            default: {
              $$type: 'Footer',
              copyrightText: 'Powered by Stackbit.',
              navLinks: [
                {
                  type: 'Link',
                  label: 'Home',
                  underline: 'hover',
                  url: '/',
                },
              ],
            },
        }
    ]
};

