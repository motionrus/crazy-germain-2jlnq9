import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LogoutUserQueryResponse } from "../models/LogoutUser";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LogoutUserClient = typeof client<LogoutUserQueryResponse, never, never>;
type LogoutUser = {
    data: LogoutUserQueryResponse;
    error: never;
    request: never;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: LogoutUserQueryResponse;
    client: {
        parameters: Partial<Parameters<LogoutUserClient>[0]>;
        return: Awaited<ReturnType<LogoutUserClient>>;
    };
};
export const logoutUserQueryKey = () => [{ url: "/user/logout" }] as const;
export type LogoutUserQueryKey = ReturnType<typeof logoutUserQueryKey>;
export function logoutUserQueryOptions(options: LogoutUser["client"]["parameters"] = {}) {
    const queryKey = logoutUserQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LogoutUser["data"], LogoutUser["error"]>({
                method: "get",
                url: `/user/logout`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */
export function useLogoutUserHook<TData = LogoutUser["response"], TQueryData = LogoutUser["response"], TQueryKey extends QueryKey = LogoutUserQueryKey>(options: {
    query?: Partial<QueryObserverOptions<LogoutUser["response"], LogoutUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LogoutUser["client"]["parameters"];
} = {}): UseQueryResult<TData, LogoutUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? logoutUserQueryKey();
    const query = useQuery({
        ...logoutUserQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LogoutUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const logoutUserInfiniteQueryKey = () => [{ url: "/user/logout" }] as const;
export type LogoutUserInfiniteQueryKey = ReturnType<typeof logoutUserInfiniteQueryKey>;
export function logoutUserInfiniteQueryOptions(options: LogoutUser["client"]["parameters"] = {}) {
    const queryKey = logoutUserInfiniteQueryKey();
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<LogoutUser["data"], LogoutUser["error"]>({
                method: "get",
                url: `/user/logout`,
                ...options
            });
            return res.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, _allPages, lastPageParam) => Array.isArray(lastPage) && lastPage.length === 0 ? undefined : lastPageParam + 1,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1
    });
}
/**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */
export function useLogoutUserHookInfinite<TData = InfiniteData<LogoutUser["response"]>, TQueryData = LogoutUser["response"], TQueryKey extends QueryKey = LogoutUserInfiniteQueryKey>(options: {
    query?: Partial<InfiniteQueryObserverOptions<LogoutUser["response"], LogoutUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LogoutUser["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, LogoutUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? logoutUserInfiniteQueryKey();
    const query = useInfiniteQuery({
        ...logoutUserInfiniteQueryOptions(clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, LogoutUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const logoutUserSuspenseQueryKey = () => [{ url: "/user/logout" }] as const;
export type LogoutUserSuspenseQueryKey = ReturnType<typeof logoutUserSuspenseQueryKey>;
export function logoutUserSuspenseQueryOptions(options: LogoutUser["client"]["parameters"] = {}) {
    const queryKey = logoutUserSuspenseQueryKey();
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LogoutUser["data"], LogoutUser["error"]>({
                method: "get",
                url: `/user/logout`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */
export function useLogoutUserHookSuspense<TData = LogoutUser["response"], TQueryKey extends QueryKey = LogoutUserSuspenseQueryKey>(options: {
    query?: Partial<UseSuspenseQueryOptions<LogoutUser["response"], LogoutUser["error"], TData, TQueryKey>>;
    client?: LogoutUser["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LogoutUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? logoutUserSuspenseQueryKey();
    const query = useSuspenseQuery({
        ...logoutUserSuspenseQueryOptions(clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LogoutUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}