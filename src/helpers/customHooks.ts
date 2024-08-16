type debouncedApiProps = {
  callback: () => void;
  delay: number;
};

const useGenericSearchApiHandle = (callback: any, delay: number) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  return (...args: any) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default useGenericSearchApiHandle;
