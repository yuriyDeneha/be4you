// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBR7stq_51DzuolhPAiPJSn9adUanGrjxM',
    authDomain: 'be4you-project.firebaseapp.com',
    databaseURL: 'https://be4you-project.firebaseio.com',
    projectId: 'be4you-project',
    storageBucket: 'be4you-project.appspot.com',
    messagingSenderId: '1084111501849'
  }
};
