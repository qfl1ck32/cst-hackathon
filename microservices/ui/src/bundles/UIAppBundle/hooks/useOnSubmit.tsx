import { useState } from "react";

export interface Props<Input, Return> {
  onSubmit: ((input: Input) => Promise<Return>) | (() => Promise<Return>);
  onError?: (error: any) => void;
}

function useOnSubmit<Input = any, Return = any>(props: Props<Input, Return>) {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (input?: Input) => {
    setIsLoading(true);

    try {
      // TODO: should work without input, too
      await props.onSubmit(input as any);
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

  return [onSubmit, isLoading] as [typeof onSubmit, boolean];
}

export default useOnSubmit;
