import { useCallback, useState } from 'react';

type AsyncFunction<TArgs extends any[], TResult> = (
  ...args: TArgs
) => Promise<TResult>;

interface UseAsyncResult<TResult> {
  pending: boolean;
  error: Error | null;
  requestFunction: (...args: any[]) => Promise<TResult | undefined>;
}

export default function useAsync<TArgs extends any[], TResult>(
  asyncFunction: AsyncFunction<TArgs, TResult>
): UseAsyncResult<TResult> {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const requestFunction = useCallback(
    async (...args: TArgs): Promise<TResult | undefined> => {
      try {
        setError(null);
        setPending(true);
        return await asyncFunction(...args);
      } catch (error) {
        setError(error as Error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return { pending, error, requestFunction };
}
