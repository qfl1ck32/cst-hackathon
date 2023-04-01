import { useState } from "react";

export interface Props<Input, Return> {
  onSubmit: (input: Input) => Promise<Return>;
  onError?: (error: any) => void;
}

function useOnSubmit<Input = any, Return = any>(props: Props<Input, Return>) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (input: Input) => {
    setIsLoading(true);

    try {
      await props.onSubmit(input);
    } catch (err) {
      if (props.onError) {
        props.onError(err);
      } else {
        throw err;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit, isLoading };
}

export default useOnSubmit;
