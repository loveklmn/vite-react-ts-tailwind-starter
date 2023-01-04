export interface InstanceObject {
  [key: string]: string;
}

/**
 * Convert JSON to url parameters
 * @param data JSON data
 * */
export const formatJsonToUrlParams = (data: InstanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};
