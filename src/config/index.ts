const config = {
	baseURLForAPI: import.meta.env.VITE_PUBLIC_API_BASE_URL as string | null,
} as const;

export default config;
