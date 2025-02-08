export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  "skXyj6mWNO3VG9ZCfICFzaVbHwRuh31zuQVFFgNV1K7Oft2W8EXEXD1O5Dj5McbrRVTItApiLaK5DFhBWdBswbecmClZPH1C0eha365t7AuJCohbEV2OONiHLFg3x0k3afqAreC2lbLZK7dJpNq3It8UXP34Wz6kBuMHyuAkE3vpDrOScVdD",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
