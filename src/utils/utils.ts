export const getEnumFromMap = <
  T extends Record<string | number, unknown>,
  Q extends Record<keyof T, keyof T>,
>(
  map: T,
): Q =>
  Object.keys(map).reduce((obj, key) => {
    const value: string | number = Number.isNaN(+key) ? key : +key;
    Object.assign(obj, { [key]: value });
    return obj;
  }, {} as Q);

export const delay = (time: number) =>
  new Promise((rv) => {
    setTimeout(rv, time);
  });

export const format = (str: string, ...values: string[]) => {
  return values.reduce((result, value) => result.replace('%s', value), str);
};

export const logData = (data: any, message?: string) => {
  let log = data;
  if (typeof data === 'object') {
    const password = 'password' in data ? { password: '*****' } : undefined;
    log = { ...data, ...password };
  }
  message && console.log(`${message}\n`);
  console.log(log);
};
