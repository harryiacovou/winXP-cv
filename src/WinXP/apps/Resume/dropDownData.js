const File = [
  {
    type: 'item',
    disable: true,
    text: 'Save',
  },
  {
    type: 'item',
    disable: true,
    text: 'Print...',
  },
  {
    type: 'separator',
  },
  {
    type: 'item',
    text: 'Exit',
  },
];
const Edit = [
  {
    type: 'item',
    disable: true,
    text: 'Copy',
  },
  {
    type: 'item',
    disable: true,
    text: 'Select All',
  },
];
const View = [
  {
    type: 'item',
    disable: true,
    text: 'Zoom',
  },
];
const Help = [
  {
    type: 'item',
    disable: true,
    text: 'About WordPad',
  },
];
const dropDownData = { File, Edit, View, Help };
export default dropDownData;
