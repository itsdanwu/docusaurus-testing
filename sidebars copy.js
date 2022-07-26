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
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  introduction: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'pod-basics'],
    },
  ],
  smartcontracts: [
    {
      type: 'category',
      label: 'Smart Contracts',
      items: [
          'smart-contracts/metropolis-contracts',
          'smart-contracts/member-token',
          'smart-contracts/controller',
          'smart-contracts/rulemanager',
          'smart-contracts/safeteller'
      /*{
        type: 'category',
        label: 'Create Pods',
        collapsed: true,
        items: [
          'smart-contracts/creator-tools/intro',
          'smart-contracts/creator-tools/ZoraNFTCreator',
          'smart-contracts/creator-tools/ERC721Drop', 
          'smart-contracts/creator-tools/EditionMetadataRenderer', 
          'smart-contracts/creator-tools/DropMetadataRenderer'
        ],
      },
      {
        type: 'category',
        label: 'Guides',
        collapsed: false,
        items: ['guides/v3-approvals', 'guides/sell-nft-fixed-price'],
      }*/
    ],
    },
  ],
  sdk: [
    {
      type: 'category',
      label: 'Metropolis SDK',
      items: [
          'sdk/sdk-overview',
          'sdk/pod-objects',
          'sdk/proposal-objects'
      /*{
        type: 'category',
        label: 'Create Pods',
        collapsed: true,
        items: [
          'smart-contracts/creator-tools/intro',
          'smart-contracts/creator-tools/ZoraNFTCreator',
          'smart-contracts/creator-tools/ERC721Drop', 
          'smart-contracts/creator-tools/EditionMetadataRenderer', 
          'smart-contracts/creator-tools/DropMetadataRenderer'
        ],
      },
      {
        type: 'category',
        label: 'Guides',
        collapsed: false,
        items: ['guides/v3-approvals', 'guides/sell-nft-fixed-price'],
      }*/
    ],
    },
  ],  
}