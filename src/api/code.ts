declare interface CodeMessageMapTypes {
  400: string;
  401: string;
  403: string;
  404: string;
  405: string;
  500: string;
  [key: string]: string;
}

const codeMessageMap: CodeMessageMapTypes = {
  400: '[400]: request error',
  401: '[401]: unauthorized',
  403: '[403]: forbidden',
  404: '[404]: resource not found',
  405: '[405]: method not allowed',
  500: '[500]: server error',
};

const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] || 'unknown error';
};

export default showCodeMessage;
