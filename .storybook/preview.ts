import '../app/globals.css';

const previewConfig = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    actions: {
      handles: ['onClick', 'onSubmit'],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default previewConfig;