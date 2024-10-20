/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'Installation',
      items: ['installation/linuxInstallationGuide', 'installation/windowsInstallationGuide', 'installation/macInstallationGuide'],
    },
    {
      type: 'category',
      label: 'Einführung',
      items: ['introduction', 'firststeps'],
    },
    {
      type: 'category',
      label: 'Übersicht',
      items: ['GUI-overview', 'adaption'],
    },

    {
      type: 'category',
      label: 'Grundfunktionen',
      items: ['recording', 'cut', 'postproduction', 'export'],
    },
    /* {
      type: 'category',
      label: 'Fortgeschrittene',
      items: ['advancedrecording'],
    }, */
    /* {
      type: 'doc',
      id: 'glossary', // document ID
      label: 'Glossar', // sidebar label
    },*/
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/bitfocus', 'tutorials/ultraschallStreamDeckPlugin'],
    },
    {
      type: 'doc',
      id: 'about', // document ID
      label: 'Über', // sidebar label
    },
    {
      type: 'doc',
      id: 'partcipants', // document ID
      label: 'Mitwirkende', // sidebar label
    },
    {
      type: 'doc',
      id: 'mithelfen-und-community', // document ID
      label: 'Mithelfen und Community', // sidebar label
    },
  ],


};
