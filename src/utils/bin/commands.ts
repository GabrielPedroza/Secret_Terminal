// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  // window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

export const blog = async (args: string[]): Promise<string> => {
  window.open(`${config.blog}`);
  return 'Opening DevTo...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'               '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  
$$$$$$$$$$$$$$$$$$$$$$$$$$$$'                   '$$$$$$$$$$$$$$$$$$$$$$$$$$$$
$$$''$$$$$$$$$$$$$''$$$$$$!                       !$$$$$$''$$$$$$$$$$$$$''$$$
$$$$  $$$$$$$$$$$  $$$$$$$                         $$$$$$$  $$$$$$$$$$$  $$$$
$$$$. '$' \' \$'  $$$$$$$!                            !$$$$$$$  '$/ '/ '$' .$$$
$$$$$. !\  i  i .$$$$$$$$                            $$$$$$$$. i  i  /! .$$$$$
$$$$$$   '--'--.$$$$$$$$$                           $$$$$$$$$.--'--'   $$$$$$
$$$$$$L        '$$$$$^^$$                           $$^^$$$$$'        J$$$$$$
$$$$$$$.   .'   ""~   $$$    $.                 .$  $$$   ~""   '.   .$$$$$$$
$$$$$$$$.  ;      .e$$$$$!    $$.             .$$  !$$$$$e,      ;  .$$$$$$$$
$$$$$$$$$   '.$$$$$$$$$$$$     $$$.         .$$$   $$$$$$$$$$$$.'   $$$$$$$$$
$$$$$$$$    .$$$$$$$$$$$$$!     $$'$$$$$$$$'$$    !$$$$$$$$$$$$$.    $$$$$$$$
$JT&yd$     $$$$$$$$$$$$$$$$.    $    $$    $   .$$$$$$$$$$$$$$$$     $by&TL$
                                 $    $$    $
                                 $.   $$   .$
                                 '$        $'
                                  '$$$$$$$$'

Type 'help' to see the list of available commands.
Type 'blog' to see cool stuff i've written.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
