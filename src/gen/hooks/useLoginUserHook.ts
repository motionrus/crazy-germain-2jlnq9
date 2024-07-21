import client from "@kubb/swagger-client/client";
import { useQuery, queryOptions, useInfiniteQuery, infiniteQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LoginUserQueryResponse, LoginUserQueryParams, LoginUser400 } from "../models/LoginUser";
import type { QueryObserverOptions, UseQueryResult, QueryKey, InfiniteQueryObserverOptions, UseInfiniteQueryResult, InfiniteData, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LoginUserClient = typeof client<LoginUserQueryResponse, LoginUser400, never>;
type LoginUser = {
    data: LoginUserQueryResponse;
    error: LoginUser400;
    request: never;
    pathParams: never;
    queryParams: LoginUserQueryParams;
    headerParams: never;
    response: LoginUserQueryResponse;
    client: {
        parameters: Partial<Parameters<LoginUserClient>[0]>;
        return: Awaited<ReturnType<LoginUserClient>>;
    };
};
export const loginUserQueryKey = (params?: LoginUser["queryParams"]) => [{ url: "/user/login" }, ...(params ? [params] : [])] as const;
export type LoginUserQueryKey = ReturnType<typeof loginUserQueryKey>;
export function loginUserQueryOptions(params?: LoginUser["queryParams"], options: LoginUser["client"]["parameters"] = {}) {
    const queryKey = loginUserQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LoginUser["data"], LoginUser["error"]>({
                method: "get",
                url: `/user/login`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Logs user into the system
 * @link /user/login
 */
export function useLoginUserHook<TData = LoginUser["response"], TQueryData = LoginUser["response"], TQueryKey extends QueryKey = LoginUserQueryKey>(params?: LoginUser["queryParams"], options: {
    query?: Partial<QueryObserverOptions<LoginUser["response"], LoginUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LoginUser["client"]["parameters"];
} = {}): UseQueryResult<TData, LoginUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? loginUserQueryKey(params);
    const query = useQuery({
        ...loginUserQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LoginUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const loginUserInfiniteQueryKey = (params?: LoginUser["queryParams"]) => [{ url: "/user/login" }, ...(params ? [params] : [])] as const;
export type LoginUserInfiniteQueryKey = ReturnType<typeof loginUserInfiniteQueryKey>;
export function loginUserInfiniteQueryOptions(params?: LoginUser["queryParams"], options: LoginUser["client"]["parameters"] = {}) {
    const queryKey = loginUserInfiniteQueryKey(params);
    return infiniteQueryOptions({
        queryKey,
        queryFn: async ({ pageParam }) => {
            const res = await client<LoginUser["data"], LoginUser["error"]>({
                method: "get",
                url: `/user/login`,
                ...options,
                params: {
                    ...params,
                    ["id"]: pageParam,
                    ...(options.params || {}),
                }
            });
            return res.data;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, _allPages, lastPageParam) => Array.isArray(lastPage) && lastPage.length === 0 ? undefined : lastPageParam + 1,
        getPreviousPageParam: (_firstPage, _allPages, firstPageParam) => firstPageParam <= 1 ? undefined : firstPageParam - 1
    });
}
/**
 * @summary Logs user into the system
 * @link /user/login
 */
export function useLoginUserHookInfinite<TData = InfiniteData<LoginUser["response"]>, TQueryData = LoginUser["response"], TQueryKey extends QueryKey = LoginUserInfiniteQueryKey>(params?: LoginUser["queryParams"], options: {
    query?: Partial<InfiniteQueryObserverOptions<LoginUser["response"], LoginUser["error"], TData, TQueryData, TQueryKey>>;
    client?: LoginUser["client"]["parameters"];
} = {}): UseInfiniteQueryResult<TData, LoginUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? loginUserInfiniteQueryKey(params);
    const query = useInfiniteQuery({
        ...loginUserInfiniteQueryOptions(params, clientOptions) as unknown as InfiniteQueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<InfiniteQueryObserverOptions, "queryKey">
    }) as UseInfiniteQueryResult<TData, LoginUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const loginUserSuspenseQueryKey = (params?: LoginUser["queryParams"]) => [{ url: "/user/login" }, ...(params ? [params] : [])] as const;
export type LoginUserSuspenseQueryKey = ReturnType<typeof loginUserSuspenseQueryKey>;
export function loginUserSuspenseQueryOptions(params?: LoginUser["queryParams"], options: LoginUser["client"]["parameters"] = {}) {
    const queryKey = loginUserSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LoginUser["data"], LoginUser["error"]>({
                method: "get",
                url: `/user/login`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @summary Logs user into the system
 * @link /user/login
 */
export function useLoginUserHookSuspense<TData = LoginUser["response"], TQueryKey extends QueryKey = LoginUserSuspenseQueryKey>(params?: LoginUser["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<LoginUser["response"], LoginUser["error"], TData, TQueryKey>>;
    client?: LoginUser["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LoginUser["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? loginUserSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...loginUserSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LoginUser["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}